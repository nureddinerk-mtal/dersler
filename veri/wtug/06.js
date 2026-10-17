// WTUG · 06 · Paragraf ve metin biçimlendirme  (Kitap s. 57–62, 69)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Paragraf: &lt;p&gt;",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "✅ Doğru", alt: "<code>&lt;p&gt;Birinci&lt;/p&gt;<br>&lt;p&gt;İkinci&lt;/p&gt;</code>", renk: "#27ae60" },
      { ust: "❌ Yanlış", alt: "<code>&lt;p&gt;Birinci<br>&lt;p&gt;İkinci&lt;/p&gt;&lt;/p&gt;</code>", renk: "#eb5757" }
    ]},
    not: "Blok etiketler iç içe yazılmaz. Satır atlamak için &lt;br&gt;." },

  { tur: "bilgi", baslik: "Biçim etiketleri",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>&lt;b&gt;</code> <span><b>kalın</b></span></div><div><code>&lt;strong&gt;</code> <span><strong>güçlü</strong></span></div>
      <div><code>&lt;i&gt;</code> <span><i>eğik</i></span></div><div><code>&lt;em&gt;</code> <span><em>vurgulu</em></span></div>
      <div><code>&lt;u&gt;</code> <span><u>altı çizili</u></span></div><div><code>&lt;ins&gt;</code> <span><ins>eklenmiş</ins></span></div>
      <div><code>&lt;mark&gt;</code> <span><mark>işaretli</mark></span></div><div><code>&lt;small&gt;</code> <span><small>küçük</small></span></div>
      <div><code>&lt;del&gt;</code> <span><del>silinmiş</del></span></div><div><code>&lt;pre&gt;</code> <span style="font-family:monospace">boşluk   korunur</span></div>
      <div><code>&lt;sup&gt;</code> <span>x<sup>2</sup></span></div><div><code>&lt;sub&gt;</code> <span>H<sub>2</sub>O</span></div></div>` } },

  { tur: "bilgi", baslik: "Görünüm aynı, anlam farklı",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "b ↔ strong", alt: "İkisi de kalın. Önemli içerikte <b>strong</b>." },
      { ust: "i ↔ em", alt: "İkisi de eğik. Önemli içerikte <b>em</b>." },
      { ust: "u ↔ ins", alt: "İkisi de altı çizili. u'yu HTML5 desteklemez, <b>ins</b> kullan." }
    ]},
    not: "strong, em, ins anlamsal: arama motoru bunları önemli sayar." },

  { tur: "ornek", baslik: "Haberde vurgu",
    kod: `<h2>BİZDEN HABERLER</h2>
<p>MESLEKİ EĞİTİMDE <strong>1000 OKUL
İYİLEŞTİRME PROJESİ</strong> KAPSAMINDAKİ
<mark>TÜM OKULLARIN</mark> YÖNETİCİLERİNE
<b>BİLGİLENDİRME TOPLANTILARI</b> YAPILDI</p>`,
    sonuc: { tip: "tarayici", adres: "haber.html", icerik: `<h2>BİZDEN HABERLER</h2><p>MESLEKİ EĞİTİMDE <strong>1000 OKUL İYİLEŞTİRME PROJESİ</strong> KAPSAMINDAKİ <mark>TÜM OKULLARIN</mark> YÖNETİCİLERİNE <b>BİLGİLENDİRME TOPLANTILARI</b> YAPILDI</p>` } },

  { tur: "ornek", baslik: "Üst ve alt simge",
    kod: `H<sub>2</sub>O bileşiği hayatın,
C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> vücudun
temel ihtiyacıdır.<br>
<hr>
(x+y)<sup>2</sup>=x<sup>2</sup>+2xy+y<sup>2</sup>`,
    sonuc: { tip: "tarayici", adres: "simge.html", icerik: `H<sub>2</sub>O bileşiği hayatın, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> vücudun temel ihtiyacıdır.<br><hr>(x+y)<sup>2</sup>=x<sup>2</sup>+2xy+y<sup>2</sup>` },
    not: "&lt;hr&gt; yatay çizgi çeker. Kapanışı yok." },

  { tur: "uygulama", baslik: "Metin biçimlendirme",
    gorsel: { tip: "resim", yol: G + "06-bicim.png" },
    adimlar: [
      "Temel HTML yapısını oluştur, title'ı yaz.",
      "Tüm satırları tek &lt;p&gt; içine yaz, satırları &lt;br/&gt; ile ayır.",
      "Her satırdaki vurguyu doğru etiketle yap.",
      "Kaydet, aç, hedefle karşılaştır."
    ],
    kitap: "s. 57–58 · 6. Uygulama" },

  { tur: "uygulama", baslik: "Gençliğe Hitabe",
    gorsel: { tip: "resim", yol: G + "06-hitabe.png", yazi: "Hitabenin tamamını aynı şekilde biçimlendir." },
    adimlar: [
      "Hitabeyi body içine paragraflar hâlinde yaz.",
      "Başlığı strong, ilk cümleyi b ile yaz.",
      "ins, u ve mark ile hedefteki vurguları yap.",
      "Satır sonları için &lt;br&gt; kullan."
    ],
    kitap: "s. 62 · 7. Uygulama" },

  { tur: "bilgi", baslik: "Diğer metin etiketleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "&lt;abbr&gt;", alt: "Kısaltma. title ile açılımı çıkar." },
      { ust: "&lt;bdo dir&gt;", alt: "Yazı yönü: ltr soldan sağa, rtl sağdan sola" },
      { ust: "&lt;cite&gt;", alt: "Eser adı (eğik)" },
      { ust: "&lt;code&gt;", alt: "Kod yazısı (sabit genişlik)" },
      { ust: "&lt;details&gt;", alt: "Aç-kapa kutu. Başlığı &lt;summary&gt;" }
    ]}},

  { tur: "uygulama", baslik: "Diğer etiketler",
    gorsel: { tip: "resim", yol: G + "06-diger.png", yazi: "“Göster / Gizle”ye tıklayınca içerik açılmalı." },
    adimlar: [
      "Her satırı ayrı &lt;p&gt; içine yaz.",
      "abbr, bdo, cite, code ve details/summary kullan.",
      "HTML kısaltmasının üzerine gel: açılım çıkıyor mu?"
    ],
    kitap: "s. 69 · 9. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Kitaptaki görüntüleri oluştur:<br>1️⃣ b–strong (Görsel 3.12) · 2️⃣ i–em (Görsel 3.13) · 3️⃣ u–ins, Yunus Emre (Görsel 3.14)<br>4️⃣ small · 5️⃣ pre ile İstiklal Marşı · 6️⃣ del: Türkçesi varken (Görsel 3.15) · 7️⃣ sup–sub kimya ve matematik",
    kitap: "s. 60–62" },

  { tur: "test", sorular: [
    { soru: "Önemli bir kelimeyi kalın ve anlamlı göstermek için hangisi?", kod: true, secenekler: ["<b>", "<strong>", "<small>", "<u>"], dogru: 1 },
    { soru: "Boşlukları ve satır sonlarını aynen koruyan etiket?", kod: true, secenekler: ["<p>", "<br>", "<pre>", "<code>"], dogru: 2 },
    { soru: "H₂O yazmak için 2 hangi etiketle yazılır?", kod: true, secenekler: ["<sup>", "<sub>", "<small>", "<del>"], dogru: 1 },
    { soru: "Üstü çizili (silinmiş) yazı için?", kod: true, secenekler: ["<ins>", "<mark>", "<del>", "<em>"], dogru: 2 },
    { soru: "Tıklayınca açılan kutunun başlığı hangi etiketle yazılır?", kod: true, secenekler: ["<details>", "<summary>", "<title>", "<caption>"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Özel karakterler",
    metin: "Klavyede olmayan işaretler kodla yazılır.",
    kod: `&copy; 2026 · &hearts; · &lt;p&gt; · &euro;`,
    gorsel: { tip: "tarayici", adres: "ozel.html", icerik: "&copy; 2026 · &hearts; · &lt;p&gt; · &euro;" },
    not: "&amp;lt; yazınca &lt; görünür; etiket sanılmaz." }

]};
