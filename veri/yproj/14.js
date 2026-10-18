// YPROJ · 14 · İlk tablo formu  (Kitap s. 63–66 · 9. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "Önce başka tablolara bağlı olmayan yardımcı tablo yapılır (kitapta kategori: ürün eklenmeden önce kategori ve tedarikçi kayıtlı olmalı). frmKategoriIslemleri: txtKategoriAdi, btnYeni, btnEkle, btnSil, btnGuncelle, grdKategoriler. DataGridView ayarları: SelectionMode FullRowSelect, MultiSelect False, AutoSizeColumnsMode Fill; grid üzerinde ekleme-silme-düzenleme kapalı. Load olayında listele; satır seçilince kutulara aktar; EKLE, SİL, GÜNCELLE olayları. DbContext <i>using</i> içinde kullanılır (s. 87 Not).",
    akis: ["Hangi tablo ilk?", "Form nesneleri ve adları", "DataGridView ayarları", "Listele, seç, ekle, sil, güncelle", "Test"],
    hatalar: ["Nesne adlarını değiştirmemek (button1, textBox1): kitaptaki ön ek kuralı (txt, btn, grd, cmb, msk, nmr) kullanılmalı.", "Silme/güncellemeden önce satır seçili mi kontrol etmemek → hata."] },
  { tur: "adim", baslik: "Yardımcı tablo formu", hafta: "9",
    kitap: { ozet: "Kategori İşlemleri formunda ekle, sil, güncelle, listele yaptı.", gorsel: { tip: "pencere", baslik: "Kategori İşlemleri", satirlar: [ { etiket: "Kategori adı", deger: "" }, { tablo: { sutunlar: ["kategori_id", "kategori_adi"], satirlar: [["1", "…"], ["2", "…"]] } } ], dugmeler: ["YENİ", "EKLE", "SİL", "GÜNCELLE"] }, sayfa: "s. 63–66" },
    sen: { metin: "Başka tabloya bağlı olmayan bir tablonla başla.", gorsel: { tip: "pencere", baslik: "… İşlemleri", satirlar: [ { etiket: "…", deger: "" }, { tablo: { sutunlar: ["…", "…"], satirlar: [["…", "…"]] } } ], dugmeler: ["YENİ", "EKLE", "SİL", "GÜNCELLE"], vurgu: "EKLE" },
      adimlar: ["Formu ekle, nesnelere ön ekli adlar ver (txt…, btn…, grd…).", "DataGridView: FullRowSelect, MultiSelect False, Fill; grid üzerinde düzenleme kapalı.", "Load: kayıtları listele.", "Satır seçilince bilgiyi kutuya aktar.", "EKLE, SİL, GÜNCELLE, YENİ butonlarını kodla, her birini dene."] },
    teslim: { dosya: "P1-14_ilk-form", liste: ["Formun çalışırken ekran görüntüsü", "Ekle, sil, güncelle, listele çalışıyor."] } }
]};
