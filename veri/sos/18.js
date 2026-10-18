// SOS · 18 · Veri hazırlama: tablo  (Kitap s. 136–138)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.4: Veri kümesinin en kullanışlı gösterimi tablo: <b>sütunlar özellikler (değişkenler), satırlar gözlemler (kayıtlar)</b>. Tablo 3.2: 2016–2020 doğum sayıları (TÜİK 2021): 1.315.423 · 1.298.451 · 1.253.981 · 1.186.560 · 1.112.859; SN kayıt numarası; yorum: en yüksek 2016, en düşük 2020, sürekli azalış. 2. Uygulama (1 ders saati): TÜİK sitesinden 2016–2020 toplam nüfus → özet → Excel'de “Yıl” ve “Nüfus” sütunları → kayıtlar satır satır → Dosya / Farklı Kaydet → CSV. Cevap (TÜİK ADNKS): 2016: 79.814.871 · 2017: 80.810.525 · 2018: 82.003.882 · 2019: 83.154.997 · 2020: 83.614.362.",
    akis: ["Tablo: sütun = özellik, satır = kayıt", "Tablo 3.2'yi yorumla", "2. Uygulama: nüfus tablosu", "Test"],
    hatalar: ["TÜİK veri portalında (data.tuik.gov.tr) “Adrese Dayalı Nüfus Kayıt Sistemi Sonuçları” bülteninde yıllık nüfus var; arama zor olabilir, linki tahtaya yazın.", "Excel'de “Farklı Kaydet → CSV (virgülle ayrılmış)” Türkçe Windows'ta noktalı virgül kullanır; dosya Not Defteri'nde açılınca öğrencilere gösterin.", "Laboratuvarda Excel yoksa LibreOffice Calc ya da Google E-Tablolar aynı işi görür."],
    sorular: [["Neden SN sütunu var?", "Kayıt numarasıdır; bir özellik değil."], ["Yeni bir yıl eklersem ne olur?", "Yeni bir satır (kayıt) eklenir; sütunlar aynı kalır."]] },

  { tur: "bilgi", baslik: "Tablo",
    gorsel: { tip: "tablo", ad: "Tablo 3.2 · Türkiye'de doğum sayısı", sutunlar: ["SN", "Yıl", "Doğum Sayısı"], satirlar: [["1", "2016", "1.315.423"], ["2", "2017", "1.298.451"], ["3", "2018", "1.253.981"], ["4", "2019", "1.186.560"], ["5", "2020", "1.112.859"]] },
    metin: "<b>Sütun</b> = özellik (değişken) · <b>Satır</b> = kayıt (gözlem). Kaynak: TÜİK.",
    not: "Tablodan: en yüksek doğum 2016, en düşük 2020; doğum sayısı her yıl azalmış." },

  { tur: "uygulama", baslik: "2. Uygulama · Nüfus tablosu",
    metin: "TÜİK'ten 2016–2020 nüfusunu bul, Excel'de tablo yap, CSV kaydet.",
    gorsel: { tip: "pencere", baslik: "nufus.csv - Excel", menu: ["Dosya", "Giriş", "Ekle", "Sayfa Düzeni", "Formüller", "Veri"], satirlar: [ { tablo: { sutunlar: ["", "A", "B"], satirlar: [["1", "<b>Yıl</b>", "<b>Nüfus</b>"], ["2", "2016", "xx.xxx.xxx"], ["3", "2017", "xx.xxx.xxx"], ["4", "2018", "xx.xxx.xxx"], ["5", "2019", "xx.xxx.xxx"], ["6", "2020", "xx.xxx.xxx"]] } } ] },
    adimlar: ["TÜİK'in resmî sitesinden 2016–2020 toplam nüfusunu bul, not al.", "“2016 yılı toplam nüfus: …” biçiminde özetle.", "Excel'de iki sütun aç: <b>Yıl</b> ve <b>Nüfus</b>.", "Her kaydı bir satıra yaz (yıl ve nüfus aynı satırda).", "Dosya → Farklı Kaydet → <b>CSV</b>."],
    kitap: "s. 136–138 · 2. Uygulama" },

  { tur: "test", sorular: [
    { soru: "Tabloda sütunlar neyi ifade eder?", secenekler: ["Kaynakları", "Gözlemleri", "Toplamları", "Özellikleri"], dogru: 3 },
    { soru: "Tablo 3.2'ye göre doğum sayısı en düşük yıl hangisidir?", secenekler: ["2020", "2018", "2019", "2016"], dogru: 0 },
    { soru: "Tabloda her satır neyi gösterir?", secenekler: ["Bir grafiği", "Bir özelliği", "Bir kaydı", "Bir dosya türünü"], dogru: 2 },
    { soru: "Excel'de tabloyu CSV yapmak için hangi yol izlenir?", secenekler: ["Ekle → Grafik", "Dosya → Farklı Kaydet", "Giriş → Kalın", "Veri → Sırala"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Artış oranı",
    metin: "2. Uygulamadaki tabloya üçüncü bir sütun ekle: “Artış”. Her yıl için nüfus farkını bir önceki yıla göre Excel formülüyle hesapla (=B3-B2). En çok artış hangi yıl olmuş?" }

]};
