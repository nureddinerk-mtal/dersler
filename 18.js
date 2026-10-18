// YAPZ · 18 · SciPy  (Kitap s. 84–86)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Makine öğrenmesi kütüphanelerine giriş: bilimsel (NumPy, SciPy), veri bilimi (Pandas), görselleştirme (Matplotlib, Seaborn), ML (scikit-learn). Hepsi Python'un üstüne kurulu. SciPy NumPy üzerine inşa edilmiş; örnek resim bir NumPy dizisi (768 × 1024 × 3, RGB 0–255).",
    akis: ["Kütüphane haritası", "SciPy alt modülleri", "Uygulama: sürüm, örnek resim, boyut/tip/şekil, resmi çiz", "Test"],
    hatalar: ["Kitaptaki <code>from scipy import misc; misc.face()</code> artık çalışmıyor (SciPy 1.10'da kaldırıldı). Yerine <code>from scipy import datasets; datasets.face()</code>. İlk çalıştırmada internetten indirir; Colab'da sorun yok, kendi bilgisayarında <code>pooch</code> paketi gerekebilir.", "Kitapta tırnaklar “akıllı tırnak” basılmış, kopyalanırsa SyntaxError verir."],
    sorular: [["Resim neden 3 boyutlu?", "Satır × sütun × renk kanalı (kırmızı, yeşil, mavi). Her piksel 3 sayı."], ["uint8 ne?", "0–255 arası işaretsiz 8 bitlik tam sayı. Renk değerleri için yeterli."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 18-u1 · 1. adım
import scipy
print(scipy.__version__)

# 18-u1 · 2. adım
from scipy import datasets
import numpy as np
img = datasets.face()
print(type(img))
print(img)

# 18-u1 · 3. adım
print("Dizinin boyutu:", img.ndim)
print("Dizi veri tipi:", img.dtype)
print("Dizi şekil:", img.shape)

# 18-u1 · 4. adım
import matplotlib.pyplot as plt
plt.imshow(img)
plt.show()`,
    not: "Sürüm numarası öğrencide farklı çıkar (kitapta 1.4.1, şu an 1.1x)." },

  { tur: "bilgi", baslik: "Kütüphane ailesi",
    gorsel: { tip: "agac", kok: { ad: "Python", cocuklar: [
      { ad: "Bilimsel / istatistik", alt: "NumPy, SciPy" },
      { ad: "Veri bilimi", alt: "Pandas" },
      { ad: "Görselleştirme", alt: "Matplotlib, Seaborn" },
      { ad: "Makine öğrenmesi", alt: "scikit-learn" }
    ], yan: true } },
    not: "scikit-learn bir SciPy eklentisi, Seaborn Matplotlib tabanlı." },

  { tur: "bilgi", baslik: "SciPy alt modülleri",
    metin: "SciPy = <i>Scientific Python</i>. Kurulum: <code>!pip install scipy</code> (Colab ve Anaconda'da hazır gelir).",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "scipy.stats", alt: "İstatistik, rastgele sayılar" },
      { ust: "scipy.optimize", alt: "Optimizasyon ve uyum" },
      { ust: "scipy.ndimage", alt: "Görüntü işleme" },
      { ust: "scipy.signal", alt: "Sinyal işleme" },
      { ust: "scipy.linalg", alt: "Lineer cebir" },
      { ust: "scipy.integrate", alt: "Sayısal integral" },
      { ust: "scipy.interpolate", alt: "İnterpolasyon" },
      { ust: "scipy.fftpack", alt: "Hızlı Fourier dönüşümü" },
      { ust: "scipy.io", alt: "Dosya girdi/çıktı" },
      { ust: "scipy.special", alt: "Özel fonksiyonlar" }
    ]}},

  { tur: "uygulama", baslik: "Resim bir sayı dizisidir",
    metin: "Kitaptaki <code>misc.face()</code> kaldırıldı. Yerine <code>from scipy import datasets</code> ve <code>datasets.face()</code> kullan.",
    gorsel: { tip: "resim", yol: G + "18-u1.png" },
    adimlar: ["SciPy sürümünü yazdır.", "Örnek rakun resmini yükle, türünü ve kendisini yazdır.", "Dizinin boyut sayısını, veri tipini ve şeklini yazdır.", "Resmi plt.imshow ile çiz."],
    kitap: "s. 84–85 · 10–13. Örnek" },

  { tur: "bilgi", baslik: "Bir piksel",
    gorsel: { tip: "parcala", parcalar: [ { yazi: "138", etiket: "R · kırmızı", renk: "#eb5757" }, { yazi: "129", etiket: "G · yeşil", renk: "#27ae60" }, { yazi: "148", etiket: "B · mavi", renk: "#2f80ed" } ] },
    not: "768 satır × 1024 sütun piksel, her biri 3 sayı: shape = (768, 1024, 3)." },

  { tur: "test", sorular: [
    { soru: "📖 Diziler ve cebirsel işlemler için kullanılan temel kütüphane hangisidir?", secenekler: ["Matplotlib", "NumPy", "Pandas", "Python", "SciPy"], dogru: 1 },
    { soru: "SciPy hangi kütüphanenin üzerine inşa edilmiştir?", secenekler: ["Pandas", "Seaborn", "NumPy", "scikit-learn"], dogru: 2 },
    { soru: "Görüntü işleme için hangi SciPy modülü kullanılır?", secenekler: ["scipy.stats", "scipy.ndimage", "scipy.io", "scipy.linalg"], dogru: 1 },
    { soru: "img.shape sonucu (768, 1024, 3) ise resimde kaç piksel vardır?", secenekler: ["768", "1024", "786.432", "2.359.296"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Rakunu bulanıklaştır",
    kod: `from scipy import ndimage
bulanik = ndimage.gaussian_filter(img, sigma=(8, 8, 0))
plt.imshow(bulanik)
plt.show()`,
    not: "sigma büyüdükçe bulanıklık artar. 42A konusunda OpenCV ile çok daha fazlasını yapacağız." }

]};
