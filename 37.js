// YAPZ · 37 · Yapay nöronun matematiği  (Kitap s. 165–167)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Bir yapay nöron: girdileri ağırlıklarla çarp, topla, bias ekle, aktivasyon fonksiyonundan geçir. y = f(x·w + b). Beş bölüm: girdiler, ağırlıklar, toplama fonksiyonu, aktivasyon fonksiyonu, çıktı. Eğitimin amacı en iyi w ve b'yi bulmak. Tablo 3.1: biyolojik ↔ yapay karşılıklar.",
    akis: ["Nöron modeli görseli", "Hesap adımları (6 madde)", "Beş bölüm kartları", "Tablo 3.1", "Uygulama: tahtada/defterde bir nöronu elle hesapla", "Test"],
    hatalar: ["Bias'ı unutmak ya da ağırlıkla karıştırmak. Bias girdiden bağımsız eklenen sabittir (doğrunun β₀'ı gibi).", "Aktivasyonu toplamadan önce uygulamak. Sıra: çarp → topla → bias → aktivasyon."],
    sorular: [["Bias ne işe yarar?", "Nöronun ateşleme eşiğini kaydırır. Bias olmadan bütün girdiler 0 iken çıktı hep f(0) olurdu."], ["Ağırlıklar nereden geliyor?", "Başta rastgele verilir, eğitimde geri yayılımla düzeltilir (40A ve 44. konu)."]],
    kod: `import numpy as np
x = np.array([1, 0, 1])          # girdiler
w = np.array([0.5, -0.4, 0.3])   # ağırlıklar
b = 0.1                          # bias
toplam = x.dot(w) + b            # 0.9
cikti = 1 / (1 + np.exp(-toplam))  # sigmoid → 0.711
print(toplam, round(cikti, 3))`,
    not: "Ölçme sorusu 4 (cevap D: Toplama bir aktivasyon fonksiyonu değildir) bu konuya uygun." },

  { tur: "bilgi", baslik: "Bir yapay nöron",
    gorsel: { tip: "resim", yol: G + "37-noron.png" } },

  { tur: "bilgi", baslik: "Hesap adımları",
    gorsel: { tip: "akis", adimlar: [
      { simge: "✖️", yazi: "Çarp", alt: "her girdi × ağırlığı (x₁w₁)" },
      { simge: "➕", yazi: "Topla", alt: "ağırlıklı toplam" },
      { simge: "b", yazi: "Bias ekle" },
      { simge: "f", yazi: "Aktivasyon", alt: "38. konu" },
      { simge: "➡️", yazi: "Çıktı", alt: "sonuç ya da başka nöronun girdisi" }
    ]},
    not: "Eğitim = modelin en iyi sonucu vereceği w (ağırlık) ve b (bias) değerlerini bulmak." },

  { tur: "bilgi", baslik: "Biyolojik ↔ yapay",
    gorsel: { tip: "tablo", ad: "Tablo 3.1", sutunlar: ["Biyolojik sinir sistemi", "Yapay sinir sistemi"], satirlar: [["Nöron", "İşlemci eleman"], ["Dendrit", "Toplama fonksiyonu"], ["Hücre gövdesi", "Transfer (aktivasyon) fonksiyonu"], ["Akson", "Yapay nöron çıkışı"], ["Sinaps", "Ağırlıklar"]] } },

  { tur: "uygulama", baslik: "Bir nöronu elle hesapla",
    metin: "Defterinde hesap makinesiyle çöz. Aktivasyon: toplam ≥ 0 ise 1, değilse 0 (basamak fonksiyonu).",
    gorsel: { tip: "tablo", ad: "Nöron", sutunlar: ["", "x₁", "x₂", "x₃", "bias"], satirlar: [["Girdi", 1, 0, 1, "—"], ["Ağırlık", 0.5, -0.4, 0.3, 0.1]] },
    adimlar: ["Her girdiyi ağırlığıyla çarp.", "Çarpımları topla, bias'ı ekle.", "Basamak fonksiyonuna göre çıktıyı bul.", "x₂ = 1 olsaydı çıktı ne olurdu? Bias −1 olsaydı?"],
    kitap: "s. 165–166" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi bir aktivasyon fonksiyonu değildir?", secenekler: ["ReLU", "Tanh", "Sigmoid", "Toplama", "Doğrusal"], dogru: 3 },
    { soru: "Bir yapay nöronda işlem sırası hangisidir?", secenekler: ["Aktivasyon → çarp → topla", "Çarp → topla → bias → aktivasyon", "Topla → çarp → aktivasyon", "Bias → aktivasyon → çarp"], dogru: 1 },
    { soru: "Biyolojik sinapsın yapay sinir ağındaki karşılığı?", secenekler: ["Toplama fonksiyonu", "Çıkış", "Ağırlıklar", "İşlemci eleman"], dogru: 2 },
    { soru: "x = [2, 1], w = [0.5, 1], b = −1 ise ağırlıklı toplam + bias kaçtır?", secenekler: ["0", "1", "2", "3"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Nöronu Python'da kur",
    kod: `import numpy as np
x = np.array([1, 0, 1])
w = np.array([0.5, -0.4, 0.3])
b = 0.1
toplam = x.dot(w) + b
print('toplam:', toplam, ' çıktı:', 1 if toplam >= 0 else 0)`,
    not: "x.dot(w) çarpıp toplamayı tek seferde yapar. 37A konusunda bunun binlerce nöronla nasıl yapıldığını göreceksin." }

]};
