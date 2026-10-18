// SPROG · 04 · Döngü ve değişken: algoritmadan koda  (Kitap s. 29–33)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "4. Uygulama: denizanası 1 sn arayla 4 kez rastgele konuma gidip kostüm değiştirir, sonra (50,50)'de “Merhaba” der. Önce uzun yazılır, sonra “4 defa tekrarla” döngüsüyle kısaltılır: döngünün mantığı. 5. Uygulama: sor-ve-bekle ile iki sayı alıp toplamı yazan program: değişken ve yanıt. Sıra Sizde: elmaları toplayıp en kısa yoldan eve giden çocuk.",
    akis: ["4. Uygulama uzun hâli", "Aynı işi döngüyle yap: blok sayısını karşılaştırın", "Değişken nedir? (kutu benzetmesi)", "5. Uygulama", "Sıra Sizde (ödev)", "Test"],
    hatalar: ["“yanıt” bloğu her yeni sorudan sonra değişir; ilk cevabı hemen a değişkenine kaydetmeyi unutmak.", "Toplama için iki metni birleştir bloğunu kullanmak: “3”+“5” = “35” olur. İşlemler'deki ( ) + ( ) bloğu kullanılmalı.", "Değişkeni “Tüm kuklalar için” ya da “Sadece bu kukla için” seçimi karıştırılabilir; şimdilik fark etmez."],
    sorular: [["Değişken ne demek?", "İçine değer konan, adı olan bir kutu. Değeri program çalışırken değişebilir."], ["Sürekli tekrarla ile 10 defa tekrarla farkı?", "Biri sonsuza kadar (dur'a basana kadar), diğeri belirli sayıda tekrarlar. 5. konuda bu fark bir hataya sebep olacak."]],
    bloklar: `when flag clicked
repeat (4)
go to (rastgele konum v)
next costume
wait (1) seconds
end
go to x: (50) y: (50)
say [Merhaba!]

when flag clicked
ask [1. sayıyı giriniz] and wait
set [a v] to (answer)
ask [2. sayıyı giriniz] and wait
set [b v] to (answer)
set [toplam v] to ((a) + (b))
say (join [Bu iki sayının toplamı ] (toplam)) for (4) seconds` },

  { tur: "uygulama", baslik: "4. Uygulama · Denizanası",
    metin: "Yeşil bayrağa tıklanınca denizanası 1 saniye arayla 4 kez rastgele konuma gitsin, her konumda kostüm değiştirsin, sonra x:50 y:50'de durup “Merhaba” desin.",
    gorsel: { tip: "sahne", proje: "denizanası", dekor: "deniz", suslar: [ { e: "🪸", x: -180, y: -150, boy: 50 }, { e: "🐠", x: 170, y: -110, boy: 34 } ], hareket: [ { x1: -150, y1: 80, x2: 120, y2: -40 }, { x1: 120, y1: -40, x2: -60, y2: -100 }, { x1: -60, y1: -100, x2: 50, y2: 50 } ], kuklalar: [ { e: "🪼", x: 50, y: 50, boy: 60, balon: "Merhaba!" } ] },
    adimlar: ["Projeyi “denizanası” olarak kaydet.", "Yeşil bayrak → rastgele konuma git → sonraki kostüm → 1 saniye bekle. Bu üçlüyü 4 kez ekle.", "x:50 y:50 konumuna git, Merhaba! de.", "Şimdi aynısını “4 defa tekrarla” bloğuyla kısa yoldan yap."],
    kitap: "s. 29–30 · 4. Uygulama" },

  { tur: "bilgi", baslik: "Döngü",
    metin: "Bir işin birden fazla tekrarlanması gerekiyorsa <b>döngü</b> kullanılır. Daha az blokla aynı sonuç.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Uzun yol · 12 blok", gorsel: { tip: "bloklar", kod: "go to (rastgele konum v)\nnext costume\nwait (1) seconds\ngo to (rastgele konum v)\nnext costume\nwait (1) seconds\n…" } },
      sag: { baslik: "Döngüyle · 4 blok", gorsel: { tip: "bloklar", kod: "repeat (4)\ngo to (rastgele konum v)\nnext costume\nwait (1) seconds\nend" } },
      ok: "➜" } },

  { tur: "bilgi", baslik: "Değişken",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📦 Değişken", alt: "Adı olan, içine değer konan kutu: a, b, toplam" },
      { ust: "❓ sor ve bekle", alt: "Kullanıcıdan cevap ister (Algılama)" },
      { ust: "💬 yanıt", alt: "Son sorunun cevabını tutar" },
      { ust: "➕ ( ) + ( )", alt: "İki sayıyı toplar (İşlemler)" }
    ]},
    not: "Değişkenler bloğundan “Bir değişken oluştur” ile tanımlanır." },

  { tur: "uygulama", baslik: "5. Uygulama · İki sayının toplamı",
    metin: "Yeşil bayrağa tıklanınca iki sayı sorsun, toplamını 4 saniye söylesin.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Önce", gorsel: { tip: "sahne", proje: "iki sayının toplamı", dekor: "beyaz", kuklalar: [ { e: "🐼", x: 0, y: 20, boy: 70 } ], degiskenler: [["a", 12], ["b", ""], ["toplam", ""]], sor: { soru: "2. sayıyı giriniz", cevap: "30" } } },
      sag: { baslik: "Sonra", gorsel: { tip: "sahne", proje: "iki sayının toplamı", dekor: "beyaz", kuklalar: [ { e: "🐼", x: -40, y: -20, boy: 70, balon: "Bu iki sayının toplamı 42" } ], degiskenler: [["a", 12], ["b", 30], ["toplam", 42]] } },
      ok: "➜" },
    adimlar: ["Projeyi “iki sayının toplamı” olarak kaydet.", "a, b ve toplam adında üç değişken oluştur.", "“1. sayıyı giriniz” diye sor ve bekle; a'yı yanıt yap. Aynısını b için yap.", "toplam'ı a + b yap.", "“Bu iki sayının toplamı” ile toplam'ı birleştirip 4 saniye söylet."],
    kitap: "s. 31–32 · 5. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · En kısa yoldan eve",
    metin: "Çocuk tüm elmaları toplayıp en kısa yoldan eve gitmeli. Önce en kısa yolu deneme-yanılmayla bul, algoritmasını defterine yaz, sonra mBlock'ta kodla.",
    gorsel: { tip: "sahne", dekor: "cim", izgara: true, suslar: [ { e: "🍎", x: -120, y: 40, boy: 30 }, { e: "🍎", x: 40, y: 120, boy: 30 }, { e: "🍎", x: 120, y: -40, boy: 30 }, { e: "🏠", x: 200, y: 120, boy: 50 } ], kuklalar: [ { e: "🧒", x: -200, y: -120, boy: 50 } ] },
    kitap: "s. 32–33" },

  { tur: "test", sorular: [
    { soru: "Bir işi belirli sayıda tekrarlamak için hangi blok kullanılır?", secenekler: ["sürekli tekrarla", "( ) defa tekrarla", "eğer ise", "bekle"], dogru: 1 },
    { soru: "Kullanıcının son verdiği cevabı hangi blok tutar?", secenekler: ["yanıt", "zamanlayıcı", "x konumu", "kostüm numarası"], dogru: 0 },
    { soru: "a = 3 ve b = 5 iken “a ile b'yi birleştir” sonucu nedir?", secenekler: ["8", "35", "15", "53"], dogru: 1 },
    { soru: "Değişken ne işe yarar?", secenekler: ["Kuklayı döndürür", "Bir değeri saklar", "Ses çalar", "Dekoru değiştirir"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Dört işlem makinesi",
    metin: "5. Uygulamayı geliştir: toplamın yanında fark, çarpım ve bölümü de sırayla söylesin.",
    gorsel: { tip: "bloklar", kod: "say (join [Çarpım: ] ((a) * (b))) for (2) seconds" } }

]};
