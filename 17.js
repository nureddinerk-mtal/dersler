// YAPZ · 17 · Regresyon başarısı, aşırı ve zayıf öğrenme  (Kitap s. 79–83)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Sonuç sayıysa metrikler değişir: MSE, RMSE, MAE, MAPE, R². Kitabın Tablo 2.2'sindeki 10 araba fiyatı ile hepsi hesaplanıyor; uygulama NumPy ile aynı hesabı yaptırıyor. Sonra aşırı öğrenme (ezber) ve zayıf öğrenme. Son olarak birimde kullanılacak yazılımlar: Google Colab + Python.",
    akis: ["Tablo 2.2 (gerçek / tahmin / fark)", "Formül kartları", "Uygulama: NumPy ile 5 metrik", "Aşırı / zayıf öğrenme grafiği", "Test"],
    hatalar: ["Hatanın işaretini unutmak: MSE'de kare, MAE'de mutlak değer alınır, yoksa artılar ve eksiler birbirini götürür.", "Kitapta “Ortalama Kare Hata 13,5” yazıyor; o satır MAPE'dir (%13,5). Doğru MAPE %13,58.", "R²'nin 1'den büyük olabileceğini sanmak. En fazla 1'dir."],
    sorular: [["MSE mi MAE mi?", "MSE büyük hataları karesiyle cezalandırır, aykırı değerlere duyarlıdır. MAE aykırı değerlere karşı daha dayanıklıdır."], ["Aşırı öğrenmeyi nasıl anlarım?", "Eğitimde hata çok düşük, testte çok yüksekse model ezberlemiştir."]],
    kod: `import numpy as np
y  = np.array([110, 90, 50, 320, 70, 340, 110, 105, 280, 150])
y_ = np.array([120, 85, 70, 330, 60, 320, 120, 110, 250, 200])
hata = y - y_
mse  = np.mean(hata**2)
rmse = np.sqrt(mse)
mae  = np.mean(np.abs(hata))
mape = np.mean(np.abs(hata) / y) * 100
r2   = 1 - np.sum(hata**2) / np.sum((y - y.mean())**2)`,
    not: "Ölçme sorusu 9 (cevap E) bu konudan." },

  { tur: "bilgi", baslik: "Tablo 2.2 · Araba fiyatları (bin TL)",
    gorsel: { tip: "tablo", ad: "Gerçek ve tahmin", sutunlar: ["#", "Gerçek (y)", "Tahmin (y')", "Fark (y − y')"], satirlar: [
      [1, 110, 120, -10], [2, 90, 85, 5], [3, 50, 70, -20], [4, 320, 330, -10], [5, 70, 60, 10],
      [6, 340, 320, 20], [7, 110, 120, -10], [8, 105, 110, -5], [9, 280, 250, 30], [10, 150, 200, -50]] } },

  { tur: "bilgi", baslik: "Beş metrik",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "MSE · Ortalama Kare Hata", alt: "Farkların karelerinin ortalaması → 465" },
      { ust: "RMSE · Kök Ortalama Kare Hata", alt: "√MSE → 21,56" },
      { ust: "MAE · Ortalama Mutlak Hata", alt: "Farkların mutlak değerlerinin ortalaması → 17" },
      { ust: "MAPE · Ortalama Mutlak Yüzde Hata", alt: "|fark| / gerçek ortalaması → %13,58" },
      { ust: "R²", alt: "1 − (hata kareleri / ortalamadan sapma kareleri) → 0,956" }
    ]},
    not: "Hatalar (MSE, RMSE, MAE, MAPE) küçüldükçe, R² 1'e yaklaştıkça model iyidir." },

  { tur: "uygulama", baslik: "Metrikleri NumPy ile hesapla",
    gorsel: { tip: "resim", yol: G + "17-u1.png" },
    adimlar: ["Gerçek (y) ve tahmin (y_) dizilerini oluştur, farkı yazdır.", "MSE, RMSE, MAE, MAPE ve R²'yi formüllerle hesapla.", "Aynı sonuçları sklearn.metrics fonksiyonlarıyla kontrol et."],
    kitap: "s. 80–81 · Tablo 2.2" },

  { tur: "bilgi", baslik: "Aşırı ve zayıf öğrenme",
    gorsel: { tip: "resim", yol: G + "17-uyum.png" },
    metin: "<b>Zayıf öğrenme</b>: eğitimde de testte de hata yüksek. <b>Aşırı öğrenme</b> (ezber): eğitimde hata çok düşük, testte çok yüksek.",
    not: "Aşırı öğrenmeye karşı: özellik sayısını azalt, veri ekle, çapraz doğrulama kullan. Zayıf öğrenmeye karşı: başka algoritma dene." },

  { tur: "bilgi", baslik: "Bu birimde kullanacağımız araçlar",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🐍 Python", alt: "Açık kaynak, ücretsiz, kütüphanesi bol" },
      { ust: "📓 Google Colab", alt: "Tarayıcıda not defteri, kurulum yok" }
    ]}},

  { tur: "test", sorular: [
    { soru: "📖 I. MAPE II. MAE III. R² IV. RMSE<br>Hangileri kestirim performansını ölçmek için kullanılır?", secenekler: ["I, II, III", "I, III ve IV", "III ve IV", "II, III ve IV", "I, II, III ve IV"], dogru: 4 },
    { soru: "Gerçek değeri 50 olan bir araba 70 tahmin edilirse mutlak yüzde hata kaçtır?", secenekler: ["%20", "%28,5", "%40", "%70"], dogru: 2 },
    { soru: "Eğitim hatası çok düşük, test hatası çok yüksek. Bu nedir?", secenekler: ["Zayıf öğrenme", "Aşırı öğrenme", "İyi uyum", "Çapraz doğrulama"], dogru: 1 },
    { soru: "Hangisi bir modelin en iyi değeridir?", secenekler: ["MSE = 0", "MAE = 100", "R² = 0", "RMSE = 1000"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Ezberleyen öğrenci",
    metin: "Deneme sınavının cevaplarını ezberleyen öğrenci o denemede 100 alır, gerçek sınavda zorlanır. Aşırı öğrenen model de eğitim verisinde mükemmeldir, yeni veride çuvallar. Sağdaki turuncu eğri tam olarak bu: her noktadan geçiyor ama aradaki değerleri saçma tahmin ediyor." }

]};
