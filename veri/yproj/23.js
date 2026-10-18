// YPROJ · 23 · Bakım: yeni özellik ekle  (Kitap s. 45, 100–103 · 12. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "1.2.5 Bakım: yayından sonraki hataları gidermek, müşteri isteğiyle iyileştirmek, işlev eklemek; iyi tasarlanmış ürünün bakımı kolaydır. Stok Takip bakımı: ‘Stoku Azalan Ürünler’ sayfası (stok < 20 listelenir; txtAraUrunAdi, nmrStokAdedi, btnStokGuncelle, grdStokuAzalanUrunler; arama ve stok güncelleme). Sıra Sizde: satış detaylarında müşteri adı, personel adı ve tarihe göre arama (GroupBox, TextBox, DateTimePicker). Bakımdan sonra yeniden test ve setup. Öğrenci kendi projesine iki bakım özelliği ekler: bir rapor/uyarı sayfası ve ana işlem kayıtlarında çok ölçütlü arama.",
    akis: ["Bakım nedir?", "Uyarı / rapor sayfası", "Çok ölçütlü arama", "Yeniden test ve setup"] },
  { tur: "adim", baslik: "Bakım: iki yeni özellik", hafta: "12",
    kitap: { ozet: "Stoku azalan ürünler sayfası ve satışlarda arama ekledi.", gorsel: { tip: "ikili",
      sol: { baslik: "Stoku azalan ürünler", gorsel: { tip: "pencere", baslik: "Stoku Azalan Ürünler", satirlar: [ { etiket: "Ara", deger: "" }, { tablo: { sutunlar: ["Ürün", "Stok"], satirlar: [["…", "12"], ["…", "7"]] } }, { etiket: "Yeni stok", deger: "0 ⇕" } ], dugmeler: ["GÜNCELLE"] } },
      sag: { baslik: "Satışlarda arama", gorsel: { tip: "pencere", baslik: "Satış Detayları", satirlar: [ { etiket: "Müşteri", deger: "" }, { etiket: "Personel", deger: "" }, { etiket: "Tarih", deger: "📅" } ] } }, ok: "·" }, sayfa: "s. 100–103" },
    sen: { adimlar: ["Projene bir uyarı ya da rapor sayfası ekle (bir sınırın altında / üstünde kalan kayıtlar gibi).", "Ana işlem kayıtlarında en az üç ölçüte göre arama ekle (biri tarih).", "Yeniden test et, setup'ı yeniden al."] },
    teslim: { dosya: "P1-23_bakim", liste: ["Arama bölümünü ekledim.", "Her ölçütün değişiminde arama metodu çalışıyor.", "Aramayı test ettim."] } }
]};
