// YPROJ · 29 · Mantıksal tasarım: ilişkisel tablo diyagramı  (Kitap s. 115 · 16–17. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "3.2: Tasarım fiziksel (kullanıcıya görünen) ve mantıksal (sınıf yapıları, veri tabanı tasarımı) olarak ikiye ayrılır; kodlamadan önce genel hatlarıyla ortaya konur. Firebase tablolardan oluşmaz, veriyi JSON objeleri olarak tutar; çok büyük veri işlemlerinde kullanışsız olabilir. Bu yüzden kitap aynı uygulamayı önce SQL ilişkisel tablo diyagramı olarak tasarlar (Görsel 3.6), sonra Firebase yapısı (30). Sıra Sizde: Resim Galerisi için SQL tablo diyagramı → kendi projesi.",
    akis: ["Fiziksel / mantıksal tasarım", "Firebase neden farklı?", "Önce ilişkisel diyagram"],
    hatalar: ["Yıllık planda 16. hafta gereksinim analizi ve sistem modellemesi, 17. hafta varlık ilişki şeması; bu adım ikisini kapsar."] },
  { tur: "adim", baslik: "İlişkisel tablo diyagramı", hafta: "16–17",
    kitap: { ozet: "Uygulama SQL'de olsaydı tabloların ve ilişkilerin nasıl olacağını çizdi.", gorsel: { tip: "varlik", varliklar: [ { ad: "Yer", alanlar: ["🔑 id", "yer adı (TR, EN)", "ülke, şehir", "tarihçe, hakkında", "görsel adresi"] }, { ad: "Kullanıcı", alanlar: ["🔑 id", "e-posta", "şifre"] } ] }, sayfa: "s. 115" },
    sen: { metin: "Uygulamanın verisini tablolar ve ilişkilerle çiz.", gorsel: { tip: "varlik", varliklar: [ { ad: "…", alanlar: ["🔑 …", "…"] }, { ad: "…", alanlar: ["🔑 …", "🔗 …"] }, { ad: "Kullanıcı", alanlar: ["🔑 …", "e-posta"] } ], iliskiler: ["… 1 ─ n …"] } },
    teslim: { dosya: "P2-29_tablo-diyagrami", liste: ["SQL tabloları diyagramını oluşturdum.", "Tabloları ilişkilendirdim."] } }
]};
