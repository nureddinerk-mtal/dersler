// SUN · 09 · Sanal anahtar, sanal makine eylemleri ve ayarları  (Kitap s. 128–143)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.5.1 Sanal anahtar (switch): sanal makineleri internete ya da birbirine bağlar. Eylemler → Sanal Anahtar Yöneticisi → tür: <b>Dış</b> (dış ağ/internet; fiziksel ağ kartı seçilir, uyarı çıkar), <b>İç</b> (ana makine ↔ sanallar, internet yok), <b>Özel</b> (yalnızca sanallar arası; kitap “ana makine ve sanallar arasında özel ağ” diyor, aslında ana makine dâhil değildir). SS2: bir dış, bir iç anahtar. 1.5.2 Sanal makine eylemleri (Tablo 2.2): Bağlan, Ayarlar, Başlat, Denetim Noktası, Geri Al, Taşı, Ver, Yeniden Adlandır, Sil, Çoğaltmayı Etkinleştir. 1.5.3 Ayarlar: Donanım Ekle → SCSI Denetleyicisi → Sabit Sürücü (Yeni → disk türü: Sabit boyut / Dinamik genişleyen / Fark kayıt → ad, konum → boyut → Son → Tamam), DVD Sürücüsü (Gözat ile ISO ya da Yok), Paylaşılan Sürücü; Ağ Bağdaştırıcısı (sanal anahtar seç); Üretici Yazılımı: önyükleme sırası (Yukarı/Aşağı Taşı), Güvenli Önyükleme; Bellek: miktar, Dinamik belleği etkinleştir, bellek ağırlığı (öncelik); İşlemci: sanal işlemci sayısı, kaynak yüzdeleri.",
    akis: ["Sanal anahtar ve üç türü", "Sıra Sizde 2: dış ve iç anahtar", "Sanal makine eylemleri (tablo)", "Ayarlar penceresi: disk, DVD, ağ", "Üretici yazılımı, bellek, işlemci", "Test"],
    hatalar: ["VMware içinde dış sanal anahtar oluştururken sunucu kısa süre ağ bağlantısını kaybeder (uyarı penceresi bunu söyler); normaldir.", "Kitap Özel anahtar için “ana makine ve sanallar arasında” diyor; Microsoft belgelerine göre özel anahtar yalnızca sanal makineleri birbirine bağlar, ana makine dâhil olmaz. İç anahtar ana makineyi de içerir.", "2. Nesil makinede donanım ekleme listesinde IDE yok, sadece SCSI; disket de yok (birim testi 2. soru).", "Bazı ayarlar (nesil, işlemci sayısı, statik bellek) sanal makine çalışırken değiştirilemez; önce Kapat."],
    sorular: [["Denetim noktası ne işe yarar?", "Sanal makinenin o anki hâlinin fotoğrafını çeker. Bir şey bozulursa Geri Al ile o ana dönülür: deney yapmadan önce alın."], ["Dinamik bellek nedir?", "Sanal makine az bellekle başlar, ihtiyaç oldukça belirlenen sınıra kadar fazlasını alır. Bellek sanal makineler arasında verimli paylaşılır."]],
    not: "Disk türleri: Sabit boyut (tüm alan baştan ayrılır, hızlı), Dinamik olarak genişleyen (veri yazıldıkça büyür, yer kazandırır), Fark kayıt (bir ana diskteki değişiklikleri tutar)." },

  { tur: "bilgi", baslik: "Sanal anahtar türleri",
    gorsel: { tip: "tablo", sutunlar: ["Tür", "Kimler haberleşir?", "İnternet"], satirlar: [
      ["🌐 Dış", "sanal makineler + dış ağ", "✅"],
      ["🏠 İç", "ana makine + sanal makineler", "❌"],
      ["🔒 Özel", "yalnızca sanal makineler", "❌"]] },
    metin: "Eylemler → <b>Sanal Anahtar Yöneticisi</b> → tür seç → Sanal Anahtar Oluştur → ad (dış için fiziksel ağ kartı) → Tamam." },

  { tur: "odev", baslik: "2. Sıra Sizde · İki anahtar",
    metin: "Hyper-V Yöneticisi'nde bir <b>dış</b> ağ, bir <b>iç</b> ağ sanal anahtarı oluştur.",
    gorsel: { tip: "pencere", baslik: "SUNUCU19 için Sanal Anahtar Yöneticisi", sol: ["Yeni sanal ağ anahtarı", "DisAg*", "IcAg", "Genel Ağ Ayarları"], satirlar: [ { etiket: "Ad", deger: "DisAg" }, { baslik: "Bağlantı türü" }, { radyo: "Dış ağ:", secili: true }, { metin: "Intel(R) 82574L Gigabit Network Connection" }, { radyo: "İç ağ" }, { radyo: "Özel ağ" } ], dugmeler: ["Tamam", "İptal", "Uygula"], vurgu: "Tamam" },
    kitap: "s. 130" },

  { tur: "bilgi", baslik: "Sanal makine eylemleri",
    gorsel: { tip: "tablo", ad: "Tablo 2.2", sutunlar: ["Eylem", "Ne yapar?"], satirlar: [
      ["Bağlan", "sanal makinenin ekranını açar"], ["Ayarlar", "özellikleri değiştirir"], ["Başlat", "sanal makineyi açar"],
      ["Denetim Noktası", "o anki durumu kaydeder"], ["Geri Al", "önceki denetim noktasına döner"], ["Taşı", "başka sunucuya taşır"],
      ["Ver", "dosyalarını dışarı aktarır"], ["Yeniden Adlandır", "adını değiştirir"], ["Sil", "sanal makineyi siler"], ["Çoğaltmayı Etkinleştir", "kopyasını oluşturur"]] } },

  { tur: "bilgi", baslik: "Sanal makine ayarları",
    gorsel: { tip: "pencere", baslik: "SanalSunucu1 Ayarları", sol: ["Donanım Ekle*", "Üretici Yazılımı", "Güvenlik", "Bellek", "İşlemci", "SCSI Denetleyicisi", "Ağ Bağdaştırıcısı"], satirlar: [
      { baslik: "Donanım Ekle" }, { liste: ["SCSI Denetleyicisi", "Ağ Bağdaştırıcısı", "Fiber Kanal Bağdaştırıcısı"], secili: 0 }, { metin: "SCSI Denetleyicisi → Sabit Sürücü · DVD Sürücüsü · Paylaşılan Sürücü" }
    ], dugmeler: ["Tamam", "İptal", "Uygula"], vurgu: "Tamam" } },

  { tur: "bilgi", baslik: "Ayarlar penceresinde neler var?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "💽 Sabit Sürücü", alt: "Yeni: sabit boyut / dinamik genişleyen / fark kayıt" },
      { ust: "💿 DVD Sürücüsü", alt: "Gözat ile ISO bağla" },
      { ust: "🔌 Ağ Bağdaştırıcısı", alt: "sanal anahtar seç" },
      { ust: "🔢 Üretici Yazılımı", alt: "önyükleme sırası, güvenli önyükleme" },
      { ust: "🧠 Bellek", alt: "miktar, dinamik bellek, öncelik" },
      { ust: "⚙️ İşlemci", alt: "sanal işlemci sayısı, kaynak yüzdesi" }
    ]} },

  { tur: "test", sorular: [
    { soru: "📖 I) Sabit Sürücü II) DVD Sürücü III) Paylaşılan Sürücü. Hangileri SCSI Denetleyicisi türlerindendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "📖 Sanal makine ekranını görüntülemeyi sağlayan eylem hangisidir?", secenekler: ["Başlat", "Görünüm", "Bağlan", "Yenile", "Ver"], dogru: 2 },
    { soru: "📖 İşlemci sayısı ve bellek miktarını değiştirmeyi sağlayan eylem hangisidir?", secenekler: ["Ayarlar", "Bağlan", "Başlat", "Denetim Noktası", "Yenile"], dogru: 0 },
    { soru: "📖 Önyükleme cihazlarının sırasını seçmek için kullanılan ayar hangisidir?", secenekler: ["Güvenlik", "Önyükleme", "Otomatik başlatma", "Üretici Yazılımı", "Denetim Noktası"], dogru: 3 },
    { soru: "📖 I) Dış II) İç III) Özel. Hangileri sanal anahtar çeşitlerindendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "Sanal makineleri internete bağlamak için hangi sanal anahtar kullanılır?", secenekler: ["Dış", "İç", "Özel", "Hiçbiri"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Denetim noktasıyla deney",
    adimlar: ["Sanal makinede bir denetim noktası al.", "Masaüstüne birkaç dosya oluştur, bir ayarı değiştir.", "Geri Al: dosyalar ve ayar ne oldu?"],
    not: "VMware'de aynı özelliğin adı <b>Snapshot</b>'tır. Laboratuvar sanal makinelerinde ders başında snapshot almak çok işe yarar." }

]};
