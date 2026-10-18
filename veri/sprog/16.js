// SPROG · 16 · Oyun ayarları, sahneye nesne ekleme, ön izleme ve kaydetme  (Kitap s. 108–123)
var GDE = `<svg viewBox="0 0 520 280" style="max-width:600px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="12">
  <rect x="0" y="0" width="520" height="30" fill="#2e2b45"/>
  <rect x="6" y="5" width="22" height="20" rx="4" fill="#6b5fd3"/><text x="17" y="20" text-anchor="middle" fill="#fff">☰</text>
  <rect x="58" y="5" width="22" height="20" rx="4" fill="#27ae60"/><text x="69" y="20" text-anchor="middle" fill="#fff">▶</text>
  <rect x="96" y="5" width="96" height="20" rx="4" fill="#fff"/><text x="144" y="19" text-anchor="middle">New scene</text>
  <rect x="196" y="5" width="130" height="20" rx="4" fill="#4a4666"/><text x="261" y="19" text-anchor="middle" fill="#fff">New scene (Events)</text>
  <text x="380" y="20" fill="#cdd" font-size="13">▦ ⧉ ⚙ ☷ ◫ ↶ ↷ 🗑 # 🔍</text>
  <rect x="0" y="30" width="110" height="250" fill="#f1f2f7"/><text x="10" y="52" font-weight="700">Özellikler</text><text x="10" y="74">X: 400</text><text x="10" y="92">Y: 300</text><text x="10" y="110">Z order: 0</text><text x="10" y="128">Layer: Base</text>
  <rect x="110" y="30" width="300" height="250" fill="#ccc"/><rect x="130" y="50" width="260" height="195" fill="#9aa"/><text x="260" y="140" text-anchor="middle" fill="#fff" font-size="14">Sahne</text><text x="260" y="160" text-anchor="middle" fill="#fff">800 × 600</text>
  <rect x="410" y="30" width="110" height="250" fill="#f1f2f7"/><text x="420" y="52" font-weight="700">Objects</text>
  <text x="420" y="76">🥷 Oyuncu</text><text x="420" y="98">🟫 Zemin</text><rect x="420" y="250" width="92" height="22" rx="11" fill="#6b5fd3"/><text x="466" y="265" text-anchor="middle" fill="#fff">+ Add object</text>
  <text x="17" y="44" font-size="9" fill="#6b5fd3">Proje yön.</text><text x="69" y="44" font-size="9" fill="#27ae60">ön izleme</text>
</svg>`;
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.2 Karakter ve çevre düzenleme. 2. Uygulama: Game settings → Properties: oyun adı, sürüm (X.Y.Z), paket adı “com.example.meboyun” (Android/iOS için), yazar, çözünürlük 800×600 piksel. Eski projeyi kapatmak: Project Manager → Close. 3.2.2: Sahne açılınca iki sekme: New scene (görsel tasarım) ve New scene (Events) (mantık). Araç çubuğu: Objects Editor, Objects Group Editor, Properties, Instance List, Layer Editor, Undo/Redo, Delete instances, Grid, Zoom. Nesne türleri: Sprite, Tiled Sprite, Text, Particles emitter, Panel Sprite (9-Patch), Shape Painter, Text Entry, Video, BBText, Light. Nesne sahneye konunca “nesne örneği” (instance) olur. 3. Uygulama: Sprite “Oyuncu” (ninja boy). 4. Uygulama: Tiled sprite “Zemin” (desert), beyaz tutamaçlarla büyütme, yuvarlakla döndürme. Sıra Sizde: oyun ekranı tasarla. 3.2.3 Launch preview (sol üst 3. simge). 3.2.4 Project Manager → Save / Save as → Download a copy.",
    akis: ["2. Uygulama: oyun ayarları", "Piksel ve çözünürlük", "İki sekme: sahne ve olaylar", "Araç çubuğu simgeleri", "Nesne türleri ve nesne örneği", "3. Uygulama: Sprite", "4. Uygulama: Tiled sprite", "Ön izleme ve kaydetme", "Sıra Sizde", "Test"],
    hatalar: ["Yeni sürümde Game settings, Project Manager (☰) içinde “Properties” olarak açılır; alan adları aynı.", "Kitaptaki “ninja boy”, “desert” gibi kütüphane adları yeni varlık mağazasında (Asset Store) farklı olabilir; arama kutusuna “ninja”, “sand”, “ground” gibi kelimelerle aratın.", "Yeni sürümde nesne listesi “Add a new object” penceresi önce Asset Store'u açar; boş nesne için “New object from scratch” sekmesi seçilmeli.", "Text Entry yeni sürümde “Text Input” adını aldı.", "Kaydedilmeyen proje sekme kapanınca kaybolur: her ders sonunda “Download a copy” (.json) ya da hesap varsa bulut kaydı."],
    sorular: [["Nesne ile nesne örneği farkı?", "Nesne kalıptır (Objects listesinde bir kez). Sahneye sürüklenen her kopyası bir örnektir: 1 Zemin nesnesi, 10 zemin örneği olabilir."], ["Neden 800×600?", "Oyunun çalışacağı ekranın çözünürlüğüne göre seçilir; kitap tasarım kolaylığı için 800×600 öneriyor."]],
    not: "Fare tekeri: ileri büyütür, geri küçültür; teker basılı tutulursa sahne kaydırılır (kitap DİKKAT kutusu)." },

  { tur: "uygulama", baslik: "2. Uygulama · Oyun ayarları",
    gorsel: { tip: "tablo", ad: "Game settings → Properties", sutunlar: ["Alan", "Değer"], satirlar: [["Game name", "oyununa bir ad"], ["Version number", "1.0.0 (her geliştirmede artır)"], ["Package name", "com.example.meboyun"], ["Author name", "adın"], ["Game resolution", "800 × 600 piksel"]] },
    adimlar: ["Önceki proje açılırsa: Project Manager (sol üst) → Close.", "Yeni proje → Empty game.", "Soldan Game settings → Properties.", "Tablodaki alanları doldur."],
    kitap: "s. 108–111 · 2. Uygulama",
    not: "Piksel: ekranda tek seferde kontrol edilebilen nokta. Paket adı, oyun Android ya da iOS'ta yayınlanacaksa gerekir." },

  { tur: "odev", baslik: "Sıra Sizde · Oyunun kimliği",
    metin: "Oyun ayarlarından oyun adını, yazarını ve <b>800×600</b> çözünürlüğü belirle.",
    kitap: "s. 111" },

  { tur: "bilgi", baslik: "Oyun motorunun ekranı",
    gorsel: { tip: "html", icerik: GDE },
    metin: "<b>New scene</b>: görsel tasarım (nesneleri yerleştir). <b>New scene (Events)</b>: oyunun mantığı (olaylar)." },

  { tur: "bilgi", baslik: "Araç çubuğu",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "▦ Objects Editor", alt: "nesneler paneli: ekle, sil, adlandır" },
      { ust: "⧉ Objects Group", alt: "nesneleri grupla" },
      { ust: "⚙ Properties", alt: "seçili örneğin adı, X, Y…" },
      { ust: "☷ Instance List", alt: "sahnedeki örneklerin listesi" },
      { ust: "◫ Layer Editor", alt: "katmanlar; Base layer otomatik" },
      { ust: "↶ ↷ Undo / Redo", alt: "geri al / yinele" },
      { ust: "🗑 Delete", alt: "seçili örnekleri sil (Delete tuşu)" },
      { ust: "# Grid", alt: "ızgara: düzgün yerleştir" },
      { ust: "🔍 Zoom", alt: "büyüt / küçült (fare tekeri)" }
    ]} },

  { tur: "bilgi", baslik: "Nesne türleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🥷 Sprite", alt: "en çok kullanılan: karakter, düşman, ödül" },
      { ust: "🧱 Tiled Sprite", alt: "tekrarlanan resim: zemin" },
      { ust: "🔤 Text", alt: "sahnede yazı" },
      { ust: "💨 Particles emitter", alt: "duman, sis etkisi" },
      { ust: "🪟 Panel Sprite", alt: "9 parçalı; büyüyünce bozulmaz" },
      { ust: "✏️ Shape Painter", alt: "basit şekiller çizer" },
      { ust: "⌨️ Text Entry", alt: "görünmez; klavyeden metin girişi" },
      { ust: "🎞️ Video", alt: "sahnede video" },
      { ust: "🅱️ BBText", alt: "kalın, renkli, yatık metin" },
      { ust: "💡 Light", alt: "ışık etkisi" }
    ]},
    not: "Sahneye konan her kopyaya <b>nesne örneği</b> (instance) denir. Bir nesnenin birçok örneği olabilir." },

  { tur: "uygulama", baslik: "3–4. Uygulama · Oyuncu ve zemin",
    metin: "Sahneye <b>Oyuncu</b> adlı Sprite ve <b>Zemin</b> adlı Tiled sprite ekle.",
    gorsel: { tip: "sahne", motor: "gd", proje: "New scene", dekor: "#d8d8d8", cizim: [ { noktalar: [[-240,-150],[240,-150]], renk: "#d9a35b", kalinlik: 50 }, { noktalar: [[40,-30],[180,-30]], renk: "#d9a35b", kalinlik: 24 } ], kuklalar: [ { e: "🥷", x: -120, y: -95, boy: 64, ad: "Oyuncu" }, { e: "", x: 110, y: -40, boy: 10, ad: "Zemin" } ] },
    adimlar: ["Objects → Add a new object → <b>Sprite</b>. Ad: Oyuncu → ADD AN ANIMATION → +ADD → kütüphanede “ninja boy” ara, seç → APPLY.", "Oyuncu'yu Objects'ten sahneye sürükle.", "Add a new object → <b>Tiled sprite</b>. Ad: Zemin → Select an image → Choose an image from library → “desert” → APPLY.", "Zemin'i sahneye sürükle; beyaz kutucuklardan tutup büyüt. Üstteki yuvarlakla döndürülebilir."],
    kitap: "s. 115–121 · 3–4. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Oyun ekranı",
    metin: "Kütüphaneden uygun <b>Sprite</b> ve <b>Tiled sprite</b> nesneleri ekleyerek bir oyun ekranı tasarla.",
    kitap: "s. 121" },

  { tur: "bilgi", baslik: "Ön izleme ve kaydetme",
    gorsel: { tip: "ikili",
      sol: { baslik: "▶ Launch preview", gorsel: { tip: "kartlar", kartlar: [ { ust: "Sol üstteki 3. simge", alt: "sahne yeni sekmede oynar" } ] } },
      sag: { baslik: "💾 Kaydet", gorsel: { tip: "akis", adimlar: [ { simge: "☰", yazi: "Project Manager" }, { simge: "💾", yazi: "Save / Save as" }, { simge: "⬇️", yazi: "Download a copy" } ] } },
      ok: "·" },
    not: "İndirilen dosyayı açmak için masaüstü GDevelop 5 kurulup Project Manager → Open kullanılır." },

  { tur: "test", sorular: [
    { soru: "Zemin gibi bir alanda tekrarlanan grafikler için hangi nesne türü kullanılır?", secenekler: ["Sprite", "Tiled Sprite", "Text", "Light"], dogru: 1 },
    { soru: "Sahneye yerleştirilen nesneye ne ad verilir?", secenekler: ["Katman", "Nesne örneği", "Olay", "Sahne"], dogru: 1 },
    { soru: "Oyunun mantıksal tasarımı hangi sekmede yapılır?", secenekler: ["New scene", "New scene (Events)", "Game settings", "Objects"], dogru: 1 },
    { soru: "Oyun dosyasını bilgisayara indirmek için hangi seçenek kullanılır?", secenekler: ["Launch preview", "Download a copy", "Close", "Zoom"], dogru: 1 },
    { soru: "Duman, sis gibi etkiler hangi nesneyle yapılır?", secenekler: ["BBText", "Shape Painter", "Particles emitter", "Video"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Izgaraya hizala",
    adimlar: ["Araç çubuğundan Grid'i aç, ızgara ayarlarında hücre boyutunu 32×32 yap.", "Zemin örneklerini yerleştir: kendiliğinden ızgaraya oturuyor mu?", "Instance List'te sahnedeki tüm örnekleri ve X, Y değerlerini incele."],
    not: "Platform oyunlarında zemin parçaları genelde 32 ya da 64 piksellik karelerden oluşur." }

]};
