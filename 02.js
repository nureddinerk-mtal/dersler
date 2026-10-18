// YAPZ · 02 · Geliştirme ortamı: Anaconda ve Jupyter  (Kitap s. 17–23)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Anaconda = Python + yüzlerce bilim kütüphanesi + Jupyter, tek kurulumda. Jupyter Notebook kodu hücre hücre çalıştırır ve çıktıyı hemen altında gösterir; yapay zekâ çalışmaları için ideal. Laboratuvarda Anaconda büyük (birkaç GB) olduğu için kurulumu önceden yapın (Deep Freeze'i çözerek). Kurulamıyorsa 3. konudaki Colab tarayıcıdan aynı işi görür.",
    akis: ["Neden Python? (diller listesi)", "Anaconda kurulum adımları (önceden kurulu değilse demo)", "Jupyter: yeni defter, hücre türleri, Shift+Enter ile ilk çıktı"],
    hatalar: ["Hücreyi çalıştırmadan çıktı beklemek (Shift+Enter).", "Önceki hücreyi çalıştırmadan sonrakini çalıştırıp “tanımlı değil” (NameError) hatası almak.", "Markdown hücresine kod yazıp çalışmamasına şaşırmak."],
    sorular: [["Jupyter ile Python IDLE farkı?", "Jupyter kodu parça parça (hücre hücre) çalıştırır, çıktılar ve grafikler kodun hemen altında kalır. Veri çalışmasında çok pratik."],
              ["Hücrelerin yanındaki [3] gibi sayılar ne?", "Hücrenin kaçıncı sırada çalıştırıldığını gösterir. Sırayı karıştırırsak değişkenler beklediğimiz gibi olmayabilir."]]},

  { tur: "bilgi", baslik: "Neden Python?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🐍 Python", alt: "Kitapta bunu kullanıyoruz: kolay, güçlü kütüphaneler" },
      { ust: "Diğer diller", alt: "R, Java, C++, C#, JavaScript, Lisp, Prolog, Julia, Go…" }
    ]},
    not: "Makine öğrenmesi, veri bilimi ve yapay zekâda en çok tercih edilen dil Python." },

  { tur: "bilgi", baslik: "Anaconda nedir?",
    gorsel: { tip: "agac", kok: { ad: "🟢 Anaconda", yan: true, cocuklar: [
      { ad: "Python" }, { ad: "Jupyter Notebook", alt: "kod defteri" }, { ad: "Kütüphaneler", alt: "NumPy, Pandas, Matplotlib…" }, { ad: "Navigator", alt: "grafik arayüz" }
    ]}},
    not: "Tek kurulumla geliştirme ortamı, araçlar ve kütüphaneler birlikte gelir." },

  { tur: "uygulama", baslik: "Anaconda'yı kur",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🌐", yazi: "İndir", alt: "anaconda.com → işletim sistemine uygun dosya" },
      { simge: "👤", yazi: "Kurulum tipi", alt: "Just Me" },
      { simge: "📁", yazi: "Klasör", alt: "varsayılan ya da Browse" },
      { simge: "⚙️", yazi: "Gelişmiş", alt: "seçimler varsayılan → Install" },
      { simge: "🚀", yazi: "Navigator", alt: "aç, çalıştığını gör" }
    ]},
    adimlar: ["anaconda.com'dan kurulum dosyasını indir.", "Lisansı kabul et, kurulum tipini seç.", "Klasörü onayla, Install.", "Anaconda Navigator'ı aç."],
    kitap: "s. 18–20 · 1. Uygulama" },

  { tur: "bilgi", baslik: "Jupyter Notebook",
    metin: "Web tabanlı, etkileşimli kod defteri. Kodun çıktısı hemen altında görünür.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Code", alt: "Kod yazılır, çalışınca çıktı verir" },
      { ust: "Markdown", alt: "Başlık, yazı, liste, tablo" },
      { ust: "Raw", alt: "İşlenmeden olduğu gibi kalır" },
      { ust: "Heading", alt: "Başlık hücresi" }
    ]},
    not: "Çalıştırmak: ▶ Run ya da Shift + Enter. Sekmeler: Files (dosyalar), Running (çalışanlar), Clusters." },

  { tur: "uygulama", baslik: "İlk not defterim",
    gorsel: { tip: "resim", yol: G + "02-ilk-hucre.png", yazi: "Hücrenin hemen altında çıktı görünür." },
    adimlar: [
      "Jupyter'da New → Python 3.",
      "Üstteki “Untitled” yazısına çift tıkla, defterine ad ver.",
      "İlk hücreye ekrana Merhaba Dünya yazdıran kodu yaz.",
      "Shift + Enter ile çalıştır."
    ],
    kitap: "s. 22–23 · 2. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Hangi programlama dili yapay zekâ için yaygın olarak kullanılır?", secenekler: ["Python", "Perl", "Php", "Go", "Asp.Net"], dogru: 0 },
    { soru: "Jupyter'da seçili hücreyi çalıştıran kısayol?", secenekler: ["Ctrl + S", "Shift + Enter", "Alt + F4", "Ctrl + Z"], dogru: 1 },
    { soru: "Başlık ve açıklama yazısı için hangi hücre türü?", secenekler: ["Code", "Markdown", "Raw", "Kernel"], dogru: 1 },
    { soru: "Anaconda kurmanın avantajı?", secenekler: ["Python ve kütüphaneler tek kurulumda gelir", "İnternetsiz video izlenir", "Bilgisayarı hızlandırır", "Sadece oyun için"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Markdown ile güzel defter",
    kod: `# Büyük başlık
## Küçük başlık
**kalın** ve *eğik* yazı
- madde 1
- madde 2`,
    not: "Bunu bir Markdown hücresine yaz, Shift+Enter'a bas. Defterine başlık ve açıklama ekleyerek çalışmalarını düzenli tut." }

]};
