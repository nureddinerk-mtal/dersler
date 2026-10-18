// YAPZ · 42 · Yolo ile nesne algılama  (Kitap s. 183–193)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "YOLO (You Only Look Once): resme bir kez bakıp içindeki nesneleri kutu + sınıf + güven skoruyla bulan derin ağ. Kitabın 4. Uygulaması AlexeyAB/darknet deposunu Colab'da derleyip Yolo v4 ve web kamerasıyla canlı algılama yapıyor (~10 sayfa kod). Bu kod artık güvenilir çalışmıyor (ağırlık dosyasının Google Drive linki, derleme ayarları). Platformda iki güncel yol var: (1) aynı Yolo v4 modelini (tiny sürümü) OpenCV ile 10 satırda çalıştırmak (hedef görsel bu yolla üretildi), (2) Ultralytics YOLO ile 3 satır (Meraklısına).",
    akis: ["Nesne algılama nedir? (sınıflandırma ↔ algılama)", "YOLO fikri", "Dosyaları indir (cfg, weights, coco.names, person.jpg)", "Uygulama: OpenCV ile Yolo v4-tiny", "Kendi fotoğrafınla dene", "Meraklısına: Ultralytics, web kamerası", "Test"],
    hatalar: ["Kitaptaki <code>wget … docs.google.com/uc?…</code> komutu ağırlık dosyasını indiremiyor (Drive linki değişti). Ağırlık dosyası GitHub'dan: <code>!wget https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v4_pre/yolov4-tiny.weights</code>", "OpenCV resimleri BGR okur; plt.imshow'da renkler mavi çıkarsa cv2.cvtColor(…, cv2.COLOR_BGR2RGB).", "Bu kod Colab'daki OpenCV 4.x ile çalışır. Kendi bilgisayarında OpenCV 5 kuruluysa readNetFromDarknet yok; <code>pip install opencv-python==4.10.0.84</code>.", "Web kamerası kısmı Colab'da tarayıcı izni ister; okulda kamera yoksa atlayın."],
    sorular: [["80 sınıf ne?", "COCO veri setindeki 80 nesne türü: insan, araba, köpek, sandalye, telefon… coco.names dosyasında listeli."], ["Güven skoru 0,78 ne demek?", "Model o kutunun içinde o nesne olduğundan %78 emin."]],
    kod: `# Colab'da dosyaları indir (bir kez)
!wget -q https://raw.githubusercontent.com/AlexeyAB/darknet/master/cfg/yolov4-tiny.cfg
!wget -q https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v4_pre/yolov4-tiny.weights
!wget -q https://raw.githubusercontent.com/AlexeyAB/darknet/master/data/coco.names
!wget -q https://raw.githubusercontent.com/AlexeyAB/darknet/master/data/person.jpg

import cv2, numpy as np, matplotlib.pyplot as plt
net = cv2.dnn.readNetFromDarknet('yolov4-tiny.cfg', 'yolov4-tiny.weights')
model = cv2.dnn_DetectionModel(net)
model.setInputParams(size=(416, 416), scale=1/255, swapRB=True)
siniflar = open('coco.names').read().strip().split('\\n')
resim = cv2.imread('person.jpg')
ids, skorlar, kutular = model.detect(resim, confThreshold=0.4, nmsThreshold=0.4)
for i, s, k in zip(np.array(ids).flatten(), np.array(skorlar).flatten(), kutular):
    x, y, w, h = k
    cv2.rectangle(resim, (x, y), (x + w, y + h), (0, 255, 0), 2)
    cv2.putText(resim, f'{siniflar[i]} [{s:.2f}]', (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)
    print(siniflar[i], round(float(s), 2))
plt.imshow(cv2.cvtColor(resim, cv2.COLOR_BGR2RGB)); plt.axis('off'); plt.show()`,
    not: "Kitaptaki tam kodu (darknet derleme + web kamerası) çalıştırmak isteyen öğrenci olursa: derleme Colab'da 5–10 dk sürer ve GPU açık olmalı." },

  { tur: "bilgi", baslik: "Sınıflandırma ↔ nesne algılama",
    gorsel: { tip: "ikili",
      sol: { baslik: "Sınıflandırma", gorsel: { tip: "kartlar", kartlar: [ { ust: "“Bu resimde köpek var.”", alt: "Tüm resme tek etiket" } ] } },
      sag: { baslik: "Nesne algılama", gorsel: { tip: "kartlar", kartlar: [ { ust: "“Şurada köpek, şurada insan, şurada at.”", alt: "Her nesneye kutu + etiket + güven skoru" } ] } },
      ok: "→" } },

  { tur: "bilgi", baslik: "YOLO: bir kere bak",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🖼️", yazi: "Resim", alt: "416×416'ya küçült" },
      { simge: "🧠", yazi: "Derin ağ", alt: "tek geçiş" },
      { simge: "🔲", yazi: "Kutular + sınıflar + skorlar" },
      { simge: "✂️", yazi: "Eleme", alt: "düşük skorlu ve üst üste binenler atılır" }
    ]},
    not: "Tek geçişte çalıştığı için hızlıdır; videoda gerçek zamanlı algılama yapılabilir. COCO veri setindeki 80 nesneyi tanır." },

  { tur: "uygulama", baslik: "4. Uygulama · Yolo v4-tiny ile nesne algılama",
    metin: "Kitaptaki darknet derleme yöntemi yerine aynı Yolo v4 modelini OpenCV ile çalıştır. İlk hücrede dört dosyayı indir: <code>!wget</code> + adresler (öğretmeninden al).",
    gorsel: { tip: "resim", yol: G + "42-u1.png" },
    adimlar: ["yolov4-tiny.cfg, yolov4-tiny.weights, coco.names ve person.jpg dosyalarını indir.", "cv2.dnn.readNetFromDarknet ile ağı yükle, DetectionModel oluştur (416×416, scale=1/255, swapRB=True).", "coco.names'ten sınıf adlarını oku. person.jpg'yi oku, model.detect ile algıla.", "Her nesne için kutu ve “sınıf [skor]” yazısı çiz, sınıfları yazdır.", "Resmi RGB'ye çevirip göster."],
    kitap: "s. 183–193 · 4. Uygulama" },

  { tur: "uygulama", baslik: "Kendi fotoğrafınla dene",
    gorsel: { tip: "resim", yol: G + "42-m1.png" },
    adimlar: ["Colab'da sol paneldeki 📁'den kendi fotoğrafını yükle (sınıf, sokak, masa üstü…).", "Dosya adını değiştirip aynı kodu çalıştır. Hangi nesneleri buldu, hangilerini kaçırdı?", "confThreshold'u 0.2 ve 0.7 yap; sonuç nasıl değişti?"] },

  { tur: "test", sorular: [
    { soru: "YOLO kısaltması neyi anlatır?", secenekler: ["Resme birçok kez bakar", "Resme bir kez bakar", "Sadece yüz tanır", "Video sıkıştırır"], dogru: 1 },
    { soru: "Nesne algılamanın sınıflandırmadan farkı?", secenekler: ["Nesnelerin yerini kutuyla da gösterir", "Daha az veri ister", "Sadece tek nesne bulur", "Fark yoktur"], dogru: 0 },
    { soru: "confThreshold değerini yükseltirsek ne olur?", secenekler: ["Daha çok kutu çizilir", "Sadece daha emin olunan kutular kalır", "Model yeniden eğitilir", "Resim büyür"], dogru: 1 },
    { soru: "OpenCV resmi hangi renk sırasıyla okur?", secenekler: ["RGB", "BGR", "CMYK", "Gri"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Ultralytics YOLO: 3 satır",
    kod: `!pip install -q ultralytics
from ultralytics import YOLO
model = YOLO('yolo11n.pt')                         # en küçük güncel model
sonuc = model('https://ultralytics.com/images/bus.jpg')
sonuc[0].show()`,
    not: "Güncel YOLO sürümleri böyle kullanılıyor. Videoda: model('video.mp4', save=True). Kitaptaki web kamerası örneği de bu kütüphaneyle çok daha kısa yazılır." }

]};
