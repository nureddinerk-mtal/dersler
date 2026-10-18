// YAPZ · 26 · Pipeline (iş hattı)  (Kitap s. 124–125)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "İş hattı (Pipeline) ML sürecini otomatikleştirir: ölçekleme + model tek nesnede, tek fit, tek score. Kitabın 1. Uygulaması: make_classification ile sentetik veri, StandardScaler + SVC, skor 0.88. Konu sonunda sık kullanılan algoritmalar listesi.",
    akis: ["İş hattı şeması", "1. Uygulama (5 adım)", "Neden iş hattı? (veri sızıntısını önler)", "Sıra Sizde", "Test"],
    hatalar: ["Pipeline adımlarını (isim, nesne) demeti olarak değil düz liste yazmak.", "Kitapta 4. adımdaki ikinci Pipeline satırı aslında çıktı; tekrar yazmaya gerek yok.", "make_classification'ı gerçek veri seti sanmak; rastgele üretilmiş örnek veridir."],
    sorular: [["Pipeline içine başka ne konur?", "SimpleImputer, OneHotEncoder, PCA… Son adım her zaman model olmalı."], ["Modeli değiştirmek istersem?", "('svc', SVC()) yerine ('knn', KNeighborsClassifier()) yazmak yeterli; gerisi aynı."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 26-u1 · 1–3. adım
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
X, y = make_classification(random_state=0)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
print(X_train.shape, X_test.shape)

# 26-u1 · 4. adım
pipe = Pipeline([('scaler', StandardScaler()), ('svc', SVC())])
pipe.fit(X_train, y_train)

# 26-u1 · 5. adım
pipe.score(X_test, y_test)`,
    not: "Ölçme sorusu 30 (cevap D, pipeline) bu konudan." },

  { tur: "bilgi", baslik: "İş hattı",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🧹", yazi: "Veri temizleme" }, { simge: "🎯", yazi: "Özellik seçimi" }, { simge: "🩹", yazi: "Eksik veri" },
      { simge: "🔁", yazi: "Dönüştürme" }, { simge: "📐", yazi: "Ölçekleme" }, { simge: "🧠", yazi: "Model eğitimi" }, { simge: "📊", yazi: "Değerlendirme" }
    ]},
    kod: `pipe = Pipeline([('scaler', StandardScaler()), ('svc', SVC())])` },

  { tur: "uygulama", baslik: "1. Uygulama · Pipeline",
    gorsel: { tip: "resim", yol: G + "26-u1.png" },
    adimlar: ["SVC ve StandardScaler'ı içe aktar.", "make_classification ve train_test_split'i içe aktar.", "Pipeline'ı içe aktar; X, y üret (random_state=0) ve dörde böl. Şekilleri yazdır.", "Ölçekleme + SVC iş hattı tanımla ve eğit.", "Test skoruna bak."],
    kitap: "s. 124 · 1. Uygulama" },

  { tur: "bilgi", baslik: "Sık kullanılan algoritmalar",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "K-NN", alt: "32. konu" }, { ust: "Karar ağacı", alt: "33. konu" }, { ust: "SVM", alt: "34. konu" },
      { ust: "K-Means", alt: "25. konu" }, { ust: "PCA", alt: "boyut indirgeme" }, { ust: "Apriori", alt: "birliktelik" }
    ]},
    not: "Regresyon yöntemleri 27–31. konularda." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Önceki çalışmalarından bir veri setiyle (örneğin iris) scikit-learn ile modelleme ve iş hattı tanımla: ölçekleme + bir sınıflandırıcı, eğit, skorunu yazdır. Sonra modeli değiştirip skorları karşılaştır.",
    kitap: "s. 125" },

  { tur: "test", sorular: [
    { soru: "📖 Makine öğrenmesi sürecinde iş hattı kullanmak için hangi modül içe aktarılmalıdır?", secenekler: ["automation", "blue_line", "line", "pipeline", "work_flow"], dogru: 3, kod: true },
    { soru: "Pipeline'ın son adımı ne olmalıdır?", secenekler: ["Ölçekleyici", "Model (tahminleyici)", "Veri seti", "Grafik"], dogru: 1 },
    { soru: "pipe.score(X_test, y_test) sınıflandırmada neyi verir?", secenekler: ["Hata sayısını", "Doğruluk oranını", "Ortalama kare hatayı", "Küme sayısını"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Modeli kaydet, sonra kullan",
    kod: `import joblib
joblib.dump(pipe, 'model.pkl')       # kaydet
yuklu = joblib.load('model.pkl')     # başka bir defterde aç
yuklu.predict(X_test[:3])`,
    not: "Dağıtımın ilk adımı: eğitilmiş iş hattı dosyaya kaydedilir, web uygulaması bu dosyayı açıp tahmin yapar." }

]};
