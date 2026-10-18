// SUN · 14 · DHCP  (Kitap s. 179–192)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.3 DHCP: merkezî sunucunun istemcilerin IP yapılandırmasını otomatik vermesi (sunucu ya da yönlendirici yapabilir). Avantajlar: IP vermek için görevli gerekmez, kullanıcının IP bilgisi gerekmez, telefon/tablet kolay bağlanır, IP çakışmasını önler. Sunucu, yazıcı gibi sabit cihazlara DHCP önerilmez. 4 aşama: Keşif (Discover), Teklif (Offer), İstek (Request), Yanıt (Ack; kitap “Yanıt” diyor). IP alınamazsa APIPA (169.254.x.x). Rol: DHCP sunucusunun en az bir kartı sabit IP'li olmalı; Rol ekle → <b>DHCP Server</b> → Yükle → yapılandırmayı tamamla (DHCP Administrators, DHCP Users grupları). Araçlar → DHCP. Yeni Kapsam: IPv4 sağ tık → Yeni Kapsam → ad (“Yerel Ağ”) → başlangıç-bitiş IP + alt ağ maskesi → dışlamalar (ve gecikme ms) → kira süresi (sabit ortamlarda uzun, kafe/havalimanında kısa) → seçenekler: Yönlendirici (ağ geçidi), DNS, WINS → kapsamı etkinleştir. İstemci: IPv4 → Otomatik olarak bir IP adresi al; Ağ ve Paylaşım Merkezi → Bağdaştırıcı ayarları → Durum → Ayrıntılar. Komutlar: <b>ipconfig /all</b>, <b>ipconfig /release</b>, <b>ipconfig /renew</b>. Kapsam altında: Adres Havuzu, Adres Kiraları, Ayırmalar (MAC'e sabit IP), Kapsam Seçenekleri (Router = ağ geçidi), İlkeler, Filtreler (MAC izin/engel listesi). 6. Uygulama: sunucu 192.168.2.254; havuz 192.168.2.50–100; dışlama 55–60; maske /24; ağ geçidi 192.168.2.1; kira 3 sa 30 dk; DNS 8.8.8.8; WINS 192.168.2.254; istemci otomatik; release/renew/all.",
    akis: ["Hazırlık: Telefonun okul Wi-Fi'ında IP'yi nereden alıyor?", "DHCP'nin avantajları", "4 aşama (DORA)", "DHCP rolü kurulumu", "Yeni Kapsam sihirbazı", "İstemci: otomatik IP ve ipconfig", "Kapsam bölümleri: kiralar, ayırmalar, filtreler", "6. Uygulama", "Test"],
    hatalar: ["<b>VMware'in kendi DHCP'si</b> NAT ve Host-only ağlarda çalışır; istemci IP'yi sizin sunucudan değil VMware'den alır. İki makineyi bir <b>LAN Segment</b>'e alın ya da Edit → Virtual Network Editor'de ilgili ağın “Use local DHCP service” kutusunu kaldırın.", "<b>Kitap hatası (6. Uygulama)</b>: “Dağıtılamaz IP Adres Aralığı: 192.168.2.60-192.168.2.55” yazıyor; başlangıç küçük olmalı: <b>192.168.2.55 – 192.168.2.60</b>.", "6. Uygulamada sunucu IP'si 192.168.2.254 oluyor (önceki konularda 192.168.1.254 idi); istemcinin aynı ağa girdiğini kontrol edin.", "Kapsam oluşturulduktan sonra “Etkinleştir” yapılmazsa (kırmızı ok) IP dağıtılmaz.", "Kitap 3.3.6'da Filtreler örneğini anlatırken bir cümle 3.4.3'e de yanlışlıkla kopyalanmış (MAC adresi ve Win8)."],
    sorular: [["Kira süresi dolunca ne olur?", "İstemci süre bitmeden yenilemeyi ister; sunucu açıksa aynı IP uzar. Uzun süre bağlanmayan cihazın IP'si havuza döner."], ["169.254 ile başlayan IP neden çıkar?", "DHCP sunucusuna ulaşılamayınca Windows kendine APIPA adresi verir: ağda DHCP sorunu var demektir."]],
    not: "DORA kısaltması akılda kalır: Discover, Offer, Request, Acknowledge." },

  { tur: "bilgi", baslik: "DHCP",
    metin: "Sunucunun ağdaki cihazlara IP ayarlarını <b>otomatik</b> vermesi.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🙅 IP için görevli gerekmez" }, { ust: "🤷 Kullanıcı IP bilmese de olur" }, { ust: "📱 Telefon, tablet kolay bağlanır" }, { ust: "🚫 IP çakışmasını önler" } ] },
    not: "Sunucu, yazıcı gibi yeri ve görevi belli cihazlara DHCP önerilmez: sabit IP verilir." },

  { tur: "bilgi", baslik: "Dört aşama",
    gorsel: { tip: "akis", adimlar: [ { simge: "🔎", yazi: "Keşif", alt: "istemci: DHCP var mı?" }, { simge: "🙋", yazi: "Teklif", alt: "sunucu: IP verebilirim" }, { simge: "📨", yazi: "İstek", alt: "istemci: o IP'yi istiyorum" }, { simge: "✅", yazi: "Yanıt", alt: "sunucu: IP senin" } ] },
    not: "IP alınamazsa istemci kendine <b>APIPA</b> adresi (169.254.x.x) verir." },

  { tur: "bilgi", baslik: "Yeni Kapsam Sihirbazı",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🗂️", yazi: "Araçlar → DHCP", alt: "IPv4 sağ tık → Yeni Kapsam" },
      { simge: "🏷️", yazi: "Kapsam adı" },
      { simge: "↔️", yazi: "IP aralığı + maske" },
      { simge: "✂️", yazi: "Dışlamalar" },
      { simge: "⏳", yazi: "Kira süresi" },
      { simge: "🚪", yazi: "Yönlendirici (ağ geçidi)" },
      { simge: "📖", yazi: "DNS, WINS" },
      { simge: "▶️", yazi: "Kapsamı etkinleştir" }
    ]},
    not: "Kira süresi: ev ve ofiste uzun, kafe ve havalimanında kısa." },

  { tur: "bilgi", baslik: "İstemcide kontrol",
    gorsel: { tip: "terminal", baslik: "İstemci · cmd", satirlar: ["> ipconfig /release", "> ipconfig /renew", "> ipconfig /all", "   DHCP Etkin . . . . . : Evet", "   IPv4 Adresi  . . . . : 192.168.2.50(Tercih Edilen)", "   Alt Ağ Maskesi . . . : 255.255.255.0", "   Varsayılan Ağ Geçidi : 192.168.2.1", "   DHCP Sunucusu  . . . : 192.168.2.254", "   DNS Sunucuları . . . : 8.8.8.8"] },
    metin: "<b>/release</b>: IP'yi bırakır. <b>/renew</b>: yeniden ister. <b>/all</b>: tüm IP bilgilerini gösterir." },

  { tur: "bilgi", baslik: "Kapsamın bölümleri",
    gorsel: { tip: "pencere", baslik: "DHCP", sol: ["sunucu19", "IPv4", "Kapsam [192.168.2.0] Yerel Ağ", "Adres Havuzu", "Adres Kiraları*", "Ayırmalar", "Kapsam Seçenekleri", "İlkeler", "Filtreler"], satirlar: [
      { tablo: { sutunlar: ["İstemci IP", "Ad", "Kira bitişi"], satirlar: [["192.168.2.50", "istemci1", "18.10.2026 17:30"], ["192.168.2.51", "istemci2", "18.10.2026 17:32"]] } }
    ] },
    not: "<b>Adres Havuzu</b>: dağıtılacak ve dışlanan aralıklar. <b>Adres Kiraları</b>: IP almış istemciler. <b>Ayırmalar</b>: MAC adresine sabit IP. <b>Kapsam Seçenekleri</b>: ağ geçidi (Router), DNS. <b>Filtreler</b>: MAC adresine göre izin/engel." },

  { tur: "uygulama", baslik: "6. Uygulama · DHCP kur, IP dağıt",
    metin: "Sunucun aşağıdaki kapsamla IP dağıtsın; istemci otomatik IP alsın.",
    gorsel: { tip: "tablo", ad: "Kapsam", sutunlar: ["Ayar", "Değer"], satirlar: [
      ["Sunucu IP", "192.168.2.254 / 255.255.255.0"], ["Adres havuzu", "192.168.2.50 – 192.168.2.100"], ["Dışlanan aralık", "192.168.2.55 – 192.168.2.60"],
      ["Varsayılan ağ geçidi", "192.168.2.1"], ["Kira süresi", "0 gün 3 saat 30 dakika"], ["DNS", "8.8.8.8"], ["WINS", "192.168.2.254"]] },
    adimlar: ["Sunucunun IP'sini 192.168.2.254 yap.", "Rol ve özellik ekle → <b>DHCP Server</b> → Yükle → DHCP yapılandırmasını tamamla.", "Araçlar → DHCP → IPv4 → Yeni Kapsam: tablodaki değerleri gir, kapsamı etkinleştir.", "İstemcide IPv4 → Otomatik olarak bir IP adresi al.", "İstemci doğru IP'yi aldı mı? Sunucuda Adres Kiraları'na bak.", "İstemcide sırayla <code>ipconfig /release</code>, <code>/renew</code>, <code>/all</code>."],
    kitap: "s. 180–191 · 6. Uygulama",
    not: "Kitapta dışlanan aralık “60–55” diye ters yazılmış." },

  { tur: "test", sorular: [
    { soru: "📖 Yeni bir DHCP havuzu oluşturmak için kullanılan seçenek hangisidir?", secenekler: ["Yeni kapsam", "Yeni havuz", "Yeni kullanıcı", "Yeni DHCP", "Yeni dışlanmış adres"], dogru: 0 },
    { soru: "📖 DHCP sunucusunun IP verdiği istemcileri listeleyen seçenek hangisidir?", secenekler: ["Adres kiraları", "Adres havuzu", "İzin verilenler listesi", "Kira süresi", "Yeni dışlanmış adres"], dogru: 0 },
    { soru: "📖 Kapsamdan bazı IP'lerin verilmesini engellemek için hangi seçenek kullanılır?", secenekler: ["Varsayılan ağ geçidi", "DNS", "Kira süresi", "Adres havuzu", "Yeni dışlanmış adres"], dogru: 4 },
    { soru: "İstemcinin DHCP'den aldığı IP'yi bırakan komut hangisidir?", secenekler: ["ipconfig /all", "ipconfig /renew", "ipconfig /release", "ipconfig /flushdns"], dogru: 2 },
    { soru: "DHCP'nin dört aşamasından ilki hangisidir?", secenekler: ["Teklif", "Keşif", "İstek", "Yanıt"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Ayırma yap",
    adimlar: ["İstemcide <code>ipconfig /all</code> ile Fiziksel Adres'i (MAC) not et.", "Sunucuda Kapsam → Ayırmalar → Yeni Ayırma: MAC adresi ve 192.168.2.70.", "İstemcide release/renew: IP 192.168.2.70 oldu mu?"],
    not: "Yazıcılar ve ağ cihazları için sabit IP'yi DHCP ayırmasıyla vermek yönetimi kolaylaştırır." }

]};
