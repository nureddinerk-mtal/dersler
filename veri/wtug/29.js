// WTUG · 29 · Bootstrap: kurulum, konteyner, renk, grid  (Kitap s. 146–151)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Bootstrap: hazır sınıflarla hızlı ve duyarlı tasarım. Kitap 4.6 kullanıyor, biz de. Grid'in 12 sütun mantığı ve col-md- gibi kırılımlar ana hedef.", akis: ["CDN bağlantısı (her sayfada aynı şablon)", "Konteyner ve renk sınıfları", "Beş ekranda altı kutu"], hatalar: ["CSS link'ini ya da JS dosyalarını unutmak", "Sütunları row olmadan yazmak", "İnternet yokken CDN'in yüklenmemesi"], sorular: [["Bootstrap 5 kullansak?", "Olur ama kitap 4.6; bazı sınıf adları değişti (data-toggle → data-bs-toggle)."], ["Toplam 12'yi geçerse?", "Fazla sütun alt satıra iner."]] },


  { tur: "bilgi", baslik: "Bootstrap nedir?",
    metin: "Hazır CSS sınıfları ve JavaScript efektleri olan, en çok tercih edilen CSS çatısı.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🧩 Hazır sınıflar", alt: "class=\"btn btn-primary\" yaz, buton hazır" },
      { ust: "📱 Duyarlı", alt: "Her ekran boyutuna uygun" },
      { ust: "🌐 Uyumlu", alt: "Neredeyse tüm tarayıcılar" },
      { ust: "🆓 Açık kaynak", alt: "Ücretsiz, sürekli gelişiyor" }
    ]},
    not: "Kitapta Bootstrap 4 (v4.6) kullanılıyor. Biz de onu kullanacağız." },

  { tur: "bilgi", baslik: "Sayfaya bağlama",
    kod: `<head>
  <link rel="stylesheet"
   href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
  <!-- sayfa içeriği -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
</body>`,
    not: "CSS head'e, JavaScript dosyaları &lt;/body&gt;'den hemen önceye. Bu şablonu her sayfada kullan." },

  { tur: "uygulama", baslik: "Başardınız!",
    gorsel: { tip: "resim", yol: G + "29-basardiniz.png" },
    adimlar: [
      "getbootstrap.com → Download → sürüm v4.6.",
      "CSS link'ini head'e, Bundle script'lerini &lt;/body&gt; öncesine yapıştır.",
      "body'ye alert-success sınıflı div yaz, sayfayı aç."
    ],
    kitap: "s. 146–147 · 25. Uygulama" },

  { tur: "bilgi", baslik: "Konteyner çeşitleri",
    gorsel: { tip: "ikili",
      sol: { baslik: ".container · kenarlarda boşluk", gorsel: { tip: "html", icerik: `<div style="border:2px solid #8a8a8a;border-radius:6px;padding:8px 26px;background:#fff"><div style="background:#2f80ed;color:#fff;padding:14px;text-align:center;border-radius:4px">içerik</div></div>` } },
      sag: { baslik: ".container-fluid · tam genişlik", gorsel: { tip: "html", icerik: `<div style="border:2px solid #8a8a8a;border-radius:6px;padding:8px 0;background:#fff"><div style="background:#27ae60;color:#fff;padding:14px;text-align:center">içerik</div></div>` } }
    },
    not: "Ekran boyutları: &lt;576 en küçük · ≥576 küçük · ≥768 orta · ≥992 geniş · ≥1200 en geniş." },

  { tur: "bilgi", baslik: "Renk sınıfları",
    gorsel: { tip: "html", icerik: `<div style="display:flex;flex-wrap:wrap;gap:6px;font-family:Consolas,monospace;font-size:.85rem;color:#fff">
      ${[["primary","#007bff"],["secondary","#6c757d"],["success","#28a745"],["danger","#dc3545"],["warning","#ffc107"],["info","#17a2b8"],["light","#f8f9fa"],["dark","#343a40"]]
        .map(r=>`<span style="background:${r[1]};padding:8px 10px;border-radius:6px;${r[0]==="light"||r[0]==="warning"?"color:#222;":""}">${r[0]}</span>`).join("")}</div>` },
    not: "Yazı rengi: text-danger · arka plan: bg-danger" },

  { tur: "bilgi", baslik: "Grid: ekran 12 sütun",
    gorsel: { tip: "html", icerik: `<div style="display:grid;grid-template-columns:repeat(12,1fr);gap:3px;font-family:Consolas,monospace;font-size:.75rem;text-align:center;color:#fff">
      ${Array.from({length:12},(_,i)=>`<div style="background:#9b51e0;padding:6px 0">${i+1}</div>`).join("")}
      <div style="grid-column:span 6;background:#2f80ed;padding:6px">col-6</div><div style="grid-column:span 6;background:#27ae60;padding:6px">col-6</div>
      <div style="grid-column:span 4;background:#f2994a;padding:6px">col-4</div><div style="grid-column:span 8;background:#eb5757;padding:6px">col-8</div>
      <div style="grid-column:span 3;background:#2d9cdb;padding:6px">col-3</div><div style="grid-column:span 3;background:#2d9cdb;padding:6px">col-3</div><div style="grid-column:span 3;background:#2d9cdb;padding:6px">col-3</div><div style="grid-column:span 3;background:#2d9cdb;padding:6px">col-3</div></div>` },
    not: "Sütunlar &lt;div class=\"row\"&gt; içine yazılır. Bir satırda toplam 12'yi geçerse alt satıra iner." },

  { tur: "bilgi", baslik: "Ekran boyutuna göre sütun",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>col-</code> <span>en küçük (&lt;576)</span></div><div><code>col-sm-</code> <span>küçük (≥576)</span></div>
      <div><code>col-md-</code> <span>orta (≥768)</span></div><div><code>col-lg-</code> <span>geniş (≥992)</span></div>
      <div><code>col-xl-</code> <span>en geniş (≥1200)</span></div></div>` },
    kod: `<div class="col-sm-6 col-md-3 bg-info"> Kutu 1 </div>`,
    not: "Bu kutu küçük ekranda 6/12 (yarım), orta ve üstünde 3/12 (çeyrek) genişlikte." },

  { tur: "uygulama", baslik: "Beş ekranda altı kutu",
    metin: "Aynı kod, beş farklı genişlikte:",
    gorsel: [
      { tip: "resim", yol: G + "29-grid-xs.png", yazi: "1 · en küçük: col-12" },
      { tip: "resim", yol: G + "29-grid-sm.png", yazi: "2 · küçük: col-sm-8 / col-sm-4" },
      { tip: "resim", yol: G + "29-grid-md.png", yazi: "3 · orta: col-md-6" },
      { tip: "resim", yol: G + "29-grid-lg.png", yazi: "4 · geniş: col-lg-4" },
      { tip: "resim", yol: G + "29-grid-xl.png", yazi: "5 · en geniş: col-xl-2" }
    ],
    adimlar: [
      "Bootstrap bağlantılarını yap, div.container içine div.row aç.",
      "Altı kutu: col-12 col-sm-8/4 col-md-6 col-lg-4 col-xl-2, farklı bg- renkleri.",
      "Tarayıcıyı daraltıp genişlet, beş görünümü yakala.",
      "Hangi görünüm hangi genişlikte? Maddeler hâlinde yaz."
    ],
    kitap: "s. 150 · 26. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Kitaptaki dört resimli (kare, üçgen, daire, dikdörtgen) grid kodunu yaz. Her ekran boyutunda resimler nasıl dizilir? Yaz. (Örn: en küçükte alt alta dört resim.)",
    malzeme: ["kare.png", "ucgen.png", "daire.png", "dikdortgen.png"],
    kitap: "s. 151" },

  { tur: "test", sorular: [
    { soru: "Bootstrap grid sistemi ekranı kaç sütuna böler?", secenekler: ["6", "10", "12", "16"], dogru: 2 },
    { soru: "Ekranın tamamını kaplayan konteyner?", secenekler: [".container", ".container-fluid", ".row", ".col"], dogru: 1 },
    { soru: "Orta boy ekranlar (≥768px) için sütun sınıfı?", secenekler: ["col-sm-", "col-md-", "col-lg-", "col-xl-"], dogru: 1 },
    { soru: "Yeşil arka plan için sınıf?", secenekler: ["bg-success", "text-success", "bg-green", "btn-success"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Bootstrap'in 5. sürümü",
    metin: "Kitap yazıldığında beta olan Bootstrap 5 artık yayında. Farklardan biri: jQuery gerekmiyor.",
    kod: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">`,
    not: "Bazı sınıf adları değişti: badge-success → bg-success, data-toggle → data-bs-toggle." }

]};
