// WTUG · 31 · Bootstrap: kart, açılır kutu, menü, form, slider, modal, ikon  (Kitap s. 156–164)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Kart (card)",
    gorsel: { tip: "agac", kok: { ad: "div.card", cocuklar: [
      { ad: "img.card-img-top", alt: "üst resim" },
      { ad: "div.card-body", cocuklar: [{ ad: "h4.card-title", alt: "başlık" }, { ad: "p.card-text", alt: "içerik" }, { ad: "a.btn", alt: "Detaylar" }] }
    ]}}},

  { tur: "uygulama", baslik: "Turistik iller kartları",
    gorsel: { tip: "resim", yol: G + "31-kartlar.png", yazi: "Geniş ekranda altı kart yan yana." },
    adimlar: [
      "Altı kart: resim, il adı, kısa tanıtım, Detaylar butonu.",
      "Her kartı bir col içine koy: en küçükte alt alta, küçük ve ortada iki iki, geniş ve üstünde altısı yan yana.",
      "İpucu: col-12 col-sm-6 col-lg-2"
    ],
    malzeme: ["SahilYolu.jpg", "SaatKulesi.jpg", "kumsal.jpg", "gunBatimi.jpg", "manzara.jpg", "yildizlar.jpg"],
    kitap: "s. 157 · Sıra Sizde'ye dayanır" },

  { tur: "ornek", baslik: "Açılır kapanır kutu",
    kod: `<button class="btn btn-info" data-toggle="collapse" data-target="#demo">
  Detaylı bilgi için tıklayınız.
</button>
<div id="demo" class="collapse">
  Bilgisayar kasası içinde; anakart, işlemci, ram, harddisk...
</div>`,
    not: "data-target (ya da a etiketinde href) gizlenen elemanın id'si ile aynı olmalı." },

  { tur: "bilgi", baslik: "Menü çubukları",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "nav nav-tabs", alt: "Sekmeli gezinti menüsü, içinde açılır liste (dropdown)" },
      { ust: "navbar", alt: "Duyarlı menü çubuğu: dar ekranda ☰ düğmesine dönüşür" },
      { ust: "fixed-top", alt: "Menüyü sayfanın üstüne sabitler" }
    ]}},

  { tur: "uygulama", baslik: "Duyarlı menü çubuğu",
    gorsel: { tip: "ikili",
      sol: { baslik: "💻 Geniş ekran", gorsel: { tip: "resim", yol: G + "31-menu-genis.png" } },
      sag: { baslik: "📱 Dar ekran, ☰ açık", gorsel: { tip: "resim", yol: G + "31-menu-dar.png" } }
    },
    adimlar: [
      "nav: navbar navbar-expand-md bg-dark navbar-dark.",
      "navbar-brand (marka), navbar-toggler düğmesi (data-target=\"#menu\").",
      "div.collapse.navbar-collapse#menu içinde ul.navbar-nav: Anasayfa, Galeri, Hakkında."
    ],
    kitap: "s. 158–159 · Görsel 4.47" },

  { tur: "uygulama", baslik: "Bootstrap formu",
    gorsel: { tip: "resim", yol: G + "31-form.png" },
    adimlar: [
      "Her alan bir div.form-group; input, textarea, select'e form-control.",
      "Onay kutuları form-check-inline, radyolar form-check içinde.",
      "Etiketlere form-check-label, kutulara form-check-input."
    ],
    kitap: "s. 159–160" },

  { tur: "uygulama", baslik: "Resim galerisi (slider)",
    gorsel: { tip: "resim", yol: G + "31-galeri.png", yazi: "Oklarla ya da alttaki çizgilerle resim değişir." },
    adimlar: [
      "div#galeri.carousel.slide (data-ride=\"carousel\").",
      "ul.carousel-indicators: her resim için bir li.",
      "div.carousel-inner > div.carousel-item (ilkine active) > img + carousel-caption.",
      "Önceki/sonraki okları: carousel-control-prev / next."
    ],
    malzeme: ["SahilYolu.jpg", "SaatKulesi.jpg"],
    kitap: "s. 160–161 · Görsel 4.48" },

  { tur: "uygulama", baslik: "Modal: ürün detayları",
    gorsel: { tip: "resim", yol: G + "31-modal.png", yazi: "“Ürün Detayları” düğmesine basınca bu kutu açılır." },
    adimlar: [
      "Düğme: data-toggle=\"modal\" data-target=\"#Detaylar\".",
      "div.modal#Detaylar > modal-dialog > modal-content.",
      "modal-header (başlık + kapat), modal-body (liste), modal-footer (iki düğme).",
      "İptal düğmesine data-dismiss=\"modal\"."
    ],
    kitap: "s. 161–162 · Görsel 4.49" },

  { tur: "ornek", baslik: "İkonlar",
    kod: `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
...
<i class="fa fa-home"></i>  <i class="fa fa-phone"></i>
<i class="fa fa-star"></i>  <i class="fa fa-heart"></i>`,
    sonuc: { tip: "resim", yol: G + "31-ikonlar.png" },
    not: "Yüzlerce ikonun adına fontawesome.com'dan ulaşılır." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Altı ilin turistik yerlerini tanıtan altı kart (en küçükte alt alta, küçük-ortada dört, geniş-en genişte altı yan yana).<br>2️⃣ İçinde açılır liste olan bir gezinti menüsü.<br>3️⃣ Bir konuda menü çubuğu.<br>4️⃣ İsim, soy isim, mail, adres, telefon, öğrenim durumu alanlı iletişim formu.<br>5️⃣ Büyük ödev: kendi konunda en az yedi sayfalı, tüm ekranlara uyumlu bir site ve tanıtım sunumu.",
    kitap: "s. 157–163" },

  { tur: "test", baslik: "Birim 4 · Bootstrap", sorular: [
    { soru: "Kartın içerik bölümünün sınıfı?", secenekler: ["card-img-top", "card-body", "card-text", "card-title"], dogru: 1 },
    { soru: "Gizlenip gösterilecek elemana verilen sınıf?", secenekler: ["modal", "collapse", "dropdown", "carousel"], dogru: 1 },
    { soru: "Dar ekranda ☰ düğmesine dönüşen menü?", secenekler: ["nav-tabs", "navbar", "dropdown-menu", "list-group"], dogru: 1 },
    { soru: "Form kutularına (input, select) verilen sınıf?", secenekler: ["form-group", "form-control", "form-check", "form-label"], dogru: 1 },
    { soru: "Sayfanın üstünde açılan iletişim kutusu?", secenekler: ["alert", "modal", "jumbotron", "card"], dogru: 1 },
    { soru: "Resim galerisi bileşeni?", secenekler: ["carousel", "gallery", "slider-box", "collapse"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Hazır şablon incele",
    adimlar: [
      "<b>getbootstrap.com/docs/4.6/examples</b> adresine git.",
      "Bir örnek aç (ör. Album), Ctrl + U ile koduna bak.",
      "Hangi sınıfları tanıyorsun? Listele."
    ]}

]};
