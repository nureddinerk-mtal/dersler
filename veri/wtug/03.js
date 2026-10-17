// WTUG · 03 · HTML, CSS, editörler ve ilk sayfam  (Kitap s. 22–24)
window.KONU = {
  slaytlar: [

  { tur: "hoca", ozet: "HTML iskelet, CSS kıyafet. İlk kez editör açılıp .html dosyası kaydedilecek; asıl hedef dosyayı doğru uzantıyla kaydedip tarayıcıda açabilmek.", akis: ["Etiket anatomisi (açılış, kapanış, içerik)", "VS Code / Not Defteri ile ilk sayfa", "Kitabın soruları"], hatalar: ["Dosyayı .html.txt olarak kaydetmek (Windows'ta uzantılar gizli; Dosya Gezgini → Görünüm → Dosya adı uzantıları)", "Kapanış etiketindeki / işaretini unutmak", "Etiketleri çapraz kapatmak: &lt;b&gt;&lt;i&gt;…&lt;/b&gt;&lt;/i&gt;"], sorular: [["Kodu değiştirdim ama sayfa değişmedi?", "Dosyayı kaydetmedin ya da tarayıcıyı yenilemedin (F5)."], ["Hangi editör en iyisi?", "Okulda VS Code öneriyoruz; renklendirme ve otomatik tamamlama var."]] },

    { tur: "bilgi", baslik: "HTML nedir?",
      metin: "Web sayfası hazırlamak için kullanılan <b>işaretleme dili</b>. Web sitesinin iskeleti.",
      gorsel: { tip: "parcala", parcalar: [
        { yazi: "Hyper Text", etiket: "sayfaları bağlayan metin" },
        { yazi: "Markup",     etiket: "işaretleme" },
        { yazi: "Language",   etiket: "dil" }
      ]},
      not: "HTML bir programlama dili değildir. İçeriği etiketlerle işaretler." },

    { tur: "bilgi", baslik: "Bir etiketin anatomisi",
      gorsel: { tip: "parcala", parcalar: [
        { yazi: "&lt;p&gt;",  etiket: "açılış etiketi" },
        { yazi: "Merhaba",    etiket: "içerik", renk: "#2b2b2b" },
        { yazi: "&lt;/p&gt;", etiket: "kapanış etiketi" }
      ]},
      not: "Kapanış etiketindeki / işaretini unutma!" },

    { tur: "bilgi", baslik: "Etiket kuralları",
      gorsel: { tip: "kartlar", kartlar: [
        { ust: "🔁 Açılan kapanır",        alt: "Birkaç istisna dışında" },
        { ust: "🪆 İlk açılan son kapanır", alt: "İç içe etiketlerde sıra önemli" },
        { ust: "🚫 Türkçe karakter yok",    alt: "Etiket adında ç ğ ı ö ş ü olmaz" }
      ]}},

    { tur: "ornek", baslik: "İç içe etiket",
      metin: "<b>&lt;b&gt;</b> yazıyı kalın yapar. Paragrafın içine yerleştirilir.",
      kod: "<p>Bu <b>kalın</b> bir yazı.</p>",
      sonuc: { tip: "tarayici", adres: "ornek.html", icerik: "<p>Bu <b>kalın</b> bir yazı.</p>" },
      not: "Yanlış: &lt;p&gt;&lt;b&gt;yazı&lt;/p&gt;&lt;/b&gt; → önce &lt;b&gt; kapanmalı." },

    { tur: "bilgi", baslik: "CSS: sayfanın kıyafeti",
      metin: "HTML iskeleti kurar, CSS giydirir: renk, yazı tipi, yerleşim.",
      gorsel: { tip: "ikili",
        sol: { baslik: "Sadece HTML", gorsel: { tip: "tarayici", adres: "menu.html",
          icerik: "<p><b>Kafe Menüsü</b></p><p>Çay · Kahve · Limonata</p>" } },
        sag: { baslik: "HTML + CSS", gorsel: { tip: "tarayici", adres: "menu.html",
          icerik: "<div style='background:#fdf1e3;padding:10px;border-radius:10px;font-family:Segoe UI,sans-serif;text-align:center'><p style='color:#b5541c;font-size:22px;margin:6px 0'><b>☕ Kafe Menüsü</b></p><p style='color:#6b4a2b;margin:6px 0'>Çay · Kahve · Limonata</p></div>" } }
      },
      not: "CSS'i ilerideki konularda öğreneceğiz. Şimdilik sadece HTML." },

    { tur: "bilgi", baslik: "Kod nerede yazılır?",
      gorsel: { tip: "kartlar", kartlar: [
        { ust: "📝 Metin editörü", alt: "Not Defteri. Renk yok, yardım yok." },
        { ust: "💻 HTML editörü",  alt: "Kodu renklendirir, otomatik tamamlar." },
        { ust: "🖱️ WYSIWYG",       alt: "Ne görüyorsan onu alırsın. Kod yazmadan." }
      ]},
      not: "Biz HTML editörü kullanacağız ve kodu kendimiz yazacağız." },

    { tur: "uygulama", baslik: "İlk sayfam",
      gorsel: { tip: "resim", yol: "gorsel/wtug/03-ilk-sayfa.png", alt: "Üç paragraflı ilk sayfa" },
      adimlar: [
        "<b>ilk.html</b> adlı bir dosya oluştur. Uzantısı .html olmalı.",
        "Editörde aç. Hedefteki yazıları etiketleriyle yaz. Adını kendi adınla değiştir.",
        "Kaydet, dosyaya çift tıkla. Tarayıcıda açılsın.",
        "Hedefle karşılaştır. Fark varsa düzelt, kaydet, sayfayı yenile (F5)."
      ],
      kitap: "s. 22" },

    { tur: "odev", baslik: "Sıra Sizde",
      metin: "1️⃣ HTML editörlerini araştır, kısa bir sunum hazırla, sınıfta paylaş.<br>2️⃣ Grupla birlikte WYSIWYG editörlerinin artı ve eksilerini anlatan bir afiş hazırla.",
      kitap: "s. 23" },

    { tur: "test", sorular: [
      { soru: "Hangisi doğru kapatılmış?", kod: true,
        secenekler: ["<b><i>yazı</b></i>", "<b><i>yazı</i></b>", "<b>yazı<b>", "<b>yazı</ b"], dogru: 1 },
      { soru: "HTML ne tür bir dildir?",
        secenekler: ["Programlama dili", "İşaretleme dili", "Veri tabanı dili", "Sorgu dili"], dogru: 1 },
      { soru: "Kod yazmadan sayfa hazırlatan editör türü hangisi?",
        secenekler: ["Not Defteri", "HTML editörü", "WYSIWYG", "Komut İstemi"], dogru: 2 },
      { soru: "Tarayıcıda açılacak dosyanın adı hangisi olmalı?", kod: true,
        secenekler: ["ilk.txt", "ilk.doc", "ilk", "ilk.html"], dogru: 3 },
      { soru: "Etiket adında hangisi kullanılmaz?",
        secenekler: ["Küçük harf", "Rakam", "Türkçe karakter", "Kapanışta eğik çizgi"], dogru: 2 }
    ]},

    { tur: "test", baslik: "Birim 1 · Kitabın soruları", sorular: [
      { soru: ".mil uzantısı kimler içindir?",
        secenekler: ["Askerî kurumlar", "Ticari kuruluşlar", "Uluslararası kuruluşlar", "Eğitim kurumları", "Devlet kurumları"], dogru: 0 },
      { soru: ".int uzantısı kimler içindir?",
        secenekler: ["Askerî kurumlar", "Ticari kuruluşlar", "Uluslararası kuruluşlar", "Eğitim kurumları", "Devlet kurumları"], dogru: 2 },
      { soru: "Yerleşim, renk ve yazı tipi gibi görsel kontroller hangisiyle sağlanır?",
        secenekler: ["HTML", "CSS", "PHP", "SQL"], dogru: 1 },
      { soru: "Ziyaretçinin görmediği; sunucu ve veri işlerinin yapıldığı kısım hangisi?",
        secenekler: ["Ön uç", "Arka uç", "Tarayıcı", "Alan adı"], dogru: 1 },
      { soru: "www.meb.gov.tr adresindeki \"meb\" hangi parçadır?",
        secenekler: ["Alan türü", "Alan ismi", "Ülke kodu", "Sunucu türü", "Sunucu adı"], dogru: 1 },
      { soru: "Ön uçta ağırlıklı kullanılan teknoloji hangisi?",
        secenekler: ["CSS", "C", "PHP", "Python", "asp"], dogru: 0 }
    ]},

    { tur: "merak", baslik: "Bir sitenin iskeletine bak",
      adimlar: [
        "Sevdiğin bir siteyi aç.",
        "<b>Ctrl + U</b> tuşlarına bas. Sayfanın HTML kodu açılır.",
        "<b>Ctrl + F</b> ile <b>&lt;p</b> ara. Kaç paragraf var?"
      ],
      not: "Dev siteler de senin yazdığın etiketlerle başlar." }

  ]
};
