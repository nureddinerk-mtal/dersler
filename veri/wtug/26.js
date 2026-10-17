// WTUG · 26 · Görünüm ve konum  (Kitap s. 127–137)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "display, float/clear, z-index, position (relative, absolute, fixed). Göreceli içinde mutlak konum fikri kart tasarımlarının temeli.", akis: ["display ve float", "position türleri", "Kaydırma oku ve kart tasarımı"], hatalar: ["absolute elemanın bütün sayfaya göre konumlanması (ebeveyne position:relative verilmemiş)", "float sonrası clear unutulup alttaki içeriğin kayması", "z-index'in position'sız çalışmaması"], sorular: [["fixed ile absolute farkı?", "fixed sayfa kaysa da ekranda yerinde kalır."], ["float hâlâ kullanılıyor mu?", "Yerleşim için yerini flex/grid'e bıraktı; resim çevresinde yazı için hâlâ işe yarar."]] },


  { tur: "bilgi", baslik: "display: yerleşim seviyesi",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>none</code> <span>görünmez, yer de kaplamaz</span></div>
      <div><code>inline</code> <span>satır içi: yan yana, width/height çalışmaz</span></div>
      <div><code>block</code> <span>blok: alt alta, tam genişlik</span></div>
      <div><code>inline-block</code> <span>yan yana ama width/height çalışır</span></div></div>` },
    not: "Varsayılan: b, i, span, img satır içi · h1, p, div, li blok." },

  { tur: "uygulama", baslik: "display: inline",
    gorsel: { tip: "ikili",
      sol: { baslik: "Önce", gorsel: { tip: "resim", yol: G + "26-blok.png" } },
      sag: { baslik: "display: inline ekleyince", gorsel: { tip: "resim", yol: G + "26-inline.png" } }
    },
    adimlar: [
      "İki div (kutu1, kutu2). body mor.",
      "div: turuncu, 100 × 100. Kaydet, bak.",
      "display: inline ekle, tekrar bak. width/height neden çalışmadı?"
    ],
    kitap: "s. 128–129 · 14. Uygulama" },

  { tur: "bilgi", baslik: "float ve clear",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "float: left", alt: "Elemanı sola kaydırır, diğerleri etrafını sarar" },
      { ust: "float: right", alt: "Sağa kaydırır" },
      { ust: "clear: both", alt: "Kaydırmanın etkisini bitirir, normal akışa döner" }
    ]}},

  { tur: "uygulama", baslik: "float ile sayfa şablonu",
    gorsel: { tip: "resim", yol: G + "26-sablon.png" },
    adimlar: [
      "Beş div: banner, left, center, right, footer (id). Yazılar ortalı.",
      "banner: %100, 40px, tomato · footer: %100, 40px, darkgray, clear: both.",
      "left ve right: %25, lightseagreen · center: %50. Üçü de float: left.",
      "Sütunlar görünsün diye yüksekliklerini 200px yap."
    ],
    kitap: "s. 129–130 · 15. Uygulama" },

  { tur: "uygulama", baslik: "Mesaj kutuları",
    gorsel: { tip: "resim", yol: G + "26-mesaj.png" },
    adimlar: [
      "index.html, mesajlar1–4.html ve stil.css. resimler klasörüne dört kişi resmi.",
      "Kitaptaki stil.css kodlarını yaz.",
      "Dört mesajKutusu: resim (float left, yuvarlak), ad ve tarih.",
      "Her kutu kendi mesajlar sayfasına bağlansın."
    ],
    malzeme: ["kisi1.jpg", "kisi2.jpg", "kisi3.jpg", "kisi4.jpg"],
    kitap: "s. 130–131 · 16. Uygulama" },

  { tur: "bilgi", baslik: "z-index: kim üstte?",
    gorsel: { tip: "html", icerik: `<div style="position:relative;height:120px;max-width:300px;margin:0 auto;font-family:Consolas,monospace;color:#fff">
      <div style="position:absolute;left:0;top:30px;width:140px;height:80px;background:#2f80ed;padding:6px">z-index:1</div>
      <div style="position:absolute;left:70px;top:15px;width:140px;height:80px;background:#27ae60;padding:6px">z-index:2</div>
      <div style="position:absolute;left:140px;top:0;width:140px;height:80px;background:#eb5757;padding:6px">z-index:3</div></div>` },
    not: "Değeri büyük olan üstte. Varsayılan 0, eksi değer altta kalır." },

  { tur: "bilgi", baslik: "position: konum",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "static", alt: "Normal akış (varsayılan). top/left çalışmaz." },
      { ust: "relative", alt: "Kendi normal yerine göre kayar." },
      { ust: "absolute", alt: "Akıştan çıkar. relative olan atasına göre yerleşir." },
      { ust: "fixed", alt: "Ekrana çakılı: sayfa kaysa da yerinde durur." }
    ]},
    not: "Koordinat: top, right, bottom, left. Kutunun sol üst köşesi yerleşir." },

  { tur: "uygulama", baslik: "Göreceli konum",
    gorsel: { tip: "resim", yol: G + "26-goreceli.png" },
    adimlar: [
      "Dört kutu (div), class=\"kutuSablonu\": inline-block, 50 × 50, lightskyblue, 2px solid siyah.",
      "Kutu 3'e ayrıca class=\"goreceliKutu\": relative, left 30px, top 30px."
    ],
    kitap: "s. 133 · 17. Uygulama" },

  { tur: "uygulama", baslik: "Göreceli içinde mutlak",
    gorsel: { tip: "resim", yol: G + "26-mutlak.png" },
    adimlar: [
      "kutu1: 100 × 150 · kutu2: 200 × 150, position: relative.",
      "kutu3'ü kutu2'nin İÇİNE yaz: 120 × 70, absolute, left 50, top 50.",
      "Kutu 3 kime göre yerleşti? Not et."
    ],
    kitap: "s. 134–135 · 18. Uygulama" },

  { tur: "uygulama", baslik: "Sabit (fixed) kaydırma oku",
    gorsel: { tip: "resim", yol: G + "26-sabit.png", yazi: "Sayfayı kaydır: ok sağ altta sabit kalmalı." },
    adimlar: [
      "15. Uygulamanın kodlarını aç.",
      "img ile aşağı ok resmi ekle: id=\"kaydirmaCubugu\".",
      "position: fixed; bottom: 60px; right: 20px; width: 30px."
    ],
    malzeme: ["asagiOk.png"],
    kitap: "s. 135 · 19. Uygulama" },

  { tur: "uygulama", baslik: "Özel kart tasarımı",
    gorsel: { tip: "resim", yol: G + "26-kart.png" },
    adimlar: [
      "index.html + Stil.css. Arka plan için bir, profiller için üç resim.",
      "Her kart: div.kart > div.profilSablon > img.profilResim + p + hr.",
      "Kitaptaki Stil.css kodlarını yaz: kart inline-block, gölgeli.",
      "Profil resmi absolute ile arka plan resminin altına taşar."
    ],
    malzeme: ["yildizlar.jpg", "personel1.jpg", "personel2.jpg", "personel3.jpg"],
    kitap: "s. 136–137 · 20. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ 17. Uygulamadaki goreceliKutu'yu absolute yaparak Kutu 3'ü Görsel 4.24'teki gibi konumlandır.<br>2️⃣ Sabit pozisyonlu kırmızı, siyah, mavi sosyal medya düğmeleri yap, bağlantı ver.",
    kitap: "s. 134, 136" },

  { tur: "test", sorular: [
    { soru: "📖 Elemanın hem satır içi hem blok gibi davranması için display: ……", secenekler: ["inline", "block", "inline-block", "none"], dogru: 2 },
    { soru: "📖 Elemanın kendi normal yerine göre kayması için position: ……", secenekler: ["static", "relative", "absolute", "fixed"], dogru: 1 },
    { soru: "📖 Üst üste gelen elemanlardan hangisinin üstte görüneceğini ayarlayan kod?", secenekler: ["float", "clear", "z-index", "position"], dogru: 2 },
    { soru: "Sayfa kaydırılınca bile yerinden oynamayan konum?", secenekler: ["relative", "absolute", "fixed", "static"], dogru: 2 },
    { soru: "Elemanı gizleyip yerini de boşaltan kod?", secenekler: ["display: none", "opacity: 0", "z-index: -1", "float: none"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Esnek kutu: flex",
    metin: "Kitapta yok ama modern sitelerin hepsinde var:",
    kod: `.kapsayici { display: flex; gap: 10px; justify-content: center; }`,
    gorsel: { tip: "tarayici", adres: "flex.html", icerik: `<div style="display:flex;gap:10px;justify-content:center"><div style="width:60px;height:60px;background:tomato"></div><div style="width:60px;height:60px;background:teal"></div><div style="width:60px;height:60px;background:purple"></div></div>` },
    not: "float'a gerek kalmadan kutuları yan yana dizer ve ortalar." }

]};
