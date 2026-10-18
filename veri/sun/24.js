// SUN · 24 · Dağıtılmış dosya sistemi (DFS): ad alanı ve çoğaltma  (Kitap s. 298–311)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "6.1.3 DFS: ortak klasörleri tek adreste toplama, anlık/zamanlı yedekleme, sunucu sorununda yedek sunucunun devreye girmesi, kullanıcı dosyalarını merkezde tutma. Araçlar → DFS Management (DFS Yönetimi). <b>Ad alanı</b>: farklı sunuculardaki paylaşımları tek ad ve dizinde (kısayollarla) toplar. Yeni Ad Alanı Sihirbazı: sunucu (sunucu19) → ad (Aktarım; C:\\DFSRoots\\Aktarım, “Tüm kullanıcılara salt okuma izinleri ver”) → tür: <b>Etki alanı tabanlı</b> (\\\\kampus.local\\Aktarım; sunucu adı bilinmez, kopyası varsa arızada diğeri çalışır; “Windows Server 2008 modunu etkinleştir” yetkisizlerden gizler) / <b>Tek başına</b> (\\\\sunucu\\Aktarım) → özet → oluştur. Eylemler → <b>Klasör Ekle</b>: hedef paylaşım (Dizayn bu sunucuda, Evraklar başka bilgisayarda). 6. Uygulama: Aktarım ad alanı, C:\\Dizayn (sunucu) ve C:\\Evraklar (başka bilgisayar) paylaş, ad alanına ekle, istemciden \\\\EtkiAlanı\\Aktarım. <b>Çoğaltma</b>: klasörler farklı sunucularda eş zamanlı kopyalanır; istemciler yakın sunucuya gider. Yeni Çoğaltma Grubu Sihirbazı: tür (Çok amaçlı / Veri toplama için: iki sunucu) → ad, etki alanı → kaynak sunucu → klasör → hedef sunucu → hedef klasör → bant genişliği ve zamanlama → özet → oluştur. Klasörler Everyone okuma-yazma paylaşılmalı. Çoğaltma gecikirse <b>dfsrdiag pollad</b>. 7. Uygulama: iki sunucu, DFS Replication, tam zamanlı çoğaltma, dosya koyup kontrol.",
    akis: ["DFS neden?", "Ad alanı: tek adres, çok sunucu", "Etki alanı tabanlı / tek başına", "6. Uygulama: Aktarım", "Çoğaltma ve sihirbaz adımları", "7. Uygulama: iki sunucu (gösteri yapılabilir)", "Test"],
    hatalar: ["7. Uygulama <b>iki Windows Server</b> ve tercihen etki alanı ister; DFS Replication etki alanı olmadan çalışmaz. Laboratuvar RAM'i yetmezse öğretmen bilgisayarında gösteri olarak yapın.", "Kitap 6. Uygulamada “C:\\Evrakla klasörü” diyor; doğrusu Evraklar.", "Ad alanında Türkçe karakter (Aktarım) çalışır ama bazı eski istemcilerde sorun olabilir; isterseniz Aktarim yazdırın.", "Kitap 6.1.3.2'de “Veri toplama için çalışma grubu … iki dosya sunucusu arasında” diyor; Microsoft'taki asıl anlamı şube sunucusundan merkeze tek yönlü toplama. Kitabın yolu iki sunucu için yine çalışır.", "dfsrdiag yalnızca DFS Replication kurulu sunucuda vardır."],
    sorular: [["Ad alanının faydası?", "Kullanıcı tek adresi (\\\\kampus.local\\Aktarım) bilir; klasörler hangi sunucuda olursa olsun oradan erişir. Klasör başka sunucuya taşınsa da adres değişmez."], ["Çoğaltma yedek yerine geçer mi?", "Kısmen: bir sunucu bozulursa diğerinde kopya var. Ama yanlışlıkla silinen dosya diğer sunucudan da silinir; ayrıca yedek gerekir (07. konu)."]],
    not: "Birim testi 3. soru (ad alanı: Tüm kullanıcılara salt okuma izinleri ver) bu konudan." },

  { tur: "bilgi", baslik: "Ad alanı",
    gorsel: { tip: "agac", kok: { ad: "📁 \\\\kampus.local\\Aktarım", alt: "ad alanı", cocuklar: [ { ad: "↪ Dizayn", alt: "\\\\sunucu19\\Dizayn" }, { ad: "↪ Evraklar", alt: "\\\\istemci1\\Evraklar" } ] } },
    metin: "Farklı bilgisayarlardaki paylaşım klasörlerini <b>tek ad altında</b> toplar. Kullanıcının sunucu adını bilmesi gerekmez.",
    not: "<b>Etki alanı tabanlı</b>: \\\\etki_alanı\\ad (önerilen). <b>Tek başına</b>: \\\\sunucu\\ad." },

  { tur: "uygulama", baslik: "6. Uygulama · Aktarım ad alanı",
    metin: "Aktarım ad alanı iki farklı bilgisayardaki klasörleri göstersin.",
    gorsel: { tip: "pencere", baslik: "\\\\kampus.local\\Aktarım", satirlar: [ { liste: ["📁↪ Dizayn", "📁↪ Evraklar"] } ] },
    adimlar: ["Araçlar → <b>DFS Management</b> → Ad Alanları → Yeni Ad Alanı.", "Sunucu: sunucu19 → ad: <b>Aktarım</b> (C:\\DFSRoots\\Aktarım, tüm kullanıcılara salt okuma).", "AD varsa <b>Etki alanı tabanlı</b>, yoksa Tek başına → oluştur.", "Sunucuda C:\\Dizayn, istemcide C:\\Evraklar klasörünü paylaş.", "Ad alanına sağ tık → <b>Klasör Ekle</b>: Dizayn ve Evraklar.", "İstemcide \\\\kampus.local\\Aktarım (AD yoksa \\\\sunucu19\\Aktarım) aç."],
    kitap: "s. 298–303 · 6. Uygulama" },

  { tur: "bilgi", baslik: "Çoğaltma",
    gorsel: { tip: "akis", adimlar: [ { simge: "🧩", yazi: "Grup türü", alt: "Veri toplama: 2 sunucu" }, { simge: "🏷️", yazi: "Ad, etki alanı" }, { simge: "🖥️", yazi: "Kaynak sunucu" }, { simge: "📁", yazi: "Çoğaltılacak klasör" }, { simge: "🖥️", yazi: "Hedef sunucu" }, { simge: "📁", yazi: "Hedef klasör" }, { simge: "⏱️", yazi: "Bant genişliği, zaman" } ] },
    metin: "Klasörler farklı sunucularda <b>eş zamanlı</b> kopyalanır; biri bozulsa diğeri çalışır. Gecikirse: <code>dfsrdiag pollad</code>." },

  { tur: "uygulama", baslik: "7. Uygulama · İki sunucu arasında çoğaltma",
    metin: "İki sunucudaki klasörler sürekli birbirinin kopyası olsun.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Sunucu 1 · C:\\Ortak", gorsel: { tip: "pencere", baslik: "Ortak", satirlar: [ { liste: ["📄 plan.txt (yeni)", "📄 rapor.txt"] } ] } },
      sag: { baslik: "Sunucu 2 · C:\\Ortak", gorsel: { tip: "pencere", baslik: "Ortak", satirlar: [ { liste: ["📄 plan.txt (geldi)", "📄 rapor.txt"] } ] } },
      ok: "⇄" },
    adimlar: ["İki sunucuya Dosya ve Depolama rolünü <b>DFS Replication</b> ile kur.", "İki sunucuda çoğaltılacak klasörleri oluştur, Everyone'a okuma-yazma ile paylaş.", "Birinci sunucuda DFS Management → Çoğaltma → <b>Yeni Çoğaltma Grubu</b>.", "Sihirbazda iki sunucunun klasörlerini eşleştir; zaman ve bant genişliğini kısıtlama.", "Bir sunucudaki klasöre dosya koy; diğerinde görünüyor mu?", "Görünmezse iki sunucuda <code>dfsrdiag pollad</code>."],
    kitap: "s. 304–311 · 7. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Ad alanı yalnızca paylaşılmış klasörlerin kısayollarına erişim için kullanılacaksa hangi izinle oluşturulur?", secenekler: ["Özel izinleri kullan", "Tüm kullanıcılara salt okuma izinleri ver", "Tüm kullanıcılara okuma ve yazma izinleri ver", "Yöneticilere tam, diğerlerine salt okuma", "Yöneticilere tam, diğerlerine okuma-yazma"], dogru: 1 },
    { soru: "Etki alanı tabanlı ad alanına istemciden hangi adresle erişilir?", secenekler: ["\\\\etki_alani\\ad_alani", "http://ad_alani", "C:\\DFSRoots", "ftp://etki_alani"], dogru: 0 },
    { soru: "Çoğaltma istenen zamanda olmadıysa hangi komut kullanılır?", secenekler: ["gpupdate /force", "dfsrdiag pollad", "ipconfig /renew", "dnscmd /clearcache"], dogru: 1 },
    { soru: "DFS ile hangisi yapılamaz?", secenekler: ["Klasörleri tek adreste toplamak", "Klasörleri sunucular arasında çoğaltmak", "Sunucu arızasında yedek sunucuya geçmek", "Sunucuya işletim sistemi kurmak"], dogru: 3 }
  ]},

  { tur: "merak", baslik: "Klasörü taşı, adres kalsın",
    adimlar: ["Ad alanındaki Dizayn klasörünün hedefini başka bir paylaşıma değiştir (klasöre sağ tık → Klasör Hedefi Ekle).", "İstemcide aynı \\\\kampus.local\\Aktarım\\Dizayn adresini aç.", "Kullanıcı farkı anladı mı?"],
    not: "Şirketler sunucu değiştirirken kullanıcıların alışık olduğu adres bozulmasın diye DFS kullanır." }

]};
