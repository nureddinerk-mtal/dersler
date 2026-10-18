// SPROG · 17 · Sahne arka plan rengi ve nesneye davranış ekleme  (Kitap s. 123–131)
var ZEMIN = [ { noktalar: [[-240,-150],[240,-150]], renk: "#c98b4a", kalinlik: 50 }, { noktalar: [[30,-20],[190,-20]], renk: "#c98b4a", kalinlik: 24 } ];
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.2.5: Sahne arka planı varsayılan gri. 5. Uygulama: sahnede boş yere sağ tık → Scene properties → Scene background color → mavi → pencereye tıkla → OK. Sıra Sizde: kırmızı yapıp ön izleme. 3.2.6 Davranışlar (behaviors): sürükle-bırak, ok tuşlarıyla hareket, çarpışınca zıplama, sahneden çıkınca yok olma gibi özellikleri kodsuz kazandırır. 6. Uygulama: Zemin'e Platform, Oyuncu'ya Platformer character (ok tuşlarıyla yürür, boşlukla zıplar): nesneye çift tık → BEHAVIORS → + ADD A BEHAVIOUR TO THE OBJECT → seç → APPLY → ön izleme. Diğer davranışlar: Destroy when outside of the screen, Draggable, Top-down movement (4/8 yön), Anchor, Pathfinding, Obstacle for pathfinding, Physics Engine 2.0, Tween. Sıra Sizde: tank sprite + Top-down movement.",
    akis: ["5. Uygulama: arka plan rengi", "Sıra Sizde: kırmızı", "Davranış nedir?", "6. Uygulama: Platform + Platformer character", "Diğer davranışlar (kartlar)", "Sıra Sizde: tank", "Test"],
    hatalar: ["Zemine Platform davranışı eklenmezse oyuncu ön izlemede zeminin içinden düşüp kaybolur.", "Davranış nesneye eklenir, örneğe değil: bir kez eklemek sahnedeki tüm Zemin örneklerini platform yapar.", "Ön izlemede klavye çalışmıyorsa önce oyun penceresine bir kez tıklayın (odak).", "Yeni sürümde davranış listesi kategorili ve aramalı; “platform” yazınca ikisi de çıkar.", "Kitap “Top-down movement” için “en üstte dördüncü sırada” diyor; sıra sürüme göre değişir, adına göre seçin."],
    sorular: [["Platformer character ile Top-down farkı?", "Platformer'da yer çekimi var, yandan bakılır, zıplanır. Top-down'da yukarıdan bakılır, yer çekimi yok, 4 ya da 8 yönde gidilir (tank, uzay gemisi)."], ["Mermiye hangi davranış?", "Destroy when outside of the screen: ekrandan çıkan mermi silinir, oyun yavaşlamaz."]],
    not: "Davranış parametreleri (hız, zıplama gücü, yer çekimi) APPLY'dan önce değiştirilebilir; öğrencilere Jump speed'i 2 katına çıkartıp farkı denetin." },

  { tur: "uygulama", baslik: "5. Uygulama · Arka plan rengi",
    metin: "Gri sahnenin arka planını maviye çevir.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Önce", gorsel: { tip: "sahne", motor: "gd", proje: "New scene", dekor: "#9e9e9e", cizim: ZEMIN, kuklalar: [ { e: "🥷", x: -120, y: -95, boy: 60 } ] } },
      sag: { baslik: "Sonra", gorsel: { tip: "sahne", motor: "gd", proje: "New scene", dekor: "#4a90e2", cizim: ZEMIN, kuklalar: [ { e: "🥷", x: -120, y: -95, boy: 60 } ] } },
      ok: "➜" },
    adimlar: ["Sahnenin boş bir yerine sağ tıkla → Scene properties.", "Scene background color'u seç.", "Renk paletinden maviyi ayarla.", "Pencerenin boş yerine tıkla, palet kapanınca OK."],
    kitap: "s. 123–125 · 5. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Kırmızı sahne",
    metin: "Sahnenin arka plan rengini <b>kırmızı</b> yap ve oyunun ön izlemesini aç.",
    kitap: "s. 125" },

  { tur: "bilgi", baslik: "Davranış (behavior)",
    metin: "Nesneye kod yazmadan yetenek kazandırır.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🖐️ Sürükle / bırak" }, { ust: "⬅️➡️ Ok tuşlarıyla hareket" }, { ust: "🦘 Çarpışınca zıplama" }, { ust: "💥 Sahneden çıkınca yok olma" } ] } },

  { tur: "uygulama", baslik: "6. Uygulama · Yürüyen, zıplayan oyuncu",
    metin: "Oyuncu ok tuşlarıyla sağa-sola yürüsün, boşlukla zıplasın; zeminlerin üstünde dursun.",
    gorsel: { tip: "sahne", motor: "gd", proje: "New scene", tus: "← → boşluk", dekor: "#4a90e2", cizim: ZEMIN, hareket: [ { x1: -120, y1: -70, x2: 40, y2: 30 } ], kuklalar: [ { e: "🥷", x: -120, y: -95, boy: 60, ad: "Platformer character" }, { e: "🥷", x: 90, y: 20, boy: 50 } ], yazi: "Zemin: Platform davranışı · Oyuncu: Platformer character davranışı" },
    adimlar: ["Objects'te Zemin'e çift tıkla → BEHAVIORS → + ADD A BEHAVIOUR TO THE OBJECT.", "Platform'u seç → APPLY.", "Oyuncu'ya çift tıkla → BEHAVIORS → + ADD A BEHAVIOUR.", "Platformer character'ı seç → APPLY.", "Ön izleme: ok tuşları ve boşlukla dene."],
    kitap: "s. 126–128 · 6. Uygulama" },

  { tur: "bilgi", baslik: "Diğer davranışlar",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "💥 Destroy when outside of the screen", alt: "sahneden çıkınca yok olur: mermi, düşman, ödül" },
      { ust: "🖐️ Draggable object", alt: "fareyle sürüklenir: resim tamamlama, giydirme" },
      { ust: "🚀 Top-down movement", alt: "4 / 8 yön: tank, uzay gemisi" },
      { ust: "⚓ Anchor", alt: "ekran kenarına sabitlenir: bilgi yazıları" },
      { ust: "🧭 Pathfinding", alt: "engellere değmeden yol bulur" },
      { ust: "🧱 Obstacle for pathfinding", alt: "yol bulanların kaçındığı engel" },
      { ust: "⚙️ Physics Engine 2.0", alt: "gerçekçi fizik" },
      { ust: "🌀 Tween", alt: "boyut, konum gibi özellikleri zamanla değiştirir" }
    ]} },

  { tur: "odev", baslik: "Sıra Sizde · Tank",
    metin: "Sahneye kütüphaneden bir <b>tank</b> sprite'ı ekle. Klavyeyle kontrol etmek için <b>Top-down movement (4 or 8 directions)</b> davranışını ekle, ön izlemede ok tuşlarıyla sür.",
    gorsel: { tip: "sahne", motor: "gd", tus: "← ↑ → ↓", dekor: "#7cb36b", hareket: [ { x1: 0, y1: 0, x2: 120, y2: 0 }, { x1: 0, y1: 0, x2: 0, y2: 110 } ], kuklalar: [ { e: "🛡️", x: 0, y: 0, boy: 60, ad: "tank" } ] },
    kitap: "s. 129–130" },

  { tur: "test", sorular: [
    { soru: "Sahnenin arka plan rengi hangi pencereden değiştirilir?", secenekler: ["Game settings", "Scene properties", "Objects", "Layer Editor"], dogru: 1 },
    { soru: "Oyuncunun ok tuşlarıyla yürüyüp boşlukla zıplaması için hangi davranış eklenir?", secenekler: ["Platform", "Platformer character", "Draggable object", "Anchor"], dogru: 1 },
    { soru: "Mermi ekrandan çıkınca silinsin diye hangi davranış kullanılır?", secenekler: ["Tween", "Pathfinding", "Destroy when outside of the screen", "Physics Engine 2.0"], dogru: 2 },
    { soru: "Elbise giydirme oyununda kıyafetlere hangi davranış eklenir?", secenekler: ["Draggable object", "Platform", "Top-down movement", "Anchor"], dogru: 0 },
    { soru: "Zemine Platform davranışı eklenmezse ne olur?", secenekler: ["Oyuncu uçar", "Oyuncu zeminden düşüp kaybolur", "Zemin hareket eder", "Oyun açılmaz"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Ay'da zıpla",
    adimlar: ["Oyuncu → BEHAVIORS → Platformer character parametrelerini aç.", "Gravity (yer çekimi) değerini altıda birine indir, Jump speed'i biraz artır.", "Ön izlemede zıpla: Ay'daymış gibi mi?"],
    not: "Ay'ın yer çekimi Dünya'nınkinin yaklaşık altıda biri kadardır." }

]};
