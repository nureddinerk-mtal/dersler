// WTUG · 21 · Kullanılabilirlik ve uyumluluk  (Kitap s. 34–40)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "4. İşlevsellik ve kullanılabilirlik",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "⚡ Hızlı açılır", alt: "Sayfalar beklemeden yüklenir" },
      { ust: "👓 Rahat okunur", alt: "Doğru yazı tipi ve boyut" },
      { ust: "🖼️ Kaliteli görsel", alt: "Yeterli çözünürlük, özgün" },
      { ust: "🔍 Site içi arama", alt: "İçerik çoksa şart" },
      { ust: "🗺️ Site haritası", alt: "Tüm bağlantılar tek listede" },
      { ust: "✉️ İletişim", alt: "Kolay bulunur yerde" },
      { ust: "📱 Mobil uyumlu", alt: "Her ekran, her tarayıcı" }
    ]},
    not: "Evrensel tasarım: engelli, yaşlı, çocuk ve yabancı ziyaretçiyi de düşün." },

  { tur: "bilgi", baslik: "Site haritası",
    metin: "Çok tıklama işlevselliği bozar. Site haritası tüm sayfaları tek yerde gösterir.",
    gorsel: { tip: "agac", kok: { ad: "🏠 Anasayfa", yan: true, cocuklar: [
      { ad: "Hakkımızda", cocuklar: [{ ad: "Tarihçe" }, { ad: "Kadromuz" }] },
      { ad: "Bölümler", cocuklar: [{ ad: "Bilişim" }, { ad: "Elektrik" }] },
      { ad: "Duyurular" }, { ad: "İletişim" }
    ]}}},

  { tur: "bilgi", baslik: "5. Güncellik",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🗞️ Taze bilgi", alt: "Eski haber ve duyurular arşive" },
      { ust: "🆕 Yeni teknoloji", alt: "HTML5, CSS3: telefon ve tablette sorunsuz" },
      { ust: "🔥 Isı haritası", alt: "Ziyaretçi nereye tıklıyor? Analiz et, geliştir." }
    ]},
    not: "Güncel siteler arama sonuçlarında üstte çıkar." },

  { tur: "bilgi", baslik: "6. Uygunluk ve güvenilirlik",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🔤 Alan adı", alt: "İçeriği yansıtsın, kısa, kolay hatırlansın" },
      { ust: "✨ Özgün içerik", alt: "Başkasından kopya değil" },
      { ust: "✍️ Yazım kuralları", alt: "Yazım yanlışı güven sarsar" },
      { ust: "🚫 Kırık sayfa yok", alt: "Çalışmayan bağlantı, sürekli açılan reklam olmasın" }
    ]}},

  { tur: "bilgi", baslik: "7. Uyumluluk",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🌐", yazi: "Tarayıcı uyumu", alt: "çapraz tarayıcı testi" },
      { simge: "📱", yazi: "Duyarlı tasarım", alt: "responsive" },
      { simge: "💻", yazi: "İşletim sistemi", alt: "farklı telefonlarda dene" },
      { simge: "🖨️", yazi: "Yazdırma", alt: "çıktı düzgün mü?" }
    ]},
    not: "Duyarlı tasarımın yapı taşı CSS medya sorgusudur (media query)." },

  { tur: "bilgi", baslik: "Duyarlı (responsive) tasarım",
    gorsel: { tip: "html", icerik: `<div style="display:flex;align-items:flex-end;justify-content:center;gap:18px">
      <div style="width:220px;height:140px;border:6px solid #2b2b2b;border-radius:8px;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:6px"><span style="background:#2f80ed"></span><span style="background:#27ae60"></span><span style="background:#f2994a"></span></div>
      <div style="width:110px;height:150px;border:6px solid #2b2b2b;border-radius:10px;display:grid;grid-template-columns:repeat(2,1fr);gap:4px;padding:6px"><span style="background:#2f80ed"></span><span style="background:#27ae60"></span><span style="background:#f2994a;grid-column:1/3"></span></div>
      <div style="width:64px;height:120px;border:6px solid #2b2b2b;border-radius:12px;display:grid;gap:4px;padding:5px"><span style="background:#2f80ed"></span><span style="background:#27ae60"></span><span style="background:#f2994a"></span></div></div>` },
    not: "Aynı içerik ekrana göre yeniden dizilir: kaydırma, yakınlaştırma derdi biter." },

  { tur: "uygulama", baslik: "Okul sitenin site haritası",
    metin: "Bir önceki konuda taslağını yaptığın okul sitesinin site haritasını çiz.",
    gorsel: { tip: "agac", kok: { ad: "Anasayfa", yan: true, cocuklar: [{ ad: "…", cocuklar: [{ ad: "…" }] }, { ad: "…" }, { ad: "…" }] } },
    adimlar: [
      "Menüdeki her bağlantı bir kutu olsun.",
      "Alt sayfaları altına bağla.",
      "Bir sayfaya en fazla kaç tıklamada ulaşılıyor? Not et."
    ],
    kitap: "Ek uygulama (EK) · kitap s. 35 Görsel 2.16" },

  { tur: "odev", baslik: "Araştırma",
    metin: "1️⃣ Evrensel tasarım ilkelerini araştır, web sitesinde nasıl kullanılır?<br>2️⃣ Grupça yaygın CSS framework'lerini araştırıp artı-eksi sunumu hazırla.<br>3️⃣ Çapraz tarayıcı testi ve mobil test araçlarını araştır.",
    kitap: "s. 35–38" },

  { tur: "test", baslik: "Birim 2 · Kitabın soruları", sorular: [
    { soru: "📖 Web siteleri için alan adı belirlenirken sitenin içeriğine uygun olması önemlidir.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 Responsive tasarımlar sayesinde web siteleri görüntülendikleri tüm cihazlarda sorunsuz çalışır.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 Web sitelerinin ilk sayfalarına verilen ad?", secenekler: ["Tarayıcı uyumluluk testi", "Anasayfa", "Media Query", "Güncellik"], dogru: 1 },
    { soru: "📖 Yeni teknolojilerin kullanılması gerekliliğinin belirtildiği ilke?", secenekler: ["İşlevsellik", "Güncellik", "CSS3", "SEO testi"], dogru: 1 },
    { soru: "📖 Sitenin farklı tarayıcılarda doğru çalışıp çalışmadığının kontrol edildiği test?", secenekler: ["SEO testi", "Tarayıcı uyumluluk testi", "Media Query", "Anasayfa"], dogru: 1 },
    { soru: "📖 Duyarlı tasarım için kullanılan CSS özelliği?", secenekler: ["Güncellik", "Media Query", "Anasayfa", "İşlevsellik ve Kullanılabilirlik"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Telefonda nasıl görünüyor?",
    adimlar: [
      "Herhangi bir sitede <b>F12</b>'ye bas.",
      "Üstteki telefon-tablet simgesine tıkla (<b>Ctrl + Shift + M</b>).",
      "Cihazı değiştir: site yeniden diziliyor mu?"
    ]}

]};
