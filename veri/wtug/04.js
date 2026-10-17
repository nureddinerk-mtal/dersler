// WTUG · 04 · Belge yapısı  (Kitap s. 42–54)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "HTML sitenin kaba inşaatıdır",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🧱 HTML", alt: "Kaba inşaat: duvarlar, odalar (yapı)" },
      { ust: "🎨 CSS", alt: "Boya, dekor (görünüm)" },
      { ust: "⚡ JavaScript", alt: "Elektrik, kapı zili (hareket)" }
    ]},
    not: "Sadece HTML ile site olur ama kaba görünür." },

  { tur: "bilgi", baslik: "Etiket ve özellik",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "&lt;h3", etiket: "eleman" },
      { yazi: "title", etiket: "özellik" },
      { yazi: "=\"Açıklama\"", etiket: "değer (tırnakta)" },
      { yazi: "&gt;", etiket: "" }
    ]},
    not: "Özellik sadece açılış etiketine yazılır. Sırası önemsizdir." },

  { tur: "bilgi", baslik: "Her etikette olabilen 4 özellik",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "id", alt: "Benzersiz kimlik: id=\"parag1\"" },
      { ust: "title", alt: "Üzerine gelince ipucu" },
      { ust: "class", alt: "Grup adı (stil için)" },
      { ust: "style", alt: "Etikete özel stil" }
    ]},
    not: "HTML büyük-küçük harf ayırmaz ama HTML5'te küçük harf yazılır." },

  { tur: "bilgi", baslik: "HTML5 iskeleti",
    gorsel: { tip: "agac", kok: { ad: "ilk.html", renk: "#8a8a8a", cocuklar: [
      { ad: "&lt;!DOCTYPE html&gt;", alt: "belge tipi (etiket değil)" },
      { ad: "&lt;html lang=\"tr\"&gt;", alt: "sayfanın başı ve sonu", cocuklar: [
        { ad: "&lt;head&gt;", alt: "görünmeyen bilgiler", yan: true, cocuklar: [
          { ad: "meta" }, { ad: "title" }, { ad: "style" }, { ad: "link" }, { ad: "script" }]},
        { ad: "&lt;body&gt;", alt: "görünen her şey burada" }
      ]}
    ]}},
    not: "Bu sıra değişmez. html, head ve body sayfada birer kez kullanılır." },

  { tur: "ornek", baslik: "İskeleti girintili yaz",
    metin: "TAB ile girinti ver: kod kolay okunur, hata kolay bulunur.",
    kod: `<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <title>MERHABA HTML DÜNYASI</title>
  </head>
  <body>
    <!-- Merhaba HTML Dünyası -->
    <p>Merhaba HTML Dünyası</p>
  </body>
</html>`,
    sonuc: { tip: "tarayici", adres: "merhaba.html", icerik: "<p>Merhaba HTML Dünyası</p>" },
    not: "Yorum satırı &lt;!-- --&gt; tarayıcıda görünmez." },

  { tur: "bilgi", baslik: "head'in içinde neler var?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "&lt;meta&gt;", alt: "Karakter seti, açıklama, anahtar kelime, yazar. Kapanışı yok." },
      { ust: "&lt;title&gt;", alt: "Sekmede görünen başlık. Arama motorları için önemli." },
      { ust: "&lt;style&gt;", alt: "Sayfanın CSS kodları" },
      { ust: "&lt;link&gt;", alt: "Dış dosya bağlar: stil.css, ikon" },
      { ust: "&lt;script&gt;", alt: "JavaScript kodları" }
    ]},
    not: "head içinden sadece title ekranda (sekmede) görünür." },

  { tur: "bilgi", baslik: "viewport: her ekrana uy",
    kod: "",
    gorsel: [
      { tip: "html", icerik: `<div style="font-family:Consolas,monospace;background:#1f2430;color:#e6e6e6;padding:10px 14px;border-radius:10px">&lt;<span style="color:#6cb6ff">meta</span> <span style="color:#f2c94c">name</span>=<span style="color:#9be38f">"viewport"</span> <span style="color:#f2c94c">content</span>=<span style="color:#9be38f">"width=device-width, initial-scale=1.0"</span>&gt;</div>` },
      { tip: "ikili",
        sol: { baslik: "❌ viewport yok", gorsel: { tip: "html", icerik: `<div class="telefon"><div style="font-size:6px;line-height:1.3">Çok küçük yazı… yakınlaştırmadan okunmuyor. Çok küçük yazı… yakınlaştırmadan okunmuyor.</div></div>` } },
        sag: { baslik: "✅ viewport var", gorsel: { tip: "html", icerik: `<div class="telefon"><div style="font-size:14px;line-height:1.4">Yazı ekrana göre ayarlandı. Rahat okunuyor.</div></div>` } } }
    ],
    not: "Kitapta 3. Uygulama: bu satırı head içine yaz, telefonda dene." },

  { tur: "bilgi", baslik: "Dosya adı kuralları",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🔡 küçük harf", alt: "✅ hakkimda.html" },
      { ust: "🚫 Türkçe karakter", alt: "❌ iletişim.html → ✅ iletisim.html" },
      { ust: "🚫 boşluk", alt: "❌ ilk sayfa.html → ✅ ilk-sayfa.html" },
      { ust: "🏷️ içeriğe uygun", alt: "❌ dosya01.html → ✅ galeri.html" }
    ]},
    not: "Uzantı .html ya da .htm olur." },

  { tur: "uygulama", baslik: "İlk HTML5 sayfam",
    gorsel: { tip: "resim", yol: G + "04-ilk.png", yazi: "Sekmedeki başlığa da dikkat et." },
    adimlar: [
      "DOCTYPE'ı ve <b>html lang=\"tr\"</b> etiketini yaz.",
      "head (meta + title) ve body'yi oluştur.",
      "TAB ile girintile, <b>ilk.html</b> olarak kaydet.",
      "Tarayıcıda aç; sekme ve sayfa hedefe benzesin."
    ],
    kitap: "s. 47 · 1. Uygulama" },

  { tur: "uygulama", baslik: "Üç sayfa, üç başlık",
    metin: "Aynı iskeletle üç dosya yap. Sadece title değişsin.",
    gorsel: [
      { tip: "resim", yol: G + "04-anasayfa.png" },
      { tip: "resim", yol: G + "04-hakkimda.png" },
      { tip: "resim", yol: G + "04-iletisim.png" }
    ],
    adimlar: [
      "anasayfa.html: title ANASAYFA.",
      "Farklı kaydet → hakkimda.html, title'ı değiştir.",
      "Farklı kaydet → iletisim.html, title'ı değiştir.",
      "Üçünü de aç, sekmeleri karşılaştır."
    ],
    kitap: "s. 51 · 4. Uygulama" },

  { tur: "uygulama", baslik: "Bir sitenin kaynak koduna bak",
    adimlar: [
      "<b>mtegm.meb.gov.tr</b> adresini aç.",
      "Boş yere sağ tıkla → <b>Sayfa Kaynağını Görüntüle</b>.",
      "&lt;head&gt; ve &lt;/head&gt; etiketlerini bul (Ctrl + F).",
      "İçinde hangi meta etiketleri var? Defterine yaz."
    ],
    kitap: "s. 49 · 2. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Metin editörüyle HTML5 iskeletini yaz, <b>htmletiketi.html</b> olarak kaydet. Tarayıcıda ne görünüyor?<br>2️⃣ Belgeye meta bilgilerini ekle. Sayfada değişiklik var mı?<br>3️⃣ Kitaptaki script örneğiyle bir belge yap. Başka sitelerde &lt;script&gt; ara.",
    kitap: "s. 47, 49, 53" },

  { tur: "test", sorular: [
    { soru: "📖 HTML belgesi dosya uzantısı “.html”dir.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 &lt;meta&gt; etiketinin &lt;/meta&gt; kapama etiketi vardır.", secenekler: ["Doğru", "Yanlış"], dogru: 1 },
    { soru: "📖 Arama motorlarına bilgi vermek için &lt;head&gt; içindeki bilgiler kullanılır.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 HTML büyük ve küçük harfe duyarlıdır.", secenekler: ["Doğru", "Yanlış"], dogru: 1 },
    { soru: "📖 HTML kısaltmasının açılımı hangisidir?",
      secenekler: ["Hacker Tool Media Language", "Hello Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlink Text Media Language"], dogru: 3 },
    { soru: "📖 &lt;head&gt; içindeki hangi etiketin içeriği tarayıcıda görünür?", kod: true,
      secenekler: ["<base>", "<link>", "<meta>", "<style>", "<title>"], dogru: 4 },
    { soru: "Sayfadaki resim ve yazılar hangi etiketin içine yazılır?", kod: true,
      secenekler: ["<head>", "<title>", "<body>", "<meta>"], dogru: 2 },
    { soru: "Hangisi doğru bir dosya adıdır?", kod: true,
      secenekler: ["İletişim Sayfası.html", "iletisim sayfasi.html", "iletisim-sayfasi.html", "İLETİŞİM.html"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Sekmeye kendi ikonunu koy",
    metin: "Kitaptaki link etiketiyle sayfana simge (favicon) ekle.",
    kod: `<link rel="icon" href="logo.png" sizes="32x32">`,
    malzeme: ["logo.png"],
    not: "Resmi html dosyasıyla aynı klasöre koy, head içine yaz." }

]};
