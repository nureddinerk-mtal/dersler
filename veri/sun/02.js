// SUN · 02 · Windows Server 2019 kurulumu  (Kitap s. 20–28)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Kurulum: ISO'yu DVD/USB'ye yaz, BIOS'ta açılışı (boot) DVD/USB yap, yeniden başlat. 2019 varsayılan İngilizce kurulur (Türkçe dil paketi sonra: 03. konu); dil ekranında saat ve klavye Türkçe seçilebilir → Next → Install now → <b>Desktop Experience</b> sürümünü seç (yoksa sadece komut satırı) → I accept the license terms → <b>Custom</b> (yeni kurulum; Upgrade eskiyi yükseltir) → ayrılmamış alanda New → Size → Apply → OK (sistem özel bölümler açabilir) → kurulacak bölümü seç → Next → dosyalar kopyalanır → Administrator için güçlü parola (küçük, büyük harf, rakam, sembol) → Ctrl+Alt+Delete → parola → masaüstü ve Server Manager (Sunucu Yöneticisi) açılır. 1. Uygulama: 40 GB bölüme kurulum.",
    akis: ["Kurulum öncesi: ISO, boot sırası", "Kurulum ekranları (akış)", "Desktop Experience neden önemli?", "Custom ve disk bölümlendirme", "Güçlü parola", "1. Uygulama: VMware'de kurulum (1 ders sürebilir)", "Test"],
    hatalar: ["<b>VMware</b>: Yeni sanal makine sihirbazında “Installer disc image file (iso)” seçilirse VMware “Easy Install” ile kurulumu kendisi yapar ve kitaptaki ekranlar görünmez. <b>“I will install the operating system later”</b> seçin, sonra CD/DVD ayarında ISO'yu gösterin.", "VMware'de Ctrl+Alt+Delete bilgisayarın kendisine gider: sanal makineye göndermek için <b>Ctrl+Alt+Insert</b> ya da menüden VM → Send Ctrl+Alt+Del.", "Sanal makinede BIOS'a girmek gerekmez: ISO takılıysa sanal makine ondan açılır. “Press any key to boot from CD or DVD” yazısında hızlıca bir tuşa basın; kaçırılırsa sanal makine boş diskten açılmaya çalışır.", "Desktop Experience yazmayan sürüm seçilirse masaüstü gelmez (Server Core). Yeniden kurmak gerekir.", "Değerlendirme ISO'su Microsoft Evaluation Center'dan ücretsiz iner (180 gün); ürün anahtarı istemez.", "Parola unutulursa kurtarmak zor: tahtaya sınıf için ortak bir parola kuralı yazın (örn. Okul.2026)."],
    sorular: [["Upgrade ile Custom farkı?", "Upgrade eski sürümü yükseltir, dosya ve uygulamalar kalır. Custom temiz, yeni kurulumdur."], ["Kurulum neden ek bölümler açtı?", "Windows açılış kaydı ve kurtarma için küçük gizli bölümler oluşturur."]],
    not: "Sanal makine önerisi: 2 işlemci çekirdeği, 4 GB RAM, 60 GB disk (tek dosya olarak), ağ: NAT. Kurulum yaklaşık 15–30 dakika sürer; beklerken gereksinim tablosunu tekrar edin." },

  { tur: "bilgi", baslik: "Kurulumdan önce",
    gorsel: { tip: "akis", adimlar: [ { simge: "💿", yazi: "ISO dosyası", alt: "DVD ya da USB'ye" }, { simge: "⚙️", yazi: "BIOS: açılış DVD/USB" }, { simge: "🔁", yazi: "Yeniden başlat" }, { simge: "▶️", yazi: "Kurulum başlar" } ] } },

  { tur: "bilgi", baslik: "Kurulum adımları",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🌐", yazi: "Dil, saat, klavye", alt: "Next" },
      { simge: "▶️", yazi: "Install now" },
      { simge: "🖥️", yazi: "Desktop Experience" },
      { simge: "📜", yazi: "I accept" },
      { simge: "🛠️", yazi: "Custom" },
      { simge: "💽", yazi: "New → Apply", alt: "disk bölümü" },
      { simge: "⏳", yazi: "Dosyalar kopyalanır" },
      { simge: "🔑", yazi: "Yönetici parolası" }
    ]},
    not: "2019 varsayılan olarak <b>İngilizce</b> kurulur. Türkçe dil paketi kurulumdan sonra yüklenir." },

  { tur: "bilgi", baslik: "En önemli seçim",
    gorsel: { tip: "pencere", baslik: "Windows Setup", satirlar: [
      { baslik: "Select the operating system you want to install" },
      { liste: ["Windows Server 2019 Standard Evaluation", "Windows Server 2019 Standard Evaluation (Desktop Experience)", "Windows Server 2019 Datacenter Evaluation", "Windows Server 2019 Datacenter Evaluation (Desktop Experience)"], secili: 1 }
    ], dugmeler: ["Next"], vurgu: "Next" },
    metin: "<b>Desktop Experience</b> yazmayan sürüm masaüstüsüz (Server Core) kurulur." },

  { tur: "uygulama", baslik: "1. Uygulama · Sunucuyu kur",
    metin: "Windows Server 2019'u sanal makineye kur, yönetici olarak giriş yap.",
    gorsel: { tip: "pencere", baslik: "Sunucu Yöneticisi · Pano", sol: ["Pano*", "Yerel Sunucu", "Tüm Sunucular", "Dosya ve Depolama Hizmetleri"], satirlar: [
      { baslik: "SUNUCU YÖNETİCİSİNE HOŞ GELDİNİZ" },
      { metin: "HIZLI BAŞLANGIÇ" },
      { liste: ["1  Bu yerel sunucuyu yapılandır", "2  Rol ve özellik ekle", "3  Yönetilecek diğer sunucuları ekle", "4  Bir sunucu grubu oluştur", "5  Bu sunucuyu bulut hizmetlerine bağla"] }
    ] },
    adimlar: ["ISO'yu öğretmeninden al, sanal makinenin DVD sürücüsüne tak.", "Sanal makineyi aç, DVD'den başlat.", "Dil ve klavyeyi seç → Install now.", "<b>Desktop Experience</b> sürümünü seç.", "Lisansı kabul et → Custom.", "New ile <b>40 GB</b> bölüm oluştur → Next.", "Kurulumun bitmesini bekle.", "Administrator için güçlü bir parola belirle.", "Ctrl+Alt+Delete ile giriş ekranına gel, parolayı yaz."],
    kitap: "s. 27–28 · 1. Uygulama",
    not: "VMware'de Ctrl+Alt+Delete yerine <b>Ctrl+Alt+Insert</b>." },

  { tur: "test", sorular: [
    { soru: "📖 Kurulum sırasında bölümlendirilmiş diski biçimlendiren komut hangisidir?", secenekler: ["Apply", "Extend", "Format", "New", "Refresh"], dogru: 2 },
    { soru: "Masaüstü ekranlı kurulum için hangi sürüm seçilir?", secenekler: ["Server Core", "Desktop Experience", "Upgrade", "Recovery"], dogru: 1 },
    { soru: "Yeni (temiz) kurulum için hangi seçenek kullanılır?", secenekler: ["Upgrade", "Custom", "Repair", "Refresh"], dogru: 1 },
    { soru: "Hangisi güçlü bir parolaya örnektir?", secenekler: ["123456", "sunucu", "Sunucu2019", "Sn.19!kL"], dogru: 3 }
  ]},

  { tur: "merak", baslik: "Server Core'u dene",
    adimlar: ["İkinci bir sanal makineye Desktop Experience <b>yazmayan</b> sürümü kur.", "Açılınca ne görüyorsun? <code>sconfig</code> yaz.", "Menüden bilgisayar adını değiştirmeyi dene."],
    not: "Server Core daha az RAM ve disk kullanır, güncellemesi azdır: gerçek sunucularda çok tercih edilir." }

]};
