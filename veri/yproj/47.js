// YPROJ · 47 · Bağlantı dizesi ve Scaffolding  (Kitap s. 171–174 · 36. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "5. Uygulama: View → Server Explorer → Data Connections sağ tık → Add Connection → sunucu ve veri tabanı → Test Connection (‘Test connection succeeded.’) → bağlantıyı seç, F4 → Properties'te Connection String'i kopyala. 6. Uygulama: Tools → NuGet Package Manager → Package Manager Console → <code>PM&gt;</code> satırına Scaffold-DbContext komutu (bağlantı dizesi yapıştırılır) → ‘Build succeeded.’ → Models klasöründe her tablo için sınıf ve <i>…Context.cs</i>.",
    akis: ["Server Explorer ile bağlantı", "Connection String'i kopyala", "Package Manager Console", "Scaffold-DbContext", "Models klasörünü incele"],
    hatalar: ["SQL Server 2022 ve EF Core 7+ ile ‘sertifika güvenilir değil’ hatası: bağlantı dizesine <code>TrustServerCertificate=True</code> eklenir.", "Komutu çalıştırmadan önce proje derlenebilir olmalı; derleme hatası varsa Scaffold da başarısız olur."],
    kod: "Scaffold-DbContext \"Data Source=.\\SQLEXPRESS;Initial Catalog=ProjemVT;Integrated Security=True;TrustServerCertificate=True\" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models" },
  { tur: "adim", baslik: "Bağlantı dizesi ve Scaffolding", hafta: "36",
    kitap: { ozet: "Bağlantı dizesini kopyalayıp Scaffold komutuyla model sınıflarını üretti.", gorsel: { tip: "terminal", baslik: "Package Manager Console", satirlar: ["> Scaffold-DbContext \"…bağlantı dizesi…\" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models", "Build started...", "Build succeeded."] }, sayfa: "s. 171–174" },
    sen: { gorsel: { tip: "pencere", baslik: "Solution Explorer", satirlar: [ { liste: ["▾ Models", "  📄 ErrorViewModel.cs", "  📄 … .cs (her tablo)", "  📄 ProjemVTContext.cs"] } ] },
      adimlar: ["Server Explorer'da veri tabanına bağlan, Test Connection.", "Connection String'i kopyala.", "Package Manager Console'da Scaffold-DbContext komutunu çalıştır.", "Models klasöründe sınıfların oluştuğunu gör."] },
    teslim: { dosya: "P3-47_scaffold", liste: ["‘Build succeeded.’ ve Models klasörünün ekran görüntüsü"] } }
]};
