// WTUG · 05 · Başlıklar h1–h6  (Kitap s. 55–57)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Blok ve satır içi etiketler",
    gorsel: { tip: "ikili",
      sol: { baslik: "🧱 Blok: alt alta, tam satır", gorsel: { tip: "html", icerik: `<div style="display:grid;gap:6px">
        <div style="background:#2f80ed;color:#fff;padding:6px 10px;border-radius:6px">&lt;h1&gt;</div>
        <div style="background:#27ae60;color:#fff;padding:6px 10px;border-radius:6px">&lt;p&gt;</div>
        <div style="background:#9b51e0;color:#fff;padding:6px 10px;border-radius:6px">&lt;div&gt;</div></div>` } },
      sag: { baslik: "➡️ Satır içi: yan yana, kendi boyu", gorsel: { tip: "html", icerik: `<div style="display:flex;gap:6px;flex-wrap:wrap">
        <span style="background:#f2994a;color:#fff;padding:6px 10px;border-radius:6px">&lt;a&gt;</span>
        <span style="background:#eb5757;color:#fff;padding:6px 10px;border-radius:6px">&lt;span&gt;</span>
        <span style="background:#2d9cdb;color:#fff;padding:6px 10px;border-radius:6px">&lt;em&gt;</span></div>` } }
    },
    not: "Başlık etiketleri bloktur: sonrasındaki öğe alt satıra geçer." },

  { tur: "bilgi", baslik: "h1'den h6'ya",
    metin: "<b>h</b> = <b>h</b>eading (başlık). Sayı büyüdükçe başlık küçülür.",
    gorsel: { tip: "html", icerik: `<div style="font-family:'Times New Roman',serif;font-weight:700;line-height:1.15">
      <div style="font-size:2em">h1 · En önemli başlık</div><div style="font-size:1.5em">h2 · Bölüm başlığı</div>
      <div style="font-size:1.17em">h3 · Alt başlık</div><div style="font-size:1em">h4</div>
      <div style="font-size:.83em">h5</div><div style="font-size:.67em">h6 · En küçük</div></div>` } },

  { tur: "bilgi", baslik: "Başlık kuralları",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "1️⃣ h1 tek", alt: "Sayfada bir tane h1: sayfanın özeti" },
      { ust: "🪜 sırayla", alt: "h1'den sonra h3'e atlama. h1 → h2 → h3" },
      { ust: "✂️ az başlık", alt: "h4'ten sonrası pek kullanılmaz" },
      { ust: "🎨 görünüm CSS'le", alt: "Büyük yazı için değil, anlam için h kullan" }
    ]}},

  { tur: "bilgi", baslik: "Başlık neden önemli?",
    gorsel: { tip: "akis", adimlar: [
      { simge: "👀", yazi: "Kolay okunur" },
      { simge: "🔍", yazi: "Arama motoru anlar", alt: "anlamsal etiket" },
      { simge: "⬆️", yazi: "Üst sıralarda çıkar", alt: "SEO" }
    ]},
    not: "Arama motorları görünüşe değil etikete bakar." },

  { tur: "uygulama", baslik: "Altı başlık",
    gorsel: { tip: "resim", yol: G + "05-baslik.png" },
    adimlar: [
      "Temel HTML yapısını oluştur.",
      "body içine altı başlık etiketini sırayla yaz.",
      "Kaydet, tarayıcıda aç, boyutları karşılaştır."
    ],
    kitap: "s. 56 · 5. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Başlık etiketleriyle bir HTML belgesi oluştur (ör. bir haber sayfası). Kullandığın başlıkları arkadaşınınkiyle karşılaştır.",
    kitap: "s. 57" },

  { tur: "test", sorular: [
    { soru: "En büyük başlık hangisidir?", kod: true, secenekler: ["<h6>", "<h1>", "<head>", "<header>"], dogru: 1 },
    { soru: "Bir sayfada kaç tane h1 olmalı?", secenekler: ["Hiç", "Bir", "İki", "İstediğin kadar"], dogru: 1 },
    { soru: "Hangisi blok etikettir?", kod: true, secenekler: ["<a>", "<span>", "<em>", "<h2>"], dogru: 3 },
    { soru: "h1'den sonra hangi başlık gelmeli?", kod: true, secenekler: ["<h3>", "<h2>", "<h6>", "<h4>"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Haber sitesinde başlık avı",
    adimlar: [
      "Bir haber sitesini aç, <b>F12</b>'ye bas.",
      "Elements sekmesinde <b>Ctrl + F</b> ile <b>&lt;h1</b> ara.",
      "Kaç h1 var? Kurala uyuyorlar mı?"
    ]}

]};
