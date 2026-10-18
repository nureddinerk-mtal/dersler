// YAPZ · 32 · K en yakın komşu (K-NN): iris  (Kitap s. 141–144)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "K-NN: yeni örneğin en yakın K komşusuna bakıp çoğunluğun sınıfını verir. Eğitim aslında ezberlemek; asıl iş tahminde (uzaklık hesabı). Ölçekleme şart. 6. Uygulama: UCI iris (başlıksız dosya, sınıflar Iris-setosa…), %80/%20, random_state=60, K=5. Sonuç kitapla birebir: [[13 0 0] [0 10 0] [0 2 5]], doğruluk %93,33.",
    akis: ["K-NN fikri (grafik)", "Algoritma adımları", "Uygulama 1: veriyi yükle, incele", "Uygulama 2: böl, ölçekle, eğit, tahmin, değerlendir", "Test"],
    hatalar: ["UCI adresine okul ağından bazen erişilemiyor. Malzemedeki <b>iris.data</b> aynı dosya: <code>pd.read_csv('iris.data', names=sutunlar)</code>.", "Dosyada başlık satırı yok; names verilmezse ilk çiçek başlık sanılır ve 149 satır kalır.", "scaler.fit'i test verisiyle de yapmak (23. konu).", "K'yı çift sayı seçmek eşitlik doğurabilir; ikili sınıflandırmada tek sayı seçilir."],
    sorular: [["Uzaklık nasıl hesaplanıyor?", "Varsayılan Öklid (Minkowski, p=2): Pisagor'un çok boyutlu hâli."], ["K büyük mü küçük mü olmalı?", "Küçük K gürültüye hassas (aşırı öğrenme), büyük K sınırları bulanıklaştırır. Çapraz doğrulamayla seçilir (24. konu Meraklısına)."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 32-u1 · 2. adım
sutunlar = ['sepal_uzunluk','sepal_genislik','petal_uzunluk','petal_genislik','sinif']
iris_df = pd.read_csv('iris.data', names=sutunlar)
iris_df.head()

# 32-u1 · 3. adım
iris_df.info()

# 32-u2 · 4–7. adım
X = iris_df.iloc[:, :-1].values; y = iris_df.iloc[:, 4].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=60)
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler().fit(X_train)
X_train = scaler.transform(X_train); X_test = scaler.transform(X_test)
from sklearn.neighbors import KNeighborsClassifier
classifier = KNeighborsClassifier(n_neighbors=5)
classifier.fit(X_train, y_train)

# 32-u2 · 8. adım
y_pred = classifier.predict(X_test)
print(y_pred)

# 32-u2 · 9. adım
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))`,
    not: "Ölçme sorusu 32 (cevap D: I, III, IV) bu konudan." },

  { tur: "bilgi", baslik: "K-NN fikri",
    gorsel: { tip: "resim", yol: G + "32-knn.png" },
    metin: "Yeni örneğe en yakın 5 komşudan 3'ü turuncuysa yeni örnek turuncu sınıftandır." },

  { tur: "bilgi", baslik: "Algoritma",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🔢", yazi: "K'yı seç", alt: "komşu sayısı" },
      { simge: "📏", yazi: "Uzaklıkları hesapla", alt: "yeni örnek ↔ tüm örnekler" },
      { simge: "🔽", yazi: "En yakın K'yı al" },
      { simge: "🗳️", yazi: "Çoğunluk oyu", alt: "en çok tekrar eden sınıf" }
    ]}},

  { tur: "uygulama", baslik: "6. Uygulama · Veri",
    metin: "UCI adresi açılmazsa malzemedeki <b>iris.data</b> dosyasını kullan; içerik aynı.",
    gorsel: { tip: "resim", yol: G + "32-u1.png" },
    adimlar: ["Sütun adlarını belirle (sepal_uzunluk, sepal_genislik, petal_uzunluk, petal_genislik, sinif), dosyayı names= ile oku.", "info ile eksik veri olmadığını doğrula."],
    malzeme: ["iris.data"],
    kitap: "s. 142–143 · 6. Uygulama 1–3. adım" },

  { tur: "uygulama", baslik: "6. Uygulama · Model",
    gorsel: { tip: "resim", yol: G + "32-u2.png" },
    adimlar: ["X ve y'yi ayır; %20 test, random_state=60. StandardScaler uygula. KNeighborsClassifier(n_neighbors=5) eğit.", "Test seti için tahminleri yazdır.", "Hata matrisi ve sınıflandırma raporunu yazdır."],
    kitap: "s. 143–144 · 4–9. adım" },

  { tur: "test", sorular: [
    { soru: "📖 K-NN ile ilgili hangileri doğrudur?<br>I. Denetimli bir türdür.<br>II. Üçten fazla sınıf olmalıdır.<br>III. K hiper parametresi en yakın komşu sayısıdır.<br>IV. Sınıflandırma yapmak için kullanılır.", secenekler: ["III ve IV", "I, II ve III", "I, II ve IV", "I, III ve IV", "I, II, III ve IV"], dogru: 3 },
    { soru: "Hata matrisinde [0 2 5] satırı neyi gösterir?", secenekler: ["5 virginica doğru, 2'si versicolor sanıldı", "2 setosa yanlış", "7 versicolor doğru", "Hiç hata yok"], dogru: 0 },
    { soru: "K-NN'de ölçekleme neden önemlidir?", secenekler: ["Hızlandırmak için", "Büyük sayılı özellik uzaklığı domine etmesin diye", "Eksik veriyi doldurmak için", "Önemli değildir"], dogru: 1 },
    { soru: "30 test örneğinden 28'i doğruysa doğruluk kaçtır?", secenekler: ["%28", "%90", "%93,33", "%98"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "K değiştikçe doğruluk",
    kod: `for k in [1, 3, 5, 7, 9, 15, 25]:
    m = KNeighborsClassifier(n_neighbors=k).fit(X_train, y_train)
    print(k, round(m.score(X_test, y_test), 3))`,
    not: "Hangi K en iyi? Çok büyük K'da ne oluyor?" }

]};
