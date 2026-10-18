// YAPZ · 24 · Algoritmalar ve model seçimi  (Kitap s. 119–121)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Probleme ve veriye göre model seçimi (Görsel 2.35'in sadeleştirilmiş hâli). Denetimli: sınıflandırma (kategorik çıktı) ya da regresyon (sayısal çıktı); ikili / çok sınıflı sınıflandırma. Hiper parametre (K-NN'de K) ve 10 katlı çapraz doğrulama ile modeli değerlendirme (cross_val_score).",
    akis: ["Model seçim ağacı", "İkili / çok sınıflı sınıflandırma", "Hiper parametre ve ızgara araması", "Uygulama: K-NN tanımla, 10 katlı çapraz doğrulama", "Test"],
    hatalar: ["Bu uygulama 23. konudaki X_train, y_train değişkenlerini kullanır; önce o hücreler çalışmalı.", "Kitapta ortalama doğruluk 0.82; güncel sürümlerde ~0.94 çıkıyor. Bölme ve sürüm farkı, sorun değil.", "fold sayısını (cv) test_size ile karıştırmak."],
    sorular: [["Izgara araması ne?", "Hiper parametrenin birçok değerini (K=1,3,5,7…) tek tek deneyip çapraz doğrulamada en iyisini seçmek. Kodu Meraklısına slaytında."], ["Neden tek bir test değil de 10 katlı?", "Tek bölme şansa bağlı olabilir; 10 farklı bölmenin ortalaması daha güvenilir."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 24-u1 · 1. adım
knn = KNeighborsClassifier(n_neighbors=2, p=2, metric='minkowski')
knn.fit(X_train, y_train)

# 24-u1 · 2. adım
from sklearn.model_selection import cross_val_score
fold_sayisi = 10
dogruluklar = cross_val_score(estimator=knn, X=X_train, y=y_train, cv=fold_sayisi)
print('Ortalama Doğruluk: ', np.mean(dogruluklar))
print('Doğrulukların Standart Sapması: ', np.std(dogruluklar))`,
    not: "Ölçme sorusu 31'de kitap anahtarı D (I, II, IV) diyor; sıkıştırma algoritmaları ML algoritması değil, K-NN ise öyle. Doğrusu C (I, II, III); 37. soru da bunu doğruluyor. Testte C doğru kabul edildi. Ölçme 37'de anahtar D diyor; doğrusu E (Sıkıştırma Algoritmaları)." },

  { tur: "bilgi", baslik: "Hangi model?",
    gorsel: { tip: "agac", kok: { ad: "Makine öğrenmesi", yan: true, cocuklar: [
      { ad: "Denetimli", alt: "etiket / sonuç var", cocuklar: [
        { ad: "Sınıflandırma", alt: "K-NN, karar ağacı, SVM, lojistik regresyon, sinir ağları" },
        { ad: "Regresyon", alt: "lineer regresyon, karar ağacı, topluluk öğrenmesi" } ] },
      { ad: "Denetimsiz", alt: "etiket yok", cocuklar: [
        { ad: "Birliktelik", alt: "Apriori, FP-Growth · sepet analizi" },
        { ad: "Kümeleme", alt: "K-Means, hiyerarşik · müşteri segmentasyonu" },
        { ad: "Boyut indirgeme", alt: "PCA · yüz tanıma" } ] },
      { ad: "Yarı denetimli", alt: "self training" },
      { ad: "Pekiştirmeli", alt: "Q-öğrenme · robot, otonom araç" }
    ] } } },

  { tur: "bilgi", baslik: "Sınıflandırma çeşitleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "İkili sınıflandırma", alt: "2 etiket: spam / normal, hasta / sağlıklı" },
      { ust: "Çok sınıflı sınıflandırma", alt: "2'den fazla: setosa / versicolor / virginica" },
      { ust: "Hiper parametre", alt: "Bizim seçtiğimiz ayar: K-NN'de K" },
      { ust: "K katlı çapraz doğrulama", alt: "Eğitim seti K parçaya bölünür, K kez eğit–doğrula" }
    ]}},

  { tur: "uygulama", baslik: "K-NN ve 10 katlı çapraz doğrulama",
    metin: "23. konudaki bölünmüş iris verisiyle devam et.",
    gorsel: { tip: "resim", yol: G + "24-u1.png" },
    adimlar: ["KNeighborsClassifier(n_neighbors=2, p=2, metric='minkowski') tanımla ve eğit.", "cross_val_score ile cv=10 çapraz doğrulama yap; ortalama doğruluğu ve standart sapmayı yazdır."],
    kitap: "s. 120 · 61–62. Örnek" },

  { tur: "test", sorular: [
    { soru: "📖 I. Destek Vektör Makineleri II. Doğrusal Regresyon III. K-NN IV. Sıkıştırma Algoritmaları<br>Hangileri makine öğrenmesi algoritmasıdır?", secenekler: ["Yalnız II", "I ve II", "I, II ve III", "I, II ve IV", "I, II, III ve IV"], dogru: 2 },
    { soru: "📖 Hangisi en çok kullanılan makine öğrenmesi algoritmalarından biri değildir?", secenekler: ["Doğrusal Regresyon", "Lojistik Regresyon", "K-NN", "Destek Vektör Makineleri", "Sıkıştırma Algoritmaları"], dogru: 4 },
    { soru: "📖 Çapraz doğrulamada veri kümesinin kaç parçaya bölüneceği hangi parametreyle belirtilir?", secenekler: ["cv", "estimator", "fold", "fold_number", "score"], dogru: 0, kod: true },
    { soru: "📖 Modelin sınıflandırma veya kestirim yapmasını sağlayan metot hangisidir?", secenekler: ["class", "estimate", "predict", "regression", "test"], dogru: 2, kod: true }
  ]},

  { tur: "merak", baslik: "Izgara araması: en iyi K'yı bul",
    kod: `from sklearn.model_selection import GridSearchCV
ara = GridSearchCV(KNeighborsClassifier(),
                   {'n_neighbors': [1, 3, 5, 7, 9, 11]}, cv=10)
ara.fit(X_train, y_train)
print(ara.best_params_, ara.best_score_)`,
    not: "Kitaptaki “ızgara araması tekniği” budur: her K için 10 katlı çapraz doğrulama yapar, en iyisini seçer." }

]};
