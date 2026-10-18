// SUN · 04 · Sunucu Yöneticisi: ad, IP, rol ekleme ve kaldırma  (Kitap s. 36–51)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.2.6 Sunucu Yöneticisi (Server Manager): yönetimsel araçlar, rol/özellik kurma ve kaldırma. Hızlı Başlangıç: yerel sunucuyu yapılandır (ad, çalışma grubu, IP), rol ve özellik ekle, diğer sunucuları ekle, sunucu grubu oluştur, bulut hizmetlerine bağla. Ad: Yerel Sunucu → Bilgisayar adı → Değiştir → Tam bilgisayar adı / Çalışma grubu → Tamam → yeniden başlat. IP: Ethernet0 satırındaki “DHCP tarafından atanan IPv4…” → Ağ Bağlantıları → Ethernet0 sağ tık Özellikler → IPv4 → Özellikler → “Aşağıdaki IP adresini kullan”. 3. Uygulama: Sunucu19, 192.168.1.254 / 255.255.255.0, DNS 127.0.0.1 (Görsel 1.35). Rol ekleme sihirbazı: Başlamadan önce → Yükleme türü (Rol tabanlı ve özellik tabanlı) → Sunucu seçimi → Sunucu rolleri → Özellikler → (rol bilgisi, rol hizmetleri) → Onay → Yükle → Kapat. 4. Uygulama: Remote Desktop Services kur. 5. Uygulama: aynı sihirbazda “Rol ve Özellik Kaldırma Sihirbazı'nı başlatın” bağlantısıyla RDS'yi kaldır.",
    akis: ["Sunucu Yöneticisi arayüzü", "3. Uygulama: ad ve IP (yeniden başlatma)", "Rol ve özellik farkı", "4. Uygulama: rol ekleme sihirbazı", "5. Uygulama: rol kaldırma", "Test"],
    hatalar: ["Ad ve IP değişikliği yeniden başlatınca geçerli olur; öğrenciler başlatmadan kontrol edip “olmadı” der.", "VMware ağ bağdaştırıcısı NAT ise 192.168.1.254 sabit IP verince internet gider; bu derste sorun değil. Sınıfta sanal makineler birbirini görecekse (DHCP, AD konuları) ağ türünü <b>Host-only</b> ya da ortak bir LAN Segment yapın.", "Bilgisayar adı 15 karakteri geçmemeli, boşluk ve Türkçe karakter içermemeli.", "Rol ve özellik farkı: rol sunucunun ağa verdiği hizmettir (DNS, DHCP, IIS); özellik sunucunun kendisi için araçtır (Server Backup)."],
    sorular: [["Sunucuya neden sabit IP verilir?", "İstemciler sunucuyu hep aynı adreste bulmalı. DHCP adres değiştirirse istemciler sunucuya ulaşamaz."], ["DNS neden 127.0.0.1?", "127.0.0.1 bilgisayarın kendisidir. Sunucu ilerde kendisi DNS sunucusu olacağı için kendini gösteriyor."]],
    not: "Kitap 3. Uygulamada ağ geçidini boş bırakıyor (Görsel 1.35)." },

  { tur: "bilgi", baslik: "Sunucu Yöneticisi",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "1 · Yerel sunucuyu yapılandır", alt: "ad, çalışma grubu, IP" },
      { ust: "2 · Rol ve özellik ekle", alt: "DNS, DHCP, IIS…" },
      { ust: "3 · Diğer sunucuları ekle" },
      { ust: "4 · Sunucu grubu oluştur" },
      { ust: "5 · Bulut hizmetlerine bağla" }
    ]},
    metin: "Rol kurma, kaldırma ve yönetimsel araçların merkezi. Başlat → <b>Sunucu Yöneticisi</b>." },

  { tur: "uygulama", baslik: "3. Uygulama · Ad ve IP",
    metin: "Bilgisayar adı <b>Sunucu19</b>, IP numarası <b>192.168.1.254</b> olsun.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Bilgisayar adı", gorsel: { tip: "pencere", baslik: "Bilgisayar Adı/Etki Alanı Değişiklikleri", satirlar: [ { etiket: "Bilgisayar adı", deger: "Sunucu19" }, { baslik: "Üyesi olduğu" }, { radyo: "Çalışma grubu", secili: true }, { etiket: "", deger: "WORKGROUP" } ], dugmeler: ["Tamam", "İptal"], vurgu: "Tamam" } },
      sag: { baslik: "IP ayarı", gorsel: { tip: "pencere", baslik: "Internet Protocol Version 4 (TCP/IPv4) Özellikleri", satirlar: [ { radyo: "Otomatik olarak bir IP adresi al" }, { radyo: "Aşağıdaki IP adresini kullan:", secili: true }, { etiket: "IP adresi", deger: "192.168.1.254" }, { etiket: "Alt ağ maskesi", deger: "255.255.255.0" }, { etiket: "Varsayılan ağ geçidi", deger: "" }, { radyo: "Aşağıdaki DNS sunucu adreslerini kullan:", secili: true }, { etiket: "Tercih edilen DNS", deger: "127.0.0.1" } ], dugmeler: ["Tamam", "İptal"], vurgu: "Tamam" } },
      ok: "+" },
    adimlar: ["Sunucu Yöneticisi → Bu yerel sunucuyu yapılandır.", "Bilgisayar adına tıkla → Değiştir → adı yaz → Tamam.", "Ethernet0 satırındaki yazıya tıkla → Ağ Bağlantıları açılır.", "Ethernet0 sağ tık → Özellikler → Internet Protocol Version 4 → Özellikler.", "IP bilgilerini gir → Tamam.", "Yeniden başlat, Yerel Sunucu'da değişiklikleri kontrol et."],
    kitap: "s. 36–40 · 3. Uygulama" },

  { tur: "bilgi", baslik: "Rol ve Özellik Ekleme Sihirbazı",
    gorsel: { tip: "akis", adimlar: [
      { simge: "ℹ️", yazi: "Başlamadan önce" },
      { simge: "🧩", yazi: "Yükleme türü", alt: "Rol tabanlı ve özellik tabanlı" },
      { simge: "🖥️", yazi: "Sunucu seçimi" },
      { simge: "☑️", yazi: "Sunucu rolleri" },
      { simge: "➕", yazi: "Özellikler" },
      { simge: "✅", yazi: "Onay → Yükle" }
    ]},
    metin: "<b>Rol</b>: sunucunun ağa verdiği hizmet (DNS, DHCP, IIS). <b>Özellik</b>: sunucunun kendine eklenen araç (Server Backup)." },

  { tur: "uygulama", baslik: "4. Uygulama · Rol kur",
    metin: "Sunucuna <b>Remote Desktop Services</b> (Uzak Masaüstü Hizmetleri) rolünü kur.",
    gorsel: { tip: "pencere", baslik: "Rol ve Özellik Ekleme Sihirbazı", sol: ["Başlamadan Önce", "Yükleme Türü", "Sunucu Seçimi", "Sunucu Rolleri*", "Özellikler", "Onay"], satirlar: [
      { baslik: "Sunucu rollerini seçin" },
      { kutu: "Active Directory Etki Alanı Hizmetleri" }, { kutu: "DHCP Sunucusu" }, { kutu: "DNS Sunucusu" }, { kutu: "Hyper-V" }, { kutu: "Remote Desktop Services", secili: true }, { kutu: "Web Sunucusu (IIS)" }
    ], dugmeler: ["< Geri", "İleri >", "Yükle", "İptal"], vurgu: "İleri >" },
    adimlar: ["Sunucu Yöneticisi → Rol ve özellik ekle → İleri.", "Rol tabanlı ve özellik tabanlı yükleme → İleri.", "Sunucu19'u seç → İleri.", "<b>Remote Desktop Services</b>'i işaretle → İleri.", "Özellikler ve bilgi sayfalarında İleri.", "Yükle → bitince Kapat.", "Sunucu Yöneticisi'nin solunda “Uzak Masaüstü Hizmetleri” var mı?"],
    kitap: "s. 40–47 · 4. Uygulama" },

  { tur: "uygulama", baslik: "5. Uygulama · Rol kaldır",
    metin: "4. Uygulamada kurduğun Remote Desktop Services rolünü kaldır.",
    gorsel: { tip: "akis", adimlar: [ { simge: "➕", yazi: "Rol ve özellik ekle" }, { simge: "🔗", yazi: "Rol ve Özellik Kaldırma Sihirbazı'nı başlatın" }, { simge: "🖥️", yazi: "Sunucu19" }, { simge: "☐", yazi: "Remote Desktop Services işaretini kaldır" }, { simge: "🗑️", yazi: "Kaldır → Kapat" } ] },
    adimlar: ["Rol ve özellik ekle → sihirbazdaki <b>Rol ve Özellik Kaldırma Sihirbazı'nı başlatın</b> bağlantısı.", "Sunucu19 → İleri.", "Remote Desktop Services'in işaretini kaldır → İleri.", "Kaldır → bitince Kapat.", "Rol Sunucu Yöneticisi'nden gitti mi?"],
    kitap: "s. 47–51 · 5. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi Sunucu Yöneticisi'nin işlevlerinden biri değildir?", secenekler: ["Donanım değişikliklerini tarama", "Rol ve özellik ekleme", "Sunucu grubu oluşturma", "Yerel sunucuyu yapılandırma", "Yönetilecek diğer sunucuları ekleme"], dogru: 0 },
    { soru: "📖 I) Sunucu Rolleri II) Sunucu Seçimi III) Yükleme Türü. Hangileri rol ve özellik ekleme aşamalarındandır?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "Bilgisayar adı ve IP değişikliğinin geçerli olması için ne gerekir?", secenekler: ["Oturumu kilitlemek", "Bilgisayarı yeniden başlatmak", "Rol eklemek", "İnterneti kapatmak"], dogru: 1 },
    { soru: "Sunucuya sabit IP vermek için hangi seçenek işaretlenir?", secenekler: ["Otomatik olarak bir IP adresi al", "Aşağıdaki IP adresini kullan", "IPv6'yı kapat", "DHCP'yi etkinleştir"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Komutla kontrol",
    adimlar: ["Komut İstemi'ni aç, <code>hostname</code> yaz: bilgisayar adı geliyor mu?", "<code>ipconfig</code> yaz: IP adresin 192.168.1.254 mü?", "PowerShell'de <code>Get-WindowsFeature | Where Installed</code> yaz: kurulu roller ve özellikler listelenir."],
    not: "Aynı rol PowerShell'de <code>Install-WindowsFeature</code> komutuyla da kurulabilir." }

]};
