// YPROJ · 10 · Kullanıcı arayüzü taslakları  (Kitap s. 26, 57–58 · 7. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "Arayüzler kodlamayı kolaylaştırmak için tasarımda taslak olarak çizilir. Stok Takip: Ana sayfa (üstte menüler; solda ürün listesi; sağda satılacak ürünler, müşteri seçimi; satış burada yapılır), Satış Detayları (solda satışlar, sağda seçilen satışın ürünleri, SATIŞI İPTAL ET), diğer sayfalar (Kategori, Tedarikçi, Müşteri, Personel, Ürün) aynı yapıda: üstte bilgi girişi ve butonlar, altta DataGridView. Öğrenci her formunun taslağını kâğıtta ya da araçla çizer (Sıra Sizde: arayüz tasarımı).",
    akis: ["Ana sayfa taslağı", "Ana işlem detay sayfası", "Kayıt sayfaları ortak yapı", "Kendi taslakların"],
    hatalar: ["Taslağı Visual Studio'da çizmeye başlamak: önce kâğıt ya da draw.io; kodlama 8. haftada.", "Her tablo için bir kayıt formu + ana sayfa + ana işlem detayı + giriş formu sayısını kontrol edin."] },
  { tur: "adim", baslik: "Kayıt formları (ortak yapı)", hafta: "7",
    kitap: { ozet: "Kategori, tedarikçi, müşteri, personel, ürün formlarını aynı yapıda tasarladı.", gorsel: { tip: "pencere", baslik: "Tedarikçi İşlemleri", satirlar: [ { etiket: "Firma adı", deger: "" }, { etiket: "Yetkili", deger: "" }, { etiket: "Telefon", deger: "(___) ___ __ __" }, { tablo: { sutunlar: ["Firma", "Yetkili", "Telefon"], satirlar: [["…", "…", "…"]] } } ], dugmeler: ["YENİ", "EKLE", "SİL", "GÜNCELLE"] }, sayfa: "s. 58" },
    sen: { metin: "Her tablon için: üstte bilgi girişi ve butonlar, altta liste.", gorsel: { tip: "pencere", baslik: "… İşlemleri", satirlar: [ { etiket: "…", deger: "" }, { etiket: "…", deger: "" }, { tablo: { sutunlar: ["…", "…"], satirlar: [["…", "…"]] } } ], dugmeler: ["YENİ", "EKLE", "SİL", "GÜNCELLE"] } },
    teslim: { dosya: "P1-10_arayuz" } },
  { tur: "adim", baslik: "Ana sayfa ve ana işlem ekranları", hafta: "7",
    kitap: { ozet: "Ana sayfada menü ve satış; ayrı sayfada satış detayları ve iptal.", gorsel: { tip: "ikili",
      sol: { baslik: "Ana sayfa", gorsel: { tip: "pencere", baslik: "Ana Sayfa", menu: ["Tedarikçi", "Ürün", "Satış Detayları", "Müşteri", "Personel"], satirlar: [ { metin: "◧ Ürün listesi  │  Satılacak ürünler ◨" }, { etiket: "Müşteri tel.", deger: "" } ], dugmeler: ["EKLE", "SİL", "SATIŞ YAP"] } },
      sag: { baslik: "Satış detayları", gorsel: { tip: "pencere", baslik: "Satış Detayları", satirlar: [ { metin: "◧ Satışlar  │  Satılan ürünler ◨" } ], dugmeler: ["SATIŞI İPTAL ET"] } }, ok: "·" }, sayfa: "s. 57" },
    sen: { metin: "Ana sayfan: menüler + ana işlemin yapıldığı alan. Detay sayfan: ana işlemler ve detayları, iptal butonu. Giriş ekranını da çiz." },
    teslim: { dosya: "P1-10_arayuz", liste: ["Kullanıcı arayüzlerinin tasarımını yaptım."] } }
]};
