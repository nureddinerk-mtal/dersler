// SPROG · 15 · Oyun, video oyun türleri ve oyun geliştirme motoru  (Kitap s. 104–108)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3. birim girişi. Oyun: kuralları olan eğlence ya da yarış. Video oyun: giriş birimlerinden (klavye, fare, oyun kolu) aldığı bilgiyi görüntüye çeviren elektronik cihazlarda oynanan oyun. 10 tür: platform, dövüş, yarış, strateji, rol yapma, çok oyunculu, çevrim içi, simülasyon, macera, bulmaca ve kart (aralarında kesin sınır yok). Oyun geliştirme motoru: kodlama gerekmeden nesneleri sahneye koyup ne yapacaklarını belirleyerek oyun yapmak. Kitabın seçtiği motor: GDevelop (dil bilgisi gerektirmez, açık kaynak ve ücretsiz, tarayıcıda kurulumsuz çalışır, kolay). 1. Uygulama: TRY IT ONLINE → START USING GDEVELOP → CREATE A NEW PROJECT → Empty game → Click to add a scene → New scene. Sıra Sizde: çevrim içi sahne ekleme.",
    akis: ["Hazırlık: İlk oynadığın oyun? Son oynadığın video oyunun türü?", "Oyun ve video oyun tanımı", "10 tür: öğrencilerden örnek oyun isteyin", "Oyun motoru nedir?", "GDevelop'un 4 özelliği", "1. Uygulama: ilk proje, ilk sahne", "Test"],
    hatalar: ["Kitaptaki adres (gdevelop-app.com) artık <b>gdevelop.io</b>'ya yönleniyor; tarayıcı editörü: <b>editor.gdevelop.io</b>. “TRY IT ONLINE / START USING GDEVELOP” düğmelerinin adı yeni sürümde farklı (örn. “Open GDevelop in your browser”, “Create”, “New project”).", "Yeni sürümde sahne çoğu zaman otomatik gelir (Untitled scene); gelmezse Project Manager'dan ekleyin.", "Çevrim içi sürümde bazı özellikler yok (kitaptaki DİKKAT kutusu); laboratuvarda masaüstü sürüm kurulabilir.", "Bulutta kaydetmek için hesap gerekir (13 yaş üstü). Hesapsız çalışırken “Download a copy / Save as” ile .json projeyi indirmeyi gösterin (16. konu)."],
    sorular: [["Neden GDevelop, Unity değil?", "Kitap: programlama bilgisi azsa en uygunu GDevelop. Unity ve Godot daha güçlü ama kod (C#, GDScript) ister."], ["Minecraft hangi tür?", "Türler arasında net sınır yok: hem macera hem simülasyon hem çok oyunculu sayılabilir."]],
    not: "Meraklısına: Türkiye oyun sektörü dünyada önemli; Peak, Dream Games gibi şirketler. Öğrencilerle “basit ama ilgi çekici oyun” fikrini konuşun: kitap da asıl sorunun fikir olduğunu söylüyor." },

  { tur: "bilgi", baslik: "Oyun ve video oyun",
    gorsel: { tip: "ikili",
      sol: { baslik: "🎲 Oyun", gorsel: { tip: "kartlar", kartlar: [ { ust: "Kuralları olan eğlence ya da yarış" } ] } },
      sag: { baslik: "🎮 Video oyun", gorsel: { tip: "kartlar", kartlar: [ { ust: "Klavye, fare, oyun kolundan gelen bilgiyi görüntüye çeviren cihazda oynanır" } ] } },
      ok: "➜" } },

  { tur: "bilgi", baslik: "Video oyun türleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🏃 Platform", alt: "2B; puan topla, düşmandan kaç" },
      { ust: "🥊 Dövüş", alt: "rakiple dövüş" },
      { ust: "🏎️ Yarış", alt: "araçla birinci ol" },
      { ust: "🏰 Strateji", alt: "kaynak topla, bölgeni büyüt" },
      { ust: "🧙 Rol yapma", alt: "karakterini geliştir" },
      { ust: "👥 Çok oyunculu", alt: "aynı anda birden çok kişi" },
      { ust: "🌐 Çevrim içi", alt: "internetten, tarayıcıdan" },
      { ust: "✈️ Simülasyon", alt: "pilotluk, şoförlük" },
      { ust: "🔍 Macera", alt: "ipuçlarıyla gizem çöz" },
      { ust: "🧩 Bulmaca ve kart", alt: "resim birleştir, kart oyna" }
    ]},
    not: "Türler arasında kesin sınır yoktur: bir oyun birkaç türe girebilir." },

  { tur: "bilgi", baslik: "Oyun geliştirme motoru",
    metin: "Kod yazmadan resimleri sahneye yerleştirip <b>ne yapacaklarını belirleyerek</b> oyun yapmayı sağlayan yazılım.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🚫💻 Dil bilgisi gerekmez" },
      { ust: "🆓 Açık kaynak, ücretsiz" },
      { ust: "🌐 Tarayıcıda, kurulumsuz" },
      { ust: "👍 Basit ve kolay" }
    ]},
    not: "Kitabın kullandığı motor: <b>GDevelop</b> (gdevelop.io)." },

  { tur: "uygulama", baslik: "1. Uygulama · İlk proje, ilk sahne",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🌐", yazi: "gdevelop.io", alt: "TRY IT ONLINE" },
      { simge: "▶️", yazi: "START USING GDEVELOP" },
      { simge: "➕", yazi: "CREATE A NEW PROJECT" },
      { simge: "📄", yazi: "Empty game" },
      { simge: "🎬", yazi: "Click to add a scene" },
      { simge: "🖱️", yazi: "New scene'e tıkla" }
    ]},
    adimlar: ["Tarayıcıda oyun motorunun sitesini aç, çevrim içi denemeyi seç.", "Yeni proje oluştur. Başlangıç (STARTERS) bölümünde örnekler, yardım videoları ve oyun gösterimleri de var: göz at.", "Boş oyun (Empty game) şablonunu seç.", "Sol taraftaki artı simgesiyle bir sahne ekle.", "Oluşan New scene'e tıklayıp sahneyi aç."],
    kitap: "s. 105–107 · 1. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Sahne ekle",
    metin: "Oyun geliştirme motorunda çevrim içi olarak yeni bir proje aç ve bir sahne ekle.",
    kitap: "s. 107" },

  { tur: "test", sorular: [
    { soru: "Kontrol edilen karakterin puan toplayıp düşmanlardan kaçtığı, genelde iki boyutlu tür?", secenekler: ["Strateji", "Platform", "Simülasyon", "Rol yapma"], dogru: 1 },
    { soru: "Pilotluk, şoförlük gibi gerçek süreçleri taklit eden tür?", secenekler: ["Macera", "Dövüş", "Simülasyon", "Bulmaca"], dogru: 2 },
    { soru: "Hangisi kitapta sayılan GDevelop özelliklerinden biri değildir?", secenekler: ["Programlama dili bilgisi gerektirmez", "Açık kaynak ve ücretsizdir", "Sadece ücretli sürümü vardır", "Tarayıcıda kurulumsuz çalışır"], dogru: 2 },
    { soru: "Boş bir oyun başlatmak için hangi şablon seçilir?", secenekler: ["Platformer", "Empty game", "Space shooter", "Tutorial"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Örnek oyunları kurcala",
    adimlar: ["Yeni proje ekranındaki EXAMPLES (örnekler) bölümünden bir örnek oyun aç.", "Ön izleme (▶) ile oyna.", "Events sekmesine bak: oyunun kuralları nasıl yazılmış? Hiç kod görüyor musun?"],
    not: "Hazır örnekleri incelemek, oyun motorunu öğrenmenin en hızlı yoludur." }

]};
