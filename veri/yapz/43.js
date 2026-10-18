// YAPZ · 43 · MNIST: el yazısı rakam tanıma  (Kitap s. 193–201)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "5. Uygulama: TensorFlow/Keras ile evrişimli sinir ağı (CNN) kurup MNIST (60.000 eğitim + 10.000 test, 28×28 gri rakam) üzerinde eğitmek. Akış: veri yükle → şekiller → örnekleri çiz → kanal ekle ve 0–1'e normalize et → model (Conv2D+MaxPool ×2, Flatten, Dense, Dropout, Dense 10 softmax) → derle (Adam, sparse categorical crossentropy) → 10 epok eğit → kayıp/doğruluk grafikleri → tahmin → 100 test resmi → karışıklık matrisi. Test doğruluğu ~%99.",
    akis: ["CNN ve MNIST tanıtımı", "Uygulama 1–2: yükle, incele, çiz", "Uygulama 3: yeniden şekillendir, normalize et, modeli kur", "Uygulama 4: derle ve eğit (GPU açık: ~1 dk; CPU: ~2 dk)", "Uygulama 5: grafikler ve değerlendirme", "Uygulama 6–8: tahminler, hata matrisi", "Test"],
    hatalar: ["Kitaptaki <code>%tensorflow_version 2.x</code> artık Colab'da hata verir; silin.", "Kitapta modelin katmanlarını tanımlayan kod ve normalize satırı <b>basılmamış</b> (sadece metinde anlatılıyor). Çözüm kodunda tam hâli var: <code>x_train_normalized = x_train_with_chanels / 255</code> ve Sequential model.", "Kitapta <code>(_, IMAGE_WIDTH, IMAGE_HEIGHT) = x_train.shape IMAGE_CHANNELS = 1</code> tek satıra basılmış; iki satır olmalı.", "Kitap modeli .h5 olarak kaydediyor; yeni Keras'ta <code>.keras</code> uzantısı öneriliyor (h5 uyarı verir).", "Kitaptaki TensorBoard satırları isteğe bağlı; çıkarınca kod sadeleşir.", "Kitapta 196 resim çiziliyor (figsize 15×15); 100 resim ekrana daha iyi sığar."],
    sorular: [["Neden 255'e bölüyoruz?", "Piksel değerleri 0–255; 0–1 aralığına çekince ağ daha kararlı ve hızlı öğrenir (23. konudaki ölçekleme)."], ["Conv2D ne yapıyor?", "Resmin üzerinde küçük bir pencere (5×5 filtre) gezdirip kenar, köşe gibi desenleri yakalıyor. MaxPooling resmi küçültüp en belirgin değerleri tutuyor."], ["Neden %100 değil?", "Bazı rakamlar insan için bile belirsiz (4 mü 9 mu?). Kırmızı kutulara bakın."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 43-u1 · 1. adım
import tensorflow as tf
import matplotlib.pyplot as plt
import seaborn as sn
import numpy as np
import pandas as pd
import math, platform
print('Python version:', platform.python_version())
print('Tensorflow version:', tf.__version__)
print('Keras version:', tf.keras.__version__)

# 43-u1 · 2. adım
mnist_dataset = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist_dataset.load_data()
print('x_train:', x_train.shape)
print('y_train:', y_train.shape)
print('x_test:', x_test.shape)
print('y_test:', y_test.shape)

# 43-u1 · 3. adım
(_, IMAGE_WIDTH, IMAGE_HEIGHT) = x_train.shape
IMAGE_CHANNELS = 1
print('IMAGE_WIDTH:', IMAGE_WIDTH)
print('IMAGE_HEIGHT:', IMAGE_HEIGHT)
print('IMAGE_CHANNELS:', IMAGE_CHANNELS)

# 43-u2 · 4. adım
plt.figure(figsize=(5, 5))
plt.imshow(x_train[0], cmap=plt.cm.binary)
plt.colorbar()
plt.show()

# 43-u2 · 5. adım
numbers_to_display = 25
num_cells = math.ceil(math.sqrt(numbers_to_display))
plt.figure(figsize=(6, 6))
for i in range(numbers_to_display):
    plt.subplot(num_cells, num_cells, i + 1)
    plt.xticks([]); plt.yticks([]); plt.grid(False)
    plt.imshow(x_train[i], cmap=plt.cm.binary)
    plt.xlabel(y_train[i])
plt.show()

# 43-u3 · 6. adım
x_train_with_chanels = x_train.reshape(x_train.shape[0], IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS)
x_test_with_chanels = x_test.reshape(x_test.shape[0], IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS)
print('x_train_with_chanels:', x_train_with_chanels.shape)
print('x_test_with_chanels:', x_test_with_chanels.shape)
x_train_normalized = x_train_with_chanels / 255
x_test_normalized = x_test_with_chanels / 255
print(x_train_normalized[0][18].flatten())

# 43-u3 · 7. adım
model = tf.keras.models.Sequential([
    tf.keras.Input(shape=(IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS)),
    tf.keras.layers.Conv2D(8, kernel_size=5, activation='relu'),
    tf.keras.layers.MaxPooling2D(pool_size=2),
    tf.keras.layers.Conv2D(16, kernel_size=5, activation='relu'),
    tf.keras.layers.MaxPooling2D(pool_size=2),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10, activation='softmax')
])
model.summary(print_fn=lambda s, **k: print(s), line_length=72)

# 43-u4 · 8. adım
model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
              loss=tf.keras.losses.sparse_categorical_crossentropy,
              metrics=['accuracy'])
training_history = model.fit(x_train_normalized, y_train, epochs=10,
                             validation_data=(x_test_normalized, y_test), verbose=2)

# 43-u5 · 9. adım
plt.xlabel('Epoch Number'); plt.ylabel('Loss')
plt.plot(training_history.history['loss'], label='training set')
plt.plot(training_history.history['val_loss'], label='test set')
plt.legend(); plt.show()

# 43-u5 · 10. adım
plt.xlabel('Epoch Number'); plt.ylabel('Accuracy')
plt.plot(training_history.history['accuracy'], label='training set')
plt.plot(training_history.history['val_accuracy'], label='test set')
plt.legend(); plt.show()

# 43-u5 · 11. adım
train_loss, train_accuracy = model.evaluate(x_train_normalized, y_train, verbose=0)
print('Training loss: ', train_loss)
print('Training accuracy: ', train_accuracy)
validation_loss, validation_accuracy = model.evaluate(x_test_normalized, y_test, verbose=0)
print('Validation loss: ', validation_loss)
print('Validation accuracy: ', validation_accuracy)

# 43-u6 · 12. adım
model.save('digits_recognition_cnn.keras')
loaded_model = tf.keras.models.load_model('digits_recognition_cnn.keras')
predictions_one_hot = loaded_model.predict(x_test_normalized, verbose=0)
print('predictions_one_hot:', predictions_one_hot.shape)
pd.DataFrame(predictions_one_hot).head()

# 43-u6 · 13. adım
predictions = np.argmax(predictions_one_hot, axis=1)
print(predictions[0])
plt.figure(figsize=(3, 3))
plt.imshow(x_test_normalized[0].reshape((IMAGE_WIDTH, IMAGE_HEIGHT)), cmap=plt.cm.binary)
plt.show()

# 43-u7 · 14. adım
numbers_to_display = 100
num_cells = math.ceil(math.sqrt(numbers_to_display))
plt.figure(figsize=(8, 8))
for plot_index in range(numbers_to_display):
    predicted_label = predictions[plot_index]
    color_map = 'Greens' if predicted_label == y_test[plot_index] else 'Reds'
    plt.subplot(num_cells, num_cells, plot_index + 1)
    plt.xticks([]); plt.yticks([]); plt.grid(False)
    plt.imshow(x_test_normalized[plot_index].reshape((IMAGE_WIDTH, IMAGE_HEIGHT)), cmap=color_map)
    plt.xlabel(predicted_label)
plt.subplots_adjust(hspace=1, wspace=0.5)
plt.show()

# 43-u8 · 15. adım
confusion_matrix = tf.math.confusion_matrix(y_test, predictions)
f, ax = plt.subplots(figsize=(7, 5.5))
sn.heatmap(confusion_matrix, annot=True, linewidths=.5, fmt='d', square=True, ax=ax, annot_kws={'size': 7})
plt.show()`,
    not: "Hedef görseller güncel TensorFlow 2.21 ile üretildi; öğrencilerin sayıları biraz farklı çıkar (rastgele başlangıç)." },

  { tur: "bilgi", baslik: "MNIST ve evrişimli sinir ağı",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "✍️ MNIST", alt: "70.000 el yazısı rakam · 28×28 piksel · gri (0–255)" },
      { ust: "🏋️ Eğitim", alt: "60.000 resim" }, { ust: "🧪 Test", alt: "10.000 resim" },
      { ust: "🧠 CNN", alt: "Evrişimli sinir ağı: resimdeki desenleri öğrenen derin ağ" }
    ]},
    not: "Kütüphaneler: TensorFlow (model), Matplotlib (grafik), Seaborn (karışıklık matrisi), NumPy, Pandas, math." },

  { tur: "uygulama", baslik: "Veriyi yükle",
    metin: "Kitaptaki <code>%tensorflow_version 2.x</code> satırını yazma; artık gerek yok.",
    gorsel: { tip: "resim", yol: G + "43-u1.png" },
    adimlar: ["Kütüphaneleri içe aktar, Python/TensorFlow/Keras sürümlerini yazdır.", "tf.keras.datasets.mnist ile veriyi yükle, dört parçanın şeklini yazdır.", "Resim genişliği, yüksekliği ve kanal sayısını (1) sabitlere kaydet."],
    kitap: "s. 193–194 · 5. Uygulama" },

  { tur: "uygulama", baslik: "Rakamlara bak",
    gorsel: { tip: "resim", yol: G + "43-u2.png" },
    adimlar: ["İlk eğitim resmini renk çubuğuyla (colorbar) çiz.", "İlk 25 resmi 5×5 ızgarada, altlarına etiketleriyle çiz."],
    kitap: "s. 194–195" },

  { tur: "bilgi", baslik: "Model mimarisi",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🖼️", yazi: "Giriş", alt: "28×28×1" },
      { simge: "🔍", yazi: "Conv2D + MaxPool", alt: "8 filtre" },
      { simge: "🔍", yazi: "Conv2D + MaxPool", alt: "16 filtre" },
      { simge: "📏", yazi: "Flatten", alt: "vektöre çevir" },
      { simge: "🧠", yazi: "Dense 128 + Dropout" },
      { simge: "🔟", yazi: "Dense 10", alt: "softmax · 10 olasılık" }
    ]},
    not: "Çıkıştaki 10 nöronun her biri bir rakamın olasılığı (38. konu softmax)." },

  { tur: "uygulama", baslik: "Hazırla ve modeli kur",
    metin: "Kitapta model ve normalize kodu basılmamış. Normalize: <code>/ 255</code>. Model: yukarıdaki mimari (Sequential).",
    gorsel: { tip: "resim", yol: G + "43-u3.png" },
    adimlar: ["Verilere kanal boyutu ekle (reshape → 28, 28, 1), 255'e bölerek normalize et; ilk resmin 18. satırını yazdır.", "Sequential modeli kur ve model.summary() ile özetini yazdır."],
    kitap: "s. 195–196" },

  { tur: "uygulama", baslik: "Derle ve eğit",
    metin: "GPU'yu açmayı unutma (41. konu). 10 epok GPU ile yaklaşık 1 dakika.",
    gorsel: { tip: "resim", yol: G + "43-u4.png" },
    adimlar: ["Adam (learning_rate=0.001), sparse_categorical_crossentropy ve accuracy ile derle.", "10 epok eğit; doğrulama verisi olarak test setini ver."],
    kitap: "s. 196" },

  { tur: "uygulama", baslik: "Öğrenmeyi değerlendir",
    gorsel: { tip: "resim", yol: G + "43-u5.png" },
    adimlar: ["Eğitim ve test kaybını epoklara göre çiz.", "Eğitim ve test doğruluğunu epoklara göre çiz.", "model.evaluate ile eğitim ve test kaybı/doğruluğunu yazdır. Aşırı öğrenme var mı?"],
    kitap: "s. 196–197" },

  { tur: "uygulama", baslik: "Tahmin yap",
    gorsel: { tip: "resim", yol: G + "43-u6.png" },
    adimlar: ["Modeli kaydet (.keras), geri yükle, test setinin tamamı için tahmin yap; olasılık tablosunun ilk satırlarını göster.", "np.argmax ile en yüksek olasılıklı rakamı seç; ilk test resminin tahminini yazdır ve resmi çiz."],
    kitap: "s. 197–198" },

  { tur: "uygulama", baslik: "Doğrular yeşil, yanlışlar kırmızı",
    gorsel: { tip: "resim", yol: G + "43-u7.png" },
    adimlar: ["İlk 100 test resmini 10×10 ızgarada çiz; tahmin doğruysa Greens, yanlışsa Reds renk haritası kullan, altına tahmini yaz."],
    kitap: "s. 199" },

  { tur: "uygulama", baslik: "Karışıklık matrisi",
    gorsel: { tip: "resim", yol: G + "43-u8.png" },
    adimlar: ["tf.math.confusion_matrix ile hata matrisini hesapla, sns.heatmap ile çiz. Model en çok hangi rakamları karıştırıyor?"],
    kitap: "s. 200" },

  { tur: "test", sorular: [
    { soru: "MNIST'te bir resmin boyutu nedir?", secenekler: ["28×28", "32×32", "64×64", "784×784"], dogru: 0 },
    { soru: "Modelin çıkış katmanında neden 10 nöron var?", secenekler: ["10 epok eğitildiği için", "10 farklı rakam (sınıf) olduğu için", "10 katman olduğu için", "Rastgele seçildi"], dogru: 1 },
    { soru: "Tahmin olasılıklarından rakamı seçmek için hangi fonksiyon kullanılır?", secenekler: ["np.max", "np.argmax", "np.mean", "np.sum"], dogru: 1, kod: true },
    { soru: "Test doğruluğu eğitim doğruluğundan çok düşükse bu neyin göstergesidir?", secenekler: ["Zayıf öğrenme", "Aşırı öğrenme", "Mükemmel model", "Veri eksikliği yok"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kendi rakamını tanıt",
    adimlar: ["Kâğıda kalın kalemle bir rakam yaz, fotoğrafını çek, Colab'a yükle.", "Aşağıdaki kodla 28×28 griye çevir ve tahmin et. MNIST'te rakam beyaz, arka plan siyah olduğu için renkleri ters çeviriyoruz."],
    kod: `import cv2
r = cv2.imread('rakam.jpg', cv2.IMREAD_GRAYSCALE)
r = 255 - cv2.resize(r, (28, 28))
plt.imshow(r, cmap='binary'); plt.show()
olasilik = loaded_model.predict(r.reshape(1, 28, 28, 1) / 255)
print('Tahmin:', np.argmax(olasilik))`,
    not: "Tutmazsa: rakamı ortala, kenarlarda boşluk bırak, kalın yaz." }

]};
