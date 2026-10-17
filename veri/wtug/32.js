// WTUG · 32 · JavaScript'e giriş ve seçiciler  (Kitap s. 166–169)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "JavaScript ile sayfa davranış kazanır. Bu konunun hedefi: seçici ile elemanı bulup bir özelliğini değiştirmek. F12 Console'u ilk günden kullandırın.", akis: ["Üç katman ve yazım kuralları", "Dört seçici", "JScript ve id seçici uygulamaları"], hatalar: ["getElementsByClassName'den sonra [0] unutmak", "CSS özelliğini tireli yazmak (font-size → fontSize)", "script'i elemanlardan önce (head'e) yazıp null hatası almak"], sorular: [["Kod çalışmıyor, nereden anlarım?", "F12 → Console kırmızı hatayı ve satır numarasını gösterir."], ["JS nereye yazılır?", "Genelde &lt;/body&gt;'den hemen önce ya da harici .js dosyası."]] },


  { tur: "bilgi", baslik: "Sayfanın üç katmanı",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🦴 HTML", alt: "İskelet: ne var?" },
      { ust: "👗 CSS", alt: "Görünüm: nasıl görünüyor?" },
      { ust: "⚡ JavaScript", alt: "Davranış: tıklayınca ne olacak?" }
    ]},
    not: "JavaScript ile durağan (statik) sayfa, kullanıcıyla etkileşen dinamik sayfaya dönüşür." },

  { tur: "bilgi", baslik: "Üç yazım kuralı",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "document", etiket: "sayfa" }, { yazi: ".getElementById(\"baslik\")", etiket: "① nokta ile bağla" },
      { yazi: ".style.fontSize", etiket: "② font-size → fontSize" }, { yazi: "= \"52px\"", etiket: "değer" }, { yazi: ";", etiket: "③ noktalı virgül" }
    ]},
    not: "Çok kelimeli CSS özelliğinde tire atılır, sonraki kelimenin baş harfi büyür: background-color → backgroundColor." },

  { tur: "bilgi", baslik: "Sayfaya ekleme",
    kod: `<!-- Sayfa içi: herhangi bir yere -->
<script>
  alert("Merhaba Javascript");
</script>

<!-- Harici: head içine -->
<script type="text/javascript" src="JscriptDosyasi.js"></script>`,
    not: "alert ekrana mesaj kutusu çıkarır." },

  { tur: "uygulama", baslik: "İlk mesaj",
    gorsel: { tip: "resim", yol: G + "32-alert.png" },
    adimlar: ["Boş bir HTML sayfası aç.", "body içine script etiketi, içine alert yaz.", "Sayfayı tarayıcıda aç."],
    kitap: "s. 167" },

  { tur: "bilgi", baslik: "JavaScript nasıl çalışır?",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🖱️", yazi: "Olay", alt: "butona tıklandı" },
      { simge: "⚙️", yazi: "Fonksiyon", alt: "çağrılır" },
      { simge: "🎯", yazi: "Seçici", alt: "elemanı bulur" },
      { simge: "✏️", yazi: "Değişiklik", alt: "stil, içerik, değer" }
    ]}},

  { tur: "bilgi", baslik: "Neyi değiştirebilirim?",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>style</code> <span>tüm stil özellikleri</span></div><div><code>innerHTML</code> <span>içerik (HTML kodu ve metin)</span></div>
      <div><code>innerText</code> <span>sadece metin içerik</span></div><div><code>value</code> <span>input, select değeri</span></div></div>` },
    not: "Hepsi hem okunur hem değiştirilir. Seçici olmadan hiçbir eleman değiştirilemez." },

  { tur: "bilgi", baslik: "Dört seçici",
    kod: `document.getElementById("baslik")             // id: tek eleman
document.getElementsByClassName("harfler")[0]  // class: dizi
document.getElementsByName("kullaniciAdi")[0]  // name: dizi
document.getElementsByTagName("span")[2]       // etiket: dizi`,
    not: "id dışındakiler bir dizi döndürür. [ ] içine sıra numarası yazılır, ilk eleman 0." },

  { tur: "ornek", baslik: "id seçici",
    kod: `document.getElementById("baslik").style.fontSize="52px";
document.getElementById("icerik").innerHTML="<b>Bu yazı kalın bir yazıdır.</b>";
document.getElementById("paragraf").innerText="Paragrafa yeni cümleler eklenebilir.";
document.getElementById("adSoyad").value="Mustafa ÖZER";`,
    sonuc: { tip: "tarayici", adres: "secici.html", icerik: `<h1 id="baslik">Başlık</h1><div id="icerik">içerik</div><p id="paragraf">paragraf</p><input id="adSoyad">
<script>document.getElementById("baslik").style.fontSize="52px";document.getElementById("icerik").innerHTML="<b>Bu yazı kalın bir yazıdır.</b>";document.getElementById("paragraf").innerText="Paragrafa yeni cümleler eklenebilir.";document.getElementById("adSoyad").value="Mustafa ÖZER";<\/script>` } },

  { tur: "uygulama", baslik: "Sınıf seçici: JScript",
    gorsel: { tip: "resim", yol: G + "32-harfler.png" },
    adimlar: [
      "body turuncu. Üç span, hepsine class=\"harfler\": J, S, cript.",
      "Sınıf seçiciyle ilk iki span'ı (0 ve 1) seç.",
      "İkisinin yazısı 22px ve beyaz olsun. Üçüncüye dokunma."
    ],
    kitap: "s. 168–169 · Görsel 5.5" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "“alarm.js” adında bir JavaScript dosyası oluştur, sayfana bağla. Ekrana “Haricî Javascript kodu çalışıyor.” mesajı çıksın.",
    kitap: "s. 167" },

  { tur: "test", sorular: [
    { soru: "📖 Seçiciler: etiket (tag), isim (name), kimlik (id) ve ……", secenekler: ["sınıf (class)", "stil (style)", "değer (value)", "olay (event)"], dogru: 0 },
    { soru: "📖 Seçili elemana yeni içerik veya HTML kodu eklemek için hangisi kullanılır?", secenekler: ["innerText", "innerHTML", "value", "style"], dogru: 1 },
    { soru: "CSS'teki <code>border-radius</code> JavaScript'te nasıl yazılır?", secenekler: ["border-radius", "borderradius", "borderRadius", "BorderRadius"], dogru: 2 },
    { soru: "Sayfada class=\"kutu\" olan 3 div var. Sadece ilkini seçen kod?", secenekler: ["getElementsByClassName(\"kutu\")[1]", "getElementsByClassName(\"kutu\")[0]", "getElementById(\"kutu\")", "getElementsByTagName(\"kutu\")[0]"], dogru: 1 },
    { soru: "Bir input kutusuna yazılanı okumak için?", secenekler: ["innerHTML", "innerText", "value", "style"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Geliştirici konsolu",
    adimlar: [
      "Herhangi bir sayfada <b>F12</b> → Console sekmesi.",
      "Yaz: <code>document.body.style.backgroundColor=\"pink\"</code> → Enter.",
      "Kodunda <code>console.log(\"deneme\")</code> yazarsan çıktı burada görünür. Hata ararken çok işe yarar."
    ]}

]};
