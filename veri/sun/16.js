// SUN · 16 · DNS 2: ikincil bölge, geriye doğru arama, ileticiler  (Kitap s. 205–215)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.4.4 İkincil bölge: birincil bölgenin kopyasıyla çalışan bölge, bağımlı (ikinci) sunucuda: Yeni Bölge → İkincil bölge → birincil bölgeyle aynı ad → ana DNS sunucusunun IP'si. Ana sunucuda bölge özellikleri → <b>Bölge Aktarmaları</b> → Bölge aktarmasına izin ver → Herhangi bir sunucuya / Yalnızca aşağıdaki sunuculara → Düzenle. Bağımlıda: “Ana sunucudan aktar”. İkincil bölgede kayıt değiştirilemez, eklenemez. 3.4.5 Geriye doğru arama: IP → ad; Yeni Bölge → Birincil → IPv4 Geriye Doğru Arama Bölgesi → ağ kimliği (192.168.1) → işaretçi kaydı <b>PTR</b>; A kaydı oluştururken “İlişkilendirilmiş işaretçi (PTR) kaydı oluştur” ile de yapılır; nslookup 192.168.1.5 ile sorgulanır. 3.4.6 Koşullu ileticiler: belirli bir bölgenin sorgularını başka DNS'e yönlendirir (1. DNS'te firma.local yok → 2. DNS'e sorar). Yeni Koşullu İletici → bölge adı + DNS IP. İleticiler (DNS sunucu özellikleri): kendinde olmayan tüm sorguları başka DNS'e iletir. Sunucu önbelleğini temizlemek: <b>dnscmd /clearcache</b>. 7. Uygulama: turkiye.local; web .10, ftp .15, mail .20 (192.168.5.x); 7 bölge adı CNAME → web.turkiye.local; mail için MX; istemci DNS; nslookup ile kontrol. Birim testi anahtarı: 1B 2B 3C 4E 5C 6A 7A 8E 9B 10C.",
    akis: ["İkincil bölge ve bölge aktarımı (iki sunucu gerekir)", "Geriye doğru arama ve PTR", "Koşullu ileticiler ve ileticiler", "7. Uygulama: turkiye.local (bütün DNS tekrar)", "Birim testi"],
    hatalar: ["İkincil bölge ve koşullu iletici için <b>ikinci bir DNS sunucusu</b> gerekir (ikinci Windows Server sanal makinesi). Laboratuvar RAM'i yetmezse bu kısmı gösterip öğrencilere 7. Uygulamayı yaptırın.", "7. Uygulamadaki IP'ler (192.168.5.x) sunucunun ağında olmak zorunda değil: DNS sadece adı IP'ye çevirir; nslookup ile kontrol edilir.", "Bölge aktarımında “Yalnızca Ad Sunucuları sekmesinde listelenen sunuculara” seçiliyse ikinci sunucu NS listesinde olmalı; kolaylık için “Herhangi bir sunucuya” seçilebilir (güvenli değil, sadece laboratuvarda).", "Kitap “İkinci bölge özellikler menüsünden” diyor: “İkincil”."],
    sorular: [["İkincil bölge neden var?", "Ana DNS çökerse ikincil sunucu cevap vermeye devam eder; yük de iki sunucu arasında paylaşılır."], ["Geriye doğru arama ne işe yarar?", "Günlüklerde (log) görünen bir IP'nin hangi bilgisayara ait olduğunu bulmak için; bazı mail sunucuları da gönderenin PTR kaydına bakar."]],
    not: "nslookup'ta tür seçmek: <code>nslookup</code> → <code>set type=mx</code> → <code>turkiye.local</code>." },

  { tur: "bilgi", baslik: "İkincil bölge",
    gorsel: { tip: "akis", adimlar: [ { simge: "🅰️", yazi: "Ana DNS", alt: "birincil: okul.local" }, { simge: "🔁", yazi: "Bölge aktarımı", alt: "izin ver" }, { simge: "🅱️", yazi: "Bağımlı DNS", alt: "ikincil: okul.local (kopya)" } ] },
    metin: "Ana sunucudaki kayıtların <b>kopyası</b>; ikincil bölgede kayıt değiştirilemez, eklenemez.",
    not: "Ana sunucu: bölge Özellikler → <b>Bölge Aktarmaları</b> → izin ver. Bağımlı sunucu: Yeni Bölge → İkincil → aynı ad → ana sunucu IP'si → “Ana sunucudan aktar”." },

  { tur: "bilgi", baslik: "Geriye doğru arama: IP → ad",
    gorsel: { tip: "ikili",
      sol: { baslik: "İleriye doğru", gorsel: { tip: "kartlar", kartlar: [ { ust: "mail.okul.local → 192.168.1.15", alt: "A kaydı" } ] } },
      sag: { baslik: "Geriye doğru", gorsel: { tip: "kartlar", kartlar: [ { ust: "192.168.1.15 → mail.okul.local", alt: "PTR kaydı" } ] } },
      ok: "⇄" },
    metin: "Yeni Bölge → Birincil → <b>IPv4 Geriye Doğru Arama Bölgesi</b> → ağ kimliği (192.168.1) → Yeni İşaretçi (PTR).",
    not: "A kaydı oluştururken “İlişkilendirilmiş işaretçi (PTR) kaydı oluştur” işaretlenirse PTR kendiliğinden oluşur." },

  { tur: "bilgi", baslik: "Koşullu ileticiler",
    gorsel: { tip: "html", icerik: `<svg viewBox="0 0 440 150" style="max-width:500px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="12" text-anchor="middle">
      <defs><marker id="okd" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2d9cdb"/></marker></defs>
      <text x="45" y="70" font-size="34">💻</text><text x="45" y="100">İstemci</text>
      <rect x="140" y="40" width="110" height="60" rx="6" fill="#e3f0fb" stroke="#2d9cdb"/><text x="195" y="64" font-weight="700">1. DNS</text><text x="195" y="82">firma.local yok</text>
      <rect x="320" y="40" width="110" height="60" rx="6" fill="#e3f6e3" stroke="#27ae60"/><text x="375" y="64" font-weight="700">2. DNS</text><text x="375" y="82">firma.local var</text>
      <line x1="75" y1="62" x2="135" y2="62" stroke="#2d9cdb" stroke-width="2" marker-end="url(#okd)"/><line x1="250" y1="62" x2="315" y2="62" stroke="#2d9cdb" stroke-width="2" marker-end="url(#okd)"/>
      <text x="283" y="54">koşullu iletim</text><text x="105" y="54">soru</text>
    </svg>` },
    metin: "<b>Koşullu iletici</b>: belirli bir bölgenin sorularını başka bir DNS'e sorar. <b>İleticiler</b>: kendinde olmayan <b>tüm</b> soruları başka DNS'e iletir.",
    not: "Sunucu önbelleğini temizlemek: <code>dnscmd /clearcache</code>." },

  { tur: "uygulama", baslik: "7. Uygulama · turkiye.local",
    metin: "Sunucunda aşağıdaki DNS bölgesini kur ve istemciden nslookup ile kontrol et.",
    gorsel: { tip: "pencere", baslik: "DNS Yöneticisi · turkiye.local", sol: ["İleriye Doğru Arama Bölgeleri", "turkiye.local*"], satirlar: [
      { tablo: { sutunlar: ["Ad", "Tür", "Veri"], satirlar: [
        ["web", "Ana Bilgisayar (A)", "192.168.5.10"], ["ftp", "Ana Bilgisayar (A)", "192.168.5.15"], ["mail", "Ana Bilgisayar (A)", "192.168.5.20"],
        ["marmara, ege, akdeniz, karadeniz, icanadolu, doguanadolu, gdoguanadolu", "Diğer Ad (CNAME)", "web.turkiye.local."], ["(üst klasörle aynı)", "Posta Değiştirici (MX)", "[10] mail.turkiye.local."]] } }
    ] },
    adimlar: ["<b>turkiye.local</b> birincil ileri arama bölgesini oluştur.", "web, ftp, mail A kayıtlarını ekle.", "Yedi bölge adı için CNAME kaydı ekle → web.turkiye.local.", "mail.turkiye.local için MX kaydı ekle.", "İstemcinin DNS'ini sunucunun IP'si yap.", "nslookup ile A, CNAME ve MX kayıtlarını sırayla sorgula."],
    kitap: "s. 212–213 · 7. Uygulama" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 Yerel kullanıcıların klasördeki hakları hangi sekmeden belirlenir?", secenekler: ["Genel", "Güvenlik", "Paylaşım", "Önceki sürümler", "Özelleştir"], dogru: 1 },
    { soru: "📖 Kalıtım için hangisi söylenemez?", secenekler: ["Klasörü oluşturan Users kullanıcıları kalıtımı düzenleyebilir.", "Tüm klasörlerde kalıtımı düzenlemek için Users grubu kullanıcısı olmak yeterlidir.", "Tüm klasörlerde kalıtımı Administrator düzenleyebilir.", "Üst dizinlerden gelen yetkiler alt dizinlere geçer.", "Users üyesinin kalıtımı düzenlemesi için Tam Denetim gerekir."], dogru: 1 },
    { soru: "📖 Klasörler için kullanıcıların varsayılan paylaşım izni hangisidir?", secenekler: ["Değiştirme", "Silme", "Okuma", "Tam Denetim", "Yazma"], dogru: 2 },
    { soru: "📖 192.168.1.3 IP'li bilgisayarın paylaşımlarına erişmek için ne yapılır?", secenekler: ["Arama motorunda aratılır", "İnternet adres çubuğuna 192.168.1.3 yazılır", "İnternet adres çubuğuna \\\\192.168.1.3 yazılır", "Klasör adres çubuğuna 192.168.1.3 yazılır", "Klasör adres çubuğuna \\\\192.168.1.3 yazılır"], dogru: 4 },
    { soru: "📖 Ağda yabancı cihazlar varsa hangi güvenlik duvarı profili seçilmelidir?", secenekler: ["Güvenli ağlar", "Güvensiz ağlar", "Konuk veya ortak ağlar", "Özel ağlar", "Standart ağlar"], dogru: 2 },
    { soru: "📖 Yeni bir DHCP havuzu oluşturmak için kullanılan seçenek hangisidir?", secenekler: ["Yeni kapsam", "Yeni havuz", "Yeni kullanıcı", "Yeni DHCP", "Yeni dışlanmış adres"], dogru: 0 },
    { soru: "📖 IP verilmiş istemcileri listeleyen seçenek hangisidir?", secenekler: ["Adres kiraları", "Adres havuzu", "İzin verilenler listesi", "Kira süresi", "Yeni dışlanmış adres"], dogru: 0 },
    { soru: "📖 Kapsamdan bazı IP'lerin verilmesini engelleyen seçenek hangisidir?", secenekler: ["Varsayılan ağ geçidi", "DNS", "Kira süresi", "Adres havuzu", "Yeni dışlanmış adres"], dogru: 4 },
    { soru: "📖 Ana bilgisayar (host) kaydı için hangisi doğrudur?", secenekler: ["DNS sunucusu adını tutar", "Ana bilgisayar adı ve eşleşen IP'yi tutar", "Takma isim kaydını tutar", "Mail sunucusunu tutar", "Önbellekte kalma süresini belirler"], dogru: 1 },
    { soru: "📖 DNS bilgilerini sorgulamak için gereken komut hangisidir?", secenekler: ["ipconfig", "ipconfig /flushdns", "nslookup", "ping", "tracert"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Okulun DNS'i",
    adimlar: ["Okul bilgisayarında <code>ipconfig /all</code>: DNS sunucuları hangi adresler?", "<code>nslookup</code> yaz: varsayılan sunucunun adı ne?", "<code>tracert meb.gov.tr</code>: paketler kaç yönlendiriciden geçiyor?"],
    not: "Kurumlarda genellikle Active Directory ile birlikte kendi DNS sunucuları bulunur (sonraki birim)." }

]};
