// YPROJ · 07 · Gereksinim analizi ve use case  (Kitap s. 21–23, 55 · 4. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "1.2.2 / 2.2.1: Gereksinim analizi eksikse tasarım ve kod da eksik olur. Aşamalar: ihtiyaçları topla, uygunluğunu analiz et, işlevleri belirle (kullanıcı senaryosu / use case), donanım ve yazılım gereksinimleri, performans ve güvenlik, belgele, doğrula. Stok Takip müşteri gereksinimleri: internetsiz form uygulaması; iki kullanıcı türü (Personel: tedarikçi, müşteri, ürün, satış; Yönetici: + personel, kullanıcı adı-şifre); kayıtların CRUD'u; stok satışla düşer; benzersiz ürün kodu; satış personel ve tarihle saklanır; liste fiyatından satış; satış iptal edilebilir. Use case: aktörlerin yapacakları. Sistem gereksinimleri: Windows 7+, .NET Framework 4.7+, MySQL, MySQL Connector/.NET.",
    akis: ["Gereksinim analizinin aşamaları", "Müşteri gereksinimleri", "Use case diyagramı", "Sistem gereksinimleri"],
    hatalar: ["Use case çizim aracı: draw.io (diagrams.net) ya da kâğıt. Kâğıtta çizip fotoğrafını yüklemek de kabul.", "Gereksinimleri ölçülebilir yazmamak: “Kitap adı boş bırakılamaz, en fazla 100 karakter.” gibi."] },
  { tur: "adim", baslik: "Müşteri gereksinimleri", hafta: "4",
    kitap: { ozet: "Stok Takip'in kurallarını tek tek yazdı.", gorsel: { tip: "kartlar", kartlar: [ { ust: "İnternetsiz form uygulaması" }, { ust: "2 kullanıcı türü", alt: "Personel, Yönetici" }, { ust: "Satışta stok düşer" }, { ust: "Benzersiz ürün kodu" }, { ust: "Satış iptal edilebilir" } ] }, sayfa: "s. 55" },
    sen: { metin: "Kendi projenin kurallarını madde madde yaz: kim ne yapabilir, hangi bilgi zorunlu, hangisi benzersiz, ana işlem neyi değiştirir?", gorsel: { tip: "tablo", sutunlar: ["No", "Gereksinim"], satirlar: [["1", "…"], ["2", "…"], ["3", "…"], ["…", "…"]] } },
    teslim: { dosya: "P1-07_gereksinim", liste: ["Müşteri gereksinimlerini belirledim."] } },
  { tur: "adim", baslik: "Use case diyagramı", hafta: "4",
    kitap: { ozet: "Aktörlerin yapacağı işlemleri çizdi.", gorsel: { tip: "ikili", sol: { baslik: "🧑 Personel", gorsel: { tip: "kartlar", kartlar: [ { ust: "Giriş yap" }, { ust: "Ürün, tedarikçi, müşteri işlemleri" }, { ust: "Satış yap, iptal et" } ] } }, sag: { baslik: "👔 Yönetici", gorsel: { tip: "kartlar", kartlar: [ { ust: "Personelin yaptığı her şey" }, { ust: "Personel işlemleri" }, { ust: "Kullanıcı adı, şifre" } ] } }, ok: "·" }, sayfa: "s. 22, 55" },
    sen: { metin: "Her rol için aktör çiz, yapacağı işlemleri ovallere yaz.", gorsel: { tip: "ikili", sol: { baslik: "🧑 Rol 1", gorsel: { tip: "kartlar", kartlar: [ { ust: "…" }, { ust: "…" } ] } }, sag: { baslik: "👔 Rol 2", gorsel: { tip: "kartlar", kartlar: [ { ust: "…" }, { ust: "…" } ] } }, ok: "·" } },
    teslim: { dosya: "P1-07_usecase", liste: ["Use case diyagramlarını oluşturdum."] } },
  { tur: "adim", baslik: "Sistem gereksinimleri", hafta: "4",
    kitap: { ozet: "Programın çalışması için gerekenleri yazdı.", gorsel: { tip: "kartlar", kartlar: [ { ust: "Windows 7 ve üzeri" }, { ust: ".NET Framework 4.7+" }, { ust: "MySQL" }, { ust: "MySQL Connector/.NET" } ] }, sayfa: "s. 55" },
    sen: { metin: "Kendi projen için aynı listeyi yaz (kullanacağın sürümlerle)." },
    teslim: { dosya: "P1-07_gereksinim", liste: ["Sistem gereksinimlerini belirledim."] } }
]};
