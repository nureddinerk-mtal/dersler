// SPROG · 05 · Hata ayıklama  (Kitap s. 33–37)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Hata (bug) ve hata ayıklama (debugging). Blok tabanlı ortam hatayı azaltır: hazır bloklar, renkler, uyumsuz bloklar birleşmez, adım adım çalıştırma. 6. Uygulama: dans eden ahtapot “10 defa tekrarla” yüzünden bir süre sonra duruyor → “sürekli tekrarla” ile düzelt. 7. Uygulama: gökyüzü dünyası; turuncu kuş ters dönüyor → “dönüş stilini döndürme” yerine “sol-sağ”. Sıra Sizde: çarpışan roketler.",
    akis: ["Bug / debug hikâyesi (Meraklısına: gerçek böcek)", "6. Uygulama: önce hatalı hâli yaptırın, gözlemletin, sonra düzelttirin", "7. Uygulama: üç kuş, biri hatalı", "Sıra Sizde: gruplar roket çarpışmasını önlesin", "Test"],
    hatalar: ["Hatayı bulmadan rastgele blok değiştirmek. Önce “ne olmasını bekliyordum, ne oldu?” sorusunu yazdırın.", "Her kuşa aynı kodu kopyalarken dönüş stilini değiştirmeyi unutmak (kitaptaki hata tam da bu).", "1 adım git yerine büyük sayı yazınca kuşların çok hızlı gitmesi; hata değil, deneyin."],
    sorular: [["Neden ahtapot duruyor?", "10 defa tekrarla 10 kostüm değişiminden sonra biter. Sürekli dans için sürekli tekrarla gerekir."], ["Dönüş stili ne?", "Kenara çarpıp geri dönerken kukla ters dönmesin, sadece sağa-sola baksın diye “sol-sağ” seçilir."]],
    bloklar: `// 6. Uygulama · Sahne (müzik)
when flag clicked
forever
play sound (Dance Around v) until done
end

// Ahtapot · hatalı: repeat (10) → doğru:
when flag clicked
forever
next costume
wait (0.3) seconds
end

// 7. Uygulama · her kuş
when flag clicked
set rotation style [sol-sağ v]
forever
move (1) steps
if on edge, bounce
end

when this sprite clicked
say [Merhaba, ben yeşil kuş!] for (2) seconds` },

  { tur: "bilgi", baslik: "Bug ve debug",
    gorsel: { tip: "ikili",
      sol: { baslik: "🐛 Bug", gorsel: { tip: "kartlar", kartlar: [ { ust: "Programdaki hata", alt: "İngilizcede “böcek”" } ] } },
      sag: { baslik: "🧹 Debug", gorsel: { tip: "kartlar", kartlar: [ { ust: "Hata ayıklama", alt: "Hatayı bulup düzeltmek" } ] } },
      ok: "➜" },
    not: "Blok tabanlı ortamda hata az olur: hazır bloklar, renkler, uyumsuz bloklar birleşmez, adım adım test." },

  { tur: "uygulama", baslik: "6. Uygulama · Dans eden ahtapot",
    metin: "Ahtapot müzik eşliğinde <b>sürekli</b> dans etsin. Kitaptaki gibi önce “10 defa tekrarla” ile yap: ne oluyor? Hatayı bul ve düzelt.",
    gorsel: { tip: "sahne", proje: "Dans ediyoruz", dekor: "tiyatro", suslar: [ { e: "🎵", x: -160, y: 120, boy: 34 }, { e: "🎶", x: 160, y: 110, boy: 34 }, { e: "💡", x: -60, y: 160, boy: 26 }, { e: "💡", x: 60, y: 160, boy: 26 } ], kuklalar: [ { e: "🐙", x: 0, y: -40, boy: 110 } ] },
    adimlar: ["“Dans ediyoruz” adlı proje aç, dekor ve ahtapot kuklası ekle.", "Sahneye: yeşil bayrak → sürekli tekrarla → müziği bitene kadar çal.", "Ahtapota: yeşil bayrak → 10 defa tekrarla → sonraki kostüm, bekle.", "Çalıştır: ahtapot bir süre sonra duruyor. Hangi blok hatalı? Düzelt."],
    kitap: "s. 34–35 · 6. Uygulama" },

  { tur: "uygulama", baslik: "7. Uygulama · Gökyüzü dünyası",
    metin: "Üç kuş gökyüzünde sağa-sola uçsun, kenara gelince seksin; tıklanan kuş 2 saniye konuşsun. Turuncu kuş dönüşte ters dönüyorsa hatayı bul.",
    gorsel: { tip: "sahne", proje: "Gökyüzü dünyası", dekor: "gok", suslar: [ { e: "☁️", x: -150, y: 130, boy: 50 }, { e: "☁️", x: 140, y: 100, boy: 40 } ], hareket: [ { x1: -60, y1: 40, x2: 60, y2: 40 } ], kuklalar: [ { e: "🦜", x: -140, y: 40, boy: 50, balon: "Merhaba!" }, { e: "🐦", x: 100, y: -40, boy: 48 }, { e: "🐤", x: -20, y: -120, boy: 44, ters: true } ] },
    adimlar: ["“Gökyüzü dünyası” projesi: dekor ve üç kuş ekle.", "Her kuşa: bu kukla tıklandığında → 2 saniye boyunca … de.", "Her kuşa: yeşil bayrak → dönüş stilini sol-sağ yap → sürekli tekrarla (1 adım git, kenara geldiyse sek).", "Çalıştır, turuncu kuşu izle. Hata varsa düzelt."],
    kitap: "s. 35–37 · 7. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Çarpışan roketler",
    metin: "Dört yönlü yolda ilerleyen iki roketin çarpıştığı programı hazırla ve çalıştır. Grupça tartış: kazayı önlemek için kodda ne değişmeli? Hatayı bul, düzelt.",
    gorsel: { tip: "sahne", dekor: "uzay", hareket: [ { x1: -200, y1: 0, x2: -30, y2: 0 }, { x1: 0, y1: 160, x2: 0, y2: 30 } ], kuklalar: [ { e: "🚀", x: -220, y: 0, boy: 44 }, { e: "🚀", x: 0, y: 165, boy: 44 }, { e: "💥", x: 0, y: 0, boy: 50 } ] },
    kitap: "s. 37" },

  { tur: "test", sorular: [
    { soru: "Programdaki hataların bulunup düzeltilmesine ne denir?", secenekler: ["Derleme", "Hata ayıklama (debugging)", "Kodlama", "Paylaşma"], dogru: 1 },
    { soru: "Kukla dur'a basılana kadar dans etsin istiyorsak hangi blok?", secenekler: ["10 defa tekrarla", "sürekli tekrarla", "1 saniye bekle", "eğer ise"], dogru: 1 },
    { soru: "Kenara çarpan kukla ters dönmesin, sadece sağa-sola baksın istiyorsak?", secenekler: ["dönüş stilini sol-sağ yap", "dönüş stilini döndürme yap", "90 yönüne dön", "gizlen"], dogru: 0 },
    { soru: "Blok tabanlı programlamada hatanın az olmasının nedeni değildir:", secenekler: ["Hazır bloklar", "Uyumsuz blokların birleşmemesi", "Adım adım çalıştırma", "Kodların klavyeyle yazılması"], dogru: 3 }
  ]},

  { tur: "merak", baslik: "İlk gerçek “bug”",
    metin: "1947'de Harvard'daki Mark II bilgisayarı arıza yaptı. Grace Hopper'ın ekibi rölelerin arasında sıkışmış bir güve buldu ve deftere yapıştırıp “ilk gerçek böcek vakası” notunu düştü. Güve bugün bir müzede duruyor." }

]};
