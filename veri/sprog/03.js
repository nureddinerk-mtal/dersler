// SPROG · 03 · Problem çözme ve algoritma  (Kitap s. 25–29)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Problem çözme: alternatif yollar arasından en doğrusunu seçmek. Altı adım: tanımla, anla, alternatifleri belirle, en uygununu seç, uygula, test et. İki yöntem: deneme-yanılma ve algoritma. Algoritma adı El-Harezmi'den. Algoritmanın özellikleri: başı-sonu belli, girdi-çıktı açık, net ifadeler, gereksiz tekrar yok, uygulanabilir. Diş fırçalama örneği (3 farklı algoritma). 3. Uygulama: rengini 3 kez değiştirip “Hav hav” diyen köpek: önce algoritma, sonra blok.",
    akis: ["Problem çözme 6 adım (akış)", "Deneme-yanılma ↔ algoritma", "El-Harezmi", "Algoritmanın özellikleri", "Diş fırçalama: üç algoritmayı karşılaştırın (hangisi en iyi, neden?)", "3. Uygulama: önce defterde algoritma, sonra mBlock", "Test"],
    hatalar: ["Algoritmayı yazmadan bloklara geçmek. Önce deftere adım adım yazdırın.", "“Renk etkisini 25 değiştir” bloğundaki değeri 30 yapmayı unutmak.", "Bekle bloğu koymayınca renk değişimleri o kadar hızlı olur ki görünmez."],
    sorular: [["Hangi diş fırçalama algoritması doğru?", "Üçü de çalışır ama 3. algoritma en eksiksizi (ıslatma, 2 dk tekrar, yıkama). Kitabın mesajı: bir işin birçok algoritması olabilir, önemli olan en doğrusunu seçmek."], ["Algoritma sadece bilgisayar için mi?", "Hayır: yemek tarifi, yol tarifi, IKEA kurulum kâğıdı da birer algoritmadır."]],
    bloklar: `when flag clicked
change [color v] effect by (30)
wait (1) seconds
change [color v] effect by (30)
wait (1) seconds
change [color v] effect by (30)
wait (1) seconds
say [Hav hav]` },

  { tur: "bilgi", baslik: "Problem çözme adımları",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🎯", yazi: "Problemi tanımla" }, { simge: "🔍", yazi: "Problemi anla" }, { simge: "🔀", yazi: "Alternatif çözümler" },
      { simge: "✅", yazi: "En uygununu seç" }, { simge: "⚙️", yazi: "Uygula" }, { simge: "🧪", yazi: "Test et", alt: "hata varsa geri dön" }
    ]},
    not: "“Çözümde görev almayanlar, problemin bir parçası olurlar.” · Goethe" },

  { tur: "bilgi", baslik: "İki yol",
    gorsel: { tip: "ikili",
      sol: { baslik: "🎲 Deneme-yanılma", gorsel: { tip: "kartlar", kartlar: [ { ust: "Tek çözümü olmayan problemler", alt: "“Hangi mesleği seçmeliyim?”" } ] } },
      sag: { baslik: "📜 Algoritma", gorsel: { tip: "kartlar", kartlar: [ { ust: "Adımları belli problemler", alt: "Bilgisayarla çözülenler" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Algoritma",
    metin: "Problemi çözmeye giden yolun <b>basit, net ve belirli bir sıraya göre</b> tasarlanmış hâli. Programlamanın ilk adımı.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🏁 Başı ve sonu var" }, { ust: "📥 Girdi-çıktı açık" }, { ust: "🔎 İfadeler net" },
      { ust: "⚡ Gereksiz tekrar yok" }, { ust: "🛠️ Uygulanabilir" }
    ]},
    not: "Adını El-Harezmi'den (780–850) alır: cebirin babası." },

  { tur: "bilgi", baslik: "Aynı iş, farklı algoritmalar",
    gorsel: { tip: "tablolar", tablolar: [
      { ad: "1. Algoritma", sutunlar: ["Adım"], satirlar: [["Başla"], ["Macunu fırçaya sür"], ["Dişleri fırçala"], ["Musluğu aç"], ["Ağzını çalkala"], ["Bitir"]] },
      { ad: "3. Algoritma (kısaltılmış)", sutunlar: ["Adım"], satirlar: [["Başla"], ["Kapağı aç, macunu sür"], ["Musluğu aç, fırçayı ıslat"], ["Musluğu kapat"], ["Fırçala, 2 dk tekrarla"], ["Musluğu aç, çalkala"], ["Fırçayı yıka, musluğu kapat"], ["Aynada gülümse · Bitir"]] }
    ], iliski: "hangisi daha iyi?" },
    not: "Kitap s. 27 Tablo 1.3'te üç algoritma var. Önemli olan en doğrusunu seçmek." },

  { tur: "uygulama", baslik: "3. Uygulama · Rengi değişen köpek",
    metin: "Önce algoritmayı defterine yaz, sonra blokları birleştir. Köpek rengini 1 saniye arayla 3 kez değiştirsin, sonra “Hav hav” desin.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Algoritma", gorsel: { tip: "tablo", ad: "1. Algoritma", sutunlar: ["Adım"], satirlar: [["1 · Başla"], ["2 · Renk etkisini 30 değiştir"], ["3 · 1 saniye bekle"], ["4–7 · (2 ve 3'ü iki kez daha)"], ["8 · “Hav hav” de"], ["9 · Bitir"]] } },
      sag: { baslik: "🎯 Sonuç", gorsel: { tip: "sahne", proje: "kuklamı kodluyorum", dekor: "oda", kuklalar: [ { e: "🐕", x: 0, y: -60, boy: 90, balon: "Hav hav" } ] } },
      ok: "➜" },
    adimlar: ["Projeyi “kuklamı kodluyorum” olarak kaydet, köpek kuklası ekle.", "Olaylar: yeşil bayrak tıklandığında.", "Görünüm: renk etkisini 30 değiştir. Kontrol: 1 saniye bekle.", "Bu ikisini algoritmadaki gibi 3 kez ekle.", "Görünüm: Hav hav de."],
    kitap: "s. 28–29 · 3. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Bir problemi doğru olarak çözebilmenin ilk aşaması hangisidir?", secenekler: ["Çözüm yolu belirleme", "Çözümü test etme", "Çözümü uygulama", "Problemi anlama", "Problemi tanımlama"], dogru: 4 },
    { soru: "📖 Hangisi bir problem durumu olamaz?", secenekler: ["Boyalı saçı yıkayacakken suların kesilmesi", "Evde dinlenirken yağmurun başlaması", "İşe gidecekken aracın aküsünün bitmesi", "Seyahat sırasında uçağın kaçırılması", "Uzaktan eğitim sırasında elektriklerin kesilmesi"], dogru: 1 },
    { soru: "Algoritma kelimesi kimin adından gelir?", secenekler: ["İbn-i Sina", "El-Harezmi", "Uluğ Bey", "Cezeri"], dogru: 1 },
    { soru: "Hangisi algoritmanın özelliği değildir?", secenekler: ["Başı ve sonu olmalı", "İfadeler net olmalı", "Gereksiz tekrar içermeli", "Uygulanabilir olmalı"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Sandviç robotu",
    adimlar: ["Bir arkadaşın robot olsun: sadece söylediğini harfi harfine yapsın.", "Ona “ekmeğe peynir sür” algoritmasını adım adım söyle.", "“Bıçağı al” dediğinde nereden, hangi elle? Eksik adımları bul."],
    not: "Bilgisayar da bu robot gibi: net olmayan adımı anlamaz." }

]};
