// YAPZ · 0B · Yapay zekâ etiği ve robot etiği  (Kitap dışı · yıllık plan 2. hafta)
window.KONU = { slaytlar: [

  { tur: "hoca",
    ozet: "Etik konusu tartışma ile işlenir, doğru tek cevap yoktur. Hedef: öğrenci yapay zekâyı kullanırken ve geliştirirken dört soruyu sormayı alışkanlık edinsin: Adil mi? Gizliliğe saygılı mı? Kim sorumlu? Şeffaf mı? Örnekler gerçek hayattan, ama öğrencinin kendi kullanımına (ödevde yapay zekâ, deepfake, kişisel veri) mutlaka bağlayın.",
    akis: [
      "Açılış (5 dk): “Ödevini yapay zekâya yazdırmak hile mi?” El kaldırma, iki tarafa bir cümle söz.",
      "İlkeler ve örnek olaylar (20 dk): her kartta bir öğrenciye “sen olsan ne yapardın?” diye sor.",
      "Grup tartışması: üç ikilemden birini seçip karar ve gerekçe (10 dk), test (5 dk)."
    ],
    hatalar: [
      "Etiği “yapay zekâ kötüdür” diye anlamak: amaç korkutmak değil, bilinçli kullanmak.",
      "Önyargının (bias) makineden geldiğini sanmak: makine, verideki insan önyargısını öğrenir ve büyütür.",
      "Asimov yasalarını gerçek bir kanun sanmak: bilim kurgu öyküsüdür; düşünmeye başlamak için iyi bir örnektir."
    ],
    sorular: [
      ["Sürücüsüz araç kaza yaparsa kim suçlu?", "Henüz net bir cevap yok; üretici, yazılımcı, araç sahibi tartışılıyor. Ülkeler bu konuda yasa hazırlıyor (ör. Avrupa Birliği Yapay Zekâ Yasası)."],
      ["Yapay zekâya kişisel bilgimi yazsam ne olur?", "Yazdıkların hizmet sağlayıcının sunucusuna gider; bazı hizmetler modeli eğitmek için kullanabilir. TC kimlik, adres, şifre, sağlık bilgisi gibi bilgileri yazmamak gerekir. Türkiye'de kişisel veriler KVKK ile korunur."],
      ["Yapay zekâ ile yaptığım resim benim mi?", "Ülkeden ülkeye değişiyor ve tartışmalı. Bu yüzden okulda ve yarışmalarda yapay zekâ kullandığını belirtmek en dürüst yoldur."]
    ]},

  { tur: "bilgi", baslik: "Etik nedir?",
    metin: "Doğru ile yanlışı ayırmaya çalışan düşünme yolu.",
    gorsel: { tip: "ikili", ok: "≠",
      sol: { baslik: "⚖️ Yasal mı?", gorsel: { tip: "html", icerik: "<p style='margin:0'>Kanun ne diyor?</p>" } },
      sag: { baslik: "🤔 Etik mi?", gorsel: { tip: "html", icerik: "<p style='margin:0'>Yasak olmasa da doğru mu? Kime zarar verir?</p>" } }
    },
    not: "Yapay zekâ etiği: yapay zekâyı geliştirirken ve kullanırken insana zarar vermemek için uyulan ilkeler." },

  { tur: "bilgi", baslik: "Dört temel ilke",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "⚖️ Adalet", alt: "Kimseyi cinsiyet, ırk, yaş, bölge yüzünden ayırmamalı" },
      { ust: "🔒 Gizlilik", alt: "Kişisel veriler izinsiz toplanmamalı, korunmalı" },
      { ust: "🧑‍⚖️ Sorumluluk", alt: "Hata olunca bir insan hesap verebilmeli" },
      { ust: "🔍 Şeffaflık", alt: "Kararın nasıl verildiği açıklanabilmeli" }
    ]}},

  { tur: "bilgi", baslik: "Önyargı: makine de ayrımcılık yapar mı?",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📦", yazi: "Önyargılı veri", alt: "geçmişte hep erkekler işe alınmış" },
      { simge: "🧠", yazi: "Model öğrenir", alt: "“erkek = iyi aday” kalıbı" },
      { simge: "🚫", yazi: "Haksız karar", alt: "kadın adaylar elenir" }
    ]},
    not: "Makine kendi kendine taraf tutmaz; verideki önyargıyı öğrenir ve büyütür. Gerçek bir örnek: büyük bir şirket, kadın adayları düşük puanlayan işe alım yapay zekâsını kullanmaktan vazgeçti." },

  { tur: "bilgi", baslik: "Senin hayatında yapay zekâ etiği",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📝 Ödev", alt: "Yapay zekâ yardımcı olabilir ama yazanı sen gibi göstermek dürüst değil. Kullandıysan belirt." },
      { ust: "🎭 Deepfake", alt: "Birinin yüzünü/sesini izinsiz taklit etmek zarar verir, suç olabilir" },
      { ust: "🪪 Kişisel veri", alt: "Kimlik, adres, şifre, fotoğraf: sohbet robotuna yazma" },
      { ust: "✅ Doğruluk", alt: "Yapay zekâ bilgi uydurabilir. Önemli bilgiyi kaynaktan kontrol et" }
    ]}},

  { tur: "bilgi", baslik: "Robot etiği",
    metin: "Robotlar insanlarla aynı ortamda çalıştıkça yeni sorular doğuyor.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🚗 Sürücüsüz araç", alt: "Kaza kaçınılmazsa kimi korumalı? Kim sorumlu?" },
      { ust: "🏥 Bakım robotu", alt: "Yaşlıya ilaç vermeyi reddederse zorlamalı mı?" },
      { ust: "🏭 Fabrika robotu", alt: "İşini kaybeden insanlar ne olacak?" }
    ]}},

  { tur: "bilgi", baslik: "Asimov'un üç robot yasası",
    metin: "1942'de bilim kurgu yazarı Isaac Asimov'un öykülerinden:",
    gorsel: { tip: "akis", adimlar: [
      { simge: "1️⃣", yazi: "İnsana zarar verme", alt: "ya da zarar görmesine seyirci kalma" },
      { simge: "2️⃣", yazi: "İnsanın emrine uy", alt: "1. yasaya aykırı değilse" },
      { simge: "3️⃣", yazi: "Kendini koru", alt: "1. ve 2. yasaya aykırı değilse" }
    ]},
    not: "Gerçek bir kanun değil, öykü. Ama bugün robot etiği tartışmalarının başlangıç noktası." },

  { tur: "uygulama", baslik: "Grup tartışması: karar sizin",
    metin: "Grubunla bir ikilemi seç. Defterine kararını ve iki gerekçeni yaz.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🅰️ Okul kamerası", alt: "Okul, devamsızlığı yüz tanıma ile otomatik almak istiyor. Kabul eder misiniz?" },
      { ust: "🅱️ Sınav", alt: "Yapay zekâ, kopya çekeni yüzde 90 doğrulukla tespit ediyor. Tek başına ceza versin mi?" },
      { ust: "🅲 Sanat", alt: "Yapay zekâ ile yapılan resim, okul resim yarışmasında birinci oldu. Ödül verilmeli mi?" }
    ]},
    adimlar: [
      "4'erli gruplar kurun, bir ikilem seçin.",
      "Dört ilkeyle (adalet, gizlilik, sorumluluk, şeffaflık) tartışın.",
      "Kararınızı ve iki gerekçenizi defterinize yazın.",
      "Bir sözcü 1 dakikada sınıfa anlatsın."
    ]},

  { tur: "test", sorular: [
    { soru: "Bir işe alım yapay zekâsı hep aynı bölgeden gelen adayları eliyor. Hangi ilke çiğneniyor?", secenekler: ["Adalet", "Şeffaflık", "Hız", "Verimlilik"], dogru: 0 },
    { soru: "Bir yapay zekâ kredi başvurunu reddetti ama nedenini kimse açıklayamıyor. Eksik olan ilke?", secenekler: ["Gizlilik", "Şeffaflık", "Adalet", "Güvenlik"], dogru: 1 },
    { soru: "Yapay zekâda önyargı genellikle nereden gelir?", secenekler: ["Ekran kartından", "Eğitildiği veriden", "İnternet hızından", "Programlama dilinden"], dogru: 1 },
    { soru: "Sohbet robotuna yazmaman gereken bilgi hangisi?", secenekler: ["Python nasıl öğrenilir?", "Bir şiirin özeti", "TC kimlik numaran ve şifren", "Bir matematik sorusu"], dogru: 2 },
    { soru: "Asimov'un robot yasaları için doğru olan?", secenekler: ["Türkiye'de yürürlükte bir kanundur", "Bilim kurgu öykülerinden çıkmış ilkelerdir", "Robotların içine yazılı yazılımdır", "2022'de yazılmıştır"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Deepfake'i nasıl anlarım?",
    adimlar: [
      "Göz kırpma ve dudak hareketi sese uyuyor mu?",
      "Yüzün kenarları, saç ve kulaklar bulanık ya da titrek mi?",
      "Işık ve gölge yüzde ve arka planda aynı yönden mi geliyor?",
      "En önemlisi: Haberi başka güvenilir bir kaynak da veriyor mu?"
    ],
    not: "Teknoloji geliştikçe gözle anlamak zorlaşıyor; bu yüzden kaynağı kontrol etmek en güçlü yöntem." }

]};
