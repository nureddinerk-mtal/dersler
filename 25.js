// YAPZ · 25 · K-Means kümeleme, modelleri değerlendirme  (Kitap s. 121–124)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Denetimsiz tarafta K-Means: K küme merkezi seç → noktaları en yakın merkeze ata → merkezleri yeniden hesapla → değişmeyene kadar tekrarla. Denetimli tarafta değerlendirme: test setinde tahmin, hata matrisi (heatmap), eğitim/test doğruluğu. Eşikleme (0,5) ve yarışmalı sınıflandırma. Kümeleme ölçütleri (Silhouette, Davies-Bouldin, Dunn) ve dağıtım (Flask, Heroku) sadece isim olarak.",
    akis: ["K-Means adımları", "Uygulama 1: iris taç yaprak ölçüleriyle 3 küme", "Eşikleme / yarışmalı sınıflandırma", "Uygulama 2: K-NN hata matrisi ve doğruluk", "Kümeleme ölçütleri, dağıtım", "Test"],
    hatalar: ["Kitaptaki K-Means kodunda <code>data</code> değişkeni tanımsız; uygulamada iris'in taç yaprak sütunları kullanıldı.", "Küme numaraları (0,1,2) her çalıştırmada farklı türe denk gelebilir; random_state sabitle.", "Kitapta eğitim/test doğruluğu 99/98; güncel sürümde 97/96 çıkabilir."],
    sorular: [["K-Means türleri biliyor mu?", "Hayır. Sadece benzerleri grupluyor. Kümeye “setosa” adını biz veriyoruz."], ["K'yı nasıl seçerim?", "Dirsek yöntemi ya da Silhouette katsayısı ile (Meraklısına)."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 25-u1 · 1. adım
from sklearn.cluster import KMeans
veri = iris[['petal_length','petal_width']]
k_ortalama = KMeans(n_clusters=3, n_init=10, random_state=0)
kumeler = k_ortalama.fit_predict(veri)
print(kumeler)

# 25-u1 · 2. adım
plt.scatter(veri.petal_length, veri.petal_width, c=kumeler, cmap='viridis')
m = k_ortalama.cluster_centers_
plt.scatter(m[:,0], m[:,1], marker='x', s=150, c='red')
plt.xlabel('petal_length'); plt.ylabel('petal_width')
plt.show()

# 25-u2 · 3. adım
from sklearn import metrics
y_pred = knn.predict(X_test)
cm = metrics.confusion_matrix(y_test, y_pred)
cm_df = pd.DataFrame(cm, index=['setosa','versicolor','virginica'], columns=['setosa','versicolor','virginica'])
plt.figure(figsize=(5,3.6))
sns.heatmap(cm_df, annot=True)
plt.show()

# 25-u2 · 4. adım
print('Eğitim doğruluğu (Accuracy %) {}'.format(100*knn.score(X_train, y_train)))
print('Test doğruluğu (Accuracy %) {}'.format(100*knn.score(X_test, y_test)))`,
    not: "Uygulama 2, 24. konudaki knn modelini ve 23. konudaki bölünmüş veriyi kullanır. Ölçme sorusu 34 (cevap B) bu konudan." },

  { tur: "bilgi", baslik: "K-Means nasıl çalışır?",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📍", yazi: "K rastgele merkez", alt: "K hiper parametre" },
      { simge: "📏", yazi: "Her nokta en yakın merkeze" },
      { simge: "🔄", yazi: "Merkezleri yeniden hesapla" },
      { simge: "✅", yazi: "Merkezler değişmeyene kadar tekrar" }
    ]},
    not: "Denetimsizdir: veri bölünmez, etiket kullanılmaz." },

  { tur: "uygulama", baslik: "İris'i 3 kümeye ayır",
    metin: "Kitaptaki kodda <code>data</code> tanımlı değil. İris'in petal_length ve petal_width sütunlarını kullan.",
    gorsel: { tip: "resim", yol: G + "25-u1.png" },
    adimlar: ["KMeans(n_clusters=3) ile fit_predict yap, küme numaralarını yazdır.", "Noktaları kümelerine göre renklendir, küme merkezlerini kırmızı × ile göster."],
    kitap: "s. 121–122 · 63. Örnek" },

  { tur: "bilgi", baslik: "Model hangi sınıfa karar verir?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Eşikleme", alt: "İkili sınıfta tahmin ≥ 0,5 ise 1, değilse 0" },
      { ust: "Yarışmalı sınıflandırma", alt: "Her sınıf için olasılık; en büyüğü kazanır" }
    ]}},

  { tur: "uygulama", baslik: "Hata matrisi ve doğruluk",
    metin: "24. konudaki knn modeliyle devam et.",
    gorsel: { tip: "resim", yol: G + "25-u2.png" },
    adimlar: ["X_test için tahmin yap, hata matrisini DataFrame'e çevir ve sns.heatmap(annot=True) ile çiz.", "knn.score ile eğitim ve test doğruluğunu yüzde olarak yazdır."],
    kitap: "s. 122–123 · 64–65. Örnek" },

  { tur: "bilgi", baslik: "Kümeleme nasıl değerlendirilir? Model nasıl yayınlanır?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Silhouette katsayısı", alt: "-1…1; 1'e yakınsa kümeler iyi ayrık" },
      { ust: "Davies-Bouldin endeksi", alt: "Küçükse iyi" },
      { ust: "Dunn dizini", alt: "Büyükse iyi" },
      { ust: "🚀 Dağıtım", alt: "Model Flask ile web servisine çevrilip internete taşınır" }
    ]}},

  { tur: "test", sorular: [
    { soru: "📖 K-Means ile ilgili hangisi doğrudur?", secenekler: ["Küme merkezleri sabittir.", "Kümeleme amacıyla kullanılır.", "Denetimli bir türdür.", "Küme sayısı tek olmalıdır.", "Hiper parametresi yoktur."], dogru: 1 },
    { soru: "İkili sınıflandırmada eşik 0,5 ise 0,62 olasılık hangi sınıfa gider?", secenekler: ["0", "1", "Karar verilemez"], dogru: 1 },
    { soru: "K-Means'te K neyi belirler?", secenekler: ["Komşu sayısını", "Küme sayısını", "Test oranını", "Tekrar sayısını"], dogru: 1 },
    { soru: "Hata matrisinin köşegeni (sol üstten sağ alta) neyi gösterir?", secenekler: ["Yanlış tahminleri", "Doğru tahminleri", "Eksik verileri", "Küme merkezlerini"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Silhouette ile en iyi K",
    kod: `from sklearn.metrics import silhouette_score
for k in range(2, 7):
    km = KMeans(n_clusters=k, n_init=10, random_state=0).fit(veri)
    print(k, round(silhouette_score(veri, km.labels_), 3))`,
    not: "En yüksek puanı veren K iyi bir seçimdir. İris için 2 ya da 3 çıkar; versicolor ve virginica birbirine çok yakın." }

]};
