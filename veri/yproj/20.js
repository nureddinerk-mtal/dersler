// YPROJ · 20 · Ana işlemin detayları ve iptal  (Kitap s. 91–94 · 11. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "frmSatisDetaylari: grdSatislar (solda) ve grdSatilanUrunler (sağda), txtSatisToplam (pasif), btnSatisIptal. Load'da satışlar listelenir; Hesapla metodu satış toplamını bulur; satış seçilince ürünleri listelenir; SATIŞ İPTAL: satış silinir, iptal edilen ürünlerin stoğu geri artırılır. Öğrenci ana işleminin kayıtlarını listeleyip iptal ettiren sayfayı yapar.",
    akis: ["İki listeli detay sayfası", "Seçince detayları göster", "İptal: kayıtları sil, etkilenen alanları geri al"],
    hatalar: ["İptalde detay kayıtlarını silmeden ana kaydı silmeye çalışmak (FK hatası): önce detaylar, sonra ana kayıt.", "Stok gibi etkilenen alanı geri almamak."] },
  { tur: "adim", baslik: "Ana işlem detayları", hafta: "11",
    kitap: { ozet: "Satışları listeledi, seçilen satışın ürünlerini gösterdi, iptal ettirdi.", gorsel: { tip: "pencere", baslik: "Satış Detayları", satirlar: [ { tablo: { sutunlar: ["Satış", "Müşteri", "Personel", "Tarih"], satirlar: [["…", "…", "…", "…"]] } }, { tablo: { sutunlar: ["Ürün", "Miktar", "Fiyat"], satirlar: [["…", "…", "…"]] } }, { etiket: "Satış toplamı", deger: "…" } ], dugmeler: ["SATIŞI İPTAL ET"] }, sayfa: "s. 91–94" },
    sen: { gorsel: { tip: "pencere", baslik: "… Detayları", satirlar: [ { tablo: { sutunlar: ["…", "…", "Tarih"], satirlar: [["…", "…", "…"]] } }, { tablo: { sutunlar: ["…", "…"], satirlar: [["…", "…"]] } } ], dugmeler: ["… İPTAL ET"] } },
    teslim: { dosya: "P1-20_detaylar", liste: ["İptalden sonra etkilenen alanların geri alındığını kontrol ettim."] } }
]};
