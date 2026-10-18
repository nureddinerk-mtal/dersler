// SUN · 28 · Sunucu güncelleştirme  (Kitap s. 349–355)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "7.2: Üretici güvenlik açıklarını ve hataları gidermek, yeni özellik eklemek için güncelleştirme paketleri yayınlar; düzenli kontrol edilip yüklenmeli. Başlat → Ayarlar → <b>Güncelleştirme ve Güvenlik</b> → kullanılabilir güncelleştirmeler → Şimdi yükle. <b>Etkin saatleri değiştir</b>: yoğun kullanım saatlerinde otomatik yeniden başlatma yapılmaz. Güncelleştirme geçmişini görüntüle (kategorili liste); sorun çıkaran güncelleştirme <b>Güncelleştirmeleri kaldır</b> ile kaldırılır. Gelişmiş seçenekler: seçenekleri aç/kapat, güncelleştirmeleri <b>35 güne kadar duraklat</b>. SS6: kullanılabilir güncelleştirmeleri listele ve yükle. Birim testi: 1C 2E 3B 4E 5E (6. ve 9. soru alınmadı) 7E 8B 10E.",
    akis: ["Neden güncelleme?", "Güncelleştirme ve Güvenlik penceresi", "Etkin saatler", "Geçmiş ve kaldırma", "Duraklatma (35 gün)", "Sıra Sizde 6", "Birim testi"],
    hatalar: ["Laboratuvarda sanal makinelerin interneti yoksa (LAN Segment) güncelleştirme bulunamaz; bu konu için ağ bağdaştırıcısını geçici olarak NAT yapın.", "Güncelleştirme uzun sürebilir ve yeniden başlatma ister; dersin sonuna bırakmayın.", "Deep Freeze'li gerçek laboratuvar bilgisayarlarında güncelleme kalıcı olmaz; sanal makinede sorun yok (sanal makine dosyaları Deep Freeze dışındaki diskteyse).", "Değerlendirme (Evaluation) sürümü de güncelleştirme alır.", "Kurumsal ağlarda güncelleştirmeler genellikle WSUS sunucusundan dağıtılır (Meraklısına)."],
    sorular: [["Güncelleme yapmazsak ne olur?", "Bilinen güvenlik açıkları açık kalır; fidye yazılımlarının çoğu güncellenmemiş sistemlere bulaşır."], ["Güncelleme bir şeyi bozarsa?", "Güncelleştirme geçmişinden o güncelleştirme kaldırılır; bu yüzden önce test sunucusunda denemek iyi bir alışkanlıktır."]],
    not: "Kitap Sıra Sizde 6'da “Güncelleme ve güvenlik” diyor; menüde adı Güncelleştirme ve Güvenlik." },

  { tur: "bilgi", baslik: "Neden güncelleme?",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🛡️ Güvenlik açıklarını kapatır" }, { ust: "🐞 Hataları giderir" }, { ust: "✨ Yeni özellik ekler" } ] },
    metin: "Güncelleştirme paketleri belirli aralıklarla kontrol edilip yüklenmelidir." },

  { tur: "bilgi", baslik: "Güncelleştirme ve Güvenlik",
    gorsel: { tip: "pencere", baslik: "Ayarlar · Windows Update", sol: ["Windows Update*", "Windows Güvenliği", "Yedekleme", "Sorun giderme", "Kurtarma", "Etkinleştirme"], satirlar: [
      { baslik: "Güncelleştirmeler kullanılabilir" }, { metin: "2026-10 Windows Server 2019 için Toplu Güncelleştirme (KB50xxxxx)" }, { metin: "Durum: Yüklemeye hazır" },
      { liste: ["Etkin saatleri değiştir", "Güncelleştirme geçmişini görüntüle", "Gelişmiş seçenekler"] }
    ], dugmeler: ["Şimdi yükle"], vurgu: "Şimdi yükle" },
    metin: "Başlat → Ayarlar → <b>Güncelleştirme ve Güvenlik</b>." },

  { tur: "bilgi", baslik: "Güncelleştirme seçenekleri",
    gorsel: { tip: "tablo", sutunlar: ["Seçenek", "Ne işe yarar?"], satirlar: [
      ["Etkin saatleri değiştir", "bu saatlerde otomatik yeniden başlatma yapılmaz"],
      ["Güncelleştirme geçmişini görüntüle", "yüklenen güncelleştirmelerin listesi"],
      ["Güncelleştirmeleri kaldır", "sorun çıkaran güncelleştirmeyi geri alır"],
      ["Gelişmiş seçenekler → Duraklat", "güncelleştirmeleri 35 güne kadar erteler"]] } },

  { tur: "odev", baslik: "6. Sıra Sizde · Güncelle",
    metin: "Güncelleştirme ve Güvenlik penceresinden kullanılabilir güncelleştirmeleri listele ve yükle.",
    kitap: "s. 352" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 Sistem Özellikleri'nde performans ayarları hangi sekmededir?", secenekler: ["Bilgisayar Adı", "Donanım", "Gelişmiş", "Genel", "Uzak"], dogru: 2 },
    { soru: "📖 I) En iyi görünüm II) En iyi performans III) Özel. Hangileri performans seçeneklerindendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "📖 Hangisi sunucuyla gelen performans izleme araçlarından değildir?", secenekler: ["Görev Yöneticisi", "Görev Zamanlayıcısı", "Kaynak İzleyicisi", "Olay Görüntüleyici", "Performans İzleyicisi"], dogru: 1 },
    { soru: "📖 I) CPU II) Bellek III) Ethernet. Hangileri Görev Yöneticisi Performans sekmesindedir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "📖 Hangisi Görev Yöneticisi sekmelerinden biri değildir?", secenekler: ["Ayrıntılar", "Hizmetler", "İşlemler", "Kullanıcılar", "Uzak"], dogru: 4 },
    { soru: "📖 Hangisi Performans İzleyicisi sistem özeti verilerinden değildir?", secenekler: ["Ağ Arabirimi", "Bellek", "Fiziksel Disk", "İşlemci Bilgileri", "Önbellek"], dogru: 4 },
    { soru: "📖 I) Satır II) Sütun III) Pasta. Hangileri Performans İzleyicisi grafik çeşitlerindendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 1 },
    { soru: "📖 Hangisi Kaynak İzleyicisi sekmelerinden biri değildir?", secenekler: ["Bellek", "CPU", "Disk", "Genel Bakış", "İşlemler"], dogru: 4 },
    { soru: "Güncelleştirmeler en fazla kaç gün duraklatılabilir?", secenekler: ["7", "14", "35", "365"], dogru: 2 },
    { soru: "Yoğun kullanım saatlerinde otomatik yeniden başlatmayı önleyen ayar hangisidir?", secenekler: ["Etkin saatleri değiştir", "Güncelleştirme geçmişi", "Şimdi yükle", "Kurtarma"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "WSUS",
    metin: "Yüzlerce bilgisayarı olan kurumlarda her bilgisayar güncellemeyi internetten ayrı ayrı indirmez. <b>WSUS</b> (Windows Server Update Services) rolü güncellemeleri bir kez indirir, yönetici onaylayınca ağdaki bilgisayarlara dağıtır. Bu rol Sunucu Yöneticisi'nin rol listesinde var: bul ve açıklamasını oku.",
    not: "Grup ilkesiyle (19. konu) istemcilere “güncellemeleri WSUS sunucusundan al” ayarı verilir." }

]};
