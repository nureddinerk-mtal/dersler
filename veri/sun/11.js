// SUN · 11 · Dosya ve klasör güvenliği (NTFS izinleri, kalıtım)  (Kitap s. 160–165)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3. birim girişi. 3.1.1: Yerel kullanıcıların dosya ve klasörlere erişimi güvenlik izinleriyle düzenlenir: klasör → Özellikler → <b>Güvenlik</b> sekmesi. Listede klasörü oluşturan hesap (tam yetki), CREATOR OWNER, SYSTEM, Administrators (yönetici, tam yetki), Users (standart kullanıcılar: okuma, listeleme, çalıştırma) otomatik gelir. Düzenle → Ekle/Kaldır, her izin için İzin Ver / İzin Verme. İzinler: Tam denetim, Değiştirme, Okuma ve yürütme, Klasör içeriğini listeleme, Okuma, Yazma, Özel izinler. 1. Uygulama: k1, k2, k3 standart kullanıcılar; Test klasörü, dosya1-3; k1 Tam denetim İzin Verme, k2 Okuma ve yürütme + Listeleme + Okuma İzin Ver, k3 Tam denetim İzin Ver; her kullanıcıyla oturum açıp dene. Gelişmiş: sahip (owner), izinlerin devralındığı yer. <b>Kalıtım</b>: üst klasör izinleri alt klasörlere geçer; alt klasörde değiştirmek için Gelişmiş → Devralmayı Devre Dışı Bırak → “Devralınan izinleri açık izinlere dönüştürün”. Yeniden uygulamak: “Tüm bağımlı nesne izin girdilerini … değiştir”. 2. Uygulama: Test içinde Evraklarım; izinler gri (kalıtım); devralmayı kaldır, artık değiştirilebilir.",
    akis: ["Hazırlık: Dosya paylaşmak için hangi yöntemler var?", "Güvenlik sekmesi ve varsayılan gruplar", "İzin türleri kartları", "1. Uygulama: k1, k2, k3", "Kalıtım nedir?", "2. Uygulama: devralmayı kaldır", "Test"],
    hatalar: ["“İzin Verme” (Deny) her zaman “İzin Ver”den üstündür: k1'e Tam denetim İzin Verme denince Users grubundan gelen okuma da engellenir.", "Kullanıcı değiştirmek için oturumu kapatın (Başlat → kullanıcı simgesi → Oturumu kapat) ya da Kullanıcı değiştir. Windows Server'da standart kullanıcıların yerel oturum açması varsayılan olarak izinlidir (etki alanı denetleyicisi olmadan).", "Kitap 2. Uygulamada “3. Uygulamada oluşturduğunuz Test klasörü” diyor; doğrusu 1. Uygulama.", "Kullanıcılar Denetim Masası → Kullanıcı Hesapları'nda bulunamazsa: Sunucu Yöneticisi → Araçlar → Bilgisayar Yönetimi → Yerel Kullanıcılar ve Gruplar → Kullanıcılar → sağ tık Yeni Kullanıcı (daha hızlı)."],
    sorular: [["Değiştirme ile Tam denetim farkı?", "Değiştirme ile dosya okunur, yazılır, silinir. Tam denetim bunlara ek olarak izinleri ve sahipliği değiştirebilir."], ["Kalıtım neden var?", "Yüzlerce alt klasöre tek tek izin vermemek için. Üst klasöre verilen izin altlara kendiliğinden geçer."]],
    not: "Sunucu ders boyunca aynı sanal makine; kullanıcılara basit, ortak parola verin (örn. Kullanici.1). Parola karmaşıklık kuralı açık olduğu için 1234 gibi parolalar kabul edilmez." },

  { tur: "bilgi", baslik: "Güvenlik sekmesi",
    gorsel: { tip: "pencere", baslik: "Test Özellikleri", menu: ["Genel", "Paylaşım", "Güvenlik", "Önceki Sürümler", "Özelleştir"], satirlar: [
      { metin: "Grup veya kullanıcı adları:" }, { liste: ["CREATOR OWNER", "SYSTEM", "Administrators (SUNUCU19\\Administrators)", "Users (SUNUCU19\\Users)"], secili: 3 },
      { tablo: { sutunlar: ["Users için izinler", "İzin Ver", "İzin Verme"], satirlar: [["Tam denetim", "", ""], ["Değiştirme", "", ""], ["Okuma ve yürütme", "✔", ""], ["Klasör içeriğini listeleme", "✔", ""], ["Okuma", "✔", ""], ["Yazma", "", ""]] } }
    ], dugmeler: ["Düzenle...", "Gelişmiş", "Tamam"], vurgu: "Düzenle..." },
    metin: "Klasör → Özellikler → <b>Güvenlik</b>: kullanıcıların klasörde neler yapabileceği burada belirlenir." },

  { tur: "bilgi", baslik: "İzin türleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "👑 Tam denetim", alt: "her işlem, izinleri değiştirme" },
      { ust: "✏️ Değiştirme", alt: "ad değiştir, kes, sil" },
      { ust: "▶️ Okuma ve yürütme", alt: "dosyaları çalıştır" },
      { ust: "📋 Klasör içeriğini listeleme", alt: "içindekileri gör" },
      { ust: "👀 Okuma", alt: "özelliklerini gör" },
      { ust: "📝 Yazma", alt: "içeriği değiştir" }
    ]},
    not: "<b>Administrators</b>: yönetici grubu, tam yetki. <b>Users</b>: standart kullanıcılar; başkalarının klasörünü sadece okur, listeler, çalıştırır." },

  { tur: "uygulama", baslik: "1. Uygulama · k1, k2, k3",
    metin: "Üç kullanıcının <b>Test</b> klasöründe farklı yetkileri olsun; her biriyle oturum açıp dene.",
    gorsel: { tip: "tablo", ad: "Test klasörü izinleri", sutunlar: ["Kullanıcı", "İzin", "Sonuç"], satirlar: [
      ["k1", "Tam denetim → İzin Verme", "🚫 klasöre giremez"],
      ["k2", "Okuma ve yürütme, Listeleme, Okuma → İzin Ver", "👀 okur, değiştiremez"],
      ["k3", "Tam denetim → İzin Ver", "✅ her şeyi yapar"]] },
    adimlar: ["Administrator ile oturum aç.", "k1, k2, k3 standart kullanıcılarını oluştur.", "<b>Test</b> klasörü ve içinde dosya1, dosya2, dosya3 metin dosyalarını oluştur.", "Test → Özellikler → Güvenlik → Düzenle → Ekle: k1, k2, k3.", "Tablodaki izinleri ver.", "Her kullanıcıyla ayrı oturum aç; klasörde neler yapabildiğini gözle."],
    kitap: "s. 160–162 · 1. Uygulama" },

  { tur: "bilgi", baslik: "Kalıtım (devralma)",
    gorsel: { tip: "agac", kok: { ad: "📁 Test", alt: "k2: Okuma", cocuklar: [ { ad: "📁 Evraklarım", alt: "k2: Okuma (devralındı)" }, { ad: "📄 dosya1", alt: "k2: Okuma (devralındı)" } ] } },
    metin: "Üst klasörün izinleri alt klasörlere <b>kendiliğinden</b> geçer. Alt klasörde değiştirmek için: Güvenlik → Gelişmiş → <b>Devralmayı Devre Dışı Bırak</b>." },

  { tur: "uygulama", baslik: "2. Uygulama · Devralmayı kaldır",
    metin: "Test içindeki <b>Evraklarım</b> klasöründe k1, k2, k3'ün izinlerini değiştirilebilir hâle getir.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Önce: izinler gri", gorsel: { tip: "pencere", baslik: "Evraklarım İzinleri", satirlar: [ { liste: ["k1", "k2", "k3"], secili: 1 }, { metin: "k2 için izinler (devralındığı için değiştirilemez)" }, { kutu: "Okuma ve yürütme", secili: true }, { kutu: "Okuma", secili: true } ] } },
      sag: { baslik: "Sonra: değiştirilebilir", gorsel: { tip: "pencere", baslik: "Evraklarım İçin Gelişmiş Güvenlik Ayarları", satirlar: [ { etiket: "Sahip", deger: "Administrators" }, { metin: "Devralmayı Engelle →" }, { radyo: "Bu nesnede devralınan izinleri açık izinlere dönüştürün.", secili: true } ], dugmeler: ["Devralmayı Etkinleştir", "Tamam"], vurgu: "Tamam" } },
      ok: "➜" },
    adimlar: ["Test içinde <b>Evraklarım</b> klasörünü oluştur.", "Özellikler → Güvenlik → Düzenle: izinler neden gri?", "Gelişmiş → <b>Devralmayı Devre Dışı Bırak</b> → “Bu nesnede devralınan izinleri açık izinlere dönüştürün.” → Tamam.", "Düzenle: izinler artık değiştirilebiliyor mu?"],
    kitap: "s. 162–164 · 2. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Yerel kullanıcıların klasördeki hakları hangi sekmeden belirlenir?", secenekler: ["Genel", "Güvenlik", "Paylaşım", "Önceki sürümler", "Özelleştir"], dogru: 1 },
    { soru: "📖 Kalıtım için hangisi söylenemez?", secenekler: ["Klasörü oluşturan Users grubu kullanıcıları kalıtımı düzenleyebilir.", "Tüm klasörlerde kalıtımı düzenlemek için Users grubu kullanıcısı olmak yeterlidir.", "Tüm klasörlerde kalıtımı Administrator düzenleyebilir.", "Üst dizinlerden gelen kullanıcı ve yetkiler alt dizinlere geçer.", "Users üyesinin kalıtımı düzenlemesi için klasörde Tam Denetim yetkisi gerekir."], dogru: 1 },
    { soru: "Dosya ve klasörlerde ad değiştirme, kesme, silme yetkisi hangisidir?", secenekler: ["Okuma", "Değiştirme", "Listeleme", "Okuma ve yürütme"], dogru: 1 },
    { soru: "Alt klasörde devralınan izinleri değiştirmek için ne yapılır?", secenekler: ["Klasör silinir", "Devralma devre dışı bırakılır", "Paylaşım açılır", "Kullanıcı silinir"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "icacls",
    adimlar: ["Komut İstemi'ni yönetici olarak aç: <code>icacls C:\\Test</code> yaz.", "Çıktıdaki (F), (RX), (R) harflerinin anlamını bul.", "<code>icacls C:\\Test\\Evraklarım</code> ile kalıtım kaldırılmış klasörü karşılaştır."],
    not: "(F) tam denetim, (M) değiştirme, (RX) okuma ve yürütme, (R) okuma, (W) yazma, (I) devralındı demektir." }

]};
