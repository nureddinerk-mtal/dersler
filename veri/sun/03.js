// SUN · 03 · Türkçe dil paketi, Ayarlar ve Denetim Masası  (Kitap s. 28–36)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.2.2: 2019 İngilizce kurulur; Türkçe için dil paketi ISO'su (kitaptaki software-download.microsoft.com … SERVERLANGPACKDVD_OEM_MULTI.iso). DVD/ISO tak → Başlat'ta ara: <b>lpksetup</b> → Install display languages → Browse → x64\\langpacks\\Server-Language-Pack_x64_tr-tr → Next → I accept → yükleme → Close. Sonra Başlat'ta <b>Language settings</b> → Windows display language: Türkçe → yeniden başlat. 1.2.3: Yapılandırma üç yerden: Ayarlar, Denetim Masası, Sunucu Yöneticisi. 1.2.4 Ayarlar'da 11 bölüm: Sistem, Cihazlar, Ağ ve İnternet, Kişiselleştirme, Uygulamalar, Hesaplar, Zaman ve Dil, Erişim Kolaylığı, Gizlilik, Güncelleştirme ve Güvenlik, Ara. 1.2.5 Denetim Masası: Sistem ve Güvenlik, Ağ ve Internet, Donanım, Programlar, Kullanıcı Hesapları, Saat ve Bölge, Erişim Kolaylığı.",
    akis: ["2. Uygulama: dil paketi (ISO VMware'e takılır)", "Language settings ve yeniden başlatma", "Yapılandırma için üç yer", "Ayarlar'ın 11 bölümü (kartlar)", "Denetim Masası kategorileri", "Test"],
    hatalar: ["Kitaptaki indirme bağlantısı kırılmış olabilir; ISO'yu önceden indirip paylaşılan klasörden dağıtın (VMware: VM → Settings → CD/DVD → Use ISO image).", "Dil paketi sürümü sunucu sürümüyle aynı olmalı (2019 = 17763). Farklıysa lpksetup paketi kabul etmez.", "Kitap Denetim Masası için “sekiz kategori” diyor ama yedi tane sayıyor; ekranda da yedi kategori görünür.", "Görsel numaraları kitapta karışık (2. Uygulamada 1.25–1.30 diye anılıyor, metinde 1.17–1.24); öğrencilere görsel numarası yerine pencere adını söyleyin.", "Dil değişikliği oturumu kapatıp açınca ya da yeniden başlatınca görünür."],
    sorular: [["Neden en baştan Türkçe kurulmuyor?", "2019 kurulum ortamı sadece İngilizce gelir; diğer diller sonradan paket olarak eklenir."], ["Ayarlar ile Denetim Masası aynı mı?", "Çoğu ayar ikisinde de var. Ayarlar yeni arayüz, Denetim Masası klasik arayüz; bazı gelişmiş ayarlar yalnızca Denetim Masası'nda."]],
    not: "Dil paketi kurulamıyorsa derse İngilizce arayüzle devam edilebilir; diğer konulardaki menü adlarının İngilizcelerini parantez içinde verdim." },

  { tur: "uygulama", baslik: "2. Uygulama · Türkçe dil paketi",
    metin: "Sunucuna Türkçe dil paketini yükle; menüler Türkçe olsun.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "💿", yazi: "Dil paketi ISO'su", alt: "DVD sürücüsüne tak" },
      { simge: "🔎", yazi: "Başlat → lpksetup" },
      { simge: "📥", yazi: "Install display languages" },
      { simge: "📂", yazi: "Browse → x64\\langpacks", alt: "…tr-tr" },
      { simge: "📜", yazi: "I accept → Next" },
      { simge: "🌐", yazi: "Language settings", alt: "Windows display language: Türkçe" },
      { simge: "🔁", yazi: "Yeniden başlat" }
    ]},
    adimlar: ["Dil paketi ISO'sunu öğretmeninden al, DVD sürücüsüne tak.", "Başlat'ta <b>lpksetup</b> yazıp çalıştır.", "Install display languages → Browse.", "x64 → langpacks → <b>Server-Language-Pack_x64_tr-tr</b> dosyasını seç → Next.", "Lisansı kabul et, yüklemenin bitmesini bekle → Close.", "Başlat'ta <b>Language settings</b> → Windows display language: Türkçe.", "Yeniden başlat, giriş yap: Başlat menüsü Türkçe mi?"],
    kitap: "s. 28–33 · 2. Uygulama" },

  { tur: "bilgi", baslik: "Ayarlar nereden yapılır?",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "⚙️ Ayarlar", alt: "Başlat → dişli çark" }, { ust: "🗂️ Denetim Masası", alt: "klasik ayarlar" }, { ust: "🖥️ Sunucu Yöneticisi", alt: "roller, sunucu ayarları" } ] } },

  { tur: "bilgi", baslik: "Ayarlar penceresi",
    gorsel: { tip: "tablo", sutunlar: ["Bölüm", "Neler ayarlanır?"], satirlar: [
      ["Sistem", "ekran, ses, bildirim, güç, depolama, uzak masaüstü"],
      ["Cihazlar", "bluetooth, fare, klavye, yazıcılar"],
      ["Ağ ve İnternet", "ağ durumu, Ethernet, VPN, paylaşım"],
      ["Kişiselleştirme", "arka plan, tema, renk, kilit ekranı, görev çubuğu"],
      ["Uygulamalar", "uygulamalar, varsayılanlar, başlangıç"],
      ["Hesaplar", "kullanıcı bilgisi, oturum açma, parola"],
      ["Zaman ve Dil", "tarih-saat, bölge, görüntüleme dili"],
      ["Erişim Kolaylığı", "metin boyutu, büyüteç, ekran okuyucu"],
      ["Gizlilik", "izinler, etkinlik geçmişi"],
      ["Güncelleştirme ve Güvenlik", "güncelleme, virüs koruması, güvenlik duvarı"],
      ["Ara", "güvenli arama, geçmiş"]] } },

  { tur: "bilgi", baslik: "Denetim Masası",
    gorsel: { tip: "tablo", sutunlar: ["Kategori", "Örnek ayarlar"], satirlar: [
      ["Sistem ve Güvenlik", "güvenlik duvarı, güç, yedekleme, yönetimsel araçlar"],
      ["Ağ ve Internet", "ağ ve paylaşım merkezi, internet seçenekleri"],
      ["Donanım", "aygıtlar ve yazıcılar, aygıt yöneticisi, fare"],
      ["Programlar", "program kaldırma, yüklü güncelleştirmeler"],
      ["Kullanıcı Hesapları", "kullanıcı ekleme, hesap türü"],
      ["Saat ve Bölge", "tarih, saat dilimi, sayı biçimi"],
      ["Erişim Kolaylığı", "erişim kolaylığı merkezi, konuşma tanıma"]] } },

  { tur: "odev", baslik: "Ödev · Ayar avı",
    metin: "Sunucunda şu ayarları bul ve hangi pencereden (Ayarlar mı, Denetim Masası mı) ulaştığını yaz: saat dilimi, arka plan resmi, aygıt yöneticisi, yüklü güncelleştirmeler, güç planı.",
    kitap: "s. 34–36" },

  { tur: "test", sorular: [
    { soru: "📖 Sunucuya dil paketi yüklenmesini sağlayan komut hangisidir?", secenekler: ["langapply", "langchange", "langinstall", "langpacks", "lpksetup"], dogru: 4 },
    { soru: "📖 Arka plan resmi, tema, renk, kilit ekranı ayarları hangi Ayarlar bölümündedir?", secenekler: ["Cihazlar", "Görünüm", "Kişiselleştirme", "Sistem", "Uygulamalar"], dogru: 2 },
    { soru: "📖 Aygıtlar ve yazıcılar, aygıt yöneticisi hangi Denetim Masası bölümündedir?", secenekler: ["Uygulamalar", "Cihazlar", "Donanım", "Sistem ve güvenlik", "Erişim kolaylığı"], dogru: 2 },
    { soru: "Dil paketi yüklendikten sonra dili değiştirmek için hangi ayar açılır?", secenekler: ["Language settings", "Device Manager", "Server Manager", "Disk Management"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "PowerShell ile dil",
    adimlar: ["Başlat'a sağ tık → Windows PowerShell (Yönetici).", "<code>Get-WinUserLanguageList</code> yaz: hangi diller yüklü?", "<code>Get-Date</code> yaz: tarih Türkçe mi geliyor?"],
    not: "Sunucu yöneticileri çoğu işi PowerShell komutlarıyla yapar; aynı komut yüzlerce sunucuda çalıştırılabilir." }

]};
