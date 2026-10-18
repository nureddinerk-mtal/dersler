// YAPZ · 28 · En küçük kareler, eşikleme, R², korelasyon  (Kitap s. 127–128)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Regresyon modelleri nasıl değerlendirilir? En küçük kareler: hata karelerinin toplamını en küçük yapan doğru. Eşikleme (0,5) ve yarışmalı sınıflandırma ile regresyon çıktısından sınıf elde etme. Korelasyon (ilişkinin yönü/şiddeti) ile regresyonun (neden–sonuç) farkı. R² ve düzeltilmiş R².",
    akis: ["En küçük kareler grafiği (kırmızı çizgiler hatalar)", "Eşikleme ve yarışmalı sınıflandırma", "Korelasyon vs regresyon", "R² ve düzeltilmiş R²", "Uygulama: 17. konudaki tabloyla R² ve düzeltilmiş R²", "Test"],
    hatalar: ["Korelasyonu nedensellik sanmak (uyku süresi ve TV süresi ilişkili olabilir ama biri diğerine sebep olmayabilir).", "Kitapta n=10, p=3 için düzeltilmiş R² 0,925 deniyor; Tablo 2.2'deki R² = 0,956 ile hesaplanınca 0,934 çıkıyor. 0,925, R² = 0,95 alınarak bulunmuş."],
    sorular: [["Neden kare alınıyor?", "Pozitif ve negatif hatalar birbirini götürmesin, büyük hatalar daha çok cezalansın diye."], ["Düzeltilmiş R² neden lazım?", "Modele değişken ekledikçe R² hep artar, işe yaramasa bile. Düzeltilmiş R² gereksiz değişkeni cezalandırır."]],
    kod: `import numpy as np
y  = np.array([110, 90, 50, 320, 70, 340, 110, 105, 280, 150])
y_ = np.array([120, 85, 70, 330, 60, 320, 120, 110, 250, 200])
r2 = 1 - np.sum((y - y_)**2) / np.sum((y - y.mean())**2)
n, p = 10, 3
r2_duz = 1 - (1 - r2) * (n - 1) / (n - p - 1)
print('R²: %.3f   Düzeltilmiş R²: %.3f' % (r2, r2_duz))` },

  { tur: "bilgi", baslik: "En küçük kareler yöntemi",
    gorsel: { tip: "resim", yol: G + "28-ekk.png" },
    metin: "Kırmızı çizgiler hatalar. Sabit ve katsayı değiştirilerek <b>hata karelerinin toplamı en küçük</b> olan doğru bulunur. Ölçütü MSE'dir." },

  { tur: "bilgi", baslik: "Regresyondan sınıfa",
    gorsel: { tip: "ikili",
      sol: { baslik: "Eşikleme (2 sınıf)", gorsel: { tip: "parcala", parcalar: [ { yazi: "< 0,5", etiket: "sınıf 0", renk: "#2f80ed" }, { yazi: "≥ 0,5", etiket: "sınıf 1", renk: "#f2994a" } ] } },
      sag: { baslik: "Yarışmalı (2'den çok sınıf)", gorsel: { tip: "parcala", parcalar: [ { yazi: "0,2", etiket: "setosa", renk: "#9aa0a6" }, { yazi: "0,7", etiket: "versicolor 🏆", renk: "#27ae60" }, { yazi: "0,1", etiket: "virginica", renk: "#9aa0a6" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Korelasyon ≠ regresyon",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Regresyon", alt: "Neden–sonuç: biri diğerine bağımlı. “Yemek yeme” → “kilo alma”" },
      { ust: "Korelasyon", alt: "İlişkinin yönü ve şiddeti; ikisi bağımsız. “Uyku süresi” ~ “TV süresi”" }
    ]}},

  { tur: "bilgi", baslik: "R² ve düzeltilmiş R²",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "R²", alt: "En fazla 1. Büyüdükçe model daha başarılı." },
      { ust: "Düzeltilmiş R²", alt: "1 − (1 − R²)·(n − 1)/(n − p − 1) · birden çok bağımsız değişken varsa" }
    ]},
    not: "n: örnek sayısı, p: bağımsız değişken sayısı." },

  { tur: "uygulama", baslik: "Düzeltilmiş R²'yi hesapla",
    metin: "17. konudaki 10 araba fiyatını kullan. Model 3 bağımsız değişkenle kurulmuş olsun (p = 3).",
    gorsel: { tip: "resim", yol: G + "28-u1.png" },
    adimlar: ["Gerçek (y) ve tahmin (y_) dizilerinden R²'yi hesapla.", "n = 10, p = 3 için düzeltilmiş R²'yi formülle hesapla.", "İkisini karşılaştır: hangisi küçük, neden?"],
    kitap: "s. 128 · R² ile değerlendirme" },

  { tur: "test", sorular: [
    { soru: "En küçük kareler yöntemi neyi en küçük yapmaya çalışır?", secenekler: ["Örnek sayısını", "Hata karelerinin toplamını", "Değişken sayısını", "R² değerini"], dogru: 1 },
    { soru: "Üç sınıflı bir problemde olasılıklar 0,3 / 0,5 / 0,2 ise tahmin hangisi olur?", secenekler: ["1. sınıf", "2. sınıf", "3. sınıf", "Eşik 0,5 olduğundan hiçbiri"], dogru: 1 },
    { soru: "Hangisi korelasyona örnektir?", secenekler: ["Yemek yeme → kilo alma", "Çalışma süresi → sınav notu", "Günlük uyku süresi ile TV izleme süresi", "Kıdem → ücret"], dogru: 2 },
    { soru: "R² değeri en fazla kaç olabilir?", secenekler: ["0", "1", "100", "Sınırı yok"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Korelasyon kandırabilir",
    metin: "ABD'de dondurma satışları ile boğulma vakaları arasında güçlü korelasyon var. Dondurma boğulmaya sebep olmaz; ikisinin de ortak sebebi sıcak hava. Buna <b>gizli değişken</b> denir.",
    not: "“Spurious correlations” diye arat: peynir tüketimi ile çarşafa dolanarak ölüm sayısı gibi absürt ama gerçek korelasyonlar var." }

]};
