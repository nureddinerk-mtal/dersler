// YAPZ · 33 · Karar ağacı  (Kitap s. 144–147)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Karar ağacı: veriyi evet/hayır sorularıyla dallara ayırır; sınıflandırma ve regresyon yapar, sayısal ve kategorik veriyle çalışır. Bölme ölçütleri: kategorikte entropi/gini, sayısalda en küçük kareler. Çok dal = aşırı öğrenme riski. 7. Uygulama: banknot doğrulama (1372 banknot, 4 özellik, gerçek/sahte). Sonuç kitapla aynı: [[153 2] [2 118]], %98,5.",
    akis: ["Titanic ağacı (görsel)", "Kavramlar: kök, dal, yaprak, gini", "Uygulama 1: banknot verisi", "Uygulama 2: böl, eğit, tahmin, değerlendir", "Meraklısına: ağacı çizdir", "Test"],
    hatalar: ["Kitaptaki dosya adı <code>data_banknote_authentication.txt</code>; malzemede aynı adla var. header=None ve names= unutulmamalı.", "random_state verilmezse ağaç her seferinde biraz farklı kurulur, sonuçlar 1–2 örnek değişebilir.", "Kitapta 5. ve 6. adım açıklamaları yer değiştirmiş."],
    sorular: [["Gini ne?", "Bir düğümdeki karışıklık ölçüsü. 0 ise düğümde tek sınıf var (saf)."], ["Neden bazen derinliği sınırlarız?", "Sınırsız ağaç eğitim verisini ezberler. max_depth ile sade ağaç genellemeyi iyileştirir."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 33-u1 · 2. adım
banknot_df = pd.read_csv('data_banknote_authentication.txt', sep=',', header=None, names=['varyans','carpiklik','basiklik','entropi','sinif'])
banknot_df.head()

# 33-u1 · 3. adım
banknot_df.info()

# 33-u2 · 4–5. adım
X = banknot_df.drop('sinif', axis=1); y = banknot_df['sinif']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=60)
from sklearn.tree import DecisionTreeClassifier
classifier = DecisionTreeClassifier(random_state=0)
classifier.fit(X_train, y_train)

# 33-u2 · 6. adım
y_pred = classifier.predict(X_test)
print(y_pred)

# 33-u2 · 7. adım
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))`,
    not: "Ölçme sorusu 33'te kitap anahtarı B (“dal sayısı tek sayı olmalı”) diyor; bu yanlış. Doğrusu A (dal sayısı modelin uyumunu etkiler), kitap metni de bunu söylüyor. Testte A doğru kabul edildi." },

  { tur: "bilgi", baslik: "Titanic: kim kurtuldu?",
    gorsel: { tip: "agac", kok: { ad: "Cinsiyet?", yan: true, cocuklar: [
      { ad: "Kadın", alt: "Kurtuldu · %36", renk: "#27ae60" },
      { ad: "Erkek → Yaş?", yan: true, cocuklar: [
        { ad: "9,5'ten büyük", alt: "Kurtulmadı · %61", renk: "#eb5757" },
        { ad: "9,5'ten küçük → Kardeş/eş sayısı?", yan: true, cocuklar: [
          { ad: "3 ve fazla", alt: "Kurtulmadı · %2", renk: "#eb5757" },
          { ad: "3'ten az", alt: "Kurtuldu · %2", renk: "#27ae60" } ] } ] }
    ] } },
    not: "Yüzdeler yolcuların o yaprağa düşen oranı." },

  { tur: "bilgi", baslik: "Kavramlar",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Kök", alt: "İlk soru (en ayırt edici özellik)" }, { ust: "Dal", alt: "Sorunun cevabı" },
      { ust: "Yaprak", alt: "Karar: sınıf ya da sayı" }, { ust: "Entropi / Gini", alt: "Kategorik bölme ölçütü" },
      { ust: "En küçük kareler", alt: "Sayısal (regresyon) bölme ölçütü" }, { ust: "⚠️ Çok dal", alt: "Aşırı öğrenme" }
    ]}},

  { tur: "uygulama", baslik: "7. Uygulama · Banknot verisi",
    gorsel: { tip: "resim", yol: G + "33-u1.png" },
    adimlar: ["data_banknote_authentication.txt dosyasını header=None ve sütun adlarıyla (varyans, carpiklik, basiklik, entropi, sinif) oku.", "info ile eksik veri olmadığını doğrula."],
    malzeme: ["data_banknote_authentication.txt"],
    kitap: "s. 145–146 · 7. Uygulama 1–3. adım" },

  { tur: "uygulama", baslik: "7. Uygulama · Model",
    gorsel: { tip: "resim", yol: G + "33-u2.png" },
    adimlar: ["X = sinif hariç sütunlar, y = sinif; %20 test, random_state=60. DecisionTreeClassifier eğit.", "Tahminleri yazdır.", "Hata matrisi ve sınıflandırma raporunu yazdır."],
    kitap: "s. 146–147 · 4–7. adım" },

  { tur: "test", sorular: [
    { soru: "📖 Karar ağaçları ile ilgili hangisi doğrudur?", secenekler: ["Dal sayısı modelin uyumunu etkiler.", "Dal sayısı tek sayı olmalıdır.", "Denetimsiz öğrenme türündedir.", "Sadece kestirim yapmak için kullanılır.", "Sadece sayısal veri türünde çalışır."], dogru: 0 },
    { soru: "Hata matrisi [[153 2] [2 118]] ise kaç banknot yanlış sınıflandı?", secenekler: ["2", "4", "118", "153"], dogru: 1 },
    { soru: "Ağacın son düğümlerine ne denir?", secenekler: ["Kök", "Dal", "Yaprak", "Gövde"], dogru: 2 },
    { soru: "Karar ağacının aşırı öğrenmesini önlemek için hangisi yapılabilir?", secenekler: ["Derinliği sınırlamak (max_depth)", "Daha çok dal eklemek", "Test verisini eğitime katmak", "Ölçeklemek"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Ağacı çizdir",
    gorsel: { tip: "resim", yol: G + "33-m1.png" },
    kod: `from sklearn import tree
kucuk = DecisionTreeClassifier(max_depth=2).fit(X_train, y_train)
plt.figure(figsize=(10,5))
tree.plot_tree(kucuk, feature_names=list(X.columns),
               class_names=['gerçek','sahte'], filled=True)
plt.show()`,
    not: "Sadece 2 seviyelik ağaç bile banknotların çoğunu doğru ayırıyor. Kök soru: varyans ≤ 0,274?" }

]};
