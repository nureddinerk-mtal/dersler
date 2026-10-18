// YAPZ · 03 · Paket yükleme, Colab ve Kaggle Notebook  (Kitap s. 23–27, 29–30)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Paket = başkalarının yazdığı hazır kod (kütüphane). conda veya pip ile kurulur. Colab ve Kaggle Notebook, kurulum gerektirmeyen bulut Jupyter'leridir; Google hesabıyla Colab hemen açılır. Laboratuvarda Deep Freeze yüzünden kurulumlar kaybolduğu için yıl boyunca Colab'ı ana ortam yapmak çok pratik.",
    akis: ["Paket kurma/kaldırma: Navigator, conda, pip", "Colab'ı Drive'a bağla ve ilk kod", "Kaggle Notebook tanıtımı"],
    hatalar: ["pip komutunu Python hücresine ünlem olmadan yazmak (Colab'da !pip install …).", "Okul e-postası Colab'a kapalıysa takılmak: kişisel Gmail ile deneyin.", "Paketi kurup import etmeyi unutmak."],
    sorular: [["conda mı pip mi?", "Anaconda'da önce conda dene; pakette yoksa pip. Colab'da pip kullanılır."], ["Colab ücretsiz mi?", "Evet; ücretsiz sürümde GPU süresi ve oturum süresi sınırlıdır, dersler için yeter."]]},

  { tur: "bilgi", baslik: "Paket yükleme ve kaldırma",
    gorsel: { tip: "terminal", baslik: "Anaconda Prompt", satirlar: [
      "> conda install opencv", "> pip install scikit-learn", "", "> conda uninstall opencv", "> pip uninstall scikit-learn"
    ]},
    not: "Grafik arayüzle: Anaconda Navigator → Environments → paket ara → Apply. Kaldırmak için “Mark for removal”." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Yapay zekâ ve makine öğrenmesinde sık kullanılan açık kaynak kütüphaneleri ve özelliklerini araştır. Sınıfta paylaş.",
    kitap: "s. 24" },

  { tur: "bilgi", baslik: "Bulut ortamı: Google Colab",
    gorsel: { tip: "ikili", ok: "≈",
      sol: { baslik: "💻 Anaconda + Jupyter", gorsel: { tip: "html", icerik: "<p style='margin:0'>Bilgisayara kurulur.<br>Bilgisayarın gücünü kullanır.</p>" } },
      sag: { baslik: "☁️ Colab", gorsel: { tip: "html", icerik: "<p style='margin:0'>Kurulum yok, tarayıcıda çalışır.<br>Google'ın sunucularını (GPU dahil) kullanır.</p>" } }
    }},

  { tur: "uygulama", baslik: "Colab ile ilk kod",
    gorsel: { tip: "resim", yol: G + "03-zaman.png", yazi: "Senin çıktında o anki tarih ve saat yazar." },
    adimlar: [
      "Gmail ile giriş yap → Drive → Yeni → Diğer.",
      "Colaboratory yoksa: “Daha fazla uygulama bağla” → Colaboratory → ekle.",
      "Yeni Colab defterinde time kütüphanesini import et, time.ctime() yaz.",
      "Hücrenin solundaki ▶ düğmesine bas."
    ],
    kitap: "s. 25–26 · 3. Uygulama" },

  { tur: "uygulama", baslik: "Kaggle Notebook",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🌐", yazi: "kaggle.com", alt: "giriş yap" },
      { simge: "➕", yazi: "Code → New Notebook" },
      { simge: "✏️", yazi: "Ad ver", alt: "sol üst köşe" },
      { simge: "🔗", yazi: "Share", alt: "Public / Private" }
    ]},
    adimlar: ["kaggle.com'a gir, üye ol.", "Code → New Notebook.", "Defterine ad ver, ilk hücrede bir print dene.", "Share ile paylaşım ayarına bak."],
    kitap: "s. 29–30 · 4. Uygulama" },

  { tur: "test", sorular: [
    { soru: "Anaconda Prompt'ta OpenCV paketini kuran komut?", secenekler: ["conda install opencv", "install opencv", "python opencv", "pip remove opencv"], dogru: 0 },
    { soru: "Colab'ın en büyük avantajı?", secenekler: ["Kurulum gerektirmez", "İnternetsiz çalışır", "Ücretli olması", "Sadece Windows'ta çalışır"], dogru: 0 },
    { soru: "Paketi kaldırmak için pip komutu?", secenekler: ["pip delete", "pip uninstall paket_adı", "pip remove-all", "conda add"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Colab'da paket kurmak",
    kod: `!pip install yfinance
import yfinance as yf`,
    not: "Colab hücresinde komut satırı komutlarının başına ! konur. Kurulan paket oturum kapanınca silinir." }

]};
