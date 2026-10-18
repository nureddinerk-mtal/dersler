// YPROJ · 44 · Varlık ilişki şeması ve gözden geçirme  (Kitap s. 163–166 · 32–34. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "Kitap web biriminde varlık ilişki diyagramlarını Sıra Sizde'lerde verir: Okul yönetimi (Eğitmen, Öğrenci, Kurs, Ders programı), Sigorta poliçesi yönetimi (Aracı, İlke, Poliçe sahibi, Lehdar), İnşaat yönetimi (Müşteri, Ham madde, Taslak, Çizim, Ödeme). Birim testi 4. soru: varlık ilişki diyagramında yamuk yoktur (dikdörtgen, elips, eşkenar dörtgen, düz çizgi). Öğrenci en az 3 varlıklı şemasını ve tablo tasarımını yapar; 34. hafta gözden geçirme ve <b>tasarım onayı</b>.",
    akis: ["VİŞ ve tablo tasarımı", "Gözden geçirme", "🧑‍🏫 Tasarım onayı"],
    hatalar: ["Kitaptaki Sıra Sizde VİŞ'leri birer alıştırma olarak SSMS'te kurdurulabilir; ama teslim edilen proje öğrencinin kendi şeması olmalı."] },
  { tur: "adim", baslik: "Varlık ilişki şeması ve tablolar", hafta: "32–34",
    kitap: { ozet: "Okul yönetimi gibi örnek şemalarda tablolar ve ilişkiler.", gorsel: { tip: "varlik", varliklar: [ { ad: "Eğitmen", alanlar: ["🔑 …"] }, { ad: "Kurs", alanlar: ["🔑 …", "🔗 eğitmen"] }, { ad: "Öğrenci", alanlar: ["🔑 …"] }, { ad: "Ders programı", alanlar: ["🔑 …", "🔗 kurs", "🔗 öğrenci"] } ] }, sayfa: "s. 163" },
    sen: { gorsel: { tip: "varlik", varliklar: [ { ad: "…", alanlar: ["🔑 …ID int identity", "… nvarchar(50)"] }, { ad: "…", alanlar: ["🔑 …ID", "🔗 …ID"] }, { ad: "…", alanlar: ["🔑 …ID", "…"] } ], iliskiler: ["… 1 ─ n …"] },
      adimlar: ["En az 3 varlık; birincil ve yabancı anahtarları göster.", "Her alanın SQL Server veri türünü yaz (int, nvarchar, decimal, datetime, bit).", "Gözden geçir: her gereksinim bir tabloda ve sayfada karşılanıyor mu?"] },
    teslim: { dosya: "P3-44_varlik-iliski" },
    onay: "Tasarım dosyalarını hocana göster: tasarım onayı almadan kodlamaya geçme." }
]};
