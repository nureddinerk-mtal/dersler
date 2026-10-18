// YAPZ · 27 · Regresyon türleri  (Kitap s. 125–127)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Regresyon: özellik(ler) ile bağımlı değişken arasındaki ilişkiyi bulmak (kıdem–ücret, çalışma süresi–not). Doğrusal (basit, çoklu) ve doğrusal olmayan (polinom, lojistik). Formüller: y = β₀ + β₁X + ε; çoklu: β₀ + β₁X₁ + … + βₙXₙ + ε; polinom: β₀ + β₁X + β₂X² + … + βₕXʰ + ε. Lojistik regresyon adı regresyon olsa da sınıflandırma yapar.",
    akis: ["Regresyon ağacı", "Basit ve polinom grafiği", "Formül kartları (β₀ sabit, β₁ eğim, ε hata)", "Lineer vs lojistik grafiği", "Test"],
    hatalar: ["Lojistik regresyonu kestirim yöntemi sanmak. Çıktısı 0/1 (sınıf).", "Polinom derecesini artırdıkça hep daha iyi olacağını sanmak; aşırı öğrenme olur (17. konu).", "β₀ ile β₁'i karıştırmak: β₀ y eksenini kestiği nokta, β₁ eğim."],
    sorular: [["Kuadratik, kübik?", "2. derece polinom kuadratik, 3. kübik, 4. kuartik."], ["Lojistik eğri neden S şeklinde?", "Sonucu 0–1 arasına sıkıştıran sigmoid fonksiyonu kullanır; 0,5 eşiği sınıfı belirler. 38. konuda aktivasyon fonksiyonu olarak tekrar görülecek."]],
    not: "Ölçme sorusu 38'de kitap anahtarı B diyor ama B doğru bir ifade. Yanlış olan C (bağımlı/bağımsız değişkenler ters yazılmış). Testte C doğru kabul edildi." },

  { tur: "bilgi", baslik: "Regresyon türleri",
    gorsel: { tip: "agac", kok: { ad: "Regresyon", yan: true, cocuklar: [
      { ad: "Doğrusal", alt: "düz çizgi", cocuklar: [ { ad: "Basit", alt: "1 bağımsız değişken" }, { ad: "Çoklu", alt: "birden çok bağımsız değişken" } ] },
      { ad: "Doğrusal olmayan", alt: "eğri", cocuklar: [ { ad: "Polinom", alt: "pozisyon–maaş" }, { ad: "Lojistik", alt: "sınıflandırma: hasta / değil" } ] }
    ] } } },

  { tur: "bilgi", baslik: "Doğru ve eğri",
    gorsel: { tip: "resim", yol: G + "27-turler.png" },
    not: "Doğrusal regresyon gerçek değerlere en yakın doğruyu çizer. Polinomda doğru yerine eğri çizilir; derece uyumu etkiler." },

  { tur: "bilgi", baslik: "Formüller",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Basit doğrusal", alt: "y = β₀ + β₁X + ε" },
      { ust: "Çoklu doğrusal", alt: "y = β₀ + β₁X₁ + β₂X₂ + … + βₙXₙ + ε" },
      { ust: "Polinom (h. derece)", alt: "y = β₀ + β₁X + β₂X² + … + βₕXʰ + ε" },
      { ust: "Semboller", alt: "β₀ sabit (kesişim) · β₁… katsayı (eğim) · ε hata" }
    ]},
    not: "Çoklu örnek: mesai süresi ve kıdemin ücrete etkisi." },

  { tur: "bilgi", baslik: "Lineer mi lojistik mi?",
    gorsel: { tip: "resim", yol: G + "27-lojistik.png" },
    metin: "Sonuç 0/1 iken düz çizgi 0'ın altına, 1'in üstüne taşar. Lojistik eğri 0–1 arasında kalır, 0,5 eşiğiyle sınıf verir." },

  { tur: "test", sorular: [
    { soru: "📖 Doğrusal regresyon ile ilgili hangisi <b>yanlıştır</b>?", secenekler: ["Regresyon tahminleri için kullanılan denetimli bir algoritmadır.", "Bağımsız değişkenleri kullanarak bir hedef değerini modeller.", "Bağımlı değişken(ler) (X) kullanılarak bağımsız değişkeni (y) tahmin eder.", "Değişkenler arası ilişki olmasa da kullanılabilir.", "Basit doğrusal regresyon y=b0+b1x1 şeklinde formüle edilir."], dogru: 2 },
    { soru: "Hangisi doğrusal olmayan bir regresyondur?", secenekler: ["Basit doğrusal", "Çoklu doğrusal", "Polinom", "Hiçbiri"], dogru: 2 },
    { soru: "Hangi regresyon türü sınıflandırma için kullanılır?", secenekler: ["Polinom", "Lojistik", "Çoklu doğrusal", "Basit doğrusal"], dogru: 1 },
    { soru: "y = 5 + 2x denkleminde eğim kaçtır?", secenekler: ["5", "2", "7", "10"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Desmos'ta kaydırıcıyla dene",
    adimlar: ["desmos.com/calculator aç, y = a + b x yaz; a ve b için kaydırıcı ekle.", "a'yı değiştir: doğru yukarı aşağı kayar (β₀). b'yi değiştir: eğim değişir (β₁).", "y = 1/(1+e^(-b(x-a))) yaz: lojistik eğri. b büyüdükçe S keskinleşir."] }

]};
