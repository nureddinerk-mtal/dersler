// YAPZ · 40A · Optimizasyon: model nasıl daha iyi öğrenir?  (Kitap dışı ek konu)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Kitap dışı konu (sınavda sorumlu değiller). Kitap “hatanın geriye yayılımı”, “öğrenme oranı”, “epok”, “Adam optimizer” terimlerini 43–44. konularda açıklamadan kullanıyor. Bu ders onları tek bir oyuncak problemle anlatıyor: kayıp = (w − 3)². Dereceli iniş (gradient descent): eğimin tersine küçük adım at. Öğrenme oranı çok küçükse yavaş, çok büyükse zıplar. Epok, batch, geri yayılım ve Adam kartları.",
    akis: ["Dağdan sisli inen yürüyüşçü benzetmesi", "Kayıp fonksiyonu", "Uygulama 1: 10 adımda w'yi 3'e yaklaştır, yolu çiz", "Uygulama 2: üç öğrenme oranı", "Terim kartları: epok, batch, geri yayılım, Adam", "Test"],
    hatalar: ["Eğimin işaretini ters almak: w = w − oran·eğim (eksi!). Artı yazarsa kayıp büyür.", "Öğrenme oranını “ne kadar büyük o kadar hızlı öğrenir” sanmak.", "Epok ile adımı (iteration) karıştırmak: epok tüm veri setinin bir kez görülmesi."],
    sorular: [["Gerçek ağlarda tek w mi var?", "Hayır, binlerce–milyarlarca. Ama her biri için aynı kural uygulanıyor; geri yayılım her ağırlığın eğimini hesaplıyor."], ["Adam neden popüler?", "Her ağırlık için öğrenme oranını kendisi ayarlıyor; çoğu problemde ayar yapmadan iyi çalışıyor."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 40A-u1 · 1. adım
def kayip(w):
    return (w - 3) ** 2
def egim(w):
    return 2 * (w - 3)
w = 0.0
ogrenme_orani = 0.1
for adim in range(1, 11):
    w = w - ogrenme_orani * egim(w)
    print(adim, '. adım  w =', round(w, 3), '  kayıp =', round(kayip(w), 4))

# 40A-u1 · 2. adım
import numpy as np, matplotlib.pyplot as plt
ws = np.linspace(-1, 7, 100)
plt.plot(ws, kayip(ws), color='gray')
w = 0.0; yol = [w]
for _ in range(10):
    w = w - 0.1 * egim(w); yol.append(w)
yol = np.array(yol)
plt.plot(yol, kayip(yol), 'o-', color='red')
plt.xlabel('ağırlık (w)'); plt.ylabel('kayıp'); plt.title('Dereceli iniş')
plt.show()

# 40A-u2 · 3. adım
fig, ax = plt.subplots(1, 3, figsize=(10, 3))
for a, oran in zip(ax, [0.01, 0.1, 0.95]):
    w = 0.0; yol = [w]
    for _ in range(10):
        w = w - oran * egim(w); yol.append(w)
    yol = np.array(yol)
    a.plot(ws, kayip(ws), color='gray'); a.plot(yol, kayip(yol), 'o-', color='red')
    a.set_title('öğrenme oranı = ' + str(oran))
plt.tight_layout(); plt.show()`,
    not: "Türev bilgisi gerekmiyor: “eğim = o noktadaki dikliği” demek yeterli. (w − 3)²'nin eğimi 2(w − 3)." },

  { tur: "bilgi", baslik: "Sisli dağdan inmek",
    metin: "Sisli bir dağdasın, vadiyi göremiyorsun. Tek yapabileceğin: ayağının altındaki eğime bakıp <b>aşağı doğru küçük bir adım</b> atmak, tekrar bakmak. Sinir ağı da hatasını (kayıp) böyle azaltır.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🔮", yazi: "Tahmin yap", alt: "ileri yayılım" },
      { simge: "📏", yazi: "Kaybı ölç", alt: "tahmin ne kadar yanlış?" },
      { simge: "📐", yazi: "Eğimi bul", alt: "geri yayılım" },
      { simge: "👣", yazi: "Ağırlıkları güncelle", alt: "w = w − oran × eğim" },
      { simge: "🔁", yazi: "Tekrarla" }
    ]}},

  { tur: "uygulama", baslik: "Dereceli iniş",
    metin: "Kayıp = (w − 3)², eğim = 2(w − 3). En iyi w'nin 3 olduğunu biliyoruz; bakalım algoritma bulabilecek mi?",
    gorsel: { tip: "resim", yol: G + "40A-u1.png" },
    adimlar: ["kayip(w) ve egim(w) fonksiyonlarını yaz. w = 0, öğrenme oranı 0.1 ile 10 adım güncelle; her adımda w ve kaybı yazdır.", "Kayıp eğrisini gri, w'nin izlediği yolu kırmızı noktalarla çiz."] },

  { tur: "uygulama", baslik: "Öğrenme oranı",
    gorsel: { tip: "resim", yol: G + "40A-u2.png" },
    adimlar: ["Aynı işlemi 0.01, 0.1 ve 0.95 öğrenme oranlarıyla yan yana çiz. Hangisi çok yavaş, hangisi zıplıyor?", "1.1 dene: ne oluyor?"] },

  { tur: "bilgi", baslik: "43–44. konularda karşına çıkacak terimler",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Kayıp (loss)", alt: "Tahminin ne kadar yanlış olduğu; küçülmeli" },
      { ust: "Öğrenme oranı", alt: "Adım büyüklüğü · 0.001, 0.01…" },
      { ust: "Epok", alt: "Tüm eğitim verisinin bir kez görülmesi" },
      { ust: "Batch", alt: "Bir güncellemede kullanılan örnek paketi (32 resim)" },
      { ust: "Geri yayılım", alt: "Hatayı çıkıştan girişe dağıtıp her ağırlığın eğimini bulma" },
      { ust: "Adam", alt: "Öğrenme oranını kendisi ayarlayan popüler optimizer" }
    ]},
    not: "MNIST: 60.000 resim, batch 32 → bir epok = 1875 güncelleme. Çıktıda “1875/1875” bu yüzden yazar." },

  { tur: "test", sorular: [
    { soru: "Dereceli inişte ağırlık nasıl güncellenir?", secenekler: ["w = w + oran × eğim", "w = w − oran × eğim", "w = oran × eğim", "w = w × eğim"], dogru: 1 },
    { soru: "Öğrenme oranı çok büyük seçilirse ne olur?", secenekler: ["Çok yavaş öğrenir", "En iyi değerin etrafında zıplar ya da uzaklaşır", "Hiç etkisi olmaz", "Kayıp 0 olur"], dogru: 1 },
    { soru: "60.000 resim, batch 100 ise bir epokta kaç güncelleme yapılır?", secenekler: ["100", "600", "6.000", "60.000"], dogru: 1 },
    { soru: "Hatanın çıkıştan girişe doğru dağıtılarak eğimlerin hesaplanmasına ne denir?", secenekler: ["İleri yayılım", "Geri yayılım", "Epok", "Normalleştirme"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Doğruyu dereceli inişle bul",
    kod: `import numpy as np
x = np.array([1, 2, 3, 4, 5]); y = np.array([3, 5, 7, 9, 11])   # y = 2x + 1
a, b = 0.0, 0.0
for adim in range(2000):
    hata = (a * x + b) - y
    a -= 0.01 * 2 * np.mean(hata * x)
    b -= 0.01 * 2 * np.mean(hata)
print(round(a, 3), round(b, 3))`,
    not: "29. konudaki LinearRegression'ın bulduğu sabit ve katsayıyı, bu sefer adım adım iniş yaparak bulduk." }

]};
