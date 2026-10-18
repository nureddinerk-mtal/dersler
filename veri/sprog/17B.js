// SPROG · 17B · Üç boyutlu modelleme ve oyun programına aktarma  (Kitap dışı · yıllık plan 30–31. hafta)
var KUPA = (izgara) => `<svg viewBox="0 0 260 220" style="max-width:300px;width:100%;background:${izgara ? "#eef3fb" : "#fff"};border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="12">
  ${izgara ? Array.from({ length: 9 }, (_, i) => `<line x1="${20 + i * 28}" y1="200" x2="${80 + i * 28}" y2="150" stroke="#b8c7e0"/><line x1="${20 + i * 7}" y1="${200 - i * 6}" x2="${244 + i * 7}" y2="${200 - i * 6}" stroke="#b8c7e0"/>`).join("") : ""}
  <polygon points="80,170 130,190 180,170 130,150" fill="#8a5a2b"/><polygon points="80,170 80,182 130,202 130,190" fill="#6b4420"/><polygon points="180,170 180,182 130,202 130,190" fill="#7a4d24"/>
  <rect x="122" y="118" width="16" height="44" fill="#d4a017"/><ellipse cx="130" cy="162" rx="8" ry="3" fill="#b8860b"/>
  <path d="M90,60 Q90,125 130,125 Q170,125 170,60 z" fill="#f2c94c"/><ellipse cx="130" cy="60" rx="40" ry="11" fill="#ffe08a" stroke="#d4a017"/>
  <path d="M90,72 Q65,72 70,92 Q75,105 95,100" fill="none" stroke="#d4a017" stroke-width="6"/><path d="M170,72 Q195,72 190,92 Q185,105 165,100" fill="none" stroke="#d4a017" stroke-width="6"/>
  <text x="130" y="96" text-anchor="middle" font-size="18" font-weight="700" fill="#8a6500">★</text>
</svg>`;
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Kitap dışı konu (sınavda sorumlu değiller). Yıllık planın 30. haftası “Üç boyutlu modelleme adımlarını uygulatır”, 31. haftası “Oyun programına aktarma adımlarını uygulatır”, temrin listesinde de “Üç boyutlu modelleme yaparak oyun programına aktarma adımları ile ürün elde etmek” var; kitapta bu konu yok. Araç: <b>Tinkercad</b> (tinkercad.com, 9. konuda devre için açılan hesapla aynı) → 3D Designs. Temel fikir: hazır şekilleri (kutu, silindir, koni, küre…) sürükle, boyutlandır, üst üste koy, gruplandır (Group), deliği (Hole) çıkar. Uygulama 1: kupa modeli. Dışa aktarma: Export → .GLB (oyun motoru için), .STL (3B yazıcı için). Uygulama 2: GDevelop'ta “3D Model” nesnesi → .glb dosyasını yükle → sahneye koy → koşulsuz olayla döndür. Uygulama 3: kupaya Oyuncu değince sil ve skor ver (22. konudaki para mantığı).",
    akis: ["2B ve 3B farkı: x, y, z", "Tinkercad 3D Designs arayüzü", "Uygulama 1: şekillerle kupa", "Dışa aktarma: GLB (oyun), STL (yazıcı)", "Uygulama 2: GDevelop'a 3B model ekle, döndür", "Uygulama 3: kupayı topla", "Ödev, test"],
    hatalar: ["GDevelop'un 3B model nesnesi <b>.glb / .gltf</b> ister; .obj ya da .stl doğrudan yüklenmez. Tinkercad'in Export penceresinde .GLB seçeneği görünmezse modeli .OBJ indirip ücretsiz bir dönüştürücüyle (ya da Blender'la) GLB yapın.", "3B model nesnesi eski GDevelop sürümlerinde yok (5.2 ve sonrası). Kitaptaki ekran görüntüleri eski sürüm; çevrim içi editör güncel olduğu için sorun olmaz.", "Tinkercad'de parçalar gruplanmadan dışa aktarılırsa renkler/parçalar ayrı gelebilir: hepsini seçip Group yapın.", "Model sahnede çok büyük ya da çok küçük görünebilir: GDevelop'ta nesne ayarlarından boyutu (width/height/depth) değiştirin.", "Döndürme eylemlerinin adı sürüme göre değişir (“Rotation on Y axis”, “Turn around Y” gibi); arama kutusuna “rotation” yazın.", "Laboratuvarda 3B yazıcı varsa (yıllık planın araç-gereç listesinde yazıyor) STL ile kupayı bastırmak güzel bir ödül olur."],
    sorular: [["3B'de üçüncü eksen ne?", "z: derinlik (Tinkercad'de yükseklik). x sağa-sola, y ileri-geri, z yukarı-aşağı."], ["Oyunlar hep 3B mi?", "Hayır. Kitabın oyunları 2B. GDevelop 2B ve 3B nesneleri aynı sahnede kullanabilir."]],
    olaylar: [
      { baslik: "Uygulama 2–3 · Dönen kupa", satirlar: [
        { kosul: [], eylem: ["Do + 2 to the rotation on Y axis of Kupa"] },
        { kosul: ["Oyuncu is in collision with Kupa"], eylem: ["Delete Kupa", "Add 100 to scene variable Skor", "Do = \"Puan: \" + ToString(Variable(Skor)) to the text of SkorNesne"] }
      ] }
    ] },

  { tur: "bilgi", baslik: "2B ve 3B",
    gorsel: { tip: "ikili",
      sol: { baslik: "2B", gorsel: { tip: "kartlar", kartlar: [ { ust: "x, y", alt: "genişlik ve yükseklik: düz resim" } ] } },
      sag: { baslik: "3B", gorsel: { tip: "kartlar", kartlar: [ { ust: "x, y, z", alt: "derinlik de var: her yönden bakılır" } ] } },
      ok: "➜" },
    metin: "<b>Üç boyutlu modelleme</b>: nesneyi bilgisayarda her yönden bakılabilen bir model olarak tasarlamak." },

  { tur: "bilgi", baslik: "Tinkercad 3D Designs",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🧱 Temel şekiller", alt: "kutu, silindir, koni, küre…: sürükle bırak" },
      { ust: "↔️ Boyut", alt: "beyaz kutucuklardan çek, mm yaz" },
      { ust: "⬆️ Yükselt", alt: "üstteki siyah koniyle havaya kaldır" },
      { ust: "🔄 Döndür", alt: "kavisli oklarla" },
      { ust: "🕳️ Hole", alt: "şekli delik yap, oyar" },
      { ust: "🔗 Group", alt: "parçaları tek nesne yap" }
    ]},
    not: "9. konuda açtığın Tinkercad hesabıyla giriş yap → Create → 3D Design." },

  { tur: "uygulama", baslik: "Uygulama 1 · Kupa modeli",
    metin: "Temel şekillerle bir kupa tasarla.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Parçalar", gorsel: { tip: "kartlar", kartlar: [ { ust: "🟫 Kutu", alt: "taban" }, { ust: "🟡 Silindir", alt: "gövde, ince uzun" }, { ust: "🔻 Koni (ters)", alt: "kâse" }, { ust: "🍩 Halka (Torus) × 2", alt: "kulplar" } ] } },
      sag: { baslik: "Hedef", gorsel: { tip: "html", icerik: KUPA(true) } },
      ok: "➜" },
    adimlar: ["Tinkercad → Create → 3D Design.", "Kutu ekle, alçalt: taban.", "İnce bir silindir ekle, tabanın ortasına koy.", "Bir koni ekle, ters çevir (180°), silindirin üstüne kaldır.", "İki halkayı (Torus) dik çevirip kâsenin iki yanına koy.", "Renk ver, hepsini seç → <b>Group</b>."],
    },

  { tur: "bilgi", baslik: "Dışa aktarma",
    gorsel: { tip: "ikili",
      sol: { baslik: "🎮 Oyun için", gorsel: { tip: "kartlar", kartlar: [ { ust: ".GLB", alt: "Export → .GLB" } ] } },
      sag: { baslik: "🖨️ 3B yazıcı için", gorsel: { tip: "kartlar", kartlar: [ { ust: ".STL", alt: "Export → .STL" } ] } },
      ok: "·" },
    metin: "Sağ üstteki <b>Export</b> düğmesi. Modeli oyuna aktarmak için <b>.GLB</b> indir." },

  { tur: "uygulama", baslik: "Uygulama 2 · Oyuna aktar",
    metin: "Kupayı GDevelop sahnesine 3B model olarak koy; durmadan kendi etrafında dönsün.",
    gorsel: PLAT3(),
    adimlar: ["Platform oyununu aç (21–23. konu).", "Add a new object → <b>3D Model</b>. Ad: <b>Kupa</b>.", "Model dosyası olarak indirdiğin .glb'yi seç → APPLY.", "Kupayı sahneye koy; gerekiyorsa boyutunu küçült.", "(Events): koşulsuz olay → Kupa → Y ekseninde döndürme (rotation on Y axis), + 2.", "Ön izleme: kupa dönüyor mu?"],
    },

  { tur: "uygulama", baslik: "Uygulama 3 · Kupayı topla",
    metin: "Oyuncu kupaya değince kupa kaybolsun, <b>+100</b> puan.",
    adimlar: ["Koşul: Oyuncu → Collision → Kupa.", "Eylem: Kupa → Delete the object.", "Eylem: Skor sahne değişkenine 100 ekle, SkorNesne yazısını güncelle (22. konudaki gibi)."],
    },

  { tur: "odev", baslik: "Ödev · Kendi 3B nesnen",
    metin: "Oyununa uygun bir 3B nesne (anahtar, sandık, ağaç, kapı…) tasarla, .GLB olarak dışa aktar ve oyununa ekle.",
    },

  { tur: "test", sorular: [
    { soru: "3B nesnenin 2B nesneden farklı olarak sahip olduğu eksen?", secenekler: ["x", "y", "z", "Hiçbiri"], dogru: 2 },
    { soru: "Tinkercad'de parçaları tek nesne yapan komut?", secenekler: ["Hole", "Group", "Export", "Copy"], dogru: 1 },
    { soru: "3B modeli GDevelop'a aktarmak için hangi dosya biçimi kullanılır?", secenekler: [".GLB", ".MP3", ".DOCX", ".TXT"], dogru: 0 },
    { soru: "3B yazıcıda bastırmak için hangi biçim indirilir?", secenekler: [".PNG", ".STL", ".JSON", ".HTML"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kupayı bastır",
    adimlar: ["Kupayı .STL olarak indir.", "Laboratuvardaki 3B yazıcının programında (dilimleyici) aç: kaç dakikada basılacak?", "Öğretmeninle birlikte bastırın: oyundaki kupa elinde!"],
    not: "Aynı model hem oyunda hem gerçek hayatta kullanılabilir: oyun, film ve mühendislikte 3B modelleme böyle kullanılır." }

]};
function PLAT3() {
  return { tip: "ikili",
    sol: { baslik: "GDevelop sahnesi", gorsel: { tip: "sahne", motor: "gd", proje: "Platform", dekor: "#4a90e2", cizim: [ { noktalar: [[-240,-150],[240,-150]], renk: "#d9a35b", kalinlik: 46 } ], suslar: [ { e: "🏆", x: 140, y: -95, boy: 54 } ], kuklalar: [ { e: "🥷", x: -120, y: -105, boy: 50, ad: "Oyuncu" } ], yazi: "Kupa kendi etrafında döner" } },
    sag: { baslik: "3D Model: Kupa", gorsel: { tip: "html", icerik: KUPA(false) } },
    ok: "⟵" };
}
