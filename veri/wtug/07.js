// WTUG · 07 · Listeler  (Kitap s. 63–65)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "ol, ul, dl ve iç içe liste. İç içe listede alt liste li'nin İÇİNE yazılır; en çok burada hata yapılıyor.", akis: ["Üç liste türü", "type, start, reversed", "İç içe liste uygulamaları (teacher EK örnekleri)"], hatalar: ["Alt ul'yi li'nin dışına, doğrudan ul içine yazmak", "li'yi ul/ol dışında kullanmak", "type=\"I\" ile type=\"i\" farkını kaçırmak"], sorular: [["Madde işaretini nasıl değiştiririm?", "ul'de CSS list-style-type ile (CSS konusunda göreceğiz)."], ["dl ne zaman kullanılır?", "Terim–açıklama çiftleri için: sözlük, SSS gibi."]] },


  { tur: "bilgi", baslik: "Üç çeşit liste",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "&lt;ol&gt; sıralı", alt: "1. 2. 3. numaralı" },
      { ust: "&lt;ul&gt; sırasız", alt: "• • • madde işaretli" },
      { ust: "&lt;dl&gt; tanım", alt: "Sözlük gibi: terim + açıklama" }
    ]},
    not: "ol ve ul'de her madde &lt;li&gt; ile yazılır." },

  { tur: "ornek", baslik: "Sıralı ve sırasız liste",
    kod: `<ol>
  <li>Vatanseverlik</li>
  <li>Yardımlaşma</li>
  <li>Sorumluluk</li>
</ol>
<ul>
  <li>Vatanseverlik</li>
  <li>Yardımlaşma</li>
  <li>Sorumluluk</li>
</ul>`,
    sonuc: { tip: "tarayici", adres: "liste.html", icerik: "<ol><li>Vatanseverlik</li><li>Yardımlaşma</li><li>Sorumluluk</li></ol><ul><li>Vatanseverlik</li><li>Yardımlaşma</li><li>Sorumluluk</li></ul>" } },

  { tur: "ornek", baslik: "Tanım listesi",
    kod: `<dl>
  <dt>Ahlak</dt>
  <dd>Bir toplumun en üst genel standartlarını içerir.</dd>
  <dt>Etik</dt>
  <dd>Bir mesleğin, işin, kurumun standartlarıdır.</dd>
</dl>`,
    sonuc: { tip: "tarayici", adres: "tanim.html", icerik: "<dl><dt>Ahlak</dt><dd>Bir toplumun en üst genel standartlarını içerir.</dd><dt>Etik</dt><dd>Bir mesleğin, işin, kurumun standartlarıdır.</dd></dl>" },
    not: "dt = terim, dd = açıklama (içeriden başlar)." },

  { tur: "bilgi", baslik: "type, start, reversed",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>type="1"</code> <span>1. 2. 3.</span></div><div><code>type="a"</code> <span>a. b. c.</span></div>
      <div><code>type="A"</code> <span>A. B. C.</span></div><div><code>type="i"</code> <span>i. ii. iii.</span></div>
      <div><code>type="I"</code> <span>I. II. III.</span></div><div><code>start="5"</code> <span>5'ten başla</span></div>
      <div><code>reversed</code> <span>3. 2. 1. tersten</span></div><div><code>ul type="disc"</code> <span>● dolu daire</span></div>
      <div><code>ul type="circle"</code> <span>○ boş daire</span></div><div><code>ul type="square"</code> <span>■ kare</span></div></div>` },
    not: "type=\"a\" start=\"4\" → d'den başlar." },

  { tur: "uygulama", baslik: "İç içe liste: şehirler",
    gorsel: { tip: "resim", yol: G + "07-sehirler.png" },
    adimlar: [
      "Dış liste sıralı (ol), şehirler onun maddeleri.",
      "Her şehrin &lt;li&gt;'si kapanmadan içine bir ul yaz.",
      "İlçeleri ul içine li olarak yaz."
    ],
    kitap: "Öğretmen ek uygulaması (EK)" },

  { tur: "uygulama", baslik: "İç içe liste: geliştiriciler",
    gorsel: { tip: "resim", yol: G + "07-gelistirici.png" },
    adimlar: [
      "En dışta type=\"A\" olan ol.",
      "Her geliştirici türünün içine numaralı ol.",
      "Css ve Javascript'in içine madde işaretli ul."
    ],
    kitap: "Öğretmen ek uygulaması (EK)" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Sıralı listeyi oluştur (Görsel 3.16) · 2️⃣ Sırasız listeyi oluştur (Görsel 3.17)<br>3️⃣ Tanım listesini oluştur · 4️⃣ type ve start ile Görsel 3.18'deki üç listeyi oluştur",
    kitap: "s. 63–65" },

  { tur: "test", sorular: [
    { soru: "Madde işaretli liste hangi etiketle başlar?", kod: true, secenekler: ["<ol>", "<ul>", "<li>", "<dl>"], dogru: 1 },
    { soru: "Listeyi i, ii, iii diye numaralamak için?", kod: true, secenekler: ['type="I"', 'type="1"', 'type="i"', 'type="a"'], dogru: 2 },
    { soru: '&lt;ol type="A" start="5"&gt; listesi hangi harfle başlar?', secenekler: ["A", "D", "E", "F"], dogru: 2 },
    { soru: "Tanım listesinde açıklama hangi etiketle yazılır?", kod: true, secenekler: ["<dt>", "<dd>", "<li>", "<dl>"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Madde işaretini kaldır",
    metin: "Menüler aslında birer listedir. Madde işareti olmayan liste:",
    kod: `<ul type="none">
  <li>Anasayfa</li>
  <li>Hakkımda</li>
</ul>`,
    not: "CSS konusunda list-style-type ile daha fazlasını yapacağız." }

]};
