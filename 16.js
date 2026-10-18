// YAPZ · 16 · Sınıflandırma başarısı: karışıklık (hata) matrisi  (Kitap s. 76–79)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "COVID+ örneğiyle hata matrisi: DP, YN, YP, DN. Altı metrik: doğruluk, kesinlik, negatif tahmin değeri, duyarlılık, seçicilik, F1. Kitaptaki sayılar (100 kişi: DP 15, YN 12, YP 5, DN 68) bütün metrikleri hesaplamaya yetiyor; uygulama bunları Python'da hesaplatıyor. En önemli mesaj: tek başına doğruluk yanıltabilir (on binde bir görülen hastalık örneği).",
    akis: ["Hata matrisi tablosu (Tip I / Tip II hata)", "Formül kartları", "COVID örneğiyle elle hesap (tahtada)", "Uygulama: aynı hesapları Python ile", "Nadir hastalık örneği: %99,9 doğruluk ama hiç teşhis yok", "Test"],
    hatalar: ["Kesinlik ile duyarlılığı karıştırmak. Kesinlik: “hasta dediklerimin kaçı gerçekten hasta?” Duyarlılık: “gerçek hastaların kaçını yakaladım?”", "YP ile YN'yi karıştırmak. İlk kelime tahminin doğru mu yanlış mı olduğunu, ikinci kelime tahmini söyler.", "Kitapta F1 formülü kesik basılmış: F1 = 2DP / (2DP + YP + YN)."],
    sorular: [["Hangi metrik daha önemli?", "Probleme bağlı. Kanser taramasında hastayı kaçırmamak için duyarlılık; spam filtresinde önemli maili kaçırmamak için kesinlik."], ["F1 neden var?", "Kesinlik ve duyarlılığın dengesi. Sınıflar dengesizse doğruluk yerine bakılır."]],
    kod: `DP, YN, YP, DN = 15, 12, 5, 68
toplam = DP + YN + YP + DN
print('Toplam örnek:', toplam)
dogruluk = (DP + DN) / toplam
kesinlik = DP / (DP + YP)
ntd = DN / (DN + YN)
duyarlilik = DP / (DP + YN)
secicilik = DN / (DN + YP)
f1 = 2*DP / (2*DP + YP + YN)
print('Doğruluk    : %.3f' % dogruluk)
print('Kesinlik    : %.3f' % kesinlik)
print('Negatif TD  : %.3f' % ntd)
print('Duyarlılık  : %.3f' % duyarlilik)
print('Seçicilik   : %.3f' % secicilik)
print('F1 skoru    : %.3f' % f1)`,
    not: "Ölçme sorusu 8'deki “T1 skoru” baskı hatası, F1 olmalı. Kitap anahtarı E (II, III, IV)." },

  { tur: "bilgi", baslik: "Hata matrisi (confusion matrix)",
    gorsel: { tip: "html", icerik: `<table style="border-collapse:collapse;font:14px sans-serif;text-align:center">
      <tr><td></td><td></td><th colspan="2" style="padding:6px">TAHMİN</th></tr>
      <tr><td></td><td></td><th style="padding:6px 14px">Pozitif (hasta)</th><th style="padding:6px 14px">Negatif (hasta değil)</th></tr>
      <tr><th rowspan="2" style="padding:6px;writing-mode:vertical-rl;transform:rotate(180deg)">GERÇEK</th><th style="padding:6px 10px">Pozitif</th>
        <td style="background:#d4f5dd;padding:16px;border:2px solid #fff"><b>DP</b><br>Doğru Pozitif</td><td style="background:#fde2e2;padding:16px;border:2px solid #fff"><b>YN</b><br>Yanlış Negatif<br><small>Tip II hata</small></td></tr>
      <tr><th style="padding:6px 10px">Negatif</th>
        <td style="background:#fde2e2;padding:16px;border:2px solid #fff"><b>YP</b><br>Yanlış Pozitif<br><small>Tip I hata</small></td><td style="background:#d4f5dd;padding:16px;border:2px solid #fff"><b>DN</b><br>Doğru Negatif</td></tr></table>` },
    not: "İkinci kelime tahmini söyler, ilk kelime tahminin doğru mu yanlış mı olduğunu." },

  { tur: "bilgi", baslik: "Altı metrik",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Doğruluk", alt: "(DP + DN) / Toplam" },
      { ust: "Kesinlik", alt: "DP / (DP + YP) · “Hasta dediklerimin kaçı hasta?”" },
      { ust: "Negatif tahmin değeri", alt: "DN / (DN + YN)" },
      { ust: "Duyarlılık", alt: "DP / (DP + YN) · “Hastaların kaçını yakaladım?”" },
      { ust: "Seçicilik", alt: "DN / (DN + YP)" },
      { ust: "F1 skoru", alt: "2DP / (2DP + YP + YN) · dengesiz sınıflar için" }
    ]}},

  { tur: "bilgi", baslik: "Kitaptaki örnek: 100 kişilik test",
    gorsel: { tip: "tablo", ad: "COVID+ testi", sutunlar: ["", "Tahmin: hasta", "Tahmin: hasta değil", "Toplam"], satirlar: [["Gerçek: hasta", "15 (DP)", "12 (YN)", "27"], ["Gerçek: hasta değil", "5 (YP)", "68 (DN)", "73"], ["Toplam", "20", "80", "100"]] },
    not: "Önce elle hesapla: doğruluk %83, kesinlik %75, duyarlılık %55,6…" },

  { tur: "uygulama", baslik: "Metrikleri Python ile hesapla",
    gorsel: { tip: "resim", yol: G + "16-u1.png" },
    adimlar: ["DP, YN, YP, DN değişkenlerini oluştur, toplam örnek sayısını yazdır.", "Altı metriği formüllerle hesapla, virgülden sonra 3 basamakla yazdır."],
    kitap: "s. 77–79 · 7. ve 8. Örnek" },

  { tur: "bilgi", baslik: "Doğruluk yalnız başına yanıltır",
    metin: "On binde bir görülen bir hastalık için model 100.000 kişinin <b>hepsine</b> “hasta değil” diyor.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Doğruluk %99,9", alt: "Harika görünüyor…", renk: "#27ae60" },
      { ust: "Duyarlılık %0", alt: "…ama tek bir hastayı bile bulamadı", renk: "#eb5757" },
      { ust: "Kesinlik %0", alt: "Hiç doğru “hasta” tahmini yok", renk: "#eb5757" },
      { ust: "Seçicilik %100", alt: "Sağlamları hep doğru bildi", renk: "#2d9cdb" }
    ]},
    not: "Kitap s. 79 · 9. Örnek" },

  { tur: "test", sorular: [
    { soru: "📖 I. T1 (F1) skoru II. Duyarlılık III. Kesinlik IV. Seçicilik<br>Hangileri sınıflandırma performansını ölçmek için kullanılır? <small>(Kitap cevap anahtarına göre)</small>", secenekler: ["II ve III", "II ve IV", "I, II ve III", "I, II ve IV", "II, III ve IV"], dogru: 4 },
    { soru: "Gerçekte hasta olan birine model “hasta değil” derse buna ne denir?", secenekler: ["Doğru pozitif", "Yanlış pozitif", "Yanlış negatif", "Doğru negatif"], dogru: 2 },
    { soru: "DP=40, YP=10 ise kesinlik kaçtır?", secenekler: ["%25", "%40", "%80", "%90"], dogru: 2 },
    { soru: "Kanser taramasında hastaları kaçırmamak için hangi metrik en önemlidir?", secenekler: ["Seçicilik", "Duyarlılık", "Negatif tahmin değeri", "Hiçbiri"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "scikit-learn hepsini tek satırda verir",
    gorsel: { tip: "resim", yol: G + "16-m1.png" },
    kod: `from sklearn.metrics import confusion_matrix, classification_report
gercek = [1]*27 + [0]*73
tahmin = [1]*15 + [0]*12 + [1]*5 + [0]*68
print(confusion_matrix(gercek, tahmin, labels=[1,0]))
print(classification_report(gercek, tahmin, labels=[1,0],
      target_names=['hasta','hasta değil']))`,
    not: "precision = kesinlik, recall = duyarlılık. 31. konuda bu raporu gerçek bir modelde göreceksin." }

]};
