// YAPZ · 42A · OpenCV ile görüntü işleme  (Kitap dışı ek konu)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Kitap dışı konu (sınavda sorumlu değiller). Kitabın birim hedeflerinde “görüntü işleme kütüphanelerini kullanma” var ama OpenCV sadece Yolo kodunun içinde geçiyor. Bu ders temelleri veriyor: okuma, BGR/RGB, gri, yeniden boyutlandırma, bulanıklaştırma, Canny kenar bulma, kutu/yazı çizme ve Haar cascade ile yüz algılama (derin öğrenme öncesi klasik yöntem). Örnek resim NASA'nın kamu malı astronot fotoğrafı (Eileen Collins).",
    akis: ["Resim = sayı dizisi hatırlatma (18 ve 37A)", "Uygulama 1: oku, BGR → RGB, gri", "Uygulama 2: resize, blur, Canny", "Uygulama 3: Haar cascade ile yüz bul", "Klasik yöntem ↔ derin öğrenme karşılaştırması", "Test"],
    hatalar: ["cv2.imread dosyayı bulamazsa hata vermez, None döner; sonraki satırda “NoneType has no attribute shape” hatası çıkar. Dosya adını kontrol edin.", "Colab'da cv2.imshow çalışmaz (pencere açamaz). plt.imshow ya da <code>from google.colab.patches import cv2_imshow</code>.", "GaussianBlur çekirdek boyutu tek sayı olmalı: (21, 21)."],
    sorular: [["Haar cascade yapay zekâ mı?", "Klasik makine öğrenmesi (2001, Viola–Jones). Hızlı ama yan dönmüş yüzlerde zayıf. Bugünkü yüz algılayıcılar derin ağ."], ["Canny'deki 100 ve 200 ne?", "Kenar sayılması için alt ve üst eşik. Düşürünce daha çok kenar çıkar."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 42A-u1 · 1. adım
import cv2
import matplotlib.pyplot as plt
resim = cv2.imread('astronot.png')
print(type(resim), resim.shape, resim.dtype)

# 42A-u1 · 2. adım
rgb = cv2.cvtColor(resim, cv2.COLOR_BGR2RGB)
gri = cv2.cvtColor(resim, cv2.COLOR_BGR2GRAY)
fig, ax = plt.subplots(1, 3, figsize=(10, 3.4))
ax[0].imshow(resim); ax[0].set_title('BGR (yanlış renk)')
ax[1].imshow(rgb); ax[1].set_title('RGB')
ax[2].imshow(gri, cmap='gray'); ax[2].set_title('Gri')
for a in ax: a.axis('off')
plt.show()

# 42A-u2 · 3. adım
kucuk = cv2.resize(rgb, (128, 128))
bulanik = cv2.GaussianBlur(rgb, (21, 21), 0)
kenar = cv2.Canny(gri, 100, 200)
fig, ax = plt.subplots(1, 3, figsize=(10, 3.4))
ax[0].imshow(kucuk); ax[0].set_title('resize 128×128')
ax[1].imshow(bulanik); ax[1].set_title('GaussianBlur')
ax[2].imshow(kenar, cmap='gray'); ax[2].set_title('Canny kenarlar')
for a in ax: a.axis('off')
plt.show()

# 42A-u3 · 4. adım
sinif = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
yuzler = sinif.detectMultiScale(gri, scaleFactor=1.1, minNeighbors=5)
print('Bulunan yüz sayısı:', len(yuzler))
cizim = rgb.copy()
for (x, y, w, h) in yuzler:
    cv2.rectangle(cizim, (x, y), (x + w, y + h), (255, 0, 0), 3)
    cv2.putText(cizim, 'yuz', (x, y - 8), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 0, 0), 2)
plt.figure(figsize=(4.5, 4.5)); plt.imshow(cizim); plt.axis('off'); plt.show()`,
    not: "Astronot resmi malzemede (astronot.png). Öğrenciler kendi fotoğraflarıyla da deneyebilir; yüz algılamayı arkadaşlarının fotoğrafında izinsiz denememeleri hatırlatılabilir (0B etik konusu)." },

  { tur: "bilgi", baslik: "OpenCV",
    metin: "Açık kaynak bilgisayarlı görü kütüphanesi. Colab'da kurulu; bilgisayarda <code>pip install opencv-python</code>.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "cv2.imread / imwrite", alt: "Resim oku / kaydet" }, { ust: "cv2.cvtColor", alt: "Renk dönüşümü (BGR → RGB, gri)" },
      { ust: "cv2.resize", alt: "Boyutlandır" }, { ust: "cv2.GaussianBlur", alt: "Bulanıklaştır" },
      { ust: "cv2.Canny", alt: "Kenar bul" }, { ust: "cv2.rectangle / putText", alt: "Kutu ve yazı çiz" }
    ]},
    not: "OpenCV renkleri BGR (mavi-yeşil-kırmızı) sırasıyla tutar." },

  { tur: "uygulama", baslik: "Oku ve renkleri dönüştür",
    gorsel: { tip: "resim", yol: G + "42A-u1.png" },
    adimlar: ["astronot.png'yi cv2.imread ile oku; türünü, şeklini ve veri tipini yazdır.", "BGR → RGB ve gri dönüşümlerini yap; üçünü yan yana göster."],
    malzeme: ["astronot.png"] },

  { tur: "uygulama", baslik: "Boyutlandır, bulanıklaştır, kenar bul",
    gorsel: { tip: "resim", yol: G + "42A-u2.png" },
    adimlar: ["Resmi 128×128'e küçült.", "GaussianBlur (21, 21) ile bulanıklaştır.", "Gri resimde Canny(100, 200) ile kenarları bul. Üçünü yan yana göster."] },

  { tur: "uygulama", baslik: "Yüz algıla",
    gorsel: { tip: "resim", yol: G + "42A-u3.png" },
    adimlar: ["haarcascade_frontalface_default.xml sınıflandırıcısını yükle (cv2.data.haarcascades).", "detectMultiScale ile gri resimde yüzleri bul, sayısını yazdır.", "Her yüzün etrafına kutu ve “yuz” yazısı çiz."] },

  { tur: "bilgi", baslik: "Klasik ↔ derin öğrenme",
    gorsel: { tip: "ikili",
      sol: { baslik: "Haar cascade (2001)", gorsel: { tip: "kartlar", kartlar: [ { ust: "Elle tasarlanmış özellikler", alt: "açık-koyu desenler" }, { ust: "Çok hızlı", alt: "eski telefonlarda bile" }, { ust: "Sadece önden yüz", alt: "" } ] } },
      sag: { baslik: "Derin öğrenme (Yolo, 42. konu)", gorsel: { tip: "kartlar", kartlar: [ { ust: "Özellikleri kendisi öğrenir", alt: "" }, { ust: "GPU ister", alt: "" }, { ust: "80+ nesne, her açıdan", alt: "" } ] } },
      ok: "→" },
    not: "40. konudaki “özellikleri kim çıkarıyor?” farkının somut örneği." },

  { tur: "test", sorular: [
    { soru: "OpenCV ile okunan resmi plt.imshow ile doğru renkte göstermek için ne yapılır?", secenekler: ["cv2.resize", "cv2.cvtColor(resim, cv2.COLOR_BGR2RGB)", "cv2.Canny", "Hiçbir şey"], dogru: 1, kod: true },
    { soru: "Kenar bulmak için hangi fonksiyon kullanılır?", secenekler: ["cv2.GaussianBlur", "cv2.Canny", "cv2.imread", "cv2.putText"], dogru: 1 },
    { soru: "Gri bir resmin shape'i (512, 512) ise renkli hâlinin shape'i?", secenekler: ["(512, 512)", "(512, 512, 3)", "(3, 512)", "(1536, 512)"], dogru: 1 },
    { soru: "Haar cascade yüz algılayıcı hangi gruptadır?", secenekler: ["Derin öğrenme", "Klasik makine öğrenmesi", "Pekiştirmeli öğrenme", "Kümeleme"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Gözleri de bul",
    kod: `goz = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')
for (x, y, w, h) in yuzler:
    yuz_gri = gri[y:y+h, x:x+w]
    for (gx, gy, gw, gh) in goz.detectMultiScale(yuz_gri, 1.1, 10):
        cv2.rectangle(cizim, (x+gx, y+gy), (x+gx+gw, y+gy+gh), (0, 255, 0), 2)
plt.imshow(cizim); plt.axis('off'); plt.show()`,
    not: "Gözler sadece yüz kutusunun içinde aranıyor (dilimleme, 06. konu). Hem hızlı hem daha az yanlış alarm." }

]};
