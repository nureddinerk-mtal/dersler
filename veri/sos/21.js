// SOS · 21 · Grafik oluşturma (Excel) ve birim testi  (Kitap s. 162–169)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.6: Tablo ve grafikler analiz ve yorumu kolaylaştırır. Grafikler genellikle iki boyutlu: <b>yatay eksende bağımsız</b>, <b>dikey eksende bağımlı</b> değişken; eksen birimleri ve açıklamalar (renk, sembol) eklenmeli. 4. Uygulama (1 ders saati): Tarım ve Orman Bakanlığı'ndan 2015–2020 buğday üretim ve tüketimi (bin ton) → Excel'de Dönem / Üretim / Tüketim sütunları (dönem kategorik ve bağımsız; üretim ve tüketim sürekli nicel ve bağımlı) → tabloyu seç → <b>Ekle → Önerilen Grafikler</b> → önizleme → Tamam → grafik başlığı (çift tık) → sağ tık biçimlendirme, grafik başlığını biçimlendir, eksen alt-üst sınır ve birim, veri serisini biçimlendir → istenen grafik yoksa <b>Tüm Grafikler</b>. Birim testi: A 1D 2Y 3D 4D 5Y; B 6E 7C 8A 9D 10E 11D 12C 13A 14E 15B.",
    akis: ["Eksenler: bağımsız / bağımlı", "4. Uygulama: buğday grafiği", "Biçimlendirme", "Birim testi"],
    hatalar: ["<b>Kitabın 3. birim cevap anahtarı B bölümünde hatalı</b> (anahtar: 6A 7D 8E 9D 10E 11B 12C 13A 14A 15A). Doğrusu: 6E (veri), 7C (ratio), 8A (birincil), 9D (CSV, JSON, XML), 10E, 11D (pasta), 12C (histogram), 13A (bileşik), 14E (Ekle / Grafik), 15B (güneş ışığı). Platformda doğru cevaplar kullanıldı.", "4. Uygulama yönergesi çizgi grafik öneriyor ama kitaptaki sonuç (Görsel 3.30) sütun grafik; ikisi de kabul edilebilir.", "Excel'de “Önerilen Grafikler” Excel 2013 ve sonrasında var."],
    sorular: [["Hangi değişken yatay eksene?", "Bağımsız değişken (burada dönem)."], ["Grafik başlığı neden önemli?", "Okuyan grafiğin neyi gösterdiğini, birimini başlık ve eksen adlarından anlar."]] },

  { tur: "bilgi", baslik: "Grafiğin eksenleri",
    gorsel: { tip: "grafik", tur: "sutun", baslik: "Buğday üretimi ve tüketimi", etiketler: ["2015-16", "2016-17", "2017-18", "2018-19", "2019-20"], seriler: [{ ad: "Üretim", degerler: [22600, 20600, 21500, 20000, 19000] }, { ad: "Tüketim", degerler: [18795, 18756, 18187, 18805, 20070] }], xBaslik: "Dönem (bağımsız değişken)", yBaslik: "bin ton (bağımlı)", kaynak: "Tarım ve Orman Bakanlığı" },
    metin: "Yatay eksen <b>bağımsız</b>, dikey eksen <b>bağımlı</b> değişken. Eksen birimlerini ve renk açıklamalarını ekle." },

  { tur: "uygulama", baslik: "4. Uygulama · Buğday grafiği",
    metin: "Buğday üretim ve tüketim verisini Excel'e gir, uygun grafiği ekle ve biçimlendir.",
    gorsel: [
      { tip: "pencere", baslik: "bugday.xlsx - Excel", menu: ["Dosya", "Giriş", "Ekle", "Sayfa Düzeni", "Formüller", "Veri"], satirlar: [ { tablo: { sutunlar: ["", "A", "B", "C"], satirlar: [["1", "<b>Dönem</b>", "<b>Üretim</b>", "<b>Tüketim</b>"], ["2", "2015-2016", "…", "18795"], ["3", "2016-2017", "…", "18756"], ["4", "…", "…", "…"]] } } ] },
      { tip: "grafik", tur: "sutun", baslik: "Türkiye buğday üretimi ve tüketimi (bin ton)", etiketler: ["2015-16", "2016-17", "2017-18", "2018-19", "2019-20"], seriler: [{ ad: "Üretim", degerler: [22600, 20600, 21500, 20000, 19000] }, { ad: "Tüketim", degerler: [18795, 18756, 18187, 18805, 20070] }] } ],
    adimlar: ["Tarım ve Orman Bakanlığı sitesinden 2015–2020 dönemleri için üretim ve tüketimi bul.", "Excel'de <b>Dönem</b>, <b>Üretim</b>, <b>Tüketim</b> sütunlarını aç, veriyi gir.", "Tabloyu seç → <b>Ekle → Önerilen Grafikler</b> → grafiği seç → Tamam.", "Grafik başlığını çift tıklayıp yaz.", "Sağ tık: grafik başlığını, eksenleri (alt-üst sınır, birim) ve veri serisini biçimlendir.", "İstediğin grafik yoksa <b>Tüm Grafikler</b> sekmesine bak."],
    kitap: "s. 162–166 · 4. Uygulama" },

  { tur: "test", baslik: "Birim testi · Doğru mu, yanlış mı?", sorular: [
    { soru: "📖 Bilgi, verinin işlenmiş hâlidir.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 İşlenmiş bilgiye enformasyon denir.", secenekler: ["Doğru", "Yanlış"], dogru: 1 },
    { soru: "📖 Aynı tablo, farklı grafikler kullanılarak görselleştirilebilir.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 Grafik, veri görselleştirme yollarından biridir.", secenekler: ["Doğru", "Yanlış"], dogru: 0 },
    { soru: "📖 Kabarcık grafik türü en fazla iki özelliği görselleştirmek için kullanılır.", secenekler: ["Doğru", "Yanlış"], dogru: 1 }
  ]},

  { tur: "test", baslik: "Birim testi · Çoktan seçmeli", sorular: [
    { soru: "📖 Bir ölçümü ifade eden her değer hangi kavramla ifade edilir?", secenekler: ["Bilgi", "Bilişim", "Enformasyon", "Ölçüt", "Veri"], dogru: 4 },
    { soru: "📖 Hangisi nicel veri türüne örnektir?", secenekler: ["Kategorik", "Nominal", "Ratio", "Sıralı", "Sırasız"], dogru: 2 },
    { soru: "📖 Mezura ile öğrencilerin boyu ölçülerek toplanan veri kaynağına göre hangi türdür?", secenekler: ["Birincil", "İkincil", "Ölçülmüş", "Türetilmiş", "Üçüncül"], dogru: 0 },
    { soru: "📖 I) XYZ II) CSV III) JSON IV) XML. Hangileri veri dosyasıdır?", secenekler: ["Yalnız I", "Yalnız IV", "II ve III", "II, III ve IV", "I, II, III ve IV"], dogru: 3 },
    { soru: "📖 Veri kümesinin tablo olarak gösterilmesiyle ilgili hangisi doğrudur?", secenekler: ["Bir tabloda sadece bir değişken olur.", "Gözlem sayısı sütun sayısına eşittir.", "Satır sayısı kadar bağımlı değişken vardır.", "Tabloda sadece sayısal veri yer alır.", "Tablodaki sütunlar özellikleri ifade eder."], dogru: 4 },
    { soru: "📖 Ülkelerin dünya ekonomisindeki büyüklüklerini parça-bütün ilişkisiyle göstermek için hangi grafik kullanılır?", secenekler: ["Alan", "Çizgi", "Kabarcık", "Pasta", "Sütun"], dogru: 3 },
    { soru: "📖 Verideki dağılımın gruplandırılmış frekansını gösteren sütun grafiği hangisidir?", secenekler: ["Dalga", "Halka", "Histogram", "Şelale", "Venn"], dogru: 2 },
    { soru: "📖 Birden fazla grafiğin birlikte kullanıldığı grafik türü hangisidir?", secenekler: ["Bileşik", "Çoklu", "Eklenmiş", "İkili", "Küme"], dogru: 0 },
    { soru: "📖 Excel'de grafik eklemek için kullanılan menü hangisidir?", secenekler: ["Veri / Grafik ekle", "Oluştur / Grafik", "Grafik / Oluştur", "Grafik / Ekle", "Ekle / Grafik"], dogru: 4 },
    { soru: "📖 Farklı şirketlerin ürettiği ürünlerin dağılımını hiyerarşik olarak halka ve dilimlerle göstermek için hangi grafik kullanılır?", secenekler: ["Daire", "Güneş ışığı", "İkili", "Küme", "Pasta"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Aynı veri, başka grafik",
    metin: "4. Uygulamadaki buğday verisini Excel'de üç farklı grafikle çiz: sütun, çizgi, alan. Hangisi üretim ile tüketimin kesiştiği dönemi en net gösteriyor?" }

]};
