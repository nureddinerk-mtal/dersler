// SPROG · 24 · Oyunu test etme ve yayınlama  (Kitap s. 196–198)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.4: Oyun bitince olasılıklar denenmeli, farklı cihazlarda oynanmalı. 3.4.2 Test: birden çok sahne varsa başlangıç sahnesi (genelde ana menü) seçilir, sonra ön izleme; tek sahne varsa doğrudan ön izleme. 3.4.3 Yayınlama: Project Manager → Export ile istenilen cihaz için; web / HTML5 de mümkün. Birim ölçme soruları bu konunun testinde (📖). Cevap anahtarı: 1C 2C 3D 4D 5C.",
    akis: ["Test: arkadaşının oyununu oyna, hata bul", "Başlangıç sahnesini seçmek", "Export seçenekleri", "Oyun şenliği: sınıfta oyunları değiş tokuş edin", "Birim testi"],
    hatalar: ["Başlangıç sahnesi: Project Manager'da sahneye sağ tık (ya da üç nokta) → “Set as start scene”. Seçilmezse oyun listedeki ilk sahneden açılır.", "Yeni sürümde Export bazı hedefler için hesap ister; en kolayı “Web (upload online)” ile gd.games'te bağlantı almak ya da HTML5 dosyalarını indirip okul sunucusuna koymak.", "Ders sırasında herkesin aynı anda yayınlaması bağlantıyı yorabilir; önce dosyayı indirip sonra yayınlamak daha güvenli.", "📖 1. soruda kitap “aşağıdaki koşullardan hangisi” diyor; Create an object aslında bir <b>eylem</b>dir. Doğru cevap yine C."],
    sorular: [["Test ederken neye bakmalı?", "Her tuşu dene, kenarlara git, düşmana farklı açılardan çarp, skoru kontrol et, menü düğmelerine tıkla. Bulduğun hatayı not et: buna hata raporu denir."], ["Oyunu telefona koyabilir miyim?", "Export → Android ile mümkün; web sürümü de telefon tarayıcısında açılır."]],
    not: "Test için öneri: öğrenciler oyunlarını bir arkadaşa oynatsın, arkadaş 3 hata ve 1 öneri yazsın (akran testi)." },

  { tur: "bilgi", baslik: "Oyunu test etmek",
    gorsel: { tip: "akis", adimlar: [ { simge: "📋", yazi: "Başlangıç sahnesini seç", alt: "genelde ana menü" }, { simge: "▶️", yazi: "Ön izleme" }, { simge: "🐞", yazi: "Her olasılığı dene" }, { simge: "📱", yazi: "Farklı cihazlarda oyna" } ] },
    metin: "Tek sahneli oyunda doğrudan ön izleme yapılır." },

  { tur: "bilgi", baslik: "Oyunu yayınlamak",
    gorsel: { tip: "akis", adimlar: [ { simge: "☰", yazi: "Project Manager" }, { simge: "📤", yazi: "Export" }, { simge: "🌐", yazi: "Web / HTML5" }, { simge: "📱", yazi: "Android, iOS" }, { simge: "💻", yazi: "Windows, macOS, Linux" } ] },
    metin: "Oyun motoru oyunu istenen cihaz için hazırlar." },

  { tur: "uygulama", baslik: "Test et, yayınla",
    metin: "Platform oyununu bir arkadaşına oynat, hataları düzelt ve dışa aktar.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🐞 3 hata", alt: "arkadaşın bulsun" }, { ust: "💡 1 öneri", alt: "arkadaşın yazsın" }, { ust: "🔧 Düzelt", alt: "ön izlemeyle dene" }, { ust: "📤 Export", alt: "web ya da HTML5" } ] },
    adimlar: ["Oyunun birden çok sahnesi varsa başlangıç sahnesini seç.", "Ön izlemeyle oyna, sonra arkadaşına oynat.", "Bulunan hataları düzelt.", "Project Manager → Export ile oyunu dışa aktar."],
    kitap: "s. 196–197" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 Bir nesneyi istenilen konumda oluşturmayı hangisi sağlar?", secenekler: ["Add a force (angle)", "Change scene", "Create an object", "Delete the object", "Key pressed"], dogru: 2 },
    { soru: "📖 Oyunda müzik dosyası çalmak için hangi eylem kullanılır?", secenekler: ["Is moving", "Is on floor", "Play a music file", "Quit game", "Reset the timer"], dogru: 2 },
    { soru: "📖 Sahneye yerleştirilen nesneye hangi isim verilir?", secenekler: ["Eylem", "Koşul", "Olay", "Örnek", "Sahne"], dogru: 3 },
    { soru: "📖 Zemin için kullanılan, aynı grafiğin bir alanda tekrarlanmasını kolaylaştıran nesne türü?", secenekler: ["Light", "Sprite", "Text", "Tiled sprite", "Video"], dogru: 3 },
    { soru: "📖 Koşul ve eylemler hangi sekmeden eklenir?", secenekler: ["Group objects", "New scene", "New scene (Events)", "Objects", "Start Page"], dogru: 2 },
    { soru: "Birden çok sahneli oyunu test etmeden önce ne yapılır?", secenekler: ["Tüm sahneler silinir", "Başlangıç sahnesi seçilir", "Oyun dışa aktarılır", "Arka plan rengi değiştirilir"], dogru: 1 },
    { soru: "Oyunu farklı cihazlarda yayınlamak için hangi seçenek kullanılır?", secenekler: ["Save", "Export", "Close", "Launch preview"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Oyun şenliği",
    adimlar: ["Oyununu web için dışa aktar, bağlantısını öğretmenine gönder.", "Sınıfta herkes 3 oyunu oynasın ve puanlasın: eğlence, zorluk dengesi, görsellik.", "En çok oy alan oyunun yapımcısı oyununu nasıl yaptığını anlatsın."],
    not: "Gerçek oyun şirketleri de oyunları yayınlamadan önce oyunculara test ettirir: buna beta testi denir." }

]};
