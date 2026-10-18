// YPROJ · 15 · Bilgi kontrollü formlar  (Kitap s. 66–70, 74–78 · 9. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "Tedarikçi (txtFirmaAdi, txtYetkiliAdi, txtAdres, mskTelefon, txtMail …) ve Müşteri (txtAdSoyad, txtFirmaAdi, txtAdres, mskTelefon, txtMail …) formları. Yeni olanlar: <b>BilgiGirisKontrol</b> metodu (ekle ve güncellemeden önce zorunlu alanlar ve geçerlilik), <b>FormuTemizle</b> metodu (işlemden sonra ve YENİ butonunda), MaskedTextBox ile telefon formatı. Öğrenci aynı yapıyı birden çok alanlı tablolarında uygular.",
    akis: ["MaskedTextBox", "BilgiGirisKontrol", "FormuTemizle", "Diğer tablolarına uygula"],
    hatalar: ["Kontrol metodunu her butona kopyalamak: tek metot, gerekli yerde çağrılır (etkin kod stili).", "MaskedTextBox'ın boş değeri maskeli metin döndürür (“(   )    ”); kontrolde MaskCompleted kullanılabilir."] },
  { tur: "adim", baslik: "Bilgi kontrollü kayıt formları", hafta: "9",
    kitap: { ozet: "Tedarikçi ve Müşteri formlarına giriş kontrolü ve temizleme metodu ekledi.", gorsel: { tip: "kartlar", kartlar: [ { ust: "BilgiGirisKontrol()", alt: "zorunlu alanlar, geçerlilik" }, { ust: "FormuTemizle()", alt: "işlemden sonra, YENİ'de" }, { ust: "mskTelefon", alt: "MaskedTextBox" } ] }, sayfa: "s. 66–70, 74–78" },
    sen: { metin: "Çok alanlı tabloların için formları yap.", gorsel: { tip: "pencere", baslik: "… İşlemleri", satirlar: [ { etiket: "…", deger: "" }, { etiket: "Telefon", deger: "(___) ___ __ __" }, { metin: "⚠️ Zorunlu alanları doldurun." }, { tablo: { sutunlar: ["…", "…", "…"], satirlar: [["…", "…", "…"]] } } ], dugmeler: ["YENİ", "EKLE", "SİL", "GÜNCELLE"] },
      adimlar: ["Formları ilk formdaki gibi kur.", "BilgiGirisKontrol metodunu yaz; EKLE ve GÜNCELLE'de çağır.", "FormuTemizle metodunu yaz; işlemlerden sonra ve YENİ'de çağır.", "Boş ve hatalı girişlerle dene."] },
    teslim: { dosya: "P1-15_formlar", liste: ["Uyarı mesajının göründüğü ekran görüntüsü", "Her form ekle, sil, güncelle, listele yapıyor."] } }
]};
