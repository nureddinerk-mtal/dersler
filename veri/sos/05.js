// SOS · 05 · E-ticaret altyapısı ve hazır yazılım paketleri  (Kitap s. 48–56)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.4: Ürünler, kişisel bilgiler, ödemeler: altyapı güvenlik için kritik; tutarsızlık, kopuk bağlantı, ödeme hatası güveni sarsar. Altyapı = <b>donanım + yazılım + ağ</b>; biri aksarsa sistem durur. Donanım: cihazlar (bilgisayar, yedekleme ve güç üniteleri, hub, yönlendirici, veri merkezi), sunucular (veri tabanı, dosya, DNS, web, uygulama, e-posta, oyun, proxy, VPN). Yazılım: yönetim yazılımları, analitik araçlar, middleware (aracı; tek başına işlem yapmaz), API (dışarıdan kısıtlı erişim arayüzü). Ağ: internet bağlantısı, güvenlik duvarı, güvenlik hizmetleri, yük dengeleyici, DNS. Altyapı seçimi: <b>satın alma</b> (kendi donanımı ve teknik personeli, bağımsız, zamanla amorti), <b>kiralama</b> (teknik personel gerekmez, firmaya bağımlılık; orta ölçek), <b>pazar yerine üyelik</b> (küçük girişimci; ürün başına komisyon). Sıra Sizde: Tablo 1.4'teki 6 girişime yöntem seç. Seçim ölçütleri: esnek, kullanılabilir, ölçeklenebilir, güvenlik, planlama-yönetim, hedef kitleye ulaşma, maliyet, ürün miktarı, 7/24 destek, SEO. Hazır paketler: ücretsiz (açık kaynak; yarı açık/kapalı), ücretli (kiralama; satın alma), firmaya özel (yazılım firmasına yaptırma; kendi yazılımcılarıyla).",
    akis: ["Altyapı neden önemli?", "Donanım, yazılım, ağ", "Sunucu türleri", "Satın al / kirala / pazar yeri", "Sıra Sizde: Tablo 1.4", "Seçim ölçütleri", "Hazır yazılım paketleri", "Test"],
    hatalar: ["Kitap satın almada “Genellikle büyük ölçekli firmaların tercihi bu yönde olmaz” diyor; anlam olarak “olur” olmalı (bağımsızlık ve veri kontrolü büyük firmaların tercihi).", "11D Ağ İşletmenliği öğrencileri sunucu, DNS, güvenlik duvarı ve yük dengeleyiciyi Sunucu İşletim Sistemleri dersinden biliyor; bağ kurun.", "Kitapta alt başlık numaraları (1.1.1.1 …) tekrar ediyor; sayfa numarasıyla yönlendirin."],
    sorular: [["Middleware ile API farkı?", "Middleware arada aracı katmandır, tek başına iş yapmaz; API bir sistemin yeteneklerine dışarıdan kurallı erişim sağlayan arayüzdür."], ["Babaannesinin salçasını satan girişimci hangi altyapıyı seçmeli?", "Az ürün, teknik bilgi yok: pazar yerine üyelik mantıklı."]] },

  { tur: "bilgi", baslik: "Altyapının üç ayağı",
    gorsel: { tip: "agac", kok: { ad: "🛒 E-ticaret altyapısı", cocuklar: [
      { ad: "🖥️ Donanım", alt: "cihazlar, sunucular" },
      { ad: "💾 Yazılım", alt: "yönetim, analitik, middleware, API" },
      { ad: "🌐 Ağ", alt: "internet, güvenlik duvarı, yük dengeleyici, DNS" } ] } },
    metin: "Üçü uyumlu çalışmalı. Biri aksarsa sistem durur." },

  { tur: "bilgi", baslik: "Sunucular",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🗄️ Veri tabanı" }, { ust: "📁 Dosya" }, { ust: "🧭 DNS" }, { ust: "🌐 Web" }, { ust: "⚙️ Uygulama" }, { ust: "✉️ E-posta" }, { ust: "🎮 Oyun" }, { ust: "🔀 Proxy" }, { ust: "🔒 VPN" } ] },
    metin: "Kesintisiz çalışır; birden çok işlemci, disk ve ağ bağlantısı vardır, aynı anda birçok kullanıcıya hizmet verir." },

  { tur: "bilgi", baslik: "Yazılım ve ağ bileşenleri",
    gorsel: { tip: "tablo", sutunlar: ["Bileşen", "Görevi"], satirlar: [
      ["Yönetim yazılımları", "içerik, müşteri, personel, stok, mali durum, lojistik"],
      ["Analitik araçlar", "en çok satılan, incelenen, yorumlanan ürünler"],
      ["Middleware (ara uygulama)", "kullanıcı ile sunucu arasında aracı; tek başına iş yapmaz"],
      ["API", "bir sistemin özelliklerine dışarıdan kurallı erişim"],
      ["Yük dengeleyici", "isteği sunucular arasında paylaştırır"],
      ["DNS", "alan adını IP adresine çevirir"]] } },

  { tur: "bilgi", baslik: "Altyapıyı nasıl edinirim?",
    gorsel: { tip: "tablo", sutunlar: ["", "💰 Satın alma", "📅 Kiralama", "🏪 Pazar yerine üyelik"], satirlar: [
      ["Kim tercih eder?", "büyük firma", "orta ölçekli firma", "küçük girişimci"],
      ["Teknik personel", "gerekir", "gerekmez", "gerekmez"],
      ["Bağımlılık", "yok", "hizmet firmasına", "pazar yerine"],
      ["Maliyet", "başta yüksek, zamanla amorti", "aylık kira", "ürün başına komisyon"]] } },

  { tur: "odev", baslik: "Sıra Sizde · Tablo 1.4",
    metin: "Altı girişimci için hangi altyapı yöntemini, neden seçerdin? Tablo 1.4'teki boşlukları doldur.",
    gorsel: { tip: "tablo", sutunlar: ["Girişim", "Yöntem", "Neden?"], satirlar: [
      ["Mağazaları ve dağıtım ağı olan küçük ev aletleri fabrikası", "…", "…"],
      ["Babaannesinin ev yapımı gıdalarını satan girişimci", "…", "…"],
      ["Doğal malzemeden el yapımı süs eşyası yapan girişimci", "…", "…"],
      ["3000 çeşit ithal oyuncağı olan, teknik bilgisi olmayan toptancı", "…", "…"],
      ["Yöresel ürün satan mahalle esnafı", "…", "…"],
      ["Yüzlerce çeşit yedek parça satan oto sanayi işletmesi", "…", "…"]] },
    kitap: "s. 52" },

  { tur: "bilgi", baslik: "Doğru altyapı nasıl olmalı?",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🤸 Esnek" }, { ust: "✅ Kullanılabilir" }, { ust: "📈 Ölçeklenebilir" }, { ust: "🛡️ Güvenlik" }, { ust: "🗂️ Planlama ve yönetim" }, { ust: "🎯 Hedef kitleye ulaşma" }, { ust: "💰 Maliyet" }, { ust: "📦 Ürün miktarı" }, { ust: "🎧 7/24 destek" }, { ust: "🔍 SEO" } ] } },

  { tur: "bilgi", baslik: "Hazır yazılım paketleri",
    gorsel: { tip: "tablo", sutunlar: ["Paket", "Artı", "Eksi"], satirlar: [
      ["🆓 Açık kaynak", "giriş maliyeti yok, esnek tasarım", "güvenlik ve teknik destek sende"],
      ["🆓 Yarı açık / kapalı kaynak", "giriş maliyeti yok/düşük, güncelleme var", "teknik maliyet, ekstra ücretler"],
      ["💳 Ücretli · kiralama", "teknik bilgi gerekmez; bakım, güvenlik firmada", "esneklik ve entegrasyon sınırlı"],
      ["💳 Ücretli · satın alma", "esnek, tam entegrasyon", "giriş maliyeti yüksek; bakım sende"],
      ["🏢 Firmaya özel (yazılım firması)", "esnek, tam entegrasyon", "maliyet yüksek, firmaya bağımlı"],
      ["👩‍💻 Kendi yazılımcılarınla", "tam bağımsız", "teknik ekip ve yüksek ilk maliyet"]] } },

  { tur: "test", sorular: [
    { soru: "E-ticaret altyapısının üç temel unsuru hangileridir?", secenekler: ["Ürün, kargo, ödeme", "Donanım, yazılım, ağ", "SEO, SEM, CRM", "Banka, kurye, müşteri"], dogru: 1 },
    { soru: "Gelen istekleri sunucular arasında paylaştırarak performansı artıran ağ bileşeni hangisidir?", secenekler: ["DNS", "Yönetim yazılımı", "API", "Yük dengeleyici"], dogru: 3 },
    { soru: "Teknik personeli olmayan, çok az ürünü olan küçük girişimciye en uygun altyapı yöntemi hangisidir?", secenekler: ["Pazar yerine üyelik", "Satın alma", "Kendi yazılımcılarıyla paket", "Firmaya özel yazılım"], dogru: 0 },
    { soru: "Açık kaynak kodlu pakette güvenlikten kim sorumludur?", secenekler: ["Pazar yeri", "Banka", "Kullanıcı", "Kargo firması"], dogru: 2 },
    { soru: "Yeni donanım ve yazılım eklendiğinde ve yük arttığında çökmeyen altyapı hangi özelliğe sahiptir?", secenekler: ["Ücretsiz", "Ölçeklenebilir", "Kapalı kaynak", "Warez"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Bulut",
    metin: "Bugün birçok e-ticaret sitesi kendi sunucusunu almak yerine bulut hizmetlerinden saatlik ödemeyle sunucu kiralar. İndirim günlerinde birkaç dakikada yüzlerce sunucu açıp gece kapatabilir. Bu, kitaptaki üç yöntemden hangisine benziyor? Hangi ölçüt (esnek, ölçeklenebilir, …) en çok öne çıkıyor?" }

]};
