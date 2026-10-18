// SPROG · 12 · Nesnelerin internetinde Python ile programlama  (Kitap s. 79–85)
var MCU = (yan) => `<svg viewBox="0 0 380 170" style="max-width:440px;width:100%;background:#f4f8fc;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="13">
  <rect x="30" y="40" width="130" height="90" rx="8" fill="#1f6f8b"/><text x="95" y="80" text-anchor="middle" fill="#fff" font-weight="700">MCU1</text><text x="95" y="100" text-anchor="middle" fill="#cfe">MCU Board</text>
  <circle cx="160" cy="70" r="5" fill="#ffd34d"/><text x="168" y="62" font-size="11">D0</text>
  <path d="M160,70 C220,70 230,110 280,110" fill="none" stroke="#2d9cdb" stroke-width="3"/>
  ${yan ? `<circle cx="300" cy="96" r="30" fill="#3ddc84" opacity=".35"/>` : ""}<path d="M286,112 v-18 a14,14 0 0 1 28,0 v18 z" fill="${yan ? "#2ecc71" : "#222"}"/><text x="300" y="140" text-anchor="middle">LED (D0)</text>
</svg>`;
var RGB =(renk, yazi) => `<svg viewBox="0 0 380 170" style="max-width:440px;width:100%;background:#f4f8fc;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="13">
  <rect x="20" y="40" width="130" height="90" rx="8" fill="#1f6f8b"/><text x="85" y="80" text-anchor="middle" fill="#fff" font-weight="700">MCU1</text><text x="85" y="100" text-anchor="middle" fill="#cfe">D0 · D1 · D2</text>
  <path d="M150,60 C220,60 230,80 280,80" fill="none" stroke="#2d9cdb" stroke-width="3"/><path d="M150,85 C220,85 230,92 280,92" fill="none" stroke="#2d9cdb" stroke-width="3"/><path d="M150,110 C220,110 230,104 280,104" fill="none" stroke="#2d9cdb" stroke-width="3"/>
  ${renk ? `<circle cx="305" cy="92" r="34" fill="${renk}" opacity=".35"/>` : ""}<path d="M290,112 v-22 a15,15 0 0 1 30,0 v22 z" fill="${renk || "#222"}"/><text x="305" y="142" text-anchor="middle">RGB LED (A0 A1 A2)</text>
  ${yazi ? `<text x="305" y="28" text-anchor="middle" font-weight="700">${yazi}</text>` : ""}
</svg>`;
window.KONU = { dil: "python", slaytlar: [

  { tur: "hoca",
    ozet: "2.3: IoT programlamada JavaScript ve Python yaygın; Python öğrenmesi kolay, blok temelliye göre daha esnek, gerçek donanımda da dil kullanılır. 7. Uygulama: 5. Uygulamadaki MCU + LED devresi; MCU1 → Programming → New, şablon “Blink – Python”; main.py'de 5, 8 ve 10. satırlardaki 1'leri 0 yap (LED D0'da) → Run. 8. Uygulama: RGB LED'li trafik lambası: A0–D0, A1–D1, A2–D2 (IoT Custom Cable), proje adı “RGB LED trafik lamba”, şablon Blink – Python, kodu Görsel 2.38'deki gibi yaz. Sıra Sizde: kırmızı ve yeşil 5 sn, sarı 1 sn.",
    akis: ["Blok mu, dil mi? (2.3)", "7. Uygulama: hazır Blink şablonunu D0'a uyarla", "Kodu satır satır okuyalım: pinMode, digitalWrite, sleep", "8. Uygulama: RGB LED devresi", "Trafik lambası kodu", "Sıra Sizde: süreleri değiştir", "Test"],
    hatalar: ["Şablon pin 1 ile gelir; LED D0'a bağlı olduğu için 1'ler 0 yapılmazsa LED yanmaz (kitap 5, 8, 10. satırları söylüyor).", "Python'da girinti önemli: while içindeki satırlar aynı hizada olmalı.", "Kitap “sarı” için kırmızı + yeşil kanalı birlikte yakıyor (0 ve 1 HIGH): ışıkta kırmızı + yeşil = sarı. Öğrenciler bunu şaşırtıcı bulur, açıklayın.", "RGB LED'in A0/A1/A2 uçları karıştırılırsa renkler yer değiştirir.", "Kodu değiştirdikten sonra Stop → Run yapılmazsa eski kod çalışmaya devam eder."],
    sorular: [["sleep(0.5) ne demek?", "Yarım saniye bekle. time modülündeki sleep saniye cinsinden bekler."], ["Neden while True?", "Kart açık kaldıkça trafik lambası durmadan dönsün diye: sonsuz döngü."], ["Mavi kanal (D2) neden hep LOW?", "Trafik lambasında mavi yok; sadece kırmızı ve yeşil kanallar karıştırılıyor."]],
    kod: `# 7. Uygulama · main.py (5, 8, 10. satırlar 0 yapıldı)
from gpio import *
from time import *

def main():
    pinMode(0, OUT)
    print("Blinking")
    while True:
        digitalWrite(0, HIGH)
        sleep(1)
        digitalWrite(0, LOW)
        sleep(0.5)

if __name__ == "__main__":
    main()

# 8. Uygulama · RGB LED trafik lambası
from gpio import *
from time import *

def main():
    pinMode(0, OUT)
    pinMode(1, OUT)
    pinMode(2, OUT)
    while True:
        print('Kirmizi')
        digitalWrite(0, HIGH); digitalWrite(1, LOW); digitalWrite(2, LOW)
        sleep(2)
        print('Sari')
        digitalWrite(0, HIGH); digitalWrite(1, HIGH); digitalWrite(2, LOW)
        sleep(0.5)
        print('Yesil')
        digitalWrite(0, LOW); digitalWrite(1, HIGH); digitalWrite(2, LOW)
        sleep(2)
        print('Sari')
        digitalWrite(0, HIGH); digitalWrite(1, HIGH); digitalWrite(2, LOW)
        sleep(0.5)

if __name__ == "__main__":
    main()

# Sıra Sizde: kırmızı ve yeşilde sleep(5), sarıda sleep(1)`,
    not: "Kitapta her digitalWrite ayrı satırda; burada yer kazanmak için noktalı virgülle yan yana yazıldı. Öğrenciler ayrı satırda yazsın." },

  { tur: "bilgi", baslik: "Blok mu, programlama dili mi?",
    gorsel: { tip: "ikili",
      sol: { baslik: "🧩 Blok temelli", gorsel: { tip: "kartlar", kartlar: [ { ust: "Yeni başlayanlar için ideal" }, { ust: "Hata yapmak zor" } ] } },
      sag: { baslik: "🐍 Python / JavaScript", gorsel: { tip: "kartlar", kartlar: [ { ust: "Daha büyük esneklik" }, { ust: "Gerçek donanımda da kullanılır" } ] } },
      ok: "⇄" },
    metin: "IoT için en yaygın diller: <b>JavaScript</b> ve <b>Python</b>. Python öğrenmesi daha kolay." },

  { tur: "uygulama", baslik: "7. Uygulama · Python ile yakıp söndür",
    metin: "5. Uygulamadaki devrede LED, Python koduyla yanıp sönsün.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Şablon: Blink – Python", gorsel: { tip: "akis", adimlar: [ { simge: "🔲", yazi: "MCU1 → Programming" }, { simge: "➕", yazi: "New · Name" }, { simge: "📄", yazi: "Template: Blink – Python" }, { simge: "✅", yazi: "Create" } ] } },
      sag: { baslik: "▶ Run", gorsel: { tip: "html", icerik: MCU(true) } },
      ok: "➜" },
    adimlar: ["Devreyi 5. Uygulamadaki gibi kur (MCU1 + LED, D0–D0).", "MCU1'e tıkla → Programming → New. Bir ad yaz, şablon olarak “Blink – Python” seç → Create.", "main.py'ye çift tıkla. Şablon LED'i pin 1'de sanıyor: 5, 8 ve 10. satırlardaki 1'leri 0 yap.", "Run: LED yanıp sönüyor mu?"],
    kitap: "s. 79–81 · 7. Uygulama" },

  { tur: "bilgi", baslik: "Kodu okuyalım",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "pinMode(0, OUT)", alt: "0 numaralı ucu çıkış yap" },
      { ust: "digitalWrite(0, HIGH)", alt: "uca elektrik ver: LED yanar" },
      { ust: "digitalWrite(0, LOW)", alt: "elektriği kes: LED söner" },
      { ust: "sleep(1)", alt: "1 saniye bekle" },
      { ust: "while True:", alt: "sonsuza kadar tekrarla" }
    ]},
    not: "Blok temelli programdaki bloklarla aynı işler: sadece yazıyla." },

  { tur: "uygulama", baslik: "8. Uygulama · RGB LED trafik lambası",
    metin: "Bir RGB LED, Python koduyla trafik lambası gibi sırayla yansın.",
    gorsel: [
      { tip: "akis", adimlar: [ { simge: "🔴", yazi: "Kırmızı", alt: "2 sn", renk: "#eb5757" }, { simge: "🟡", yazi: "Sarı", alt: "0,5 sn", renk: "#f2c94c" }, { simge: "🟢", yazi: "Yeşil", alt: "2 sn", renk: "#27ae60" }, { simge: "🟡", yazi: "Sarı", alt: "0,5 sn → başa", renk: "#f2c94c" } ] },
      { tip: "html", icerik: RGB("#ff3b3b", "Kırmızı") }
    ],
    adimlar: ["Components → Boards → MCU Board ekle.", "RGB LED ekle (Components → Actuators).", "Connections → IoT Custom Cable: LED'in A0'ını kartın D0'ına, A1'i D1'e, A2'yi D2'ye bağla.", "MCU1 → Programming → New: ad “RGB LED trafik lamba”, şablon Blink – Python → Create.", "main.py'yi aç, üç ucu çıkış yap; sonsuz döngüde renkleri sırayla yak. İpucu: sarı = kırmızı + yeşil birlikte.", "Run ile test et."],
    kitap: "s. 81–85 · 8. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Süreleri değiştir",
    metin: "8. Uygulamada kırmızı ve yeşil ışık <b>5 saniye</b>, sarı ışık <b>1 saniye</b> yansın. Kodu değiştirip devreyi test et.",
    kitap: "s. 85" },

  { tur: "test", sorular: [
    { soru: "Nesnelerin interneti programlamada yaygın kullanılan iki dil hangisidir?", secenekler: ["C# ve Java", "JavaScript ve Python", "PHP ve SQL", "HTML ve CSS"], dogru: 1 },
    { soru: "Python LED projesi oluştururken hangi şablon seçilir?", secenekler: ["Empty – Visual", "Blink – Python", "Hello – JavaScript", "Empty – Python"], dogru: 1 },
    { soru: "digitalWrite(0, LOW) ne yapar?", secenekler: ["LED'i yakar", "0 numaralı uca elektrik vermeyi keser", "0 saniye bekler", "Pini giriş yapar"], dogru: 1 },
    { soru: "RGB LED kaç renk kanalına (uca) sahiptir?", secenekler: ["1", "2", "3", "4"], dogru: 2 },
    { soru: "Kitaptaki kodda sarı ışık nasıl elde ediliyor?", secenekler: ["Mavi kanal yakılarak", "Kırmızı ve yeşil kanal birlikte yakılarak", "Sadece yeşil yakılarak", "Üç kanal birlikte yakılarak"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Yaya düğmesi",
    metin: "Karta bir düğme (Components → Sensors → Push Button) bağla. Düğmeye basılınca (digitalRead) ışık hemen kırmızıya dönsün ve 5 saniye beklesin.",
    not: "digitalRead(pin) uçtan değer okur: düğmeye basılıysa HIGH döner. Bu, girişle (INPUT) çalışmanın ilk adımıdır." }

]};
