// SPROG · 02 · Arayüz, kuklalar, dekor, ses ve kod blokları  (Kitap s. 17–24)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "mBlock arayüzü: bloklar, kodlama alanı, sahne, aygıtlar, kuklalar/arka plan, sekmeler (Bloklar / Python), Git-Dur. Kukla = oyuncu (kostümleri olabilir), dekor = sahnenin arka planı, sesler sekmesi. Kod blokları renk renk kategorilere ayrılır. Sahne bir koordinat düzlemidir: x −240…240, y −180…180, ortası (0,0). 2. Uygulama: miyavlayıp (0,−130)'a giden ve “Merhaba!” diyen panda. Sıra Sizde: pusula ile dört yöne giden panda.",
    akis: ["Arayüz kartları (projeksiyonda mBlock'u açıp tek tek göster)", "Kukla, kostüm, dekor, ses", "Blok kategorileri tablosu", "Koordinat sistemi (ızgaralı sahne)", "2. Uygulama", "Sıra Sizde: yönünü arayan panda (ödev)", "Test"],
    hatalar: ["Blokları yanlış kuklaya yazmak: kod, sağ altta seçili kukla ya da arka plan için yazılır. Önce kuklayı seç!", "x ile y'yi karıştırmak: x yatay (sağ +), y dikey (yukarı +).", "Blokları birbirine tam oturtmamak; ayrı duran blok çalışmaz."],
    sorular: [["Kendi resmimi kukla yapabilir miyim?", "Evet: kukla ekleme bölümünden bilgisayardaki bir görseli yükle ya da kendin çiz."], ["Kukla sahneden çıkarsa?", "x: 0 y: 0 konumuna git bloğu ile geri getirilir."]],
    bloklar: `when flag clicked
start sound (Meow v)
go to x: (0) y: (-130)
say [Merhaba!]`,
    not: "Sıra Sizde çözümü: yeşil bayrak → x:240 y:0 git → “Doğudasınız” 2 sn de → x:0 y:−180 git → “Güneydesiniz” 2 sn de → x:−240 y:0 → “Batıdasınız” → x:0 y:180 → “Kuzeydesiniz”." },

  { tur: "bilgi", baslik: "mBlock arayüzü",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🧱 Bloklar", alt: "Sürüklenen kod blokları" },
      { ust: "📝 Kodlama alanı", alt: "Seçili kuklanın kodları" },
      { ust: "🎭 Sahne", alt: "Projenin ön izlemesi" },
      { ust: "🔌 Aygıtlar", alt: "Devre kartı seçimi" },
      { ust: "🐼 Kuklalar / Arka plan", alt: "Oyuncular ve dekor" },
      { ust: "📑 Sekmeler", alt: "Bloklar · Python" },
      { ust: "🏁 Git · ⏹ Dur", alt: "Başlat / durdur" },
      { ust: "☰ Menü", alt: "Dil 🌐, Dosya, Kaydet, Yayınla" }
    ]}},

  { tur: "bilgi", baslik: "Kukla, kostüm, dekor, ses",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🐼 Kukla", alt: "Sahnedeki oyuncu. Kütüphaneden ekle, çiz ya da resim yükle." },
      { ust: "👕 Kostüm", alt: "Kuklanın farklı görünüşleri (Kostümler sekmesi)" },
      { ust: "🏞️ Dekor", alt: "Sahnenin arka planı (Arka plan sekmesi → +)" },
      { ust: "🔊 Ses", alt: "Kütüphaneden seç, mikrofonla kaydet ya da dosya yükle" }
    ]},
    not: "mBlock bir tiyatro sahnesi: kuklalar oyuncu, dekor sahnenin arkası." },

  { tur: "bilgi", baslik: "Kod blokları",
    gorsel: { tip: "tablo", ad: "Blok kategorileri", sutunlar: ["Kategori", "Ne yapar?"], satirlar: [
      ["🔵 Hareket", "Konum, pozisyon, hareket"], ["🟣 Görünüm", "Görünüm, konuşma, kostüm"], ["🩷 Ses", "Ses çalma, ses ayarları"],
      ["🟡 Olaylar", "Tetikleyiciler: bayrak, tuş, tıklama"], ["🟠 Kontrol", "Bekle, tekrarla, eğer"], ["🩵 Algılama", "Dokunma, tuş, fare, sor-cevap"],
      ["🟢 İşlemler", "Aritmetik, karşılaştırma, rastgele"], ["🟧 Değişkenler", "Değişken ve liste"], ["🔴 Bloklarım", "Kendi bloğunu yap"]] } },

  { tur: "bilgi", baslik: "Sahne bir koordinat düzlemi",
    gorsel: { tip: "sahne", izgara: true, kuklalar: [ { e: "🐼", x: 0, y: 0, boy: 44, ad: "(0, 0)" }, { e: "⭐", x: 120, y: 120, boy: 30, ad: "(120, 120)" } ] },
    metin: "x yatay: <b>−240 … 240</b> (sağa gidince artar) · y dikey: <b>−180 … 180</b> (yukarı gidince artar)." },

  { tur: "uygulama", baslik: "2. Uygulama · Merhaba diyen panda",
    metin: "Yeşil bayrağa tıklanınca miyav sesi çıkarsın, x:0 y:−130 konumuna gitsin, “Merhaba!” desin.",
    gorsel: { tip: "sahne", proje: "kodlamaya başlıyorum", dekor: "cim", kuklalar: [ { e: "🐼", x: 0, y: -130, balon: "Merhaba!" } ] },
    adimlar: ["Yeni proje aç, adını “kodlamaya başlıyorum” yap.", "Bir dekor ekle.", "Olaylar: yeşil bayrak tıklandığında.", "Ses: miyav sesini başlat.", "Hareket: x:0 y:−130 konumuna git.", "Görünüm: Merhaba! de."],
    kitap: "s. 23 · 2. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Yönünü arayan panda",
    metin: "Panda (0,0)'dan başlayıp sırayla dört konuma gitsin, her konumda mesaj versin (yeşil bayrakla). Projeyi “yönünü arayan panda” adıyla kaydet.",
    gorsel: [{ tip: "tablo", ad: "Tablo 1.2 · Panda hareket tablosu", sutunlar: ["Sıra", "Konum", "Mesaj"], satirlar: [[1, "(240, 0)", "Doğudasınız"], [2, "(0, −180)", "Güneydesiniz"], [3, "(−240, 0)", "Batıdasınız"], [4, "(0, 180)", "Kuzeydesiniz"]] },
      { tip: "sahne", izgara: true, kuklalar: [ { e: "🐼", x: 0, y: 0, boy: 40 }, { e: "➡️", x: 175, y: 0, boy: 24, ad: "1 · Doğu" }, { e: "⬇️", x: 0, y: -135, boy: 24, ad: "2 · Güney" }, { e: "⬅️", x: -175, y: 0, boy: 24, ad: "3 · Batı" }, { e: "⬆️", x: 0, y: 120, boy: 24, ad: "4 · Kuzey" } ] }],
    kitap: "s. 24–25" },

  { tur: "test", sorular: [
    { soru: "📖 Program akışı, tekrarlı ve koşullu görevler hangi blok grubundadır?", secenekler: ["Değişkenler", "Hareket", "Kontrol", "Olaylar", "Ses"], dogru: 2 },
    { soru: "Sahnenin tam ortasının koordinatı nedir?", secenekler: ["(240, 180)", "(0, 0)", "(−240, −180)", "(100, 100)"], dogru: 1 },
    { soru: "Kukla sağa doğru giderse hangi değer artar?", secenekler: ["x", "y", "İkisi de", "Hiçbiri"], dogru: 0 },
    { soru: "Sahnenin arka planına ne ad verilir?", secenekler: ["Kukla", "Kostüm", "Dekor", "Blok"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Bloklar aslında kod",
    metin: "mBlock'ta <b>Python</b> sekmesine tıkla: yazdığın blokların Python koduna dönüşmüş hâlini görürsün. Blok ↔ kod aynı şeyin iki farklı yazılışı.",
    not: "2. birimde (Nesnelerin İnterneti) aynı işi önce bloklarla sonra Python ile yapacağız." }

]};
