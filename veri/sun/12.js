// SUN · 12 · Klasör ve yazıcı paylaşımı  (Kitap s. 165–170)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.1.2: Dosya ve klasörü paylaştıran bilgisayar sunucu, isteyen istemcidir; ağ fiziksel olarak hazır ve IP'ler doğru olmalı. Sunucu tarafı: klasör → Özellikler → Paylaşım. <b>Paylaş</b> düğmesi: basit paylaşım (Ağ erişimi; izin düzeyi Okuma ya da Okuma/Yazma; Everyone tüm kullanıcılar; varsayılan izin Okuma). <b>Gelişmiş Paylaşım</b>: Bu klasörü paylaş, Paylaşım adı, eş zamanlı kullanıcı sınırı, Açıklamalar, Önbelleğe Alma (çevrim dışı kopya), İzinler (Tam Denetim, Değiştir, Okuma). İstemci tarafı: klasör adres çubuğuna <b>\\\\192.168.1.254</b> → kimlik doğrulama. Ağdan erişimde <b>paylaşım ve güvenlik izinlerinin kesişimi</b> (en kısıtlayıcısı) geçerli (Tablo 3.1). Öneri: paylaşımda Everyone Tam Denetim, asıl yetkiyi güvenlik sekmesinde ver. 3. Uygulama: Test paylaşımı; k1 okuma, k2 okuma-yazma, k3 tam denetim; istemciden dene, raporla. 3.1.3 Yazıcı: Denetim Masası → Aygıtlar ve Yazıcılar → Yazıcı Ekle (beş seçenek); yazıcı özellikleri → Paylaşım → Bu yazıcıyı paylaştır + paylaşım adı.",
    akis: ["Sunucu ve istemci (dosya paylaşımında)", "Basit ve gelişmiş paylaşım", "İstemciden \\\\IP ile erişim", "Paylaşım + güvenlik = kesişim (Tablo 3.1)", "3. Uygulama", "Yazıcı paylaşımı", "Test"],
    hatalar: ["Bu konudan itibaren <b>ikinci bir sanal makine</b> (istemci, Windows 10/11 ya da ikinci sunucu) gerekir. VMware'de iki makinenin ağ bağdaştırıcısını aynı <b>LAN Segment</b>'e alın (VM → Settings → Network Adapter → LAN segment → LAN Segments... → Add). Böylece VMware'in kendi DHCP'si karışmaz; 14. konudaki DHCP için de bu gerekli.", "IP'ler: sunucu 192.168.1.254, istemci 192.168.1.2, maske 255.255.255.0.", "İstemci \\\\192.168.1.254 açamıyorsa: sunucuda Ağ ve Paylaşım Merkezi → Gelişmiş paylaşım ayarları → Dosya ve yazıcı paylaşımını aç; ağ profili Özel olsun.", "Kimlik bilgisi bir kez kaydedilince istemci aynı kullanıcıyla bağlanmaya devam eder; başka kullanıcıyı denemek için istemcide <code>net use * /delete</code> ya da oturumu kapatıp açın.", "Laboratuvarda gerçek yazıcı yoksa sunucuya “Microsoft Print to PDF” paylaştırılabilir."],
    sorular: [["Paylaşım izni Okuma, güvenlik izni Tam Denetim ise?", "Ağdan bağlanan kişi sadece okur: iki iznin kesişimi (en kısıtlayıcısı) geçerli. Sunucunun başında oturan kişiye ise yalnızca güvenlik izni uygulanır."], ["Önbelleğe alma neden var?", "Bağlantı kopsa bile istemci dosyanın kendi bilgisayarındaki kopyasını açabilsin diye (çevrim dışı dosyalar)."]],
    not: "Birim testi 3 (varsayılan paylaşım izni: Okuma) ve 4 (\\\\192.168.1.3 klasör adres çubuğu) bu konudan." },

  { tur: "bilgi", baslik: "Klasörü paylaşmak",
    gorsel: { tip: "ikili",
      sol: { baslik: "Paylaş… (basit)", gorsel: { tip: "pencere", baslik: "Ağ erişimi", satirlar: [ { tablo: { sutunlar: ["Ad", "İzin Düzeyi"], satirlar: [["Administrator", "Sahip"], ["Everyone", "Okuma ▾"]] } }, { metin: "İzin düzeyleri: Okuma · Okuma/Yazma" } ], dugmeler: ["Paylaş", "İptal"], vurgu: "Paylaş" } },
      sag: { baslik: "Gelişmiş Paylaşım", gorsel: { tip: "pencere", baslik: "Gelişmiş Paylaşım", satirlar: [ { kutu: "Bu klasörü paylaş", secili: true }, { etiket: "Paylaşım adı", deger: "Test" }, { etiket: "Eş zamanlı kullanıcı", deger: "20" }, { etiket: "Açıklamalar", deger: "" } ], dugmeler: ["İzinler", "Önbelleğe Alma", "Tamam"], vurgu: "İzinler" } },
      ok: "·" },
    metin: "Klasör → Özellikler → <b>Paylaşım</b>. Kullanıcıların varsayılan paylaşım izni yalnızca <b>Okuma</b>." },

  { tur: "bilgi", baslik: "İstemciden erişim",
    gorsel: { tip: "pencere", baslik: "Dosya Gezgini", satirlar: [ { etiket: "Adres", deger: "\\\\192.168.1.254" }, { liste: ["📁 Test"] }, { baslik: "Windows Güvenliği · Ağ kimlik bilgilerini girin" }, { etiket: "Kullanıcı adı", deger: "k2" }, { etiket: "Parola", deger: "••••••••" } ], dugmeler: ["Tamam", "İptal"], vurgu: "Tamam" },
    metin: "İstemcide herhangi bir klasörün adres çubuğuna <b>\\\\sunucu IP'si</b> yazılır, paylaşım listesindeki bir kullanıcıyla giriş yapılır." },

  { tur: "bilgi", baslik: "Paylaşım + güvenlik",
    gorsel: [
      { tip: "akis", adimlar: [ { simge: "💻", yazi: "İstemci" }, { simge: "🤝", yazi: "Paylaşım izni" }, { simge: "🔐", yazi: "Güvenlik izni" }, { simge: "📁", yazi: "Klasör" } ] },
      { tip: "tablo", ad: "Tablo 3.1", sutunlar: ["Paylaşım", "Güvenlik", "Sonuç"], satirlar: [
        ["Okuma", "Okuma, Yazma, Değiştirme", "Okuma"], ["Okuma, Yazma", "Okuma", "Okuma"], ["Tam Denetim", "Okuma, Yazma", "Okuma, Yazma"], ["Okuma", "Tam Denetim", "Okuma"], ["Okuma, Yazma", "Okuma, Yazma", "Okuma, Yazma"]] }
    ],
    metin: "Ağdan erişimde iki iznin <b>kesişimi</b> (en kısıtlayıcısı) geçerlidir.",
    not: "Kitaptaki Tablo 3.1'in 4. satırında sonuç “Okuma, Yazma” yazıyor; kesişim kuralına göre doğrusu <b>Okuma</b>." },

  { tur: "uygulama", baslik: "3. Uygulama · Test'i paylaş",
    metin: "Test klasörünü paylaş: k1 <b>okuma</b>, k2 <b>okuma ve yazma</b>, k3 <b>tam denetim</b>. İstemciden üçüyle de dene.",
    gorsel: { tip: "tablo", sutunlar: ["Kullanıcı", "Paylaşım izni", "İstemciden"], satirlar: [ ["k1", "Okuma", "dosyayı açar, kaydedemez"], ["k2", "Değiştir (okuma ve yazma)", "açar, değiştirir, kaydeder"], ["k3", "Tam Denetim", "her şey"] ] },
    adimlar: ["Test klasörüne birkaç metin dosyası koy.", "Özellikler → Paylaşım → Gelişmiş Paylaşım → <b>Bu klasörü paylaş</b>.", "İzinler → Ekle: k1, k2, k3; izinlerini ver.", "İstemcide adres çubuğuna <b>\\\\192.168.1.254</b> yaz.", "Her kullanıcıyla ayrı giriş yap; okuma, yazma, silme dene. Sonuçları yaz."],
    kitap: "s. 168–169 · 3. Uygulama" },

  { tur: "bilgi", baslik: "Yazıcı paylaşımı",
    gorsel: { tip: "akis", adimlar: [ { simge: "🖨️", yazi: "Denetim Masası → Aygıtlar ve Yazıcılar" }, { simge: "➕", yazi: "Yazıcı Ekle" }, { simge: "⚙️", yazi: "Yazıcı özellikleri → Paylaşım" }, { simge: "☑️", yazi: "Bu yazıcıyı paylaştır", alt: "paylaşım adı" } ] },
    not: "Yazıcı Ekle seçenekleri: yazıcıyı bul, paylaşılan yazıcıyı adıyla seç, TCP/IP adresiyle ekle, bluetooth/kablosuz, el ile yerel yazıcı." },

  { tur: "test", sorular: [
    { soru: "📖 Klasörler için kullanıcıların varsayılan paylaşım izni hangisidir?", secenekler: ["Değiştirme", "Silme", "Okuma", "Tam Denetim", "Yazma"], dogru: 2 },
    { soru: "📖 Yerel ağdaki 192.168.1.3 IP'li bilgisayarın paylaşımlarına erişmek için ne yapılır?", secenekler: ["Arama motorunda 192.168.1.3 aratılır", "İnternet adres çubuğuna 192.168.1.3 yazılır", "İnternet adres çubuğuna \\\\192.168.1.3 yazılır", "Klasör adres çubuğuna 192.168.1.3 yazılır", "Klasör adres çubuğuna \\\\192.168.1.3 yazılır"], dogru: 4 },
    { soru: "Paylaşım izni Okuma, güvenlik izni Okuma-Yazma ise ağdan bağlanan kullanıcı ne yapabilir?", secenekler: ["Okur", "Okur ve yazar", "Hiçbir şey", "Tam denetim"], dogru: 0 },
    { soru: "Hangi grup tüm kullanıcıları ve grupları kapsar?", secenekler: ["Administrators", "Users", "Everyone", "SYSTEM"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Ağ sürücüsü bağla",
    adimlar: ["İstemcide Bu Bilgisayar → Ağ sürücüsüne bağlan.", "Sürücü: Z:, Klasör: <code>\\\\192.168.1.254\\Test</code>, “Oturum açarken yeniden bağlan” işaretli.", "Komutla: <code>net use Z: \\\\192.168.1.254\\Test</code>"],
    not: "Okullarda ve şirketlerde ortak klasörler genelde böyle bir sürücü harfiyle bağlanır." }

]};
