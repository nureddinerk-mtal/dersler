// SPROG · 22 · Platform oyunu 2: ödül, skor, kamera ve katman  (Kitap s. 180–185)
var PLAT = (o) => Object.assign({ tip: "sahne", motor: "gd", proje: "Platform", dekor: "#4a90e2",
  cizim: [ { noktalar: [[-240,-150],[60,-150]], renk: "#d9a35b", kalinlik: 46 }, { noktalar: [[130,-150],[240,-150]], renk: "#d9a35b", kalinlik: 46 }, { noktalar: [[-60,-30],[60,-30]], renk: "#d64545", kalinlik: 14 } ] }, o);
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Platform oyununun devamı. 31. Uygulama: Sprite Odul, kütüphanede “coin_spin_” 4 resim, Loop → sahneye birkaç tane. 32. Uygulama: Oyuncu–Odul çarpışması → Delete Odul + sahne değişkeni Skor + 10. 33. Uygulama: Text SkorNesne “Puan: 0” (sağ üst); aynı kutuya Modify the text = \"Puan: \" + ToString(Variable(Skor)). 34. Uygulama: koşulsuz olay → Layers and cameras → Center the camera on an object (Oyuncu). 35. Uygulama: kamera oyuncuyu izleyince skor yazısı kaçar: Layers Editor → ADD A LAYER → adı UI → SkorNesne'nin Layer'ını UI yap.",
    akis: ["31. Uygulama: dönen para", "32. Uygulama: topla, puan kazan", "33. Uygulama: puanı göster", "34. Uygulama: kamera oyuncuyu izlesin", "Sorun: puan yazısı kayboluyor!", "35. Uygulama: UI katmanı", "Test"],
    hatalar: ["34. Uygulamada kitap nesne seçimini yazmıyor: Center the camera on an object penceresinde <b>Object: Oyuncu</b> seçilmeli.", "Kamera her karede ortalanır, bu yüzden koşulsuz olay doğru.", "Katman sırası: UI katmanı listede Base layer'ın üstünde olmalı, yoksa yazı oyunun arkasında kalır.", "Skor yazısı yalnızca para toplanınca güncellenir; başta “Puan: 0” yazmasının nedeni Text nesnesine verilen ilk metin.", "Sahneyi kamerayla gezmek için sahne alanını 800×600'ün dışına doğru genişletin (zeminleri sağa uzatın), yoksa kamera kayacak yer bulamaz."],
    sorular: [["Neden ayrı katman?", "Kamera sadece Base layer'ı kaydırır. UI katmanı sabit kalır: skor, can, menü düğmeleri buraya konur."], ["Para neden dönüyor?", "4 resimlik animasyon + Loop: resimler sırayla tekrar gösterilir."]],
    olaylar: [
      { baslik: "32–34. Uygulama", satirlar: [
        { kosul: ["Oyuncu is in collision with Odul"], eylem: ["Delete Odul", "Add 10 to scene variable Skor", "Do = \"Puan: \" + ToString(Variable(Skor)) to the text of SkorNesne"] },
        { kosul: [], eylem: ["Center the camera on Oyuncu"] }
      ] }
    ] },

  { tur: "uygulama", baslik: "31–32. Uygulama · Para topla",
    metin: "Sahneye dönen paralar koy. Oyuncu paraya değince para kaybolsun, skor 10 artsın.",
    gorsel: PLAT({ tus: "← → boşluk", suslar: [ { e: "🪙", x: -20, y: 20, boy: 28 }, { e: "🪙", x: 20, y: 20, boy: 28 }, { e: "🪙", x: 180, y: -100, boy: 28 } ], kuklalar: [ { e: "🥷", x: -150, y: -105, boy: 50, ad: "Oyuncu" } ], yazi: "Her para +10 puan" }),
    adimlar: ["Sahne sekmesi → Sprite: <b>Odul</b> → + ADD AN ANIMATION → “coin_spin_” → 4 resmi sırayla ekle.", "Loop'u işaretle → APPLY. Paraları sahneye yerleştir.", "(Events): koşul Oyuncu → COLLISION → Collision → Odul.", "Eylem: Odul → Delete the object.", "Eylem: OTHER ACTIONS → Variables → Value of scene variable: Skor, + (add), 10."],
    kitap: "s. 180–182 · 31–32. Uygulama" },

  { tur: "uygulama", baslik: "33. Uygulama · Puanı göster",
    metin: "Sağ üst köşede “Puan: …” yazısı olsun ve her parada güncellensin.",
    gorsel: PLAT({ suslar: [ { e: "🪙", x: 180, y: -100, boy: 28 } ], kuklalar: [ { e: "🥷", x: -150, y: -105, boy: 50 } ], yazi: "Sağ üstte: <b>Puan: 20</b>" }),
    adimlar: ["Text nesnesi: <b>SkorNesne</b>, metin “Puan: 0”. Sahnenin sağ üstüne koy.", "Skoru artırdığın eylem kutusuna: SkorNesne → Modify the text, =(set to), <code>\"Puan: \" + ToString(Variable(Skor))</code>."],
    kitap: "s. 182–183 · 33. Uygulama" },

  { tur: "uygulama", baslik: "34–35. Uygulama · Kamera ve UI katmanı",
    metin: "Kamera oyuncuyu takip etsin; puan yazısı ise ekranda sabit kalsın.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Kamera izliyor", gorsel: PLAT({ hareket: [ { x1: -60, y1: 60, x2: 80, y2: 60 } ], kuklalar: [ { e: "🎥", x: -60, y: 90, boy: 34 }, { e: "🥷", x: 0, y: -105, boy: 50 } ] }) },
      sag: { baslik: "Katmanlar", gorsel: { tip: "kartlar", kartlar: [ { ust: "🧾 UI", alt: "SkorNesne: sabit" }, { ust: "🗺️ Base layer", alt: "oyuncu, zemin, para: kamerayla kayar" } ] } },
      ok: "+" },
    adimlar: ["(Events): yeni olay, koşulu boş bırak → OTHER ACTIONS → Layers and cameras → Center the camera on an object → Oyuncu.", "Ön izleme: kamera oyuncuyla gidiyor ama puan yazısı ne oldu?", "Sahne sekmesi → Layers Editor → ADD A LAYER. Adını <b>UI</b> yap.", "SkorNesne'yi seç, soldaki Layer kutusunda UI'ı seç.", "Yeniden ön izle."],
    kitap: "s. 183–185 · 34–35. Uygulama",
    not: "Katman, nesneleri tutan görünmez taşıyıcıdır. Listede üstteki katman önde görünür." },

  { tur: "test", sorular: [
    { soru: "Toplanan puanı saklamak için ne kullanılır?", secenekler: ["Sahne değişkeni (Skor)", "Tiled sprite", "Katman", "Animasyon"], dogru: 0 },
    { soru: "Text nesnesinin yazısını değiştiren eylem?", secenekler: ["Change the animation", "Modify the text", "Change the scene", "Flip the object"], dogru: 1 },
    { soru: "Kameranın oyuncuyu izlemesi için hangi eylem kullanılır?", secenekler: ["Center the camera on an object", "Add a force", "Create an object", "Change the scene"], dogru: 0 },
    { soru: "Kamera hareket edince skor yazısının sabit kalması için ne yapılır?", secenekler: ["Yazı silinir", "Yazı ayrı bir katmana (UI) alınır", "Yazı büyütülür", "Kamera kapatılır"], dogru: 1 },
    { soru: "ToString(Variable(Skor)) ne işe yarar?", secenekler: ["Skoru sıfırlar", "Sayı olan skoru yazıya çevirir", "Skoru 10 artırır", "Skoru siler"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Para sesi",
    adimlar: ["Para çarpışma kutusuna eylem ekle: Audio → Play a sound.", "Kütüphaneden kısa bir “coin” sesi seç.", "Ön izlemede her parada ses geliyor mu?"],
    not: "Küçük ses efektleri oyunun hissini çok değiştirir: buna “oyun hissi” (game feel) denir." }

]};
