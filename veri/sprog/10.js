// SPROG · 10 · Simülasyon aracı (Packet Tracer): kurulum ve arayüz  (Kitap s. 68–73)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Blok temelli programlama araçları: kod yerine şekiller birleştirilerek uygulama yapılır. IoT için kitapta Cisco Packet Tracer (kitapta “simülasyon aracı”) seçilmiş: ağ, güvenlik ve IoT için kullanılır, mobilde de var. 3. Uygulama: Windows'a kurulum. 4. Uygulama: başlatma, oturum açma (ya da misafir). Ana pencerenin 4 bölümü: çalışma alanı, ana aygıt kategorisi, alt aygıt kategorisi, bileşenler. Sıra Sizde: rastgele bileşen ekleyip silme pratiği (kontrol listesinde MCU Board, RGB LED, Ceiling Fan, Furnace, AC).",
    akis: ["Blok temelli programlama araçları", "Packet Tracer nedir?", "3. Uygulama: kurulum (laboratuvarda önceden kurulu olmalı)", "4. Uygulama: başlatma ve oturum açma", "Ana pencere bölümleri", "Sıra Sizde: bileşen ekle-sil", "Test"],
    hatalar: ["Kitaptaki meb.ai kısa bağlantısı çalışmayabilir. Packet Tracer, Cisco Networking Academy (netacad.com) hesabıyla ücretsiz indirilir; sürüm 8.x kullanın.", "Laboratuvar bilgisayarları dondurulmuşsa (Deep Freeze) kurulumu dondurma kapalıyken yapın, yoksa yeniden başlatınca silinir.", "Misafir girişinde kaydetme sınırlıdır; öğrenciler netacad hesabı açmalı (13+ yaş).", "Bileşeni silmek için: Delete tuşuna bas, sonra bileşene tıkla (ya da bileşeni seçip Delete)."],
    sorular: [["Packet Tracer sadece IoT için mi?", "Hayır, asıl ağ (network) simülasyonu için yapılmış: router, switch, kablo… 11D'deki Sunucu dersinde de işe yarar."], ["Telefonda var mı?", "Evet, mobil uygulama mağazalarında da var (kitap)."]],
    not: "IoT bileşenleri: End Devices → Home / Smart City / Industrial; Components → Boards (MCU, SBC), Actuators (LED, fan…), Sensors." },

  { tur: "bilgi", baslik: "Blok temelli programlama araçları",
    metin: "Programlanabilir cihazları kod yazmadan, <b>şekilleri belli sırada birleştirerek</b> programlamak.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🖥️ Cisco Packet Tracer", alt: "Kitapta “simülasyon aracı”. Ağ, ağ güvenliği, IoT" },
      { ust: "📱 Mobilde de var", alt: "Tablet ve telefona yüklenebilir" },
      { ust: "🧩 Blok + Python", alt: "Kart programları bloklarla ya da Python ile yazılır" }
    ]}},

  { tur: "uygulama", baslik: "3. Uygulama · Kurulum",
    gorsel: { tip: "akis", adimlar: [
      { simge: "⬇️", yazi: "Kurulum dosyasını indir", alt: "netacad.com" },
      { simge: "🛡️", yazi: "Çift tıkla → Evet" },
      { simge: "📜", yazi: "I accept → Next" },
      { simge: "📁", yazi: "Yol ve Başlat menüsü → Next" },
      { simge: "🖱️", yazi: "Kısayollar → Next" },
      { simge: "✅", yazi: "Install" }
    ]},
    adimlar: ["Kurulum dosyasını indir (öğretmeninden bağlantıyı al).", "Dosyayı çift tıkla, güvenlik uyarısına Evet de.", "Lisans sözleşmesini kabul et (I accept → Next).", "Kurulum yolunu ve Başlat menüsü klasörünü değiştirmeden Next.", "Masaüstü kısayolunu işaretle, Install ile kur."],
    kitap: "s. 68–70 · 3. Uygulama" },

  { tur: "uygulama", baslik: "4. Uygulama · Başlat ve oturum aç",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🔎", yazi: "Başlat → “packet” yaz" },
      { simge: "▶️", yazi: "Cisco Packet Tracer" },
      { simge: "👤", yazi: "E-posta + parola ile giriş", alt: "ya da Continue as a Guest → Confirm Guest" }
    ]},
    adimlar: ["Başlat düğmesine tıkla, “packet” yaz.", "Cisco Packet Tracer'ı aç.", "Hesabınla giriş yap. Hesabın yoksa Sign Up; misafir için Continue as a Guest → Confirm Guest."],
    kitap: "s. 71–72 · 4. Uygulama" },

  { tur: "bilgi", baslik: "Ana pencere",
    gorsel: { tip: "html", icerik: `<svg viewBox="0 0 460 260" style="max-width:520px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="13">
      <rect x="10" y="10" width="440" height="170" rx="6" fill="#eef4fb" stroke="#9db"/><text x="230" y="90" text-anchor="middle" font-size="16" fill="#335">1 · Çalışma alanı</text><text x="230" y="112" text-anchor="middle" fill="#557">bileşenler buraya yerleştirilir</text>
      <rect x="10" y="190" width="110" height="60" rx="6" fill="#fde9c9" stroke="#e0a800"/><text x="65" y="216" text-anchor="middle">2 · Ana</text><text x="65" y="234" text-anchor="middle">kategori</text>
      <rect x="128" y="190" width="110" height="60" rx="6" fill="#e3f6e3" stroke="#27ae60"/><text x="183" y="216" text-anchor="middle">3 · Alt</text><text x="183" y="234" text-anchor="middle">kategori</text>
      <rect x="246" y="190" width="204" height="60" rx="6" fill="#efe3fb" stroke="#9b51e0"/><text x="348" y="216" text-anchor="middle">4 · Bileşenler</text><text x="348" y="234" text-anchor="middle">🔌 💡 🌀 🔥 ❄️</text>
    </svg>` },
    not: "Bileşen eklemek: ana kategori → alt kategori → bileşen → çalışma alanına tıkla." },

  { tur: "odev", baslik: "Sıra Sizde · Bileşen ekle, sil",
    metin: "Çalışma alanına bileşenler ekleyerek pratik yap. Silmek için Delete tuşuna basıp bileşene tıkla.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🔲 MCU Board", alt: "mikrodenetleyici kart" }, { ust: "🌈 RGB LED", alt: "kırmızı-yeşil-mavi LED" }, { ust: "🌀 Ceiling Fan", alt: "tavan fanı" }, { ust: "🔥 Furnace", alt: "kalorifer" }, { ust: "❄️ AC", alt: "klima" } ] },
    kitap: "s. 73" },

  { tur: "test", sorular: [
    { soru: "Kitapta “simülasyon aracı” olarak adlandırılan program hangisidir?", secenekler: ["mBlock", "Cisco Packet Tracer", "Tinkercad", "Construct"], dogru: 1 },
    { soru: "Bileşenlerin yerleştirilip ayarlarının yapıldığı bölüm?", secenekler: ["Ana aygıt kategorisi", "Alt aygıt kategorisi", "Çalışma alanı", "Bileşenler"], dogru: 2 },
    { soru: "Misafir olarak giriş yapmanın dezavantajı nedir?", secenekler: ["Bileşen eklenemez", "Kaydetme sayısı sınırlıdır", "Program açılmaz", "İnternet gerekmez"], dogru: 1 },
    { soru: "Bileşen eklemenin doğru sırası?", secenekler: ["Bileşen → ana kategori → alan", "Ana kategori → alt kategori → bileşen → alana tıkla", "Alana tıkla → bileşen", "Alt kategori → ana kategori"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "İki bilgisayarı konuştur",
    adimlar: ["End Devices'tan iki PC ekle, Connections'tan çapraz (Copper Cross-Over) kabloyla bağla.", "PC0 → Desktop → IP Configuration: 192.168.1.1, PC1: 192.168.1.2.", "PC0 → Command Prompt: ping 192.168.1.2. Cevap geliyor mu?"],
    not: "Packet Tracer'ın asıl işi ağ simülasyonu: bu küçük deneme bir ağ kurmaktır." }

]};
