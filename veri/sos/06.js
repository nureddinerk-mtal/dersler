// SOS · 06 · E-ticarette güvenlik  (Kitap s. 56–68)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.1.1 E-ticaret güvenliği: sayfa, uygulama, yazılım ve kullanıcı bilgilerinin yetkisiz erişim, izinsiz kullanım ve değiştirilmeye karşı korunması. En büyük engel: bilgilerin çalınacağı ve ödemenin güvensiz olduğu korkusu. Sorumluluk altyapıya göre: pazar yerinde platform, kiralık/satın alınan pakette hizmet firması, kendi altyapısında firma (yetersiz önlemde maddi ve hukuki yaptırım). Tehditler: bilgisayar korsanlığı, verilerin kötüye kullanımı, kimlik avı, kredi kartı sahtekârlığı, para hırsızlığı, siber güvenliği olmayan hizmetler; saldırılar: kart bilgisi, gizli bilgi, veri tabanını silme, zararlı kod, site görüntüsünü değiştirme, sahte adrese yönlendirme. Önlemler: <b>HTTPS / SSL</b> (şifreli iletim, sayısal sertifika, kilit; SSL yoksa banka sanal POS vermez), <b>SET</b> (yalnız kart işlemleri: kimlik tanılama, gizlilik, mesaj bütünlüğü, linkleme), <b>güvenlik duvarı</b> (IP, port, web, içerik filtreleme; DDoS), <b>RAID5</b> (en az 3 disk, hata toleransı, çalışırken disk değişimi), <b>IDS</b> (tespit ve kayıt) / <b>IPS</b> (tespit ve engelleme), <b>3D Secure</b> (telefona tek kullanımlık şifre), <b>PCI DSS</b> (kart verisi standardı), <b>Güven Damgası</b> (TOBB, 6 Haziran 2017 tebliği) ve <b>sızma testi</b>. Site içi: dosyaları taramadan yükleme, güvenli giriş, adres doğrulama, warez temadan uzak dur, güncelleme, bilgi paylaşımı, dijital imza, ödeme bilgisini saklama (bankaya yönlendir), sosyal mühendislik (personel eğitimi, test, protokol, gerektiği kadar yetki, şifre paylaşmama). 6. Uygulama (2 ders saati): senaryodaki hataları, önlemleri ve zafiyetleri listele.",
    akis: ["Güvenlik nedir, kim sorumlu?", "Tehditler ve saldırılar", "HTTPS/SSL, SET", "Güvenlik duvarı, RAID5, IDS/IPS", "3D Secure, PCI DSS, Güven Damgası", "Site içi önlemler", "Sosyal mühendislik", "6. Uygulama: fidye senaryosu", "Test"],
    hatalar: ["Kitap RAID5'i “bir disk güvenlik diski, diğerleri veri” diye anlatıyor; RAID5'te eşlik (parity) bilgisi tüm disklere dağıtılır (tek eşlik diski RAID4'tür). Sunucu İşletim Sistemleri dersinin 06. konusuyla düzeltin.", "Kitap RAID5'in “silinme ihtimaline karşı yedekleme” sağladığını söylüyor; RAID yedek değildir: silinen dosya bütün disklerden silinir. Ayrıca yedek alınmalı.", "SSL'in yerini bugün <b>TLS</b> aldı; “SSL sertifikası” adı alışkanlıkla sürüyor.", "SET protokolü 2000'lerin başında terk edildi; yerini 3D Secure aldı. Tarihî bilgi olarak anlatın.", "6. Uygulamanın notu: “en az 70 puan yeterli, 60 altı tekrar” deniyor; 60–69 arası tanımsız. Sınırı 70 alın."],
    sorular: [["https ve kilit varsa site kesin güvenli mi?", "Hayır. Bağlantı şifrelidir ama sahte siteler de sertifika alabilir; adresin doğru olduğu da kontrol edilmeli."], ["Senaryodaki en büyük hata?", "Şifrelerin e-posta ve sosyal medyada paylaşılması ve sahte e-postaya şifre gönderilmesi (sosyal mühendislik)."]],
    not: "11D bu dönem Sunucu İşletim Sistemleri'nde güvenlik duvarı ve RAID'i uyguluyor; burada sadece kavram düzeyinde kalın." },

  { tur: "bilgi", baslik: "Kim sorumlu?",
    gorsel: { tip: "akis", adimlar: [ { simge: "🏪", yazi: "Pazar yeri", alt: "platform sağlar" }, { simge: "📅", yazi: "Kiralık / satın alınan paket", alt: "hizmet firması sağlar" }, { simge: "🏢", yazi: "Kendi altyapısı", alt: "firma sağlar" } ] },
    metin: "<b>E-ticaret güvenliği:</b> sayfa, yazılım ve kullanıcı bilgilerinin yetkisiz erişim, izinsiz kullanım ve değiştirilmeye karşı korunması." },

  { tur: "bilgi", baslik: "Tehditler",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🏴‍☠️ Bilgisayar korsanlığı" }, { ust: "🎣 Kimlik avı" }, { ust: "💳 Kart sahtekârlığı" }, { ust: "🗑️ Veri tabanını silme" }, { ust: "🦠 Zararlı kod" }, { ust: "🎭 Sahte adrese yönlendirme" } ] },
    metin: "Bazısı yazılım açığından, bazısı bilinçsiz kullanıcıdan; en tehlikelisi profesyonellerin kasıtlı saldırıları." },

  { tur: "bilgi", baslik: "HTTPS ve SSL",
    gorsel: { tip: "tarayici", adres: "🔒 https://magaza.example/odeme", icerik: "<div style='font-family:Arial'><b>Ödeme</b><br>Kart bilgileri şifreli gönderilir.</div>" },
    metin: "Sunucuyla giden gelen her şey <b>şifreli</b>. Adres <b>https://</b> ile başlar ve <b>kilit</b> vardır.",
    not: "SSL yoksa banka sanal POS vermez." },

  { tur: "bilgi", baslik: "Saldırıya karşı",
    gorsel: { tip: "tablo", sutunlar: ["Önlem", "Ne yapar?"], satirlar: [
      ["🔐 SET", "sadece kart işlemlerini şifreler; tarafları dijital imzayla tanır"],
      ["🧱 Güvenlik duvarı", "trafiği kurallarla süzer (IP, port, web, içerik); DDoS'u durdurur"],
      ["💽 RAID5", "en az 3 disk; biri bozulsa sistem çalışır, disk çalışırken değişir"],
      ["👁️ IDS", "saldırıyı <b>tespit eder</b>, kaydeder"],
      ["✋ IPS", "saldırıyı tespit eder ve <b>engeller</b>"]] } },

  { tur: "bilgi", baslik: "Güvenli ödeme ve sertifikalar",
    gorsel: { tip: "ikili",
      sol: { baslik: "3D Secure", gorsel: { tip: "pencere", baslik: "Banka · 3D Secure", satirlar: [ { metin: "Telefonunuza gönderilen tek kullanımlık şifreyi girin." }, { etiket: "Şifre", deger: "••••••" }, { metin: "Kalan süre: 02:47" } ], dugmeler: ["Onayla"], vurgu: "Onayla" } },
      sag: { baslik: "Diğerleri", gorsel: { tip: "kartlar", kartlar: [ { ust: "💳 PCI DSS", alt: "kart verisi güvenlik standardı" }, { ust: "✅ Güven Damgası", alt: "TOBB sertifikası" }, { ust: "🕵️ Sızma testi", alt: "açıkları önce bul" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Site içi güvenlik",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🔑 Güvenli giriş" }, { ust: "🏠 Adres doğrulama" }, { ust: "🚫 Warez tema yok", alt: "gizli reklam, zararlı kod" }, { ust: "🔄 Güncelleme" }, { ust: "🤐 Şifreyi paylaşma" }, { ust: "✍️ Dijital imza" }, { ust: "🏦 Kart bilgisini saklama", alt: "ödemeyi bankaya yönlendir" } ] },
    metin: "Dosyaları sunucuya yüklemeden önce lisanslı güvenlik programıyla tara." },

  { tur: "bilgi", baslik: "Sosyal mühendislik",
    gorsel: { tip: "akis", adimlar: [ { simge: "✉️", yazi: "“Acil güncelleme, şifreni gönder”" }, { simge: "🙋", yazi: "Kişi kanar" }, { simge: "🔓", yazi: "Bütün önlemler aşılır" } ] },
    metin: "İnsanın zaaflarını kullanıp kandırarak bilgi almak. Önlem: personel eğitimi, ara sıra test, güvenlik protokolü, <b>gerektiği kadar yetki</b>, şifre paylaşmamak." },

  { tur: "uygulama", baslik: "6. Uygulama · Fidye mesajı",
    metin: "Senaryodaki girişimcinin hatalarını bul; hata, önlem ve zafiyet listesi çıkar.",
    gorsel: { tip: "tablo", sutunlar: ["Hata", "Önlem", "Zafiyet"], satirlar: [["internetten bulunan ücretsiz tema", "…", "…"], ["…", "…", "…"]] },
    adimlar: ["Sınıfı iki gruba ayır.", "Kitaptaki senaryoyu grupça oku.", "Güvenlikle ilgili hataları not et.", "Her hataya karşı önlem yaz.", "Sorun çıkarmamış ama zafiyet olan durumları not et.", "Ortak listeyi oluştur, sınıfta karşılaştır."],
    kitap: "s. 65–67 · 6. Uygulama" },

  { tur: "test", sorular: [
    { soru: "Adres çubuğunda kilit ve https:// görünmesi ne anlama gelir?", secenekler: ["Site ücretsizdir", "Site devlete aittir", "Bağlantı şifrelidir", "Ürünler indirimlidir"], dogru: 2 },
    { soru: "Saldırıyı tespit edip engelleyen sistem hangisidir?", secenekler: ["IDS", "API", "SEO", "IPS"], dogru: 3 },
    { soru: "Ödeme sırasında telefona tek kullanımlık şifre gönderen yöntem hangisidir?", secenekler: ["3D Secure", "RAID5", "PCI DSS", "Warez"], dogru: 0 },
    { soru: "Türkiye'de e-ticaret sitelerine Güven Damgası veren kurum hangisidir?", secenekler: ["BTK", "TÜİK", "TOBB", "SGK"], dogru: 2 },
    { soru: "Sahte bir “acil güncelleme” e-postasıyla şifre istemek hangi tehdittir?", secenekler: ["DDoS", "Sosyal mühendislik", "Yük dengeleme", "Ölçeklenebilirlik"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Sahte siteyi yakala",
    metin: "Kimlik avı siteleri gerçek adrese çok benzer adresler kullanır: bir harf eksik, fazla ya da yeri değişmiş. Bir alışveriş sitesinin gerçek adresini yaz, altına bir harfi değiştirilmiş üç sahte adres yaz. Arkadaşın ilk bakışta fark edebiliyor mu?" }

]};
