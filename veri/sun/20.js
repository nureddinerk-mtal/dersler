// SUN · 20 · Web sunucusu (IIS) kurulumu ve yapılandırması  (Kitap s. 256–266)
window.KONU = { dil: "html", slaytlar: [

  { tur: "hoca",
    ozet: "5. birim. Web sunucusu: HTML ile hazırlanmış sayfaları HTTP/HTTPS ile kullanıcılara yayınlayan sunucu (Windows ya da Linux). IIS (Internet Information Services): Windows'un web sunucusu yazılımı. Kurulum: Rol ekle → <b>Web Server (IIS)</b> → ek rol hizmeti seçmeden Yükle. Yönetim: Araçlar → Internet Information Services (IIS) Yöneticisi (yeniden başlat, durdur, IP, bağlantı noktası, varsayılan belge, kimlik doğrulama, sertifika). Test: sunucuda http://localhost ya da http://127.0.0.1; istemciden http://192.168.1.254. <b>Default Web Site</b>: C:\\inetpub\\wwwroot, HTTP 80. Statik sayfa (içerik kullanıcıyla değişmez, .html) / Dinamik sayfa (kullanıcıyla etkileşir; ASP, PHP; IIS'te ek özellik gerekir). 1. Uygulama: wwwroot\\Dünya\\index.html (kod kitapta), uzantıları göster (Klasör seçenekleri → Görünüm → Bilinen dosya türleri için uzantıları gizle kaldır), Siteler → Web Sitesi Ekle: ad Dünya, fiziksel yol, bağlantı noktası 81; http://192.168.1.254:81; güvenlik duvarında TCP 81 gelen kuralı (Http81). Web Sitesi Ekle alanları: Site adı, Fiziksel yol, Farklı bağlan, Ayarları sına, Tür (http/https), IP adresi (Tümü Atanmamış), Bağlantı noktası (HTTP 80, HTTPS 443), Ana bilgisayar adı (DNS'te A kaydı gerekir). Siteyi düzenle: Bağlamalar, Temel Ayarlar. 2. Uygulama: wwwroot\\İstiklal Marşı\\anasayfa.html; site: ana bilgisayar adı www.istiklalmarsi.local; DNS'te istiklalmarsi.local bölgesi + www A kaydı; istemci DNS'i sunucu; Varsayılan Belge'ye anasayfa.html ekle (üstte olan öncelikli); tarayıcıda www.istiklalmarsi.local.",
    akis: ["Hazırlık: Siteler nerede duruyor?", "Web sunucusu, IIS, HTTP", "IIS kurulumu ve localhost testi", "Default Web Site ve wwwroot", "Statik / dinamik sayfa", "1. Uygulama: port 81 ile site", "Web Sitesi Ekle alanları", "2. Uygulama: ana bilgisayar adı + DNS + varsayılan belge", "Test"],
    hatalar: ["Not Defteri dosyayı “index.html.txt” diye kaydedebilir; uzantıları göstermeden fark edilmez (kitap bu yüzden uzantı ayarını yaptırıyor). Kayıtta “Kayıt türü: Tüm dosyalar” seçmek de çözer.", "Türkçe karakterler bozuk görünürse dosyayı UTF-8 kaydedin ya da &lt;meta charset=\"utf-8\"&gt; ekleyin (kitaptaki kodda yok).", "Port 81 için güvenlik duvarı kuralı açılmazsa site sunucuda açılır, istemcide açılmaz.", "2. Uygulamada istemcinin DNS'i sunucuyu göstermeli; yoksa www.istiklalmarsi.local bulunamaz (15. konu).", "Klasör adlarındaki Türkçe karakter ve boşluk (İstiklal Marşı) IIS'te çalışır ama adres çubuğunda sorun çıkarmaması için site adı/ana bilgisayar adı İngilizce harflerle olmalı."],
    sorular: [["Neden port 81?", "80'i Default Web Site kullanıyor. Ad (ana bilgisayar adı) kullanmadan aynı IP'de ikinci site için farklı port gerekir."], ["localhost ne demek?", "Bilgisayarın kendisi; 127.0.0.1 ile aynı."]],
    kod: `<!-- 1. Uygulama · C:\\inetpub\\wwwroot\\Dünya\\index.html (kitaptaki kod) -->
<html>
<title>Dünyamıza Hoşgeldiniz</title>
<body bgcolor="#0000FF">
<font color="#FFFFFF">
<h1>Daha yaşanılası bir dünya için</h1>
<h2>Çevremizi Temiz Tutalım.</h2>
</font>
</body>
</html>`,
    not: "11E'deki Web Tabanlı Uygulama Geliştirme dersinin HTML bilgisi burada işe yarar; ama kitap 11D'de kodun bilinmesini zorunlu tutmuyor." },

  { tur: "bilgi", baslik: "Web sunucusu",
    gorsel: { tip: "akis", adimlar: [ { simge: "💻", yazi: "Tarayıcı", alt: "http://192.168.1.254" }, { simge: "📨", yazi: "HTTP isteği" }, { simge: "🖥️", yazi: "IIS", alt: "C:\\inetpub\\wwwroot" }, { simge: "📄", yazi: "HTML sayfa" } ] },
    metin: "<b>IIS</b> (Internet Information Services): Windows sunucularının web sunucusu yazılımı. Sayfaları <b>HTTP</b> ya da <b>HTTPS</b> ile yayınlar." },

  { tur: "bilgi", baslik: "IIS kurulumu ve test",
    gorsel: { tip: "ikili",
      sol: { baslik: "Kurulum", gorsel: { tip: "akis", adimlar: [ { simge: "➕", yazi: "Rol ve özellik ekle" }, { simge: "☑️", yazi: "Web Server (IIS)" }, { simge: "✅", yazi: "Yükle" } ] } },
      sag: { baslik: "Test", gorsel: { tip: "tarayici", adres: "http://localhost", icerik: "<div style='background:#0b5cad;color:#fff;padding:18px;text-align:center;font-family:Segoe UI,Arial'><div style='font-size:28px;font-weight:300'>Internet Information Services</div><div>Welcome · Hoş geldiniz · Bienvenido</div></div>" } },
      ok: "➜" },
    metin: "<b>Default Web Site</b>: IIS ile kendiliğinden gelir; dosyaları <b>C:\\inetpub\\wwwroot</b>, bağlantı noktası <b>80</b>." },

  { tur: "bilgi", baslik: "Statik ve dinamik sayfa",
    gorsel: { tip: "ikili",
      sol: { baslik: "📄 Statik", gorsel: { tip: "kartlar", kartlar: [ { ust: "İçerik sabit", alt: ".html · tanıtım sayfası" } ] } },
      sag: { baslik: "🔄 Dinamik", gorsel: { tip: "kartlar", kartlar: [ { ust: "Kullanıcıyla değişir", alt: "ASP, PHP · hava durumu, haber, e-ticaret" } ] } },
      ok: "·" } },

  { tur: "uygulama", baslik: "1. Uygulama · Port 81'de site",
    metin: "Kitaptaki kodla hazırladığın Dünya sitesini <b>81</b> numaralı bağlantı noktasından yayınla.",
    gorsel: { tip: "tarayici", adres: "http://192.168.1.254:81", icerik: "<div style='background:#2f52c9;color:#fff;padding:10px 14px'><h1 style='margin:4px 0'>Daha yaşanılası bir dünya için</h1><h2 style='margin:4px 0'>Çevremizi Temiz Tutalım.</h2></div>" },
    adimlar: ["wwwroot içinde <b>Dünya</b> klasörü, içinde <b>index</b> metin belgesi oluştur.", "Not Defteri'nde kitaptaki HTML kodunu yaz, kaydet.", "Dosya → Klasör ve arama seçeneklerini değiştir → Görünüm → “Bilinen dosya türleri için uzantıları gizle” işaretini kaldır.", "Dosyanın adını <b>index.html</b> yap.", "IIS Yöneticisi → Siteler'e sağ tık → <b>Web Sitesi Ekle</b>: ad Dünya, fiziksel yol, bağlantı noktası 81.", "Güvenlik duvarına TCP 81 gelen kuralı ekle (ad: Http81).", "İstemciden <b>http://192.168.1.254:81</b> aç."],
    kitap: "s. 259–262 · 1. Uygulama" },

  { tur: "bilgi", baslik: "Web Sitesi Ekle penceresi",
    gorsel: { tip: "pencere", baslik: "Web Sitesi Ekle", satirlar: [
      { etiket: "Site adı", deger: "Dünya" }, { etiket: "Fiziksel yol", deger: "C:\\inetpub\\wwwroot\\Dünya" }, { baslik: "Bağlama" },
      { etiket: "Tür", deger: "http ▾" }, { etiket: "IP adresi", deger: "Tümü Atanmamış" }, { etiket: "Bağlantı noktası", deger: "81" }, { etiket: "Ana bilgisayar adı", deger: "" }
    ], dugmeler: ["Tamam", "İptal"], vurgu: "Tamam" },
    not: "HTTP 80, HTTPS 443. <b>Ana bilgisayar adı</b> kullanılırsa DNS'te A kaydı olmalı. Sonradan değiştirmek: siteye sağ tık → Siteyi Düzenle → <b>Bağlamalar</b> / <b>Temel Ayarlar</b>." },

  { tur: "uygulama", baslik: "2. Uygulama · www.istiklalmarsi.local",
    metin: "İstiklal Marşı'mızın ilk iki kıtasının bulunduğu sayfa, <b>ad</b> ile açılsın.",
    gorsel: { tip: "tarayici", adres: "http://www.istiklalmarsi.local", icerik: "<h2 style='text-align:center;color:#c00'>İstiklal Marşı</h2><p style='text-align:center'>Korkma, sönmez bu şafaklarda yüzen al sancak;<br>Sönmeden yurdumun üstünde tüten en son ocak.<br>O benim milletimin yıldızıdır, parlayacak;<br>O benimdir, o benim milletimindir ancak.</p><p style='text-align:center'>Çatma, kurban olayım, çehreni ey nazlı hilâl!<br>Kahraman ırkıma bir gül! Ne bu şiddet, bu celâl?<br>Sana olmaz dökülen kanlarımız sonra helâl.<br>Hakkıdır Hakk'a tapan milletimin istiklâl.</p>" },
    adimlar: ["wwwroot içinde <b>İstiklal Marşı</b> klasörü, içinde <b>anasayfa.html</b> (ilk iki kıta).", "Web Sitesi Ekle: bağlantı noktası 80, ana bilgisayar adı <b>www.istiklalmarsi.local</b>.", "DNS'te <b>istiklalmarsi.local</b> bölgesi ve <b>www</b> A kaydı (sunucunun IP'si).", "Sunucunun ve istemcinin DNS'i sunucunun IP'si olsun.", "Sitenin <b>Varsayılan Belge</b>'sine anasayfa.html ekle, en üste taşı.", "Tarayıcıda www.istiklalmarsi.local aç."],
    kitap: "s. 263–266 · 2. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 İçeriği kullanıcılarla etkileşimli olarak değişebilen web sitesi türü hangisidir?", secenekler: ["Grafik arayüzlü web site", "Güvenilir web site", "Dinamik içerikli web site", "Komut arayüzü", "Statik içerikli web site"], dogru: 2 },
    { soru: "📖 IIS kurulduğunda kendiliğinden oluşan web sitesi hangisidir?", secenekler: ["Default Web Site", "Default FTP Site", "My Web Site", "Our Web Site", "Web Site"], dogru: 0 },
    { soru: "📖 Hangi dosya uzantısı statik içerikli web sitesi olarak kullanılabilir?", secenekler: ["asp", "html", "jpg", "php", "txt"], dogru: 1 },
    { soru: "📖 Site çağrıldığında öncelikli çalıştırılacak dosyanın ayarı hangisidir?", secenekler: ["Kimlik Doğrulama", "Varsayılan Belge", "Dizinlere Gözatma", "SSL Ayarları", "Günlük"], dogru: 1 },
    { soru: "📖 Ana bilgisayar adı kullanılmayacaksa siteye erişim için adres çubuğuna ne yazılır?", secenekler: ["Site adı", "Fiziksel yol", "Tür", "IP ve bağlantı noktası numarası", "Site kodları"], dogru: 3 },
    { soru: "📖 Web sitelerinin ayarlarını (erişim türü, IP, port, ad) yapmak için geçerli seçenek hangisidir?", secenekler: ["Bağlamalar", "Düzen", "Ayarları Sına", "Farklı Bağlan", "Varsayılan Belge"], dogru: 0 },
    { soru: "📖 Varsayılan HTTP bağlantı noktası numarası hangisidir?", secenekler: ["25", "53", "80", "110", "443"], dogru: 2 },
    { soru: "📖 Windows sunucuları için geliştirilmiş web sitesi yayınlama uygulaması hangisidir?", secenekler: ["DNS", "IIS", "Internet Explorer", "Network Policy", "Remote Services"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "WTUG sayfanı yayınla",
    adimlar: ["Web Tabanlı Uygulama Geliştirme dersinde yaptığın bir HTML sayfasını (resimleriyle) USB'den sunucuya kopyala.", "wwwroot içinde yeni bir klasöre koy, 82 numaralı porttan yayınla.", "Sınıf arkadaşlarının sanal makinelerinden açılıyor mu?"],
    not: "Gerçek internette bir siteyi yayınlamak için sunucunun genel (public) bir IP'si ve alan adı gerekir." }

]};
