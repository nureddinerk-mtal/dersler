// SPROG · 08 · Proje oluşturma: dans, kar ve balon yakalama  (Kitap s. 46–55)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Birimin tüm yapılarını (olay, döngü, karar, değişken, ses, eklenti) birleştiren üç proje. 12. Uygulama: davul eşliğinde dans eden Max, boşlukla renk değişimi (Müzik eklentisi). 13. Uygulama: yön tuşlarıyla karları yakalayan çocuk, Sayaç değişkeni, kar kopyaları. 14. Uygulama: fareyi takip eden sihirbaz, sarı balon +5, mavi balon −5. Sıra Sizde: labirent oyunu (duvara değince başa dön). Birim ölçme soruları da burada.",
    akis: ["Proje = tüm yapılar bir arada", "12. Uygulama (Müzik eklentisi)", "13. Uygulama: kar yakalama (2 ders sürebilir)", "14. Uygulama: balon yakalama", "Sıra Sizde: labirent (ödev, temrin 8)", "Birim testi"],
    hatalar: ["Kar kuklasını kopyalarken kodları da kopyalandığını bilmemek; kopyalar zaten çalışır, tek tek yazmaya gerek yok.", "Sayaç'ı yeşil bayrakta sıfırlamayı unutmak; oyun her başladığında eski puandan devam eder.", "Yakalanan karı gizlemek yerine yukarı göndermek gerekir: rastgele x, y = 180.", "Labirentte duvar rengiyle “renge dokunuyor mu?” kullanılırken rengi damlalıkla tam seçmemek."],
    sorular: [["Puan neden bazen 2 artıyor?", "Kar çocuğa değdiği sürece eğer bloğu birkaç kez çalışabilir. Değer değmez karı yukarı göndermek bunu çözer."], ["Oyuna süre koyabilir miyim?", "Evet: zamanlayıcı > 30 olunca “Oyun bitti” de ve tümünü durdur (Meraklısına)."]],
    bloklar: `// 13. Uygulama · Çocuk
when flag clicked
set [Sayaç v] to (0)
forever
if <key (sağ ok v) pressed?> then
change x by (10)
end
if <key (sol ok v) pressed?> then
change x by (-10)
end
end

// 13. Uygulama · Kar
when flag clicked
go to (rastgele konum v)
set y to (180)
forever
change y by (-5)
if <touching (Çocuk v)?> then
start sound (Pop v)
change [Sayaç v] by (1)
go to (rastgele konum v)
set y to (180)
end
if <(y position) < [-170]> then
set y to (180)
end
end

// 14. Uygulama · Sihirbaz
when flag clicked
set [Skor v] to (0)
forever
go to (fare imleci v)
end

// Sarı balon (mavi balonda -5)
when flag clicked
show
forever
if <touching (Sihirbaz v)?> then
change [Skor v] by (5)
hide
end
end` },

  { tur: "uygulama", baslik: "12. Uygulama · Müzikle dans",
    metin: "Yeşil bayrakla Max “Dansımı izlemeye ne dersiniz?” desin, sonra davul eşliğinde ileri-geri dans etsin. Boşluk tuşuna basınca rengi değişsin.",
    gorsel: { tip: "sahne", proje: "Müzikdans", tus: "boşluk", dekor: "tiyatro", suslar: [ { e: "🥁", x: 170, y: -120, boy: 50 }, { e: "🎶", x: -170, y: 110, boy: 34 } ], hareket: [ { x1: -50, y1: -72, x2: 50, y2: -72 } ], kuklalar: [ { e: "🕺", x: 0, y: -72, boy: 100, balon: "Dansımı izlemeye ne dersiniz?" } ] },
    adimlar: ["“Müzikdans” projesi; dekor ve Max kuklası ekle, x:0 y:−72'ye git.", "2 saniye “Dansımı izlemeye ne dersiniz?” de.", "Eklentiden Müzik'i ekle.", "Sürekli tekrarla içine davul vuruşu ve ileri-geri hareket blokları koy.", "Boşluk tuşuna basılınca renk etkisini değiştir."],
    kitap: "s. 46–47 · 12. Uygulama" },

  { tur: "uygulama", baslik: "13. Uygulama · Kar yakalama",
    metin: "Çocuk sağ-sol yön tuşlarıyla hareket etsin; yukarıdan rastgele yerden düşen karları yakaladıkça Sayaç 1 artsın, pop sesi çıksın.",
    gorsel: { tip: "sahne", proje: "Kar yakalama", tus: "← →", dekor: "kar", degiskenler: [["Sayaç", 7]], suslar: [ { e: "🌲", x: -200, y: -110, boy: 60 }, { e: "🌲", x: 205, y: -115, boy: 54 } ], hareket: [ { x1: -120, y1: 150, x2: -120, y2: 40 }, { x1: 80, y1: 120, x2: 80, y2: 10 } ], kuklalar: [ { e: "❄️", x: -120, y: 30, boy: 30 }, { e: "❄️", x: 80, y: 0, boy: 30 }, { e: "❄️", x: 10, y: 140, boy: 30 }, { e: "🧒", x: -20, y: -130, boy: 64 } ] },
    adimlar: ["“Kar yakalama” projesi: dekor, çocuk ve kar kuklaları ekle.", "Çocuk: sağ/sol ok basılıysa x'i ±10 değiştir (sürekli).", "Kar: rastgele konuma git, y'yi 180 yap; sürekli y'yi −5 değiştir.", "Kar çocuğa değerse: pop sesi, Sayaç +1, yukarıdan yeniden düş.", "Kar kuklasını sağ tık → kopyasını çıkart ile çoğalt.", "Sayaç değişkenini oluştur, yeşil bayrakta 0 yap."],
    kitap: "s. 47–49 · 13. Uygulama" },

  { tur: "uygulama", baslik: "14. Uygulama · Balon yakalama",
    metin: "Sihirbaz fareyi takip etsin. Sarı balon yakalanınca +5, mavi balon −5 puan; yakalanan balon kaybolsun.",
    gorsel: { tip: "sahne", proje: "Balon yakalama", dekor: "gok", degiskenler: [["Skor", 15]], kuklalar: [ { e: "🎈", x: -150, y: 90, boy: 44 }, { e: "🟡", x: 60, y: 120, boy: 34 }, { e: "🔵", x: 150, y: 30, boy: 34 }, { e: "🟡", x: -60, y: -10, boy: 34 }, { e: "🔵", x: -170, y: -60, boy: 34 }, { e: "🧙‍♀️", x: 40, y: -100, boy: 70 } ], yazi: "🟡 sarı balon +5 · 🔵 mavi balon −5 · 🖱️ sihirbaz fareyi takip eder" },
    adimlar: ["“Balon yakalama” projesi: sihirbaz, sarı ve mavi balon kuklaları ekle.", "Sihirbaz: sürekli fare imlecine git.", "Skor değişkeni oluştur, başta 0 yap.", "Sarı balon sihirbaza değerse Skor +5, gizlen.", "Mavi balon sihirbaza değerse Skor −5, gizlen."],
    kitap: "s. 50–51 · 14. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Labirent oyunu",
    metin: "Böcek yön tuşlarıyla başlangıçtan su kabına gitsin. Duvara değerse başlangıca dönsün. Labirent oyununu hazırla.",
    gorsel: { tip: "sahne", tus: "← ↑ → ↓", dekor: "beyaz", cizim: [ { noktalar: [[-220,160],[220,160],[220,-160],[-220,-160],[-220,160]], renk: "#4a3a8a", kalinlik: 8 }, { noktalar: [[-120,160],[-120,-60]], renk: "#4a3a8a", kalinlik: 8 }, { noktalar: [[-20,-160],[-20,60]], renk: "#4a3a8a", kalinlik: 8 }, { noktalar: [[80,160],[80,-60]], renk: "#4a3a8a", kalinlik: 8 } ], kuklalar: [ { e: "🐞", x: -175, y: 120, boy: 36, ad: "başlangıç" }, { e: "🥛", x: 160, y: -120, boy: 40, ad: "bitiş" } ] },
    kitap: "s. 52" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 mBlock'a çevrim içi kayıtta hangi bilgi gerekir?", secenekler: ["Doğum tarihi", "E-posta", "Kullanıcı adı", "Telefon numarası", "Ülke bilgisi"], dogru: 1 },
    { soru: "📖 Program akışı, tekrarlı ve koşullu görevler hangi blok grubundadır?", secenekler: ["Değişkenler", "Hareket", "Kontrol", "Olaylar", "Ses"], dogru: 2 },
    { soru: "📖 Robot kuklası (0,0)'dan (−100,−100) koordinatına giderse hangi bölgede olur?", secenekler: ["Sağ üst", "Sol üst", "Sol alt", "Sağ alt"], dogru: 2 },
    { soru: "📖 Kuklanın sürekli kaybolup yeniden görünmesi için “sürekli tekrarla” içine hangi iki blok gelmeli?", secenekler: ["ön katmana git · görün", "ön katmana git · gizlen", "görün · gizlen (aralarında bekle)", "görsel etkileri temizle · görün", "geri katmana git · görün"], dogru: 2 },
    { soru: "Kar yakalama oyununda puanı tutan nedir?", secenekler: ["Kostüm", "Değişken (Sayaç)", "Dekor", "Ses"], dogru: 1 },
    { soru: "Kuklanın fareyi takip etmesi için hangi blok sürekli tekrarlanır?", secenekler: ["rastgele konuma git", "fare imlecine git", "x:0 y:0 git", "kenara geldiyse sek"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Süreli oyun",
    gorsel: { tip: "bloklar", kod: "when flag clicked\nreset timer\nwait until <(timer) > [30]>\nsay (join [Süre bitti! Puan: ] (Sayaç)) for (3) seconds\nstop [tümü v]" },
    not: "Kar yakalama oyununa 30 saniye süre ekle. Rekor için ikinci bir değişken (Rekor) tut: Sayaç > Rekor ise Rekor = Sayaç." }

]};
