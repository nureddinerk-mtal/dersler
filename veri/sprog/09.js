// SPROG · 09 · Devre elemanları ve ilk devre simülasyonu  (Kitap s. 58–67)
var DEVRE = (led) => `<svg viewBox="0 0 360 200" style="max-width:420px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="13">
  <rect x="40" y="70" width="34" height="60" rx="4" fill="#333"/><rect x="47" y="62" width="20" height="10" fill="#c0392b"/><text x="57" y="150" text-anchor="middle">Pil 9V</text>
  <polyline points="57,62 57,30 160,30" fill="none" stroke="#c0392b" stroke-width="3"/>
  <rect x="160" y="22" width="60" height="16" rx="6" fill="#d9b48f"/><rect x="172" y="22" width="5" height="16" fill="#8e44ad"/><rect x="184" y="22" width="5" height="16" fill="#111"/><rect x="196" y="22" width="5" height="16" fill="#e67e22"/><text x="190" y="58" text-anchor="middle">Direnç</text>
  <polyline points="220,30 300,30 300,80" fill="none" stroke="#c0392b" stroke-width="3"/>
  ${led ? `<circle cx="300" cy="96" r="26" fill="#ff4d4d" opacity=".35"/>` : ""}<path d="M288,104 v-14 a12,12 0 0 1 24,0 v14 z" fill="${led ? "#ff3b3b" : "#9b2c2c"}"/><text x="330" y="100">LED</text>
  <polyline points="300,104 300,170 57,170 57,130" fill="none" stroke="#222" stroke-width="3"/>
</svg>`;
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "2. birimin girişi: nesnelerin interneti (IoT): internete bağlı cihazlar (2020'de 30 milyardan fazla). Bu cihazları anlamak için temel devre elemanları: kondansatör (elektrik depolar), direnç (akıma zorluk, sabit/ayarlı, renk kodu), bobin (manyetik alan; motor, trafo), diyot (akımı tek yönde geçirir; LED bir diyottur), mikroçip (entegre devre/yonga), transistör (3 uç; küçük akımla büyük akımı kontrol). 1. Uygulama: kitabın “çizim programı” (Tinkercad Circuits) hesabı. 2. Uygulama: Start Simulating: pil-direnç-LED devresini çalıştır. Sıra Sizde: Editing Components'ta LED renklerini kırmızı-mavi-yeşil yap.",
    akis: ["Hazırlık: Evinizde internete bağlı hangi cihazlar var?", "IoT tanımı", "Altı devre elemanı kartı (mümkünse gerçek elemanları sınıfa getirin)", "1. Uygulama: Tinkercad hesabı (öğretmen sınıf kodu açarsa öğrenciler “Students, join a Class” ile katılır)", "2. Uygulama: Start Simulating", "Sıra Sizde: Editing Components", "Test"],
    hatalar: ["Kitap programın adını vermiyor (“çizim programı”); kastedilen <b>Tinkercad Circuits</b> (tinkercad.com). Kitaptaki “Start Simulating” ve “Editing Components” Tinkercad'in başlangıç dersleri.", "Öğretmen olarak tinkercad.com'da sınıf açıp kod dağıtırsanız öğrencilerin e-posta ile hesap açmasına gerek kalmaz (13 yaş altı kuralı da sorun olmaz).", "Diyot/LED ters bağlanırsa yanmaz; uzun bacak (+, anot) artıya gider.", "Dirençsiz bağlanan LED simülasyonda yanar ve uyarı verir: gerçekte bozulur."],
    sorular: [["Direncin değeri nasıl okunur?", "Üzerindeki renk halkalarından (renk kodu tablosu). Tinkercad'de dirence tıklayınca değer yazar."], ["Transistör neden önemli?", "Bilgisayar işlemcileri milyarlarca küçük transistörden oluşur; her biri açık/kapalı bir anahtar gibi çalışır."]],
    not: "Kondansatör 1745'te icat edildi (kitap). LED = Light Emitting Diode (ışık yayan diyot)." },

  { tur: "bilgi", baslik: "Nesnelerin interneti (IoT)",
    metin: "İnternete bağlı olup internet üzerinden denetlenen cihazlar: <b>IoT · Internet of Things</b>.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "📱 Telefon" }, { ust: "🚗 Akıllı otomobil" }, { ust: "🏠 Akıllı ev, kombi" }, { ust: "🧊 Akıllı buzdolabı" }, { ust: "🤖 Robot süpürge" }, { ust: "⌚ Akıllı saat" } ] },
    not: "2020'de internete bağlı cihaz sayısı 30 milyarı aştı; kişi başı 4'ten fazla." },

  { tur: "bilgi", baslik: "Temel devre elemanları",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🔋 Kondansatör", alt: "Elektrik depolar (kapasitör)" },
      { ust: "〰️ Direnç", alt: "Akıma zorluk gösterir; sabit / ayarlı; renk kodlu" },
      { ust: "🌀 Bobin", alt: "Sarılmış tel; manyetik alan. Motor, trafo" },
      { ust: "➡️ Diyot", alt: "Akımı tek yönde geçirir. LED bir diyottur" },
      { ust: "🔲 Mikroçip", alt: "Küçük bağımsız devre: entegre devre, yonga" },
      { ust: "🔀 Transistör", alt: "3 uçlu; küçük akımla büyük akımı kontrol eder" }
    ]},
    not: "Diyot ve transistöre yarı iletken denir." },

  { tur: "uygulama", baslik: "1. Uygulama · Simülasyon hesabı",
    metin: "Kitaptaki “çizim programı”: <b>Tinkercad Circuits</b> (tinkercad.com).",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🌐", yazi: "tinkercad.com", alt: "Start Simulating" },
      { simge: "🏫", yazi: "Students, join a Class", alt: "öğretmen kod verdiyse" },
      { simge: "📧", yazi: "Sign up with Email", alt: "ya da kendi hesabın" },
      { simge: "🔑", yazi: "Ülke, doğum tarihi, e-posta, parola" },
      { simge: "✅", yazi: "CREATE ACCOUNT → DONE" }
    ]},
    adimlar: ["Tarayıcıda Tinkercad'i aç, “Start Simulating”e tıkla.", "Öğretmeninin sınıf kodu varsa “Students, join a Class” ile katıl.", "Yoksa “Create a personal account” → “Sign up with Email”.", "Parola en az 8 karakter, 1 harf, 1 rakam içersin. “I agree to…” kutusunu işaretle.", "Gerekirse e-postandaki doğrulama bağlantısına tıkla."],
    kitap: "s. 62–65 · 1. Uygulama" },

  { tur: "uygulama", baslik: "2. Uygulama · İlk devre",
    metin: "“Start Simulating” dersini aç: pil, direnç ve LED'den oluşan hazır devreyi çalıştır, LED'in yandığını gör.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Simülasyon kapalı", gorsel: { tip: "html", icerik: DEVRE(false) } },
      sag: { baslik: "▶ Start Simulation", gorsel: { tip: "html", icerik: DEVRE(true) } },
      ok: "➜" },
    adimlar: ["Tinkercad'e giriş yap, “Start Simulating” dersini aç.", "Devredeki pil, direnç ve LED'i bul.", "Sağ üstteki “Start Simulation” düğmesine bas, LED'in yandığını gözle."],
    kitap: "s. 65–66 · 2. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · LED renkleri",
    metin: "Tinkercad'de “Editing Components” dersini aç. Mavi LED'lerin rengini yukarıdan aşağıya <b>kırmızı, mavi, yeşil</b> yap (LED'e tıkla → renk listesi), simülasyonu başlat, sırayla yandıklarını gözle.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🔴 1. LED", alt: "kırmızı", renk: "#eb5757" }, { ust: "🔵 2. LED", alt: "mavi", renk: "#2f80ed" }, { ust: "🟢 3. LED", alt: "yeşil", renk: "#27ae60" } ] },
    kitap: "s. 67" },

  { tur: "test", sorular: [
    { soru: "Elektrik akımını sadece tek yönde geçiren eleman hangisidir?", secenekler: ["Direnç", "Diyot", "Bobin", "Kondansatör"], dogru: 1 },
    { soru: "Devrede elektrik depolamak için kullanılan eleman?", secenekler: ["Kondansatör", "Transistör", "Diyot", "Mikroçip"], dogru: 0 },
    { soru: "Üç ucu olan ve küçük akımla büyük akımı kontrol eden eleman?", secenekler: ["Direnç", "Bobin", "Transistör", "LED"], dogru: 2 },
    { soru: "Elektrik motorları ve trafolar hangi elemanın özelliğinden yararlanır?", secenekler: ["Bobin", "Diyot", "Direnç", "Kondansatör"], dogru: 0 },
    { soru: "IoT kısaltmasının açılımı nedir?", secenekler: ["Input of Technology", "Internet of Things", "Inside of Tools", "Internet on Time"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Direncini değiştir",
    adimlar: ["2. Uygulamadaki devrede dirence tıkla, değerini 1 kΩ'dan 100 Ω'a, sonra 10 kΩ'a çevir.", "LED'in parlaklığı nasıl değişti?", "Direnci tamamen sil: Tinkercad ne uyarısı veriyor?"],
    not: "Direnç ne kadar büyükse akım o kadar azalır, LED o kadar sönük yanar." }

]};
