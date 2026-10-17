// WTUG · 12 · Resimler  (Kitap s. 77–79)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "img boş etikettir, src yolu en kritik kısım. Göreli yol (resimler/kedi.jpg) mantığı oturmalı; ileride CSS ve JS dosyalarında da aynısı.", akis: ["Klasör düzeni (önce klasör, sonra kod)", "img özellikleri (alt, width, height)", "Alt klasörden resim"], hatalar: ["Resim görünmüyor: yol ya da uzantı yanlış (.JPG ≠ .jpg GitHub'da)", "Masaüstü yolu yazmak: C:\\Users\\… (başka bilgisayarda çalışmaz)", "alt özelliğini boş bırakmak"], sorular: [["Resim bende çıkıyor, arkadaşımda çıkmıyor?", "Mutlak yol kullanmışsın ya da resmi klasöre koymamışsın."], ["alt ne işe yarar?", "Resim açılmazsa yazı görünür; ekran okuyucular bunu okur."]] },


  { tur: "bilgi", baslik: "Önce klasör düzeni",
    metin: "Resim, video, ses ayrı klasörlerde durursa site düzenli olur.",
    gorsel: { tip: "agac", kok: { ad: "📁 sitem", cocuklar: [
      { ad: "index.html" },
      { ad: "📁 resimler", yan: true, cocuklar: [{ ad: "logo.png" }, { ad: "manzara.jpg" }] },
      { ad: "📁 videolar" }, { ad: "📁 sesler" }
    ]}}},

  { tur: "bilgi", baslik: "&lt;img&gt; boş etikettir",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "&lt;img", etiket: "image (görsel)" },
      { yazi: "src=\"proje.jpg\"", etiket: "resmin yolu" },
      { yazi: "/&gt;", etiket: "kapanışı yok" }
    ]},
    not: "Format: jpg, png, gif. &lt;img&gt;&lt;/img&gt; yazmak yanlış." },

  { tur: "bilgi", baslik: "Resmin yolu (src)",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>resim.jpg</code> <span>aynı klasörde</span></div>
      <div><code>galeri/resim.jpg</code> <span>bir alt klasörde</span></div>
      <div><code>galeri/arkadas/resim.jpg</code> <span>iki alt klasörde</span></div>
      <div><code>../resim.jpg</code> <span>bir üst klasörde</span></div>
      <div><code>../../resim.jpg</code> <span>iki üst klasörde</span></div></div>` },
    not: "../ = bir üst klasöre çık." },

  { tur: "bilgi", baslik: "img özellikleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "src", alt: "Resmin adresi" },
      { ust: "width · height", alt: "Genişlik · yükseklik (piksel)" },
      { ust: "title", alt: "Üzerine gelince ipucu" },
      { ust: "alt", alt: "Resim açılmazsa görünen yazı" },
      { ust: "srcset · sizes", alt: "Ekrana göre farklı boyutta resim" },
      { ust: "usemap · ismap", alt: "Tıklanabilir bölgeli resim" }
    ]},
    not: "Özellikler arasında en az bir boşluk bırak." },

  { tur: "uygulama", baslik: "Çerçeveli resim",
    gorsel: { tip: "resim", yol: G + "12-ogrenci.png", yazi: "Üzerine gelince “Öğrenci” yazmalı." },
    adimlar: [
      "Resmi html dosyasıyla aynı klasöre koy.",
      "img ile ekle: genişlik 400, yükseklik 200.",
      "border=\"6\" ve title=\"Öğrenci\" ver."
    ],
    malzeme: ["manzara.jpg"],
    kitap: "s. 79 · Görsel 3.33" },

  { tur: "uygulama", baslik: "Alt klasörden resim",
    metin: "Aynı resmi bu kez bir alt klasörden çağır.",
    adimlar: [
      "Yanına <b>resimgaleri</b>, onun içine <b>arkadas</b> klasörü aç.",
      "Resmi <b>01.jpg</b> adıyla arkadas klasörüne koy.",
      "src'yi <b>resimgaleri/arkadas/01.jpg</b> yap. Resim görünüyor mu?"
    ],
    malzeme: ["kumsal.jpg"],
    kitap: "s. 78 · Görsel 3.32" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Farklı klasörlerdeki görsellerle, img özelliklerini kullanarak bir belge oluştur.<br>2️⃣ srcset ve sizes özellikleriyle görsel ekle.",
    kitap: "s. 78–79" },

  { tur: "test", sorular: [
    { soru: "Resim bir üst klasördeyse src nasıl yazılır?", secenekler: ["resim.jpg", "/resim.jpg", "../resim.jpg", "ust/resim.jpg"], dogru: 2 },
    { soru: "img etiketi için doğru olan?", secenekler: ["Kapanış etiketi vardır", "Boş etikettir, kapanışı yok", "Sadece png gösterir", "body dışında yazılır"], dogru: 1 },
    { soru: "Resim yüklenemezse görünen yazıyı hangi özellik belirler?", secenekler: ["src", "alt", "width", "border"], dogru: 1 },
    { soru: "Fare resmin üzerine gelince ipucu gösteren özellik?", secenekler: ["title", "src", "height", "sizes"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "İnternetten resim",
    metin: "src'ye internet adresi de yazılabilir.",
    kod: `<img src="https://www.meb.gov.tr/meb_logo.png" alt="MEB logosu" width="120">`,
    not: "O site resmi silerse senin sayfanda da kaybolur. Bu yüzden resimleri kendi klasöründe tut." }

]};
