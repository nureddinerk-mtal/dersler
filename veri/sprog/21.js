// SPROG · 21 · Platform oyunu 1: oyuncu, zeminler ve animasyonlar  (Kitap s. 170–180)
var PLAT = (o) => Object.assign({ tip: "sahne", motor: "gd", proje: "Platform", dekor: "#4a90e2",
  cizim: [ { noktalar: [[-240,-150],[60,-150]], renk: "#d9a35b", kalinlik: 46 }, { noktalar: [[130,-150],[240,-150]], renk: "#d9a35b", kalinlik: 46 }, { noktalar: [[-60,-30],[60,-30]], renk: "#d64545", kalinlik: 14 } ] }, o);
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.4 Test ve yayınlama başlığı altında kitap adım adım bir platform oyunu kuruyor (21–45. Uygulama); üç konuya bölündü. Bu konu: 21. Uygulama: yeni proje, sahne, arka plan mavi. 22. Uygulama: Sprite Oyuncu (ninja boy_Idle_0). 23. Uygulama: Oyuncu'ya Platformer character (zemin yoksa düşüp kaybolur). 24. Uygulama: Tiled sprite Zemin (tiled_Summer Tile Platform Center) + Platform davranışı. 25. Uygulama: Zemin2 (Small Red Platform) + Platform, Platform type: Jumpthru (altından zıplayıp üstüne çıkılır). 26. Uygulama: animasyonlar #0 duruş (Idle, Loop), #1 zıplama (jump), #2 koşma (run); Is jumping → animasyon 1. 27. Uygulama: Is on floor + Is moving (Invert) → 0. 28. Uygulama: Is on floor + Left → Flip horizontally YES + animasyon 2. 29. Uygulama: Is on floor + Right → animasyon 2 + Flip NO. 30. Uygulama: Key released Right → 0; Key released Left → 0.",
    akis: ["Platform oyunu planı (kâğıda çizdirin)", "21–22. Uygulama: sahne ve oyuncu", "23–24. Uygulama: davranışlar ve zemin", "25. Uygulama: Jumpthru", "26. Uygulama: üç animasyon", "27–30. Uygulama: doğru animasyonu göster", "Test"],
    hatalar: ["<b>Kitap hatası (26. Uygulama, 7. adım)</b>: üçüncü animasyon için yine “Ninja boy_jump_” yazıyor; koşma için <b>Ninja boy_run_</b> olmalı (#2).", "<b>Kitap hatası (29. Uygulama, 5. adım)</b>: sağa koşma için tuş <b>Right</b> olmalı, kitapta Left yazıyor.", "<b>Kitap hatası (30. Uygulama, 10. adım)</b>: ikinci olay <b>Left</b> tuşu bırakılınca olmalı, kitapta yine Right.", "Is moving koşulunda “Invert condition” işaretlenmezse duruş animasyonu hiç oynamaz (ters mantık: hareket etmiyorsa).", "Animasyon olayları sıralıdır: koşma olayı, duruş olayından sonra gelirse doğru çalışır; sıra karışınca karakter titrer.", "Kütüphane adları sürüme göre değişebilir: “ninja”, “summer”, “platform” diye aratın."],
    sorular: [["Jumpthru ne demek?", "Zıplanarak içinden geçilebilen platform: oyuncu alttan zıplayınca geçer, üstüne basınca durur."], ["Flip horizontally neden?", "Tek bir sağa bakan resim, YES ile sola çevrilir: ayrı sola koşma resimlerine gerek kalmaz."]],
    olaylar: [
      { baslik: "26–30. Uygulama · Animasyon olayları (düzeltilmiş)", satirlar: [
        { yorum: "#0 duruş · #1 zıplama · #2 koşma" },
        { kosul: ["Oyuncu is jumping"], eylem: ["Set animation of Oyuncu to 1"] },
        { kosul: ["Oyuncu is on floor", "NOT Oyuncu is moving"], eylem: ["Set animation of Oyuncu to 0"] },
        { kosul: ["Oyuncu is on floor", "Left key is pressed"], eylem: ["Flip horizontally Oyuncu: yes", "Set animation of Oyuncu to 2"] },
        { kosul: ["Oyuncu is on floor", "Right key is pressed"], eylem: ["Set animation of Oyuncu to 2", "Flip horizontally Oyuncu: no"] },
        { kosul: ["Right key is released"], eylem: ["Set animation of Oyuncu to 0"] },
        { kosul: ["Left key is released"], eylem: ["Set animation of Oyuncu to 0"] }
      ] }
    ],
    not: "Ödev: Bu konunun başında öğrencilerden kendi platform oyunlarını kâğıda çizmelerini isteyin; birim sonu Sıra Sizde'si bu planı istiyor (23. konu)." },

  { tur: "bilgi", baslik: "Platform oyununu kuruyoruz",
    gorsel: { tip: "akis", adimlar: [ { simge: "🎬", yazi: "Sahne, oyuncu, zemin" }, { simge: "🎞️", yazi: "Animasyonlar" }, { simge: "🪙", yazi: "Ödül ve skor" }, { simge: "🦖", yazi: "Düşman" }, { simge: "🏁", yazi: "Bölüm sonu" } ] },
    metin: "Oyun büyüdükçe sık sık <b>ön izleme</b> yap: her değişikliğin etkisini hemen gör." },

  { tur: "uygulama", baslik: "21–23. Uygulama · Sahne ve oyuncu",
    metin: "Mavi bir sahneye ok tuşlarıyla yürüyüp zıplayabilen bir oyuncu koy.",
    gorsel: PLAT({ cizim: [], tus: "← → boşluk", hareket: [ { x1: -60, y1: 20, x2: -60, y2: -120 } ], kuklalar: [ { e: "🥷", x: -60, y: 50, boy: 60, ad: "Oyuncu" } ], yazi: "Zemin yok: oyuncu aşağı düşüp kaybolur!" }),
    adimlar: ["Yeni proje → Empty game → sahne ekle, arka plan rengini mavi yap (5. Uygulama gibi).", "Sprite: <b>Oyuncu</b>, kütüphanede “ninja boy_Idle_0” → APPLY → sahneye koy.", "Oyuncu → BEHAVIORS → ADD A BEHAVIOR → <b>Platformer character</b> → APPLY.", "Ön izleme: ne oluyor?"],
    kitap: "s. 170–173 · 21–23. Uygulama" },

  { tur: "uygulama", baslik: "24–25. Uygulama · İki çeşit zemin",
    metin: "Oyuncu zeminlerde yürüsün; kırmızı platformun altından zıplayıp üstüne çıkabilsin.",
    gorsel: PLAT({ tus: "← → boşluk", hareket: [ { x1: -20, y1: -110, x2: -10, y2: -10 } ], kuklalar: [ { e: "🥷", x: -130, y: -105, boy: 50, ad: "Oyuncu" }, { e: "🥷", x: 0, y: 2, boy: 44 } ], yazi: "Zemin: Platform · Zemin2 (kırmızı): Platform, Jumpthru" }),
    adimlar: ["Tiled sprite: <b>Zemin</b>, “tiled_Summer Tile Platform Center” → APPLY.", "Zemin → BEHAVIORS → <b>Platform</b> → APPLY. Zemin örneklerini sahneye diz.", "Tiled sprite: <b>Zemin2</b>, “Small Red Platform”.", "Zemin2 → BEHAVIORS → Platform; <b>Platform type: Jumpthru</b> → APPLY.", "Zemin2'yi havaya yerleştir, ön izlemede alttan zıpla."],
    kitap: "s. 173–175 · 24–25. Uygulama" },

  { tur: "uygulama", baslik: "26. Uygulama · Üç animasyon",
    metin: "Oyuncu dururken, zıplarken ve koşarken farklı görünsün.",
    gorsel: [
      { tip: "tablo", ad: "Oyuncu · animasyonlar", sutunlar: ["No", "Hareket", "Kütüphanede ara"], satirlar: [["#0", "Duruş (Loop)", "Ninja boy_Idle"], ["#1", "Zıplama", "Ninja boy_jump_"], ["#2", "Koşma", "Ninja boy_run_"]] },
      { tip: "kartlar", kartlar: [ { ust: "🧍 #0", alt: "duruş" }, { ust: "🤸 #1", alt: "zıplama" }, { ust: "🏃 #2", alt: "koşma" } ] }
    ],
    adimlar: ["Oyuncu'ya çift tıkla; mevcut animasyona Ninja boy_Idle resimlerinin hepsini ekle, Loop'u işaretle.", "ADD AN ANIMATION → Ninja boy_jump_ resimlerini ekle.", "ADD AN ANIMATION → Ninja boy_run_ resimlerini ekle.", "(Events): Oyuncu → <b>Is jumping</b> koşulu → Change the animation = 1."],
    kitap: "s. 175–177 · 26. Uygulama" },

  { tur: "uygulama", baslik: "27–30. Uygulama · Doğru animasyon",
    metin: "Duruyorsa duruş, sola ya da sağa koşuyorsa koşma (doğru yöne bakarak), tuş bırakılınca yine duruş animasyonu oynasın.",
    gorsel: { tip: "ikili",
      sol: { baslik: "← basılı", gorsel: PLAT({ tus: "←", kuklalar: [ { e: "🏃", x: -40, y: -102, boy: 54 } ] }) },
      sag: { baslik: "→ basılı", gorsel: PLAT({ tus: "→", kuklalar: [ { e: "🏃", x: -40, y: -102, boy: 54, ters: true } ] }) },
      ok: "·" },
    adimlar: ["27: Is on floor + Is moving (<b>Invert condition</b>) → animasyon 0.", "28: Is on floor + Key pressed Left → <b>Flip the object horizontally: YES</b> + animasyon 2.", "29: Is on floor + Key pressed Right → animasyon 2 + Flip: NO.", "30: Key released Right → animasyon 0; Key released Left → animasyon 0.", "Ön izlemede koş, dur, zıpla."],
    kitap: "s. 177–180 · 27–30. Uygulama",
    not: "Is moving: nesne hareket ediyor. Invert condition koşulu tersine çevirir: hareket ETMİYORSA." },

  { tur: "test", sorular: [
    { soru: "Oyuncunun altından zıplayıp üstünde kalabildiği platform türü?", secenekler: ["Ladder", "Jumpthru", "Normal", "Anchor"], dogru: 1 },
    { soru: "📖 Zemin için kullanılan, aynı grafiği bir alanda tekrarlayan nesne türü?", secenekler: ["Light", "Sprite", "Text", "Tiled sprite", "Video"], dogru: 3 },
    { soru: "Karakteri sola çevirmek için hangi eylem kullanılır?", secenekler: ["Change the scene", "Flip the object horizontally", "Delete the object", "Add a force"], dogru: 1 },
    { soru: "“Hareket etmiyorsa” koşulu nasıl yapılır?", secenekler: ["Is moving + Invert condition", "Is falling", "Is jumping", "Key released"], dogru: 0 },
    { soru: "Oyuncuya Platformer character eklenip zemin konmazsa ön izlemede ne olur?", secenekler: ["Uçar", "Aşağı düşüp kaybolur", "Hiç hareket etmez", "Zıplar"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Merdiven",
    adimlar: ["Yeni bir Tiled sprite ekle: <b>Merdiven</b> (kütüphanede “ladder” ara).", "BEHAVIORS → Platform; Platform type: <b>Ladder</b>.", "Merdiveni bir zeminden ötekine uzanacak şekilde diz. Ön izlemede merdivenin önünde yukarı ok tuşuna bas."],
    not: "Platform davranışının üç türü var: Platform, Jumpthru ve Ladder (merdiven)." }

]};
