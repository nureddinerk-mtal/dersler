// SPROG · 19 · Animasyon, menü, ses ve müzik  (Kitap s. 139–156)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.3.2 Animasyon: hareket resimleri art arda eklenir. 8. Uygulama: Sprite “Oyuncu”, kütüphanede “Ninja boy_dead” 10 resim tek tek +ADD → PREVIEW, saat simgesiyle hız, Loop işaretli → Animation #0 (düşme). 9. Uygulama: aynı nesneye + ADD AN ANIMATION → “Ninja boy_run” 10 resim → Animation #1 (koşma). Sıra Sizde: atma (Throw) ve kayma (Slide) animasyonları. 11. Uygulama (animasyon): sol ok → Change the animation = 0, sağ ok → = 1. Sıra Sizde: yukarı → kayma, aşağı → atma. 3.3.3 Menü: 11. Uygulama (kitapta iki tane 11. var): sahneler AnaMenu ve Bolum1 (üç nokta → Rename), AnaMenu siyah; Text nesneleri OyunIsmi “BENİM OYUNUM”, OyunBasla “OYUNA BAŞLA”, OyunBitir “ÇIKIŞ” (boyut 50, mavi). Olay: The cursor/touch is on OyunBasla + Mouse button pressed (Left) → Change the scene: Bolum1. Sıra Sizde: ÇIKIŞ → Quit the game. 3.3.4 Ses: 12. Uygulama: At the beginning of the scene → Play a music file (kütüphaneden), Repeat: YES. Sıra Sizde: sol ok → müzik.",
    akis: ["Animasyon = resim resim hareket", "8. Uygulama: düşme (#0)", "9. Uygulama: koşma (#1)", "Sıra Sizde: atma, kayma", "11. Uygulama: tuşla animasyon değiştir", "Menü: birden çok sahne", "11. Uygulama: ana menü", "12. Uygulama: arka plan müziği", "Test"],
    hatalar: ["Yeni sürümde resimler Asset Store'dan paket olarak gelir; “Ninja boy” paketi tüm animasyonlarıyla tek seferde eklenebilir. Kitaptaki “10 resmi tek tek ekle” yolu da çalışır.", "Animasyon numarası 0'dan başlar: ilk eklenen #0, ikinci #1. Yeni sürümde animasyonlara ad da verilebilir (Change the animation (by name)).", "Kitap tutarsızlığı: animasyon Sıra Sizde'sinde kontrol listesi “1: koşma” diyor, oysa yukarı/aşağı için kayma ve atma isteniyor. Öğrencilere numarayı kendi ekledikleri sıraya göre vermelerini söyleyin.", "Kitap tutarsızlığı: nesnenin adı <b>OyunBasla</b> ama 12. adımda OyunaBasla, Sıra Sizde'de OyunuBitir yazıyor; adlar nesne listesindeki gibi olmalı.", "Menü olayında iki koşul aynı kutuda olmalı; ayrı olaylara konursa fare nereye tıklanırsa tıklansın sahne değişir.", "Tarayıcılar sesin başlaması için önce bir tıklama ister: ön izlemede müzik gelmezse oyun penceresine tıklayın.", "Quit the game tarayıcı ön izlemesinde pencereyi kapatmayabilir; masaüstü/mobil dışa aktarımda çalışır."],
    sorular: [["Loop ne işe yarar?", "Animasyon son resimden sonra başa dönüp tekrar eder. Koşma için açık, düşme için kapalı olabilir."], ["Menüde neden ayrı sahne?", "Her sahne ayrı bir ekran: menü, bölüm 1, oyun sonu. Change the scene ile aralarında geçilir."]],
    olaylar: [
      { baslik: "11. Uygulama · Animasyonu değiştir", satirlar: [ { kosul: ["Left key is pressed"], eylem: ["Set animation of Oyuncu to 0 (düşme)"] }, { kosul: ["Right key is pressed"], eylem: ["Set animation of Oyuncu to 1 (koşma)"] } ] },
      { baslik: "11. Uygulama · Menü (AnaMenu sahnesi)", sekme: "AnaMenu (Events)", satirlar: [ { kosul: ["The cursor/touch is on OyunBasla", "Left mouse button is down"], eylem: ["Change to scene Bolum1"] } ] },
      { baslik: "Sıra Sizde · Çıkış", sekme: "AnaMenu (Events)", satirlar: [ { kosul: ["The cursor/touch is on OyunBitir", "Left mouse button is down"], eylem: ["Quit the game"] } ] },
      { baslik: "12. Uygulama · Müzik", satirlar: [ { kosul: ["At the beginning of the scene"], eylem: ["Play the music … with repeat: yes"] } ] },
      { baslik: "Sıra Sizde · Sol okla müzik", satirlar: [ { kosul: ["Left key is pressed"], eylem: ["Play the music … with repeat: yes"] } ] }
    ] },

  { tur: "bilgi", baslik: "Animasyon",
    gorsel: { tip: "akis", adimlar: [ { simge: "🧍", yazi: "Resim 0" }, { simge: "🚶", yazi: "Resim 1" }, { simge: "🏃", yazi: "Resim 2" }, { simge: "🔁", yazi: "Loop: başa dön" } ] },
    metin: "Hareket resimleri art arda gösterilince karakter canlanır. Bir nesnenin birçok animasyonu olabilir: <b>#0, #1, #2…</b>" },

  { tur: "uygulama", baslik: "8–9. Uygulama · Düşme ve koşma",
    metin: "Oyuncu nesnesine iki animasyon ekle.",
    gorsel: { tip: "tablo", ad: "Oyuncu · animasyonlar", sutunlar: ["No", "Hareket", "Kütüphanede ara", "Resim"], satirlar: [["#0", "Düşme", "Ninja boy_dead", "10"], ["#1", "Koşma", "Ninja boy_run", "10"]] },
    adimlar: ["Boş sahne → Add a new object → Sprite. Ad: Oyuncu → + ADD AN ANIMATION → + ADD.", "“Ninja boy_dead” ara: 10 resmi sırayla ekle (Dead_0 … Dead_9).", "PREVIEW ile izle; saat simgesiyle hızı ayarla, Loop'u işaretle → APPLY. Bu Animation #0.", "Oyuncu'ya çift tıkla → + ADD AN ANIMATION → “Ninja boy_run” 10 resmi ekle. Bu Animation #1.", "Oyuncu'yu sahneye koy, ön izlemeyle izle."],
    kitap: "s. 139–144 · 8–9. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Atma ve kayma",
    metin: "Oyuncu (Ninja boy) nesnesine <b>atma</b> (Ninja Boy_Throw) ve <b>kayma</b> (Ninja Boy_Slide) animasyonlarını ekle.",
    kitap: "s. 145" },

  { tur: "uygulama", baslik: "11. Uygulama · Tuşla animasyon",
    metin: "Sol ok tuşuna basınca düşme, sağ ok tuşuna basınca koşma animasyonu oynasın.",
    gorsel: { tip: "ikili",
      sol: { baslik: "← basılınca: #0", gorsel: { tip: "sahne", motor: "gd", tus: "←", dekor: "#9e9e9e", kuklalar: [ { e: "😵", x: 0, y: -20, boy: 80, ad: "düşme" } ] } },
      sag: { baslik: "→ basılınca: #1", gorsel: { tip: "sahne", motor: "gd", tus: "→", dekor: "#9e9e9e", kuklalar: [ { e: "🏃", x: 0, y: -20, boy: 80, ad: "koşma", ters: true } ] } },
      ok: "·" },
    adimlar: ["Oyuncu'yu sahneye koy, (Events) sekmesine geç.", "Olay: Key pressed: Left → eylem: Oyuncu → Change the animation, =(set to), 0.", "Olay: Key pressed: Right → eylem: Change the animation, =, 1.", "Ön izlemede dene."],
    kitap: "s. 146–148 · 11. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Yukarı ve aşağı",
    metin: "Kayma ve atma animasyonu eklenmiş Oyuncu'yu sahneye koy. <b>Yukarı ok</b>: kayma, <b>aşağı ok</b>: atma animasyonu oynasın.",
    kitap: "s. 148" },

  { tur: "bilgi", baslik: "Menü",
    metin: "Oyun başlarken, bölüm geçerken, oyun bitince seçenekler sunan sahne. Her ekran <b>ayrı bir sahne</b>dir.",
    gorsel: { tip: "akis", adimlar: [ { simge: "📋", yazi: "AnaMenu" }, { simge: "▶️", yazi: "Bolum1" }, { simge: "▶️", yazi: "Bolum2" }, { simge: "🏁", yazi: "Oyun sonu" } ] } },

  { tur: "uygulama", baslik: "11. Uygulama · Ana menü",
    metin: "“OYUNA BAŞLA”ya tıklanınca Bolum1 sahnesine geçilsin.",
    gorsel: { tip: "ikili",
      sol: { baslik: "AnaMenu", gorsel: { tip: "html", icerik: `<svg viewBox="0 0 320 240" style="max-width:320px;width:100%;background:#000;border-radius:8px" font-family="Segoe UI, Arial" font-weight="700" text-anchor="middle"><text x="160" y="60" fill="#3d7bff" font-size="30">BENİM OYUNUM</text><text x="160" y="130" fill="#3d7bff" font-size="22">OYUNA BAŞLA</text><text x="160" y="180" fill="#3d7bff" font-size="22">ÇIKIŞ</text><text x="230" y="140" font-size="24">👆</text></svg>` } },
      sag: { baslik: "Bolum1", gorsel: { tip: "html", icerik: `<svg viewBox="0 0 320 240" style="max-width:320px;width:100%;background:#9e9e9e;border-radius:8px" font-family="Segoe UI, Arial" text-anchor="middle"><text x="160" y="125" fill="#fff" font-size="16">boş gri sahne</text></svg>` } },
      ok: "➜" },
    adimlar: ["Boş projeye iki sahne ekle; üç nokta → Rename ile <b>AnaMenu</b> ve <b>Bolum1</b> yap.", "AnaMenu'nün arka planını siyah yap.", "Üç Text nesnesi ekle (Size 50, Color mavi): OyunIsmi “BENİM OYUNUM”, OyunBasla “OYUNA BAŞLA”, OyunBitir “ÇIKIŞ”. Ortala.", "AnaMenu (Events): Add condition → OyunBasla → The cursor/touch is on object.", "Aynı kutuya ikinci koşul: OTHER CONDITIONS → Mouse and touch → Mouse button pressed or touch held → Left.", "Add action → OTHER ACTIONS → Scene → Change the scene → Bolum1.", "Ön izlemede OYUNA BAŞLA'ya tıkla."],
    kitap: "s. 149–152 · 11. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Çıkış",
    metin: "“ÇIKIŞ” yazısına tıklanınca oyundan çıkılsın (Scene → <b>Quit the game</b>).",
    kitap: "s. 153" },

  { tur: "uygulama", baslik: "12. Uygulama · Arka plan müziği",
    metin: "Sahne başlar başlamaz bir müzik çalsın ve bitince tekrar etsin.",
    gorsel: { tip: "akis", adimlar: [ { simge: "🎬", yazi: "At the beginning of the scene", alt: "koşul" }, { simge: "🎵", yazi: "Play a music file", alt: "eylem · kütüphaneden" }, { simge: "🔁", yazi: "Repeat: YES" } ] },
    adimlar: ["Boş proje, sahne ekle → (Events) → Add a new event.", "Add condition → OTHER CONDITIONS → Scene → At the beginning of the scene → OK.", "Add action → OTHER ACTIONS → Audio → Play a music file.", "Choose an audio file from library ile müzik seç, Repeat: YES."],
    kitap: "s. 154–155 · 12. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Tuşla müzik",
    metin: "Sol ok tuşuna basınca uygun bir müzik çalsın.",
    kitap: "s. 155" },

  { tur: "test", sorular: [
    { soru: "Bir nesneye ilk eklenen animasyonun numarası nedir?", secenekler: ["0", "1", "10", "-1"], dogru: 0 },
    { soru: "Animasyonun son resimden sonra başa dönmesini sağlayan seçenek?", secenekler: ["Preview", "Loop", "Apply", "Repeat once"], dogru: 1 },
    { soru: "Tuşa basınca karakterin animasyonunu değiştiren eylem?", secenekler: ["Change the scene", "Change the animation", "Delete the object", "Play a music file"], dogru: 1 },
    { soru: "Menüden oyuna geçmek için hangi eylem kullanılır?", secenekler: ["Quit the game", "Change the scene", "Create an object", "Modify the text"], dogru: 1 },
    { soru: "📖 Oyunda müzik dosyası çalmak için hangi eylem kullanılır?", secenekler: ["Is moving", "Is on floor", "Play a music file", "Quit game", "Reset the timer"], dogru: 2 },
    { soru: "Sahne açılır açılmaz bir şey yapmak için hangi koşul kullanılır?", secenekler: ["Key pressed", "At the beginning of the scene", "Collision", "Is falling"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Tıklama sesi",
    adimlar: ["Menü olayına (OYUNA BAŞLA) bir eylem daha ekle: Audio → Play a sound.", "Kütüphaneden kısa bir “click” sesi seç.", "Eylem sırasını dene: ses önce mi çalmalı, sahne değiştirme önce mi?"],
    not: "Play a sound kısa efektler, Play a music file uzun müzikler içindir." }

]};
