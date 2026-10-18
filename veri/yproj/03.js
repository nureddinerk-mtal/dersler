// YPROJ · 03 · Proje sonuç raporu ve sunum  (Kitap s. 46–51 · Yıllık plan 2. hafta)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.3: Proje bitince bütün aşamaları içeren, doğru, tutarlı, gereksiz bilgi içermeyen, görsellerle desteklenmiş, teknik olmayan kişinin de anlayacağı bir rapor yazılır; bakımda yeni personele yol gösterir. Bölümler: <b>Giriş</b> (amaç, kapsam, çözülen problem, fayda), <b>Araçlar ve Yöntemler</b> (araçlar, nasıl yapıldığı, teknik ve diller, gereksinimler, use case, diyagramlar, ekranlar, çalışma mantığı), <b>Sonuç</b> (hedeflere ne kadar ulaşıldı, test sonuçları, eksikler ve öneriler, sürdürülebilirlik), <b>Sözlük</b>, <b>Kaynakça</b>; büyük projede İçindekiler. Sunum kuralları: içerik, dinleyici odaklı, tek ana mesaj, her bilgiyi koyma, ortamı kontrol et, akış, gerekli görseller, prova, göz teması, beden dili, soru-cevap hazırlığı. Öğrenci şimdi kendi raporunun boş iskeletini açar; her bölümde ilgili kısmı doldurur. 1. birim testi: 1A 2C 3B 4D 5E 6B 7B.",
    akis: ["Rapor neden yazılır?", "5 bölüm", "Rapor iskeletini aç", "Sunum kuralları", "Birim testi"],
    hatalar: ["Raporu en sona bırakmak: iskelet şimdi açılır, her aşamadan sonra ilgili bölüm doldurulur (ekran görüntüsü, diyagram).", "Kitapta 5. sorunun şıkları hatalı harflendirilmiş (A, A, B, C, D); doğru cevap ‘Test’. Platformda şıklar düzeltildi.", "1. birim cevap anahtarı 6. soru için B (Ortak Model); 7. soru B (ekrandan okumak)."],
    sorular: [["Raporu Word'de mi yazacağız?", "Evet ya da Google Dokümanlar; tek bir dosya, her aşamada güncellenir ve Drive'a yüklenir."]] },

  { tur: "bilgi", baslik: "Proje sonuç raporu",
    gorsel: { tip: "akis", adimlar: [ { simge: "1️⃣", yazi: "Giriş", alt: "amaç, kapsam, fayda" }, { simge: "2️⃣", yazi: "Araçlar ve Yöntemler", alt: "araçlar, diyagramlar, ekranlar" }, { simge: "3️⃣", yazi: "Sonuç", alt: "test, eksikler, öneriler" }, { simge: "4️⃣", yazi: "Sözlük" }, { simge: "5️⃣", yazi: "Kaynakça" } ] },
    metin: "Teknik bilmeyen biri de anlayabilmeli; görsellerle desteklenmeli." },

  { tur: "adim", baslik: "Rapor iskeletini aç", hafta: "2",
    kitap: { ozet: "Telefon rehberi için 5 bölümlü örnek rapor yazdı.", sayfa: "s. 47–49" },
    sen: { metin: "Bir doküman aç, başlıkları yaz; her aşamadan sonra ilgili bölümü dolduracaksın.",
      gorsel: { tip: "tablo", sutunlar: ["Bölüm", "Ne zaman doldurulur?"], satirlar: [["PROJE ADI · 1. Giriş", "planlamadan sonra"], ["2. Araçlar ve Yöntemler", "tasarım ve kodlamada"], ["3. Sonuç · Ürünün eksiklikleri", "testten sonra"], ["4. Sözlük", "her aşamada"], ["5. Kaynakça", "her aşamada"]] } },
    teslim: { dosya: "P1-03_rapor", liste: ["Giriş, Araçlar ve Yöntemler, Sonuç, Sözlük, Kaynakça başlıkları var.", "Giriş'e projenin amacını iki cümleyle yazdım."] } },

  { tur: "bilgi", baslik: "Sunum yaparken",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🎯 Tek ana mesaj" }, { ust: "👥 Dinleyici odaklı" }, { ust: "✂️ Her bilgiyi koyma" }, { ust: "🖼️ Görsel sadece gerektiğinde" }, { ust: "🔁 Çok prova" }, { ust: "👀 Göz teması, beden dili" }, { ust: "❓ Sorulara hazırlık" } ] },
    not: "Kitap s. 49" },

  { tur: "test", baslik: "Birim testi · Proje Hazırlık", sorular: [
    { soru: "📖 Bir yazılım projesi hazırlanırken ilk olarak hangisi yapılmalıdır?", secenekler: ["Fizibilite çalışması", "Risk analizi", "Varlık ilişki şemaları", "Veri akış diyagramı", "Veri tabanı tasarımı"], dogru: 0 },
    { soru: "📖 Hangisi yazılım projesi hazırlama süreci adımlarından biri değildir?", secenekler: ["Kodlama", "Planlama", "Sunum", "Tasarım", "Test"], dogru: 2 },
    { soru: "📖 Hangisi etkin kod yazım stillerinden biri değildir?", secenekler: ["Gerektiğinde kodlara açıklama satırı eklenmelidir.", "Bütün kodlar aynı sınıf içine yazılmalıdır.", "Tekrarlanan işlemler için metot kullanılmalıdır.", "Her işlem için en uygun algoritma seçilmelidir.", "Kodlar düzenli olmalıdır."], dogru: 1 },
    { soru: "📖 Varlık ilişki şemaları hangi aşamada oluşturulur?", secenekler: ["Bakım", "Kodlama", "Planlama", "Tasarım", "Test"], dogru: 3 },
    { soru: "📖 Yazılım projesi hangi aşamadan sonra yayımlanmalıdır?", secenekler: ["Analiz", "Kodlama", "Planlama", "Tasarım", "Test"], dogru: 4 },
    { soru: "📖 Hangisi yazılım geliştirme süreç modellerinden biri değildir?", secenekler: ["Kodla ve Düzelt", "Ortak Model", "Şelale", "V Modeli", "Yinelemeli Model"], dogru: 1 },
    { soru: "📖 Hangisi proje sunumunda dikkat edilecek hususlardan değildir?", secenekler: ["Dinleyicilerle göz teması kurulmalıdır.", "Bilgiler ekrandan veya notlardan okunmalıdır.", "Soru-cevaba önceden hazırlanılmalıdır.", "Sunum akışı iyi planlanmalıdır.", "Vücut dili kullanılmalıdır."], dogru: 1 }
  ]}

]};
