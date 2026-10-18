// YPROJ · 11 · Veri tabanı tasarımı, teknik ve yöntemler, gözden geçirme  (Kitap s. 24, 58–59 · 7. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "2.2.5: Kaydedilecek bilgilerin özelliklerine uygun veri türleri; benzersiz (UNIQUE), boş bırakılamaz (NOT NULL), birincil anahtar (PK, AUTO INCREMENT), yabancı anahtar (FK) belirlenir. Stok Takip kuralları: aynı adla iki ürün / kategori olmaz; tedarikçinin firma adı, telefon, mail benzersiz; bir telefon tek müşteriye ait; personelin kullanıcı adı ve telefonu benzersiz. Fiyatlar DECIMAL(10,2), tarih DATETIME. 2.2.6: Visual Studio Community, C#, MySQL, Entity Framework Database First (ORM). Tasarımın gözden geçirilmesi: kodlamadan önce hatalar düzeltilir; sonradan dönmek pahalı. Burada <b>tasarım onayı</b> verilir.",
    akis: ["Veri türleri ve kısıtlar", "Kitaptaki veri tabanı tasarımı", "Kendi tabloların", "Teknik ve yöntemler", "Gözden geçirme", "🧑‍🏫 Tasarım onayı"],
    hatalar: ["Telefonu INT yapmak: VARCHAR olmalı (başında 0, boşluk).", "Para için FLOAT: DECIMAL(10,2) kullanılır.", "FK sütunlarını unutmak; VİŞ'teki her 1-n ilişki ‘n’ tarafında bir FK olur.", "Onay öncesi kontrol: tablolar ≥5, ana işlem + detayı, roller, giriş tablosu."] },
  { tur: "adim", baslik: "Veri tabanı tasarımı", hafta: "7",
    kitap: { ozet: "Stok Takip'in 8 tablosunu türleri ve kısıtlarıyla yazdı.", gorsel: { tip: "varlik", varliklar: [
      { ad: "URUNLER", alanlar: ["🔑 urun_kodu INT AI", "urun_adi VARCHAR UNIQUE", "🔗 kategori_id INT", "🔗 tedarikci_id INT", "stok_adedi INT", "fiyat DECIMAL(10,2)", "aciklama VARCHAR"] },
      { ad: "SATISLAR", alanlar: ["🔑 satis_id INT AI", "🔗 musteri_id INT", "🔗 personel_id INT", "islemTarihi DATETIME", "not VARCHAR"] },
      { ad: "SATIS_DETAYLARI", alanlar: ["🔑 satis_detay_id INT AI", "🔗 satis_id INT", "🔗 urun_kodu INT", "miktar INT", "fiyat DECIMAL(10,2)"] },
      { ad: "PERSONELLER", alanlar: ["🔑 id INT AI", "ad, soyad VARCHAR", "telefon VARCHAR UNIQUE", "kullanici_adi VARCHAR UNIQUE", "sifre VARCHAR", "🔗 yetki_id INT"] },
      { ad: "YETKILER", alanlar: ["🔑 yetki_id INT AI", "yetki_adi VARCHAR UNIQUE"] },
      { ad: "+3 tablo", alanlar: ["KATEGORILER", "TEDARIKCILER", "MUSTERILER"] } ] }, sayfa: "s. 58–59" },
    sen: { metin: "Her tablonun alanlarını; veri türünü, PK, FK, UNIQUE, NOT NULL bilgisini yaz.", gorsel: { tip: "tablo", sutunlar: ["Tablo", "Alan", "Tür", "PK / FK", "UNIQUE", "NOT NULL"], satirlar: [["…", "…_id", "INT AI", "PK", "", "✓"], ["…", "…", "VARCHAR(45)", "", "…", "…"], ["…", "…_id", "INT", "FK → …", "", "✓"]] } },
    teslim: { dosya: "P1-11_veritabani-tasarim" } },
  { tur: "adim", baslik: "Teknik ve yöntemler", hafta: "7",
    kitap: { ozet: "Kullanılacak araçları belirledi.", gorsel: { tip: "kartlar", kartlar: [ { ust: "Visual Studio Community" }, { ust: "C#" }, { ust: "MySQL" }, { ust: "Entity Framework", alt: "Database First" } ] }, sayfa: "s. 59" },
    sen: { metin: "Aynı araçları kullan; raporunun Araçlar ve Yöntemler bölümüne yaz." },
    teslim: { dosya: "P1-03_rapor", liste: ["Raporun Araçlar ve Yöntemler bölümüne araçları yazdım."] } },
  { tur: "adim", baslik: "Tasarımı gözden geçir", hafta: "7",
    sen: { metin: "Kodlamaya geçmeden kontrol et; hata varsa şimdi düzelt.", gorsel: { tip: "tablo", sutunlar: ["Kontrol", "✓"], satirlar: [["Her gereksinim bir ekranda karşılanıyor mu?", ""], ["VİŞ'teki her ilişkinin FK'si var mı?", ""], ["Benzersiz ve zorunlu alanlar belli mi?", ""], ["Ana işlem ve detay tablosu var mı?", ""], ["Giriş için kullanıcı ve rol tablosu var mı?", ""]] } },
    onay: "Hocana tasarım dosyalarını göster: tasarım onayı almadan kodlamaya geçme." }
]};
