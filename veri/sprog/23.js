// SPROG · 23 · Platform oyunu 3: düşman, bölüm geçme, arka plan  (Kitap s. 185–196)
var PLAT = (o) => Object.assign({ tip: "sahne", motor: "gd", proje: "Platform", dekor: "#4a90e2",
  cizim: [ { noktalar: [[-240,-150],[240,-150]], renk: "#d9a35b", kalinlik: 46 }, { noktalar: [[-60,-30],[60,-30]], renk: "#d64545", kalinlik: 14 } ] }, o);
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Platform oyununun sonu. 36. Uygulama: Sprite Dusman, “Dino_Walk_” 10 resim, Loop. Değişken tipleri: Global (tüm sahneler), Scene (o sahne), Object (o nesne). 37. Uygulama: Dusman'a sağ tık → Edit object variables → Yon = 0. 38. Uygulama: SolCarp (Left arrow button) ve SagCarp (Right arrow button) sprite'ları, düşmanın yolunun iki ucuna. 39. Uygulama: Yon = 0 → Add a force 0°, 50 + Flip NO; Yon = 1 → 180°, 50 + Flip YES. 40. Uygulama: Dusman–SagCarp çarpışınca Yon = 1; Dusman–SolCarp çarpışınca Yon = 0. 41. Uygulama: At the beginning of scene → Hide SolCarp, Hide SagCarp. 42. Uygulama: Oyuncu–Dusman çarpışması + Oyuncu is falling → Delete Dusman, Skor + 50, SkorNesne metnini güncelle. 43. Uygulama: Oyuncu–Dusman çarpışması + Oyuncu is on floor → Delete Oyuncu. 44. Uygulama: BolumSonu (Green flag); Oyuncu–BolumSonu çarpışınca Change the scene “New scene2” (önceden oluşturulmalı). 45. Uygulama: Tiled sprite ArkaPlan (tiled_Castles Background). Sıra Sizde: kâğıtta planlanan platform oyunu.",
    akis: ["36. Uygulama: dinozor düşman", "Değişken tipleri", "37–38. Uygulama: Yon değişkeni ve yön değiştirme işaretleri", "39–40. Uygulama: devriye", "41. Uygulama: işaretleri gizle", "42–43. Uygulama: kim kimi yener?", "44. Uygulama: bölüm sonu bayrağı", "45. Uygulama: arka plan resmi", "Sıra Sizde: kendi oyunun (proje ödevi)", "Test"],
    hatalar: ["<b>Kitap hatası (40. Uygulama)</b>: değişkeni değiştirmek için <b>eylem</b> listesinden “Change object variable value” (değişkene değer ata, =) seçilmeli; kitap koşul penceresindeki “Value of an object variable / Sign of the test / Value to compare” ifadelerini yazmış. Eylemde işaret “= (set to)” olmalı.", "Düşmana Add a force ile hareket verilir; Platformer character verilmez. Zemin hizasında durması için düşmanı zeminin tam üstüne yerleştirin.", "SolCarp/SagCarp gizlense de çarpışma çalışır (gizli nesne yine çarpışır): kitabın mantığı bu.", "42 ve 43'ün sırası önemli değil ama koşullar doğru olmalı: üstten düşerken (Is falling) düşman ölür, zemindeyken (Is on floor) oyuncu ölür.", "44. Uygulamada “New scene2” sahnesi yoksa ön izlemede bayrağa değince hata/boş ekran olur: önce sahneyi ekleyin.", "45. Uygulamada arka planın Z order'ını en küçük yapın (20. Uygulamadaki gibi), yoksa oyuncunun önüne geçer. Kitap “Tilde sprite” yazmış: Tiled sprite."],
    sorular: [["Neden nesne değişkeni?", "Her dinozorun kendi yönü olsun diye. Sahnede 5 dinozor varsa her birinin Yon'u ayrıdır; sahne değişkeni olsaydı hepsi birlikte dönerdi."], ["Bölüm 2 nasıl yapılır?", "Bolum1 sahnesini sağ tık → Duplicate ile kopyalayıp düzenlemek en hızlısı."]],
    olaylar: [
      { baslik: "39–41. Uygulama · Devriye", satirlar: [
        { kosul: ["The variable Yon of Dusman = 0"], eylem: ["Add to Dusman a force, angle 0°, speed 50", "Flip horizontally Dusman: no"] },
        { kosul: ["The variable Yon of Dusman = 1"], eylem: ["Add to Dusman a force, angle 180°, speed 50", "Flip horizontally Dusman: yes"] },
        { kosul: ["Dusman is in collision with SagCarp"], eylem: ["Change the variable Yon of Dusman: set to 1"] },
        { kosul: ["Dusman is in collision with SolCarp"], eylem: ["Change the variable Yon of Dusman: set to 0"] },
        { kosul: ["At the beginning of the scene"], eylem: ["Hide SolCarp", "Hide SagCarp"] }
      ] },
      { baslik: "42–44. Uygulama", satirlar: [
        { kosul: ["Oyuncu is in collision with Dusman", "Oyuncu is falling"], eylem: ["Delete Dusman", "Add 50 to scene variable Skor", "Do = \"Puan: \" + ToString(Variable(Skor)) to the text of SkorNesne"] },
        { kosul: ["Oyuncu is in collision with Dusman", "Oyuncu is on floor"], eylem: ["Delete Oyuncu"] },
        { kosul: ["Oyuncu is in collision with BolumSonu"], eylem: ["Change to scene \"New scene2\""] }
      ] }
    ] },

  { tur: "uygulama", baslik: "36–38. Uygulama · Dinozor düşman",
    metin: "Sahneye yürüyen bir dinozor koy. Yolunun iki ucuna yön değiştirme işaretleri yerleştir.",
    gorsel: PLAT({ suslar: [ { e: "⬅️", x: -200, y: -105, boy: 30 }, { e: "➡️", x: 200, y: -105, boy: 30 } ], kuklalar: [ { e: "🦖", x: 60, y: -100, boy: 56, ad: "Dusman · Yon = 0" }, { e: "🥷", x: -60, y: 5, boy: 44 } ], yazi: "⬅️ SolCarp · ➡️ SagCarp" }),
    adimlar: ["Sprite: <b>Dusman</b>, “Dino_Walk_” 10 resim, Loop → APPLY → sahneye koy.", "Objects'te Dusman'a sağ tık → Edit object variables → ad: <b>Yon</b>, değer: 0 → APPLY.", "Sprite: <b>SolCarp</b> (“Left arrow button”) ve <b>SagCarp</b> (“Right arrow button”).", "İkisini düşmanın yürüyeceği yolun iki ucuna koy."],
    kitap: "s. 185–189 · 36–38. Uygulama",
    not: "Değişken tipleri: <b>Global</b> tüm sahneler, <b>Scene</b> sadece o sahne, <b>Object</b> sadece o nesne." },

  { tur: "uygulama", baslik: "39–41. Uygulama · Devriye gezen dinozor",
    metin: "Dinozor iki işaret arasında gidip gelsin (hız 50), gittiği yöne baksın; işaretler oyunda görünmesin.",
    gorsel: PLAT({ hareket: [ { x1: -150, y1: -80, x2: 150, y2: -80 }, { x1: 150, y1: -80, x2: -150, y2: -80 } ], kuklalar: [ { e: "🦖", x: 60, y: -100, boy: 56 } ], yazi: "Yon = 0 → sağa · Yon = 1 → sola" }),
    adimlar: ["39: Koşul Dusman → Value of an object variable: Yon = 0 → eylem Add a force 0°, 50 + Flip horizontally NO.", "Yon = 1 → Add a force 180°, 50 + Flip YES.", "40: Dusman SagCarp'a çarpınca Yon'u 1 yap; SolCarp'a çarpınca 0 yap.", "41: At the beginning of the scene → SolCarp ve SagCarp → VISIBILITY → Hide.", "Ön izleme."],
    kitap: "s. 189–192 · 39–41. Uygulama" },

  { tur: "uygulama", baslik: "42–43. Uygulama · Kim kimi yener?",
    metin: "Oyuncu dinozorun üstüne zıplarsa dinozor yok olsun ve <b>+50</b> puan. Zeminde çarpışırsa oyuncu yok olsun.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Üstten düşerken", gorsel: PLAT({ hareket: [ { x1: 0, y1: 40, x2: 0, y2: -60 } ], kuklalar: [ { e: "🥷", x: 0, y: 60, boy: 44 }, { e: "🦖", x: 0, y: -100, boy: 56 } ], yazi: "Dinozor yok olur · +50" }) },
      sag: { baslik: "Zeminde çarpışınca", gorsel: PLAT({ kuklalar: [ { e: "💥", x: 0, y: -100, boy: 60 } ], yazi: "Oyuncu yok olur" }) },
      ok: "·" },
    adimlar: ["42: Koşullar Oyuncu–Dusman Collision + Oyuncu <b>Is falling</b> → Delete Dusman, Skor + 50, SkorNesne metnini güncelle.", "43: Koşullar Oyuncu–Dusman Collision + Oyuncu <b>Is on floor</b> → Delete Oyuncu."],
    kitap: "s. 192–193 · 42–43. Uygulama" },

  { tur: "uygulama", baslik: "44–45. Uygulama · Bölüm sonu ve arka plan",
    metin: "Oyuncu bayrağa ulaşınca sonraki bölüme geçsin. Sahneye resimli bir arka plan koy.",
    gorsel: PLAT({ dekor: "#7fb3e0", suslar: [ { e: "🏰", x: -140, y: -40, boy: 90 }, { e: "🏰", x: 120, y: -40, boy: 90 } ], kuklalar: [ { e: "🚩", x: 200, y: -100, boy: 50, ad: "BolumSonu" }, { e: "🥷", x: -120, y: -105, boy: 50 } ] }),
    adimlar: ["Projeye <b>New scene2</b> adında ikinci bir sahne ekle.", "Sprite: <b>BolumSonu</b>, “Green flag” → sahnenin sonuna koy.", "Olay: Oyuncu–BolumSonu Collision → Scene → Change the scene → New scene2.", "Tiled sprite: <b>ArkaPlan</b>, “tiled_Castles Background” → sahneye yay, en arkaya al."],
    kitap: "s. 193–196 · 44–45. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Kendi platform oyunun",
    metin: "Kâğıt üzerinde çizip planladığın bir platform oyununu yap. Kontrol listesi:",
    gorsel: { tip: "tablo", sutunlar: ["", "Ölçüt"], satirlar: [["1", "Oyuncu + Platformer character"], ["2", "Zemin örnekleri + Platform davranışı"], ["3", "Ödüller; oyuncu değince silinsin"], ["4", "Düşman; sağa-sola gitsin"], ["5", "Düşmana çarpınca oyuncu silinsin"], ["6", "Bayrak; değince sonraki sahne"]] },
    kitap: "s. 196" },

  { tur: "test", sorular: [
    { soru: "Sadece belirli bir nesneye ait değişken tipi hangisidir?", secenekler: ["Global", "Scene", "Object", "Layer"], dogru: 2 },
    { soru: "Oyunun tüm sahnelerinde geçerli değişken tipi?", secenekler: ["Global", "Scene", "Object", "Text"], dogru: 0 },
    { soru: "Oyuncunun düşmanın üstüne zıpladığını anlamak için hangi koşul kullanılır?", secenekler: ["Is on floor", "Is falling", "Is moving", "Key released"], dogru: 1 },
    { soru: "Yön değiştirme işaretlerini oyunda görünmez yapan eylem?", secenekler: ["Delete", "Hide", "Flip", "Center camera"], dogru: 1 },
    { soru: "Bölüm geçmek için kullanılan eylem?", secenekler: ["Quit the game", "Change the scene", "Create an object", "Play a music file"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Düşmesin, baştan başlasın",
    adimlar: ["Oyuncu silinmek yerine bölüm baştan başlasın: 43. Uygulamadaki eylemi “Change the scene → aynı sahnenin adı” yap.", "Oyuncu zeminden aşağı düşerse de baştan başlasın: koşul Oyuncu → Y position > 700.", "Hangisi daha adil geldi?"],
    not: "Sahneyi kendi adıyla yeniden açmak, onu baştan başlatır (değişkenler de sıfırlanır)." }

]};
