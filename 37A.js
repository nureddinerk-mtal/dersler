// YAPZ · 37A · Tensörler: sinir ağının veri kutuları  (Kitap dışı ek konu)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Kitap dışı konu (sınavda sorumlu değiller). Kitap aktivasyon fonksiyonlarının “tensörlere etki ettiğini” söylüyor ve 43. konuda (28, 28, 1) gibi şekiller kullanıyor ama tensörü hiç açıklamıyor. Bu ders o boşluğu dolduruyor: skaler (0B), vektör (1B), matris (2B), 3B+ tensör; ndim ve shape; resim ve resim paketi birer tensör. Son kısımda TensorFlow'un tf.constant'ı.",
    akis: ["Tensör basamakları kartı", "Uygulama 1: NumPy ile 0–3 boyut, renkli/gri resim, resim paketi", "MNIST şekilleri (43'e köprü)", "Uygulama 2: TensorFlow tensörü ve işlemleri", "Test"],
    hatalar: ["shape ile ndim'i karıştırmak: ndim kaç boyut, shape her boyutta kaç eleman.", "(3,) ile (3,1)'in aynı olduğunu sanmak: ilki 1B vektör, ikincisi 3 satır 1 sütunluk matris.", "TensorFlow tensörünün değiştirilemez olduğunu bilmemek (tf.constant); değişen için tf.Variable."],
    sorular: [["TensorFlow adı nereden geliyor?", "Tensörlerin (verinin) katmanlar arasında akmasından (flow)."], ["Neden 4 boyut: (32, 28, 28, 1)?", "Paketteki resim sayısı, yükseklik, genişlik, renk kanalı."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 37A-u1 · 1. adım
import numpy as np
skaler = np.array(7)
vektor = np.array([3, 1, 4])
matris = np.array([[1, 2, 3], [4, 5, 6]])
for ad, t in [('skaler', skaler), ('vektör', vektor), ('matris', matris)]:
    print(ad, '→ ndim:', t.ndim, ' shape:', t.shape)

# 37A-u1 · 2. adım
kup = np.arange(24).reshape(2, 3, 4)
print(kup)
print('ndim:', kup.ndim, ' shape:', kup.shape)

# 37A-u1 · 3. adım
from scipy import datasets
resim = datasets.face()
print('Renkli resim:', resim.shape)
gri = resim.mean(axis=2)
print('Gri resim  :', gri.shape)
print('32 resimlik paket:', np.zeros((32, 28, 28, 1)).shape)

# 37A-u2 · 4. adım
import os; os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
import tensorflow as tf
t = tf.constant([[1., 2.], [3., 4.]])
print(t)
print(t.shape, t.dtype)

# 37A-u2 · 5. adım
print(t + 10)
print(t * 2)
print(tf.matmul(t, t))`,
    not: "TensorFlow Colab'da kurulu gelir. 05–08. konulardaki NumPy bilgisi yeter." },

  { tur: "bilgi", baslik: "Tensör = çok boyutlu sayı kutusu",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "0B · skaler", alt: "7 · shape ()" },
      { ust: "1B · vektör", alt: "[3, 1, 4] · shape (3,)" },
      { ust: "2B · matris", alt: "tablo · shape (2, 3)" },
      { ust: "3B · tensör", alt: "renkli resim · (768, 1024, 3)" },
      { ust: "4B · tensör", alt: "resim paketi · (32, 28, 28, 1)" }
    ]},
    not: "Sinir ağına giren, katmanlar arasında akan ve çıkan her şey tensördür. Ağırlıklar da." },

  { tur: "uygulama", baslik: "NumPy ile tensörler",
    gorsel: { tip: "resim", yol: G + "37A-u1.png" },
    adimlar: ["Skaler, vektör ve matris oluştur; her birinin ndim ve shape değerini yazdır.", "0–23 sayılarını (2, 3, 4) şeklinde 3B tensöre çevir.", "18. konudaki rakun resminin şeklini yazdır; renk kanallarının ortalamasıyla gri resim yap; 32 tane 28×28 gri resimlik boş paketin şeklini yazdır."] },

  { tur: "bilgi", baslik: "43. konuda göreceğin şekiller",
    gorsel: { tip: "tablo", ad: "MNIST", sutunlar: ["Değişken", "Şekil", "Anlamı"], satirlar: [
      ["x_train", "(60000, 28, 28)", "60.000 tane 28×28 resim"], ["y_train", "(60000,)", "her resmin etiketi (0–9)"],
      ["x_train (kanallı)", "(60000, 28, 28, 1)", "evrişim katmanı kanal ister"], ["tahminler", "(10000, 10)", "her resim için 10 olasılık"]] } },

  { tur: "uygulama", baslik: "TensorFlow tensörü",
    gorsel: { tip: "resim", yol: G + "37A-u2.png" },
    adimlar: ["tf.constant ile 2×2 ondalıklı tensör oluştur; kendisini, şeklini ve veri tipini yazdır.", "Tensöre 10 ekle, 2 ile çarp, kendisiyle matris çarpımı yap (tf.matmul)."] },

  { tur: "test", sorular: [
    { soru: "np.array([[1,2,3],[4,5,6]]).shape nedir?", secenekler: ["(3, 2)", "(2, 3)", "(6,)", "2"], dogru: 1, kod: true },
    { soru: "Renkli bir resim kaç boyutlu tensördür?", secenekler: ["1", "2", "3", "4"], dogru: 2 },
    { soru: "(32, 28, 28, 1) şeklindeki tensörde 32 neyi gösterir?", secenekler: ["Renk kanalı", "Genişlik", "Paketteki resim sayısı", "Katman sayısı"], dogru: 2 },
    { soru: "Bir skalerin ndim değeri kaçtır?", secenekler: ["0", "1", "2", "Tanımsız"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Nöron katmanı = matris çarpımı",
    kod: `x = tf.constant([[1., 0., 1.]])          # 1 örnek, 3 girdi
W = tf.random.normal((3, 4))             # 3 girdi → 4 nöron
b = tf.zeros(4)
print(tf.nn.relu(tf.matmul(x, W) + b))   # 4 nöronun çıktısı`,
    not: "37. konudaki tek nöron hesabı, 4 nöron için tek satırda. Sinir ağları bu yüzden GPU'yu sever: matris çarpımı paralel yapılır." }

]};
