// WTUG · 25 · Kutu modeli  (Kitap s. 124–127)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Her eleman bir kutu: içerik + padding + border + margin. F12'de kutu modelini göstermek en etkili yol. Kısa yazım saat yönünde: üst sağ alt sol.", akis: ["Kutu modeli çizimi", "Ölçü birimleri (px, %, em, vw)", "F12 ile kutuyu gör"], hatalar: ["padding ile margin'i karıştırmak (padding içeride, arka plan rengini alır)", "4 değerli kısa yazımın sırasını karıştırmak"], sorular: [["Kutum neden verdiğim genişlikten büyük?", "padding ve border genişliğe eklenir; box-sizing:border-box ile engellenir."], ["Ortalamak için?", "Genişlik verip margin: 0 auto."]] },


  { tur: "bilgi", baslik: "Her eleman bir kutudur",
    gorsel: { tip: "html", icerik: `<div style="max-width:420px;margin:0 auto;font-family:Consolas,monospace;font-size:.9rem;text-align:center">
      <div style="border:2px dashed #f2994a;background:#fff3e6;padding:8px 22px 22px">margin (dış boşluk)
        <div style="border:10px solid #2b2b2b;margin-top:6px"><div style="background:#e3f5e9;padding:8px 22px 22px;color:#1b7a3d">border (kenarlık) ↑ · padding (iç boşluk)
          <div style="background:#2f80ed;color:#fff;padding:16px;margin-top:6px">content (içerik)</div></div></div></div></div>` },
    not: "Sırayla dıştan içe: margin → border → padding → content." },

  { tur: "bilgi", baslik: "Ölçü birimleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "px", alt: "Sabit. Piksel." },
      { ust: "%", alt: "Göreceli: kapsayan elemana göre. div 300px → p 50% = 150px" },
      { ust: "em", alt: "Göreceli: yazı boyutuna göre. 16px'te 2em = 32px" },
      { ust: "vw · vh", alt: "Göreceli: ekran genişliği · yüksekliği. 10vw = ekranın onda biri" }
    ]}},

  { tur: "bilgi", baslik: "margin ve padding yazımı",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>margin-top</code> <span>üstten</span></div><div><code>margin-right</code> <span>sağdan</span></div>
      <div><code>margin-bottom</code> <span>alttan</span></div><div><code>margin-left</code> <span>soldan</span></div>
      <div><code>margin: 10px;</code> <span>her yönden 10</span></div><div><code>margin: 10px 25px 15px 5px;</code> <span>üst sağ alt sol (saat yönü)</span></div></div>` },
    not: "padding de aynı: padding-top … padding: 10px 25px 15px 5px;" },

  { tur: "ornek", baslik: "Boşlukların farkı",
    sonuc: { tip: "resim", yol: G + "25-bosluk.png" },
    kod: `#a { margin: 0;    padding: 0; }
#b { margin: 20px; padding: 0; }
#c { margin: 20px; padding: 20px; }`,
    not: "margin kutuyu dışarıdan iter, padding içeriği kenardan uzaklaştırır." },

  { tur: "bilgi", baslik: "Kenarlık (border)",
    gorsel: { tip: "html", icerik: `<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;font-family:Consolas,monospace;font-size:.85rem">
      <div style="border:4px solid #2f80ed;padding:10px">solid</div><div style="border:4px dotted #27ae60;padding:10px">dotted</div>
      <div style="border:6px double #f2994a;padding:10px">double</div><div style="border:4px dashed #9b51e0;padding:10px">dashed</div>
      <div style="border:4px solid #eb5757;padding:10px;border-radius:14px">border-radius</div></div>` },
    kod: `border: 3px solid blue;          /* kalınlık doku renk */
border-top-color: red;           /* sadece üst */
border-radius: 3px 4px 5px 6px;  /* köşeler */`,
    not: "border-width · border-style · border-color tek tek de yazılır." },

  { tur: "uygulama", baslik: "Kutuları gör",
    gorsel: { tip: "resim", yol: G + "25-kutular.png" },
    adimlar: [
      "b, i, u ve div içine Kutu 1–4 yaz. body royalblue.",
      "b, i, u, div için çoklu seçiciyle 2px solid kırmızı kenarlık.",
      "Hangileri yan yana, hangisi tam satır? Not et."
    ],
    kitap: "s. 125 · Görsel 4.18" },

  { tur: "test", sorular: [
    { soru: "📖 Kutu modelini oluşturan dört özellik?", secenekler: ["width, height, color, font", "padding, margin, border, content", "top, left, right, bottom", "px, em, %, vw"], dogru: 1 },
    { soru: "📖 CSS ölçü birimlerinden göreceli olanlar?", secenekler: ["Sadece px", "%, em, vw, vh", "px ve cm", "Hepsi sabittir"], dogru: 1 },
    { soru: "Kenarlık ile içerik arasındaki boşluk?", secenekler: ["margin", "padding", "border", "content"], dogru: 1 },
    { soru: "margin: 10px 25px 15px 5px; değerinde 25px hangi yön?", secenekler: ["Üst", "Sağ", "Alt", "Sol"], dogru: 1 },
    { soru: "body yazısı 32px. p { width: 5em; } genişliği kaç px?", secenekler: ["5", "32", "160", "37"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Kutuyu F12'de gör",
    adimlar: [
      "Bir sayfada F12 → bir elemana tıkla.",
      "Styles panelinin altında renkli kutu modeli çıkar.",
      "margin, border, padding değerlerinin üstüne çift tıklayıp değiştir!"
    ]}

]};
