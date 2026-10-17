// WTUG · 01 · Web dünyası: sayfa, site, alan adı, hosting  (Kitap s. 18–20)
window.KONU = {
  slaytlar: [

    { tur: "bilgi", baslik: "Web sayfası mı, web sitesi mi?",
      gorsel: [
        { tip: "kartlar", kartlar: [
          { ust: "📄 Web sayfası", alt: "Tarayıcıda açılan tek belge" },
          { ust: "📚 Web sitesi",  alt: "Birbirine bağlı sayfaların bütünü" }
        ]},
        { tip: "akis", adimlar: [
          { simge: "🏠", yazi: "Anasayfa" },
          { simge: "👥", yazi: "Hakkımızda" },
          { simge: "📞", yazi: "İletişim" }
        ]}
      ],
      not: "Bu üç sayfa birlikte bir web sitesi olur." },

    { tur: "bilgi", baslik: "Alan adı (domain)",
      metin: "Bilgisayarlar sayılarla (IP) konuşur. Biz sayı ezberlemeyelim diye alan adı var.",
      gorsel: { tip: "akis", adimlar: [
        { simge: "🔢", yazi: "IP adresi", alt: "sayılar" },
        { simge: "🔤", yazi: "Alan adı",  alt: "kelimeler" },
        { simge: "🌐", yazi: "Web sitesi" }
      ]},
      not: "Alan adı = sitenin internetteki kimliği." },

    { tur: "bilgi", baslik: "Bir alan adını parçalayalım",
      gorsel: { tip: "parcala", ayrac: ".", parcalar: [
        { yazi: "www", etiket: "web" },
        { yazi: "meb", etiket: "kurum adı" },
        { yazi: "gov", etiket: "uzantı: devlet" },
        { yazi: "tr",  etiket: "ülke: Türkiye" }
      ]}},

    { tur: "bilgi", baslik: "Alan adı uzantıları",
      gorsel: { tip: "kartlar", kartlar: [
        { ust: ".gov",  alt: "Devlet" },
        { ust: ".edu",  alt: "Üniversite" },
        { ust: ".k12",  alt: "Okul öncesi – lise" },
        { ust: ".org",  alt: "Ticari olmayan kuruluş" },
        { ust: ".com",  alt: "Ticari kuruluş" },
        { ust: ".mil",  alt: "Askerî kurum" },
        { ust: ".net",  alt: "Servis sağlayıcı" },
        { ust: ".ac",   alt: "Akademik" },
        { ust: ".int",  alt: "Uluslararası" },
        { ust: ".info", alt: "Bilgi sitesi" },
        { ust: ".biz",  alt: "Ticari kuruluş" }
      ]},
      not: "Okulumuz .k12 kullanır." },

    { tur: "bilgi", baslik: "Alan adı nasıl alınır?",
      gorsel: { tip: "akis", adimlar: [
        { simge: "🏢", yazi: "Yetkili seç",   alt: "örn. nic.tr" },
        { simge: "🔍", yazi: "Sorgula",       alt: "boşta mı?" },
        { simge: "✅", yazi: "Seç",           alt: "doluysa benzerini" },
        { simge: "📝", yazi: "Süre ve ödeme" },
        { simge: "🎉", yazi: "Onayla" }
      ]},
      not: "Ücretli işlemler büyüklerin gözetiminde yapılır." },

    { tur: "bilgi", baslik: "Hosting (barındırma)",
      metin: "Sitenin dosyaları, 7/24 açık güçlü bir bilgisayarda durur: sunucu.",
      gorsel: { tip: "akis", adimlar: [
        { simge: "💻", yazi: "Site dosyaların" },
        { simge: "🖥️", yazi: "Sunucu",   alt: "hosting firması" },
        { simge: "🌐", yazi: "İnternet" },
        { simge: "📱", yazi: "Ziyaretçi" }
      ]},
      not: "Paket fiyatı bellek, işlemci, disk ve hıza göre değişir." },

    { tur: "bilgi", baslik: "Alan adı + hosting = yayında!",
      gorsel: { tip: "akis", adimlar: [
        { simge: "🔤", yazi: "Alan adı" },
        { simge: "🖥️", yazi: "Hosting" },
        { simge: "🚀", yazi: "Yayında site" }
      ]},
      not: "İkisi DNS (ad sunucusu) ayarıyla eşleştirilir." },

    { tur: "uygulama", baslik: "Alan adını hosting ile eşleştir",
      metin: "Bir hosting firmasının sitesinde adımları incele. Satın alma yapma.",
      adimlar: [
        "Güvenilir bir hosting firması seç.",
        "İhtiyacına uygun bir paket seç.",
        "Alan adını eşleştir ya da ad sunucusu (DNS) bilgisini gir.",
        "Süre ve ödeme ekranına kadar ilerle, orada dur."
      ],
      kitap: "s. 20 · 1. Uygulama" },

    { tur: "odev", baslik: "Sıra Sizde",
      metin: "1️⃣ Beş alan adı uzantısını araştır, ne işe yaradığını yaz.<br>2️⃣ Bir alan adı belirle, boşta mı sorgula, kayıt adımlarını yaz.",
      kitap: "s. 19" },

    { tur: "test", sorular: [
      { soru: "Birbirine bağlı sayfaların bütününe ne denir?",
        secenekler: ["Web sayfası", "Web sitesi", "Hosting", "Alan adı"], dogru: 1 },
      { soru: "Okulumuzun alan adında hangi uzantı vardır?",
        secenekler: [".edu", ".gov", ".k12", ".com"], dogru: 2 },
      { soru: "Site dosyalarının tutulduğu hizmete ne denir?",
        secenekler: ["Domain", "Tarayıcı", "Hosting", "IP"], dogru: 2 },
      { soru: "Alan adı neyin kelimeyle yazılmış hâlidir?",
        secenekler: ["IP adresi", "E-posta", "Şifre", "Tarayıcı"], dogru: 0 }
    ]}

  ]
};
