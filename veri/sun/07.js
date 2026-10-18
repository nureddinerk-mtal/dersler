// SUN · 07 · Yedekleme, geri yükleme, zamanlama  (Kitap s. 91–113)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.2.8: Arızalara karşı veriler belirli aralıklarla yedeklenir. Önce özellik kurulur: Rol ve özellik ekle → (roller boş) → Özellikler: <b>Windows Server Backup</b> → Yükle. Çalıştırma: Araçlar → Windows Server Yedekleme → Yerel Yedekleme. 7. Uygulama: Bir Kez Yedekle → Farklı seçenekler → <b>Özel</b> (Tam sunucu tümünü yedekler) → Öğe Ekle → dosya/klasör → Yerel sürücüler (ya da Uzak paylaşılan klasör) → hedef → Yedekle → Kapat. 8. Uygulama: Kurtarma → Bu sunucu → takvimden tarih (koyu günler) → Dosyalar ve klasörler → öğeler → kurtarma hedefi ve seçenekler → Kurtar. 9. Uygulama: Yedekleme Zamanlaması → Özel → öğeler → zaman (günde bir ya da birden çok) → Bir birime yedekle → Ekle → Son; aynı sihirbazla Yedeklemeyi değiştir / durdur. Birim testi bu konunun sonunda.",
    akis: ["Neden yedek?", "Server Backup özelliğini kur", "7. Uygulama: bir kez yedekle", "8. Uygulama: kurtar", "9. Uygulama: zamanla", "Birim testi"],
    hatalar: ["Yedek hedefi yedeklenen diskle aynı olamaz: 05/06. konudaki ek diski (E:) hedef olarak kullanın.", "“Bir birime yedekle” seçilen birimdeki her şeyi değil, yalnızca yedek klasörünü kullanır; “Yedekleme için ayrılmış sabit diske yedekle” seçeneği ise diski biçimlendirir: dikkat!", "Kurtarma takviminde sadece koyu yazılı günler seçilebilir (o gün yedek var).", "Menü adı sürüme/dile göre “Windows Server Yedekleme” ya da kitaptaki gibi “Server Yedekleme” görünebilir."],
    sorular: [["Yedek ile yansıtılmış disk farkı?", "Yansıtma anlıktır: silinen dosya iki diskten de gider. Yedek geçmişe ait bir kopyadır; silinen dosya geri getirilir."], ["Ne sıklıkla yedek alınmalı?", "Verinin ne kadar sık değiştiğine bağlı. Okul sunucusunda her gece bir yedek yaygın bir seçimdir."]],
    not: "Cevap anahtarı: 1C 2C 3E 4C 5C 6A 7E 8A 9D 10E." },

  { tur: "bilgi", baslik: "Yedekleme",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "💾 Yedekle", alt: "verinin kopyasını al" }, { ust: "♻️ Geri yükle", alt: "kaybolunca kopyadan getir" }, { ust: "⏰ Zamanla", alt: "otomatik, düzenli yedek" } ] },
    metin: "Yazılım ya da donanım arızasında veri kaybını önlemek için veriler düzenli yedeklenir. Araç: <b>Windows Server Backup</b> özelliği." },

  { tur: "uygulama", baslik: "7. Uygulama · Bir kez yedekle",
    metin: "Server Backup özelliğini kur, seçtiğin klasörleri yerel bir sürücüye yedekle.",
    gorsel: { tip: "pencere", baslik: "Bir Kez Yedekleme Sihirbazı", sol: ["Yedekleme Seçenekleri", "Yapılandırma Seçin", "Öğeleri Seçin*", "Hedef Türünü Belirtin", "Onay", "İlerleme"], satirlar: [
      { baslik: "Yedeklemek istediğiniz öğeleri seçin" },
      { liste: ["📁 C:\\Belgeler", "📁 C:\\Raporlar"] },
      { radyo: "Tam sunucu (önerilen)" }, { radyo: "Özel", secili: true }
    ], dugmeler: ["< Önceki", "Sonraki >", "Yedekle", "İptal"], vurgu: "Sonraki >" },
    adimlar: ["Rol ve özellik ekle → Özellikler'de <b>Windows Server Backup</b>'ı işaretle → Yükle.", "Araçlar → Windows Server Yedekleme → Yerel Yedekleme → <b>Bir Kez Yedekle</b>.", "Farklı seçenekler → <b>Özel</b> → Öğe Ekle: klasörlerini seç.", "Yerel sürücüler → hedef sürücüyü seç.", "Yedekle → bitince Kapat. Ortadaki iletiler bölümünü kontrol et."],
    kitap: "s. 91–99 · 7. Uygulama" },

  { tur: "uygulama", baslik: "8. Uygulama · Yedekten kurtar",
    metin: "Yedeklediğin bir dosyayı sil, sonra yedekten geri getir.",
    gorsel: { tip: "akis", adimlar: [ { simge: "♻️", yazi: "Kurtarma" }, { simge: "🖥️", yazi: "Bu sunucu" }, { simge: "📅", yazi: "Yedekleme tarihi", alt: "takvimde koyu gün" }, { simge: "📁", yazi: "Dosyalar ve klasörler" }, { simge: "☑️", yazi: "Öğeleri seç" }, { simge: "✅", yazi: "Kurtar → Kapat" } ] },
    adimlar: ["Yedeklediğin klasörden bir dosyayı sil.", "Windows Server Yedekleme → Yerel Yedekleme → <b>Kurtarma</b>.", "Bu sunucu → takvimden yedek tarihini seç.", "Dosyalar ve klasörler → silinen dosyayı seç.", "Kurtarma hedefini seç → Kurtar → Kapat.", "Dosya geri geldi mi?"],
    kitap: "s. 100–104 · 8. Uygulama" },

  { tur: "uygulama", baslik: "9. Uygulama · Yedeklemeyi zamanla",
    metin: "Seçtiğin klasörler her gün belirli bir saatte kendiliğinden yedeklensin.",
    gorsel: { tip: "pencere", baslik: "Yedekleme Zamanlaması Sihirbazı", sol: ["Başlarken", "Yedekleme Yapılandırması", "Öğeleri Seçin", "Yedekleme Zamanını Belirtin*", "Hedef Türünü Belirtin", "Onay"], satirlar: [
      { baslik: "Yedekleme ne sıklıkta ve ne zaman çalışsın?" },
      { radyo: "Günde bir kez", secili: true }, { etiket: "Saat", deger: "21:00" }, { radyo: "Günde birden çok" }
    ], dugmeler: ["< Önceki", "Sonraki >", "Son", "İptal"], vurgu: "Sonraki >" },
    adimlar: ["Yerel Yedekleme → <b>Yedekleme Zamanlaması</b> → Sonraki.", "Özel → Öğe Ekle → klasörler.", "Yedekleme zamanını belirle.", "<b>Bir birime yedekle</b> → Ekle → birimi seç.", "Son → Kapat.", "Sihirbazı yeniden aç: Yedeklemeyi değiştir / durdur seçeneklerini incele."],
    kitap: "s. 105–111 · 9. Uygulama" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 Hangisi sunucu işletim sistemlerinin sağladığı hizmetlerden biri değildir?", secenekler: ["DHCP sunucusu", "DNS sunucusu", "İstemci sunucusu", "Web sunucusu", "Yazdırma sunucusu"], dogru: 2 },
    { soru: "📖 Kurulumda bölümlendirilmiş diski biçimlendiren komut hangisidir?", secenekler: ["Apply", "Extend", "Format", "New", "Refresh"], dogru: 2 },
    { soru: "📖 Sunucuya dil paketi yüklenmesini sağlayan komut hangisidir?", secenekler: ["langapply", "langchange", "langinstall", "langpacks", "lpksetup"], dogru: 4 },
    { soru: "📖 Arka plan resmi, tema, renk, kilit ekranı ayarları hangi bölümdedir?", secenekler: ["Cihazlar", "Görünüm", "Kişiselleştirme", "Sistem", "Uygulamalar"], dogru: 2 },
    { soru: "📖 Aygıtlar ve yazıcılar, aygıt yöneticisi hangi Denetim Masası bölümündedir?", secenekler: ["Uygulamalar", "Cihazlar", "Donanım", "Sistem ve güvenlik", "Erişim kolaylığı"], dogru: 2 },
    { soru: "📖 Hangisi Sunucu Yöneticisi'nin işlevlerinden biri değildir?", secenekler: ["Donanım değişikliklerini tarama", "Rol ve özellik ekleme", "Sunucu grubu oluşturma", "Yerel sunucuyu yapılandırma", "Yönetilecek diğer sunucuları ekleme"], dogru: 0 },
    { soru: "📖 I) Sunucu Rolleri II) Sunucu Seçimi III) Yükleme Türü. Hangileri rol ve özellik ekleme aşamalarındandır?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "📖 Okuma-yazma hızı en yüksek dinamik disk birimi hangisidir?", secenekler: ["Şeritli Birim", "Basit Birim", "Dağıtılmış Birim", "Yansıtılmış Birim", "Temel Birim"], dogru: 0 },
    { soru: "📖 Üç adet 20 GB dinamik diskle oluşturulan RAID-5 birimin kapasitesi kaç GB'tır?", secenekler: ["10", "20", "30", "40", "60"], dogru: 3 },
    { soru: "📖 I) Verilerin yedeklenmesi II) Yedekleri geri yükleme III) Yedeklemenin zamanlanması. Hangileri Server Backup ile yapılabilir?", secenekler: ["Yalnız III", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 }
  ]},

  { tur: "merak", baslik: "3-2-1 kuralı",
    metin: "Yedeklemede altın kural <b>3-2-1</b>: verinin <b>3</b> kopyası olsun, <b>2</b> farklı ortamda dursun, <b>1</b> kopya başka bir binada (ya da bulutta) olsun. Okulunun ya da kendi telefonundaki fotoğrafların bu kurala uyuyor mu?",
    not: "Fidye yazılımları (ransomware) sunucudaki yedekleri de şifreleyebilir; bu yüzden bir kopyanın çevrim dışı tutulması önerilir." }

]};
