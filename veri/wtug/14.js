// WTUG · 14 · Bağlantılar  (Kitap s. 85–89)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "&lt;a&gt; = çıpa",
    metin: "<b>a</b>: anchor (çıpa). Tıklanınca başka bir yere götürür.",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "&lt;a", etiket: "bağlantı" },
      { yazi: "href=\"URL\"", etiket: "nereye?" },
      { yazi: "target=\"_blank\"&gt;", etiket: "nerede açılsın?" },
      { yazi: "Metin", etiket: "tıklanan yazı", renk: "#2b2b2b" },
      { yazi: "&lt;/a&gt;", etiket: "" }
    ]},
    not: "Fare bağlantının üstüne gelince el işaretine döner." },

  { tur: "bilgi", baslik: "Bağlantının renkleri",
    gorsel: { tip: "html", icerik: `<div class="etk" style="font-family:'Times New Roman',serif">
      <div><span style="color:#0000ee;text-decoration:underline">Ziyaret edilmemiş</span> · mavi</div>
      <div><span style="color:#551a8b;text-decoration:underline">Ziyaret edilmiş</span> · mor</div>
      <div><span style="color:#ee0000;text-decoration:underline">Tıklanırken (etkin)</span> · kırmızı</div></div>` },
    not: "Farklı görünüm için CSS kullanılır." },

  { tur: "bilgi", baslik: "URL'nin parçaları",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "https://", etiket: "kaynak tipi" },
      { yazi: "mtegm.meb.gov.tr", etiket: "sunucu adresi" },
      { yazi: "/www/", etiket: "yol" },
      { yazi: "sss.php", etiket: "dosya adı" }
    ]},
    not: "URL = Uniform Resource Locator: belgenin adresi." },

  { tur: "bilgi", baslik: "target: nerede açılsın?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "_self", alt: "Aynı sekmede (varsayılan)" },
      { ust: "_blank", alt: "Yeni sekmede" },
      { ust: "_parent", alt: "Bir üst çerçevede" },
      { ust: "_top", alt: "En üst çerçevede" }
    ]}},

  { tur: "ornek", baslik: "Site dışına bağlantı",
    kod: `<a href="https://mtegm.meb.gov.tr" target="_blank">
  mtegm.meb.gov.tr
</a>`,
    sonuc: { tip: "tarayici", adres: "baglanti.html", icerik: `<a href="https://mtegm.meb.gov.tr" target="_blank">mtegm.meb.gov.tr</a>` },
    not: "Tıkla: yeni sekmede açılır." },

  { tur: "uygulama", baslik: "Yedi çeşit bağlantı",
    gorsel: { tip: "resim", yol: G + "14-href.png" },
    adimlar: [
      "Hedefsiz: href=\"#\" · Aynı sayfada: href=\"#cipa\"",
      "Aynı sitede sayfa: aynisite-sayfa.html · dosya: aynisite-dosya.pdf",
      "Başka site: https://mtegm.meb.gov.tr · başka sitede sayfa: .../www/sss.php",
      "Her bağlantıyı ayrı satıra yaz, tarayıcıda dene."
    ],
    kitap: "s. 86–87 · 13. Uygulama" },

  { tur: "test", sorular: [
    { soru: "Bağlantıyı yeni sekmede açmak için?", secenekler: ['target="_self"', 'target="_blank"', 'target="_top"', 'href="_new"'], dogru: 1 },
    { soru: "Bağlantının gideceği adres hangi özelliğe yazılır?", secenekler: ["src", "href", "link", "url"], dogru: 1 },
    { soru: "Ziyaret edilmiş bağlantı varsayılan olarak hangi renktir?", secenekler: ["Mavi", "Kırmızı", "Mor", "Yeşil"], dogru: 2 },
    { soru: "https://mtegm.meb.gov.tr/www/sss.php adresinde dosya adı hangisi?", secenekler: ["https", "mtegm.meb.gov.tr", "www", "sss.php"], dogru: 3 }
  ]},

  { tur: "merak", baslik: "Telefon bağlantısı",
    metin: "Telefonda tıklayınca arama ekranı açılır:",
    kod: `<a href="tel:+902120000000">Okulu ara</a>`,
    not: "mailto: e-posta, tel: telefon. Bir sonraki konularda e-postayı göreceğiz." }

]};
