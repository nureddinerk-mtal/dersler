// SPROG · 11 · Blok temelli IoT: LED yakıp söndürme  (Kitap s. 73–79)
var MCU = (yan) => `<svg viewBox="0 0 380 170" style="max-width:440px;width:100%;background:#f4f8fc;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="13">
  <rect x="30" y="40" width="130" height="90" rx="8" fill="#1f6f8b"/><text x="95" y="80" text-anchor="middle" fill="#fff" font-weight="700">MCU1</text><text x="95" y="100" text-anchor="middle" fill="#cfe">MCU Board</text>
  <circle cx="160" cy="70" r="5" fill="#ffd34d"/><text x="168" y="62" font-size="11">D0</text>
  <path d="M160,70 C220,70 230,110 280,110" fill="none" stroke="#2d9cdb" stroke-width="3"/>
  ${yan ? `<circle cx="300" cy="96" r="30" fill="#3ddc84" opacity=".35"/>` : ""}<path d="M286,112 v-18 a14,14 0 0 1 28,0 v18 z" fill="${yan ? "#2ecc71" : "#222"}"/><text x="300" y="140" text-anchor="middle">LED (D0)</text>
</svg>`;
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Packet Tracer'da ilk IoT devresi: MCU Board + LED, IoT Custom Cable ile D0–D0 bağlantısı. Kart programı blok temelli (Visual) yazılır: Programming sekmesi → New → “Empty – Visual” → main visual. 5. Uygulama: digitalWrite/analogWrite benzeri Pin Access blokları: pinMode(slot 0, OUTPUT) ve slot 0'a 255 yaz → LED yeşil yanar. 6. Uygulama: 1 sn yak, 1 sn söndür (0 yaz) → yanıp söner. Sıra Sizde: yanıp sönmeyi 5 kez tekrarla.",
    akis: ["Devreyi kur: MCU Board (Components → Boards), LED (Components → Actuators)", "IoT Custom Cable ile D0–D0", "Programlama penceresi: New → Empty – Visual", "5. Uygulama: LED'i yak", "6. Uygulama: yakıp söndür", "Sıra Sizde: 5 kez (döngü)", "Test"],
    hatalar: ["Kablo türü yanlış seçilir: bağlantı için <b>IoT Custom Cable</b> (Connections'ta mavi-gri kablo) seçilmeli.", "LED'in D0'ı ile kartın D0'ı yerine başka uç seçmek; slot numarası bağlanan uçla aynı olmalı.", "Value 255 = tam parlak (analog), 0 = sönük. Mode OUTPUT seçilmezse LED yanmaz.", "Kodu değiştirdikten sonra Stop → Run yapmadan eski program çalışmaya devam eder.", "Bekle (delay) bloğu konmazsa LED o kadar hızlı yanıp söner ki hep yanık görünür."],
    sorular: [["Neden 255?", "Kartın analog çıkışı 0–255 arası değer alır; 255 en yüksek parlaklık. Yarı parlak için 128 deneyin."], ["Bu kod gerçek Arduino'da çalışır mı?", "Mantık aynı (pinMode, digitalWrite, delay). 13. konuda gerçek kart ve IDE'yi göreceğiz."]],
    not: "Blok kategorileri: Pin Access (pinMode, digitalWrite, analogWrite…), Math (sayı blokları), Control (repeat, delay)." },

  { tur: "bilgi", baslik: "Devre: kart + LED",
    gorsel: { tip: "html", icerik: MCU(false) },
    metin: "Mikrodenetleyici kart (MCU Board) programı çalıştırır; LED, kartın D0 ucundan gelen sinyalle yanar." },

  { tur: "uygulama", baslik: "5. Uygulama · LED'i yak",
    gorsel: { tip: "ikili",
      sol: { baslik: "Bloklar (main visual)", gorsel: { tip: "kartlar", kartlar: [ { ust: "pinMode", alt: "slot 0 · mode OUTPUT", renk: "#9b51e0" }, { ust: "analogWrite", alt: "slot 0 · value 255", renk: "#9b51e0" } ] } },
      sag: { baslik: "▶ Run", gorsel: { tip: "html", icerik: MCU(true) } },
      ok: "➜" },
    adimlar: ["Çalışma alanına MCU Board ekle (Components → Boards).", "Yanına LED ekle (Components → Actuators).", "IoT Custom Cable ile LED'in D0'ını kartın D0'ına bağla.", "Karta tıkla → Programming → New: adı “LED yakıp söndürme”, şablon “Empty – Visual” → Create.", "main visual'ı aç: Pin Access'ten iki bloğu üst üste koy. Slot 0, mode OUTPUT, value 255 (Math).", "Run: LED yeşil yanıyor mu?"],
    kitap: "s. 73–77 · 5. Uygulama" },

  { tur: "uygulama", baslik: "6. Uygulama · Yakıp söndür",
    metin: "Aynı devrede LED 1 saniye yansın, 1 saniye sönsün.",
    gorsel: { tip: "ikili",
      sol: { baslik: "1 sn", gorsel: { tip: "html", icerik: MCU(true) } },
      sag: { baslik: "1 sn", gorsel: { tip: "html", icerik: MCU(false) } },
      ok: "⇄" },
    adimlar: ["Önceki devreyi kullan.", "Bloklara ekle: value 255 yaz → 1 saniye bekle → value 0 yaz → 1 saniye bekle.", "Run ile çalıştır: LED yeşil yanıp bir saniye sonra siyaha dönüyor mu?"],
    kitap: "s. 78 · 6. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Beş kez",
    metin: "6. Uygulamadaki yanıp sönmeyi art arda <b>beş defa</b> tekrarlayan blok yapısını kur, çalıştırıp test et.",
    kitap: "s. 78" },

  { tur: "test", sorular: [
    { soru: "Packet Tracer'da kart ile LED'i bağlamak için hangi kablo kullanılır?", secenekler: ["Console", "Copper Straight-Through", "IoT Custom Cable", "Fiber"], dogru: 2 },
    { soru: "Blok temelli program için hangi şablon seçilir?", secenekler: ["Blink – Python", "Empty – Visual", "Empty – JavaScript", "Hello World"], dogru: 1 },
    { soru: "LED'i söndürmek için hangi değer yazılır?", secenekler: ["0", "1", "128", "255"], dogru: 0 },
    { soru: "Pin'in çıkış olarak kullanılması için mode ne olmalı?", secenekler: ["INPUT", "OUTPUT", "ANALOG", "DIGITAL"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Yavaşça parlayan LED",
    metin: "Value değerini 0'dan 255'e 25'er artırarak yaz, her adımda 0,1 saniye bekle: LED yavaşça parlasın (bir değişken ve tekrarla bloğu kullan).",
    not: "Bu tekniğe PWM (darbe genişlik modülasyonu) denir: gerçek kartlarda LED parlaklığı ve motor hızı böyle ayarlanır." }

]};
