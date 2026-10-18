// YAPZ · 21 · Scikit-learn: veri yükleme ve inceleme  (Kitap s. 100–106)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "scikit-learn: Python'un temel ML kütüphanesi; süreç uçtan uca yapılabilir. Beş aşama: veri toplama → ön işleme → model → değerlendirme → dağıtım. Bu konuda veri toplama ve ilk inceleme: iris veri seti üç farklı yoldan yükleniyor (Seaborn, URL'den CSV, sklearn.datasets), sonra info/describe ve grafiklerle inceleniyor.",
    akis: ["Beş aşama akışı", "İris veri seti tanıtımı (çanak/taç yaprak)", "Uygulama 1: sürüm + üç yükleme yolu", "Uygulama 2: info, describe", "Uygulama 3–4: türlere göre grafikler, PairGrid", "Test"],
    hatalar: ["Kitaptaki URL <code>seaborndata</code> diye bitişik basılmış; doğrusu <code>https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv</code> (tireli).", "sepal (çanak yaprak) ile petal (taç yaprak) karıştırılıyor.", "load_iris çıktısı NumPy dizisi; DataFrame yapmak için columns=veri.feature_names verilmeli."],
    sorular: [["Kaggle'dan indirdiğim iris neden farklı?", "Kaggle sürümünde Id sütunu var ve tür adları Iris-setosa biçiminde. İçerik aynı."], ["Hangi yükleme yolu daha iyi?", "Fark yok. Kendi verin için pd.read_csv, hızlı deneme için hazır veri setleri."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 21-u1 · 1. adım
import numpy as np, pandas as pd, matplotlib.pyplot as plt, seaborn as sns
import sklearn
print('Versiyon:', sklearn.__version__)

# 21-u1 · 2. adım
iris = sns.load_dataset('iris')
print(type(iris))
iris.head()

# 21-u1 · 3. adım
from sklearn.datasets import load_iris
veri = load_iris()
print(type(veri.data))
df = pd.DataFrame(veri.data, columns=veri.feature_names)
df.head()

# 21-u2 · 4. adım
iris.info()

# 21-u2 · 5. adım
iris.describe()

# 21-u3 · 6. adım
sns.set_theme()
sns.relplot(data=iris, x='sepal_length', y='sepal_width', hue='species', height=3.6)
plt.show()

# 21-u3 · 7. adım
sns.catplot(x='species', y='petal_length', kind='box', data=iris, height=3.6)
plt.show()

# 21-u4 · 8. adım
g = sns.PairGrid(iris, hue='species', height=1.5)
g.map_upper(sns.scatterplot)
g.map_lower(sns.kdeplot, fill=True)
g.map_diag(sns.histplot, kde=True)
g.add_legend()
plt.show()`,
    not: "Ölçme soruları 10, 12 ve 18 bu konuya uygun." },

  { tur: "bilgi", baslik: "Makine öğrenmesi süreci (scikit-learn)",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📦", yazi: "Veri toplama", alt: "CSV, Kaggle, hazır veri setleri" },
      { simge: "🧹", yazi: "Veri ön işleme", alt: "yükle, incele, temizle" },
      { simge: "🧠", yazi: "Model oluşturma" },
      { simge: "📊", yazi: "Değerlendirme" },
      { simge: "🚀", yazi: "Dağıtım" }
    ]},
    not: "Kütüphaneleri <code>from … import …</code> ile ihtiyaç kadar içe aktar." },

  { tur: "bilgi", baslik: "İris veri seti",
    metin: "Üç iris türü (setosa, versicolor, virginica), her çiçek için dört ölçü (cm).",
    gorsel: { tip: "tablo", ad: "iris", sutunlar: ["sepal_length", "sepal_width", "petal_length", "petal_width", "species"], satirlar: [["5.1", "3.5", "1.4", "0.2", "setosa"], ["7.0", "3.2", "4.7", "1.4", "versicolor"], ["6.3", "3.3", "6.0", "2.5", "virginica"]] },
    not: "sepal = çanak yaprak (alttaki), petal = taç yaprak (üstteki). Dört ölçü özellik, tür etikettir." },

  { tur: "uygulama", baslik: "Üç yoldan veri yükle",
    gorsel: { tip: "resim", yol: G + "21-u1.png" },
    adimlar: ["Kütüphaneleri içe aktar, scikit-learn sürümünü yazdır.", "iris'i Seaborn'dan yükle; türünü ve ilk satırlarını göster. (Aynısı pd.read_csv ile URL'den de olur.)", "load_iris ile yükle, veri.data'nın türünü yazdır ve DataFrame'e çevir."],
    kitap: "s. 100–102 · 32–36. Örnek" },

  { tur: "uygulama", baslik: "Veriyi incele",
    gorsel: { tip: "resim", yol: G + "21-u2.png" },
    adimlar: ["info ile veri tipleri ve eksik veri.", "describe ile özet istatistikler."],
    kitap: "s. 103 · 37–38. Örnek" },

  { tur: "uygulama", baslik: "Türleri grafikle karşılaştır",
    gorsel: { tip: "resim", yol: G + "21-u3.png" },
    adimlar: ["sns.set_theme(); türlere göre renkli sepal_length – sepal_width saçılım grafiği (relplot).", "Türlere göre petal_length kutu grafiği (catplot, kind='box')."],
    kitap: "s. 104–105 · 39–40. Örnek" },

  { tur: "uygulama", baslik: "Eşleştirme grafiği",
    gorsel: { tip: "resim", yol: G + "21-u4.png" },
    adimlar: ["PairGrid(iris, hue='species'): üst scatter, alt KDE, köşegen histogram. Hangi özellik türleri en iyi ayırıyor?"],
    kitap: "s. 106 · 41. Örnek" },

  { tur: "test", sorular: [
    { soru: "📖 Python kodlarını yazmak için kullanılan etkileşimli not defteri hangisidir?", secenekler: ["IDLE", "Jupyter", "Mars", "Neptun", "Spyder"], dogru: 1 },
    { soru: "📖 Not defterinde bir paket kurmak için hangi komut kullanılmalıdır?", secenekler: ["install", "pip install", "setup lib", "!install", "!pip install"], dogru: 4, kod: true },
    { soru: "📖 Pandas'ta sütunlarla ilgili hangisi doğrudur?", secenekler: ["“column_names” sütun adlarını verir.", "Birden fazla sütun seçilebilir.", "“iloc” ile sütun adları kullanılır.", "“loc” ile indis numaraları kullanılır.", "Sütun adları değiştirilemez."], dogru: 1 },
    { soru: "Grafiklere göre türleri en iyi ayıran özellik hangisi?", secenekler: ["sepal_width", "sepal_length", "petal_length", "Hiçbiri ayırmıyor"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "sample ile rastgele satırlar",
    kod: `iris.sample(5)          # her çalıştırmada farklı 5 satır
iris['species'].value_counts()`,
    not: "value_counts her türden kaç örnek olduğunu gösterir (50–50–50). Dengeli veri seti." }

]};
