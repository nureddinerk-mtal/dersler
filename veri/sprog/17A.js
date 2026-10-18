// SPROG · 17A · Resim düzenleme: kendi karakterini çiz  (Kitap dışı · yıllık plan 29. hafta)
var PIKSEL = (kare, ad) => {
  // 8x8 piksel karakter; kare: 0 duruş, 1 adım
  const desen = kare ? ["..KKKK..", ".KYYYYK.", ".KYSYSK.", ".KYYYYK.", "..KKKK..", ".MMMMMM.", ".M.MM.M.", "M.....M."]
                     : ["..KKKK..", ".KYYYYK.", ".KYSYSK.", ".KYYYYK.", "..KKKK..", ".MMMMMM.", "..M..M..", "..M..M.."];
  const r = { K: "#3a2a1a", Y: "#ffcf99", S: "#222", M: "#2f80ed" }, h = [];
  desen.forEach((s, y) => [...s].forEach((c, x) => {
    h.push(`<rect x="${x * 16}" y="${y * 16}" width="16" height="16" fill="${r[c] || "#fff"}" stroke="#e3e6ee" stroke-width="1"/>`);
  }));
  return `<svg viewBox="0 0 128 150" style="max-width:150px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:8px" font-family="Segoe UI, Arial" font-size="12">${h.join("")}<text x="64" y="144" text-anchor="middle" fill="#445">${ad}</text></svg>`;
};
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Kitap dışı konu (sınavda sorumlu değiller). Yıllık planın 29. haftası “Resim düzenleme işlemlerini yaptırır” diyor ama kitap sadece kütüphanedeki hazır resimleri kullanıyor. Bu ders boşluğu dolduruyor: oyun resmi (sprite) nedir, piksel, şeffaf arka plan (PNG), boyut; ücretsiz tarayıcı aracı <b>Piskel</b> (piskelapp.com) ile 2 karelik yürüme animasyonu çizip PNG olarak indirme ve GDevelop'ta Sprite'a ekleme. GDevelop'un nesne penceresinde de resmi Piskel ile düzenleme düğmesi var (sürüme göre “Edit with Piskel”). Uygulama 2: hazır bir resmi Photopea (photopea.com, Photoshop benzeri, ücretsiz) ile kırpıp boyutlandırma ve arka planı silme.",
    akis: ["Oyun resmi neye benzer? (yakınlaştırınca kareler)", "Piksel, PNG ve şeffaflık", "Uygulama 1: Piskel ile karakter + 2 kare animasyon", "GDevelop'a ekle (Sprite, Loop)", "Uygulama 2: Photopea ile kırp, boyutlandır, arka planı sil", "Ödev, test"],
    hatalar: ["JPG şeffaflığı desteklemez: karakterin etrafında beyaz kutu çıkar. Oyun resimleri <b>PNG</b> olmalı.", "Piskel'de Export → PNG'de animasyonu tek resimde yan yana (sprite sheet) indirirsen GDevelop tek kare görür; her kareyi ayrı PNG indirmek için Export penceresinde ZIP sekmesini kullanın.", "Piskel tarayıcıda çalışır, kaydetmezsen sekme kapanınca çizim kaybolur: .piskel dosyası olarak da indirin.", "Çok küçük çizilen (32×32) resim sahnede küçük görünür: GDevelop'ta örneği tutamaçlardan büyütün; piksel bulanıklaşırsa Game settings → Properties'te piksel sanatı için “Pixel art” / “Nearest” yumuşatma ayarını açın (sürüme göre adı değişir).", "Photopea reklamlı ama ücretsiz; okul ağı engellerse laboratuvardaki herhangi bir resim düzenleyici (Paint 3D, GIMP) aynı işi görür."],
    sorular: [["Piksel ne?", "Ekrandaki en küçük renkli kare. Resim yakınlaştırılınca kareler görünür."], ["Neden 2 kare yeter?", "İki farklı duruş art arda hızlı gösterilince göz yürüme sanır. Kitaptaki ninja animasyonu 10 kare: daha yumuşak."]],
    not: "Yıllık plan sırası: senaryo (28) → resim düzenleme (29) → 3B modelleme (30) → oyun programına aktarma (31). Senaryo için öğrencilerden kendi oyunlarının kısa hikâyesini ve karakterini kâğıda yazdırıp bu derste o karakteri çizdirebilirsiniz." },

  { tur: "bilgi", baslik: "Oyun resmi = pikseller",
    gorsel: { tip: "ikili",
      sol: { baslik: "Uzaktan", gorsel: { tip: "kartlar", kartlar: [ { ust: "🧍 karakter" } ] } },
      sag: { baslik: "Yakından", gorsel: { tip: "html", icerik: PIKSEL(0, "8 × 8 piksel") } },
      ok: "🔍" },
    metin: "<b>Piksel</b>: ekrandaki en küçük renkli kare. Oyun karakterleri piksellerden oluşan küçük resimlerdir." },

  { tur: "bilgi", baslik: "Oyun resminin kuralları",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🖼️ PNG", alt: "şeffaf arka planı destekler" },
      { ust: "🔲 Şeffaf arka plan", alt: "karakterin etrafında beyaz kutu olmasın" },
      { ust: "📏 Küçük boyut", alt: "32×32, 64×64 gibi" },
      { ust: "🎞️ Kareler", alt: "her duruş ayrı resim" }
    ]},
    not: "JPG şeffaf olamaz: oyunda karakterin etrafında beyaz kutu çıkar." },

  { tur: "uygulama", baslik: "Uygulama 1 · Kendi karakterin",
    metin: "Piskel'de kendi karakterini çiz, 2 karelik yürüme animasyonu yap, GDevelop'ta oyuncu yap.",
    gorsel: [
      { tip: "ikili", sol: { baslik: "Kare 1", gorsel: { tip: "html", icerik: PIKSEL(0, "duruş") } }, sag: { baslik: "Kare 2", gorsel: { tip: "html", icerik: PIKSEL(1, "adım") } }, ok: "⇄" },
      { tip: "akis", adimlar: [ { simge: "🌐", yazi: "piskelapp.com", alt: "Create Sprite" }, { simge: "✏️", yazi: "Kare 1'i çiz" }, { simge: "📄", yazi: "Kareyi çoğalt, değiştir" }, { simge: "⬇️", yazi: "Export → ZIP", alt: "her kare ayrı PNG" }, { simge: "🎮", yazi: "GDevelop: Sprite → +ADD" } ] }
    ],
    adimlar: ["Piskel'i aç → Create Sprite. Sağdan boyutu 32×32 yap.", "Kalemle karakterini çiz (silgi, kova ve renk seçici işine yarar).", "Soldaki kareyi çoğalt (Duplicate), ikinci karede bacakları değiştir.", "Üstteki önizlemede yürüyor mu? Hızı (FPS) ayarla.", "Export → <b>ZIP</b> sekmesi: her kare ayrı PNG olarak iner. Zip'i aç.", "GDevelop: Sprite <b>Oyuncu</b> → ADD AN ANIMATION → +ADD → iki PNG'yi sırayla ekle, Loop → APPLY → sahneye koy."],
    },

  { tur: "uygulama", baslik: "Uygulama 2 · Hazır resmi düzenle",
    metin: "İnternetten ya da kendi çektiğin bir resmi oyuna hazırla: kırp, küçült, arka planını sil, PNG kaydet.",
    gorsel: { tip: "akis", adimlar: [ { simge: "🌐", yazi: "photopea.com", alt: "File → Open" }, { simge: "✂️", yazi: "Kırp", alt: "Crop aracı" }, { simge: "📏", yazi: "Küçült", alt: "Image → Image Size: 128 px" }, { simge: "🪄", yazi: "Arka planı sil", alt: "Magic Wand + Delete" }, { simge: "💾", yazi: "File → Export as → PNG" } ] },
    adimlar: ["Photopea'yı aç, resmi sürükleyip bırak.", "Kırpma aracıyla sadece nesneyi bırak.", "Image → Image Size ile genişliği 128 piksele indir.", "Sihirli değnekle arka plana tıkla, Delete'e bas (dama tahtası desen = şeffaf).", "File → Export as → PNG ile indir.", "GDevelop'ta yeni bir Sprite yapıp bu resmi ekle."],
    not: "Başkasının resmini oyununda yayınlayacaksan lisansına bak: ücretsiz ve kullanım izni olan resimleri seç." },

  { tur: "odev", baslik: "Ödev · Düşmanını da çiz",
    metin: "Piskel'de oyunun için bir <b>düşman</b> ya da <b>ödül</b> (para, yıldız) çiz; en az 2 karelik animasyon yap, GDevelop'taki oyununa ekle.",
    },

  { tur: "test", sorular: [
    { soru: "Ekrandaki en küçük renkli kareye ne denir?", secenekler: ["Piksel", "Sprite", "Katman", "Sahne"], dogru: 0 },
    { soru: "Oyun karakteri için hangi resim biçimi uygundur?", secenekler: ["JPG", "PNG", "DOCX", "MP3"], dogru: 1 },
    { soru: "JPG kullanınca karakterin etrafında ne sorun çıkar?", secenekler: ["Ses gelmez", "Beyaz kutu görünür", "Karakter yürümez", "Oyun açılmaz"], dogru: 1 },
    { soru: "Animasyon için Piskel'de ne yapılır?", secenekler: ["Tek kare çizilir", "Birden çok kare (frame) çizilir", "Sadece renk değiştirilir", "Ses eklenir"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Piksel sanatı",
    adimlar: ["Kitaptaki “ninja boy” resimlerinden birini GDevelop'ta açıp yakınlaştır: kaç piksel genişlikte?", "Piskel'de 16×16'lık bir kalp ya da yıldız çiz, 4 karede dönsün.", "Oyunda ödül olarak kullan (22. konudaki para gibi)."],
    not: "Eski oyun konsollarının karakterleri 16×16 ya da 32×32 pikseldi: bu tarza piksel sanatı (pixel art) denir." }

]};
