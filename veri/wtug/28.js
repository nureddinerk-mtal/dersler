// WTUG · 28 · Duyarlı tasarım: medya sorgusu  (Kitap s. 142–146)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Duyarlılık nedir?",
    metin: "Aynı site bilgisayarda, tablette, telefonda rahat görünsün.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "💻", yazi: "Bilgisayar", alt: "5 resim yan yana" },
      { simge: "📱", yazi: "Tablet", alt: "2–3 resim yan yana" },
      { simge: "📲", yazi: "Telefon", alt: "resimler alt alta" }
    ]},
    not: "Medya sorgusu, cihazın ekran genişliğini öğrenir ve uygun CSS'i çalıştırır." },

  { tur: "bilgi", baslik: "@media yazımı",
    kod: `@media screen and (min-width: 600px) {
  body { background-color: #e76f51; }
}`,
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "@media", etiket: "sorgu" }, { yazi: "screen", etiket: "ekranlar" },
      { yazi: "and", etiket: "ve" }, { yazi: "(min-width: 600px)", etiket: "şart: en az 600px" }
    ]},
    not: "Şart sağlanırsa süslü parantezdeki CSS çalışır." },

  { tur: "bilgi", baslik: "Şart ifadeleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "min-width", alt: "Tarayıcı EN AZ bu kadar genişse" },
      { ust: "max-width", alt: "Tarayıcı EN FAZLA bu kadar genişse" },
      { ust: "min-device-width", alt: "Cihazın EKRANI en az bu kadar genişse" },
      { ust: "and", alt: "Birden çok şartı birleştirir" }
    ]},
    not: "Genişlik, yükseklik şartları parantez içinde yazılır." },

  { tur: "uygulama", baslik: "Genişliğe göre renk",
    metin: "Aynı sayfa dört farklı genişlikte:",
    gorsel: [
      { tip: "resim", yol: G + "28-renk-440.png", yazi: "600px'ten dar" },
      { tip: "resim", yol: G + "28-renk-680.png", yazi: "en az 600px" },
      { tip: "resim", yol: G + "28-renk-900.png", yazi: "en az 800px" },
      { tip: "resim", yol: G + "28-renk-1240.png", yazi: "en az 1200px" }
    ],
    adimlar: [
      "Responsive.css ve index.html. Varsayılan arka plan #a8dadc.",
      "En az 600px → #e76f51 · en az 800px → #457b9d · en az 1200px → #e9c46a.",
      "Tarayıcı penceresini daraltıp genişlet, renkleri izle."
    ],
    kitap: "s. 144 · 23. Uygulama" },

  { tur: "uygulama", baslik: "Ekrana göre reklam",
    gorsel: { tip: "ikili",
      sol: { baslik: "📱 Dar ekran: küçük reklam", gorsel: { tip: "resim", yol: G + "28-reklam-kucuk.png" } },
      sag: { baslik: "💻 Geniş ekran: büyük reklam", gorsel: { tip: "resim", yol: G + "28-reklam-buyuk.png" } }
    },
    adimlar: [
      "215 × 120 ve 750 × 240 iki reklam resmi.",
      "div.reklamAlani içine iki img: id kucukReklam ve buyukReklam.",
      "min-device-width 215px: küçük görünsün, büyük gizlensin (display:none).",
      "min-device-width 750px: tersi."
    ],
    malzeme: ["reklam1.jpg", "reklam2.jpg"],
    kitap: "s. 145 · 24. Uygulama" },

  { tur: "bilgi", baslik: "Hazır CSS çatıları (framework)",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🅱️ Bootstrap", alt: "En çok tercih edilen. Sıradaki konu!" },
      { ust: "Foundation", alt: "" }, { ust: "Materialize", alt: "" }, { ust: "UIkit", alt: "" }
    ]},
    not: "Hazır sınıflar: birkaç satırla her cihaza uygun tasarım. Çoğu açık kaynak ve ücretsiz." },

  { tur: "test", sorular: [
    { soru: "Sadece tarayıcı en az 800px genişse çalışan şart?", secenekler: ["(max-width: 800px)", "(min-width: 800px)", "(width: 800px)", "(min-height: 800px)"], dogru: 1 },
    { soru: "Cihazın ekran genişliğine bakan şart?", secenekler: ["min-width", "min-device-width", "max-height", "screen"], dogru: 1 },
    { soru: "İki şartı birleştiren kelime?", secenekler: ["or", "and", "with", "plus"], dogru: 1 },
    { soru: "23. Uygulamada 1000px genişlikte arka plan hangi renk olur?", secenekler: ["#a8dadc", "#e76f51", "#457b9d", "#e9c46a"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Yazdırırken farklı stil",
    kod: `@media print {
  nav, aside { display: none; }
  body { color: black; background: white; }
}`,
    not: "Sayfa yazdırılırken menü ve yan bölüm gizlenir. Ctrl + P ile dene." }

]};
