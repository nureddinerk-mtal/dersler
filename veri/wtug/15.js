// WTUG · 15 · Sayfa içi ve sayfalar arası bağlantı  (Kitap s. 87–91)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Sayfa içi bağlantı (çıpa)",
    metin: "Uzun sayfada tıklayınca aynı sayfanın başka bölümüne atlar.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "⚓", yazi: "Çıpayı at", alt: "<code>&lt;a name=\"Bolum1\"&gt;</code>" },
      { simge: "👆", yazi: "Bağlantı ver", alt: "<code>href=\"#Bolum1\"</code>" },
      { simge: "⬇️", yazi: "Tıkla, oraya git" }
    ]},
    not: "# işareti “bu sayfadaki şu bölüm” demek. id=\"Bolum1\" de çıpa olur." },

  { tur: "bilgi", baslik: "Sayfalar arası bağlantı",
    gorsel: { tip: "agac", kok: { ad: "📁 sitem", yan: true, cocuklar: [
      { ad: "index.html", alt: "→ href=\"hakkimda.html\"" },
      { ad: "hakkimda.html", alt: "→ href=\"index.html\"" },
      { ad: "📁 sayfalar", cocuklar: [{ ad: "galeri.html", alt: "← href=\"sayfalar/galeri.html\"" }] }
    ]}},
    not: "Aynı klasördeyse sadece dosya adı, alt klasördeyse klasör/dosya yazılır." },

  { tur: "ornek", baslik: "İçindekiler menüsü",
    kod: `<a name="icindekiler"><h2>İÇİNDEKİLER</h2></a>
<ul>
  <li><a href="#Bolum1">HTML5</a></li>
  <li><a href="#Bolum2">CSS</a></li>
</ul>
...
<a name="Bolum1">HTML5</a>
<a href="#icindekiler">İçindekiler</a>`,
    not: "Her bölümün sonunda “İçindekiler”e dönüş bağlantısı var." },

  { tur: "uygulama", baslik: "İçindekiler sayfası",
    gorsel: { tip: "resim", yol: G + "15-icindekiler.png", yazi: "Menüden bir bölüme tıklayınca oraya inmeli." },
    adimlar: [
      "nav içinde İÇİNDEKİLER çıpası ve dört bağlantılı liste.",
      "Dört article/section: her birinde çıpa ve “İçindekiler” bağlantısı.",
      "Altına figure (logo) ve footer ekle.",
      "Açıklamaları uzat ki sayfa kaysın, bağlantıları dene."
    ],
    malzeme: ["logo.png"],
    kitap: "s. 87–88 · 14. Uygulama" },

  { tur: "uygulama", baslik: "Beş sayfalık site",
    metin: "Hangi bağlantı hangi sayfayı açıyor? Oklara bak.",
    gorsel: { tip: "sayfalar",
      ana: { resim: G + "15-index.png", ad: "index.html" },
      dallar: [
        { buton: "hakkımda", resim: G + "15-hakkimda.png", ad: "hakkimda.html" },
        { buton: "galeri", resim: G + "15-galeri.png", ad: "galeri.html" },
        { buton: "ürünler", resim: G + "15-urunler.png", ad: "urunler.html" },
        { buton: "iletişim", resim: G + "15-iletisim.png", ad: "iletisim.html" }
      ]},
    adimlar: [
      "Menüyü yaz, <b>index.html</b> olarak kaydet.",
      "Kopyalayıp hakkimda, galeri, urunler, iletisim adlarıyla kaydet.",
      "Her sayfaya kendi h1 başlığını yaz: “Bu ANASAYFA” gibi.",
      "index.html'i aç, bütün bağlantıları dene."
    ],
    kitap: "s. 90–91 · 15. Uygulama" },

  { tur: "test", sorular: [
    { soru: 'href="#Bolum2" ne yapar?', secenekler: ["Bolum2.html dosyasını açar", "Aynı sayfadaki Bolum2 çıpasına gider", "Yeni sekme açar", "E-posta gönderir"], dogru: 1 },
    { soru: "Aynı klasördeki hakkimda.html sayfasına bağlantı?", kod: true, secenekler: ['<a href="#hakkimda">', '<a href="hakkimda.html">', '<a src="hakkimda.html">', '<a name="hakkimda">'], dogru: 1 },
    { soru: "sayfalar klasöründeki galeri.html'e bağlantı?", secenekler: ["galeri.html", "../galeri.html", "sayfalar/galeri.html", "#galeri"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Yumuşak kaydırma",
    metin: "Çıpaya tıklayınca sayfa birden atlamasın, kaysın:",
    kod: `<style> html { scroll-behavior: smooth; } </style>`,
    not: "Bu bir CSS kodu. head içine yaz, farkı gör." }

]};
