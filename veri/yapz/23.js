// YAPZ · 23 · Veriyi bölme ve ölçekleme  (Kitap s. 117–118)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Denetimli öğrenmede veri dört parçaya ayrılır: X_train, X_test, y_train, y_test (train_test_split; test_size, random_state). Sonra ölçekleme: normalleştirme (0–1) ve standartlaştırma (ortalama 0, std 1). Sayısal olarak büyük sütunların modeli domine etmesini önler.",
    akis: ["Dört parça şeması", "test_size ve random_state", "Uygulama: iris'i böl, ölçekle, normalleştir", "Sıra Sizde: Boston", "Test"],
    hatalar: ["Kitapta test seti için de <code>sc.fit_transform(X_test)</code> yazılmış. Doğrusu test için sadece <code>sc.transform(X_test)</code>: ölçek eğitim verisinden öğrenilir, teste aynen uygulanır (veri sızıntısı).", "train_test_split'in dönüş sırasını karıştırmak: X_train, X_test, y_train, y_test.", "random_state vermeyince her çalıştırmada farklı sonuç çıkıp “bende niye farklı” sorusu."],
    sorular: [["random_state neden 0, 42?", "Herhangi bir sayı olabilir; aynı sayı hep aynı bölmeyi verir. Sonuçları karşılaştırmak için sabitlenir."], ["Her zaman ölçeklemek gerekir mi?", "Uzaklığa dayalı (K-NN, SVM) algoritmalarda çok önemli. Karar ağaçları ölçekten etkilenmez."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 23-u1 · 1. adım
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
iris = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')
X_train, X_test, y_train, y_test = train_test_split(iris.loc[:, ['petal_length','petal_width','sepal_width','sepal_length']], iris.loc[:, 'species'], test_size=0.33, random_state=0)
print('X_train:', X_train.shape, ' X_test:', X_test.shape)
print('y_train:', y_train.shape, '   y_test:', y_test.shape)

# 23-u1 · 2. adım
X_train.head()

# 23-u1 · 3. adım
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train_s = sc.fit_transform(X_train)
X_test_s = sc.transform(X_test)
print(X_train_s[:5])

# 23-u1 · 4. adım
from sklearn.preprocessing import normalize
print(normalize(X_train)[:5])`,
    not: "Boston veri seti scikit-learn'den kaldırıldı (etik nedenlerle). Malzemede BostonHousing.csv var: medv sütunu ev fiyatı (bin $)." },

  { tur: "bilgi", baslik: "Dört parça",
    gorsel: { tip: "html", icerik: `<table style="border-collapse:separate;border-spacing:4px;font:600 14px sans-serif;color:#fff;text-align:center">
      <tr><td></td><td style="color:#333">Özellikler (X)</td><td style="color:#333">Etiket (y)</td></tr>
      <tr><td style="color:#333;padding-right:8px">Eğitim</td><td style="background:#2f80ed;padding:26px 50px;border-radius:6px">X_train</td><td style="background:#27ae60;padding:26px 24px;border-radius:6px">y_train</td></tr>
      <tr><td style="color:#333;padding-right:8px">Test</td><td style="background:#2f80ed;opacity:.7;padding:12px 50px;border-radius:6px">X_test</td><td style="background:#27ae60;opacity:.7;padding:12px 24px;border-radius:6px">y_test</td></tr></table>` },
    kod: `X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=0)`,
    not: "test_size: varsayılan 0,25; genelde 0,20–0,33. random_state: hep aynı bölme. Sınıf oranları eğitim ve testte benzer olmalı." },

  { tur: "bilgi", baslik: "Ölçekleme",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Normalleştirme", alt: "Değerleri 0–1 arasına eşler · normalize" },
      { ust: "Standartlaştırma", alt: "Ortalama 0, standart sapma 1 · StandardScaler" }
    ]},
    not: "Örnek: yıl olarak çalışma süresi (1–40) ile dört haneli ücret aynı veri setindeyse ücret modeli domine eder." },

  { tur: "uygulama", baslik: "Böl ve ölçekle",
    metin: "Test setine <code>fit_transform</code> değil <code>transform</code> uygula.",
    gorsel: { tip: "resim", yol: G + "23-u1.png" },
    adimlar: ["iris'i dört özellik ve species etiketi olarak test_size=0.33, random_state=0 ile böl; parçaların şekillerini yazdır.", "X_train'in ilk satırlarına bak (karışık sıra!).", "StandardScaler: eğitime fit_transform, teste transform. İlk 5 satırı yazdır.", "normalize ile normalleştir, ilk 5 satırı yazdır."],
    kitap: "s. 117–118 · 58–60. Örnek" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Boston ev fiyatları veri setinde scikit-learn ile veri ön işleme yap: yükle, incele (info, describe), eksik veriye bak, özellikleri (X) ve fiyatı (y = medv) ayır, böl ve ölçekle.",
    malzeme: ["BostonHousing.csv"],
    kitap: "s. 118" },

  { tur: "test", sorular: [
    { soru: "📖 <code>from sklearn.preprocessing import normalize</code> ile ilgili hangisi doğrudur?", secenekler: ["“normalize” modülü “sklearn”ün üstünde yer alır.", "Makine öğrenmesi modelini belirlemek için kullanılır.", "Değerleri 0-100 aralığına dönüştürür.", "Değerlerin ortalamasını 0, standart sapmasını 1'e eşler.", "Scikit-learn'den normalize modülünü içe aktarmak için kullanılır."], dogru: 4 },
    { soru: "Ortalama 0, standart sapma 1 olacak şekilde dönüştüren hangisi?", secenekler: ["normalize", "StandardScaler", "LabelEncoder", "SimpleImputer"], dogru: 1 },
    { soru: "150 satırlık veride test_size=0.2 ise test setinde kaç satır olur?", secenekler: ["20", "30", "50", "120"], dogru: 1 },
    { soru: "Modelin performansını ölçmek için tahminleri neyle karşılaştırırız?", secenekler: ["X_train", "y_train", "X_test", "y_test"], dogru: 3, kod: true }
  ]},

  { tur: "merak", baslik: "stratify: oranları koru",
    kod: `train_test_split(X, y, test_size=0.2, random_state=0, stratify=y)`,
    not: "stratify=y ile her türden eğitime ve teste aynı oranda örnek düşer. Kitaptaki “sınıf oranları benzer olmalı” uyarısının kodu." }

]};
