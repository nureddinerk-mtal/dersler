// YPROJ · 35 · Kayıt ekranları (fragmentler)  (Kitap s. 133–137 · 23. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "FotoKayitFragment: ImageView tıklanınca galeri izni kontrol edilir; gerekirse Snackbar ile açıklama ve izin isteği (ActivityResultLauncher RequestPermission); izin varsa ACTION_PICK ile galeri, sonuç imageData (Uri) olarak ImageView'e. TrBilgiFragment: yer adı, ülke, şehir, tarihçe, hakkında EditText'leri (public static); geri dönülünce KayitActivity'deki değerleri tekrar ekrana getirir (veriEkranaGetir). EngBilgiFragment: İngilizce alanlar. Öğrenci kendi ekleme ekranını bir ya da birden çok fragmentle yapar.",
    akis: ["Fragment nedir?", "Galeri izni ve seçim", "Bilgi giriş fragmentleri", "Geri dönünce bilgiler kaybolmasın"],
    hatalar: ["Fragment geçişinde girilen bilgilerin kaybolması: kitaptaki gibi değerleri activity'de saklayıp geri dönüşte doldurun.", "Galeri izni Android 13+ için farklı (33. konu notu)."] },
  { tur: "adim", baslik: "Ekleme ekranları", hafta: "23",
    kitap: { ozet: "Fotoğraf, Türkçe ve İngilizce bilgiler için üç fragment yaptı.", gorsel: { tip: "akis", adimlar: [ { simge: "🖼️", yazi: "FotoKayitFragment", alt: "galeri izni, seçim" }, { simge: "🇹🇷", yazi: "TrBilgiFragment" }, { simge: "🇬🇧", yazi: "EngBilgiFragment" } ] }, sayfa: "s. 133–137" },
    sen: { gorsel: { tip: "telefon", geri: true, baslik: "… Ekle", satirlar: [ { etiket: "…", deger: "" }, { etiket: "…", deger: "" }, { etiket: "…", deger: "" } ], alt: ["Geri", "İleri"] } },
    teslim: { dosya: "P2-35_ekleme-ekranlari", liste: ["Ekleme ekranlarının çalışırken ekran görüntüsü", "Geri dönünce girilen bilgiler kaybolmuyor."] } }
]};
