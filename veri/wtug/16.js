// WTUG · 16 · Özel bağlantılar: resim, e-posta, dosya  (Kitap s. 87, 89–90)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Neye tıklanır?",
    metin: "a etiketinin içine sadece yazı değil, her şey konabilir.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📝 Metin", alt: "tıklayın" }, { ust: "🏛️ Kurum adı", alt: "Mesleki ve Teknik Eğitim" },
      { ust: "🔠 Başlık", alt: "CANLI DERS" }, { ust: "💬 Cümle", alt: "Kitabı görmek için tıklayınız" },
      { ust: "🖼️ Resim", alt: "&lt;a&gt;&lt;img&gt;&lt;/a&gt;" }, { ust: "🎵 Ses · 🎬 Video", alt: "&lt;a&gt;&lt;audio&gt;&lt;/a&gt;" }
    ]}},

  { tur: "ornek", baslik: "Resim bağlantısı",
    kod: `<a href="https://www.eba.gov.tr">
  <img src="gorsel/malzeme/asistan.gif" width="140">
</a>`,
    sonuc: { tip: "tarayici", adres: "resim-baglanti.html", icerik: `<a href="https://www.eba.gov.tr" target="_blank"><img src="gorsel/malzeme/asistan.gif" width="140"></a>` },
    not: "Resme tıklayınca siteye gider." },

  { tur: "ornek", baslik: "E-posta bağlantısı",
    kod: `<a href="mailto:info@site.com.tr">e-posta gönder</a>`,
    sonuc: { tip: "tarayici", adres: "eposta.html", icerik: `<a href="mailto:info@site.com.tr">e-posta gönder</a>` },
    not: "Tıklayınca bilgisayardaki e-posta programı açılır (kurulu olmalı)." },

  { tur: "ornek", baslik: "Dosya bağlantısı",
    kod: `<!-- dosya aynı klasörde -->
<a href="dosya.pdf">Dosyayı İndir</a>
<!-- dosya başka sitede -->
<a href="http://www.eba.gov.tr/dosya.pdf">Dosyayı İndir</a>`,
    not: "Tarayıcı pdf, jpg gibi dosyaları açar ya da indirir." },

  { tur: "uygulama", baslik: "Bağlantı metinleri",
    gorsel: { tip: "resim", yol: G + "16-metinler.png" },
    adimlar: [
      "Kitaptaki tablodaki her bağlantıyı ayrı paragrafta yaz.",
      "Resim bağlantısı için asistan.gif kullan.",
      "Sona bir e-posta ve bir dosya bağlantısı ekle.",
      "Hepsine tıklayıp dene."
    ],
    malzeme: ["asistan.gif"],
    kitap: "s. 87 · Tablo 3.12 ve s. 90" },

  { tur: "test", sorular: [
    { soru: "E-posta bağlantısı için href nasıl başlar?", secenekler: ["email:", "mailto:", "mail://", "send:"], dogru: 1 },
    { soru: "Resmi bağlantı yapmak için?", secenekler: ["img içine a yazılır", "a içine img yazılır", "img'ye href yazılır", "Yapılamaz"], dogru: 1 },
    { soru: "Aynı klasördeki rapor.pdf'e bağlantı?", kod: true, secenekler: ['<a href="rapor.pdf">', '<a src="rapor.pdf">', '<img src="rapor.pdf">', '<a href="#rapor">'], dogru: 0 }
  ]},

  { tur: "merak", baslik: "İndirmeye zorla",
    metin: "download özelliği dosyayı açmak yerine indirir:",
    kod: `<a href="manzara.jpg" download>Resmi indir</a>`,
    malzeme: ["manzara.jpg"],
    not: "Bu sitedeki resim bağlantıları da böyle çalışıyor!" }

]};
