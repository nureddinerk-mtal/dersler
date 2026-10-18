// YAPZ · 01 · Yapay zekâ nedir? Alt alanlar, kullanım yerleri  (Kitap s. 16–17)
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Yapay zekâ bir şemsiye: altında makine öğrenmesi, doğal dil işleme, bulanık mantık, uzman sistemler, robotik ve yapay sinir ağları var. Bu yıl ağırlıklı olarak makine öğrenmesi (2. birim) ve yapay sinir ağları (3. birim) işlenecek. Klasik program ile yapay zekâ farkı: klasik programda kuralı biz yazarız, makine öğrenmesinde kuralı veriden makine çıkarır.",
    akis: ["Açılış: “Bugün kaç kez yapay zekâ kullandınız?” (öneriler, filtreler, sesli asistan, çeviri)", "Tanım ve alt alanlar (şemsiye görseli)", "Kullanım yerleri + test; meraklısına: mini uzman sistem"],
    hatalar: ["Her otomatik sistemi yapay zekâ sanmak (zamanlayıcıyla yanan lamba yapay zekâ değildir).", "Robotik ile yapay zekâyı aynı şey sanmak.", "Bulanık mantığı “belirsiz/yanlış mantık” sanmak: ara değerlerle (biraz sıcak, çok sıcak) karar verir."],
    sorular: [["Yapay zekâ ile normal program farkı ne?", "Normal programda “eğer şu olursa bunu yap” kurallarını biz yazarız. Makine öğrenmesinde bu kuralları örneklerden (veriden) makine kendisi çıkarır."],
              ["Hangi dili öğreneceğiz?", "Python. Yapay zekâ ve veri biliminde en çok kullanılan dil; kütüphaneleri (NumPy, Pandas, scikit-learn) çok güçlü."]]},

  { tur: "bilgi", baslik: "Yapay zekâ nedir?",
    metin: "Bir makinenin insan gibi <b>algılaması, öğrenmesi, akıl yürütmesi ve problem çözmesi.</b>",
    gorsel: { tip: "akis", adimlar: [
      { simge: "👀", yazi: "Algıla", alt: "kamera, mikrofon, veri" },
      { simge: "🧠", yazi: "Öğren", alt: "örneklerden kalıp çıkar" },
      { simge: "💭", yazi: "Akıl yürüt", alt: "karar ver" },
      { simge: "✅", yazi: "Çöz", alt: "tahmin, öneri, eylem" }
    ]},
    not: "“Yapay” = insan yapımı. Amaç insanın ya da doğanın zekâ gerektiren özelliklerini taklit etmek." },

  { tur: "bilgi", baslik: "Yapay zekâ bir şemsiyedir",
    gorsel: { tip: "agac", kok: { ad: "🤖 Yapay Zekâ", yan: true, cocuklar: [
      { ad: "Makine Öğrenmesi", alt: "veriden kendi kendine öğrenir" },
      { ad: "Doğal Dil İşleme", alt: "insan dilini anlar" },
      { ad: "Bulanık Mantık", alt: "doğru-yanlış arası kararlar" },
      { ad: "Uzman Sistem", alt: "arayüz + çıkarım motoru + bilgi tabanı" },
      { ad: "Robotik", alt: "akıllı sistemin vücut bulmuş hâli" },
      { ad: "Yapay Sinir Ağları", alt: "beyni taklit eden katmanlı model" }
    ]}}},

  { tur: "bilgi", baslik: "Nerelerde kullanılıyor?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🚗 Otonom araçlar", alt: "Sensör + yapay zekâ: kendi kendine sürüş" },
      { ust: "🏥 Sağlık", alt: "Tahlillerden hastalık teşhisi" },
      { ust: "🎙️ Konuşma tanıma", alt: "Sesli asistanlar" },
      { ust: "📷 Görüntü işleme", alt: "Fotoğrafta nesne ve yüz tanıma" },
      { ust: "🎓 Eğitim", alt: "Öğrenci düzeyine göre ders" },
      { ust: "📡 Nesnelerin interneti", alt: "Cihaz verilerinden sonuç çıkarma" }
    ]}},

  { tur: "uygulama", baslik: "Hangi alan?",
    metin: "Her örneği bir alt alanla eşleştir, deftere yaz.",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>1</code> <span>Telefona “yarın hava nasıl?” diye sesli sormak</span></div>
      <div><code>2</code> <span>Klimanın “biraz sıcak” durumunda fanı yavaşça artırması</span></div>
      <div><code>3</code> <span>Fabrikada kutu taşıyan kol</span></div>
      <div><code>4</code> <span>Belirtilere göre hastalık öneren program</span></div>
      <div><code>5</code> <span>E-postanın spam olup olmadığını geçmiş e-postalardan öğrenen sistem</span></div></div>` },
    adimlar: ["Seçenekler: makine öğrenmesi, doğal dil işleme, bulanık mantık, uzman sistem, robotik.", "Her örneğin yanına alanını yaz.", "Kendi hayatından bir örnek daha ekle."],
    kitap: "s. 16–17" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi yapay zekânın tanımlarından biridir?", secenekler: ["Kendi zekânızla programlama yapma", "İnsan zekâsını bilgisayara yerleştirme", "Oyun programlama ve oynama", "Bir makineyi akıllı yapma", "Bir bilgisayarı tasarlama"], dogru: 3 },
    { soru: "📖 Hangisi yapay zekânın alt alanlarından biri değildir?", secenekler: ["Makine Öğrenmesi", "Sinir Ağları", "Uzman Sistem", "Doğal Dil İşleme", "Veri Tabanı Yönetim Sistemi"], dogru: 4 },
    { soru: "Uzman sistemin üç parçası hangisidir?", secenekler: ["Arayüz, çıkarım motoru, bilgi tabanı", "Kamera, mikrofon, hoparlör", "Girdi, gizli katman, çıktı", "Veri, model, grafik"], dogru: 0 },
    { soru: "Çeviri uygulaması hangi alt alana örnektir?", secenekler: ["Robotik", "Doğal dil işleme", "Bulanık mantık", "Uzman sistem"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Mini uzman sistem",
    kod: `# Bilgi tabanı: kurallar
sicaklik = int(input("Sıcaklık kaç derece? "))
nem = int(input("Nem yüzde kaç? "))

# Çıkarım motoru: kurallara göre karar
if sicaklik > 30 and nem > 60:
    print("Bunaltıcı! Klimayı aç.")
elif sicaklik > 30:
    print("Sıcak ama kuru. Vantilatör yeter.")
else:
    print("Hava güzel.")`,
    not: "Kuralları biz yazdık; bu klasik bir uzman sistem. Makine öğrenmesinde bu kuralları örneklerden makine kendisi çıkaracak." }

]};
