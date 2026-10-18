// YPROJ · 45 · SQL Server'da veri tabanı  (Kitap s. 159–162 · 35. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "4.3: Web projesinde iki yaklaşım: <b>veri tabanı öncelikli</b> (önce veri tabanı, sonra Scaffolding ile sınıflar otomatik) ve <b>kod öncelikli</b> (sınıflar yazılır, veri tabanı otomatik oluşur). Kitap birinciyi kullanır. 2. Uygulama: SQL Server Management Studio → Connect → Databases sağ tık → New Database (EtercihVT) → Tables sağ tık → New → Table → ilk alan EtercihID → Set Primary Key, Identity Specification: Yes → Ctrl+S, ad: Etercih → TercihSecenekleri tablosu → ilişki. Sıra Sizde'ler: okul yönetimi, sigorta poliçesi, inşaat yönetimi veri tabanları (isteğe bağlı alıştırma).",
    akis: ["Veri tabanı öncelikli / kod öncelikli", "SSMS'e bağlan", "Veri tabanı ve tablolar", "PK, Identity, ilişki"],
    hatalar: ["Server name: SQL Server Express kuruluysa genellikle <code>.\\SQLEXPRESS</code> ya da <code>(localdb)\\MSSQLLocalDB</code>.", "Identity Specification açılmazsa kayıt eklerken id elle istenir ve hata çıkar.", "Deep Freeze: veri tabanı dosyaları her açılışta silinir; ders sonunda Tasks → Generate Scripts ile .sql yedeği alınsın."] },
  { tur: "adim", baslik: "Veri tabanını oluştur", hafta: "35",
    kitap: { ozet: "SSMS'te EtercihVT veri tabanı, Etercih ve TercihSecenekleri tablolarını oluşturdu.", gorsel: { tip: "akis", adimlar: [ { simge: "🔌", yazi: "SSMS: Connect" }, { simge: "🗄️", yazi: "New Database" }, { simge: "📋", yazi: "New Table", alt: "PK + Identity" }, { simge: "🔗", yazi: "İlişkiler" } ] }, sayfa: "s. 159–162" },
    sen: { gorsel: { tip: "pencere", baslik: "SQL Server Management Studio", sol: ["▾ Databases", "  ▾ ProjemVT*", "    ▸ Database Diagrams", "    ▸ Tables"], satirlar: [ { tablo: { sutunlar: ["Column Name", "Data Type", "Allow Nulls"], satirlar: [["🔑 …ID", "int", "☐"], ["…", "nvarchar(50)", "☐"], ["…ID", "int", "☐"]] } }, { metin: "Identity Specification: Yes" } ] },
      adimlar: ["SSMS'e bağlan, projen için veri tabanı oluştur.", "Tabloları oluştur: her tabloda PK + Identity.", "Yabancı anahtarları ve ilişkileri kur (Database Diagrams).", "Her tabloya birkaç deneme kaydı gir."] },
    teslim: { dosya: "P3-45_veritabani", liste: ["VTYS'ye uygun bağlantı yaptım.", "Veri tabanını ve tabloları oluşturdum.", "Birincil anahtarları tanımladım.", "Tabloları ilişkilendirdim."] } }
]};
