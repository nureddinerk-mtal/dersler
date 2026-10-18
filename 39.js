// YAPZ · 39 · Kullanım alanları, katmanlar, ileri ve geri besleme  (Kitap s. 173–175)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "YSA kullanım alanları: tahmin, veri filtreleme, sınıflandırma, veri yorumlama, veri ilişkilendirme. Yapılarına göre dört grup: tek katmanlı algılayıcı (giriş + çıkış, doğrusal, 1/−1), çok katmanlı algılayıcı (gizli katman + doğrusal olmayan aktivasyon), ileri beslemeli (tek yön), geri beslemeli (çıkış geri döner; tahmin uygulamaları, dinamik).",
    akis: ["Kullanım alanları kartları", "Tek vs çok katmanlı (görseller)", "İleri vs geri beslemeli", "Etkinlik: örnek uygulamaları türlere eşleştir", "Test"],
    hatalar: ["“Geri beslemeli” ile “geri yayılım”ı karıştırmak. Geri yayılım (backpropagation) öğrenme algoritması; geri beslemeli (recurrent) ağın yapısı. İleri beslemeli bir ağ da geri yayılımla eğitilir.", "Tek katmanlı algılayıcının XOR'u çözebileceğini sanmak; çözemez (44. konu)."],
    sorular: [["Geri beslemeli ağ nerede kullanılır?", "Sırası önemli verilerde: konuşma, metin, hava durumu serileri. Günümüzde bu işi çoğunlukla transformer'lar yapıyor."], ["Çok katmanlı algılayıcının İngilizcesi?", "Multi-Layer Perceptron (MLP)."]],
    not: "Ölçme sorusu 3 (cevap E: “yukarı beslemeli” diye bir tür yok) bu konudan." },

  { tur: "bilgi", baslik: "YSA ne işe yarar?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🔮 Tahmin", alt: "Altın ons fiyatı" },
      { ust: "🧹 Veri filtreleme", alt: "En işe yarar veriyi seç" },
      { ust: "🏷️ Sınıflandırma", alt: "Girdiyi sınıflara ayır" },
      { ust: "🧐 Veri yorumlama", alt: "Eğitilmiş ağ yeni durumu yorumlar" },
      { ust: "🔗 Veri ilişkilendirme", alt: "İlişki kurar, eksik bilgiyi tamamlar" }
    ]}},

  { tur: "bilgi", baslik: "Tek katmanlı ↔ çok katmanlı",
    gorsel: { tip: "ikili",
      sol: { baslik: "Tek katmanlı algılayıcı", gorsel: { tip: "resim", yol: G + "39-tek.png" } },
      sag: { baslik: "Çok katmanlı algılayıcı", gorsel: { tip: "resim", yol: G + "39-cok.png" } },
      ok: "→" },
    not: "Tek katmanlı: sadece giriş ve çıkış, doğrusal, çıktı 1 ya da −1. Çok katmanlı: gizli katmanlar + doğrusal olmayan aktivasyon." },

  { tur: "bilgi", baslik: "İleri ↔ geri beslemeli",
    gorsel: { tip: "ikili",
      sol: { baslik: "İleri beslemeli", gorsel: { tip: "akis", adimlar: [ { simge: "📥", yazi: "Giriş" }, { simge: "🟣", yazi: "Gizli" }, { simge: "📤", yazi: "Çıkış" } ] } },
      sag: { baslik: "Geri beslemeli", gorsel: { tip: "akis", adimlar: [ { simge: "📥", yazi: "Giriş" }, { simge: "🔁", yazi: "Gizli", alt: "çıkış geri döner" }, { simge: "📤", yazi: "Çıkış" } ] } },
      ok: "·" },
    not: "İleri beslemede aynı katmandaki nöronlar arasında bağ yoktur, akış tek yönlüdür. Geri beslemede bir nöronun çıktısı önceki ya da aynı katmana girdi olabilir." },

  { tur: "uygulama", baslik: "Eşleştir",
    metin: "Defterine tabloyu çiz ve doldur: Hangi kullanım alanı? İleri mi geri beslemeli mi uygun?",
    gorsel: { tip: "tablo", ad: "Durumlar", sutunlar: ["Durum", "Kullanım alanı", "Yapı"], satirlar: [
      ["Yarınki hava sıcaklığı (geçmiş günlerden)", "?", "?"], ["Fotoğraftaki hayvan kedi mi köpek mi?", "?", "?"], ["Yarım kalan cümleyi tamamlama", "?", "?"], ["Sensör verilerinden bozuk ölçümleri ayıklama", "?", "?"]] },
    kitap: "s. 173–175" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi yapılarına göre yapay sinir ağı gruplarından biri değildir?", secenekler: ["Tek katmanlı algılayıcılar", "Çok katmanlı algılayıcılar", "İleri beslemeli yapay sinir ağları", "Geri beslemeli yapay sinir ağları", "Yukarı beslemeli yapay sinir ağları"], dogru: 4 },
    { soru: "Tek katmanlı algılayıcıda hangi katmanlar vardır?", secenekler: ["Giriş ve çıkış", "Sadece gizli", "Giriş, gizli ve çıkış", "Sadece çıkış"], dogru: 0 },
    { soru: "Çıkışların önceki katmanlara geri verildiği ağ türü?", secenekler: ["İleri beslemeli", "Geri beslemeli", "Tek katmanlı", "Doğrusal"], dogru: 1 },
    { soru: "Altın fiyatını tahmin etmek hangi kullanım alanıdır?", secenekler: ["Veri filtreleme", "Tahmin", "Sınıflandırma", "İlişkilendirme"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "scikit-learn ile çok katmanlı algılayıcı",
    kod: `from sklearn.neural_network import MLPClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
mlp = MLPClassifier(hidden_layer_sizes=(10, 10), max_iter=2000, random_state=0)
mlp.fit(X, y)
print(mlp.score(X, y))`,
    not: "İki gizli katman, her birinde 10 nöron. 32. konudaki K-NN ile karşılaştır (ölçeklemeyi ve test ayırmayı unutma)." }

]};
