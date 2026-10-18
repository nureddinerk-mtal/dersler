// SPROG · 07 · Karar yapıları  (Kitap s. 42–45)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Karar yapıları: duruma göre iki ya da daha çok seçenekten birini çalıştırmak (yaya ve yeşil ışık). Kontrol (eğer ise, eğer ise değilse), Algılama (dokunuyor mu, fareye basılı mı), İşlemler (=, >, <, ve, veya, rastgele). 10. Uygulama: not 50 ve üstüyse “Tebrikler, geçtiniz”, değilse “Daha çok çalışmalısın”. 11. Uygulama: uzaylı adı sorar, adıyla selamlar, “Okula gidiyor musun?” cevabına göre konuşur. Sıra Sizde: puana göre Pekiyi/İyi/Orta/Geçer/Geçmez.",
    akis: ["Yaya–ışık akış şeması", "Eğer ise / eğer ise değilse", "Karşılaştırma ve “veya” (≥ yok!)", "10. Uygulama", "11. Uygulama", "Sıra Sizde (iç içe eğer)", "Test"],
    hatalar: ["mBlock'ta ≥ bloğu yok: “yanıt > 50 veya yanıt = 50” ile yapılır (kitap da böyle). Alternatif: yanıt > 49.", "Metin karşılaştırmasında boşluk: “Evet ” ile “Evet” farklı. Büyük-küçük harf mBlock'ta fark etmez.", "Sıra Sizde'de aralıkları üst üste bindirmek ya da boşluk bırakmak (54 ile 55 arası)."],
    sorular: [["Eğer ise değilse ile iki tane eğer ise farkı?", "Değilse, koşul yanlışsa mutlaka çalışır; iki ayrı eğerde ikisi de çalışabilir ya da hiçbiri."], ["Beş seçenek nasıl olur?", "İç içe eğer ise değilse: değilse kısmına yeni bir eğer konur."]],
    bloklar: `// 10. Uygulama
when flag clicked
ask [Bilişim Teknolojileri dersinden kaç aldın?] and wait
if <<(answer) > [50]> or <(answer) = [50]>> then
say [Tebrikler, geçtiniz] for (2) seconds
else
say [Daha çok çalışmalısın] for (2) seconds
end

// 11. Uygulama
when this sprite clicked
ask [Adın ne?] and wait
say (join [Merhaba ] (answer)) for (2) seconds
ask (join (answer) [, okula gidiyor musun?]) and wait
if <(answer) = [Evet]> then
say [Bu çok güzel]
else
say [Hımm. Umarım her şey istediğin gibi olur]
end`,
    not: "Sıra Sizde çözümü: eğer yanıt > 84 → Pekiyi, değilse eğer yanıt > 69 → İyi, değilse eğer > 54 → Orta, değilse eğer > 44 → Geçer, değilse Geçmez." },

  { tur: "bilgi", baslik: "Karar yapısı",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🚦", yazi: "Yeşil ışık mı yanıyor?" },
      { simge: "✅", yazi: "EVET → karşıya geç", renk: "#27ae60" },
      { simge: "⏳", yazi: "HAYIR → bekle", renk: "#eb5757" }
    ]},
    metin: "Programın duruma göre farklı yollardan birini seçmesini sağlar." },

  { tur: "bilgi", baslik: "Karar blokları",
    gorsel: { tip: "ikili",
      sol: { baslik: "eğer … ise", gorsel: { tip: "bloklar", kod: "if <touching (Kar v)?> then\nchange [Sayaç v] by (1)\nend" } },
      sag: { baslik: "eğer … ise · değilse", gorsel: { tip: "bloklar", kod: "if <(answer) > [49]> then\nsay [Geçti]\nelse\nsay [Kaldı]\nend" } },
      ok: "·" },
    not: "Koşullar: Algılama (dokunuyor mu?, fareye basılı mı?) ve İşlemler (=, >, <, ve, veya)." },

  { tur: "uygulama", baslik: "10. Uygulama · Bilişim notu",
    metin: "Not 50 ve üstüyse “Tebrikler, geçtiniz”, değilse “Daha çok çalışmalısın” desin.",
    gorsel: { tip: "ikili",
      sol: { baslik: "75 girilirse", gorsel: { tip: "sahne", proje: "bilişim notu", dekor: "oda", kuklalar: [ { e: "🧑‍🎓", x: -40, y: -40, boy: 90, balon: "Tebrikler, geçtiniz" } ] } },
      sag: { baslik: "30 girilirse", gorsel: { tip: "sahne", proje: "bilişim notu", dekor: "oda", kuklalar: [ { e: "🧑‍🎓", x: -40, y: -40, boy: 90, balon: "Daha çok çalışmalısın" } ] } },
      ok: "·" },
    adimlar: ["“bilişim notu” projesi aç, panda yerine öğrenci kuklası koy.", "Notu sor ve bekle.", "İşlemler: yanıt > 50 veya yanıt = 50.", "Kontrol: eğer ise değilse ile iki mesajı yerleştir."],
    kitap: "s. 42–44 · 10. Uygulama" },

  { tur: "uygulama", baslik: "11. Uygulama · Konuşan uzaylı",
    metin: "Uzaylıya tıklanınca adını sorsun, adınla selamlasın, “Okula gidiyor musun?” diye sorsun. Cevap Evet ise “Bu çok güzel”, değilse “Hımm. Umarım her şey istediğin gibi olur” desin.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Soru", gorsel: { tip: "sahne", proje: "Konuşan uzaylı", dekor: "uzay", suslar: [ { e: "🪐", x: 170, y: 120, boy: 50 }, { e: "✨", x: -170, y: 130, boy: 26 } ], kuklalar: [ { e: "👽", x: 0, y: 10, boy: 90 } ], sor: { soru: "Ayşe, okula gidiyor musun?", cevap: "Evet" } } },
      sag: { baslik: "Cevap", gorsel: { tip: "sahne", proje: "Konuşan uzaylı", dekor: "uzay", suslar: [ { e: "🪐", x: 170, y: 120, boy: 50 }, { e: "✨", x: -170, y: 130, boy: 26 } ], kuklalar: [ { e: "👽", x: -40, y: -20, boy: 90, balon: "Bu çok güzel" } ] } },
      ok: "➜" },
    adimlar: ["“Konuşan uzaylı” projesi: dekor ve uzaylı kuklası ekle.", "Bu kukla tıklandığında → Adın ne? diye sor ve bekle.", "“Merhaba” ile yanıtı birleştirip 2 saniye söyle.", "Yanıtı kullanarak “…, okula gidiyor musun?” diye sor.", "Eğer yanıt = Evet ise / değilse ile iki mesajı ver."],
    kitap: "s. 44–45 · 11. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Puan sonucu",
    metin: "Programlama dersinden alınan puanı sor; tabloya göre sonucu yazdır.",
    gorsel: { tip: "tablo", ad: "Tablo 1.5 · Puan sonuç tablosu", sutunlar: ["Puan", "Sonuç"], satirlar: [["85–100", "Pekiyi"], ["70–84", "İyi"], ["55–69", "Orta"], ["45–54", "Geçer"], ["0–44", "Geçmez"]] },
    kitap: "s. 45" },

  { tur: "test", sorular: [
    { soru: "📖 İstenen koşul gerçekleşmediğinde diğer olayı çalıştıran yapı hangisidir?", secenekler: ["eğer ise", "eğer ise · değilse", "sürekli tekrarla", "… olana kadar bekle"], dogru: 1 },
    { soru: "Not 50 ve üstü mü diye bakmak için hangi koşul doğrudur?", secenekler: ["yanıt < 50", "yanıt > 50", "yanıt > 50 veya yanıt = 50", "yanıt > 50 ve yanıt = 50"], dogru: 2 },
    { soru: "Hangi blok grubunda “dokunuyor mu?” koşulu bulunur?", secenekler: ["Hareket", "Algılama", "Ses", "Görünüm"], dogru: 1 },
    { soru: "Yaya örneğinde karar sorusu nedir?", secenekler: ["Yol uzun mu?", "Yeşil ışık mı yanıyor?", "Saat kaç?", "Araba kırmızı mı?"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Sayı tahmin oyunu",
    gorsel: { tip: "bloklar", kod: "when flag clicked\nset [gizli v] to (pick random (1) to (10))\nask [1 ile 10 arasında bir sayı tut] and wait\nif <(answer) = (gizli)> then\nsay [Bildin!]\nelse\nsay (join [Bilemedin, sayı: ] (gizli))\nend" },
    not: "Geliştir: büyükse “Daha küçük”, küçükse “Daha büyük” desin ve bilene kadar sorsun (tekrarla … olana kadar)." }

]};
