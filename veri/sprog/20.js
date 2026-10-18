// SPROG · 20 · Temel oyun mekanikleri: uzay gemisi oyunu  (Kitap s. 156–170)
var UZAY = (o) => Object.assign({ tip: "sahne", motor: "gd", proje: "Uzay", dekor: "uzay", suslar: [ { e: "✨", x: -190, y: 130, boy: 20 }, { e: "✨", x: 150, y: 150, boy: 16 }, { e: "✨", x: 60, y: -140, boy: 18 } ] }, o);
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.3.5: Birçok oyunda ortak mekanikler: klavyeyle hareket, çarpışma, ateş etme. Açılar: sağ 0°, aşağı 90°, sol 180°, yukarı 270° (ekranda Y aşağı doğru artar!). Add a force (angle): açı + hız. 13. Uygulama: UzayGemi (Orange playerShip), 4 ok tuşu → Add a force: 180/0/270/90, hız 200. 14. Uygulama: Mermi (Bullet_1); Space → Create an object Mermi, X = UzayGemi.CenterX(), Y = UzayGemi.CenterY(); Mermi → Add a force 0°, 200, Permanent. 15. Uygulama: zamanlayıcı: Space kutusuna “Value of scene timer ≥ 1 sn, Ateszaman” koşulu; eylemlere Start (or reset) a scene timer “Ateszaman”. 16. Uygulama: DusmanGemi (Blue playerShip); her 1 sn (Dusmanzaman) X = 800, Y = Random(600)'da oluştur, 180°, 250, Permanent; timer sıfırla; Angle = 270. 17. Uygulama: UzayGemi–DusmanGemi çarpışınca ikisini de sil. 18. Uygulama: Mermi–DusmanGemi çarpışınca ikisini sil. 19. Uygulama: o kutuya Skor sahne değişkeni +10; Text PuanNesne (25, kırmızı, “Puan: 0”) → Modify the text = \"Puan: \" + ToString(Variable(Skor)). 20. Uygulama: Tiled sprite ArkaPlan (tiled_Castles), Z order 0, koşulsuz olay: Image X offset + 1.",
    akis: ["Ortak mekanikler", "Açılar ve Add a force", "13. Uygulama: hareket", "14. Uygulama: ateş", "15. Uygulama: saniyede bir atış", "16. Uygulama: düşmanlar", "17–18. Uygulama: çarpışma", "19. Uygulama: skor", "20. Uygulama: kayan arka plan", "Sıra Sizde'ler (6 tane: ödev olarak bölün)", "Test"],
    hatalar: ["Açılar matematikteki gibi değil: Y aşağı doğru arttığı için <b>90° aşağı, 270° yukarı</b>. Öğrenciler en çok burada takılır.", "Instant seçilirse nesne tuş bırakılınca durur (gemi için doğru); mermi ve düşmanda <b>Permanent</b> seçilmezse mermi yerinde kalır.", "15. Uygulama: kitapta zamanlayıcı hiç başlatılmıyor. Bazı sürümlerde başlatılmamış zamanlayıcı koşulu hiç doğru olmaz; sağlam olsun diye “At the beginning of the scene → Start (or reset) a scene timer” olayı ekleyin. Zamanlayıcı adı tırnak içinde: \"Ateszaman\".", "Mermi ve düşmanlar sahneden çıkınca birikir: Destroy when outside of the screen davranışı eklemeyi önerin (17. konuda gördük).", "Yeni sürümde değişkenler doğrudan yazılabilir: \"Puan: \" + ToString(Skor). Kitaptaki Variable(Skor) yazımı da çalışır.", "Düşmanın 270° döndürülmesi, resmin yukarı bakan geminin sola dönmesi içindir; resim zaten sola bakıyorsa açı değişir."],
    sorular: [["CenterX() ne demek?", "Nesnenin merkezinin X konumu. Mermi geminin tam ortasından çıksın diye kullanılır."], ["Random(600) neden?", "0 ile 600 arasında rastgele bir sayı: düşman her seferinde farklı yükseklikten gelir. Sahne yüksekliği 600."], ["Kayan arka plan nasıl sonsuz?", "Tiled sprite resmi kendini tekrarlar; resim ofsetini her karede 1 artırmak resmi kaydırır, kenar hiç bitmez."]],
    olaylar: [
      { baslik: "13. Uygulama · Hareket", satirlar: [ { kosul: ["Left key is pressed"], eylem: ["Add to UzayGemi a force, angle 180°, speed 200"] }, { kosul: ["Right key is pressed"], eylem: ["… angle 0°, speed 200"] }, { kosul: ["Up key is pressed"], eylem: ["… angle 270°, speed 200"] }, { kosul: ["Down key is pressed"], eylem: ["… angle 90°, speed 200"] } ] },
      { baslik: "14 + 15. Uygulama · Saniyede bir ateş", satirlar: [ { kosul: ["Space key is pressed", "Value of scene timer \"Ateszaman\" ≥ 1 s"], eylem: ["Create object Mermi at UzayGemi.CenterX(); UzayGemi.CenterY()", "Add to Mermi a permanent force, angle 0°, speed 200", "Start (or reset) the timer \"Ateszaman\""] } ] },
      { baslik: "16. Uygulama · Düşman", satirlar: [ { kosul: ["Value of scene timer \"Dusmanzaman\" ≥ 1 s"], eylem: ["Create object DusmanGemi at 800; Random(600)", "Add to DusmanGemi a permanent force, angle 180°, speed 250", "Start (or reset) the timer \"Dusmanzaman\"", "Do = 270 to the angle of DusmanGemi"] } ] },
      { baslik: "17–19. Uygulama · Çarpışma ve skor", satirlar: [ { kosul: ["UzayGemi is in collision with DusmanGemi"], eylem: ["Delete UzayGemi", "Delete DusmanGemi"] }, { kosul: ["Mermi is in collision with DusmanGemi"], eylem: ["Delete Mermi", "Delete DusmanGemi", "Add 10 to scene variable Skor", "Do = \"Puan: \" + ToString(Variable(Skor)) to the text of PuanNesne"] } ] },
      { baslik: "20. Uygulama · Kayan arka plan", satirlar: [ { kosul: [], eylem: ["Do + 1 to image X offset of ArkaPlan"] } ] },
      { baslik: "Sıra Sizde çözümleri", satirlar: [ { yorum: "16. Uygulama Sıra Sizde: yukarıdan düşen nesne" }, { kosul: ["Value of scene timer \"DususZaman\" ≥ 2 s"], eylem: ["Create object Dusus at Random(800); 0", "Add to Dusus a permanent force, angle 90°, speed 250", "Start (or reset) the timer \"DususZaman\""] }, { yorum: "18. Uygulama Sıra Sizde: engel" }, { kosul: ["UzayGemi is in collision with Engel"], eylem: ["Delete UzayGemi"] }, { yorum: "19. Uygulama Sıra Sizde: söz" }, { kosul: ["The cursor/touch is on Soz"], eylem: ["Do = \"Mustafa Kemal ATATÜRK\" to the text of Soz"] } ] }
    ] },

  { tur: "bilgi", baslik: "Açılar",
    gorsel: { tip: "html", icerik: `<svg viewBox="0 0 260 220" style="max-width:300px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="14" text-anchor="middle">
      <defs><marker id="oka" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#2f80ed"/></marker></defs>
      <text x="130" y="118" font-size="30">🚀</text>
      <line x1="150" y1="108" x2="215" y2="108" stroke="#2f80ed" stroke-width="3" marker-end="url(#oka)"/><text x="235" y="113">0°</text>
      <line x1="110" y1="108" x2="45" y2="108" stroke="#2f80ed" stroke-width="3" marker-end="url(#oka)"/><text x="22" y="113">180°</text>
      <line x1="130" y1="88" x2="130" y2="35" stroke="#2f80ed" stroke-width="3" marker-end="url(#oka)"/><text x="130" y="24">270°</text>
      <line x1="130" y1="128" x2="130" y2="182" stroke="#2f80ed" stroke-width="3" marker-end="url(#oka)"/><text x="130" y="205">90°</text>
    </svg>` },
    metin: "<b>Add a force (angle)</b>: nesneyi verilen açıda ve hızda hareket ettirir. Ekranda Y aşağı doğru artar: aşağı 90°, yukarı 270°." },

  { tur: "uygulama", baslik: "13. Uygulama · Gemiyi sür",
    metin: "Uzay gemisi ok tuşlarıyla dört yöne gitsin (hız 200).",
    gorsel: UZAY({ tus: "← ↑ → ↓", hareket: [ { x1: 0, y1: 0, x2: 110, y2: 0 }, { x1: 0, y1: 0, x2: -110, y2: 0 }, { x1: 0, y1: 0, x2: 0, y2: 100 }, { x1: 0, y1: 0, x2: 0, y2: -100 } ], kuklalar: [ { e: "🚀", x: 0, y: 0, boy: 56, ad: "UzayGemi" } ] }),
    adimlar: ["Boş proje, sahne → Sprite: <b>UzayGemi</b>, kütüphanede “Orange playerShip”. Sahnenin ortasına koy.", "(Events): Key pressed: Left → Add action → UzayGemi → Add a force (angle): Angle 180, Speed 200.", "Right, Up ve Down için de olay ekle (açıları yukarıdaki şemadan bul).", "Ön izleme."],
    kitap: "s. 156–157 · 13. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Dört gemi",
    metin: "Sahneye UzayGemi1–UzayGemi4 Sprite'larını ekle. Sağ ok tuşuna basılınca dördü birden <b>sağdan sola</b> gitsin.",
    kitap: "s. 157" },

  { tur: "uygulama", baslik: "14–15. Uygulama · Ateş et",
    metin: "Boşluk tuşuyla geminin olduğu yerden sağa doğru mermi çıksın; saniyede en fazla <b>bir</b> mermi.",
    gorsel: UZAY({ tus: "boşluk", kuklalar: [ { e: "🚀", x: -150, y: 0, boy: 56, ad: "UzayGemi" }, { e: "🔸", x: -60, y: 0, boy: 22 }, { e: "🔸", x: 40, y: 0, boy: 22 }, { e: "🔸", x: 140, y: 0, boy: 22, ad: "Mermi" } ], yazi: "Mermiler arasında 1 saniye" }),
    adimlar: ["Sprite: <b>Mermi</b>, kütüphanede “Bullet_1”.", "Olay: Key pressed: Space → OTHER ACTIONS → Objects → Create an object: Mermi, X: UzayGemi.CenterX(), Y: UzayGemi.CenterY().", "Aynı kutuya: Mermi → Add a force (angle), açı 0, hız 200, <b>Permanent</b>.", "15. Uygulama: aynı kutuya koşul: Timer and time → Value of scene timer: 1 saniye, ad: \"Ateszaman\".", "Aynı kutuya eylem: Start (or reset) a scene timer: \"Ateszaman\"."],
    kitap: "s. 158–161 · 14–15. Uygulama",
    not: "Instant: her karede bir kez itiş. Permanent: durdurulana kadar hareket." },

  { tur: "odev", baslik: "Sıra Sizde · İki yöne ateş",
    metin: "Sağ ok tuşuna basınca mermi gemiden <b>sağa</b>, sol ok tuşuna basınca <b>sola</b> gitsin.",
    kitap: "s. 160" },

  { tur: "uygulama", baslik: "16. Uygulama · Düşman gemileri",
    metin: "Her saniye sahnenin sağından, rastgele bir yükseklikten bir düşman gemisi gelsin (hız 250).",
    gorsel: UZAY({ hareket: [ { x1: 200, y1: 90, x2: 60, y2: 90 }, { x1: 200, y1: -60, x2: 90, y2: -60 } ], kuklalar: [ { e: "🚀", x: -150, y: 0, boy: 56 }, { e: "🛸", x: 210, y: 90, boy: 44, ad: "DusmanGemi" }, { e: "🛸", x: 40, y: 90, boy: 44 }, { e: "🛸", x: 210, y: -60, boy: 44 } ] }),
    adimlar: ["Sprite: <b>DusmanGemi</b>, kütüphanede “Blue playerShip”.", "Koşul: Value of scene timer 1 sn, \"Dusmanzaman\".", "Eylem: Create an object DusmanGemi, X: 800, Y: Random(600).", "Eylem: DusmanGemi → Add a force 180°, 250, Permanent.", "Eylem: Start (or reset) a scene timer \"Dusmanzaman\".", "Eylem: DusmanGemi → Angle, =, 270 (gemiyi sola çevir)."],
    kitap: "s. 161–163 · 16. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Yağmur gibi",
    metin: "<b>Dusus</b> Sprite'ı iki saniyede bir sahnenin üst kenarında (Y = 0) rastgele bir X'te oluşsun ve aşağı doğru hareket etsin (hız 250).",
    kitap: "s. 163" },

  { tur: "uygulama", baslik: "17–18. Uygulama · Çarpışma",
    metin: "Gemi düşmana çarparsa ikisi de yok olsun. Mermi düşmana çarparsa ikisi de yok olsun.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Gemi 💥 Düşman", gorsel: UZAY({ kuklalar: [ { e: "💥", x: 0, y: 0, boy: 80 } ] }) },
      sag: { baslik: "Mermi 💥 Düşman", gorsel: UZAY({ kuklalar: [ { e: "🚀", x: -150, y: 0, boy: 56 }, { e: "💥", x: 100, y: 0, boy: 60 } ] }) },
      ok: "·" },
    adimlar: ["Add condition → UzayGemi → COLLISION → Collision, Object: DusmanGemi.", "Eylemler: UzayGemi → Delete the object; DusmanGemi → Delete the object.", "Yeni olay: Mermi ile DusmanGemi çarpışması; ikisini de sil."],
    kitap: "s. 164–165 · 17–18. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Engel",
    metin: "Ok tuşlarıyla giden UzayGemi, sahnede sabit duran <b>Engel</b>'e çarpınca silinsin.",
    kitap: "s. 165" },

  { tur: "uygulama", baslik: "19. Uygulama · Skor",
    metin: "Vurulan her düşman 10 puan kazandırsın, puan sol üstte görünsün.",
    gorsel: UZAY({ kuklalar: [ { e: "🚀", x: -150, y: -20, boy: 56 }, { e: "🛸", x: 150, y: 40, boy: 44 } ], yazi: "<b style='color:#e33'>Puan: 30</b> · sol üst köşede" }),
    adimlar: ["Mermi–DusmanGemi çarpışma kutusuna eylem: OTHER ACTIONS → Variables → Value of scene variable: Skor, + (add), 10.", "Sahne sekmesi → Text nesnesi: <b>PuanNesne</b>, Size 25, kırmızı, metin “Puan: 0”. Sol üste koy.", "Aynı çarpışma kutusuna: PuanNesne → Modify the text, =, <code>\"Puan: \" + ToString(Variable(Skor))</code>."],
    kitap: "s. 166–167 · 19. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Söz",
    metin: "<b>Soz</b> adlı Text nesnesi (30, kırmızı): “Hayatta en hakiki mürşit ilimdir.” Fare üzerine gelince yazı “Mustafa Kemal ATATÜRK” olsun.",
    kitap: "s. 167–168" },

  { tur: "uygulama", baslik: "20. Uygulama · Kayan arka plan",
    metin: "Arka plan resmi sürekli sağdan sola kaysın.",
    gorsel: UZAY({ dekor: "#7fb3e0", suslar: [ { e: "🏰", x: -150, y: -110, boy: 70 }, { e: "🏰", x: 40, y: -110, boy: 70 }, { e: "🏰", x: 210, y: -110, boy: 70 } ], hareket: [ { x1: 160, y1: 40, x2: -40, y2: 40 } ], kuklalar: [ { e: "🚀", x: -150, y: 60, boy: 56 } ] }),
    adimlar: ["Tiled Sprite: <b>ArkaPlan</b>, Select an image → “tiled_Castles”.", "Sahneye bırak, kutucuklardan tutup tüm sahneyi kaplat.", "Soldaki özelliklerde Z ORDER = 0 (en arkada kalsın).", "(Events): koşulu boş bırak → ArkaPlan → IMAGE OFFSET → Image X offset, + (add), 1."],
    kitap: "s. 168–170 · 20. Uygulama",
    not: "Z ORDER: nesnelerin önde-arkada görünme sırası." },

  { tur: "test", sorular: [
    { soru: "Nesneyi yukarı hareket ettirmek için açı kaç derece girilir?", secenekler: ["0", "90", "180", "270"], dogru: 3 },
    { soru: "📖 Bir nesneyi istenilen konumda oluşturmayı hangisi sağlar?", secenekler: ["Add a force (angle)", "Change scene", "Create an object", "Delete the object", "Key pressed"], dogru: 2 },
    { soru: "Merminin durdurulana kadar gitmesi için hangi seçenek seçilir?", secenekler: ["Instant", "Permanent", "Loop", "Repeat"], dogru: 1 },
    { soru: "Belirli aralıklarla iş yaptırmak için ne kullanılır?", secenekler: ["Zamanlayıcı (timer)", "Katman", "Izgara", "Text"], dogru: 0 },
    { soru: "Random(600) ne üretir?", secenekler: ["Her zaman 600", "0 ile 600 arasında rastgele sayı", "600'den büyük sayı", "Rastgele renk"], dogru: 1 },
    { soru: "Skor gibi değişen bir değer nerede tutulur?", secenekler: ["Sprite", "Değişken (variable)", "Sahne rengi", "Katman"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Can sistemi",
    adimlar: ["Sahne değişkeni <b>Can</b>: At the beginning of the scene → Can = 3.", "Gemi düşmana çarpınca gemiyi silmek yerine Can'dan 1 çıkar, düşmanı sil.", "Yeni olay: Can = 0 ise Change the scene → OyunBitti (önceden bir sahne yap: “OYUN BİTTİ” yazsın)."],
    not: "Değişkenle karşılaştırma koşulu: OTHER CONDITIONS → Variables → Value of a scene variable." }

]};
