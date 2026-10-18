// SPROG · 13 · Mikrodenetleyici kart yapısı ve arayüzü (Arduino)  (Kitap s. 85–91)
var NANO = `<svg viewBox="0 0 420 190" style="max-width:480px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="12">
  <rect x="60" y="55" width="300" height="80" rx="6" fill="#1b6fa8"/>
  ${Array.from({ length: 15 }, (_, i) => `<rect x="${72 + i * 19}" y="47" width="8" height="12" fill="#c9a227"/><rect x="${72 + i * 19}" y="131" width="8" height="12" fill="#c9a227"/>`).join("")}
  <text x="210" y="38" text-anchor="middle" fill="#1b6fa8" font-weight="700">D0 · D1 · D2 … dijital pinler</text>
  <text x="210" y="162" text-anchor="middle" fill="#1b6fa8" font-weight="700">A0 · A1 · A2 … analog pinler</text>
  <rect x="20" y="78" width="46" height="34" rx="4" fill="#aaa"/><text x="43" y="99" text-anchor="middle" font-size="10">USB</text>
  <rect x="180" y="77" width="60" height="36" fill="#222"/><text x="210" y="99" text-anchor="middle" fill="#ddd" font-size="10">MCU</text>
  <circle cx="290" cy="82" r="5" fill="#ffd34d"/><text x="300" y="86" fill="#fff" font-size="10">RX</text>
  <circle cx="290" cy="97" r="5" fill="#ffd34d"/><text x="300" y="101" fill="#fff" font-size="10">TX</text>
  <circle cx="290" cy="112" r="5" fill="#5f5"/><text x="300" y="116" fill="#fff" font-size="10">POW</text>
  <text x="210" y="182" text-anchor="middle" fill="#555">Arduino Nano</text>
</svg>`;
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "2.4: Mikrodenetleyici kart = tek bir uygulamayı çalıştıran mini bilgisayar; içine konduğu aygıtı programlanabilir yapar (robot süpürge, akıllı kombi). Arduino Nano: giriş/çıkış pinleri; bir yanda A0, A1… analog, diğer yanda D0, D1… dijital pinler. Dijitalde 0 ya da 255 gibi iki değer, analogda 0–255 arası tüm değerler; PWM ile dijital pin analog gibi kullanılabilir. RX veri alma, TX veri gönderme, POW güç LED'i. Nano 33 IoT'de dâhilî Wi-Fi + Bluetooth. Program, Arduino IDE ile yazılıp USB ile yüklenir. 9. Uygulama: IDE indir-kur (arduino.cc/en/software). 10. Uygulama: Başlat → Arduino, yükle (→) düğmesi. 11. Uygulama: kartı USB ile bağla, Araçlar → Kart ve Port seç, gerekirse Kart Bilgisi Al. Sıra Sizde: Nano için port ve kart seçimi.",
    akis: ["Gerçek kartı sınıfta dolaştırın (varsa)", "Pinler ve durum LED'leri", "Arduino IDE nedir?", "9. Uygulama: kurulum", "10. Uygulama: arayüz, yükle düğmesi", "11. Uygulama: kart ve port seçimi", "Sıra Sizde", "Test"],
    hatalar: ["Ucuz Nano klonlarında CH340 USB yongası olur: Windows portu görmezse CH340 sürücüsü kurulmalı.", "Eski Nano'larda Araçlar → İşlemci → “ATmega328P (Old Bootloader)” seçilmezse yükleme hata verir.", "Port listesi boşsa: kablo sadece şarj kablosu olabilir (veri hattı yok), başka kablo deneyin.", "Kitap “dijitalde 0 veya 255” diyor; Arduino'da dijital yazma aslında LOW/HIGH (0/1), 0–255 analogWrite (PWM) değeridir. Kafa karışırsa Packet Tracer'daki karşılığını hatırlatın."],
    sorular: [["Mikrodenetleyici ile bilgisayar farkı?", "İkisi de program çalıştırır ama mikrodenetleyici tek bir iş için yapılmış, küçük ve ucuzdur; ekran, klavye gerekmez."], ["Kartı Packet Tracer'daki gibi Python'la programlayabilir miyim?", "Arduino IDE C/C++ tabanlı dil kullanır; MicroPython destekleyen kartlar (ESP32, Raspberry Pi Pico) Python ile programlanabilir."]],
    kod: `// Arduino IDE'nin hazır örneği: Dosya → Örnekler → 01.Basics → Blink
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`,
    not: "Kitapta kod yazma yok; kurulum, arayüz ve bağlantı var. Kartınız varsa hazır Blink örneğini yükleyip karttaki LED'in yanıp söndüğünü göstermek iyi bir kapanış olur (Meraklısına)." },

  { tur: "bilgi", baslik: "Mikrodenetleyici kart",
    metin: "Tek bir uygulamayı çalıştıran <b>mini bilgisayar</b>. İçine konduğu aygıtı programlanabilir yapar.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🤖 Robot süpürge" }, { ust: "🔥 Akıllı kombi" }, { ust: "🌐 İnternetten denetim", alt: "kartın türüne göre" } ] } },

  { tur: "bilgi", baslik: "Arduino Nano",
    gorsel: { tip: "html", icerik: NANO },
    metin: "<b>Pinler:</b> veri giriş (IN) ve çıkış (OUT) için. <b>RX</b> veri alıyor, <b>TX</b> veri gönderiyor, <b>POW</b> elektrik var.",
    not: "Dijital pin iki değer (0 ya da 255), analog pin 0–255 arası tüm değerler. Nano 33 IoT: dâhilî Wi-Fi ve Bluetooth." },

  { tur: "bilgi", baslik: "Programı karta yüklemek",
    gorsel: { tip: "akis", adimlar: [ { simge: "💻", yazi: "Arduino IDE'de yaz" }, { simge: "🔌", yazi: "USB ile bağla" }, { simge: "➡️", yazi: "Yükle" }, { simge: "✅", yazi: "Kart çalıştırır" } ] },
    metin: "Arduino tümleşik geliştirme ortamı: <b>Arduino IDE</b>." },

  { tur: "uygulama", baslik: "9. Uygulama · Arduino IDE kurulumu",
    gorsel: { tip: "akis", adimlar: [ { simge: "🌐", yazi: "arduino.cc/en/software" }, { simge: "⬇️", yazi: "İşletim sistemine uygun dosya" }, { simge: "🛡️", yazi: "Çalıştır → onayla" }, { simge: "✅", yazi: "Pencereleri geç, kur" } ] },
    adimlar: ["Tarayıcıda Arduino'nun resmî indirme sayfasını aç.", "İşletim sistemine uygun indirme bağlantısını seç.", "Kurulum dosyasını çalıştır, onaylara Evet de.", "Kurulum pencerelerini sırayla geçip kurulumu tamamla."],
    kitap: "s. 86–87 · 9. Uygulama" },

  { tur: "uygulama", baslik: "10. Uygulama · Arduino IDE'yi çalıştır",
    gorsel: { tip: "html", icerik: `<svg viewBox="0 0 440 200" style="max-width:500px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="13">
      <rect x="0" y="0" width="440" height="34" fill="#00878f"/><circle cx="22" cy="17" r="11" fill="#fff"/><text x="22" y="22" text-anchor="middle" fill="#00878f" font-weight="700">✓</text><circle cx="50" cy="17" r="11" fill="#fff"/><text x="50" y="22" text-anchor="middle" fill="#00878f" font-weight="700">➜</text><text x="70" y="22" fill="#fff">← Doğrula · Yükle</text>
      <text x="300" y="22" fill="#fff">Arduino Nano ▾</text>
      <rect x="10" y="44" width="420" height="110" fill="#f7f9fa" stroke="#dde"/><text x="20" y="66" fill="#00878f">void setup() { … }</text><text x="20" y="88" fill="#00878f">void loop() { … }</text>
      <rect x="0" y="162" width="440" height="38" fill="#1e1e1e"/><text x="12" y="186" fill="#9c9">Çıktı · yükleme mesajları</text>
    </svg>` },
    adimlar: ["Başlat menüsünü aç, “Arduino” yaz.", "Arduino IDE'yi çalıştır, ana pencereyi incele.", "Kodu yazdıktan sonra karta yüklemek için üstteki <b>Yükle (→)</b> düğmesi kullanılır."],
    kitap: "s. 87–89 · 10. Uygulama" },

  { tur: "uygulama", baslik: "11. Uygulama · Kartı bağla",
    gorsel: { tip: "akis", adimlar: [ { simge: "▶️", yazi: "Arduino IDE'yi aç" }, { simge: "🔌", yazi: "Kartı USB ile bağla" }, { simge: "🧰", yazi: "Araçlar → Kart", alt: "gerekirse Kart Bilgisi Al" }, { simge: "🔢", yazi: "Araçlar → Port", alt: "COM3 gibi" } ] },
    adimlar: ["Arduino IDE'yi çalıştır.", "Kartı USB kablosuyla bilgisayara bağla.", "Araçlar menüsünden doğru kartın seçili olduğundan emin ol. Tanımazsa Araçlar → Kart Bilgisi Al.", "Araçlar → Port: kartın portunu kontrol et."],
    kitap: "s. 89–90 · 11. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Port ve kart",
    metin: "Arduino Nano kartını bilgisayara bağla. Araçlar menüsünden <b>port</b> ve <b>kart</b> bilgilerini doğru seç.",
    kitap: "s. 90" },

  { tur: "test", sorular: [
    { soru: "Karttan veri gönderildiğini gösteren LED hangisidir?", secenekler: ["RX", "TX", "POW", "L"], dogru: 1 },
    { soru: "A0, A1… şeklinde adlandırılan pinler hangileridir?", secenekler: ["Dijital", "Analog", "Güç", "USB"], dogru: 1 },
    { soru: "Arduino kartını programlamak için kullanılan uygulama?", secenekler: ["Packet Tracer", "mBlock", "Arduino IDE", "Tinkercad"], dogru: 2 },
    { soru: "Dâhilî Wi-Fi ve Bluetooth'u olan kart modeli?", secenekler: ["Arduino Uno", "Arduino Nano 33 IoT", "Arduino Mega", "Arduino Micro"], dogru: 1 },
    { soru: "Kart ve port seçimi hangi menüden yapılır?", secenekler: ["Dosya", "Düzenle", "Taslak", "Araçlar"], dogru: 3 }
  ]},

  { tur: "merak", baslik: "Karttaki LED'i yak",
    adimlar: ["Dosya → Örnekler → 01.Basics → Blink örneğini aç.", "Kartını ve portunu seç, Yükle (→) düğmesine bas.", "Karttaki küçük LED yanıp sönüyor mu? delay(1000) değerini 200 yap, tekrar yükle."],
    not: "delay milisaniye cinsindendir: 1000 ms = 1 saniye." }

]};
