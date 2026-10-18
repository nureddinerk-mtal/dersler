// SUN · 17 · Active Directory kurulumu ve etki alanına katılma  (Kitap s. 218–228)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "4. birim. Active Directory (AD): ağdaki sunucu, bilgisayar, yazıcı, kullanıcı ve grupların merkezî bir etki alanıyla yönetildiği dizin ve veri tabanı; kimlik doğrulama sağlar. Kavramlar: <b>Domain</b> (etki alanı; isim.com gibi en az iki parçalı ad), <b>Üst/Alt domain</b> (alt domain adını üstten alır), <b>Tree</b> (ağaç: üst + alt domainler), <b>Forest</b> (orman: farklı adlı ağaçlar, ilk ağacın yöneticisine bağlı), <b>DC</b> (etki alanı denetleyicisi), <b>ADC</b> (DC'nin kopyası, DC çökerse görevi alır), <b>Global Katalog</b> (DC; tüm nesnelerin kaydı). Kurulum: önce sabit IP, DNS 127.0.0.1 ya da kendi IP'si (192.168.1.254); Rol ekle → <b>Active Directory Domain Services</b> → Yükle → Sunucu Yöneticisi'nde bayrak → <b>Bu sunucuyu etki alanı denetleyicisi olarak yükselt</b> → <b>Yeni orman ekle</b>: kampus.local → işlev düzeyi (ormandaki en eski DC işletim sistemi) → DNS sunucusu + Genel Katalog işaretli, RODC değil → DSRM parolası → DNS temsilcisi gerekmez → NetBIOS: KAMPUS → yollar (NTDS, SYSVOL) → önkoşul denetimi → Yükle → yeniden başlar; giriş KAMPUS\\Administrator. DC'de sadece yöneticiler oturum açar. İstemciyi katmak: istemcinin DNS'i = DC'nin IP'si; Sistem → bilgisayar adı (istemci1) → Etki alanı: kampus.local → yönetici hesabıyla onay → “Etki alanına hoş geldiniz” → yeniden başlat; KAMPUS\\kullanıcı ya da kullanici@kampus.local ile giriş.",
    akis: ["Hazırlık: Merkezî yönetimin faydaları", "Kavramlar: domain, ağaç, orman, DC, ADC, Global Katalog", "Kurulumdan önce: sabit IP ve DNS", "1. Uygulama: AD DS kurulumu ve DC'ye yükseltme", "2. Uygulama: istemciyi etki alanına katma", "Test"],
    hatalar: ["<b>Snapshot alın</b>: AD kurulumundan önce VMware'de sunucunun snapshot'ını alın; sonraki konularda bozulursa geri dönülür.", "İstemci <b>Windows 10/11 Pro, Education ya da Enterprise</b> olmalı; Home sürümü etki alanına katılamaz (kitaptaki DİKKAT).", "İstemcinin DNS'i DC'yi göstermezse “Etki alanı denetleyicisine başvurulamadı” hatası çıkar; en sık sorun budur.", "VMware'de iki makine aynı LAN Segment'te ve aynı IP ağında olmalı (12. konu).", "Bir DC'yi etki alanından çıkarmak ve tekrar kurmak uzun sürer; öğrenciler etki alanı adını baştan doğru yazsın (kampus.local).", "DSRM parolası unutulursa AD onarımı zorlaşır; ortak bir sınıf parolası kullanın."],
    sorular: [["Çalışma grubu ile etki alanı farkı?", "Çalışma grubunda her bilgisayar kendi kullanıcılarını tutar. Etki alanında kullanıcılar DC'de tutulur; bir kullanıcı her bilgisayarda aynı hesapla oturum açar."], ["Neden DNS şart?", "İstemciler DC'yi DNS kayıtları sayesinde bulur; AD kurulurken DNS rolü de kendiliğinden kurulur."]],
    not: "Kitapta istemcinin IP'si 192.168.1.3, DC 192.168.1.254." },

  { tur: "bilgi", baslik: "Active Directory",
    metin: "Ağdaki <b>sunucu, bilgisayar, yazıcı, kullanıcı ve grupları</b> tek merkezden (etki alanı) yöneten dizin hizmeti.",
    gorsel: { tip: "agac", kok: { ad: "🌳 Orman (Forest)", cocuklar: [ { ad: "🌲 Ağaç: kampus.local", alt: "üst domain", cocuklar: [ { ad: "ogrenci.kampus.local", alt: "alt domain" }, { ad: "idare.kampus.local", alt: "alt domain" } ] }, { ad: "🌲 Ağaç: firma.local" } ] } } },

  { tur: "bilgi", baslik: "Kavramlar",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🏢 Domain (etki alanı)", alt: "merkezden yönetilen ortak ad: kampus.local" },
      { ust: "🌲 Tree (ağaç)", alt: "üst ve alt domainler" },
      { ust: "🌳 Forest (orman)", alt: "farklı adlı ağaçlar bir arada" },
      { ust: "👑 DC", alt: "etki alanı denetleyicisi sunucu" },
      { ust: "🪞 ADC", alt: "DC'nin kopyası; DC çökerse devralır" },
      { ust: "📚 Global Katalog", alt: "tüm nesnelerin kaydı (DC'de)" }
    ]} },

  { tur: "uygulama", baslik: "1. Uygulama · AD kur",
    metin: "Sunucunu <b>kampus.local</b> etki alanının ilk DC'si yap.",
    gorsel: { tip: "pencere", baslik: "Active Directory Etki Alanı Hizmetleri Yapılandırma Sihirbazı", sol: ["Dağıtım Yapılandırması*", "Etki Alanı Denetleyicisi Seçenekleri", "DNS Seçenekleri", "Ek Seçenekler", "Yollar", "Önkoşul Denetimi"], satirlar: [
      { baslik: "Dağıtım işlemini seçin" }, { radyo: "Var olan bir etki alanına etki alanı denetleyicisi ekle" }, { radyo: "Var olan ormana yeni etki alanı ekle" }, { radyo: "Yeni orman ekle", secili: true }, { etiket: "Kök etki alanı adı", deger: "kampus.local" }
    ], dugmeler: ["< Önceki", "İleri >", "Yükle", "İptal"], vurgu: "İleri >" },
    adimlar: ["IP'yi sabitle (192.168.1.254), DNS'i 127.0.0.1 yap.", "Rol ekle → <b>Active Directory Domain Services</b> → Yükle.", "Sunucu Yöneticisi'ndeki bayrak → <b>Bu sunucuyu etki alanı denetleyicisi olarak yükselt</b>.", "<b>Yeni orman ekle</b>: kampus.local.", "DNS sunucusu ve Genel Katalog işaretli; DSRM parolası belirle.", "NetBIOS adı KAMPUS → İleri → önkoşul denetimi → Yükle.", "Sunucu yeniden başlayınca KAMPUS\\Administrator ile giriş yap."],
    kitap: "s. 219–225 · 1. Uygulama" },

  { tur: "uygulama", baslik: "2. Uygulama · İstemciyi kat",
    metin: "İstemci bilgisayarı <b>istemci1</b> adıyla kampus.local etki alanına üye yap.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Sistem özellikleri", gorsel: { tip: "pencere", baslik: "Bilgisayar Adı/Etki Alanı Değişiklikleri", satirlar: [ { etiket: "Bilgisayar adı", deger: "istemci1" }, { baslik: "Üyesi olduğu" }, { radyo: "Etki alanı:", secili: true }, { etiket: "", deger: "kampus.local" }, { radyo: "Çalışma grubu" } ], dugmeler: ["Tamam", "İptal"], vurgu: "Tamam" } },
      sag: { baslik: "Yeniden başlayınca", gorsel: { tip: "pencere", baslik: "Oturum açma", satirlar: [ { etiket: "Kullanıcı adı", deger: "KAMPUS\\Administrator" }, { etiket: "Parola", deger: "••••••••" }, { metin: "Oturum açın: KAMPUS" } ] } },
      ok: "➜" },
    adimlar: ["İstemcinin IP'sini DC ile aynı ağa (192.168.1.3), DNS'ini <b>DC'nin IP'sine</b> (192.168.1.254) ayarla.", "Sistem → Bilgisayar adı: <b>istemci1</b>, Etki alanı: <b>kampus.local</b>.", "Etki alanı yöneticisinin adı ve parolasıyla onayla.", "Yeniden başlat; oturum açma ekranında KAMPUS yazıyor mu?"],
    kitap: "s. 225–228 · 2. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 DC ile eş çalışan ve DC görev dışı kalınca yerine geçebilen sunucu hangisidir?", secenekler: ["Additional DC", "Domain Controller", "Dosya Sunucusu", "Global Katalog", "İstemci Bilgisayar"], dogru: 0 },
    { soru: "📖 Tüm domain ve alt domainleri kapsayan en geniş AD yapısı hangisidir?", secenekler: ["Child (Alt Domain)", "Domain", "Forest (Orman)", "Parent (Üst Domain)", "Tree (Ağaç)"], dogru: 2 },
    { soru: "📖 Global Katalog nerede bulunur?", secenekler: ["Additional DC'de", "Herhangi bir sunucuda", "Herhangi bir istemcide", "Domain dışındaki bir bilgisayarda", "Ormanı kuran ilk DC'de"], dogru: 4 },
    { soru: "📖 Orman ve etki alanı işlev düzeyi nedir?", secenekler: ["AD kurulabilecek işletim sistemi listesi", "ADC'de olması gereken işletim sistemi", "DC kurulamayacak sistemler listesi", "Orman ve etki alanındaki DC'lerin en eski işletim sistemi", "Üye bilgisayarların en eski işletim sistemi"], dogru: 3 },
    { soru: "İstemcinin etki alanına katılabilmesi için DNS adresi ne olmalıdır?", secenekler: ["8.8.8.8", "127.0.0.1", "DC'nin IP adresi", "Ağ geçidi adresi"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Okulun etki alanı",
    adimlar: ["Okul bilgisayarında Başlat'a sağ tık → Sistem: bilgisayar bir etki alanında mı, çalışma grubunda mı?", "Komut İstemi'nde <code>echo %USERDOMAIN%</code> ve <code>whoami</code> yaz.", "<code>nltest /dsgetdc:</code> (etki alanı varsa) DC'nin adını verir."],
    not: "MEBBİS, e-Okul gibi sistemler internette çalışır; okul içi bilgisayarlar ise bazı okullarda bir etki alanına bağlıdır." }

]};
