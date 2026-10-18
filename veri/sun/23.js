// SUN · 23 · Dosya hizmetleri: kota, dosya filtreleme  (Kitap s. 288–298)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "6. birim. 6.1: Dosya sunucusu: klasörleri toplayıp paylaştırma, kota, filtreleme, raporlama, yönlendirme, yedekleme. Rol: Rol ekle → <b>File and Storage Services</b> genişlet → File Server (paylaşım yapıldıysa zaten kurulu) + DFS Namespaces + DFS Replication + <b>File Server Resource Manager</b> → Yükle (1. Uygulama). Araç: Araçlar → File Server Resource Manager (Dosya Sunucusu Kaynak Yöneticisi). Kota yönetimi: paylaşılan klasörlerin veri kapasitesini sınırlamak. Kota Şablonları (hazır); Kota Şablonu Oluştur: ad, açıklama, sınır, <b>Sabit kota</b> (aşılamaz) / <b>Esnek kota</b> (aşılır, raporlanır), eşik bildirimleri (e-posta, olay günlüğü, komut, rapor). 2. Uygulama: 500 MB sabit kota şablonu. Kotalar → Kota Oluştur: kota yolu; “Yol üzerinde kota oluştur” / “Şablonu otomatik uygula, var olan ve yeni alt klasörlerde kotalar oluştur”; şablondan türet / özel kota. 3. Uygulama: C:\\Anadolu, paylaşımda Everyone okuma-yazma, 500 MB şablonu uygula, istemciden 500 MB'tan fazla kopyalamayı dene. Dosya Filtreleme Yönetimi: Dosya Grupları (uzantı listeleri; *.doc, *.docx), Dosya Filtresi Şablonları, Dosya Filtreleri (klasöre uygulama). 4. Uygulama: Kelime İşlem Dosyaları (*.doc, *.docx), Elektronik Tablo Dosyaları (*.xls, *.xlsx) grupları. 5. Uygulama: “Kelime İşlem Dosyalarını Engelle” şablonu, C:\\Anadolu'ya uygula, istemciden .docx kopyalamayı dene.",
    akis: ["Hazırlık: Sunucu arızasında dosyalara erişim nasıl korunur?", "Dosya ve depolama rolü (1. Uygulama)", "File Server Resource Manager", "Kota: sabit / esnek (2–3. Uygulama)", "Dosya filtreleme: grup, şablon, filtre (4–5. Uygulama)", "Test"],
    hatalar: ["500 MB'ı aşmak için büyük bir dosya gerekir; istemcide <code>fsutil file createnew test.bin 600000000</code> komutuyla 600 MB'lık boş dosya oluşturup kopyalatın (yönetici komut istemi).", "Kota, paylaşım ve NTFS izinlerinin yanında çalışır; Everyone'a yazma izni verilmezse öğrenci kotayı değil izin hatasını görür.", "Kitap 5. Uygulamada “2. Uygulamada oluşturduğunuz C:Anadolu” diyor; klasör 3. Uygulamada oluşturuldu, yol C:\\Anadolu.", "Hazır dosya grupları arasında Office dosyaları zaten var; öğrenciler yeni grubu oluşturduklarından emin olsun.", "Filtre “aktif” (engelleme) değil “pasif” (yalnızca izleme) seçilirse dosya kopyalanır, sadece raporlanır."],
    sorular: [["Kota neden gerekli?", "Bir kullanıcı sunucuyu filmlerle doldurmasın, disk herkese yetsin diye."], ["Dosya uzantısını değiştirerek filtre aşılır mı?", "Basit filtreler uzantıya bakar; .docx dosyasının adını .txt yapan kişi geçebilir. Bu yüzden filtreler bir önlemdir, tam güvenlik değil."]],
    not: "Birim testi 1. (Host Guardian Services rolün parçası değil) ve 2. (Kota Yönetimi) sorular bu konudan." },

  { tur: "bilgi", baslik: "Dosya sunucusu",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "📂 Paylaştırma" }, { ust: "📏 Kota" }, { ust: "🚫 Filtreleme" }, { ust: "📊 Raporlama" }, { ust: "🔀 Yönlendirme (DFS)" }, { ust: "💾 Yedekleme" } ] },
    metin: "Rol: <b>File and Storage Services</b> → File Server, DFS Namespaces, DFS Replication, <b>File Server Resource Manager</b>." },

  { tur: "uygulama", baslik: "1. Uygulama · Rolü kur",
    metin: "Dosya ve depolama rolünü dört hizmetiyle kur.",
    gorsel: { tip: "pencere", baslik: "Rol ve Özellik Ekleme Sihirbazı · Sunucu Rolleri", satirlar: [
      { kutu: "File and Storage Services (Yüklü)", secili: true }, { kutu: "  File and iSCSI Services", secili: true }, { kutu: "    File Server (Yüklü)", secili: true }, { kutu: "    DFS Namespaces", secili: true }, { kutu: "    DFS Replication", secili: true }, { kutu: "    File Server Resource Manager", secili: true }
    ], dugmeler: ["İleri >", "Yükle"], vurgu: "Yükle" },
    adimlar: ["Sunucu Yöneticisi → Rol ve özellik ekle.", "Sunucu Rolleri'nde <b>File and Storage Services</b>'i genişlet.", "File Server, DFS Namespaces, DFS Replication, File Server Resource Manager'ı işaretle → Yükle."],
    kitap: "s. 288–290 · 1. Uygulama" },

  { tur: "bilgi", baslik: "Kota türleri",
    gorsel: { tip: "ikili",
      sol: { baslik: "🧱 Sabit kota", gorsel: { tip: "kartlar", kartlar: [ { ust: "Sınır aşılamaz", alt: "500 MB dolunca yazma durur" } ] } },
      sag: { baslik: "🎈 Esnek kota", gorsel: { tip: "kartlar", kartlar: [ { ust: "Sınır aşılabilir", alt: "aşım yöneticiye bildirilir" } ] } },
      ok: "·" },
    metin: "Araçlar → <b>File Server Resource Manager</b> → Kota Yönetimi → Kota Şablonları / Kotalar. Eşik aşılınca e-posta, olay günlüğü ya da rapor gönderilebilir." },

  { tur: "uygulama", baslik: "2–3. Uygulama · 500 MB kota",
    metin: "500 MB sabit kota şablonu oluştur; Anadolu klasörüne uygula ve istemciden aşmayı dene.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Şablon", gorsel: { tip: "pencere", baslik: "Kota Şablonu Oluştur", satirlar: [ { etiket: "Şablon adı", deger: "500 MB Sınır" }, { etiket: "Sınır", deger: "500 MB" }, { radyo: "Sabit kota: kullanıcıların sınırı aşmasına izin verme", secili: true }, { radyo: "Esnek kota: kullanıcıların sınırı aşmasına izin ver" } ], dugmeler: ["Tamam"], vurgu: "Tamam" } },
      sag: { baslik: "İstemcide", gorsel: { tip: "pencere", baslik: "Klasöre kopyala", satirlar: [ { baslik: "⚠ Anadolu üzerinde yeterli alan yok" }, { metin: "test.bin (572 MB) kopyalanamadı. 500 MB kota sınırı." } ], dugmeler: ["Yeniden Dene", "İptal"], vurgu: "İptal" } },
      ok: "➜" },
    adimlar: ["FSRM → Kota Şablonları → <b>Kota Şablonu Oluştur</b>: 500 MB, sabit kota.", "C:\\<b>Anadolu</b> klasörü oluştur; paylaşımda Everyone'a okuma ve yazma ver.", "Kotalar → <b>Kota Oluştur</b>: yol C:\\Anadolu, şablon 500 MB.", "İstemciden Anadolu'ya bağlan, 500 MB'tan büyük dosya kopyalamayı dene."],
    kitap: "s. 290–294 · 2–3. Uygulama" },

  { tur: "bilgi", baslik: "Dosya filtreleme",
    gorsel: { tip: "akis", adimlar: [ { simge: "🗂️", yazi: "Dosya Grubu", alt: "*.doc, *.docx" }, { simge: "📜", yazi: "Dosya Filtresi Şablonu", alt: "grubu engelle" }, { simge: "📁", yazi: "Dosya Filtresi", alt: "klasöre uygula" } ] },
    metin: "Paylaşılan klasörlere hangi tür dosyaların konamayacağını belirler (örn. iş klasörüne film, müzik)." },

  { tur: "uygulama", baslik: "4–5. Uygulama · Word dosyası yasak",
    metin: "Anadolu klasörüne kelime işlem dosyası (.doc, .docx) konamasın.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Dosya grupları", gorsel: { tip: "tablo", sutunlar: ["Grup", "Dahil edilecek dosyalar"], satirlar: [["Kelime İşlem Dosyaları", "*.doc, *.docx"], ["Elektronik Tablo Dosyaları", "*.xls, *.xlsx"]] } },
      sag: { baslik: "İstemcide", gorsel: { tip: "pencere", baslik: "Hedef Klasöre Erişim Engellendi", satirlar: [ { metin: "rapor.docx dosyasını kopyalamak için izniniz yok." } ], dugmeler: ["Yeniden Dene", "İptal"], vurgu: "İptal" } },
      ok: "➜" },
    adimlar: ["Dosya Filtreleme Yönetimi → Dosya Grupları: hazır grupları incele.", "<b>Dosya Grubu Oluştur</b>: Kelime İşlem Dosyaları (*.doc, *.docx), Elektronik Tablo Dosyaları (*.xls, *.xlsx).", "Dosya Filtresi Şablonları → yeni: “Kelime İşlem Dosyalarını Engelle” (aktif filtreleme).", "Dosya Filtreleri → <b>Dosya Filtresi Oluştur</b>: C:\\Anadolu, bu şablon.", "İstemciden Anadolu'ya .docx kopyalamayı dene."],
    kitap: "s. 294–298 · 4–5. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi Dosya ve Depolama Sunucusu rolü kurulumunda seçilmesi gereken seçeneklerden biri değildir?", secenekler: ["File Server", "File Server Resource Manager", "DFS Namespaces", "DFS Replication", "Host Guardian Services"], dogru: 4 },
    { soru: "📖 Paylaşılan klasörlere veri limiti uygulamak için FSRM'de hangi özellik kullanılır?", secenekler: ["Depolama ve Raporlama Yönetimi", "Dosya Filtreleme Yönetimi", "Dosya Yönetimi Görevleri", "Kota Yönetimi", "Sınıflandırma Yönetimi"], dogru: 3 },
    { soru: "Sınırı aşmaya izin vermeyen kota türü hangisidir?", secenekler: ["Esnek kota", "Sabit kota", "Şablon kota", "Rapor kota"], dogru: 1 },
    { soru: "Uzantıların listelendiği filtreleme bileşeni hangisidir?", secenekler: ["Dosya Grubu", "Kota Şablonu", "Ad Alanı", "Çoğaltma Grubu"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Depolama raporu",
    adimlar: ["FSRM → Depolama Raporları Yönetimi → Şimdi Rapor Oluştur.", "C:\\Anadolu için “Yinelenen Dosyalar” ve “Büyük Dosyalar” raporlarını seç.", "Oluşan HTML raporu aç: en büyük dosyalar hangileri?"],
    not: "Yöneticiler disk dolmadan önce bu raporlarla gereksiz büyük dosyaları bulur." }

]};
