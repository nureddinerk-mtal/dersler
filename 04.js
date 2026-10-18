// YAPZ · 04 · Veri seti ve açık veri setleri  (Kitap s. 27–31)
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Yapay zekâ veriden öğrenir; veri kötüyse model de kötü olur (“çöp girerse çöp çıkar”). Veri seti çoğunlukla satır (kayıt) ve sütunlardan (özellik) oluşan bir tablodur, genelde CSV. Bu konuda Kaggle'a üye olunur ve bir veri seti indirilir; ileriki konularda (11, 21…) indirilen dosyalar kullanılacak.",
    akis: ["Veri bilimi süreci ve veri türleri", "Veri seti tablosu: satır = kayıt, sütun = özellik", "Açık veri kaynakları ve Kaggle'dan indirme"],
    hatalar: ["Kategorik veriyi sayısal sanmak (posta kodu, plaka sayı gibi görünür ama kategoriktir).", "Sıralı veri ile kategorik veriyi karıştırmak (zayıf < orta < iyi sıralıdır).", "Veri setinin lisansına bakmamak."],
    sorular: [["CSV nedir?", "Virgülle ayrılmış değerler: her satır bir kayıt, değerler virgülle ayrılır. Excel ile de açılır."], ["Veri ne kadar çok olmalı?", "Genelde ne kadar çok ve temiz o kadar iyi. Az veriyle model ezber yapabilir (17. konu: aşırı öğrenme)."]]},

  { tur: "bilgi", baslik: "Veriden eyleme",
    gorsel: { tip: "akis", adimlar: [{ simge: "📥", yazi: "Veri kaynağı" }, { simge: "📊", yazi: "Veri analitiği" }, { simge: "💡", yazi: "Bilgi" }, { simge: "🎯", yazi: "Eylem" }] },
    not: "Veriden bilgi çıkaran bilim dalı: veri bilimi. Bu işi yapan: veri bilimci." },

  { tur: "bilgi", baslik: "Veri türleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🔢 Sayısal", alt: "boy, kilo, maaş, yaş" },
      { ust: "🏷️ Kategorik", alt: "cinsiyet, şehir, renk, evet/hayır" },
      { ust: "📶 Sıralı", alt: "zayıf / orta / iyi / pekiyi" },
      { ust: "📅 Zaman serisi", alt: "günlük sıcaklık, hisse fiyatı" },
      { ust: "📝 Metin", alt: "sözcük, cümle, paragraf" },
      { ust: "🖼️ Resim · 🔊 Ses", alt: "görüntü işleme, konuşma tanıma" }
    ]}},

  { tur: "bilgi", baslik: "Veri seti: bir tablo",
    gorsel: { tip: "tablo", ad: "Tablo 1.1 · Veri seti örneği", sutunlar: ["Ad", "Maaş", "Deneyim", "Cinsiyet", "Şehir"], satirlar: [
      ["Zeynep", "13000 TL", 8, "Kadın", "Ankara"], ["Ali", "11500 TL", 5, "Erkek", "İstanbul"], ["Ahmet", "10000 TL", 3, "Erkek", "İzmir"], ["Ayşe", "15000 TL", 10, "Kadın", "Antalya"]
    ]},
    not: "Her satır bir kayıt, her sütun bir özellik. Genellikle CSV ya da Excel dosyası olarak saklanır." },

  { tur: "bilgi", baslik: "Açık veri setleri nerede?",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>kaggle.com/datasets</code> <span>en yaygın kaynak</span></div><div><code>archive.ics.uci.edu</code> <span>UCI makine öğrenmesi deposu</span></div>
      <div><code>data.tuik.gov.tr</code> <span>TÜİK</span></div><div><code>data.ibb.gov.tr</code> <span>İstanbul Büyükşehir Belediyesi</span></div>
      <div><code>data.europa.eu</code> <span>Avrupa Birliği</span></div><div><code>registry.opendata.aws</code> <span>AWS veri setleri</span></div>
      <div><code>Google Dataset Search</code> <span>veri seti arama motoru</span></div></div>` },
    not: "Her veri seti her amaçla kullanılamaz: lisansına bak." },

  { tur: "uygulama", baslik: "Kaggle'dan veri seti",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🔍", yazi: "Datasets", alt: "anahtar kelime yaz" },
      { simge: "⚙️", yazi: "Filters", alt: "boyut, dosya türü" },
      { simge: "👀", yazi: "Data Explorer", alt: "sütunları incele" },
      { simge: "⬇️", yazi: "Download", alt: "ya da Notebook'ta Add data" }
    ]},
    adimlar: ["Kaggle → Datasets → “iris” ara.", "Data Explorer'da sütunları incele: kaç satır, kaç sütun var?", "Download ile indir. Bu dosyayı 11. konuda kullanacağız."],
    kitap: "s. 30–31 · 5. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Grup olun, bir kategori seçin (spor, hava, sağlık…). Açık veri platformlarından bir veri seti indirin, inceleyin: kaç satır, hangi sütunlar, hangi veri türleri? Diğer gruplara anlatın.",
    kitap: "s. 31" },

  { tur: "test", sorular: [
    { soru: "Hangisi kategorik veridir?", secenekler: ["Yaş", "Maaş", "Doğum yeri", "Boy"], dogru: 2 },
    { soru: "“Zayıf, orta, iyi, pekiyi” hangi veri türüdür?", secenekler: ["Sayısal", "Sıralı", "Zaman serisi", "Metin"], dogru: 1 },
    { soru: "Veri setinde bir satır neyi gösterir?", secenekler: ["Bir özelliği", "Bir kaydı", "Dosya adını", "Grafiği"], dogru: 1 },
    { soru: "En yaygın açık veri seti platformu?", secenekler: ["Kaggle", "Instagram", "YouTube", "Word"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Kendi veri setini topla",
    adimlar: ["Sınıfta 20 kişiye 4 soru sor: boy, ayakkabı numarası, sevdiği ders, okula geliş süresi.", "Google E-Tablolar'a gir, Dosya → İndir → CSV.", "Hangi sütun sayısal, hangisi kategorik? 9. konuda bu dosyayı Pandas ile açabilirsin."] }

]};
