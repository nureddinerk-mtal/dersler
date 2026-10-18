// YPROJ · 12 · Veri tabanını oluştur  (Kitap s. 28, 59 · 8. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "2.3.1: Kodlamanın ilk işi veri tabanı (kitapta stok_takip_db), tablolar ve ilişkiler (MySQL Workbench). Tabloları tasarımdaki türler ve kısıtlarla oluşturur; FK ilişkilerini kurar (Workbench'te EER Diagram ile görülebilir). Kodlama aşamasında yapılanlar (s. 28): veri tabanı ve tablolar, sınıflar, CRUD kodları, arayüzler, arka plan kodları, olağan dışı durum çözümleme, her bölümü test. Not (s. 41): yayından önce id'ler 1'den başlasın isteniyorsa TRUNCATE TABLE.",
    akis: ["Kodlama aşamasında neler yapılır?", "Workbench'te veri tabanı", "Tablolar ve FK", "İlişki diyagramının ekran görüntüsü"],
    hatalar: ["Deep Freeze'li makinede veri tabanı her açılışta silinir: MySQL veri klasörünü Thawed (donmamış) sürücüye alın ya da öğrenciler her ders sonunda Data Export ile .sql yedeğini Drive'a yüklesin (22. konu).", "Tablo adlarında Türkçe karakter ve boşluk kullanmayın (kitapta stok_takip_db, satis_detay_id).", "Yetkiler gibi sabit kayıtları (Yönetici, Personel) Workbench'ten elle ekletin (kitap s. 79)."] },
  { tur: "bilgi", baslik: "Kodlama aşamasında",
    gorsel: { tip: "akis", adimlar: [ { simge: "🗄️", yazi: "Veri tabanı ve tablolar" }, { simge: "🧱", yazi: "Sınıflar" }, { simge: "✏️", yazi: "Ekle, sil, güncelle, listele" }, { simge: "🖼️", yazi: "Arayüzler ve arka plan kodu" }, { simge: "🛡️", yazi: "Hata yakalama" }, { simge: "🧪", yazi: "Her parçayı test et" } ] } },
  { tur: "adim", baslik: "Veri tabanını oluştur", hafta: "8",
    kitap: { ozet: "MySQL'de stok_takip_db, 8 tablo ve ilişkileri oluşturdu.", sayfa: "s. 59" },
    sen: { metin: "11. adımdaki tasarımına birebir uy.", gorsel: { tip: "pencere", baslik: "MySQL Workbench", sol: ["Schemas", "▾ projem_db*", "  ▸ Tables", "  ▸ Views"], satirlar: [ { tablo: { sutunlar: ["Column", "Datatype", "PK", "NN", "UQ", "AI"], satirlar: [["…_id", "INT", "☑", "☑", "", "☑"], ["…", "VARCHAR(45)", "", "☑", "☑", ""], ["…_id", "INT", "", "☑", "", ""]] } } ] },
      adimlar: ["Workbench'te <code>projeadi_db</code> adlı şemayı oluştur.", "Tabloları türleri, PK, NN, UQ, AI ayarlarıyla oluştur.", "Foreign Keys sekmesinde ilişkileri kur.", "Sabit kayıtları (roller) elle ekle.", "Database → Reverse Engineer ile ilişki diyagramını aç, ekran görüntüsü al."] },
    teslim: { dosya: "P1-12_veritabani", liste: ["Veri tabanını oluşturdum.", "Veri tabanı tablolarını oluşturdum.", "İlişki diyagramının ekran görüntüsünü yükledim."] } }
]};
