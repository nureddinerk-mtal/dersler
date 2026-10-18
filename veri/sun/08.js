// SUN · 08 · Sanal sunucu yönetimi ve Hyper-V kurulumu  (Kitap s. 116–128)
var KATMAN = (hiper) => `<svg viewBox="0 0 220 170" style="max-width:240px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="12" text-anchor="middle">
  ${hiper ? `
  <rect x="10" y="10" width="62" height="60" rx="5" fill="#e3f0fb" stroke="#2d9cdb"/><text x="41" y="36">Ana</text><text x="41" y="52">işletim s.</text>
  <rect x="79" y="10" width="62" height="60" rx="5" fill="#efe3fb" stroke="#9b51e0"/><text x="110" y="36">Sanal</text><text x="110" y="52">sunucu 1</text>
  <rect x="148" y="10" width="62" height="60" rx="5" fill="#efe3fb" stroke="#9b51e0"/><text x="179" y="36">Sanal</text><text x="179" y="52">sunucu 2</text>
  <rect x="10" y="78" width="200" height="34" rx="5" fill="#fde9c9" stroke="#e0a800"/><text x="110" y="100" font-weight="700">Hipervizör</text>` : `
  <rect x="79" y="10" width="62" height="34" rx="5" fill="#efe3fb" stroke="#9b51e0"/><text x="110" y="31">Sanal 1</text>
  <rect x="148" y="10" width="62" height="34" rx="5" fill="#efe3fb" stroke="#9b51e0"/><text x="179" y="31">Sanal 2</text>
  <rect x="79" y="48" width="131" height="26" rx="5" fill="#fde9c9" stroke="#e0a800"/><text x="144" y="65">Sanallaştırma programı</text>
  <rect x="10" y="10" width="62" height="64" rx="5" fill="#e3f0fb" stroke="#2d9cdb"/><text x="41" y="46">Uygulama</text>
  <rect x="10" y="78" width="200" height="34" rx="5" fill="#e3f0fb" stroke="#2d9cdb"/><text x="110" y="100" font-weight="700">Ana işletim sistemi</text>`}
  <rect x="10" y="120" width="200" height="40" rx="5" fill="#ddd" stroke="#888"/><text x="110" y="145" font-weight="700">Donanım</text>
</svg>`;
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "2. birim. Sanallaştırma: fiziksel ortamın yazılımla benzerini oluşturmak. Sunucu sanallaştırma: tek bilgisayarda birden çok sunucu işletim sistemi. Faydaları: enerji tasarrufu, farklı işletim sistemleri, tek maliyete çok sunucu, merkezî yönetim, kolay yedek/geri yükleme, kolay taşıma. Hyper-V rolü ilk 2008'de. Klasik sanallaştırma programı ana işletim sisteminin üstünde çalışır (performans kaybı); Hyper-V kurulunca donanımın üstüne <b>hipervizör</b> katmanı gelir, ana işletim sistemi de sanallar gibi donanıma hipervizör üzerinden erişir. Kurulum (1. Uygulama): Rol ve özellik ekle → Hyper-V → Özellik Ekle → bilgi → sanal anahtar (boş geç) → geçiş (boş geç) → varsayılan depolama konumu → Yükle → (yeniden başlatma) → Kapat. Hyper-V Yöneticisi: Araçlar → Hyper-V Yöneticisi; sol: sunucu adı, orta: sanal makineler, sağ: Eylemler. Yeni → Sanal Makine sihirbazı: ad ve konum → nesil (1. Nesil 32/64 bit, eski sürümlerle uyumlu; 2. Nesil 64 bit, yeni özellikler; sonradan değişmez) → bellek → ağ (sonra) → sanal sabit disk (ad, konum, boyut) → yükleme seçenekleri (ISO, disket ya da “daha sonra yükle”) → Son. Tablo 2.1 sunucu eylemleri. SS1: 40 GB disk, 2048 MB RAM, 2. Nesil.",
    akis: ["Sanallaştırma ve faydaları", "Klasik program ve hipervizör (katman şeması)", "VMware içinde Hyper-V: hazırlık", "1. Uygulama: Hyper-V rolü", "Hyper-V Yöneticisi ve Yeni Sanal Makine sihirbazı", "Sıra Sizde 1", "Test"],
    hatalar: ["<b>En kritik nokta</b>: Hyper-V, VMware içindeki sunucuya ancak iç içe sanallaştırma açıksa kurulur. Sanal makine kapalıyken VMware → VM → Settings → Processors → <b>“Virtualize Intel VT-x/EPT or AMD-V/RVI”</b> işaretlenmeli. İşaretli değilse sihirbaz “İşlemcide gerekli sanallaştırma yetenekleri yok” der.", "Bu kutu işaretliyken sanal makine açılmıyorsa laboratuvar bilgisayarının kendisinde Hyper-V, “Sanal Makine Platformu” ya da “Çekirdek yalıtımı / Bellek bütünlüğü” açıktır. Bunlar kapatılıp bilgisayar yeniden başlatılmalı (Deep Freeze çözülmüşken). BIOS'ta Intel VT-x / AMD-V açık olmalı.", "İç içe sanallaştırma için sunucu sanal makinesine en az 4 GB, mümkünse 6–8 GB RAM verin; içteki sanal makineye 1–2 GB.", "Kitapta Sıra Sizde 1 ve 3'te “2048 GB RAM” yazıyor: doğrusu <b>2048 MB</b> (2 GB).", "Kurulum sonunda sunucu yeniden başlar; öğrenciler sihirbaz kapanınca bitti sanır.", "Tablo 2.1'de “Görününüm” yazım hatası: Görünüm."],
    sorular: [["VMware de bir sanallaştırma programı değil mi?", "Evet. VMware Workstation klasik türdür (işletim sisteminin üstünde çalışır). Hyper-V ise hipervizörü donanımın hemen üstüne koyar."], ["1. Nesil mi 2. Nesil mi?", "Windows Server 2019 ikisinde de çalışır. Yeni kurulumlarda 2. Nesil önerilir; eski ya da 32 bit sistemler için 1. Nesil."]],
    not: "İç içe sanallaştırma laboratuvarda çalışmazsa: Hyper-V rolünü kurma adımlarını gösterin, sanal makine oluşturma kısmını VMware'in kendi “New Virtual Machine” sihirbazıyla karşılaştırarak anlatın (adımlar çok benzer)." },

  { tur: "bilgi", baslik: "Sunucu sanallaştırma",
    metin: "Tek bilgisayarda <b>birden fazla sunucu işletim sistemi</b> çalıştırmak.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "⚡ Enerji tasarrufu" }, { ust: "🧩 Farklı işletim sistemleri" }, { ust: "💰 Tek maliyete çok sunucu" }, { ust: "🎛️ Merkezî yönetim" }, { ust: "💾 Kolay yedekleme" }, { ust: "🚚 Kolay taşıma" } ] } },

  { tur: "bilgi", baslik: "Hipervizör",
    gorsel: { tip: "ikili",
      sol: { baslik: "Klasik sanallaştırma programı", gorsel: { tip: "html", icerik: KATMAN(false) } },
      sag: { baslik: "Hyper-V", gorsel: { tip: "html", icerik: KATMAN(true) } },
      ok: "➜" },
    metin: "Hyper-V kurulunca donanımın üstüne <b>hipervizör</b> katmanı gelir. Sanal sunucular donanımı ana işletim sistemiyle aynı düzeyde, performans kaybı olmadan kullanır." },

  { tur: "uygulama", baslik: "1. Uygulama · Hyper-V rolünü kur",
    metin: "Sunucuna Hyper-V rolünü kur.",
    gorsel: { tip: "pencere", baslik: "Sunucu Yöneticisi", sol: ["Pano", "Yerel Sunucu", "Tüm Sunucular", "Dosya ve Depolama Hizmetleri", "Hyper-V*"], satirlar: [ { baslik: "SUNUCULAR" }, { tablo: { sutunlar: ["Sunucu Adı", "Yönetilebilirlik"], satirlar: [["SUNUCU19", "Çevrimiçi"]] } } ] },
    adimlar: ["VMware'de sanal makine kapalıyken: Settings → Processors → <b>Virtualize Intel VT-x/EPT</b> işaretli olsun.", "Rol ve özellik ekle → Rol tabanlı → Sunucu19.", "<b>Hyper-V</b>'yi işaretle → Özellik Ekle → İleri.", "Sanal anahtar ve geçiş sayfalarını boş geç.", "Varsayılan depolama konumunu bırak → Yükle.", "Sunucu yeniden başlayınca solda Hyper-V var mı?"],
    kitap: "s. 118–122 · 1. Uygulama" },

  { tur: "bilgi", baslik: "Yeni Sanal Makine Sihirbazı",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🗂️", yazi: "Araçlar → Hyper-V Yöneticisi" },
      { simge: "🖱️", yazi: "Sunucuya sağ tık", alt: "Yeni → Sanal Makine" },
      { simge: "🏷️", yazi: "Ad ve konum" },
      { simge: "🧬", yazi: "Nesil", alt: "1 ya da 2 · sonra değişmez" },
      { simge: "🧠", yazi: "Bellek" },
      { simge: "🔌", yazi: "Ağ", alt: "sonra da olur" },
      { simge: "💽", yazi: "Sanal sabit disk" },
      { simge: "💿", yazi: "Yükleme seçeneği", alt: "ISO ya da sonra" }
    ]},
    not: "<b>1. Nesil</b>: 32 ve 64 bit, eski Hyper-V sürümleriyle uyumlu. <b>2. Nesil</b>: 64 bit, yeni özellikler." },

  { tur: "bilgi", baslik: "Sunucu eylemleri",
    gorsel: { tip: "tablo", ad: "Tablo 2.1 (kısaltılmış)", sutunlar: ["Eylem", "Ne yapar?"], satirlar: [
      ["Yeni", "yeni sanal makine"], ["Sanal Makineyi Al", "dışarıdan sanal makine ekler"], ["Hyper-V Ayarları", "yönetici ayarları"],
      ["Sanal Anahtar Yöneticisi", "sanal ağ, internet bağlantısı"], ["Sanal SAN Yöneticisi", "sanal depolama alan ağı"], ["Diski Düzenle / İncele", "sanal disk sıkıştır, genişlet / bilgisi"],
      ["Hizmeti Durdur", "Hyper-V hizmetini durdurur"], ["Yenile", "listeyi yeniler"]] } },

  { tur: "odev", baslik: "1. Sıra Sizde · İlk sanal makine",
    metin: "Hyper-V Yöneticisi'nde <b>40 GB</b> sabit diskli, <b>2048 MB</b> RAM'li, <b>2. Nesil</b> bir sanal makine oluştur.",
    gorsel: { tip: "pencere", baslik: "Hyper-V Yöneticisi", menu: ["Dosya", "Eylem", "Görünüm", "Yardım"], sol: ["Hyper-V Yöneticisi", "SUNUCU19*"], satirlar: [ { baslik: "Sanal Makineler" }, { tablo: { sutunlar: ["Ad", "Durum", "Bellek"], satirlar: [["SanalSunucu1", "Kapalı", "2048 MB"]] } } ] },
    kitap: "s. 128",
    not: "Kitapta “2048 GB” yazıyor; doğrusu 2048 MB." },

  { tur: "test", sorular: [
    { soru: "📖 Hyper-V kurulduktan sonra sanal işletim sistemleri hangi katman üzerinde çalışır?", secenekler: ["Ana işletim sistemi", "Donanım", "Hipervizör", "Sanallaştırma", "Uygulama"], dogru: 2 },
    { soru: "📖 Yeni sanal makine oluştururken 1. Nesilde olup 2. Nesilde olmayan bileşen hangisidir?", secenekler: ["Disket sürücüsü", "Bellek", "DVD sürücüsü", "Güvenlik", "İşlemci"], dogru: 0 },
    { soru: "Sanal makinenin hangi özelliği oluşturulduktan sonra değiştirilemez?", secenekler: ["Bellek", "Disk boyutu", "Nesil", "Ağ bağdaştırıcısı"], dogru: 2 },
    { soru: "Hangisi sunucu sanallaştırmanın faydalarından biri değildir?", secenekler: ["Enerji tasarrufu", "Kolay taşıma", "Her sanal makineye ayrı fiziksel bilgisayar gerekmesi", "Merkezî yönetim"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Bulut da sanallaştırmadır",
    metin: "Azure, AWS, Google Cloud gibi bulut hizmetlerinde “sunucu kiralamak” aslında veri merkezindeki büyük bir fiziksel sunucunun içinde çalışan bir <b>sanal makine</b> almaktır. Azure'un altında Hyper-V'nin bir türevi çalışır.",
    not: "Bir bulut sağlayıcısının en küçük sanal sunucusunun aylık fiyatını araştır." }

]};
