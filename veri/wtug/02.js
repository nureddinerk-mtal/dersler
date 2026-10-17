// WTUG · 02 · Web yazılımcısı rolleri  (Kitap s. 20–22)
window.KONU = {
  slaytlar: [

    { tur: "bilgi", baslik: "Bir web sitesinin iki yüzü",
      gorsel: { tip: "kartlar", kartlar: [
        { ust: "🎨 Ön uç · Frontend", alt: "Görünen yüz: menü, buton, renk, yazı" },
        { ust: "⚙️ Arka uç · Backend", alt: "Görünmeyen mutfak: sunucu, veri tabanı" }
      ]},
      not: "Restoran gibi düşün: salon ön uç, mutfak arka uç." },

    { tur: "bilgi", baslik: "Ön uç yazılımcı",
      metin: "Ziyaretçinin gördüğü ve tıkladığı her şeyi yapar.",
      gorsel: { tip: "kartlar", kartlar: [
        { ust: "HTML",       alt: "İskelet", renk: "#eb5757" },
        { ust: "CSS",        alt: "Görünüm", renk: "#2f80ed" },
        { ust: "JavaScript", alt: "Etkileşim", renk: "#f2c94c" }
      ]}},

    { tur: "bilgi", baslik: "Arka uç yazılımcı",
      metin: "Sitenin arka planda doğru çalışmasını sağlar.",
      gorsel: { tip: "akis", adimlar: [
        { simge: "🛒", yazi: "Sipariş verilir", alt: "ön uç" },
        { simge: "📨", yazi: "Bilgi gider",    alt: "sunucuya" },
        { simge: "⚙️", yazi: "İşlenir",        alt: "arka uç" },
        { simge: "🗄️", yazi: "Kaydedilir",     alt: "veri tabanı" }
      ]},
      not: "Arka uç işleri: kaydetme, güncelleme, silme." },

    { tur: "bilgi", baslik: "Arka uç dilleri",
      gorsel: { tip: "kartlar", kartlar: [
        { ust: "Java",    alt: "Çok popüler; mobil ve masaüstü" },
        { ust: "PHP",     alt: "Sunucuda çalışır; hosting ucuz" },
        { ust: "ASP.NET", alt: "C# ile çalışır; MVC mimarisi" },
        { ust: "Python",  alt: "Kolay yazım; makine öğrenmesi" },
        { ust: "Node.js", alt: "JavaScript'i sunucuda çalıştırır" }
      ]},
      not: "Bu yılın sonunda ASP.NET ile arka uç yazacağız." },

    { tur: "bilgi", baslik: "Full stack yazılımcı",
      gorsel: { tip: "akis", adimlar: [
        { simge: "🎨", yazi: "Ön uç" },
        { simge: "➕", yazi: "Arka uç" },
        { simge: "🦸", yazi: "Full stack", alt: "ikisini de yapar" }
      ]},
      not: "Bu dersin sonunda sen de iki tarafa da dokunmuş olacaksın." },

    { tur: "test", baslik: "Bu iş kimin?", sorular: [
      { soru: "Butonun rengini maviden turuncuya çevirmek",
        secenekler: ["Ön uç", "Arka uç"], dogru: 0 },
      { soru: "Kayıt olan kullanıcının bilgilerini veri tabanına yazmak",
        secenekler: ["Ön uç", "Arka uç"], dogru: 1 },
      { soru: "Menüye tıklayınca açılan animasyonu yapmak",
        secenekler: ["Ön uç", "Arka uç"], dogru: 0 },
      { soru: "Girilen şifrenin doğru olup olmadığını sunucuda kontrol etmek",
        secenekler: ["Ön uç", "Arka uç"], dogru: 1 },
      { soru: "Hem sayfayı tasarlayıp hem veri tabanını kuran kişi",
        secenekler: ["Ön uç yazılımcı", "Arka uç yazılımcı", "Full stack yazılımcı"], dogru: 2 },
      { soru: "Makine öğrenmesi projesi için hangi dil öne çıkar?",
        secenekler: ["PHP", "Python", "HTML", "CSS"], dogru: 1 }
    ]},

    { tur: "merak", baslik: "Ön ucu gör, arka ucu ara",
      adimlar: [
        "Herhangi bir siteyi aç.",
        "<b>F12</b> tuşuna bas, <b>Elements (Öğeler)</b> sekmesine bak.",
        "Gördüğün HTML, ön uç kodudur. Arka uç kodunu bulabiliyor musun?"
      ],
      not: "Bulamazsın: arka uç kodu sunucuda kalır, tarayıcıya sadece sonucu gelir." }

  ]
};
