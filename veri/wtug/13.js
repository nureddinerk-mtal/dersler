// WTUG · 13 · Video ve ses  (Kitap s. 79–85)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "HTML5 ile video ve ses",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🎬 &lt;video&gt;", alt: "Sayfaya video oynatıcı ekler" },
      { ust: "🎵 &lt;audio&gt;", alt: "Sayfaya ses oynatıcı ekler" },
      { ust: "📄 &lt;source&gt;", alt: "Dosyanın yolu ve türü (type)" }
    ]},
    not: "Eskiden eklenti gerekirdi. HTML5'te resim eklemek kadar kolay." },

  { tur: "ornek", baslik: "Birden çok kaynak",
    kod: `<video width="600" height="500" controls>
  <source src="film.mp4" type="video/mp4">
  <source src="film.ogg" type="video/ogg">
  <source src="film.webm" type="video/webm">
  Tarayıcınız video ögesini desteklemiyor.
</video>`,
    not: "Tarayıcı oynatabildiği ilk dosyayı seçer. type yazmak siteyi hızlandırır." },

  { tur: "bilgi", baslik: "Video ve ses özellikleri",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>controls</code> <span>oynat, durdur, ses, tam ekran</span></div>
      <div><code>src</code> <span>dosyanın yolu</span></div>
      <div><code>width · height</code> <span>boyut (sadece video)</span></div>
      <div><code>autoplay</code> <span>kendiliğinden başlar</span></div>
      <div><code>loop</code> <span>bitince başa döner</span></div>
      <div><code>muted</code> <span>sessiz başlar</span></div>
      <div><code>poster</code> <span>kapak resmi (sadece video)</span></div>
      <div><code>preload</code> <span>none · auto · metadata ön yükleme</span></div></div>` },
    not: "Mobilde autoplay çalışmaz. Kendiliğinden çalan ses ziyaretçiyi rahatsız eder." },

  { tur: "ornek", baslik: "Kapak resimli video",
    kod: `<video controls poster="arkaplan.jpg">
  <source src="video.mp4" type="video/mp4">
</video>`,
    sonuc: { tip: "tarayici", adres: "video.html", icerik: `<video controls width="280" poster="gorsel/malzeme/arkaplan.jpg" preload="none"></video>` } },

  { tur: "uygulama", baslik: "Sayfaya iki video",
    gorsel: { tip: "resim", yol: G + "13-video.png", yazi: "Videolar oynatılınca kendi görüntüleri gelir." },
    adimlar: [
      "body içine video bloku yaz, <b>controls</b> ekle.",
      "Kaynak: <b>http://meb.ai/KR71t6</b>",
      "Altına ikinci video: <b>http://meb.ai/UeSk1O</b>",
      "Oynat. Görünmüyorsa kodu kontrol et."
    ],
    kitap: "s. 82 · 11. Uygulama" },

  { tur: "uygulama", baslik: "Sayfaya iki ses",
    gorsel: { tip: "resim", yol: G + "13-ses.png" },
    adimlar: [
      "body içine audio bloku yaz, <b>controls</b> ekle.",
      "Kaynak: <b>http://meb.ai/fN7MRY</b>",
      "Altına ikinci ses: <b>http://meb.ai/U4S81U</b>"
    ],
    kitap: "s. 85 · 12. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "İçinde video olan sitelerin kaynak kodlarını incele. Video ekleme yöntemlerini ve kullanılan özellikleri arkadaşlarınla paylaş.",
    kitap: "s. 80, 85" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi HTML5'te kullanılan medya etiketi değildir?", kod: true, secenekler: ["<audio>", "<music>", "<source>", "<track>", "<video>"], dogru: 1 },
    { soru: "Oynat/durdur düğmelerini gösteren özellik?", secenekler: ["autoplay", "controls", "loop", "poster"], dogru: 1 },
    { soru: "Video bitince yeniden başlaması için?", secenekler: ["muted", "preload", "loop", "src"], dogru: 2 },
    { soru: "Video oynamadan önce görünen kapak resmi?", secenekler: ["poster", "title", "alt", "cover"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Sessiz arka plan videosu",
    metin: "Birçok sitenin girişindeki hareketli arka plan:",
    kod: `<video autoplay muted loop width="400">
  <source src="video.mp4" type="video/mp4">
</video>`,
    not: "Tarayıcılar sesli autoplay'i engeller; muted olunca izin verir." }

]};
