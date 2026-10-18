// YPROJ · 36 · Firebase'e kaydet  (Kitap s. 137–142 · 24. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "KayitActivity: fragmentleri tutar, İleri butonu pageNumber'a göre sonraki fragmenti açar ve değerleri alır; son sayfada AlertDialog ‘Kayıt etmek istiyor musunuz?’ → EVET: fotoğraf UUID adıyla Storage'a (images/uuid.jpg) yüklenir, indirme adresi alınır, HashMap'e tüm alanlar + gorselURL + kayitTarihi (FieldValue.serverTimestamp) konur, Firestore ‘YerKayit’ koleksiyonuna add; başarıda Toast ve ana sayfa, hatada Toast ile hata. Geri butonu önceki fragmente döner, ilk sayfada çıkış onayı.",
    akis: ["İleri / Geri ile fragment geçişi", "Kaydetmeden önce onay", "HashMap ile Firestore'a ekleme", "Başarı / hata mesajı"],
    hatalar: ["Kitap kodunda (s. 140–141) bir blok yanlışlıkla iki kez basılmış ve setNegativeButon / setPositiveButon yazım hatalı (doğrusu setNegativeButton / setPositiveButton). Öğrenciler kitaptan kopyalarsa derlenmez.", "Storage kullanılmıyorsa HashMap'e görsel adresi (URL) metin olarak eklenebilir."] },
  { tur: "adim", baslik: "Kaydı Firestore'a gönder", hafta: "24",
    kitap: { ozet: "Onay aldı, fotoğrafı Storage'a, bilgileri HashMap ile Firestore'a kaydetti.", gorsel: { tip: "akis", adimlar: [ { simge: "❓", yazi: "AlertDialog: kaydet?" }, { simge: "🖼️", yazi: "Storage'a fotoğraf", alt: "UUID adı" }, { simge: "🧺", yazi: "HashMap: alanlar + tarih" }, { simge: "🗄️", yazi: "Firestore: YerKayit" }, { simge: "✅", yazi: "Toast, ana sayfa" } ] }, sayfa: "s. 137–142" },
    sen: { gorsel: { tip: "tarayici", adres: "console.firebase.google.com · Firestore Database", icerik: "<div style='font-family:Arial'><b>koleksiyonum</b> ▸ 7f3a…<br><span style='color:#555'>alan1: \"…\"<br>alan2: \"…\"<br>kayitTarihi: 18 Ekim 2026</span></div>" },
      adimlar: ["Kaydet butonunda AlertDialog ile onay al.", "Bilgileri HashMap'e koy, kayıt tarihini ekle.", "Firestore'daki koleksiyonuna ekle; başarı ve hata için Toast göster.", "Firebase panelinde kaydın geldiğini kontrol et."] },
    teslim: { dosya: "P2-36_kaydet", liste: ["Firestore panelinde kaydın göründüğü ekran görüntüsü"] } }
]};
