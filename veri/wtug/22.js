// WTUG · 22 · CSS ekleme yöntemleri  (Kitap s. 104–109)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "CSS'in üç ekleme yolu: satır içi, sayfa içi, harici. Harici CSS en doğrusu; bir dosya değişince bütün site değişir. Öncelik: satır içi > sayfa içi > harici (sonraki yazılan kazanır).", akis: ["Önce/sonra görselleri", "Üç yöntemi aynı sayfada dene", "İki harici CSS dosyası"], hatalar: ["link etiketini body'ye yazmak ya da rel=\"stylesheet\"i unutmak", "Harici CSS'e &lt;style&gt; etiketi yazmak", "Noktalı virgül ve süslü parantez unutmak"], sorular: [["CSS dosyam çalışmıyor?", "href'teki yol ve dosya adı yanlış olabilir; F12 → Console'da 404 hatası görünür."], ["İki kural çakışırsa?", "Daha özel seçici, eşitse en son yazılan kazanır."]] },


  { tur: "bilgi", baslik: "HTML vücut, CSS kıyafet",
    gorsel: { tip: "ikili",
      sol: { baslik: "Sadece HTML", gorsel: { tip: "tarayici", adres: "index.html", icerik: "<h1>CSS öğreniyorum</h1>" } },
      sag: { baslik: "HTML + CSS", gorsel: { tip: "tarayici", adres: "index.html", icerik: "<h1 style='background-color:lightblue;font-family:Arial;color:#1f3a6b;padding:6px;border-radius:8px'>CSS öğreniyorum</h1>" } }
    },
    not: "CSS: Cascading Style Sheets (Basamaklı Stil Şablonu)." },

  { tur: "bilgi", baslik: "CSS kod yapısı",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "color", etiket: "özellik" }, { yazi: ":", etiket: "" },
      { yazi: "white", etiket: "değer" }, { yazi: ";", etiket: "bitir" },
      { yazi: "width", etiket: "özellik" }, { yazi: ":", etiket: "" },
      { yazi: "1024px", etiket: "değer" }, { yazi: ";", etiket: "" }
    ]},
    not: "Her özellik: değer çiftinin sonunda noktalı virgül." },

  { tur: "bilgi", baslik: "Üç ekleme yöntemi",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "1️⃣ Satır içi", alt: "Etiketin style özelliğine. Sadece o etiket etkilenir." },
      { ust: "2️⃣ Sayfa içi", alt: "head içinde &lt;style&gt;. O sayfanın hepsi etkilenir." },
      { ust: "3️⃣ Sayfa dışı (harici)", alt: "Ayrı .css dosyası. Bütün sayfalar tek yerden. En çok tercih edilen." }
    ]}},

  { tur: "ornek", baslik: "1️⃣ Satır içi CSS",
    kod: `<h1 style="background-color: lightblue;">
  CSS öğreniyorum
</h1>`,
    sonuc: { tip: "tarayici", adres: "satirici.html", icerik: `<h1 style="background-color: lightblue;">CSS öğreniyorum</h1>` } },

  { tur: "ornek", baslik: "2️⃣ Sayfa içi CSS",
    kod: `<head>
  <style>
    p {
      background-color: red;
      color: white;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <p>Bu paragrafın arka planı kırmızı...</p>
</body>`,
    sonuc: { tip: "tarayici", adres: "sayfaici.html", icerik: `<style>p{background-color:red;color:white;font-size:20px;}</style><p>Bu paragrafın arka plan rengi kırmızı, yazı rengi beyaz, yazı boyutu 20 pikseldir.</p>` },
    not: "Sayfadaki bütün &lt;p&gt;'ler aynı stili alır." },

  { tur: "bilgi", baslik: "3️⃣ Sayfa dışı (harici) CSS",
    kod: `<link rel="stylesheet" href="stil.css" />`,
    gorsel: { tip: "akis", adimlar: [
      { simge: "📄", yazi: "stil.css", alt: "tüm stiller" },
      { simge: "🔗", yazi: "link", alt: "her sayfanın head'inde" },
      { simge: "🗂️", yazi: "index · hakkimda · galeri · iletisim", alt: "hepsi aynı stilde" }
    ]},
    not: "rel: ilişki (stil sayfası) · href: dosyanın yolu. Bir sayfaya birden çok css bağlanabilir." },

  { tur: "uygulama", baslik: "Satır içi CSS ile İstiklal Marşı",
    gorsel: { tip: "resim", yol: G + "22-satirici.png" },
    adimlar: [
      "Bir paragrafa İstiklal Marşı'nın ilk kıtasını yaz (satırlar &lt;br&gt; ile).",
      "Paragrafın style'ına: yazı rengi beyaz, arka plan kırmızı."
    ],
    kitap: "s. 105 · 1. Uygulama" },

  { tur: "uygulama", baslik: "İki harici CSS dosyası",
    gorsel: { tip: "resim", yol: G + "22-harici.png" },
    adimlar: [
      "<b>KutuAyarlari.css</b>, <b>ResimAyarlari.css</b> ve <b>index.html</b> oluştur.",
      "index.html'e iki CSS dosyasını da link ile bağla.",
      "KutuAyarlari: div yazı 34px, beyaz, arka plan mor.",
      "ResimAyarlari: img 200 × 200 piksel."
    ],
    malzeme: ["manzara.jpg"],
    kitap: "s. 107 · 2. Uygulama" },

  { tur: "bilgi", baslik: "Çok kullanılan CSS kodları",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>font-size</code> <span>yazı boyutu</span></div><div><code>font-weight</code> <span>kalınlık</span></div>
      <div><code>font-family</code> <span>yazı tipi</span></div><div><code>color</code> <span>yazı rengi</span></div>
      <div><code>text-align</code> <span>hizalama</span></div><div><code>width · height</code> <span>genişlik · yükseklik</span></div>
      <div><code>margin · padding</code> <span>dış · iç boşluk</span></div><div><code>border</code> <span>kenarlık</span></div>
      <div><code>background-color</code> <span>arka plan rengi</span></div><div><code>display · position</code> <span>görünüm · konum</span></div></div>` },
    not: "Tamamı kitapta Tablo 4.1–4.4'te. Detaylarını sonraki konularda öğreneceğiz." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Üç satırlı sayfa: yazı boyutları 20/15/10px, arka planlar kırmızı/yeşil/mavi (satır içi).<br>2️⃣ Sayfa içi CSS ile beş resmin hepsini 120 × 80 yap.<br>3️⃣ Üç HTML sayfasının arka planını kırmızı yap (sayfa içi).<br>4️⃣ Aynısını tek harici CSS ile yap. İki yolun artı-eksisini tartış.",
    kitap: "s. 105–107" },

  { tur: "test", sorular: [
    { soru: "📖 CSS ekleme yöntemleri nelerdir?", secenekler: ["Satır içi, sayfa içi, sayfa dışı", "Başlık, gövde, alt", "Etiket, sınıf, kimlik", "px, em, %"], dogru: 0 },
    { soru: "Bütün sayfaları tek dosyadan yönetmek için hangi yöntem?", secenekler: ["Satır içi", "Sayfa içi", "Sayfa dışı (harici)", "Hiçbiri"], dogru: 2 },
    { soru: "Harici CSS dosyası hangi etiketle bağlanır?", kod: true, secenekler: ["<style>", "<link>", "<css>", "<script>"], dogru: 1 },
    { soru: "Sayfa içi CSS nereye yazılır?", secenekler: ["body içinde style özelliği", "head içinde &lt;style&gt; etiketi", "Ayrı dosyaya", "title içine"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Hangi stil kazanır?",
    metin: "Aynı p için üç yöntem çakışırsa?",
    kod: `<style> p { color: blue; } </style>
<p style="color: red;">Ben ne renk olacağım?</p>`,
    gorsel: { tip: "tarayici", adres: "basamak.html", icerik: `<style>p{color:blue}</style><p style="color:red">Ben ne renk olacağım?</p>` },
    not: "Etikete en yakın olan (satır içi) kazanır. “Basamaklı” adı buradan gelir." }

]};
