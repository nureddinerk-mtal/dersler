// WTUG · 23 · Seçiciler 1: etiket, id, class, çoklu  (Kitap s. 109–118)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Etiket, #id, .class ve çoklu seçici. id sayfada tek, class çok kez kullanılır. Ağaç (DOM) kavramı burada atılıyor, JS'te tekrar karşımıza çıkacak.", akis: ["HTML ağacı", "Seçici türleri", "Uygulamalar (harfler, galeri, JSCRIPT)"], hatalar: ["CSS'te # ve . karıştırmak", "class=\".kutu\" yazmak (HTML'de nokta yazılmaz)", "Aynı id'yi birden çok elemana vermek"], sorular: [["Bir elemana birden fazla class verebilir miyim?", "Evet, boşlukla: class=\"kutu kirmizi\"."], ["id mi class mı?", "Tek eleman ve JS ile seçilecekse id; ortak stil için class."]] },


  { tur: "bilgi", baslik: "Seçici: kimi boyayacağım?",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "p", etiket: "seçici" }, { yazi: "{", etiket: "" },
      { yazi: "color:orange;", etiket: "özellik: değer" }, { yazi: "}", etiket: "" }
    ]},
    not: "Sayfa içi ve harici CSS'te stilin kime uygulanacağını seçici söyler." },

  { tur: "bilgi", baslik: "Seçici türleri",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>p</code> <span>etiket seçici</span></div><div><code>#resim</code> <span>kimlik (id) seçici</span></div>
      <div><code>.galeri</code> <span>sınıf (class) seçici</span></div><div><code>A,B</code> <span>çoklu seçici</span></div>
      <div><code>A&gt;B</code> <span>çocuk seçici</span></div><div><code>A B</code> <span>torun seçici</span></div>
      <div><code>a:hover</code> <span>sözde sınıf</span></div><div><code>p::first-line</code> <span>sözde eleman</span></div></div>` },
    not: "Bu konuda ilk dördü, sonraki konuda diğerleri." },

  { tur: "bilgi", baslik: "HTML bir ağaçtır",
    gorsel: { tip: "agac", kok: { ad: "html", cocuklar: [
      { ad: "head", yan: true, cocuklar: [{ ad: "meta" }, { ad: "title" }, { ad: "style" }] },
      { ad: "body", yan: true, cocuklar: [
        { ad: "img" },
        { ad: "h5", cocuklar: [{ ad: "b", cocuklar: [{ ad: "ul", yan: true, cocuklar: [{ ad: "li" }, { ad: "li" }] }] }] },
        { ad: "a", cocuklar: [{ ad: "b" }] }
      ]}
    ]}},
    not: "img, h5, a aynı seviyede (kardeş). li'ler ul'nin çocuğu, body'nin torunu." },

  { tur: "bilgi", baslik: "Etiket, id ve class",
    kod: `p { color: orange; font-size: 12px; }     /* bütün p'ler */
#resim { width: 150px; height: 200px; }    /* id="resim" olan tek eleman */
.icerik { font-size: 10px; color: blue; }  /* class="icerik" olan hepsi */
.icerik, p { color: gray; }                /* çoklu: ikisine birden */`,
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "#id", alt: "Benzersiz. Aynı id iki elemana verilmez." },
      { ust: ".class", alt: "Birden çok elemana aynı class verilir." }
    ]}},

  { tur: "uygulama", baslik: "Etiket seçici: liste ve resimler",
    gorsel: { tip: "resim", yol: G + "23-etiket.png" },
    adimlar: [
      "body arka planı skyblue.",
      "Sıralı liste: HTML, CSS, JAVASCRIPT, ASP .NET CORE. li: siyah, 16px, altı çizili.",
      "İki resim: img 220 × 130 piksel."
    ],
    malzeme: ["manzara.jpg", "kumsal.jpg"],
    kitap: "s. 112 · 3. Uygulama" },

  { tur: "uygulama", baslik: "Etiket seçici: HTML harfleri",
    gorsel: { tip: "resim", yol: G + "23-html.png" },
    adimlar: [
      "Dört div, her birinde b içinde bir harf: H, T, M, L.",
      "div: turuncu, 20 × 20 kare, yazı ortalı, 2px solid gri kenarlık."
    ],
    kitap: "s. 112–113 · 4. Uygulama" },

  { tur: "uygulama", baslik: "id seçici: Manzara",
    gorsel: { tip: "resim", yol: G + "23-manzara.png" },
    adimlar: [
      "body turuncu. img'ye id=\"resim\", h3'e id=\"baslik\".",
      "#resim: 220 × 130, köşeler 20px yuvarlak.",
      "#baslik: soldan dış boşluk 65px."
    ],
    malzeme: ["manzara.jpg"],
    kitap: "s. 114 · 5. Uygulama" },

  { tur: "uygulama", baslik: "id seçici: CSS harfleri",
    gorsel: { tip: "resim", yol: G + "23-css.png" },
    adimlar: [
      "Üç div: kutu1, kutu2, kutu3 (C, S, S).",
      "Ortak: 35 × 35, yazı 30px, ortalı.",
      "Renkler: tomato, teal, purple."
    ],
    kitap: "s. 114–115 · 6. Uygulama" },

  { tur: "uygulama", baslik: "class seçici: galeri",
    gorsel: { tip: "resim", yol: G + "23-galeri.png" },
    adimlar: [
      "Dört resim, hepsine class=\"galeri\". body: lightcyan.",
      ".galeri: 160 × 90, 2px solid koyu turuncu (darkorange) kenarlık, köşe 10px."
    ],
    malzeme: ["uzay.jpg", "kumsal.jpg", "gunBatimi.jpg", "yildizlar.jpg"],
    kitap: "s. 115–116 · 7. Uygulama" },

  { tur: "uygulama", baslik: "class + id: JSCRIPT",
    gorsel: { tip: "resim", yol: G + "23-javascript.png" },
    adimlar: [
      "Yedi span (J S C R I P T), hepsine class=\"harf\". body turuncu.",
      ".harf: yazı 30px.",
      "Sadece J: id=\"ozelHarf\" → 40px, beyaz."
    ],
    kitap: "s. 116 · 8. Uygulama" },

  { tur: "uygulama", baslik: "Çoklu seçici",
    gorsel: { tip: "resim", yol: G + "23-coklu.png" },
    adimlar: [
      "<b>Stil.css</b> oluştur, index.html'e bağla.",
      "Kitaptaki “Program…” paragrafını ve listeyi yaz. body mor.",
      "p, b, ul için tek kural: beyaz, 16px, genişlik 300px."
    ],
    kitap: "s. 117–118 · 9. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Şema 4.2 gibi verilen kodun ağacını çiz.<br>2️⃣ Harici CSS + iki HTML sayfası: konunu seç, tüm stilleri etiket seçiciyle ver.<br>3️⃣ Adının harflerini farklı renkli kutularda id seçiciyle yaz.<br>4️⃣ Adının baş harfi + soyadın, class seçiciyle (8. Uygulama gibi).<br>5️⃣ Beş resim: 1. id, sonraki üçü class, sonuncusu seçicisiz. Ortak stili çoklu seçiciyle ver.",
    kitap: "s. 111–118" },

  { tur: "test", sorular: [
    { soru: "class=\"kutu\" olan elemanları seçen seçici?", secenekler: ["kutu", "#kutu", ".kutu", "*kutu"], dogru: 2 },
    { soru: "id=\"logo\" olan elemanı seçen seçici?", secenekler: [".logo", "#logo", "logo", "@logo"], dogru: 1 },
    { soru: "Hem h1 hem p için aynı stil?", secenekler: ["h1 p { }", "h1>p { }", "h1, p { }", "h1.p { }"], dogru: 2 },
    { soru: "Aynı değer birden çok elemana verilebilen özellik?", secenekler: ["id", "class", "İkisi de", "Hiçbiri"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Her şeyi seç: *",
    kod: `* { margin: 0; padding: 0; font-family: Arial; }`,
    not: "* (yıldız) sayfadaki bütün elemanları seçer. Birçok site CSS'e böyle başlar." }

]};
