// YAPZ · 15 · Terimler, öğrenme süreci, çapraz doğrulama  (Kitap s. 74–76)
var G = "gorsel/yapz/";
var bolme = (parcalar) => `<div style="display:flex;border-radius:8px;overflow:hidden;font:600 14px sans-serif;color:#fff;max-width:640px">${parcalar.map(([y, a, r]) => `<div style="flex:${y};background:${r};padding:12px 6px;text-align:center">${a}<br>%${y}</div>`).join("")}</div>`;
var capraz = () => { let s = `<table style="border-collapse:separate;border-spacing:4px;font:13px sans-serif">`; for (let i = 0; i < 5; i++) { s += `<tr><td style="padding-right:8px">${i + 1}. adım</td>`; for (let j = 0; j < 5; j++) s += `<td style="width:62px;height:26px;border-radius:5px;text-align:center;color:#fff;background:${i === j ? "#f2994a" : "#2f80ed"}">${i === j ? "doğrula" : "eğit"}</td>`; s += `<td style="padding-left:8px">→ ${i + 1}. puan</td></tr>`; } return s + `</table>`; };
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Terimler (bağımlı/bağımsız değişken, algoritma, model, eğitim/doğrulama/test verisi), süreç (veri → ön işleme → model → değerlendirme → dağıtım, dairesel) ve veriyi bölme: 60/20/20 ya da 80/20 + çapraz doğrulama. Altın kural: model, eğitildiği veriyle test edilmez.",
    akis: ["Terim kartları", "Süreç akışı (dairesel olduğunu vurgula)", "Bölme oranları", "5 katlı çapraz doğrulama çizimi", "Etkinlik: 10 kişilik sınıfla çapraz doğrulama canlandırması", "Test"],
    hatalar: ["Algoritma ile modeli karıştırmak. Algoritma tarif, model o tarifle veriden pişen sonuç.", "Bağımlı/bağımsız değişkeni ters söylemek. Sonuç (fiyat, etiket) bağımlıdır.", "Çapraz doğrulamada test setini de katmak. Final testi için ayrılan %20'ye dokunulmaz."],
    sorular: [["Neden hem doğrulama hem test var?", "Doğrulamaya bakarak ayar (hiper parametre) yaparız; böylece model doğrulama verisine “alışır”. Hiç görmediği test verisi gerçek başarıyı gösterir."], ["Hiper parametre ne?", "Modelin öğrenmediği, bizim seçtiğimiz ayar. Örnek: K-NN'deki K."]],
    not: "Ölçme soruları 6, 7, 29 bu konudan." },

  { tur: "bilgi", baslik: "Terimler",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🎯 Bağımlı değişken", alt: "Çıktı: sınıf etiketi, tahmin, küme" },
      { ust: "🧮 Bağımsız değişken", alt: "Çıktıyı etkileyen özellikler" },
      { ust: "📜 Algoritma", alt: "İzlenen prosedür (tarif)" },
      { ust: "🧠 Model", alt: "Algoritmanın veriyle eğitilmiş hâli" },
      { ust: "🏋️ Eğitim verisi", alt: "Modeli eğitmek için" },
      { ust: "🔧 Doğrulama verisi", alt: "Değerlendir ve hiper parametre ayarla" },
      { ust: "🧪 Test verisi", alt: "Gerçek başarıyı ölç" }
    ]}},

  { tur: "bilgi", baslik: "Makine öğrenmesi süreci",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📦", yazi: "Veri toplama" },
      { simge: "🧹", yazi: "Veri ön işleme", alt: "keşfet, temizle, eksikler, dönüşüm" },
      { simge: "🧠", yazi: "Model oluşturma" },
      { simge: "📊", yazi: "Değerlendirme" },
      { simge: "🚀", yazi: "Dağıtım" }
    ]},
    not: "Süreç daireseldir: sonuç kötüyse veriye geri dönülür. Eğitim verisi bütünü temsil etmezse model çalışmaz." },

  { tur: "bilgi", baslik: "Veriyi bölmek",
    gorsel: [
      { tip: "html", icerik: "<p style='margin:4px 0'><b>1. yol:</b> Eğitim – doğrulama – test</p>" + bolme([[60, "Eğitim", "#2f80ed"], [20, "Doğrulama", "#9b51e0"], [20, "Test", "#f2994a"]]) },
      { tip: "html", icerik: "<p style='margin:14px 0 4px'><b>2. yol:</b> Çapraz doğrulama + final testi</p>" + bolme([[80, "Çapraz doğrulama", "#27ae60"], [20, "Final testi", "#f2994a"]]) }
    ]},

  { tur: "bilgi", baslik: "Çapraz doğrulama (n = 5)",
    gorsel: { tip: "html", icerik: capraz() },
    metin: "Her adımda bir parça doğrulama, kalan dördü eğitim. Sonunda eğitim verisinin tamamı hem eğitimde hem doğrulamada kullanılmış olur.",
    not: "Ortalama performans = (1. puan + 2. + 3. + 4. + 5. puan) / 5" },

  { tur: "uygulama", baslik: "Sınıfta çapraz doğrulama",
    metin: "Kâğıt üzerinde canlandırma. 10 öğrenci = 10 örnek.",
    adimlar: ["10 öğrenciyi 5 gruba ayır (her grupta 2 kişi).", "1. adımda 1. grup “doğrulama”, diğerleri “eğitim” olsun. Tahtaya yaz.", "5 adımı tamamla. Her öğrenci kaç kez doğrulamada, kaç kez eğitimde yer aldı?", "Puanlar 0.8, 0.9, 0.7, 0.8, 0.8 ise ortalama performans kaç?"],
    kitap: "s. 75–76 · 5. ve 6. Örnek" },

  { tur: "test", sorular: [
    { soru: "📖 Makine öğrenmesinin temel kavramlarıyla ilgili hangisi doğrudur?", secenekler: ["Bağımlı değişken, çıktıya etki ettiği düşünülen özelliklerdir.", "Denetimli öğrenmede bağımlı bir değişken bulunmaz.", "Denetimsiz öğrenmede etiketli veri kullanılmaz.", "Pekiştirmeli öğrenmede etiketsiz veri kullanılır.", "Model, verinin algoritmaya uydurulması işlemidir."], dogru: 2 },
    { soru: "📖 Makine öğrenmesi süreci ile ilgili hangisi doğrudur?", secenekler: ["Test kümesi eğitim kümesinden büyük olmalıdır.", "Çapraz doğrulama denetimli bir öğrenme türüdür.", "Çapraz doğrulamada veri seti bölünerek tüm parçalar eğitim ve test için kullanılır.", "Denetimli öğrenmede model eğitim verisiyle test edilir.", "Sınıflandırma ve regresyon için aynı metrikler kullanılır."], dogru: 2 },
    { soru: "📖 I. Değerlendirme II. Veri toplama III. Model oluşturma IV. Veri ön işleme V. Dağıtım<br>Doğru sıralama hangisi?", secenekler: ["I, II, III, V, IV", "II, I, IV, III, V", "II, I, IV, V, III", "II, IV, III, I, V", "IV, II, III, V, I"], dogru: 3 },
    { soru: "5 katlı çapraz doğrulamada her adımda veri setinin ne kadarı eğitim için kullanılır?", secenekler: ["1/5", "2/5", "4/5", "Tamamı"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Veri sızıntısı",
    metin: "Test verisinden bir bilgi eğitime karışırsa (örneğin ölçekleme tüm veriyle yapılırsa) model sınavda kopya çekmiş olur: puan yüksek çıkar, gerçekte kötü çalışır. Buna <b>veri sızıntısı</b> (data leakage) denir.",
    not: "26. konudaki Pipeline bu hatayı önlemenin en kolay yolu." }

]};
