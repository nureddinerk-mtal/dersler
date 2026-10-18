// SUN · 18 · AD kullanıcı, grup, bilgisayar ve yapısal birim (OU)  (Kitap s. 228–238)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "4.2 Yönetim araçları: Active Directory Yönetim Merkezi; asıl araç <b>Active Directory Kullanıcıları ve Bilgisayarları</b> (Araçlar ya da Çalıştır → dsa.msc). Kullanıcı: Users → Yeni → Kullanıcı; zorunlu: Tam adı, Kullanıcı oturum açma adı. Parola seçenekleri: Kullanıcı bir sonraki oturumda parola değiştirmeli / Kullanıcı parolayı değiştiremez / Parola her zaman geçerli olsun / Hesap devre dışı. Özellikler → Hesap sekmesi: oturum saatleri, oturum açabileceği bilgisayarlar, hesap süresi. Örnek: Cahit Arf → cahitarf → KAMPUS\\cahitarf. 3. Uygulama: kendi adsoyad hesabın + 2 kişi, Password1, değiştiremez + her zaman geçerli. Komutla: <code>net user kullanici1 Password1 /add</code>; SS1: kisi1, kisi2. Grup: Users → Yeni → Grup; kapsam: Yerel etki alanı / Genel / Evrensel; tür: Güvenlik / Dağıtım (mail). Üyeler sekmesi → Ekle → Gelişmiş → Şimdi Bul. Hazır gruplar: Enterprise Admins (ormanın tamamı), Domain Admins (kendi domaini), Domain Users (standart), Domain Computers, Group Policy Creator Owners. Administrator hem Enterprise hem Domain Admins üyesi. 4. Uygulama: İdareciler, Satiscilar; i1, i2, s1, s2; İdareciler → Domain Admins üyesi; istemcide yetki farkını gözle. Üye bilgisayarlar: Computers dizini. OU (yapısal birim): kullanıcı, grup, bilgisayarları grup ilkesiyle yönetmek için mantıksal klasör; etki alanı → Yeni → Yapısal Birim (yanlışlıkla silinmeye karşı koru). Komutla: <code>dsadd ou</code>, <code>dsadd user</code>. 5. Uygulama: Kampus → A_Binasi, B_Binasi, C_Binasi, Merkez (BilgiIslem, Idare, Muhasebe); A_Binasi: kullanici1-2, B_Binasi: kullanici3-4.",
    akis: ["dsa.msc penceresi", "Kullanıcı oluşturma ve parola seçenekleri", "3. Uygulama ve Sıra Sizde 1 (komutla)", "Gruplar: kapsam, tür, hazır gruplar", "4. Uygulama", "Yapısal birimler (OU)", "5. Uygulama", "Test"],
    hatalar: ["<b>Kitap hatası</b>: kullanıcı oluşturma komutu “dsadd cn cn=kullanici3,ou=,B_Binasi,…” yazılmış. Doğrusu: <code>dsadd user \"cn=kullanici3,ou=B_Binasi,ou=Kampus,dc=kampus,dc=local\" -pwd Password1</code> (komut adı <b>user</b>, “ou=,” fazlalığı yok, tire düz tire).", "Kitap “net user” komutunda “User: Oluşturulan nesne türü” diyor; net user kullanıcı hesabı yönetme komutudur. DC'de çalıştırılınca etki alanı kullanıcısı oluşturur.", "Password1 parolası karmaşıklık kuralını geçer (büyük harf, küçük harf, rakam, 8 karakter).", "Grup adında Türkçe karakter (İdareciler) sorun çıkarmaz ama komutla çalışırken tırnak gerekir.", "Domain Admins üyesi kullanıcının istemcide yönetici yetkisi olması için oturumu kapatıp açması gerekir."],
    sorular: [["Neden grup kullanıyoruz?", "Yüz kullanıcıya tek tek izin vermek yerine onları bir gruba koyup izni gruba veririz. Yeni gelen kişi gruba eklenince tüm izinleri alır."], ["OU ile grup farkı?", "Grup izin vermek içindir (klasör erişimi). OU düzen ve grup ilkesi uygulamak içindir (bu binadaki bilgisayarlarda şu ayar olsun)."]],
    not: "Birim testi 3. (Enterprise Admins) ve 6. (dsadd user) sorular bu konudan." },

  { tur: "bilgi", baslik: "Active Directory Kullanıcıları ve Bilgisayarları",
    gorsel: { tip: "pencere", baslik: "Active Directory Kullanıcıları ve Bilgisayarları", menu: ["Dosya", "Eylem", "Görünüm", "Yardım"], sol: ["kampus.local", "Builtin", "Computers", "Domain Controllers", "Users*", "Kampus"], satirlar: [
      { tablo: { sutunlar: ["Ad", "Tür"], satirlar: [["Administrator", "Kullanıcı"], ["Cahit Arf", "Kullanıcı"], ["Domain Admins", "Güvenlik Grubu"], ["Domain Users", "Güvenlik Grubu"], ["Enterprise Admins", "Güvenlik Grubu"]] } }
    ] },
    metin: "Araçlar ya da Çalıştır → <b>dsa.msc</b>. Kullanıcı ve gruplar <b>Users</b>, katılan bilgisayarlar <b>Computers</b> dizininde." },

  { tur: "bilgi", baslik: "Yeni kullanıcı",
    gorsel: { tip: "ikili",
      sol: { baslik: "Ad bilgileri", gorsel: { tip: "pencere", baslik: "Yeni Nesne - Kullanıcı", satirlar: [ { etiket: "Ad", deger: "Cahit" }, { etiket: "Soyadı", deger: "Arf" }, { etiket: "Tam adı", deger: "Cahit Arf" }, { etiket: "Oturum açma adı", deger: "cahitarf @kampus.local" } ] } },
      sag: { baslik: "Parola seçenekleri", gorsel: { tip: "pencere", baslik: "Yeni Nesne - Kullanıcı", satirlar: [ { etiket: "Parola", deger: "••••••••" }, { kutu: "Kullanıcı bir sonraki oturumda parola değiştirmeli" }, { kutu: "Kullanıcı parolayı değiştiremez", secili: true }, { kutu: "Parola her zaman geçerli olsun", secili: true }, { kutu: "Hesap devre dışı" } ] } },
      ok: "➜" },
    metin: "Users → sağ tık → Yeni → <b>Kullanıcı</b>. Zorunlu: Tam adı ve oturum açma adı. Giriş: <b>KAMPUS\\cahitarf</b>." },

  { tur: "uygulama", baslik: "3. Uygulama · Kullanıcılar",
    metin: "Kendin ve iki yakının için etki alanı hesabı oluştur, istemcide oturum aç.",
    gorsel: { tip: "tablo", sutunlar: ["Tam adı", "Oturum açma adı", "Parola", "Seçenekler"], satirlar: [ ["Ayşe Yılmaz", "ayseyilmaz", "Password1", "değiştiremez · her zaman geçerli"], ["…", "…", "Password1", "değiştiremez · her zaman geçerli"] ] },
    adimlar: ["Users → Yeni → Kullanıcı: adın, soyadın, oturum adı “adsoyad”.", "Parola: Password1; “Kullanıcı parolayı değiştiremez” ve “Parola her zaman geçerli olsun” işaretli.", "İki kişi için daha aynısını yap.", "İstemcide bu hesaplarla oturum aç (KAMPUS\\adsoyad)."],
    kitap: "s. 229–232 · 3. Uygulama" },

  { tur: "odev", baslik: "1. Sıra Sizde · Komutla kullanıcı",
    metin: "<b>kisi1</b> ve <b>kisi2</b> kullanıcılarını Password1 parolasıyla komutla oluştur.",
    gorsel: { tip: "terminal", baslik: "PowerShell (DC)", satirlar: ["> net user kullanici1 Password1 /add", "Komut başarıyla tamamlandı."] },
    kitap: "s. 232",
    not: "Örnek komuttaki adı ve parolayı değiştirerek kullan." },

  { tur: "bilgi", baslik: "Gruplar",
    gorsel: { tip: "tablo", sutunlar: ["", "Seçenek", "Anlamı"], satirlar: [
      ["Kapsam", "Yerel etki alanı", "yalnızca kendi etki alanında"], ["", "Genel", "güvenilen diğer etki alanlarında da"], ["", "Evrensel", "ormanın tamamında"],
      ["Tür", "Güvenlik", "izin ve yetki vermek için"], ["", "Dağıtım", "mail grupları için"]] },
    metin: "Users → Yeni → <b>Grup</b>. Üye eklemek: grup Özellikleri → Üyeler → Ekle → Gelişmiş → Şimdi Bul." },

  { tur: "bilgi", baslik: "Hazır gruplar",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🌳 Enterprise Admins", alt: "ormanın tamamında en yetkili" },
      { ust: "🏢 Domain Admins", alt: "yalnızca kendi domaininin yöneticisi" },
      { ust: "👥 Domain Users", alt: "standart kullanıcılar; program kuramaz" },
      { ust: "💻 Domain Computers", alt: "etki alanına katılan bilgisayarlar" },
      { ust: "📜 Group Policy Creator Owners", alt: "grup ilkesi oluşturabilir" }
    ]},
    not: "AD'yi kuran Administrator hem Enterprise Admins hem Domain Admins üyesidir." },

  { tur: "uygulama", baslik: "4. Uygulama · Gruplar ve üyelik",
    metin: "İdareciler yönetici yetkisinde olsun, Satiscilar standart kullanıcı kalsın.",
    gorsel: { tip: "agac", kok: { ad: "👑 Domain Admins", cocuklar: [ { ad: "👥 İdareciler", cocuklar: [ { ad: "i1" }, { ad: "i2" } ] } ] } },
    adimlar: ["<b>İdareciler</b> ve <b>Satiscilar</b> gruplarını oluştur.", "i1, i2, s1, s2 kullanıcılarını oluştur.", "i1, i2 → İdareciler; s1, s2 → Satiscilar üyesi.", "İdareciler grubunu <b>Domain Admins</b>'e üye yap.", "İstemcide dört hesapla oturum açıp yönetici yetkisi isteyen bir ayar dene (örn. saat dilimi, program kurma)."],
    kitap: "s. 232–235 · 4. Uygulama",
    not: "Satiscilar grubu Users'ta kalır; i1 ve i2 Domain Admins üzerinden yetki alır." },

  { tur: "bilgi", baslik: "Yapısal birim (OU)",
    metin: "Kullanıcı, grup ve bilgisayarları yer ya da görevine göre toplayan mantıksal klasör; grup ilkeleri OU'lara uygulanır. Etki alanı → Yeni → <b>Yapısal Birim</b>.",
    gorsel: { tip: "terminal", baslik: "PowerShell (DC)", satirlar: ["> dsadd ou \"ou=C_Binasi,ou=Kampus,dc=kampus,dc=local\"", "> dsadd user \"cn=kullanici3,ou=B_Binasi,ou=Kampus,dc=kampus,dc=local\" -pwd Password1"] } },

  { tur: "uygulama", baslik: "5. Uygulama · Kampus yapısı",
    metin: "Etki alanında aşağıdaki yapısal birimleri ve kullanıcıları oluştur.",
    gorsel: { tip: "agac", kok: { ad: "📂 Kampus", cocuklar: [
      { ad: "📂 A_Binasi", cocuklar: [ { ad: "👤 kullanici1" }, { ad: "👤 kullanici2" } ] },
      { ad: "📂 B_Binasi", cocuklar: [ { ad: "👤 kullanici3" }, { ad: "👤 kullanici4" } ] },
      { ad: "📂 C_Binasi" },
      { ad: "📂 Merkez", cocuklar: [ { ad: "📂 BilgiIslem" }, { ad: "📂 Idare" }, { ad: "📂 Muhasebe" } ] } ] } },
    adimlar: ["dsa.msc'yi aç.", "Etki alanına sağ tık → Yeni → Yapısal Birim: <b>Kampus</b>.", "Kampus içine A_Binasi, B_Binasi, C_Binasi, Merkez; Merkez içine BilgiIslem, Idare, Muhasebe.", "Kullanıcıları ilgili binaya oluştur; daha önce oluşturduysan Users'tan sürükleyip taşı."],
    kitap: "s. 235–238 · 5. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Ormandaki tüm domainlerdeki nesneler üzerinde yönetim yetkisi olan grup hangisidir?", secenekler: ["Domain Admins", "Domain Users", "Enterprise Admins", "Group Policy Creator Owners", "System"], dogru: 2 },
    { soru: "📖 “dsadd user cn=Ogrenci,ou=11B,ou=Okul,dc=soha,dc=com,dc=tr” komutu ne yapar?", secenekler: ["soha.com.tr etki alanında Okul / 11B içine Ogrenci kullanıcısı oluşturur", "soha.com etki alanında Okul / 11B içine Ogrenci kullanıcısı oluşturur", "soha.com.tr etki alanında 11B / Okul içine kullanıcı oluşturur", "soha.com.tr etki alanında Okul / 11B içine Ogrenci grubu oluşturur", "Okul içine 11B grubu ve Ogrenci kullanıcısı oluşturur"], dogru: 0 },
    { soru: "Active Directory Kullanıcıları ve Bilgisayarları penceresini açan komut hangisidir?", secenekler: ["gpmc.msc", "dsa.msc", "rsop.msc", "dnsmgmt.msc"], dogru: 1 },
    { soru: "Mail grupları için hangi grup türü kullanılır?", secenekler: ["Güvenlik", "Dağıtım", "Evrensel", "Yerel"], dogru: 1 },
    { soru: "Etki alanına katılan bilgisayarlar hangi dizinde görünür?", secenekler: ["Users", "Builtin", "Computers", "Domain Controllers"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Toplu kullanıcı",
    adimlar: ["Not Defteri'nde <code>ogr1</code>'den <code>ogr10</code>'a kadar adları alt alta yaz, ogrenciler.txt kaydet.", "PowerShell'de: <code>Get-Content ogrenciler.txt | ForEach-Object { net user $_ Password1 /add }</code>", "dsa.msc'de 10 kullanıcı oluştu mu?"],
    not: "Okullarda yüzlerce öğrenci hesabı böyle bir listeden (CSV) birkaç saniyede açılır." }

]};
