// WTUG · 30 · Bootstrap: tipografi, tablo, kenarlık, jumbotron, uyarı, buton, badge  (Kitap s. 151–156)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Tipografi elemanları",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "&lt;small&gt;", alt: "Başlık içinde açık renkli küçük yazı" },
      { ust: "&lt;blockquote&gt;", alt: "Alıntı metni" },
      { ust: "&lt;dl&gt; dt dd", alt: "Başlık + açıklama listesi" },
      { ust: "&lt;kbd&gt;", alt: "Klavye tuşu görünümü" },
      { ust: "&lt;pre&gt;", alt: "Yazıldığı düzende göster" }
    ]},
    not: "Varsayılan: 16px, Helvetica/Arial, satır 1.5em." },

  { tur: "uygulama", baslik: "Bootstrap tipografisi",
    gorsel: { tip: "resim", yol: G + "30-tipografi.png" },
    adimlar: [
      "container > row bg-light > col-12 yapısını kur.",
      "Kitaptaki beş kodu sırayla içine yaz: h3+small, blockquote, dl, kbd, pre.",
      "Kaydet, aç, hedefle karşılaştır."
    ],
    kitap: "s. 151–152 · 27. Uygulama" },

  { tur: "bilgi", baslik: "Tablo sınıfları",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>table</code> <span>temel Bootstrap tablosu</span></div><div><code>table-sm</code> <span>alçak satırlar</span></div>
      <div><code>table-bordered</code> <span>her hücreye kenarlık</span></div><div><code>table-borderless</code> <span>kenarlıksız</span></div>
      <div><code>table-hover</code> <span>fare üstündeki satır renklenir</span></div><div><code>table-striped</code> <span>zebra satırlar</span></div>
      <div><code>table-primary …</code> <span>renkli tablo/satır/hücre</span></div><div><code>thead-dark</code> <span>koyu başlık</span></div></div>` },
    not: "Birden çok sınıf birlikte yazılabilir." },

  { tur: "uygulama", baslik: "Bootstrap tablosu",
    gorsel: { tip: "resim", yol: G + "30-tablo.png" },
    adimlar: [
      "Ad, Soyad, Şehir başlıklı tablo, dört satır.",
      "table: hover, primary, striped, bordered, sm sınıfları.",
      "thead: thead-dark. İki hücreyi table-danger ve table-warning ile boya."
    ],
    kitap: "s. 153 · 28. Uygulama" },

  { tur: "ornek", baslik: "Kenarlık sınıfları",
    kod: `<img src="resim1.jpg" class="rounded">
<img src="resim2.jpg" class="rounded-circle">
<img src="resim3.jpg" class="img-thumbnail">`,
    sonuc: { tip: "tarayici", bs: true, adres: "kenarlik.html", icerik: `<img src="gorsel/malzeme/manzara.jpg" class="rounded" width="90" height="90"> <img src="gorsel/malzeme/kumsal.jpg" class="rounded-circle" width="90" height="90"> <img src="gorsel/malzeme/uzay.jpg" class="img-thumbnail" width="90" height="90">` },
    not: "rounded: köşe yuvarlak · rounded-circle: daire · img-thumbnail: çerçeve + yuvarlak." },

  { tur: "ornek", baslik: "Uyarı mesajı",
    kod: `<div class="alert alert-danger">
  <strong>Uyarı! </strong> Mesajınızı buraya yazabilirsiniz.
</div>
<div class="alert alert-success alert-dismissible">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Uyarı!</strong> Bu mesaj kutusu kapatılabilir.
</div>`,
    sonuc: { tip: "tarayici", bs: true, adres: "uyari.html", icerik: `<div class="alert alert-danger"><strong>Uyarı! </strong> Mesajınızı buraya yazabilirsiniz.</div><div class="alert alert-success alert-dismissible"><button type="button" class="close">&times;</button><strong>Uyarı!</strong> Bu mesaj kutusu kapatılabilir.</div>` } },

  { tur: "ornek", baslik: "Butonlar",
    kod: `<button type="button" class="btn btn-primary">Buton elemanı</button>
<input type="button" class="btn btn-info" value="Input elemanı">
<a href="#" class="btn btn-warning">Link elemanı</a>
<button class="btn btn-primary btn-lg">Geniş</button>
<button class="btn btn-primary btn-sm">Küçük</button>
<button class="btn btn-success" disabled>Pasif Buton</button>
<button class="btn btn-info btn-block">Blok Buton</button>`,
    sonuc: { tip: "resim", yol: G + "30-butonlar.png" } },

  { tur: "uygulama", baslik: "Bileşen panosu",
    metin: "Kitaptaki jumbotron, uyarı ve badge kodlarını tek sayfada birleştir.",
    gorsel: { tip: "resim", yol: G + "30-bilesenler.png" },
    adimlar: [
      "container içine jumbotron: img-thumbnail resim, h1 Yazılım, paragraf.",
      "alert-danger ve kapatılabilir alert-success kutuları.",
      "badge-success, badge-danger ve butonda badge-pill sayaç."
    ],
    malzeme: ["kahveBilgisayar.jpg"],
    kitap: "s. 154–156 · Görsel 4.41, 4.42, 4.44" },

  { tur: "test", sorular: [
    { soru: "📖 Bir resme üç farklı kenarlık: hangisi bu sınıflardan değildir?", secenekler: ["rounded", "rounded-circle", "img-thumbnail", "img-border"], dogru: 3 },
    { soru: "Zebra (bir satır arayla renkli) tablo sınıfı?", secenekler: ["table-hover", "table-striped", "table-dark", "table-sm"], dogru: 1 },
    { soru: "Kırmızı uyarı kutusu?", secenekler: ["alert alert-success", "alert alert-danger", "btn btn-danger", "badge badge-danger"], dogru: 1 },
    { soru: "Satırın tamamını kaplayan buton?", secenekler: ["btn-lg", "btn-block", "btn-full", "btn-wide"], dogru: 1 },
    { soru: "Dikkat çekici özel içerik kutusu?", secenekler: ["jumbotron", "badge", "kbd", "card-title"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Buton grubu",
    kod: `<div class="btn-group">
  <button class="btn btn-primary">Sol</button>
  <button class="btn btn-primary">Orta</button>
  <button class="btn btn-primary">Sağ</button>
</div>`,
    gorsel: { tip: "tarayici", bs: true, adres: "grup.html", icerik: `<div class="btn-group"><button class="btn btn-primary">Sol</button><button class="btn btn-primary">Orta</button><button class="btn btn-primary">Sağ</button></div>` } }

]};
