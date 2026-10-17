// WTUG · 20 · İyi site nasıl olur: içerik, tasarım, renk  (Kitap s. 26–34)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Tasarım ilkeleri: önce içerik, sonra taslak, sonra renk ve tipografi. Kod yok; kâğıt-kalem taslak çizdirmek bu konuyu kalıcı yapıyor.", akis: ["Örnek siteleri birlikte eleştir", "Sıcak / soğuk renk, kontrast", "Okul sitesi taslağı (kâğıda)"], hatalar: ["Çok fazla renk ve yazı tipi kullanmak", "Açık zemine açık yazı (kontrast düşük)"], sorular: [["Kaç renk kullanmalıyım?", "Genelde 1 ana + 1–2 yardımcı renk yeter."], ["Hangi yazı tipi?", "Ekranda okunaklı, en fazla 2 farklı yazı tipi."]] },


  { tur: "bilgi", baslik: "Web tasarım ilkeleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📝 İçerik", alt: "Ne anlatıyorum?" }, { ust: "📐 Tasarım", alt: "Nereye koyuyorum?" },
      { ust: "🎨 Biçimsellik", alt: "Renk, yazı tipi, okunabilirlik" }, { ust: "🧭 İşlevsellik", alt: "Kolay kullanılıyor mu?" },
      { ust: "🕒 Güncellik", alt: "Bilgi taze mi?" }, { ust: "🤝 Güvenilirlik", alt: "Özgün, hatasız mı?" },
      { ust: "📱 Uyumluluk", alt: "Her cihazda çalışıyor mu?" }
    ]},
    not: "Aynı işi yapan iki siteden birini daha çok ziyaret ediyorsak sebebi bu ilkelerdir." },

  { tur: "bilgi", baslik: "1. İçerik: işe buradan başla",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🎯 Hedef kitleye uygun", alt: "Gereğinden fazla öge yok" },
      { ust: "💬 Anlaşılır dil", alt: "Net, doğal cümleler" },
      { ust: "✨ Özgün ve güncel", alt: "Bilgilendirici, dikkat çekici" },
      { ust: "🔍 SEO uyumlu", alt: "Konuyla ilgili anahtar kelimeler" },
      { ust: "🗂️ Gruplanmış", alt: "Metin, resim, video ayrı ayrı" },
      { ust: "⚡ Hafif dosyalar", alt: "Resim ve video sayfayı yavaşlatmasın" }
    ]},
    not: "SEO (Arama Motoru Optimizasyonu): sitenin aramalarda üst sırada çıkması için yapılan çalışmalar." },

  { tur: "bilgi", baslik: "2. Tasarım: önce taslak",
    metin: "Kodlamadan önce sayfanın taslağını kâğıda ya da bilgisayara çiz.",
    gorsel: { tip: "html", icerik: `<div style="max-width:460px;margin:0 auto;border:3px dashed #8a8a8a;border-radius:10px;padding:8px;font-family:'Comic Sans MS',cursive;color:#555;display:grid;grid-template-columns:1fr 2fr;gap:8px">
      <div style="border:2px solid #2f80ed;border-radius:8px;padding:10px;text-align:center">Logo</div>
      <div style="border:2px solid #27ae60;border-radius:8px;padding:10px;text-align:center">Menü (Navigation)</div>
      <div style="grid-column:1/3;border:2px solid #f2994a;border-radius:8px;padding:22px;text-align:center">Ana resim (Main image)</div>
      <div style="border:2px solid #9b51e0;border-radius:8px;padding:22px;text-align:center">Banner</div>
      <div style="border:2px solid #eb5757;border-radius:8px;padding:22px;text-align:center">İçerik (Content)</div></div>` },
    not: "Taslak, unutulan bir bileşen yüzünden zaman kaybını önler." },

  { tur: "bilgi", baslik: "Bileşenler nerede durur?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "⬆️ Üst bilgi (header)", alt: "Logo, site başlığı, menü, banner, sosyal medya" },
      { ust: "📄 İçerik (content)", alt: "Sitenin asıl bilgisi" },
      { ust: "↔️ Yan (sidebar)", alt: "Menü, reklam" },
      { ust: "⬇️ Alt bilgi (footer)", alt: "İletişim, telif, site haritası" }
    ]},
    not: "Ziyaretçinin alışkanlığına uy. Menü en çok üstte ya da solda olur." },

  { tur: "bilgi", baslik: "3. Renk: sıcak ve soğuk",
    gorsel: { tip: "ikili",
      sol: { baslik: "🔥 Sıcak: yakınlık, neşe", gorsel: { tip: "html", icerik: `<div style="display:flex;gap:6px;justify-content:center"><span style="width:50px;height:50px;border-radius:50%;background:#e53935"></span><span style="width:50px;height:50px;border-radius:50%;background:#fb8c00"></span><span style="width:50px;height:50px;border-radius:50%;background:#fdd835"></span></div>` } },
      sag: { baslik: "❄️ Soğuk: uzaklık, sakinlik", gorsel: { tip: "html", icerik: `<div style="display:flex;gap:6px;justify-content:center"><span style="width:50px;height:50px;border-radius:50%;background:#8e24aa"></span><span style="width:50px;height:50px;border-radius:50%;background:#1e88e5"></span><span style="width:50px;height:50px;border-radius:50%;background:#43a047"></span></div>` } }
    },
    not: "Nötr renkler: siyah, beyaz, gri. Arka plan için en iyisi." },

  { tur: "bilgi", baslik: "Okunabilirlik: kontrast",
    gorsel: { tip: "ikili", ok: "≠",
      sol: { baslik: "✅ Zıt renkler", gorsel: { tip: "html", icerik: `<div style="background:#1f2430;color:#fff;padding:14px;border-radius:8px;font-family:Arial">Koyu zemin, açık yazı</div><div style="background:#fff;color:#222;padding:14px;border-radius:8px;border:1px solid #ddd;margin-top:6px;font-family:Arial">Açık zemin, koyu yazı</div>` } },
      sag: { baslik: "❌ Yakın renkler", gorsel: { tip: "html", icerik: `<div style="background:#f2c94c;color:#f2994a;padding:14px;border-radius:8px;font-family:Arial">Sarı üstüne turuncu</div><div style="background:#2f80ed;color:#2d9cdb;padding:14px;border-radius:8px;margin-top:6px;font-family:Arial">Mavi üstüne mavi</div>` } }
    },
    not: "Renk çemberinde tam karşıdaki renk tamamlayıcı renktir." },

  { tur: "bilgi", baslik: "Tipografi: yazının düzeni",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "<span style='font-family:Arial'>Sans Serif</span>", alt: "Tırnaksız: ekranda kolay okunur ✅" },
      { ust: "<span style='font-family:Georgia,serif'>Serif</span>", alt: "Tırnaklı: ekranda kaçın" },
      { ust: "2–3 boyut", alt: "Başlık > alt başlık > metin hiyerarşisi" },
      { ust: "Hizalama", alt: "Metin sola ya da iki yana. Ortalı sadece başlık." }
    ]},
    not: "Yazı tipi mesajın önüne geçmemeli." },

  { tur: "uygulama", baslik: "Okul sitesi taslağı",
    metin: "Ana sayfa taslağını kelime işlemcide tablo ile hazırla.",
    gorsel: { tip: "resim", yol: G + "20-okul.png" },
    adimlar: [
      "Kelime işlemcide tabloyu çiz; MEB logosu, bayrak ve Atatürk resmini ilgili hücrelere ekle.",
      "Zemin ve yazı renklerini tipografi kurallarına göre seç.",
      "“Okul Sitem” klasörüne <b>index</b> adıyla, <b>web sayfası</b> türünde kaydet.",
      "Dosyaya çift tıkla: tarayıcıda açılsın."
    ],
    kitap: "s. 34 · 1. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Arama motoruna <b>color scheme</b> yaz. Kendi siten için uygun renk kombinasyonlarını incele, beğendiğin üç tanesini not al.<br>🔎 Araştırma: “tipografik web siteleri” örneklerinden ikisini sınıfta paylaş.",
    kitap: "s. 32–33" },

  { tur: "test", sorular: [
    { soru: "📖 Web sitesindeki bileşenlerin neler olacağına ve konumlarına tasarım aşamasında karar verilir.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 Site haritası bağlantıları sayfanın yalnızca alt bilgi kısmında yer alır.", secenekler: ["Doğru", "Yanlış"], dogru: 1 },
    { soru: "📖 Mor, mavi ve yeşil nötr renklerdir.", secenekler: ["Doğru", "Yanlış"], dogru: 1 },
    { soru: "Ekranda daha kolay okunan yazı tipi türü?", secenekler: ["Serif (tırnaklı)", "Sans Serif (tırnaksız)", "El yazısı", "Süslü"], dogru: 1 },
    { soru: "Tasarıma başlamadan önce ilk yapılacak iş?", secenekler: ["Renk seçmek", "İçerik planlamak", "Logo çizmek", "Hosting almak"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Renk paleti üret",
    adimlar: [
      "<b>coolors.co</b> sitesine gir, boşluk tuşuna bas.",
      "Beğendiğin rengi kilitle, diğerlerini değiştir.",
      "Beş rengin kodunu (#…) defterine yaz: CSS'te kullanacağız."
    ]}

]};
