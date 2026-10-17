// WTUG · 24 · Seçiciler 2: çocuk, torun, sözde  (Kitap s. 118–124)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Çocuk ve torun",
    gorsel: { tip: "ikili", ok: "≠",
      sol: { baslik: "div>b · sadece çocuklar", gorsel: { tip: "agac", kok: { ad: "div", cocuklar: [{ ad: "b ✅", renk: "#27ae60" }, { ad: "p", renk: "#8a8a8a", cocuklar: [{ ad: "b ❌", renk: "#eb5757" }] }] } } },
      sag: { baslik: "div b · çocuk + torun", gorsel: { tip: "agac", kok: { ad: "div", cocuklar: [{ ad: "b ✅", renk: "#27ae60" }, { ad: "p", renk: "#8a8a8a", cocuklar: [{ ad: "b ✅", renk: "#27ae60" }] }] } } }
    },
    not: "&gt; işareti: bir alt seviye. Boşluk: bütün alt seviyeler." },

  { tur: "uygulama", baslik: "Çocuk seçici: profil kartı",
    gorsel: { tip: "resim", yol: G + "24-cocuk.png", yazi: "“HTML, CSS kodlayabiliyor.” beyaz değil: o b, p'nin içinde." },
    adimlar: [
      "Kitaptaki profil kodunu yaz (div içinde b, hr, img, b, p).",
      "div: darkcyan, 2px solid kenarlık, genişlik 400px.",
      "div>img: 100 × 100. div>b: beyaz."
    ],
    malzeme: ["profilBayan.png"],
    kitap: "s. 118–119 · 10. Uygulama" },

  { tur: "uygulama", baslik: "Torun seçici: profil kartı",
    gorsel: { tip: "resim", yol: G + "24-torun.png", yazi: "Bu kez p'nin içindeki b de beyaz." },
    adimlar: [
      "Aynı yapı: Mehmet Ali, Python.",
      "div: seagreen. div>img: 100 × 100.",
      "div b (torun): bütün b'ler beyaz."
    ],
    malzeme: ["profilBay.png"],
    kitap: "s. 119–120 · 11. Uygulama" },

  { tur: "bilgi", baslik: "Sözde sınıf: durumlar",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>:link</code> <span>tıklanmamış bağlantı</span></div><div><code>:visited</code> <span>ziyaret edilmiş</span></div>
      <div><code>:hover</code> <span>fare üstünde</span></div><div><code>:active</code> <span>tıklanırken</span></div>
      <div><code>:focus</code> <span>odaklanmış (input)</span></div><div><code>:first-child</code> <span>ilk çocuk</span></div>
      <div><code>:last-child</code> <span>son çocuk</span></div></div>` },
    not: "Etiket adından hemen sonra tek iki nokta: a:hover" },

  { tur: "uygulama", baslik: "Sözde sınıf: menü",
    gorsel: { tip: "resim", yol: G + "24-sozde.png", yazi: "Fare “Özellik”in üstünde: arka planı beyaz." },
    adimlar: [
      "Dört bağlantılı liste: Etiket, Özellik, Değer, Fonksiyon. body indigo.",
      "a:link turuncu 22px · a:visited gri.",
      "a:hover arka plan beyaz · a:active yazı 30px."
    ],
    kitap: "s. 121–122 · 12. Uygulama" },

  { tur: "bilgi", baslik: "Sözde eleman: parçalar",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>::first-line</code> <span>ilk satır</span></div><div><code>::first-letter</code> <span>ilk harf</span></div>
      <div><code>::before</code> <span>öncesine içerik ekle</span></div><div><code>::after</code> <span>sonrasına içerik ekle</span></div>
      <div><code>::selection</code> <span>fareyle seçilen kısım</span></div></div>` },
    not: "Çift iki nokta: p::first-line" },

  { tur: "uygulama", baslik: "Sözde eleman: ilk harf, ilk satır",
    gorsel: { tip: "resim", yol: G + "24-eleman.png" },
    adimlar: [
      "div içinde iki paragraf (kitaptaki metin).",
      "div: indigo, 250px, beyaz yazı, köşe 5px.",
      "p::first-letter: 20px, kalın, sol dış boşluk 10px.",
      "p::first-line: arka plan turuncu, yazı siyah."
    ],
    kitap: "s. 123–124 · 13. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Kitaptaki kodlar çalışınca ne olur? Önce tahmin et, sonra dene:<br>1️⃣ div&gt;h3 (s. 119) · 2️⃣ .cerceve h3 (s. 120)<br>3️⃣ #mail:focus, #sifre:focus (s. 122) · 4️⃣ ::before ve ::after (s. 124)",
    kitap: "s. 119–124" },

  { tur: "test", sorular: [
    { soru: "📖 Çocuk seçici ile torun seçici arasındaki fark?", secenekler: ["Fark yoktur", "Çocuk bir alt seviyeyi, torun tüm alt seviyeleri seçer", "Torun sadece bir alt seviyeyi seçer", "Çocuk sadece class seçer"], dogru: 1 },
    { soru: "Fare üzerine gelince değişen stil için?", secenekler: [":active", ":hover", ":visited", ":focus"], dogru: 1 },
    { soru: "Paragrafın sadece ilk harfi?", secenekler: ["p::first-line", "p:first-child", "p::first-letter", "p::before"], dogru: 2 },
    { soru: "ul içindeki SADECE doğrudan li'leri seçen?", secenekler: ["ul li", "ul>li", "ul,li", "ul.li"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Zebra satırlar",
    kod: `tr:nth-child(even) { background-color: #eef3fb; }`,
    gorsel: { tip: "tarayici", adres: "zebra.html", icerik: `<style>td{padding:4px 12px}tr:nth-child(even){background:#eef3fb}</style><table><tr><td>Halide</td><td>100</td></tr><tr><td>Sabiha</td><td>90</td></tr><tr><td>Gökçen</td><td>80</td></tr><tr><td>Ayşe</td><td>85</td></tr></table>` },
    not: "even = çift, odd = tek satırlar." }

]};
