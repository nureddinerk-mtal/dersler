// WTUG · 11 · Sayfa iskeleti: anlamsal etiketler  (Kitap s. 54–55, 72–76)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Anlamsal etiket nedir?",
    gorsel: { tip: "ikili",
      sol: { baslik: "❓ Anlamsız", gorsel: { tip: "kartlar", kartlar: [{ ust: "&lt;div&gt; &lt;span&gt;", alt: "İçinde ne var, söylemez", renk: "#8a8a8a" }] } },
      sag: { baslik: "💬 Anlamsal", gorsel: { tip: "kartlar", kartlar: [{ ust: "&lt;header&gt; &lt;nav&gt; &lt;article&gt;", alt: "İçinde ne olduğunu söyler", renk: "#27ae60" }] } }
    },
    not: "Arama motorları siteyi anlamsal etiketlere bakarak tanır." },

  { tur: "bilgi", baslik: "HTML5 sayfa şablonu",
    gorsel: { tip: "agac", kok: { ad: "&lt;body&gt;", renk: "#8a8a8a", cocuklar: [
      { ad: "&lt;header&gt;", alt: "başlık, logo, yazar" },
      { ad: "&lt;nav&gt;", alt: "menü bağlantıları" },
      { ad: "", renk: "#fdfbf6", yan: true, cocuklar: [
        { ad: "&lt;section&gt;", alt: "bölüm", cocuklar: [{ ad: "&lt;article&gt;", alt: "haber, makale" }, { ad: "&lt;article&gt;" }] },
        { ad: "&lt;aside&gt;", alt: "yan bilgi, reklam" }
      ]},
      { ad: "&lt;footer&gt;", alt: "telif, iletişim" }
    ]}},
    not: "Yerleri tasarıma göre değişebilir. Görünümü CSS verir." },

  { tur: "bilgi", baslik: "Kim ne iş yapar?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "&lt;header&gt;", alt: "Sayfanın ya da bölümün başlığı" },
      { ust: "&lt;nav&gt;", alt: "Gezinme (menü) bağlantıları" },
      { ust: "&lt;section&gt;", alt: "Bir bölüm: başlık + içerik" },
      { ust: "&lt;article&gt;", alt: "Kendi başına anlamlı içerik: haber, blog" },
      { ust: "&lt;aside&gt;", alt: "Kenar çubuğu: ek bilgi, reklam" },
      { ust: "&lt;footer&gt;", alt: "Alt bilgi: yazar, telif, iletişim" },
      { ust: "&lt;figure&gt;", alt: "Resim + &lt;figcaption&gt; alt yazı" },
      { ust: "&lt;hgroup&gt;", alt: "Birden çok başlığı gruplar" }
    ]}},

  { tur: "ornek", baslik: "header ve nav",
    kod: `<header>
  <h1>İlk Kişisel Web Sayfam</h1>
  <p>Header Yazarı : Selim</p>
</header>
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a>
</nav>`,
    sonuc: { tip: "tarayici", adres: "index.html", icerik: `<header><h1>İlk Kişisel Web Sayfam</h1><p>Header Yazarı : Selim</p></header><nav><a href="#">HTML</a> | <a href="#">CSS</a> | <a href="#">JavaScript</a></nav>` } },

  { tur: "ornek", baslik: "figure ve figcaption",
    kod: `<figure>
  <img src="gorsel/malzeme/logo.png" width="80">
  <figcaption>Şekil.1-Figure Uygulaması</figcaption>
</figure>`,
    sonuc: { tip: "tarayici", adres: "figure.html", icerik: `<figure><img src="gorsel/malzeme/logo.png" width="80"><figcaption>Şekil.1-Figure Uygulaması</figcaption></figure>` } },

  { tur: "uygulama", baslik: "Anlamsal sayfa iskeleti",
    gorsel: { tip: "resim", yol: G + "11-iskelet.png", yazi: "CSS olmadığı için bölümler alt alta. Kodu anlamsal etiketlerle yaz." },
    adimlar: [
      "header içine h1 ve yazar, nav içine dört bağlantı.",
      "İki section (HTML5, CSS), bir aside (EBA Dükkan).",
      "figure ile logo ve alt yazı, footer ile yazar bilgisi."
    ],
    malzeme: ["logo.png"],
    kitap: "s. 73–75" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Görsel 3.26'daki şablonu inceleyip kendi sayfan için kâğıda çiz.<br>2️⃣ Kitaptaki “İlk HTML5 Belgesi ve Anlamsal Etiketler” kodlarını yaz, tarayıcıda görüntüle.",
    kitap: "s. 72, 76" },

  { tur: "test", sorular: [
    { soru: "📖 Anlamsal etiketler hem geliştirici hem de tarayıcılar tarafından açıkça anlaşılır.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 Hangisi HTML5 tasarım şablonunda kullanılan anlamsal etiketlerden değildir?", kod: true, secenekler: ["<div>", "<footer>", "<header>", "<nav>", "<section>"], dogru: 0 },
    { soru: "Menü bağlantıları hangi etiketin içine yazılır?", kod: true, secenekler: ["<aside>", "<nav>", "<footer>", "<article>"], dogru: 1 },
    { soru: "Bir resmin alt yazısı hangi etiketle yazılır?", kod: true, secenekler: ["<caption>", "<figcaption>", "<summary>", "<legend>"], dogru: 1 },
    { soru: "Kenar çubuğu (reklam alanı) için hangisi?", kod: true, secenekler: ["<aside>", "<header>", "<section>", "<hgroup>"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Bir siteyi parçalarına ayır",
    adimlar: [
      "Sevdiğin bir sitenin ekran görüntüsünü al.",
      "Paint'te header, nav, section, aside, footer bölgelerini farklı renkle çiz.",
      "F12 ile bak: gerçekten bu etiketleri kullanmışlar mı?"
    ]}

]};
