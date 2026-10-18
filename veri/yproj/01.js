// YPROJ · 01 · Proje ve proje uygulama süreci  (Kitap s. 16–17, 46 · Yıllık plan 1. hafta)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Bu ders proje tabanlı: kitaptaki örnekler (telefon rehberi, Stok Takip, Gezi Rehberi, E-Tercih) yol haritasıdır; her öğrenci aynı türde <b>özgün</b> ve bireysel projesini yapar. Kitabın Sıra Sizde'leri bu derste ödev değil, öğrencinin kendi projesindeki adımdır; kitaptaki kontrol listesi o adımın teslim ölçütüdür. Teslimler öğretmenin paylaştığı Drive linkine, <code>AdSoyad_P1-05_takvim</code> biçiminde. Hoca onayı üç yerde: fikir, tasarım, sunum. 1.1: Proje (TDK) ve yazılım projesinin farkı (karmaşık, görünmez, esnek; küçük değişiklik büyük maliyet). Hazırlıkta <b>fizibilite</b>: ihtiyaçlar, maliyet, kullanılabilirlik, yöntem-teknik, yasalara uygunluk (telif). 1.2: Süreç: planlama → tasarım → kodlama → test → bakım; hatalı aşamaya geri dönülür. Süreç modelleri: kodla ve düzelt, şelale, V, sarmal, prototipleme, yinelemeli, artımlı, çevik (Scrum, Kanban, XP).",
    akis: ["Hazırlık: proje kelimesi neyi çağrıştırıyor?", "Dersin işleyişi: özgün proje, Drive teslimi, 3 onay", "Yazılım projesi neden zor?", "5 aşamalı süreç", "Süreç modelleri (Araştırma)", "02: fikir seçimi"],
    hatalar: ["Öğrenciler projeyi sadece kodlama sanar; kitap bunu en sık hata olarak veriyor (s. 17 Not).", "Drive klasörünü ve dosya adı kuralını ilk derste tahtaya yazın; sonradan düzeltmek zor.", "Laboratuvar: Visual Studio Community (.NET masaüstü), MySQL Server + Workbench, MySQL Connector/NET, Visual Studio Installer Projects eklentisi gerekiyor. Deep Freeze'li makinelere kalıcı kurulum yapılmalı."],
    sorular: [["Bireysel mi yapacağız?", "Evet. Kitap grup gösteriyor; bu derste her öğrenci kendi projesini yapar ve takvimde ‘yapacak personel’ sütununa kendini yazar."], ["Kitaptaki projeyi yapsam olur mu?", "Hayır, aynı türde ama farklı bir konu seçilir (02)."]],
    not: "Rozetteki hafta yıllık plandaki haftadır. Geride kalan öğrenci İleri ile kendi hızında yetişir; sınıf, öğretmen izin verdiğinde sonraki aşamaya geçer." },

  { tur: "bilgi", baslik: "Bu derste ne yapacaksın?",
    gorsel: { tip: "akis", adimlar: [ { simge: "🖥️", yazi: "Masaüstü proje", alt: "1. dönem" }, { simge: "📱", yazi: "Mobil proje", alt: "2. dönem" }, { simge: "🌐", yazi: "Web proje", alt: "2. dönem" } ] },
    metin: "Kitaptaki örneği adım adım izle; aynısını değil, <b>kendi özgün</b> projeni yap.",
    not: "Her adımın teslimini Drive klasörüne yükle. Üç yerde hocandan onay al: fikir, tasarım, sunum." },

  { tur: "bilgi", baslik: "Proje uygulama süreci",
    gorsel: { tip: "akis", adimlar: [ { simge: "🗺️", yazi: "Planlama" }, { simge: "📐", yazi: "Tasarım" }, { simge: "⌨️", yazi: "Kodlama" }, { simge: "🧪", yazi: "Test" }, { simge: "🔧", yazi: "Bakım" } ] },
    metin: "Bir aşamada hata varsa o aşamaya <b>geri dönülür</b>. Proje sadece kodlama değildir." },

  { tur: "bilgi", baslik: "Fizibilite: yapılabilir mi?",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🙋 İhtiyaç" }, { ust: "💰 Maliyet" }, { ust: "👍 Kullanılabilirlik" }, { ust: "🛠️ Yöntem ve teknik" }, { ust: "⚖️ Yasalara uygunluk", alt: "telif hakları" } ] },
    not: "Kitap s. 16" },

  { tur: "bilgi", baslik: "Yazılım geliştirme süreç modelleri",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "Kodla ve düzelt" }, { ust: "Şelale" }, { ust: "V modeli" }, { ust: "Sarmal" }, { ust: "Prototipleme" }, { ust: "Yinelemeli" }, { ust: "Artımlı" }, { ust: "Çevik", alt: "Scrum, Kanban, XP" } ] },
    not: "Araştır: modellerin birbirine göre avantaj ve dezavantajları (kitap s. 46)." }

]};
