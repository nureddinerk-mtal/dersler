// YAPZ · 41 · Google Colab: Drive bağlama, GPU  (Kitap s. 177–183)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Colab: tarayıcıda, kurulumsuz, ücretsiz GPU/TPU'lu Python not defteri; tek gereken Google hesabı. Kitabın 1–3. Uygulamaları: Drive'a Colab'ı bağlama, GPU açma, Drive'ı not defterine bağlama. Arayüz kitaptakinden değişti; slaytlarda güncel yollar var.",
    akis: ["Colab özellikleri", "1. Uygulama: Drive'dan Colab not defteri aç", "2. Uygulama: GPU'yu aç ve kontrol et", "3. Uygulama: Drive'ı bağla, dosyaları listele", "Sıra Sizde (ikisi de ödev)", "Test"],
    hatalar: ["Kitaptaki yol <i>Edit → Notebook settings</i>. Türkçe arayüzde: <b>Çalışma zamanı → Çalışma zamanı türünü değiştir → T4 GPU</b>. Kitaptaki “Tesla K80” artık yok.", "Kitaptaki doğrulama kodu kopyala-yapıştır adımları kalktı; drive.mount artık açılır pencerede izin istiyor.", "Okul hesaplarında (MEB/Google Workspace) Colab yönetici tarafından kapatılmış olabilir; kişisel Gmail ile deneyin.", "Ücretsiz GPU süreli; uzun süre kullanılmayan oturum kapanır, dosyalar silinir. Kalıcı dosyalar Drive'a kaydedilmeli."],
    sorular: [["GPU açınca kodum hızlanır mı?", "Sadece TensorFlow/PyTorch gibi GPU kullanan kodlar. Pandas, scikit-learn çoğunlukla hızlanmaz."], ["Drive bağlamak şart mı?", "Kısa denemelerde değil. Ama dosyaların oturum kapanınca silinmemesi için Drive'a kaydetmek gerekir."]],
    kod: `# Drive'ı bağla
from google.colab import drive
drive.mount('/content/drive')

# Drive içeriğini listele
!ls "/content/drive/MyDrive"

# GPU var mı?
import tensorflow as tf
print(tf.config.list_physical_devices('GPU'))
!nvidia-smi` },

  { tur: "bilgi", baslik: "Google Colaboratory",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "⚙️ Kurulum yok", alt: "Tarayıcıda çalışır" }, { ust: "🎮 Ücretsiz GPU / TPU", alt: "Derin öğrenme için" },
      { ust: "🔗 Kolay paylaşım", alt: "Drive dosyası gibi" }, { ust: "👤 Google hesabı yeter", alt: "" }
    ]},
    not: "TensorFlow, OpenCV, Keras, scikit-learn kurulu gelir." },

  { tur: "uygulama", baslik: "1. Uygulama · Drive'dan Colab aç",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📁", yazi: "Drive'da yeni klasör" },
      { simge: "➕", yazi: "Yeni → Diğer", alt: "Colab yoksa: Daha fazla uygulama bağla" },
      { simge: "🔎", yazi: "Colaboratory ara, yükle" },
      { simge: "📓", yazi: "Yeni → Diğer → Google Colaboratory" }
    ]},
    adimlar: ["Drive'da “yapay_zeka” adlı klasör aç.", "Klasörde yeni bir Colab not defteri oluştur, adını değiştir.", "İlk hücreye print('Merhaba Colab') yaz, çalıştır."],
    kitap: "s. 178–179 · 1. Uygulama" },

  { tur: "uygulama", baslik: "2–3. Uygulama · GPU ve Drive",
    metin: "GPU: <b>Çalışma zamanı → Çalışma zamanı türünü değiştir → T4 GPU</b> (kitaptaki Edit → Notebook settings).",
    gorsel: { tip: "resim", yol: G + "41-u1.png" },
    adimlar: ["GPU'yu aç, kaydet.", "drive.mount ile Drive'ı bağla; açılan pencerede izin ver.", "!ls ile Drive klasörlerini listele.", "tf.config.list_physical_devices('GPU') ile GPU'yu kontrol et."],
    kitap: "s. 180–183 · 2–3. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1) Colab ücretsiz GPU hizmetinden faydalanmak için gerekenleri kendi Colab hesabında yap. 2) Colab not defterini Google Drive hesabına bağla. İkisinin de ekran görüntüsünü al.",
    kitap: "s. 181 ve 183" },

  { tur: "test", sorular: [
    { soru: "Colab'ı kullanmak için ne gerekir?", secenekler: ["Güçlü bir bilgisayar", "Google hesabı", "Python kurulumu", "Ücretli üyelik"], dogru: 1 },
    { soru: "Drive'ı Colab'a bağlayan kod hangisi?", secenekler: ["drive.mount('/content/drive')", "drive.open()", "import drive", "!mount drive"], dogru: 0, kod: true },
    { soru: "Colab'da hücre içinde terminal komutu çalıştırmak için başa ne yazılır?", secenekler: ["#", "!", "%%", "$"], dogru: 1 },
    { soru: "Oturum kapanınca kaybolmaması için dosyalar nereye kaydedilmeli?", secenekler: ["/content klasörüne", "Google Drive'a", "Çalışma zamanına", "Hiçbir yere"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "GPU ne kadar hızlı?",
    kod: `import tensorflow as tf, time
a = tf.random.normal((4000, 4000))
for cihaz in ['/CPU:0', '/GPU:0']:
    with tf.device(cihaz):
        t = time.time(); tf.matmul(a, a).numpy(); print(cihaz, round(time.time() - t, 3), 'sn')`,
    not: "GPU açıkken çalıştır. 4000×4000'lik iki matrisi çarpmak 64 milyar işlem demek." }

]};
