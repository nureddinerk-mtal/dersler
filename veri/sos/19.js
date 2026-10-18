// SOS · 19 · Grafik çeşitleri 1: sütun, çubuk, çizgi, pasta, halka, alan, XY, kabarcık, hisse senedi  (Kitap s. 138–149)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.5: Grafik, verinin örüntü ve eğilimlerini göstermenin en yaygın yolu; veri türüne (kategorik/sayısal) uygun grafik seçilmeli. <b>Sütun/çubuk</b>: kategorileri karşılaştırma, zamana bağlı değişim; dikeyse sütun, yataysa çubuk (Sıra Sizde: örnek bul). <b>Çizgi</b>: zamana bağlı değişim, artış-azalış; birden çok değişken (vefat 2015–2019; buğday üretim-tüketim) (Sıra Sizde: sütun/çubuk ile çizginin üstünlükleri; elma üretimi çizgi grafiği). <b>Pasta/halka</b>: bütün içinde payların oranı (hayvan yetiştiriciliği 2020: koyun diğerlerinin toplamından büyük) (Sıra Sizde: araç renkleri yüzde pasta). <b>Alan</b>: çizginin içi dolu; zamana göre değişimin büyüklüğü; yığın hâlinde bütünle karşılaştırma (orman yangınları) (Sıra Sizde: yangın sayısı ve yanan alan için grafik türleri). <b>XY dağılım</b>: bir kaydın iki değişkeninin kesişimi; <b>kabarcık</b>: üçüncü değişken kabarcık büyüklüğü (yıl, yangın sayısı, yanan alan) (Sıra Sizde: kabarcığın güçlü/zayıf yönleri). <b>Hisse senedi</b>: açılış, en yüksek, en düşük, kapanış.",
    akis: ["Neden grafik?", "Sütun ve çubuk + Sıra Sizde", "Çizgi + 2 Sıra Sizde", "Pasta ve halka + Sıra Sizde", "Alan + Sıra Sizde", "XY ve kabarcık + Sıra Sizde", "Hisse senedi", "Test"],
    hatalar: ["Kitap Görsel 3.6 için “Tablo 3.3 kullanılarak doğum sayıları” diyor; doğum verisi Tablo 3.2'de (3.3 nüfus şablonu).", "Çubuk grafik açıklamasında “2015 yılı en altta” deniyor; veri 2016'dan başlıyor.", "Görsel 3.8 başlığında 2016–2019 yazıyor, veri 2015–2019.", "Görsel 3.15'in başlığı “alan grafiği” ama grafik kabarcık grafiği.", "Hisse senedi grafiği için kitapta veri yok; platformdaki mum grafiği örnek değerlerle çizildi.", "Araç renkleri Sıra Sizde'si (toplam 1000 araç) yüzde hesabını kolaylaştırır: beyaz %56, gri %22 …"],
    sorular: [["Pasta grafiğinde dilim sayısı çok olursa?", "Okunmaz; küçük dilimleri “Diğer”de toplayın ya da çubuk grafik kullanın."], ["Çizgi mi sütun mu?", "Zaman içinde değişim → çizgi; kategorileri karşılaştırma → sütun/çubuk (ikisi de zamanı gösterebilir)."]] },

  { tur: "bilgi", baslik: "Sütun grafik",
    gorsel: { tip: "grafik", tur: "sutun", baslik: "Türkiye'de doğum sayısı", etiketler: ["2016", "2017", "2018", "2019", "2020"], seriler: [{ ad: "Doğum sayısı", degerler: [1315423, 1298451, 1253981, 1186560, 1112859] }], xBaslik: "Yıl", kaynak: "TÜİK · Tablo 3.2" },
    metin: "Kategorileri karşılaştırır, zamana bağlı değişimi gösterir. Dikey: <b>sütun</b>, yatay: <b>çubuk</b>." },

  { tur: "bilgi", baslik: "Çubuk grafik",
    gorsel: { tip: "grafik", tur: "cubuk", baslik: "Türkiye'de doğum sayısı", etiketler: ["2016", "2017", "2018", "2019", "2020"], seriler: [{ degerler: [1315423, 1298451, 1253981, 1186560, 1112859] }], kaynak: "TÜİK" } },

  { tur: "odev", baslik: "Sıra Sizde · Sütun ve çubuk",
    metin: "İnternette sütun ve çubuk grafik örnekleri bul, arkadaşlarınla paylaş.",
    kitap: "s. 140" },

  { tur: "bilgi", baslik: "Çizgi grafik",
    gorsel: { tip: "grafik", tur: "cizgi", baslik: "Buğday üretimi ve tüketimi (bin ton)", etiketler: ["2015-16", "2016-17", "2017-18", "2018-19", "2019-20"], seriler: [{ ad: "Üretim", degerler: [22600, 20600, 21500, 20000, 19000] }, { ad: "Tüketim", degerler: [18795, 18756, 18187, 18805, 20070] }], kaynak: "Tarım ve Orman Bakanlığı · Tablo 3.5" },
    metin: "Zamana bağlı değişimi çizgiyle gösterir; birden çok değişken birlikte çizilebilir.",
    not: "2019-20'de tüketim üretimi geçmiş: çizgiler kesişiyor." },

  { tur: "odev", baslik: "Sıra Sizde · Çizgi grafik",
    metin: "1) Sütun-çubuk ve çizgi grafiklerin kullanıldığı alanları ve birbirine üstünlüklerini araştır. 2) Türkiye'nin yıllık elma üretimi verisini bul; yıl ve üretim kesişimlerini işaretleyip noktaları birleştirerek çizgi grafik çiz.",
    kitap: "s. 141, 143" },

  { tur: "bilgi", baslik: "Pasta ve halka",
    gorsel: { tip: "ikili",
      sol: { baslik: "Pasta", gorsel: { tip: "grafik", tur: "pasta", etiketler: ["Sığır", "Manda", "Koyun", "Keçi"], seriler: [{ degerler: [18426219, 188771, 42712580, 12350811] }] } },
      sag: { baslik: "Halka", gorsel: { tip: "grafik", tur: "halka", etiketler: ["Sığır", "Manda", "Koyun", "Keçi"], seriler: [{ degerler: [18426219, 188771, 42712580, 12350811] }], kaynak: "Tablo 3.6" } },
      ok: "·" },
    metin: "Hayvan yetiştiriciliği 2020 (baş). Bir bütün içindeki <b>payları</b> gösterir. Koyun dilimi diğerlerinin toplamından büyük." },

  { tur: "odev", baslik: "Sıra Sizde · Araç renkleri",
    metin: "Satılan araçların renk dağılımını yüzde olarak gösteren pasta grafik çiz. Önce her rengin yüzdesini bul.",
    gorsel: { tip: "tablo", sutunlar: ["Renk", "Miktar"], satirlar: [["Beyaz", "560"], ["Gri", "220"], ["Siyah", "70"], ["Kırmızı", "60"], ["Mavi", "50"], ["Sarı", "22"], ["Kahverengi", "14"], ["Diğer", "4"]] },
    kitap: "s. 145 · Tablo 3.7" },

  { tur: "bilgi", baslik: "Alan grafiği",
    gorsel: { tip: "grafik", tur: "alan", baslik: "Orman yangınlarında yanan alan (ha)", etiketler: ["2016", "2017", "2018", "2019", "2020"], seriler: [{ ad: "Yanan alan", degerler: [9156, 11993, 5644, 11332, 20938], renk: "#eb5757" }], kaynak: "Tarım ve Orman Bakanlığı · Tablo 3.8" },
    metin: "İçi doldurulmuş çizgi grafik: zamana göre değişimin <b>büyüklüğü</b>." },

  { tur: "odev", baslik: "Sıra Sizde · Orman yangınları",
    metin: "Yangın sayısı ve yanan alan miktarı için hangi grafik türleri kullanılabilir? Araştır, listele.",
    gorsel: { tip: "tablo", sutunlar: ["Orman yangını sayısı", "Yanan alan miktarı"], satirlar: [["Çizgi grafiği", "Alan grafiği"], ["…", "…"], ["…", "…"]] },
    kitap: "s. 147" },

  { tur: "bilgi", baslik: "XY dağılım ve kabarcık",
    gorsel: [
      { tip: "grafik", tur: "dagilim", baslik: "XY dağılım: yangın sayısı", xYil: true, noktalar: [{ x: 2016, y: 3188 }, { x: 2017, y: 2411 }, { x: 2018, y: 2167 }, { x: 2019, y: 2688 }, { x: 2020, y: 3350 }], xBaslik: "Yıl", yBaslik: "Yangın sayısı" },
      { tip: "grafik", tur: "kabarcik", baslik: "Kabarcık: büyüklük = yanan alan", xYil: true, noktalar: [{ x: 2016, y: 3188, r: 9156 }, { x: 2017, y: 2411, r: 11993 }, { x: 2018, y: 2167, r: 5644 }, { x: 2019, y: 2688, r: 11332 }, { x: 2020, y: 3350, r: 20938 }], xBaslik: "Yıl", yBaslik: "Yangın sayısı", kaynak: "Tablo 3.8" } ],
    metin: "XY: iki değişkenin kesişimi nokta. Kabarcık: <b>üçüncü</b> değişken kabarcığın büyüklüğü." },

  { tur: "odev", baslik: "Sıra Sizde · Kabarcık",
    metin: "Kabarcık grafiğinin kullanıldığı alanları araştır; diğer grafiklere göre güçlü ve zayıf yönlerini tartış.",
    kitap: "s. 148" },

  { tur: "bilgi", baslik: "Hisse senedi grafiği",
    gorsel: { tip: "grafik", tur: "hisse", baslik: "Bir hissenin günlük değeri (örnek değerler)", etiketler: ["Pzt", "Sal", "Çar", "Per", "Cum"], mumlar: [{ a: 20, y: 23, d: 19, k: 22 }, { a: 22, y: 24, d: 21, k: 21.5 }, { a: 21.5, y: 22, d: 19.5, k: 20 }, { a: 20, y: 22.5, d: 19.8, k: 22.2 }, { a: 22.2, y: 25, d: 22, k: 24.5 }] },
    metin: "Açılış, en yüksek, en düşük, kapanış. 🟩 kapanış > açılış · 🟥 kapanış < açılış." },

  { tur: "test", sorular: [
    { soru: "Bir bütün içindeki payları göstermek için hangi grafik uygundur?", secenekler: ["Çizgi", "XY dağılım", "Pasta", "Hisse senedi"], dogru: 2 },
    { soru: "Zaman içindeki artış ve azalışı göstermek için en uygun grafik hangisidir?", secenekler: ["Kabarcık", "Pasta", "Halka", "Çizgi"], dogru: 3 },
    { soru: "Kabarcık grafiğinde kabarcığın büyüklüğü neyi gösterir?", secenekler: ["Üçüncü bir değişkeni", "Yılı", "Rengi", "Kaynağı"], dogru: 0 },
    { soru: "Çizgi grafiğin içinin renk veya desenle doldurulmuş şekli hangisidir?", secenekler: ["Halka grafiği", "Çubuk grafiği", "Alan grafiği", "Radar grafiği"], dogru: 2 },
    { soru: "Buğday grafiğine göre tüketim hangi dönemde üretimi geçmiştir?", secenekler: ["2015-16", "2019-20", "2018-19", "2016-17"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Yanıltan grafik",
    metin: "Doğum sayısı sütun grafiğinde dikey eksen 0'dan değil 1.100.000'den başlasaydı 2020 sütunu neredeyse yok olmuş gibi görünürdü; oysa düşüş yalnızca %15. Haberlerde ya da reklamlarda ekseni sıfırdan başlamayan bir grafik bul. Ne izlenimi veriyor?" }

]};
