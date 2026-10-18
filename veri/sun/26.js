// SUN · 26 · Dağıtım hizmetleri (WDS)  (Kitap s. 318–333)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "6.3 WDS (Windows Dağıtım Hizmetleri): çok sayıda bilgisayara işletim sistemini ağ üzerinden merkezî sunucudan kurmak. İstemcinin BIOS/UEFI'si <b>PXE</b> desteklemeli, ağdan açılış öncelikli olmalı. İstemciler için DHCP gerekir. Rol: Rol ekle → <b>Windows Deployment Services</b> → rol hizmetleri Deployment Server + Transport Server. Yönetim: Araçlar → Windows Dağıtım Hizmetleri; ünlemli sunucu → Sunucuyu Yapılandır → sihirbaz: ortam (<b>Active Directory ile tümleşik</b> / Tek başına sunucu) → uzak yükleme klasörü (C:\\RemoteInstall; mümkünse başka disk) → DHCP aynı sunucudaysa “DHCP ve DHCPv6 bağlantı noktalarını dinleme” + “Ara DHCP için DHCP seçeneklerini yapılandır” işaretli → PXE yanıtı: Tüm istemcileri yanıtla (bilinen ve bilinmeyen), yönetici onayı → hizmeti başlat. Görüntüler: ISO'yu DVD sürücüsüne tak; <b>Önyükleme Görüntüleri</b> → Önyükleme Görüntüsü Ekle (sources\\boot.wim); <b>Yükleme Görüntüleri</b> → görüntü grubu → sources\\install.wim → sürümler. DHCP kapsam seçenekleri: DNS Servers, DNS Domain Name, <b>Boot Server Host Name</b> (WDS sunucusu adı/IP), <b>Bootfile Name</b> (BIOS: boot\\x64\\wdsnbp.com, UEFI: boot\\x64\\wdsmgfw.efi). İstemci: PXE ile açılır, DHCP'den IP alır, <b>F12</b>'ye basınca WDS'den yüklenir; F12 istemeden açılması için WDS özellikleri → Önyükleme → <b>Her zaman PXE önyüklemesine devam et</b>. 8. Uygulama: WDS kur, boot ve install görüntülerini ekle, DHCP, istemciyi PXE ile aç, kurulum. Birim testi: 1E 2D 3B 4D 5D 6B 7A 8A 9C 10A.",
    akis: ["Hazırlık: 30 bilgisayara aynı anda nasıl kurulum yapılır?", "WDS ve PXE", "Rol kurulumu ve yapılandırma sihirbazı", "Önyükleme ve yükleme görüntüleri", "DHCP seçenekleri", "İstemcide PXE açılış (F12)", "8. Uygulama", "Birim testi"],
    hatalar: ["<b>VMware'de PXE</b>: istemci için ISO'suz, boş diskli yeni bir sanal makine oluşturun; açılışta Esc → Network boot from… seçin ya da VM → Power → Power On to Firmware ile önyükleme sırasında ağı en üste alın. Sunucu ve istemci aynı LAN Segment'te olmalı (VMware DHCP'si devre dışı).", "UEFI sanal makinede açılış dosyası wdsmgfw.efi, BIOS'ta wdsnbp.com'dur; uyuşmazsa istemci “PXE-E53 No boot filename” ya da “No offer received” der.", "Görüntü eklerken Windows Server ISO'sundaki boot.wim ve install.wim kullanılabilir; kitap D:\\sources\\install.wim diyor (D: = DVD sürücüsü).", "İç içe sanal makinelerde dağıtım çok yavaş olabilir; 8. Uygulamayı gösteri olarak planlayın.", "Microsoft, WDS'nin yeni sürümlerde boot.wim ile işletim sistemi kurulumunu kısıtladığını duyurdu (2022 ve sonrası); 2019'da kitaptaki yol çalışır."],
    sorular: [["PXE ne demek?", "Preboot eXecution Environment: bilgisayarın diskten değil ağ kartından açılıp işletim sistemini ağdan alması."], ["Okul laboratuvarında işe yarar mı?", "Evet: 30 bilgisayara tek tek USB ile kurmak yerine hepsi ağdan aynı anda kurulabilir."]],
    not: "Önyükleme görüntüsü (boot.wim) kurulum programını açar; yükleme görüntüsü (install.wim) kurulacak işletim sistemidir." },

  { tur: "bilgi", baslik: "Ağdan kurulum",
    gorsel: { tip: "akis", adimlar: [ { simge: "💻", yazi: "İstemci PXE ile açılır" }, { simge: "🔢", yazi: "DHCP'den IP" }, { simge: "⌨️", yazi: "F12" }, { simge: "📥", yazi: "WDS'den önyükleme görüntüsü" }, { simge: "💿", yazi: "Yükleme görüntüsü ile kurulum" } ] },
    metin: "<b>WDS</b>: işletim sistemini çok sayıda bilgisayara ağ üzerinden kurar. İstemcinin BIOS/UEFI'si <b>PXE</b> desteklemeli, ağ açılışı öncelikli olmalı." },

  { tur: "bilgi", baslik: "WDS yapılandırma sihirbazı",
    gorsel: { tip: "pencere", baslik: "Windows Dağıtım Hizmetleri Yapılandırma Sihirbazı", sol: ["Başlamadan Önce", "Yükleme Seçenekleri", "Uzak Yükleme Klasörü", "Proxy DHCP Sunucusu", "PXE Sunucusu İlk Ayarları*"], satirlar: [
      { baslik: "PXE Sunucusu İlk Ayarları" }, { radyo: "Hiçbir istemciyi yanıtlama" }, { radyo: "Yalnızca bilinen istemci bilgisayarları yanıtla" }, { radyo: "Tüm istemci bilgisayarları yanıtla (bilinen ve bilinmeyen)", secili: true }, { kutu: "Bilinmeyen bilgisayarlar için yönetici onayı iste", secili: true }
    ], dugmeler: ["< Geri", "İleri >"], vurgu: "İleri >" },
    not: "Ortam: <b>Active Directory ile tümleşik</b> ya da Tek başına. Klasör: C:\\RemoteInstall. DHCP aynı sunucudaysa iki DHCP seçeneği işaretlenir." },

  { tur: "bilgi", baslik: "Görüntüler ve DHCP seçenekleri",
    gorsel: { tip: "ikili",
      sol: { baslik: "Windows Dağıtım Hizmetleri", gorsel: { tip: "pencere", baslik: "WDS", sol: ["Sunucular", "sunucu19.kampus.local", "Yükleme Görüntüleri", "Önyükleme Görüntüleri*", "Bekleyen Aygıtlar", "Çok Noktaya Yayım İletimleri", "Sürücüler"], satirlar: [ { tablo: { sutunlar: ["Görüntü Adı", "Mimari"], satirlar: [["Microsoft Windows Setup (x64)", "x64"]] } } ] } },
      sag: { baslik: "DHCP kapsam seçenekleri", gorsel: { tip: "tablo", sutunlar: ["Seçenek", "Değer"], satirlar: [["006 DNS Servers", "192.168.1.254"], ["015 DNS Domain Name", "kampus.local"], ["066 Boot Server Host Name", "192.168.1.254"], ["067 Bootfile Name", "boot\\x64\\wdsnbp.com"]] } },
      ok: "+" },
    metin: "<b>Önyükleme Görüntüleri</b>: boot.wim. <b>Yükleme Görüntüleri</b>: install.wim (kurulacak sistem). UEFI istemcide açılış dosyası boot\\x64\\wdsmgfw.efi." },

  { tur: "uygulama", baslik: "8. Uygulama · Ağdan Windows kur",
    metin: "WDS sunucusu kur; boş diskli bir istemci ağdan açılıp işletim sistemini kursun.",
    gorsel: { tip: "terminal", baslik: "İstemci · PXE açılışı", satirlar: ["PXE-E16: ...", "CLIENT MAC ADDR: 00 0C 29 4A 1B 2C   GUID: ...", "CLIENT IP: 192.168.1.60   MASK: 255.255.255.0", "DHCP IP: 192.168.1.254", "Downloaded WDSNBP from 192.168.1.254 sunucu19.kampus.local", "", "Press F12 for network service boot"] },
    adimlar: ["Sunucuya <b>Windows Deployment Services</b> rolünü kur, sunucuyu yapılandır.", "Önyükleme Görüntüleri → Önyükleme Görüntüsü Ekle: DVD'deki sources\\boot.wim.", "Yükleme Görüntüleri → görüntü grubu → sources\\install.wim.", "Aynı ağda boş diskli bir istemci sanal makine oluştur.", "DHCP kapsamı çalışıyor olsun (seçenekler 066, 067).", "İstemciyi ağdan (PXE) başlat, <b>F12</b>'ye bas, kurulumu yap."],
    kitap: "s. 318–330 · 8. Uygulama" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 Hangisi Dosya ve Depolama rolü kurulumunda seçilmesi gerekenlerden biri değildir?", secenekler: ["File Server", "File Server Resource Manager", "DFS Namespaces", "DFS Replication", "Host Guardian Services"], dogru: 4 },
    { soru: "📖 Paylaşılan klasörlere veri limiti için FSRM'de hangi özellik kullanılır?", secenekler: ["Depolama ve Raporlama Yönetimi", "Dosya Filtreleme Yönetimi", "Dosya Yönetimi Görevleri", "Kota Yönetimi", "Sınıflandırma Yönetimi"], dogru: 3 },
    { soru: "📖 Kısayollar için kullanılacak ad alanı hangi izinle oluşturulmalıdır?", secenekler: ["Özel izinleri kullan", "Tüm kullanıcılara salt okuma izinleri ver", "Tüm kullanıcılara okuma ve yazma izinleri ver", "Yöneticilere tam, diğerlerine salt okuma", "Yöneticilere tam, diğerlerine okuma-yazma"], dogru: 1 },
    { soru: "📖 İstemcide uzak masaüstü bağlantı penceresini açan komut hangisidir?", secenekler: ["cmd", "dcpromo", "diskmgmt.msc", "mstsc", "ncpa.cpl"], dogru: 3 },
    { soru: "📖 Standart kullanıcının uzak masaüstü için dâhil olması gereken grup hangisidir?", secenekler: ["Domain Users", "Guests", "Network Configuration", "Remote Desktop Users", "Users"], dogru: 3 },
    { soru: "📖 Kullanıcının başka ana bilgisayarda yeniden oturum açmasını engelleyen özellik hangisidir?", secenekler: ["RD Ağ Geçidi", "RD Bağlantı Aracısı", "RD Lisanslama", "RD Oturumu Ana Bilgisayar", "RD Sanallaştırma Ana Bilgisayar"], dogru: 1 },
    { soru: "📖 WDS sunucusunun IP adresini istemcilere bildiren DHCP seçeneği hangisidir?", secenekler: ["Boot Server Host Name", "Bootfile Name", "DNS Servers", "DNS Domain Name", "Router"], dogru: 0 },
    { soru: "📖 İstemcinin doğrudan WDS'den açılması için hangi seçenek kullanılır?", secenekler: ["Her zaman PXE önyüklemesine devam et", "ESC'ye basılmazsa PXE önyüklemesine devam et", "F12 tuşuna basmayı gerekli kıl", "PXE önyüklemesine hiçbir zaman devam etme", "F2 tuşuna basmayı gerekli kıl"], dogru: 0 },
    { soru: "📖 Dağıtılacak işletim sisteminin önyükleme dosyası WDS'de hangi dizine yerleşir?", secenekler: ["Bekleyen Aygıtlar", "Çok Noktaya Yayım İletimleri", "Önyükleme Görüntüleri", "Sürücüler", "Yükleme Görüntüleri"], dogru: 2 },
    { soru: "📖 Kullanıcılara hangi ana bilgisayarda oturum açmak istediğini soran hizmet hangisidir (kitaba göre)?", secenekler: ["RD Ağ Geçidi", "RD Bağlantı Aracısı", "RD Lisanslama", "RD Oturumu Ana Bilgisayar", "RD Sanallaştırma Ana Bilgisayar"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Okulda toplu kurulum",
    metin: "Laboratuvardaki 30 bilgisayara Windows kurmanın üç yolunu karşılaştır: tek tek USB ile, disk kopyalama (imaj/klonlama) ile, WDS ile. Hangisi en hızlı, hangisi en az emek ister?",
    not: "Büyük kurumlarda WDS'nin yerini Microsoft Configuration Manager ve Intune gibi araçlar alıyor; mantık aynı: merkezden dağıtım." }

]};
