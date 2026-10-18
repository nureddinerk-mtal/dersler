// SPROG · 18 · Olaylar (events): koşul ve eylem  (Kitap s. 131–139)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.3: Animasyon (hareketlerin resim resim eklenmesi) ve simülasyon (oyun mantığının gerçeğe en yakın taklidi) oyunun gerçekliğini artırır. 3.3.1 Olaylar: oyunun tüm kuralları kodsuz burada belirlenir; sahnenin yanındaki “(Events)” sekmesi. Olay = koşul (condition) + eylem (action). Koşul yoksa eylem saniyede ~60 kez çalışır; eylem yoksa hiçbir şey olmaz. Olaylar yukarıdan aşağı çalışır (sıra önemli). Aynı kutuya birden çok koşul: hepsi sağlanmalı (VE). Alt olay (subevent): üst olay gerçekleşince kontrol edilir. Yorum: sarı satır. Diğer olaylar: for each, repeat, while (ileri düzey). Silme, geri al/yinele, arama. 7. Uygulama: Oyuncu1 (ninja boy) ve Oyuncu2 (ninja girl); sol ok → Delete Oyuncu1, sağ ok → Delete Oyuncu2. Sıra Sizde: 4 oyuncu, 4 ok tuşu.",
    akis: ["Animasyon ve simülasyon", "Events sekmesi ve araç çubuğu", "Koşul + eylem (örnek: sol ok → sil)", "Kurallar: koşulsuz eylem, sıra, çoklu koşul", "7. Uygulama", "Alt olay, yorum, diğer olaylar", "Sıra Sizde", "Test"],
    hatalar: ["Koşul eklerken nesneyi değil “OTHER CONDITIONS → Keyboard → Key pressed” yolunu bulmak zorlanır; yeni sürümde arama kutusuna “key pressed” yazmak en hızlısı.", "Tuş adı İngilizce ve büyük harfle başlar: Left, Right, Up, Down, Space. “left” ya da “sol” çalışmaz (yeni sürümde tuş listeden seçiliyor).", "Eylem yanlışlıkla koşul sütununa eklenir: sol sütun koşul, sağ sütun eylem.", "Silinen nesne ön izlemeyi yeniden başlatınca geri gelir: bu normal."],
    sorular: [["Koşulsuz eylem neden 60 kez?", "Oyun saniyede yaklaşık 60 kare çizer; her karede olay sayfası baştan sona okunur. Koşul yoksa eylem her karede çalışır."], ["Mbloktaki “eğer … ise” ile benzer mi?", "Evet: koşul = eğer, eylem = ise. Olay sayfası da sürekli tekrarla içindeymiş gibi her karede çalışır."]],
    olaylar: [
      { baslik: "7. Uygulama", satirlar: [ { kosul: ["Left key is pressed"], eylem: ["Delete Oyuncu1"] }, { kosul: ["Right key is pressed"], eylem: ["Delete Oyuncu2"] } ] },
      { baslik: "Sıra Sizde (kontrol listesine göre)", satirlar: [ { kosul: ["Right key is pressed"], eylem: ["Delete Oyuncu1"] }, { kosul: ["Left key is pressed"], eylem: ["Delete Oyuncu2"] }, { kosul: ["Up key is pressed"], eylem: ["Delete Oyuncu3"] }, { kosul: ["Down key is pressed"], eylem: ["Delete Oyuncu4"] } ] }
    ],
    not: "Kitapta 3.3.1.5 “klavyeden delete tuşuna yani sıra” yazım hatası: “ya da” olmalı." },

  { tur: "bilgi", baslik: "Animasyon ve simülasyon",
    gorsel: { tip: "ikili",
      sol: { baslik: "🎞️ Animasyon", gorsel: { tip: "kartlar", kartlar: [ { ust: "Yürüme, koşma, zıplama hareketleri resim resim" } ] } },
      sag: { baslik: "🧪 Simülasyon", gorsel: { tip: "kartlar", kartlar: [ { ust: "Oyun mantığını gerçeğe en yakın taklit: çarpışma, kayma" } ] } },
      ok: "+" },
    metin: "İkisi de oyunun <b>gerçekliğini</b> artırır." },

  { tur: "bilgi", baslik: "Olay = koşul + eylem",
    gorsel: { tip: "olaylar", satirlar: [ { kosul: ["⌨️ Left key is pressed"], eylem: ["🗑 Delete Oyuncu"] } ] },
    metin: "<b>Koşul</b>: eylem ne zaman olacak? <b>Eylem</b>: ne olacak? Oyunun bütün kuralları <b>(Events)</b> sekmesinde, kod yazmadan kurulur." },

  { tur: "bilgi", baslik: "Olay kuralları",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "⬇️ Yukarıdan aşağı", alt: "olaylar sırayla çalışır, sıra önemli" },
      { ust: "♾️ Koşulsuz eylem", alt: "saniyede ~60 kez tekrarlanır" },
      { ust: "🚫 Eylemsiz koşul", alt: "hiçbir şey olmaz" },
      { ust: "➕ Çoklu koşul", alt: "eylem için hepsi sağlanmalı" }
    ]} },

  { tur: "bilgi", baslik: "Birden fazla koşul",
    gorsel: { tip: "olaylar", satirlar: [ { kosul: ["Oyuncu is on floor", "Left key is pressed"], eylem: ["Delete Oyuncu"] } ] },
    metin: "Oyuncu hem zemindeyse <b>hem de</b> sol ok basılıysa silinir." },

  { tur: "uygulama", baslik: "7. Uygulama · Ok tuşuyla yok et",
    metin: "Sol ok tuşuna basınca soldaki, sağ ok tuşuna basınca sağdaki karakter yok olsun.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Başta", gorsel: { tip: "sahne", motor: "gd", tus: "← →", dekor: "#9e9e9e", kuklalar: [ { e: "🥷", x: -110, y: -20, boy: 70, ad: "Oyuncu1" }, { e: "🥷", x: 110, y: -20, boy: 70, ad: "Oyuncu2", ters: true } ] } },
      sag: { baslik: "← basınca", gorsel: { tip: "sahne", motor: "gd", tus: "←", dekor: "#9e9e9e", kuklalar: [ { e: "🥷", x: 110, y: -20, boy: 70, ad: "Oyuncu2", ters: true } ] } },
      ok: "➜" },
    adimlar: ["Boş sahneye <b>Oyuncu1</b> (kütüphanede “ninja boy”) ve <b>Oyuncu2</b> (“ninja girl”) Sprite'larını ekle, sahneye koy.", "New scene (Events) sekmesi → Add a new event.", "Add condition → OTHER CONDITIONS → Keyboard → Key pressed → Key: Left → OK.", "Add action → Oyuncu1 → Delete the object → OK.", "Sağ ok ve Oyuncu2 için aynısını yap.", "Ön izlemede sağ ve sol ok tuşlarını dene."],
    kitap: "s. 132–136 · 7. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Dört karakter",
    metin: "Sahneye <b>Oyuncu1–Oyuncu4</b> Sprite'larını ekle. Sağ, sol, yukarı ve aşağı ok tuşlarına basılınca bu nesneler sırayla yok olsun.",
    gorsel: { tip: "sahne", motor: "gd", tus: "← ↑ → ↓", dekor: "#9e9e9e", kuklalar: [ { e: "🥷", x: -160, y: 0, boy: 54, ad: "Oyuncu1" }, { e: "🥷", x: -55, y: 0, boy: 54, ad: "Oyuncu2" }, { e: "🥷", x: 55, y: 0, boy: 54, ad: "Oyuncu3" }, { e: "🥷", x: 160, y: 0, boy: 54, ad: "Oyuncu4" } ] },
    kitap: "s. 136" },

  { tur: "bilgi", baslik: "Alt olay ve yorum",
    gorsel: { tip: "olaylar", satirlar: [
      { yorum: "Yorum: olayları açıklar, sarı zeminlidir" },
      { kosul: ["Oyuncu is on floor"], eylem: [], alt: [ { kosul: ["Left key is pressed"], eylem: ["Flip Oyuncu"] }, { kosul: ["Right key is pressed"], eylem: ["Unflip Oyuncu"] } ] }
    ]},
    metin: "<b>Alt olay</b>: üstteki olay gerçekleşince kontrol edilir (içeriden başlar). <b>Yorum</b>: ilerde mantığı anlamayı kolaylaştırır.",
    not: "Diğer olaylar (for each, repeat, while…) döngüler içindir: ileri düzey. Satırlar soldaki mavi çubuktan sürüklenerek yer değiştirir." },

  { tur: "test", sorular: [
    { soru: "Bir olayın iki temel bölümü nedir?", secenekler: ["Sahne ve nesne", "Koşul ve eylem", "Sprite ve Text", "Katman ve ızgara"], dogru: 1 },
    { soru: "Koşul eklenmeden eylem eklenirse ne olur?", secenekler: ["Hiç çalışmaz", "Bir kez çalışır", "Saniyede yaklaşık 60 kez çalışır", "Oyun kapanır"], dogru: 2 },
    { soru: "Aynı kutuda iki koşul varsa eylem ne zaman çalışır?", secenekler: ["Biri sağlanınca", "İkisi de sağlanınca", "Hiçbiri sağlanmayınca", "Rastgele"], dogru: 1 },
    { soru: "Olaylar hangi sırayla çalışır?", secenekler: ["Aşağıdan yukarı", "Rastgele", "Yukarıdan aşağı", "Alfabetik"], dogru: 2 },
    { soru: "Nesneyi sahneden silen eylem hangisidir?", secenekler: ["Key pressed", "Delete the object", "Change the scene", "Is on floor"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Geri getir",
    adimlar: ["7. Uygulamaya bir olay ekle: Key pressed → Space.", "Eylem: OTHER ACTIONS → Objects → Create an object → Oyuncu1, X: 200, Y: 300.", "Ön izlemede sol okla sil, boşlukla geri getir. Boşluğa basılı tutunca ne oluyor?"],
    not: "Basılı tutulan tuş her karede yeni bir nesne oluşturur. Tek seferlik olması için koşula “Trigger once” eklenir." }

]};
