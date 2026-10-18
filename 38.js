// YAPZ · 38 · Aktivasyon fonksiyonları  (Kitap s. 167–173)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Aktivasyon fonksiyonu ağa doğrusal olmayan dünyayı öğretir; olmazsa kaç katman olursa olsun ağ tek bir doğrusal fonksiyona çöker. Türler: basamak, doğrusal, sigmoid (0–1), tanh (−1…1), ReLU (en yaygın), Leaky ReLU (ölü nöron çözümü), softmax (çok sınıflı çıkış, olasılık). Seçim: gizli katmanda ReLU ile başla, çıkışta softmax (çok sınıf) / sigmoid (ikili). Kitaptaki Colab kodu ile dört fonksiyon tek grafikte çiziliyor.",
    akis: ["Neden gerekli?", "Altı fonksiyon grafiği", "Softmax", "Hangisini seçmeli?", "Uygulama: kitaptaki grafik kodu", "TensorFlow Playground etkinliği", "Test"],
    hatalar: ["Kitaptaki kodda <code>tanh = tanh(x)</code> satırı fonksiyonun adını değişkenle eziyor; hücre ikinci kez çalışınca “not callable” hatası verir. Değişkene farklı ad verin (ör. tanh_y).", "Kitapta kod girintileri basımda kaybolmuş; for/if içleri 4 boşluk içeri.", "Sigmoid ile softmax'ı karıştırmak: sigmoid tek çıkış (ikili), softmax çok çıkış ve toplamları 1."],
    sorular: [["Ölü nöron ne?", "ReLU'da girdisi hep negatif kalan nöron hep 0 verir ve öğrenmeyi bırakır. Leaky ReLU negatifte küçük bir eğim bırakarak bunu önler."], ["Gradyan ölmesi?", "Sigmoid/tanh'ın uçlarında eğim neredeyse 0; geri yayılımda sinyal kaybolur, derin ağlar öğrenemez."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 38-u1 · Aktivasyon grafikleri
import math
import matplotlib.pyplot as plt
import numpy as np
def sigmoid(x):
    a = []
    for i in x:
        a.append(1/(1+math.exp(-i)))
    return a
def tanh(x):
    return np.tanh(x)
def re(x):
    b = []
    for i in x:
        if i < 0: b.append(0)
        else: b.append(i)
    return b
def lr(x):
    b = []
    for i in x:
        if i < 0: b.append(i/10)
        else: b.append(i)
    return b
x = np.arange(-9., 9., 0.1)
line_1, = plt.plot(x, sigmoid(x), label='Sigmoid')
line_2, = plt.plot(x, tanh(x), label='Tanh')
line_3, = plt.plot(x, re(x), label='ReLU')
line_4, = plt.plot(x, lr(x), label='Leaky ReLU')
plt.legend(handles=[line_1, line_2, line_3, line_4])
plt.axhline(y=0, color='k')
plt.axvline(x=0, color='k')
plt.show()`,
    not: "Ölçme sorusu 5 (cevap A: tek katmanlı ağ doğrusal olmayan aktivasyon kullanamaz) bu konuya uygun." },

  { tur: "bilgi", baslik: "Neden aktivasyon?",
    metin: "L = x·w + b hesaplandıktan sonra sonuç bir fonksiyondan geçirilir. Bu fonksiyon olmasa ağ sadece düz çizgiler çizebilirdi; resim, ses, metin gibi karmaşık verileri öğrenemezdi.",
    gorsel: { tip: "akis", adimlar: [ { simge: "x·w + b", yazi: "Ağırlıklı toplam" }, { simge: "f( )", yazi: "Aktivasyon", alt: "doğrusal olmayan" }, { simge: "➡️", yazi: "Çıkış ya da sonraki katman" } ] } },

  { tur: "bilgi", baslik: "Fonksiyonlar",
    gorsel: { tip: "resim", yol: G + "38-fonksiyonlar.png" } },

  { tur: "bilgi", baslik: "Kısaca",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Basamak", alt: "0 / 1 · ikili sınıflayıcı, gizli katmanda kullanılmaz" },
      { ust: "Doğrusal", alt: "Türevi sabit → öğrenme yok, katmanlar işlevsiz" },
      { ust: "Sigmoid", alt: "0–1 arası · eskiden çok kullanılırdı" },
      { ust: "tanh", alt: "−1…1 · 0 merkezli, sigmoid'den iyi" },
      { ust: "ReLU", alt: "max(0, x) · en yaygın, hızlı; ölü nöron riski" },
      { ust: "Leaky ReLU", alt: "Negatifte küçük eğim · ölü nöron çözümü" },
      { ust: "Softmax", alt: "Çok sınıflı çıkış · olasılıklar, toplam 1" }
    ]}},

  { tur: "bilgi", baslik: "Hangisini seçmeli?",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🧱", yazi: "Gizli katmanlar", alt: "ReLU ile başla" },
      { simge: "💀", yazi: "Nöronlar ölüyorsa", alt: "Leaky ReLU" },
      { simge: "🎯", yazi: "Çıkış: çok sınıf", alt: "Softmax" },
      { simge: "⚖️", yazi: "Çıkış: iki sınıf", alt: "Sigmoid" }
    ]},
    not: "En doğrusu: kendi ağında deneyerek seçmek." },

  { tur: "uygulama", baslik: "Aktivasyon grafiklerini çiz",
    metin: "Kitaptaki <code>tanh = tanh(x)</code> satırı fonksiyonu ezer; değişkene başka ad ver.",
    gorsel: { tip: "resim", yol: G + "38-u1.png" },
    adimlar: ["math, matplotlib ve NumPy'yi içe aktar.", "sigmoid, tanh, re (ReLU) ve lr (Leaky ReLU, negatifte x/10) fonksiyonlarını yaz.", "x = np.arange(-9, 9, 0.1) için dördünü aynı grafikte çiz; legend ve eksen çizgilerini ekle."],
    kitap: "s. 171–172" },

  { tur: "uygulama", baslik: "Tarayıcıda sinir ağı eğit",
    metin: "<b>playground.tensorflow.org</b> sitesini aç.",
    adimlar: ["Spiral veri setini seç. Aktivasyonu Linear yap, Play'e bas: ağ spirali ayırabiliyor mu?", "Aktivasyonu ReLU ya da Tanh yap, tekrar dene.", "Gizli katman ve nöron sayısını artır-azalt; test kaybı (test loss) nasıl değişiyor? Defterine not et."],
    kitap: "s. 170 · Görsel 3.14" },

  { tur: "test", sorular: [
    { soru: "📖 Hangi yapay sinir ağı doğrusal olmayan aktivasyon fonksiyonu kullanamaz?", secenekler: ["Tek katmanlı", "Çok katmanlı", "Gizli katmanlı", "İleri beslemeli", "Geri beslemeli"], dogru: 0 },
    { soru: "Çok sınıflı bir sınıflandırmada çıkış katmanında genellikle hangisi kullanılır?", secenekler: ["ReLU", "Doğrusal", "Softmax", "Basamak"], dogru: 2 },
    { soru: "ReLU(−3) ve ReLU(5) sırasıyla kaçtır?", secenekler: ["−3 ve 5", "0 ve 5", "0 ve 1", "−0,3 ve 5"], dogru: 1 },
    { soru: "Değerleri −1 ile 1 arasına sıkıştıran fonksiyon?", secenekler: ["Sigmoid", "tanh", "ReLU", "Softmax"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Softmax'ı hesapla",
    kod: `import numpy as np
skorlar = np.array([2.0, 1.0, 0.1])     # kedi, köpek, kuş
olasilik = np.exp(skorlar) / np.exp(skorlar).sum()
print(olasilik.round(3), olasilik.sum())`,
    not: "En büyük skor en büyük olasılığı alır, toplam her zaman 1. 43. konuda model her rakam için böyle 10 olasılık üretecek." }

]};
