// WTUG · 10 · Kutular: div ve span  (Kitap s. 70–72)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "div ve span",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📦 &lt;div&gt;", alt: "Blok kutu. Yeni satırda başlar, tam genişlik. İçine her şey girer." },
      { ust: "🖍️ &lt;span&gt;", alt: "Satır içi kutu. Metnin bir parçasını işaretler, satırı kesmez." }
    ]},
    not: "İkisi de kendi başına görünmez. style, class, id ile anlam kazanır." },

  { tur: "ornek", baslik: "Renkli div",
    kod: `<div style="background-color:red;color:white;padding:30px;">
  <h2>div etiketim</h2>
  <p>div etiketi bloku tarafından sarılmış
  ve stil uygulanmış bir paragraf</p>
</div>`,
    sonuc: { tip: "tarayici", adres: "div.html", icerik: `<div style="background-color:red;color:white;padding:30px;"><h2>div etiketim</h2><p>div etiketi bloku tarafından sarılmış ve stil uygulanmış bir paragraf</p></div>` } },

  { tur: "ornek", baslik: "Paragrafta span",
    kod: `<p>Bu bir paragraf
<span style="color:green;font-weight:bold;">
yeşil ve kalın kısım</span>
paragrafın devamı
<span style="color:blue;font-weight:bold;">
mavi ve kalın kısım</span> paragrafın sonu</p>`,
    sonuc: { tip: "tarayici", adres: "span.html", icerik: `<p>Bu bir paragraf <span style="color:green;font-weight:bold;">yeşil ve kalın kısım</span> paragrafın devamı <span style="color:blue;font-weight:bold;">mavi ve kalın kısım</span> paragrafın sonu</p>` },
    not: "span paragrafı bölmedi, satır içinde kaldı." },

  { tur: "bilgi", baslik: "div ile sayfa şablonu",
    gorsel: { tip: "agac", kok: { ad: "&lt;body&gt;", renk: "#8a8a8a", cocuklar: [
      { ad: "div.header", alt: "üst bölüm" },
      { ad: "div.nav", alt: "menü" },
      { ad: "", renk: "#ffffff", yan: true, cocuklar: [
        { ad: "div.section", alt: "ana içerik", cocuklar: [{ ad: "div.header2" }, { ad: "div.article" }, { ad: "div.footer2" }] },
        { ad: "div.aside", alt: "yan bölüm" }
      ]},
      { ad: "div.footer", alt: "alt bölüm" }
    ]}},
    not: "Çok div açıp kapatmak karışıklık yaratır. Çözüm: anlamsal etiketler (sonraki konu)." },

  { tur: "uygulama", baslik: "div ile HTML şablonu",
    metin: "Şemadaki yapıyı div'lerle kur. Her div'e class ver, içine bölüm adını yaz.",
    gorsel: { tip: "agac", kok: { ad: "body", renk: "#8a8a8a", cocuklar: [
      { ad: "class=\"header\"" }, { ad: "class=\"nav\"" },
      { ad: "class=\"section\"", cocuklar: [{ ad: "class=\"header2\"" }, { ad: "class=\"article\"" }, { ad: "class=\"footer2\"" }] },
      { ad: "class=\"aside\"" }, { ad: "class=\"footer\"" }]}},
    adimlar: [
      "header, nav, section, aside, footer class'lı beş div oluştur.",
      "section div'inin içine header2, article, footer2 div'lerini koy.",
      "Her div'in içine adını yaz (ör. “Üst bölüm”), kaydet, aç."
    ],
    kitap: "s. 70–71 · 10. Uygulama" },

  { tur: "uygulama", baslik: "Span ile renkli paragraf",
    gorsel: { tip: "resim", yol: G + "10-span.png" },
    adimlar: [
      "Bir paragraf yaz.",
      "İki bölümü span ile işaretle, style ile renk ve kalınlık ver."
    ],
    kitap: "s. 72 · Görsel 3.25" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ div ile farklı renklerde bloklar oluştur.<br>2️⃣ div örneğinde div yerine span, span örneğinde span yerine div yaz. Farkı gözle ve not al.",
    kitap: "s. 71–72" },

  { tur: "test", sorular: [
    { soru: "Hangisi satır içi (inline) kapsayıcıdır?", kod: true, secenekler: ["<div>", "<span>", "<p>", "<section>"], dogru: 1 },
    { soru: "div için doğru olan hangisi?", secenekler: ["Satır içinde kalır", "Yeni satırda başlar, tam genişlik kaplar", "Sadece metin alır", "Kapanış etiketi yoktur"], dogru: 1 },
    { soru: "Paragraftaki tek bir kelimeyi renklendirmek için en uygun etiket?", kod: true, secenekler: ["<div>", "<span>", "<table>", "<br>"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kutuları yan yana diz",
    kod: `<div style="display:inline-block;width:80px;height:80px;background:orange"></div>
<div style="display:inline-block;width:80px;height:80px;background:teal"></div>`,
    gorsel: { tip: "tarayici", adres: "kutular.html", icerik: `<div style="display:inline-block;width:80px;height:80px;background:orange"></div> <div style="display:inline-block;width:80px;height:80px;background:teal"></div>` },
    not: "display: inline-block → CSS konusunda öğreneceğiz." }

]};
