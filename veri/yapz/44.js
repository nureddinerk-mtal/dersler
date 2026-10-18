// YAPZ · 44 · XOR kapısını öğrenen sinir ağı  (Kitap s. 201–207)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "6. Uygulama: hiçbir derin öğrenme kütüphanesi kullanmadan, sadece NumPy ile 2–2–1 bir sinir ağını geri yayılımla eğitmek. XOR: girişlerden biri 1 ise 1, ikisi aynıysa 0. Tek katmanlı algılayıcı XOR'u çözemez (düz bir çizgiyle ayrılamaz); gizli katman şart. Ağırlıklar seed=1 ile kitapla birebir aynı başlıyor ve eğitim sonrası değerler de aynı çıkıyor (W1 = [[1.32, −0.42], [−1.43, −1.67]]).",
    akis: ["XOR doğruluk tablosu", "Neden tek nöron yetmez? (düz çizgi çizdir)", "Ağ yapısı 2–2–1", "Uygulama 1: veri ve başlangıç ağırlıkları", "Uygulama 2: sigmoid", "Uygulama 3: ileri yayılım, eğitim, maliyet grafiği", "Meraklısına: gerçekten öğrendi mi?", "Test"],
    hatalar: ["Kitapta W1, W2 satırları Türkçe değişken adlarıyla basılmış (gizli katman sayısı…); doğrusu num_h_units, num_i_units.", "Kitapta B1 çıktısı hatalı basılmış: [[0.42], [0.69]] olmalı.", "Kitaptaki ayarlarla (oran 0.01, 5000 tekrar) maliyet sadece 0.72'den 0.66'ya iniyor; ağ XOR'u henüz <b>öğrenemiyor</b>. Kitap da “iterasyon sayısını artırın” diyor. Meraklısına slaytında oran 0.5 ve 50.000 tekrarla doğru sonuçlar çıkıyor.", "Kitapta girintiler kaybolmuş; train içindeki iki for döngüsünün hizası çok önemli (ağırlık güncellemesi dış döngüde)."],
    sorular: [["Neden kendimiz yazıyoruz, TensorFlow varken?", "43. konuda TensorFlow'un tek satırda yaptığı fit'in içinde tam olarak bu oluyor: ileri yayılım, hata, geri yayılım, güncelleme."], ["Maliyet neden düşmeli?", "Maliyet (kayıp) tahminlerin ne kadar yanlış olduğunu ölçer (40A). Eğitim onu küçültmek için yapılıyor."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 44-u1 · 1–2. adım
import numpy as np
import matplotlib.pyplot as plt
import sys
X = np.array([[0, 1], [1, 0], [1, 1], [0, 0]])
y = np.array([[1], [1], [0], [0]])
print(X); print(y)

# 44-u1 · 3. adım
num_i_units = 2
num_h_units = 2
num_o_units = 1
learning_rate = 0.01
reg_param = 0
max_iter = 5000
m = 4
np.random.seed(1)
W1 = np.random.normal(0, 1, (num_h_units, num_i_units))
W2 = np.random.normal(0, 1, (num_o_units, num_h_units))
B1 = np.random.random((num_h_units, 1))
B2 = np.random.random((num_o_units, 1))
print('W1 =', W1); print('W2 =', W2); print('B1 =', B1); print('B2 =', B2)

# 44-u2 · 4. adım
def sigmoid(z, derv=False):
    if derv: return z * (1 - z)
    return 1 / (1 + np.exp(-z))
z = np.linspace(-8, 8, 100)
plt.plot(z, sigmoid(z)); plt.grid(True); plt.title('Sigmoid')
plt.show()

# 44-u3 · 5–6. adım
def forward(x, predict=False):
    a1 = x.reshape(x.shape[0], 1)
    z2 = W1.dot(a1) + B1
    a2 = sigmoid(z2)
    z3 = W2.dot(a2) + B2
    a3 = sigmoid(z3)
    if predict: return a3
    return (a1, a2, a3)
cost = np.zeros((max_iter, 1))
def train(_W1, _W2, _B1, _B2):
    for i in range(max_iter):
        c = 0; dW1 = 0; dW2 = 0; dB1 = 0; dB2 = 0
        for j in range(m):
            a0 = X[j].reshape(X[j].shape[0], 1)
            z1 = _W1.dot(a0) + _B1
            a1 = sigmoid(z1)
            z2 = _W2.dot(a1) + _B2
            a2 = sigmoid(z2)
            dz2 = a2 - y[j]
            dW2 += dz2 * a1.T
            dz1 = np.multiply((_W2.T * dz2), sigmoid(a1, derv=True))
            dW1 += dz1.dot(a0.T)
            dB1 += dz1
            dB2 += dz2
            c = c + (-(y[j] * np.log(a2)) - ((1 - y[j]) * np.log(1 - a2)))
        _W1 = _W1 - learning_rate * (dW1 / m) + ((reg_param / m) * _W1)
        _W2 = _W2 - learning_rate * (dW2 / m) + ((reg_param / m) * _W2)
        _B1 = _B1 - learning_rate * (dB1 / m)
        _B2 = _B2 - learning_rate * (dB2 / m)
        cost[i] = (c / m) + ((reg_param / (2 * m)) * (np.sum(np.power(_W1, 2)) + np.sum(np.power(_W2, 2))))
    return (_W1, _W2, _B1, _B2)
W1, W2, B1, B2 = train(W1, W2, B1, B2)
print('W1 =', W1); print('W2 =', W2); print('B1 =', B1); print('B2 =', B2)

# 44-u3 · 7. adım
plt.plot(range(max_iter), cost)
plt.xlabel('yineleme'); plt.ylabel('maliyet')
plt.show()`,
    not: "Ölçme yok (birim testleri önceki konularda). Bu konu birimin ve yılın kapanışı: 13. konudaki “kuralları makine bulur” fikri burada en çıplak hâliyle görülüyor." },

  { tur: "bilgi", baslik: "XOR kapısı",
    gorsel: { tip: "tablo", ad: "XOR doğruluk tablosu", sutunlar: ["A", "B", "Q"], satirlar: [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 0]] },
    not: "Girişlerden tek sayıda 1 varsa çıkış 1. Bu dört noktayı düz bir çizgiyle iki gruba ayıramazsın; bu yüzden tek katmanlı algılayıcı XOR'u çözemez." },

  { tur: "bilgi", baslik: "Ağ yapısı: 2 – 2 – 1",
    gorsel: { tip: "resim", yol: G + "44-ag.png" },
    metin: "Eğitim döngüsü: önce <b>ileri</b> doğru çıktı hesaplanır, sonra hata <b>geriye</b> yayılarak ağırlıklar düzeltilir. Binlerce kez." },

  { tur: "uygulama", baslik: "Veri ve başlangıç ağırlıkları",
    gorsel: { tip: "resim", yol: G + "44-u1.png" },
    adimlar: ["NumPy, matplotlib ve sys'i içe aktar. X (4×2) girişleri ve y (4×1) etiketleri oluştur.", "Giriş 2, gizli 2, çıkış 1 birim; öğrenme oranı 0.01, reg_param 0, max_iter 5000, m 4. np.random.seed(1) ile W1 (2×2), W2 (1×2) normal dağılımdan; B1 (2×1), B2 (1×1) rastgele oluştur ve yazdır."],
    kitap: "s. 201–203 · 6. Uygulama" },

  { tur: "uygulama", baslik: "Sigmoid",
    gorsel: { tip: "resim", yol: G + "44-u2.png" },
    adimlar: ["derv=True ise türevini (z·(1−z)), değilse 1/(1+e⁻ᶻ) döndüren sigmoid fonksiyonunu yaz ve −8…8 aralığında çiz."],
    kitap: "s. 203" },

  { tur: "uygulama", baslik: "İleri yayılım, eğitim, maliyet",
    gorsel: { tip: "resim", yol: G + "44-u3.png" },
    adimlar: ["forward fonksiyonunu yaz (a1 → z2 → a2 → z3 → a3).", "cost dizisini ve train fonksiyonunu yaz: her tekrarda 4 örnek için ileri yayılım, hata, geri yayılım; sonra ağırlık ve bias güncellemesi.", "Eğit, yeni ağırlıkları yazdır. Maliyet–yineleme grafiğini çiz."],
    kitap: "s. 204–206" },

  { tur: "test", sorular: [
    { soru: "XOR'da A=1, B=1 iken çıkış kaçtır?", secenekler: ["0", "1", "2", "Tanımsız"], dogru: 0 },
    { soru: "XOR'u çözmek için neden gizli katman gerekir?", secenekler: ["Veri çok büyük olduğu için", "Sınıflar düz bir çizgiyle ayrılamadığı için", "Sigmoid kullanmak için", "Gerekmez"], dogru: 1 },
    { soru: "Ağırlıkların hatayı azaltacak şekilde geriye doğru düzeltilmesine ne denir?", secenekler: ["İleri yayılım", "Geri yayılım", "Normalleştirme", "Kümeleme"], dogru: 1 },
    { soru: "np.random.seed(1) satırının amacı?", secenekler: ["Eğitimi hızlandırmak", "Her çalıştırmada aynı rastgele sayıları almak", "Ağırlıkları sıfırlamak", "Hata ayıklamak"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Gerçekten öğrendi mi?",
    gorsel: { tip: "resim", yol: G + "44-m1.png" },
    kod: `max_iter = 50000; learning_rate = 0.5
np.random.seed(1)
W1 = np.random.normal(0, 1, (2, 2)); W2 = np.random.normal(0, 1, (1, 2))
B1 = np.random.random((2, 1)); B2 = np.random.random((1, 1))
cost = np.zeros((max_iter, 1))
W1, W2, B1, B2 = train(W1, W2, B1, B2)
for x in X:
    print(x, '→', round(float(forward(x, predict=True)[0, 0]), 3))`,
    not: "Kitaptaki ayarlarla ağ henüz öğrenemiyor (maliyet 0.66). Öğrenme oranını ve tekrar sayısını artırınca tahminler 1, 1, 0, 0'a çok yaklaşıyor. 40A'daki öğrenme oranı denemesinin aynısı." }

]};
