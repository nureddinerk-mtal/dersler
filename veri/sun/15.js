// SUN · 15 · DNS 1: rol, ileri arama bölgesi, kayıtlar, istemci  (Kitap s. 192–205)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.4 DNS: isim çözümleme sistemi; ad ↔ IP eşleştirir, kullanıcı IP ezberlemez. Hiyerarşik: uzantılara göre kümelenir (.com ticari, .org kâr amacı gütmeyen, .net bilişim, .gov devlet, .edu üniversite, .mil askerî; ülke kodları .tr). Rol: Rol ekle → <b>DNS Server</b> → Yükle; Araçlar → DNS. İleriye doğru arama bölgesi: ad → IP kayıtları; sağ tık → Yeni Bölge → Birincil (yeni, bağımsız) / İkincil (başka sunucudaki bölgenin kopyası) / Kalıntı (yalnız SOA, NS) → bölge adı (en az iki parça, noktalı, İngilizce harf; okul.local) → bölge dosyası (okul.local.dns, %SystemRoot%\\system32\\dns) → “Dinamik güncelleştirmelere izin verme” → Son. Kayıtlar: <b>SOA</b> (yetki başlangıcı, TTL), <b>NS</b> (ad sunucusu) bölgeyle gelir; <b>A/AAAA</b> (ad → IPv4/IPv6), <b>CNAME</b> (kısa ad → ad), <b>MX</b> (mail sunucusu; önce A kaydı gerekir). Örnekler: okul.local → 192.168.1.5 (ad boş), mail.okul.local → .15, ftp.okul.local → .10; CNAME www, ogrenci, ogretmen → okul.local. İstemci: DNS IP'si = DNS sunucusu (192.168.1.254). Komutlar: <b>nslookup</b> (A sorgular; set type=mx gibi türle), <b>ping ad</b>, <b>ipconfig /displaydns</b> (önbellek, TTL), <b>ipconfig /flushdns</b> (önbelleği temizle).",
    akis: ["Hazırlık: IP mi ad mı kolay?", "DNS nedir, uzantılar", "DNS rolü ve DNS yöneticisi", "Yeni birincil bölge: okul.local", "Kayıt türleri kartları", "A, CNAME, MX oluşturma", "İstemci DNS ayarı ve komutlar", "Test (7. Uygulama 16. konuda)"],
    hatalar: ["Bölge adı sonu .local olan özel ağ adlarıdır; internette çözülmez. Öğrenciler tarayıcıda okul.local yazıp web sayfası bekler: web sunucusu (IIS) 20. konuda gelir; şimdilik nslookup ve ping ile kontrol edilir.", "MX kaydından önce mail sunucusunun A kaydı oluşturulmalı; MX penceresinde “Gözat” ile o kayıt seçilir.", "İstemcinin DNS'i sunucuyu göstermiyorsa nslookup başka sunucuya (8.8.8.8 gibi) sorar ve “bulunamadı” der. İstemcide IPv4 → Tercih edilen DNS: 192.168.1.254.", "ping ile sadece adın IP'ye çevrildiğine bakılır; o IP'de cihaz yoksa “zaman aşımı” normaldir (kitaptaki DİKKAT).", "Kitap “Kalıntı bölgesi” diyor; Türkçe arayüzde “Saplama bölgesi” (stub zone) görünebilir."],
    sorular: [["DNS olmasaydı?", "Her siteye IP ile girerdik: google.com yerine 142.250.x.x. Üstelik IP değişince adres de değişirdi."], ["CNAME neden gerekli?", "Aynı sunucuya birden çok adla ulaşmak için: www.okul.local ve ogrenci.okul.local aynı web sunucusuna gider; IP değişince sadece A kaydını değiştirmek yeter."]],
    not: "Kitaptaki örnek bölge okul.local; 7. Uygulama (16. konu) turkiye.local kullanıyor." },

  { tur: "bilgi", baslik: "DNS: ad → IP",
    gorsel: { tip: "akis", adimlar: [ { simge: "💻", yazi: "okul.local nerede?" }, { simge: "📖", yazi: "DNS sunucusu", alt: "kayıtlara bakar" }, { simge: "🔢", yazi: "192.168.1.5" }, { simge: "🌐", yazi: "Bağlan" } ] },
    metin: "<b>DNS</b> (Alan Adı Sistemi): adları IP adreslerine çevirir; kimse IP ezberlemek zorunda kalmaz." },

  { tur: "bilgi", baslik: "Ad uzantıları",
    gorsel: { tip: "kartlar", kartlar: [ { ust: ".com", alt: "ticari" }, { ust: ".org", alt: "kâr amacı gütmeyen" }, { ust: ".net", alt: "bilişim" }, { ust: ".gov", alt: "devlet" }, { ust: ".edu", alt: "üniversite" }, { ust: ".mil", alt: "askerî" } ] },
    not: "DNS sunucuları uzantılara ve ülke kodlarına (.tr) göre hiyerarşik kümelenir." },

  { tur: "bilgi", baslik: "Yeni bölge oluşturma",
    gorsel: { tip: "akis", adimlar: [ { simge: "🧩", yazi: "DNS rolünü kur" }, { simge: "🗂️", yazi: "Araçlar → DNS" }, { simge: "🖱️", yazi: "İleriye Doğru Arama Bölgeleri", alt: "sağ tık → Yeni Bölge" }, { simge: "1️⃣", yazi: "Birincil bölge" }, { simge: "🏷️", yazi: "Bölge adı: okul.local" }, { simge: "📄", yazi: "Bölge dosyası" }, { simge: "🚫", yazi: "Dinamik güncelleştirmelere izin verme" } ] },
    not: "<b>Birincil</b>: yeni, bağımsız bölge. <b>İkincil</b>: başka sunucudaki bölgenin kopyası. <b>Kalıntı</b>: yalnızca SOA ve NS bilgisi." },

  { tur: "bilgi", baslik: "Kayıt türleri",
    gorsel: { tip: "tablo", sutunlar: ["Kayıt", "Ne tutar?", "Örnek"], satirlar: [
      ["SOA", "bölgenin sorumluluk bilgisi, TTL", "bölgeyle gelir"],
      ["NS", "bölgeyi tutan DNS sunucusu", "sunucu19"],
      ["A / AAAA", "ad → IPv4 / IPv6", "mail.okul.local → 192.168.1.15"],
      ["CNAME", "kısa ad → ad", "www → okul.local"],
      ["MX", "bölgenin mail sunucusu", "mail.okul.local"]] } },

  { tur: "bilgi", baslik: "okul.local bölgesi",
    gorsel: { tip: "pencere", baslik: "DNS Yöneticisi", sol: ["SUNUCU19", "İleriye Doğru Arama Bölgeleri", "okul.local*", "Geriye Doğru Arama Bölgeleri", "Koşullu İleticiler"], satirlar: [
      { tablo: { sutunlar: ["Ad", "Tür", "Veri"], satirlar: [
        ["(üst klasörle aynı)", "Yetki Başlangıcı (SOA)", "[1], sunucu19., hostmaster."], ["(üst klasörle aynı)", "Ad Sunucusu (NS)", "sunucu19."], ["(üst klasörle aynı)", "Ana Bilgisayar (A)", "192.168.1.5"],
        ["ftp", "Ana Bilgisayar (A)", "192.168.1.10"], ["mail", "Ana Bilgisayar (A)", "192.168.1.15"], ["www", "Diğer Ad (CNAME)", "okul.local."], ["ogrenci", "Diğer Ad (CNAME)", "okul.local."], ["(üst klasörle aynı)", "Posta Değiştirici (MX)", "[10] mail.okul.local."]] } }
    ] },
    metin: "Bölgeye sağ tık: <b>Yeni Ana Bilgisayar (A veya AAAA)</b>, <b>Yeni Diğer Ad (CNAME)</b>, <b>Yeni Posta Değiştirici (MX)</b>." },

  { tur: "bilgi", baslik: "İstemcide DNS",
    gorsel: { tip: "ikili",
      sol: { baslik: "IPv4 ayarı", gorsel: { tip: "pencere", baslik: "TCP/IPv4 Özellikleri", satirlar: [ { etiket: "IP adresi", deger: "192.168.1.2" }, { etiket: "Alt ağ maskesi", deger: "255.255.255.0" }, { etiket: "Tercih edilen DNS", deger: "192.168.1.254" } ] } },
      sag: { baslik: "nslookup", gorsel: { tip: "terminal", baslik: "İstemci · cmd", satirlar: ["> nslookup mail.okul.local", "Sunucu:  sunucu19", "Address:  192.168.1.254", "Ad:      mail.okul.local", "Address:  192.168.1.15", "> nslookup www.okul.local", "Ad:      okul.local", "Address:  192.168.1.5", "Aliases:  www.okul.local"] } },
      ok: "➜" },
    metin: "<b>nslookup</b>: DNS sorgular. <b>ipconfig /displaydns</b>: önbelleği gösterir. <b>ipconfig /flushdns</b>: önbelleği temizler." },

  { tur: "test", sorular: [
    { soru: "📖 Ana bilgisayar (host) kaydı için hangisi doğrudur?", secenekler: ["Alan adının bulunduğu DNS sunucusu adını tutar", "Ana bilgisayar adı ve eşleşen IP adresini tutar", "Takma isim kaydını tutar", "Mail sunucusunun kaydını tutar", "İstemci belleğinde kalma süresini belirler"], dogru: 1 },
    { soru: "📖 DNS bilgilerini sorgulamak için gereken komut hangisidir?", secenekler: ["ipconfig", "ipconfig /flushdns", "nslookup", "ping", "tracert"], dogru: 2 },
    { soru: "www.okul.local adının okul.local kaydına yönlenmesini sağlayan kayıt hangisidir?", secenekler: ["A", "MX", "CNAME", "NS"], dogru: 2 },
    { soru: "İstemcinin DNS önbelleğini temizleyen komut hangisidir?", secenekler: ["ipconfig /displaydns", "ipconfig /flushdns", "ipconfig /renew", "nslookup"], dogru: 1 },
    { soru: "Kâr amacı gütmeyen kuruluşlar hangi uzantıyı kullanır?", secenekler: [".com", ".org", ".gov", ".mil"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Gerçek DNS kayıtları",
    adimlar: ["Kendi bilgisayarında: <code>nslookup meb.gov.tr</code>", "<code>nslookup -type=mx gmail.com</code>: Gmail'in mail sunucuları hangileri?", "<code>nslookup -type=ns tr</code>: .tr uzantısından hangi sunucular sorumlu?"],
    not: "Bir adresi yazdığında tarayıcın önce DNS'e sorar; DNS cevap vermezse “Sunucu bulunamadı” hatası alırsın." }

]};
