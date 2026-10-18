// YPROJ · 16 · Bağlı tablolu form  (Kitap s. 70–74 · 9. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "frmUrunIslemleri: txtUrunAdi, txtAciklama, nmrStok (NumericUpDown), txtFiyat, cmbKategori, btnKategori, cmbTedarikci … Load'da ürünler ve ComboBox'lar (kategori, tedarikçi) listelenir; BilgiGirisKontrol; FormuTemizle; grid'den seçim; ComboBox yanındaki buton frmKategoriIslemleri'ni açar, form kapanınca bilgiler yeniden listelenir. Öğrenci FK içeren tablosunun formunu yapar.",
    akis: ["ComboBox'a başka tablodan veri", "NumericUpDown", "Yan formu açıp dönünce yenileme"],
    hatalar: ["ComboBox'a görünen adı (DisplayMember) ve id'yi (ValueMember) ayrı ayrı vermemek; kayıtta SelectedValue kullanılır.", "Fiyat kutusuna harf girişini engellememek (s. 60 Not)."] },
  { tur: "adim", baslik: "Yabancı anahtarlı tablo formu", hafta: "9",
    kitap: { ozet: "Ürün formunda kategori ve tedarikçiyi ComboBox'tan seçtirdi.", gorsel: { tip: "pencere", baslik: "Ürün İşlemleri", satirlar: [ { etiket: "Ürün adı", deger: "" }, { etiket: "Kategori", deger: "▼ … [+]" }, { etiket: "Tedarikçi", deger: "▼ …" }, { etiket: "Stok", deger: "0 ⇕" }, { etiket: "Fiyat", deger: "" } ], dugmeler: ["YENİ", "EKLE", "SİL", "GÜNCELLE"] }, sayfa: "s. 70–74" },
    sen: { metin: "FK alanlarını ComboBox'tan seçtir; [+] butonu ilgili formu açsın.", gorsel: { tip: "pencere", baslik: "… İşlemleri", satirlar: [ { etiket: "…", deger: "" }, { etiket: "… (FK)", deger: "▼ … [+]" }, { etiket: "… (sayı)", deger: "0 ⇕" } ], dugmeler: ["YENİ", "EKLE", "SİL", "GÜNCELLE"] } },
    teslim: { dosya: "P1-16_bagli-form", liste: ["ComboBox'lar diğer tablolardan doluyor.", "[+] ile açılan form kapanınca liste yenileniyor."] } }
]};
