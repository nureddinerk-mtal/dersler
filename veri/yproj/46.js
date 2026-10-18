// YPROJ · 46 · MVC projesi ve NuGet paketleri  (Kitap s. 166–171 · 36. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "3. Uygulama: Visual Studio → Create a new project → arama: ‘model’ → <b>ASP.NET Core Web App (Model-View-Controller)</b> → ad, konum, çözüm adı → Framework, Authentication type, HTTPS, Docker → Create. Klasörler: <b>Models</b> (veri tabanı tabloları), <b>Controllers</b> (veriye erişimi kontrol eden sınıflar), <b>Views</b> (web sayfaları). 4. Uygulama: Scaffolding için iki paket: proje adına sağ tık → Manage NuGet Packages → Browse → <i>Microsoft.EntityFrameworkCore.SqlServer</i> → Install → OK → I Accept; aynısı <i>Microsoft.EntityFrameworkCore.Tools</i> için. Not: başlangıçtaki yazılımcı otomatik kod oluşturmadan (Scaffolding) yararlanır.",
    akis: ["MVC nedir?", "Proje şablonu", "Models, Views, Controllers klasörleri", "İki NuGet paketi"],
    hatalar: ["Paket sürümleri projenin .NET sürümüyle aynı ana sürüm olmalı (ör. .NET 8 → EF Core 8.x); en yeni sürüm uyumsuz olabilir.", "Kitapta ikinci paketin adı “Microsoft.EntityFramework.Core.Tools” diye yazılmış; doğrusu Microsoft.EntityFrameworkCore.Tools."] },
  { tur: "bilgi", baslik: "Model · View · Controller",
    gorsel: { tip: "akis", adimlar: [ { simge: "🗄️", yazi: "Model", alt: "veri tabanı tabloları" }, { simge: "🎛️", yazi: "Controller", alt: "veriye erişimi yönetir" }, { simge: "🖼️", yazi: "View", alt: "web sayfası" } ] } },
  { tur: "adim", baslik: "MVC projesi ve paketler", hafta: "36",
    kitap: { ozet: "ASP.NET Core MVC projesi açıp iki Entity Framework Core paketini yükledi.", gorsel: { tip: "kartlar", kartlar: [ { ust: "ASP.NET Core Web App (Model-View-Controller)" }, { ust: "Microsoft.EntityFrameworkCore.SqlServer" }, { ust: "Microsoft.EntityFrameworkCore.Tools" } ] }, sayfa: "s. 166–171" },
    sen: { gorsel: { tip: "pencere", baslik: "Solution Explorer", satirlar: [ { liste: ["▾ ProjemWeb", "  ▸ Dependencies (2 paket)", "  ▸ Controllers", "  ▸ Models", "  ▸ Views", "  appsettings.json", "  Program.cs"] } ] },
      adimlar: ["MVC şablonuyla projeni oluştur, F5 ile varsayılan sayfayı aç.", "İki NuGet paketini yükle.", "Dependencies → Packages altında iki paketi gör."] },
    teslim: { dosya: "P3-46_mvc", liste: ["Proje dosya yapısının ekran görüntüsü"] } }
]};
