// WTUG · 27 · Renk ve tipografi  (Kitap s. 137–142)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "RGB, hex, rgba renkler; gradient; yazı tipi özellikleri; Google Fonts. Renk kodlarını ezberletmeye gerek yok, renk seçici kullanmayı öğretin.", akis: ["RGB mantığı", "Gradient ve hover geçişi", "Makale tipografisi"], hatalar: ["# işaretini unutmak", "Google Fonts link'ini eklemeden font-family yazmak", "rgba'da saydamlığı 0–100 yazmak (0–1 olmalı)"], sorular: [["Renk kodunu nereden bulurum?", "VS Code'da renk kutusuna tıkla ya da Google'da “color picker”."], ["Yazı tipi neden bende farklı?", "O yazı tipi bilgisayarda yoksa yedek yazı tipi gösterilir; Google Fonts bunu çözer."]] },


  { tur: "bilgi", baslik: "Ekranın üç ana rengi: RGB",
    gorsel: { tip: "html", icerik: `<svg viewBox="0 0 220 200" width="220" style="display:block;margin:0 auto;mix-blend-mode:normal"><g style="mix-blend-mode:screen">
      <circle cx="80" cy="80" r="60" fill="#ff0000"/><circle cx="140" cy="80" r="60" fill="#00ff00" style="mix-blend-mode:screen"/><circle cx="110" cy="130" r="60" fill="#0000ff" style="mix-blend-mode:screen"/></g></svg>
      <div style="text-align:center;font-weight:700">Kırmızı (Red) · Yeşil (Green) · Mavi (Blue)</div>` },
    not: "Üçü karışınca beyaz olur. 16 milyondan fazla ton elde edilir." },

  { tur: "bilgi", baslik: "Renk yazmanın üç yolu",
    gorsel: { tip: "html", icerik: `<table style="margin:0 auto;border-collapse:collapse;font-family:Consolas,monospace">
      <tr style="color:#8a8a8a"><td style="padding:4px 10px">isim</td><td style="padding:4px 10px">rgb()</td><td style="padding:4px 10px">kod</td><td></td></tr>
      ${[["red","255,0,0","#FF0000"],["green","0,255,0","#00FF00"],["blue","0,0,255","#0000FF"],["pink","255,192,203","#FFC0CB"],["purple","128,0,128","#800080"],["darkorange","255,140,0","#FF8C00"]]
        .map(r => `<tr><td style="padding:4px 10px">${r[0]}</td><td style="padding:4px 10px">rgb(${r[1]})</td><td style="padding:4px 10px">${r[2]}</td><td><span style="display:inline-block;width:40px;height:20px;border-radius:4px;background:${r[2]}"></span></td></tr>`).join("")}</table>` },
    not: "Kodda #'ten sonra 2'şer basamak: kırmızı, yeşil, mavi. 00 en az, FF en çok." },

  { tur: "bilgi", baslik: "rgba: saydamlık",
    kod: `background-color: rgba(0, 0, 255, 0.5);  /* yarı saydam mavi */`,
    gorsel: { tip: "html", icerik: `<div style="display:flex;gap:6px;justify-content:center;font-family:Consolas,monospace;font-size:.8rem;text-align:center">${[1,0.75,0.5,0.25,0.1].map(a=>`<div><div style="width:60px;height:40px;background:rgba(0,0,255,${a});border-radius:6px"></div>${a}</div>`).join("")}</div>` },
    not: "Son değer alpha: 0 tamamen saydam, 1 tamamen dolu." },

  { tur: "bilgi", baslik: "Geçişli renk (gradient)",
    gorsel: { tip: "html", icerik: `<div style="display:grid;gap:6px;font-family:Consolas,monospace;font-size:.85rem;color:#fff">
      <div style="background:linear-gradient(red,white);padding:12px;color:#222">linear-gradient(red, white) → yukarıdan aşağı</div>
      <div style="background:linear-gradient(to right,red,white,blue);padding:12px">linear-gradient(to right, red, white, blue)</div>
      <div style="background:linear-gradient(90deg,#0cbaba,#380036);padding:12px">linear-gradient(90deg, …) → açıyla</div></div>` },
    not: "Yönler: to top, to right, to bottom right… ya da 0–180deg. background'a yazılır." },

  { tur: "uygulama", baslik: "Geçişli renkli kutular",
    gorsel: { tip: "ikili",
      sol: { baslik: "Normal", gorsel: { tip: "resim", yol: G + "27-gecis.png" } },
      sag: { baslik: "Fare 2. kutunun üstünde", gorsel: { tip: "resim", yol: G + "27-gecis-hover.png" } }
    },
    adimlar: [
      "Üç div: gecisli1/2/3, genişlik %20 · %30 · %40, kitaptaki geçişli renkler.",
      "div: 100px yükseklik, beyaz 20px yazı, köşe 10px.",
      "div:hover → width 1000px, transition 0.5s: kutu yavaşça uzasın."
    ],
    kitap: "s. 139–140 · 21. Uygulama" },

  { tur: "bilgi", baslik: "Tipografi kodları",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>font-family</code> <span style="font-family:Arial">Arial</span></div><div><code>font-size</code> <span style="font-size:22px">22px</span></div>
      <div><code>font-weight</code> <span style="font-weight:700">bold</span></div><div><code>font-style</code> <span style="font-style:italic">italic</span></div>
      <div><code>text-shadow</code> <span style="text-shadow:2px 2px 2px #f2c94c">gölge</span></div><div><code>text-decoration</code> <span style="text-decoration:underline">underline</span></div>
      <div><code>letter-spacing</code> <span style="letter-spacing:.25em">aralık</span></div><div><code>line-height</code> <span>satır yüksekliği</span></div>
      <div><code>text-transform</code> <span style="text-transform:uppercase">büyük harf</span></div><div><code>text-align</code> <span>hizalama</span></div></div>` },
    not: "margin, padding, border, background da dolaylı olarak tipografiyi etkiler." },

  { tur: "uygulama", baslik: "Makale tipografisi",
    gorsel: { tip: "resim", yol: G + "27-makale.png" },
    adimlar: [
      "index.html + Stil.css. Kitaptaki makale kodlarını yaz.",
      "h2: Georgia, 2.5em, kırmızımsı, gölgeli · içindeki span: blok, Verdana.",
      ".yazar_tarih: gri, eğik, harf aralığı 0.25em, alt çizgi.",
      "İlk paragraf (:first-child) büyük ve eğik, ilk satırı kalın."
    ],
    kitap: "s. 141–142 · 22. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Renk kodlarında #'ten sonraki ilk iki basamak hangi rengi temsil eder?", secenekler: ["Yeşil", "Mavi", "Kırmızı", "Saydamlık"], dogru: 2 },
    { soru: "📖 RGB fonksiyonunda her parametre en çok kaç değerini alır?", secenekler: ["100", "255", "256", "1"], dogru: 1 },
    { soru: "#000000 hangi renk?", secenekler: ["Beyaz", "Siyah", "Kırmızı", "Gri"], dogru: 1 },
    { soru: "Yarı saydam renk için hangisi?", secenekler: ["rgb(0,0,255)", "rgba(0,0,255,0.5)", "#0000FF", "blue"], dogru: 1 },
    { soru: "Bütün harfleri büyük yapan kod?", secenekler: ["font-weight: bold", "text-transform: uppercase", "font-size: big", "letter-spacing: 1em"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Google Fonts",
    metin: "Bilgisayarda olmayan yazı tiplerini internetten kullan:",
    kod: `<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
<style> h1 { font-family: 'Pacifico', cursive; } </style>`,
    gorsel: { tip: "html", icerik: `<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"><div style="font-family:'Pacifico',cursive;font-size:2rem;text-align:center;color:#eb5757">Merhaba Dünya</div>` } }

]};
