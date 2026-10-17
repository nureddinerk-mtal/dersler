// WTUG · 46 · NuGet, EF Core, DbContext, migration  (Kitap s. 263–275)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "NuGet paketleri, EF Core, DbContext ve migration. Okulda LocalDB kurulumu sorun çıkarırsa SQLite seçeneği (meraklısına slaytı) çok rahatlatır.", akis: ["NuGet ve paket komutları", "EF Core ve LocalDB", "DbContext, DbSet, migration"], hatalar: ["dotnet ef tanınmıyor: aracı global kurmamak", "DbSet eklemeden migration yapmak (tablo oluşmaz)", "Bağlantı cümlesinde \\\\ yerine tek \\ yazmak"], sorular: [["Migration ne işe yarar?", "Modeldeki değişikliği veri tabanına adım adım yansıtır, geri alınabilir."], ["SQL bilmeden veri tabanı mı?", "EF Core C# kodunu SQL'e kendisi çevirir; ama temel SQL bilmek yine faydalıdır."]] },


  { tur: "bilgi", baslik: "NuGet: .NET'in paket yöneticisi",
    gorsel: { tip: "akis", adimlar: [
      { simge: "👩‍💻", yazi: "Geliştirici", alt: "kodu paketler (.nupkg)" },
      { simge: "📦", yazi: "nuget.org", alt: "paylaşılır" },
      { simge: "⬇️", yazi: "Sen", alt: "dotnet add package" }
    ]},
    not: "Her şeyi sıfırdan yazmak yerine dünyadaki geliştiricilerin hazır kütüphaneleri kullanılır. Açık kaynak, ücretsiz." },

  { tur: "uygulama", baslik: "Paket yükle, güncelle, kaldır",
    gorsel: { tip: "terminal", satirlar: [
      "> dotnet add package Microsoft.EntityFrameworkCore",
      "info : PackageReference for 'Microsoft.EntityFrameworkCore' added to 'UygulamaNuget.csproj'.",
      "> dotnet restore",
      "> dotnet remove package Microsoft.EntityFrameworkCore"
    ]},
    adimlar: [
      "UygulamaNuget klasöründe boş ya da MVC proje oluştur.",
      "nuget.org'da “entity” ara, Microsoft.EntityFrameworkCore → .NET CLI sekmesindeki komutu kopyala.",
      "Terminale yapıştır. UygulamaNuget.csproj'u aç: paket eklenmiş mi?",
      "restore ile güncelle, remove ile kaldır."
    ],
    kitap: "s. 264–265 · 13. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ VS Code için NuGet paketlerini yöneten bir eklenti var mı? Araştır.<br>2️⃣ Grupla ASP.NET Core'da en çok kullanılan beş paketi bul, ne işe yaradıklarını sunum olarak hazırla.",
    kitap: "s. 265" },

  { tur: "bilgi", baslik: "Entity Framework Core: ORM",
    gorsel: { tip: "akis", adimlar: [
      { simge: "⚙️", yazi: "ASP.NET Core", alt: "C# nesneleri: kitap.KitapAdi" },
      { simge: "🌉", yazi: "EF Core", alt: "çeviri yapar" },
      { simge: "🗄️", yazi: "Veri tabanı", alt: "SQL tabloları" }
    ]},
    kod: `// SQL yerine C# (LINQ):
var kitaplar = db.Kitaplar.Where(x => x.KitapYazar == "Peyami Safa");`,
    not: "SQL yazmadan veri tabanı işlemleri. Sağlayıcı paket: SqlServer, Sqlite, MySql, PostgreSQL…" },

  { tur: "uygulama", baslik: "Kütüphane Takip: paketler",
    gorsel: { tip: "terminal", satirlar: [
      "> dotnet new mvc -o KutuphaneTakip",
      "> cd KutuphaneTakip",
      "> dotnet add package Microsoft.EntityFrameworkCore.SqlServer",
      "> dotnet add package Microsoft.EntityFrameworkCore.Tools"
    ]},
    adimlar: [
      "KutuphaneTakip MVC projesini oluştur.",
      "SqlServer sağlayıcısını ve Tools paketini ekle.",
      "VS Code'a <b>mssql</b> eklentisini kur."
    ],
    kitap: "s. 267 · 14. Uygulama" },

  { tur: "uygulama", baslik: "LocalDB kur ve veri tabanı oluştur",
    gorsel: { tip: "terminal", satirlar: [
      "> sqllocaldb info",
      "MSSQLLocalDB",
      "> sqllocaldb start MSSQLLocalDB",
      "LocalDB instance \"MSSQLLocalDB\" started."
    ]},
    adimlar: [
      "SQL Server Express indir → Download Media → LocalDB → kur.",
      "sqllocaldb info ile kontrol et, start ile başlat.",
      "VS Code → SQL Server paneli → Add Connection: (localdb)\\mssqllocaldb, Integrated, profil adı: baglanti.",
      "New Query: CREATE DATABASE KutuphaneDb → Execute (Ctrl + Shift + E)."
    ],
    kitap: "s. 267–269 · 15. Uygulama" },

  { tur: "bilgi", baslik: "DbContext: EF Core'un kalbi",
    kod: `using Microsoft.EntityFrameworkCore;
public class KutuphaneDbContext : DbContext
{
    string baglanti = "Server=(localdb)\\\\mssqllocaldb;Database=KutuphaneDb;Trusted_Connection=True;";
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(baglanti);
    }
    public DbSet<Kitap> Kitaplar { get; set; }   // tablo
}`,
    not: "DbContext veri tabanına bağlanır. DbSet verilen her model bir tabloya dönüşür; EF Core sadece onlarla çalışır." },

  { tur: "uygulama", baslik: "Model + DbContext",
    gorsel: { tip: "tablo", ad: "Kitaplar (henüz boş)", sutunlar: ["KitapId", "KitapAdi", "KitapYazar", "KitapTur"], anahtar: "KitapId", satirlar: [] },
    adimlar: [
      "Models/Kitap.cs: KitapId, KitapAdi, KitapYazar, KitapTur.",
      "Models/KutuphaneDbContext.cs: DbContext'ten miras al.",
      "OnConfiguring'i override et, UseSqlServer(baglanti).",
      "public DbSet&lt;Kitap&gt; Kitaplar { get; set; } ekle."
    ],
    kitap: "s. 269–271 · 16. Uygulama" },

  { tur: "uygulama", baslik: "Migration: modeli tabloya dönüştür",
    gorsel: { tip: "terminal", satirlar: [
      "> dotnet tool install --global dotnet-ef",
      "> dotnet ef migrations add birinci",
      "Done. To undo this action, use 'ef migrations remove'",
      "> dotnet ef database update",
      "Applying migration '20261017_birinci'.",
      "Done."
    ]},
    adimlar: [
      "dotnet-ef aracını bir kez kur, dotnet ef ile kontrol et.",
      "migrations add birinci → Migrations klasörü oluştu mu?",
      "database update → SQL Server panelinde Kitaplar tablosunu gör."
    ],
    kitap: "s. 271–272 · 17. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Kitap modeline string YayinEvi ekle, yeni migration yap.<br>2️⃣ Daha önce kullanılan migration adını tekrar verirsen ne hata çıkar? Çözümünü paylaş.",
    kitap: "s. 272" },

  { tur: "bilgi", baslik: "Tabloyu niteliklerle şekillendir",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>[Key]</code> <span>birincil anahtar (Id ya da SinifAdiId ise gerekmez)</span></div>
      <div><code>[ForeignKey("…")]</code> <span>yabancı anahtar, başka tabloya bağ</span></div>
      <div><code>[Required]</code> <span>NOT NULL sütun</span></div><div><code>[MaxLength(150)]</code> <span>en fazla karakter</span></div>
      <div><code>[Table("Books")]</code> <span>tablo adını değiştir</span></div><div><code>[Column("BookName")]</code> <span>sütun adını değiştir</span></div>
      <div><code>[NotMapped]</code> <span>sütun oluşturma</span></div></div>` } },

  { tur: "uygulama", baslik: "Kitap modeline nitelikler",
    gorsel: { tip: "tablo", ad: "KitapTablo", sutunlar: ["KitapId", "KitapAdi", "KitapYazar", "KitapTur", "YayinEvi"], anahtar: "KitapId", satirlar: [["int", "nvarchar(200) NOT NULL", "nvarchar(100) NOT NULL", "nvarchar(max) NOT NULL", "nvarchar(200)"]] },
    adimlar: [
      "Sınıfın üstüne [Table(\"KitapTablo\")].",
      "KitapAdi: Required, MaxLength(200), Display(\"Kitap Adı\"). KitapYazar: Required, MaxLength(100).",
      "KitapTur: Required, MinLength(5). YayinEvi: MaxLength(200).",
      "Yeni migration + database update. Tabloda ne değişti?"
    ],
    kitap: "s. 273–274 · 18. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 EF Core'da veri tabanı işlemlerini gerçekleştiren sınıf?", secenekler: ["DbContext", "DbSession", "DbSet", "Entity", "LINQ"], dogru: 0 },
    { soru: "📖 Hangisi paket yükleme komutudur?", secenekler: ["dotnet package install", "nuget add package", "dotnet add package", "nuget package add", "dotnet install package"], dogru: 2 },
    { soru: "📖 Entity Framework Core için doğru ifade?", secenekler: ["MVC Framework'üdür.", "Açık kaynak ORM aracıdır.", "Veri tabanı yönetim aracıdır.", "Object Mapping aracıdır.", "İlişkisel veri tabanıdır."], dogru: 1 },
    { soru: "Modele yeni özellik ekledin. Tabloya yansıması için?", secenekler: ["dotnet run", "dotnet ef migrations add … + dotnet ef database update", "dotnet restore", "dotnet new mvc"], dogru: 1 },
    { soru: "Bir modelin tabloya dönüşmesi için DbContext'te ne olmalı?", secenekler: ["DbSet özelliği", "[NotMapped]", "OnGet metodu", "ViewBag"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Sunucu kurmadan: SQLite",
    gorsel: { tip: "terminal", satirlar: ["> dotnet add package Microsoft.EntityFrameworkCore.Sqlite"] },
    kod: `optionsBuilder.UseSqlite("Data Source=kutuphane.db");`,
    not: "Veri tabanı proje klasöründe tek bir dosya olur. Okulda LocalDB kurulamazsa çok işe yarar; geri kalan kodların hiçbiri değişmez." }

]};
