// SUN · 19 · Grup ilkeleri (GPO)  (Kitap s. 238–253)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "4.3: Kullanıcı, grup ve bilgisayarların hak, yetki ve kısıtlamaları <b>grup ilkesi nesneleriyle (GPO)</b> denetlenir; her OU'ya birden çok GPO etki edebilir. Öncelik: etki alanı ilkeleri yerel ilkelerin önündedir; AD içinde dıştan içe uygulanır, çelişkide kullanıcıya/bilgisayara <b>en yakın OU</b>'nun ilkesi kazanır; OU'ya GPO yoksa Default Domain Policy geçerli (Tablo 4.1). Grup İlkesi Yönetimi: Araçlar ya da gpmc.msc. İçerik: Default Domain Policy (tüm etki alanı), Default Domain Controllers Policy (DC'ler), Grup İlkesi Nesneleri dizini, Başlatıcı GPO'lar. GPO oluşturma: OU'ya sağ tık → “Bu etki alanında GPO oluştur veya buraya bağla” (ya da Var olan bir GPO'ya bağla). Düzenle → Grup İlkesi Yönetimi Düzenleyicisi: <b>Bilgisayar Yapılandırması</b> (hangi kullanıcı girerse girsin o bilgisayara) ve <b>Kullanıcı Yapılandırması</b> (kullanıcı hangi bilgisayara girerse girsin). 6. Uygulama: Kampus\\Bilgisayarlar OU'su, istemci oraya taşınır, BilgisayarGPO; Bilgisayar Yapılandırması → İlkeler → Windows Ayarları → Güvenlik Ayarları → Yerel İlkeler → Güvenlik Seçenekleri → “Etkileşimli oturum açma: Oturum açmaya çalışan kullanıcılar için ileti başlığı” = Dikkat!, “… ileti metni” = Yalnızca Yetkili Kullanıcıların Kullanımı İçindir. → istemciyi yeniden başlat. 7. Uygulama: A_BinasiGPO; Kullanıcı Yapılandırması → (İlkeler →) Yönetim Şablonları → Başlat Menüsü ve Görev Çubuğu → “Sistem bildirim alanından Saat'i kaldır” = Etkin; kullanici1 ile giriş, gpupdate /force. Etki ayarları: Devralmayı Engelle (mavi !), Zorlanmış (kilit simgesi; çelişkide yine iç birim kazanır diyor kitap). Komutlar: <b>gpupdate /force</b> (ilkeleri hemen uygula), <b>gpresult /r</b> (etki eden GPO'lar), <b>rsop.msc</b> (İlke Sonuç Kümesi). 8. Uygulama: üçünü dene. DC'de Grup İlkesi Modelleme (olası eşleşmeler) ve Grup İlkesi Sonuçları (oturum açmış kullanıcılar). Birim testi: 1A 2C 3C 4E 5D 6A 7E 8E 9A 10B.",
    akis: ["GPO nedir?", "Öncelik sırası (Tablo 4.1)", "Grup İlkesi Yönetimi penceresi", "Bilgisayar ve kullanıcı yapılandırması", "6. Uygulama: oturum açma iletisi", "7. Uygulama: saati gizle", "Devralmayı engelle, zorla; gpupdate, gpresult, rsop", "8. Uygulama", "Birim testi"],
    hatalar: ["<b>Kitap çelişkisi</b>: Zorlanmış (Enforced) bağlantıda kitap “çelişen ayarlarda yine iç yapısal birim ayarı geçerli olur” diyor. Microsoft'a göre zorlanan GPO çelişkide <b>kazanır</b>, iç birim onu geçersiz kılamaz. Öğrencilere doğrusunu söyleyin.", "6. Uygulamada istemci bilgisayar Computers'tan Bilgisayarlar OU'suna taşınmazsa Bilgisayar Yapılandırması ilkesi ona uygulanmaz.", "Bilgisayar ilkeleri yeniden başlatınca, kullanıcı ilkeleri oturum açınca (ya da gpupdate /force sonrası yeniden girişte) uygulanır.", "7. Uygulamada kullanici1 ve kullanici2 A_Binasi'nde olmalı (18. konu); Users'ta kalırlarsa ilke etki etmez.", "Kitap Tablo 4.1 karışık basılmış; mantığı kısaca anlatmak yeterli: en yakın OU kazanır.", "Kitap 6. adımda ileti metni için “Bu ilke ayarını şablonla tanımla” diyor; pencerede “Bu ilke ayarını tanımla” yazar."],
    sorular: [["GPO ile neler yapılabilir?", "Duvar kâğıdını sabitlemek, USB belleği kapatmak, Denetim Masası'nı gizlemek, parola kuralı koymak, yazıcı dağıtmak… Yüzlerce ayar."], ["gpupdate /force olmadan ne olur?", "İlkeler yaklaşık 90 dakikada bir kendiliğinden güncellenir; /force hemen uygular."]],
    not: "Laboratuvardaki Deep Freeze'li bilgisayarlarda da benzer kısıtlamalar GPO ile yapılabilir." },

  { tur: "bilgi", baslik: "Grup ilkesi (GPO)",
    metin: "Etki alanındaki kullanıcı ve bilgisayarların <b>hak, yetki ve kısıtlamalarını</b> merkezden belirleyen ayar paketi. OU'lara bağlanır.",
    gorsel: { tip: "ikili",
      sol: { baslik: "💻 Bilgisayar Yapılandırması", gorsel: { tip: "kartlar", kartlar: [ { ust: "O bilgisayara kim girerse girsin", alt: "örn. oturum açma iletisi" } ] } },
      sag: { baslik: "👤 Kullanıcı Yapılandırması", gorsel: { tip: "kartlar", kartlar: [ { ust: "Kullanıcı hangi bilgisayara girerse girsin", alt: "örn. saati gizle" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Öncelik sırası",
    gorsel: { tip: "akis", adimlar: [ { simge: "🖥️", yazi: "Yerel ilke" }, { simge: "🏢", yazi: "Default Domain Policy" }, { simge: "📂", yazi: "Kampus GPO" }, { simge: "📂", yazi: "A_Binasi GPO", alt: "en yakın: kazanır" } ] },
    metin: "İlkeler dıştan içe uygulanır; çelişkide kullanıcıya ya da bilgisayara <b>en yakın OU</b>'nun ilkesi geçerli olur." },

  { tur: "bilgi", baslik: "Grup İlkesi Yönetimi",
    gorsel: { tip: "pencere", baslik: "Grup İlkesi Yönetimi", sol: ["Orman: kampus.local", "Etki Alanları", "kampus.local", "Default Domain Policy", "Domain Controllers", "Kampus", "A_Binasi*", "Grup İlkesi Nesneleri", "Başlatıcı GPO'lar"], satirlar: [
      { baslik: "A_Binasi" }, { liste: ["Bu etki alanında GPO oluştur veya buraya bağla...", "Var olan bir GPO'ya bağla...", "Devralmayı Engelle", "Yenile"], secili: 0 }
    ] },
    metin: "Araçlar ya da Çalıştır → <b>gpmc.msc</b>. OU'ya sağ tık → GPO oluştur; GPO'ya sağ tık → <b>Düzenle</b>." },

  { tur: "uygulama", baslik: "6. Uygulama · Oturum açma iletisi",
    metin: "Bilgisayarlar OU'sundaki istemci açılınca bu uyarıyı göstersin.",
    gorsel: { tip: "html", icerik: `<div style="max-width:420px;background:#0b3d6b;color:#fff;border-radius:10px;padding:28px 24px;font-family:Segoe UI,Arial;text-align:center"><div style="font-size:1.6rem;font-weight:700;margin-bottom:12px">Dikkat!</div><div>Yalnızca Yetkili Kullanıcıların Kullanımı İçindir.</div><div style="margin-top:20px"><span style="border:1px solid #fff;padding:4px 22px;border-radius:3px">Tamam</span></div></div>` },
    adimlar: ["Kampus içinde <b>Bilgisayarlar</b> OU'sunu oluştur, istemciyi Computers'tan oraya taşı.", "Bilgisayarlar OU'suna <b>BilgisayarGPO</b> bağla → Düzenle.", "Bilgisayar Yapılandırması → İlkeler → Windows Ayarları → Güvenlik Ayarları → Yerel İlkeler → Güvenlik Seçenekleri.", "“Etkileşimli oturum açma: … ileti başlığı” → Dikkat!", "“Etkileşimli oturum açma: … ileti metni” → Yalnızca Yetkili Kullanıcıların Kullanımı İçindir.", "İstemciyi yeniden başlat."],
    kitap: "s. 241–243 · 6. Uygulama" },

  { tur: "uygulama", baslik: "7. Uygulama · Saati gizle",
    metin: "A_Binasi'ndeki kullanıcıların görev çubuğunda saat görünmesin.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Önce", gorsel: { tip: "html", icerik: `<div style="background:#1f2a36;color:#fff;font-family:Segoe UI,Arial;padding:8px 12px;border-radius:6px;display:flex;justify-content:space-between;max-width:300px"><span>⊞ 🔎 📁</span><span>🔊 TR 14:05</span></div>` } },
      sag: { baslik: "Sonra", gorsel: { tip: "html", icerik: `<div style="background:#1f2a36;color:#fff;font-family:Segoe UI,Arial;padding:8px 12px;border-radius:6px;display:flex;justify-content:space-between;max-width:300px"><span>⊞ 🔎 📁</span><span>🔊 TR</span></div>` } },
      ok: "➜" },
    adimlar: ["A_Binasi OU'sunda kullanici1 ve kullanici2 olsun.", "A_Binasi'ne <b>A_BinasiGPO</b> oluştur → Düzenle.", "Kullanıcı Yapılandırması → Yönetim Şablonları → Başlat Menüsü ve Görev Çubuğu.", "“Sistem bildirim alanından Saat'i kaldır” → <b>Etkin</b>.", "İstemcide kullanici1 ile oturum aç (açıksa <code>gpupdate /force</code>, sonra yeniden gir)."],
    kitap: "s. 243–245 · 7. Uygulama" },

  { tur: "bilgi", baslik: "Etki ayarları ve komutlar",
    gorsel: { tip: "tablo", sutunlar: ["", "Ne yapar?"], satirlar: [
      ["Devralmayı Engelle (mavi !)", "üst OU'ların GPO'ları bu OU'ya etki etmez"],
      ["Zorlanmış (kilit)", "üst GPO devralması engellenmiş OU'lara da etki eder"],
      ["gpupdate /force", "ilkeleri hemen günceller"],
      ["gpresult /r", "etki eden GPO'ları listeler"],
      ["rsop.msc", "İlke Sonuç Kümesi: etki eden ayarları gösterir"],
      ["Grup İlkesi Modelleme (DC)", "olası kullanıcı-bilgisayar eşleşmelerinde uygulanacak GPO'lar"],
      ["Grup İlkesi Sonuçları (DC)", "oturum açmış kullanıcıya etki eden GPO'lar"]] } },

  { tur: "uygulama", baslik: "8. Uygulama · İlke sonuçları",
    metin: "İstemcide hangi grup ilkelerinin etki ettiğini gör.",
    gorsel: { tip: "terminal", baslik: "İstemci · cmd (kullanici1)", satirlar: ["> gpupdate /force", "Kullanıcı İlkesi güncelleştirmesi başarıyla tamamlandı.", "> gpresult /r", "KULLANICI AYARLARI", "   Uygulanan Grup İlkesi Nesneleri", "   -----------------------------", "       A_BinasiGPO", "       Default Domain Policy"] },
    adimlar: ["<code>gpupdate /force</code> komutunu çalıştır.", "<code>gpresult /r</code> ile etki eden GPO'ları gör.", "Çalıştır → <b>rsop.msc</b>: hangi ayarlar etki ediyor?"],
    kitap: "s. 245–247 · 8. Uygulama" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 DC ile eş çalışan ve DC görev dışı kalınca yerine geçebilen sunucu hangisidir?", secenekler: ["Additional DC", "Domain Controller", "Dosya Sunucusu", "Global Katalog", "İstemci Bilgisayar"], dogru: 0 },
    { soru: "📖 Tüm domain ve alt domainleri kapsayan en geniş AD yapısı hangisidir?", secenekler: ["Child", "Domain", "Forest", "Parent", "Tree"], dogru: 2 },
    { soru: "📖 Ormandaki tüm domainlerde yönetim yetkisi olan grup hangisidir?", secenekler: ["Domain Admins", "Domain Users", "Enterprise Admins", "Group Policy Creator Owners", "System"], dogru: 2 },
    { soru: "📖 Global Katalog nerede bulunur?", secenekler: ["Additional DC'de", "Herhangi bir sunucuda", "Herhangi bir istemcide", "Domain dışında", "Ormanı kuran ilk DC'de"], dogru: 4 },
    { soru: "📖 Orman ve etki alanı işlev düzeyi nedir?", secenekler: ["AD kurulabilecek işletim sistemleri", "ADC'deki işletim sistemi", "DC kurulamayacak sistemler", "Ormandaki DC'lerin en eski işletim sistemi", "Üye bilgisayarların en eski işletim sistemi"], dogru: 3 },
    { soru: "📖 “dsadd user cn=Ogrenci,ou=11B,ou=Okul,dc=soha,dc=com,dc=tr” komutu ne yapar?", secenekler: ["soha.com.tr'de Okul / 11B içine Ogrenci kullanıcısı oluşturur", "soha.com'da Okul / 11B içine kullanıcı oluşturur", "soha.com.tr'de 11B / Okul içine kullanıcı oluşturur", "soha.com.tr'de Okul / 11B içine grup oluşturur", "Okul içine 11B grubu ve kullanıcı oluşturur"], dogru: 0 },
    { soru: "📖 “gpupdate /force” komutunun işlevi nedir?", secenekler: ["GPO etkilerinden kurtarır", "GPO ayarlarını alt kullanıcılara geçirir", "Hangi GPO'ların etki ettiğini bildirir", "Kullanıcının kendi ilkesini belirlemesini sağlar", "Yeni GPO ayarlarının etki etmesini sağlar"], dogru: 4 },
    { soru: "📖 Oturum açmış kullanıcının etkilendiği GPO ayarlarını görmesi için ne yapılır?", secenekler: ["ipconfig /all", "ipconfig /flushdns", "gpupdate /force", "gpresult /r", "rsop.msc"], dogru: 4 },
    { soru: "📖 Üst yapısal birimlerden gelen GPO etkilerini kırmak için ne kullanılır?", secenekler: ["Devralmayı Engelle", "gpupdate /force", "gpresult /r", "rsop.msc", "Zorlanmış"], dogru: 0 },
    { soru: "📖 Oturum açabilecek kullanıcıları eşleştirerek etkileyen GPO'ları listeleyen seçenek hangisidir?", secenekler: ["AD Users and Computers", "Grup İlkesi Modelleme", "Grup İlkesi Yönetimi", "Grup İlkesi Sonuçları", "Grup İlkesi Temsilci Seçimi"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "USB'yi kapat",
    adimlar: ["Yeni bir GPO: Bilgisayar Yapılandırması → Yönetim Şablonları → Sistem → Çıkarılabilir Depolama Erişimi.", "“Tüm Çıkarılabilir Depolama sınıfları: Tüm erişimi reddet” → Etkin.", "İstemcide gpupdate /force: USB bellek açılıyor mu?"],
    not: "Kurumlar veri sızıntısını önlemek için bu ilkeyi sık kullanır." }

]};
