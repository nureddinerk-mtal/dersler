// YAPZ · 0A · Yapay zekânın kısa tarihi  (Kitap dışı · yıllık plan 2. hafta)
window.KONU = { slaytlar: [

  { tur: "hoca",
    ozet: "Amaç tarih ezberletmek değil, iki fikri oturtmak: (1) yapay zekâ 70 yıllık bir alan, ChatGPT ile başlamadı; (2) alan 'büyük beklenti → hayal kırıklığı (kış) → yeniden yükseliş' dalgalarıyla ilerledi. Bugünkü patlamanın üç sebebi: çok veri, güçlü GPU'lar, derin öğrenme. Bu üçü kitabın 3. biriminde (yapay sinir ağları) tekrar karşınıza çıkacak.",
    akis: [
      "Açılış (5 dk): “Sizce ilk yapay zekâ ne zaman yapıldı?” Tahminleri tahtaya yaz, sonda karşılaştır.",
      "Zaman çizelgesi slaytları (20 dk): her durakta “bugün bunun devamı ne?” diye sor (ELIZA → ChatGPT, Perceptron → sinir ağları).",
      "Defterine zaman çizelgesi (10 dk), test (5 dk). Vakit kalırsa meraklısına: sınıfta Turing testi oyunu."
    ],
    hatalar: [
      "Yapay zekâyı robotla aynı şey sanmak: robotik yapay zekânın alt alanlarından sadece biri (1. konu).",
      "Turing testini geçmeyi “makine düşünüyor” diye yorumlamak: test sadece insanı kandırabilmeyi ölçer.",
      "Yapay zekâ kışlarını “araştırma durdu” sanmak: durmadı, ilgi ve para azaldı."
    ],
    sorular: [
      ["ChatGPT gerçekten düşünüyor mu?", "Hayır, en azından insan gibi değil. Çok büyük miktarda metinden öğrendiği kalıplarla, bir cümlede sıradaki en olası kelimeyi tahmin eder. Bu yüzden bazen kendinden emin şekilde yanlış bilgi uydurur."],
      ["Yapay zekâ neden şimdi bu kadar gelişti?", "Üç şey bir araya geldi: internetle oluşan devasa veri, oyun kartlarından gelen güçlü GPU'lar ve derin öğrenme yöntemleri."],
      ["Turing testini geçen bir makine var mı?", "Kısa sohbetlerde insanları kandıran programlar oldu ve bugünkü sohbet robotları birçok kişiyi yanıltabiliyor. Ama bilim insanları testin zekâyı ölçmek için yeterli olmadığı konusunda hemfikir."]
    ]},

  { tur: "bilgi", baslik: "Yapay zekâ yeni değil",
    metin: "70 yılı aşkın bir hikâye.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🧠", yazi: "1950", alt: "Turing: makine düşünebilir mi?" },
      { simge: "🏷️", yazi: "1956", alt: "“Yapay zekâ” adı konuldu" },
      { simge: "♟️", yazi: "1997", alt: "Bilgisayar satranç şampiyonunu yendi" },
      { simge: "🖼️", yazi: "2012", alt: "Derin öğrenme patlaması" },
      { simge: "💬", yazi: "2022", alt: "ChatGPT herkesin elinde" }
    ]}},

  { tur: "bilgi", baslik: "1950 · Turing testi",
    metin: "Alan Turing sordu: “Makineler düşünebilir mi?”",
    gorsel: { tip: "html", icerik: `<div style="display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;text-align:center;font-weight:600">
      <div style="border:3px solid #2f80ed;border-radius:12px;padding:14px 16px;background:#eaf2fd">🧑‍⚖️<br>Sorgucu<br><small style="font-weight:400">yazarak soru sorar</small></div>
      <div style="font-size:1.6rem;color:#888">⟷</div>
      <div style="border:3px dashed #888;border-radius:12px;padding:10px 6px;background:#f3f3f3;writing-mode:vertical-rl">PERDE</div>
      <div style="font-size:1.6rem;color:#888">⟷</div>
      <div style="display:grid;gap:8px"><div style="border:3px solid #27ae60;border-radius:12px;padding:8px 14px;background:#e8f7ee">🙋 İnsan</div><div style="border:3px solid #9b51e0;border-radius:12px;padding:8px 14px;background:#f3eafd">💻 Bilgisayar</div></div></div>` },
    not: "Sorgucu hangisinin makine olduğunu ayırt edemezse makine testi geçer." },

  { tur: "bilgi", baslik: "1956 · Adı konuldu",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📍 Dartmouth Konferansı", alt: "ABD'de bir yaz çalıştayı" },
      { ust: "🏷️ John McCarthy", alt: "“Artificial Intelligence” terimini önerdi" },
      { ust: "🚀 Büyük umut", alt: "Makinelerin kısa sürede insan gibi düşüneceği sanıldı" }
    ]},
    not: "Bu yıl, yapay zekânın bir bilim dalı olarak doğum yılı kabul edilir." },

  { tur: "bilgi", baslik: "İlk adımlar",
    gorsel: { tip: "ikili", ok: " ",
      sol: { baslik: "1958 · Perceptron", gorsel: { tip: "html", icerik: "<p style='margin:0'>Frank Rosenblatt'ın <b>ilk yapay nöron makinesi</b>. Basit şekilleri ayırt etmeyi öğrenebiliyordu.<br><br>➜ Bugünkü yapay sinir ağlarının dedesi (37. konu).</p>" } },
      sag: { baslik: "1966 · ELIZA", gorsel: { tip: "html", icerik: "<p style='margin:0'>Joseph Weizenbaum'un <b>ilk sohbet robotu</b>. Kullanıcının cümlesini soru olarak geri sorardı.<br><br>➜ Bugünkü sohbet robotlarının dedesi.</p>" } }
    }},

  { tur: "bilgi", baslik: "Yapay zekâ kışları",
    metin: "Beklenti çok yükseldi, sonuç gelmedi, para kesildi.",
    gorsel: { tip: "html", icerik: `<svg viewBox="0 0 560 200" style="width:100%;max-width:560px;font-family:Segoe UI,Arial;font-size:12px">
      <line x1="30" y1="170" x2="545" y2="170" stroke="#999"/><text x="6" y="24" fill="#666">ilgi</text>
      <polyline fill="none" stroke="#9b51e0" stroke-width="4" points="40,150 110,50 170,140 230,150 290,60 350,145 410,130 470,70 540,20"/>
      <rect x="150" y="120" width="90" height="46" fill="#d6ecff" opacity=".7"/><text x="160" y="160" fill="#1b5e9a">❄️ 1. kış</text>
      <rect x="330" y="118" width="80" height="48" fill="#d6ecff" opacity=".7"/><text x="338" y="160" fill="#1b5e9a">❄️ 2. kış</text>
      <text x="85" y="40" fill="#333">umut</text><text x="262" y="50" fill="#333">uzman sistemler</text><text x="430" y="52" fill="#333">derin öğrenme</text>
      <text x="30" y="188" fill="#666">1956</text><text x="180" y="188" fill="#666">1970'ler</text><text x="330" y="188" fill="#666">1990'lar</text><text x="500" y="188" fill="#666">bugün</text></svg>` },
    not: "1980'lerde uzman sistemler (1. konuda göreceğiz) kısa bir bahar yaşattı. Araştırmalar kışta da sürdü, sadece ilgi azaldı." },

  { tur: "bilgi", baslik: "Makine insanı yeniyor",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "1997 · ♟️ Satranç", alt: "IBM Deep Blue, dünya şampiyonu Kasparov'u yendi" },
      { ust: "2011 · ❓ Bilgi yarışması", alt: "IBM Watson, Jeopardy! şampiyonlarını geçti" },
      { ust: "2016 · ⚫ Go", alt: "AlphaGo, satrançtan çok daha karmaşık Go oyununda Lee Sedol'u yendi" }
    ]},
    not: "Deep Blue kurallara ve hesaplama gücüne dayanıyordu; AlphaGo ise oynayarak öğrendi (pekiştirmeli öğrenme, 14. konu)." },

  { tur: "bilgi", baslik: "Neden şimdi?",
    metin: "2012'de bir sinir ağı, resimleri tanıma yarışmasını (ImageNet) büyük farkla kazandı. Derin öğrenme dönemi başladı.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📦 Çok veri", alt: "İnternet, telefonlar, sensörler" },
      { ust: "⚡ Güçlü donanım", alt: "Oyun kartlarından gelen GPU'lar" },
      { ust: "🧠 Derin öğrenme", alt: "Çok katmanlı yapay sinir ağları" }
    ]},
    not: "Bu üçünü 3. birimde (yapay sinir ağları) tek tek kullanacağız." },

  { tur: "bilgi", baslik: "Üretken yapay zekâ",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📄", yazi: "2017", alt: "Transformer: dili anlamada yeni yöntem" },
      { simge: "💬", yazi: "2022", alt: "ChatGPT: milyonlarca kişi sohbet etmeye başladı" },
      { simge: "🎨", yazi: "Bugün", alt: "Metin, resim, ses, video üreten modeller" }
    ]},
    not: "Üretken yapay zekâ yeni içerik üretir ama hata yapabilir, bilgi uydurabilir. Ürettiğini her zaman kontrol et (0B: etik)." },

  { tur: "uygulama", baslik: "Defterine zaman çizelgesi",
    gorsel: { tip: "html", icerik: `<div style="font-family:'Segoe Print','Comic Sans MS',cursive;background:#fffef5;border:1px solid #e5dfc6;border-radius:8px;padding:16px 10px;background-image:repeating-linear-gradient(#fffef5 0 27px,#d9e6f2 27px 28px)">
      <div style="text-align:center;font-weight:bold;margin-bottom:10px">Yapay Zekânın Tarihi</div>
      <div style="position:relative;display:flex;justify-content:space-between;padding-top:18px">
        <div style="position:absolute;left:0;right:0;top:24px;border-top:3px solid #333"></div>
        ${[["1950","Turing testi"],["1956","adı konuldu"],["1966","ELIZA"],["1974","❄️ kış"],["1997","Deep Blue"],["2012","derin öğrenme"],["2016","AlphaGo"],["2022","ChatGPT"]]
          .map(d=>`<div style="position:relative;text-align:center;width:12%;font-size:.8rem"><div style="width:12px;height:12px;border-radius:50%;background:#9b51e0;margin:0 auto 4px"></div><b>${d[0]}</b><br>${d[1]}</div>`).join("")}
      </div></div>` },
    adimlar: [
      "Defterine yatay bir çizgi çiz.",
      "Üzerine 8 durağı yerleştir: yıl + tek kelime.",
      "Kışları mavi, “makine insanı yendi” anlarını kırmızı renkle işaretle.",
      "En sona kendi tahminini ekle: 2035'te yapay zekâ ne yapacak?"
    ]},

  { tur: "test", sorular: [
    { soru: "“Makineler düşünebilir mi?” sorusunu soran ve bir test öneren bilim insanı?", secenekler: ["John McCarthy", "Alan Turing", "Garry Kasparov", "Frank Rosenblatt"], dogru: 1 },
    { soru: "“Yapay zekâ” adı ilk kez hangi olayda kullanıldı?", secenekler: ["1956 Dartmouth Konferansı", "1997 Deep Blue maçı", "2012 ImageNet yarışması", "2022 ChatGPT'nin çıkışı"], dogru: 0 },
    { soru: "Yapay zekâ kışı ne demektir?", secenekler: ["Yapay zekânın kışın çalışmaması", "Beklentiler karşılanmayınca ilgi ve desteğin azaldığı dönem", "Bilgisayarların soğuyunca hızlanması", "Yapay zekânın yasaklanması"], dogru: 1 },
    { soru: "Hangisi bugünkü yapay zekâ patlamasının sebeplerinden biri değildir?", secenekler: ["Çok büyük veri", "Güçlü GPU'lar", "Derin öğrenme", "Disket kullanımı"], dogru: 3 },
    { soru: "Bir sohbet robotu Turing testini geçerse bu ne gösterir?", secenekler: ["Makinenin bilinci olduğunu", "İnsanı konuşmada kandırabildiğini", "Hiç hata yapmadığını", "İnternete bağlı olmadığını"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Sınıfta Turing testi",
    adimlar: [
      "Bir öğrenci sorgucu olsun, sınıfa arkası dönük otursun.",
      "Bir öğrenci kendi cevabını yazsın; bir öğrenci aynı soruyu bir sohbet robotuna sorup cevabını kâğıda yazsın.",
      "Sorgucu üç soru sorsun, iki cevap kâğıdını okusun.",
      "Hangisi makine? Tahmin doğru mu? Makineyi ele veren ne oldu?"
    ],
    not: "İpucu: Duygu, kişisel anı ve espri soruları makineyi en kolay ele veren sorulardır." }

]};
