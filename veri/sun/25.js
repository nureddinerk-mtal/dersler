// SUN · 25 · Uzak masaüstü hizmetleri  (Kitap s. 311–318)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "6.2: Uzak masaüstü bağlantısı: uzaktaki bilgisayarın masaüstü ekranının ağ üzerinden istemciye aktarılması; oturum ve kaynaklar uzaktaki bilgisayarda. Kişisel Windows: aynı anda 1 oturum; Windows Server: toplam 3 (yerel + 2 uzak, yönetim için); Uzak Masaüstü Hizmetleri rolüyle 999.999. Avantajlar: her yerden bağlanma, istemcide kaynak tüketmeme, düşük istemci maliyeti, çok kullanıcı, merkezî yönetim. Oturumun açıldığı bilgisayar sunucu, kullanıcının oturduğu istemcidir. İzin: Sistem Özellikleri → <b>Uzak</b> → Bu bilgisayarda uzak bağlantıya izin ver (+ yalnızca Ağ Düzeyinde Kimlik Doğrulama), Kullanıcıları Seç. Port <b>3389</b>; güvenlik duvarında Uzak Masaüstü kuralları açık olmalı. İstemci: Uzak Masaüstü Bağlantısı (<b>mstsc</b>) → bilgisayar: IP / ad → kimlik bilgileri. Yöneticiler bağlanabilir; standart kullanıcı <b>Remote Desktop Users</b> grubuna eklenmeli. Rol kurulumu: Yükleme Türü'nde <b>Uzak Masaüstü Hizmetleri yüklemesi</b> (etki alanı üyesi ama DC olmayan bir sunucuda) → Standart / <b>Hızlı Başlangıç</b> → Dağıtım senaryosu (sanal makine tabanlı / oturum tabanlı) → sunucu seçimi → onay → tamamlanma. Rol hizmetleri: RD Oturumu Ana Bilgisayar (zorunlu, oturumlar burada), RD Bağlantı Aracısı (koptuktan sonra aynı sunucuya geri yönlendirir), RD Ağ Geçidi, RD Lisansı (lisans olmadan oturum açılmayabilir), RD Sanallaştırma Ana Bilgisayar (her kullanıcıya sanal makine), RD Web Erişimi. Kitapta bu bölümde uygulama yok.",
    akis: ["Hazırlık: Uzaktan yönetimin faydaları", "Uzak masaüstü nedir, oturum sayıları", "Sunucuda izin ve port 3389", "İstemciden mstsc ile bağlanma", "Rol kurulumu (Hızlı Başlangıç)", "Rol hizmetleri kartları", "Test"],
    hatalar: ["Kitapta bu konuya ait Uygulama yok; uzak masaüstü izni ve mstsc ile bağlantıyı öğretmen gösterisi olarak yapın (Meraklısına slaytında adımlar var).", "Rol kurulumu <b>DC olmayan</b>, etki alanına üye bir sunucu ister; laboratuvarda tek sunucu varsa rol kurulumunu sadece gösterin.", "Kitap RD Ağ Geçidi'ni “hangi sunucuda oturum açmak istediğini soran” hizmet diye tanımlıyor; Microsoft'a göre RD Ağ Geçidi, internetteki kullanıcıların şirket ağındaki RD sunucularına <b>güvenli (HTTPS) bağlanmasını</b> sağlar. Birim testinin 10. sorusu kitabın tanımına göre (A).", "RD Lisansı kurulmazsa 120 günlük deneme süresi sonunda bağlantılar reddedilir.", "Standart kullanıcı Remote Desktop Users'a eklenmezse “Bağlanmanızı sağlayan yetkiniz yok” hatası alır."],
    sorular: [["Neden sunucuda sadece 2 uzak oturum?", "Bu iki oturum yöneticilerin bakım yapması içindir. Çok kullanıcı için Uzak Masaüstü Hizmetleri rolü ve lisans gerekir."], ["Uzak masaüstü güvenli mi?", "3389 portu internete doğrudan açılırsa saldırıların hedefi olur; RD Ağ Geçidi ya da VPN ile kullanılmalı."]],
    not: "11D'deki öğrenciler uzaktan teknik destek (AnyDesk, TeamViewer) uygulamalarını bilir; mantık aynıdır." },

  { tur: "bilgi", baslik: "Uzak masaüstü",
    gorsel: { tip: "akis", adimlar: [ { simge: "💻", yazi: "İstemci", alt: "ekranı görür, klavye-fare" }, { simge: "🌐", yazi: "Ağ · port 3389" }, { simge: "🖥️", yazi: "Sunucu", alt: "oturum ve programlar burada çalışır" } ] },
    metin: "Uzaktaki bilgisayarın masaüstü ağ üzerinden istemciye gelir; işlemci, RAM ve disk uzaktaki bilgisayardan kullanılır.",
    not: "Aynı anda oturum: kişisel Windows <b>1</b>, Windows Server <b>3</b> (yerel + uzak), Uzak Masaüstü Hizmetleri rolüyle <b>999.999</b>." },

  { tur: "bilgi", baslik: "Avantajlar",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "📍 Her yerden yönetim" }, { ust: "🪶 İstemcide kaynak harcanmaz" }, { ust: "💰 Ucuz istemci" }, { ust: "👥 Aynı anda çok kullanıcı" }, { ust: "🎛️ Merkezî yönetim" } ] } },

  { tur: "bilgi", baslik: "Sunucuda izin, istemciden bağlantı",
    gorsel: { tip: "ikili",
      sol: { baslik: "Sunucu · Sistem Özellikleri", gorsel: { tip: "pencere", baslik: "Sistem Özellikleri", menu: ["Bilgisayar Adı", "Donanım", "Gelişmiş", "Uzak"], satirlar: [ { baslik: "Uzak Masaüstü" }, { radyo: "Bu bilgisayara uzak bağlantılara izin verme" }, { radyo: "Bu bilgisayarda uzak bağlantıya izin ver", secili: true }, { kutu: "Yalnızca Ağ Düzeyinde Kimlik Doğrulamalı…", secili: true } ], dugmeler: ["Kullanıcıları Seç...", "Tamam"], vurgu: "Tamam" } },
      sag: { baslik: "İstemci · mstsc", gorsel: { tip: "pencere", baslik: "Uzak Masaüstü Bağlantısı", satirlar: [ { etiket: "Bilgisayar", deger: "192.168.1.254" }, { etiket: "Kullanıcı adı", deger: "KAMPUS\\Administrator" } ], dugmeler: ["Bağlan"], vurgu: "Bağlan" } },
      ok: "➜" },
    metin: "Standart kullanıcıların bağlanabilmesi için <b>Remote Desktop Users</b> grubuna eklenmesi gerekir." },

  { tur: "bilgi", baslik: "Uzak Masaüstü Hizmetleri rolü",
    gorsel: { tip: "akis", adimlar: [ { simge: "🧩", yazi: "Yükleme Türü", alt: "Uzak Masaüstü Hizmetleri yüklemesi" }, { simge: "⚡", yazi: "Hızlı Başlangıç", alt: "tek sunucu" }, { simge: "🗂️", yazi: "Oturum tabanlı masaüstü dağıtımı" }, { simge: "🖥️", yazi: "Sunucu seçimi" }, { simge: "✅", yazi: "Dağıt → yeniden başlat" } ] },
    not: "Etki alanına üye ama <b>DC olmayan</b> bir sunucuya kurulur." },

  { tur: "bilgi", baslik: "Rol hizmetleri",
    gorsel: { tip: "tablo", sutunlar: ["Hizmet", "Görevi"], satirlar: [
      ["RD Oturumu Ana Bilgisayar", "oturumlar bu sunucuda açılır (zorunlu)"],
      ["RD Bağlantı Aracısı", "kopan kullanıcıyı açık oturumunun olduğu sunucuya geri gönderir"],
      ["RD Ağ Geçidi", "kullanıcıyı uygun ana bilgisayar sunucusuna yönlendirir (kitap)"],
      ["RD Lisansı", "uzak bağlantı lisansları"],
      ["RD Sanallaştırma Ana Bilgisayar", "her kullanıcıya bağımsız sanal bilgisayar"],
      ["RD Web Erişimi", "programları web arayüzünden çalıştırma"]] } },

  { tur: "test", sorular: [
    { soru: "📖 İstemcide uzak masaüstü bağlantı penceresini açan komut hangisidir?", secenekler: ["cmd", "dcpromo", "diskmgmt.msc", "mstsc", "ncpa.cpl"], dogru: 3 },
    { soru: "📖 Standart kullanıcının uzak masaüstü bağlantısı yapabilmesi için dâhil olması gereken grup hangisidir?", secenekler: ["Domain Users", "Guests", "Network Configuration", "Remote Desktop Users", "Users"], dogru: 3 },
    { soru: "📖 Açık oturum bilgisini tutup kullanıcının başka ana bilgisayarda yeniden oturum açmasını engelleyen özellik hangisidir?", secenekler: ["RD Ağ Geçidi", "RD Bağlantı Aracısı", "RD Lisanslama", "RD Oturumu Ana Bilgisayar", "RD Sanallaştırma Ana Bilgisayar"], dogru: 1 },
    { soru: "📖 Kullanıcılara hangi ana bilgisayarda oturum açmak istediğini sorup yönlendiren hizmet hangisidir (kitaba göre)?", secenekler: ["RD Ağ Geçidi", "RD Bağlantı Aracısı", "RD Lisanslama", "RD Oturumu Ana Bilgisayar", "RD Sanallaştırma Ana Bilgisayar"], dogru: 0 },
    { soru: "Uzak masaüstünün varsayılan bağlantı noktası hangisidir?", secenekler: ["80", "443", "3389", "53"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "İstemciden sunucuya bağlan",
    adimlar: ["Sunucuda Sistem Özellikleri → Uzak → <b>Bu bilgisayarda uzak bağlantıya izin ver</b>.", "İstemcide Win+R → <code>mstsc</code> → 192.168.1.254 → Bağlan.", "Yönetici hesabıyla gir. Sonra k1 ile dene: neden olmadı? k1'i Remote Desktop Users grubuna ekle, yeniden dene."],
    not: "Bu slayt kitapta Uygulama olarak yok; konunun pratiği için eklendi." }

]};
