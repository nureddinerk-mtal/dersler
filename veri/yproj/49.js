// YPROJ · 49 · Türkçe arayüz  (Kitap s. 179–183 · 37. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "9. Uygulama: sütun başlıkları model üzerinde düzeltilir: Etercih.cs'te özelliklerin üstüne <code>[DisplayName(\"Kullanıcı Numarası\")]</code> (System.ComponentModel). Sıra Sizde: TercihSecenekleri.cs. 10. Uygulama: Views/Etercihs/Index.cshtml'de ‘Create New’, ‘Edit’, ‘Details’, ‘Delete’ → ‘Yeni Oluştur’, ‘Değiştir’, ‘Ayrıntılar’, ‘Sil’. CSHTML: C#, ASP.NET etiketleri ve HTML bir arada.",
    akis: ["Model: DisplayName", "View: buton ve bağlantı metinleri", "Bütün tablolarda tekrarla"],
    hatalar: ["DisplayName için dosyanın başına <code>using System.ComponentModel;</code> eklenmeli.", "Scaffold'u tekrar çalıştırırsanız model dosyaları yeniden yazılır ve DisplayName'ler silinir: tasarım değişikliklerini Scaffold'dan önce bitirin."],
    kod: "using System.ComponentModel;\n\npublic partial class Urun\n{\n    [DisplayName(\"Ürün Numarası\")]\n    public int UrunId { get; set; }\n\n    [DisplayName(\"Ürün Adı\")]\n    public string UrunAdi { get; set; }\n}" },
  { tur: "adim", baslik: "Arayüzü Türkçeleştir", hafta: "37",
    kitap: { ozet: "Sütun başlıklarını modelde, bağlantı metinlerini View'de Türkçe yaptı.", gorsel: { tip: "ikili", sol: { baslik: "Önce", gorsel: { tip: "kartlar", kartlar: [ { ust: "KullaniciID · Aciklama" }, { ust: "Create New · Edit · Details · Delete" } ] } }, sag: { baslik: "Sonra", gorsel: { tip: "kartlar", kartlar: [ { ust: "Kullanıcı Numarası · Açıklama" }, { ust: "Yeni Oluştur · Değiştir · Ayrıntılar · Sil" } ] } }, ok: "➜" }, sayfa: "s. 179–183" },
    sen: { gorsel: { tip: "tarayici", adres: "https://localhost:7001/…", icerik: "<div style='font-family:Arial'><h3 style='margin:0'>… Listesi</h3><a href='#'>Yeni Oluştur</a><table border='1' cellpadding='4' style='border-collapse:collapse;margin-top:6px'><tr><th>Türkçe başlık</th><th>Türkçe başlık</th><th></th></tr><tr><td>…</td><td>…</td><td><a href='#'>Değiştir</a> | <a href='#'>Ayrıntılar</a> | <a href='#'>Sil</a></td></tr></table></div>" },
      adimlar: ["Her model sınıfında özelliklere DisplayName ekle.", "Her tablonun Index, Create, Edit, Details, Delete sayfalarındaki İngilizce metinleri Türkçe yap.", "F5 ile bütün sayfaları kontrol et."] },
    teslim: { dosya: "P3-49_turkce", liste: ["Sütun başlıklarının değiştiğini gösterdim.", "Bağlantı ve buton metinleri Türkçe."] } }
]};
