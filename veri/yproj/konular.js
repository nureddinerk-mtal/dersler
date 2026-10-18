// YAZILIM PROJESİ (12C) — KONULAR (PROJE ADIMLARI) TABLOSU
// Kaynak: MEB "Yazılım Projesi 11-12" ders materyali + 2026-27 yıllık plan
// Ders proje tabanlıdır: kitaptaki örnek yol haritasıdır, öğrenci aynı türde ÖZGÜN projesini yapar.
// Her adım: no, baslik, kitap (sayfa), hafta (yıllık plan haftası), hazir
// İçerik dosyası: veri/yproj/<no>.js · Yeni adım: listeye satır ekle, içerik yazılınca hazir: true yap.
window.KONULAR = {
  birimler: [
    { ad: "Bölüm 0 · Proje Hazırlık", simge: "🧭", konular: [
      { no: "01", baslik: "Proje ve proje uygulama süreci",                 kitap: "s. 16–17, 46",  hafta: "1",     hazir: true },
      { no: "02", baslik: "Özgün masaüstü proje fikrini seç",               kitap: "s. 16",         hafta: "1",     hazir: true },
      { no: "03", baslik: "Proje sonuç raporu ve sunum",                    kitap: "s. 46–51",      hafta: "2",     hazir: true }
    ]},
    { ad: "Bölüm 1 · Masaüstü Proje", simge: "🖥️", konular: [
      { no: "04", baslik: "Müşterinin ihtiyaçları ve projenin sınırları",   kitap: "s. 17–18, 54",  hafta: "3",     hazir: true },
      { no: "05", baslik: "Proje uygulama takvimi",                         kitap: "s. 18, 54",     hafta: "3",     hazir: true },
      { no: "06", baslik: "Risk yönetimi",                                  kitap: "s. 19–21, 54",  hafta: "3",     hazir: true },
      { no: "07", baslik: "Gereksinim analizi ve use case",                 kitap: "s. 21–23, 55",  hafta: "4",     hazir: true },
      { no: "08", baslik: "Varlık ilişki şeması",                           kitap: "s. 23–24, 56",  hafta: "5",     hazir: true },
      { no: "09", baslik: "Veri akış ve sınıf diyagramı",                   kitap: "s. 25, 56",     hafta: "6",     hazir: true },
      { no: "10", baslik: "Kullanıcı arayüzü taslakları",                   kitap: "s. 26, 57–58",  hafta: "7",     hazir: true },
      { no: "11", baslik: "Veri tabanı tasarımı, teknik ve gözden geçirme", kitap: "s. 24, 58–59",  hafta: "7",     hazir: true },
      { no: "12", baslik: "Veri tabanını oluştur",                          kitap: "s. 28, 59",     hafta: "8",     hazir: true },
      { no: "13", baslik: "Form uygulaması ve veri tabanı bağlantısı",      kitap: "s. 27–29, 60–63", hafta: "8",   hazir: true },
      { no: "14", baslik: "İlk tablo formu: ekle, sil, güncelle, listele",  kitap: "s. 63–66",      hafta: "9",     hazir: true },
      { no: "15", baslik: "Bilgi kontrollü formlar",                        kitap: "s. 66–70, 74–78", hafta: "9",   hazir: true },
      { no: "16", baslik: "Bağlı tablolu form",                             kitap: "s. 70–74",      hafta: "9",     hazir: true },
      { no: "17", baslik: "Kullanıcılar, yetkiler ve şifreleme",            kitap: "s. 78–83",      hafta: "11",    hazir: true },
      { no: "18", baslik: "Giriş ekranı",                                   kitap: "s. 83–85",      hafta: "11",    hazir: true },
      { no: "19", baslik: "Ana sayfa ve ana işlem",                         kitap: "s. 85–91",      hafta: "11",    hazir: true },
      { no: "20", baslik: "Ana işlemin detayları ve iptal",                 kitap: "s. 91–94",      hafta: "11",    hazir: true },
      { no: "21", baslik: "Test ve kullanıcı kabul testi",                  kitap: "s. 42–45, 94–99", hafta: "11–12", hazir: true },
      { no: "22", baslik: "Kurulum dosyası ve veri tabanını taşıma",        kitap: "s. 99–100",     hafta: "12",    hazir: true },
      { no: "23", baslik: "Bakım: yeni özellik ekle",                       kitap: "s. 45, 100–103", hafta: "12",   hazir: true },
      { no: "24", baslik: "Masaüstü proje raporu ve sunumu",                kitap: "s. 103–107",    hafta: "12–13", hazir: true }
    ]},
    { ad: "Bölüm 2 · Mobil Proje", simge: "📱", konular: [
      { no: "25", baslik: "Özgün mobil proje fikri ve müşteri istekleri",   kitap: "s. 110",        hafta: "14",    hazir: true },
      { no: "26", baslik: "Gereksinimler, takım ve fizibilite",             kitap: "s. 111",        hafta: "14",    hazir: true },
      { no: "27", baslik: "Maliyet hesabı ve proje takvimi",                kitap: "s. 112",        hafta: "15",    hazir: true },
      { no: "28", baslik: "Risk planı ve risk kararları",                   kitap: "s. 113–114",    hafta: "15",    hazir: true },
      { no: "29", baslik: "Mantıksal tasarım: ilişkisel tablo diyagramı",   kitap: "s. 115",        hafta: "16–17", hazir: true },
      { no: "30", baslik: "Firebase yapısı ve projeye bağlama",             kitap: "s. 116–121",    hafta: "18",    hazir: true },
      { no: "31", baslik: "Fiziksel tasarım: ekran eskizleri",              kitap: "s. 121–124",    hafta: "19",    hazir: true },
      { no: "32", baslik: "Ekran ve menü dosyaları",                        kitap: "s. 124–129",    hafta: "22",    hazir: true },
      { no: "33", baslik: "Gradle ve AndroidManifest",                      kitap: "s. 130–131",    hafta: "22",    hazir: true },
      { no: "34", baslik: "Açılış ekranı ve model sınıfı",                  kitap: "s. 132–133",    hafta: "23",    hazir: true },
      { no: "35", baslik: "Kayıt ekranları (fragmentler)",                  kitap: "s. 133–137",    hafta: "23",    hazir: true },
      { no: "36", baslik: "Firebase'e kaydet",                              kitap: "s. 137–142",    hafta: "24",    hazir: true },
      { no: "37", baslik: "Listele ve detay ekranı",                        kitap: "s. 143–147",    hafta: "24",    hazir: true },
      { no: "38", baslik: "Mobil uygulamanın test ve bakımı",               kitap: "s. 148–150",    hafta: "25",    hazir: true },
      { no: "39", baslik: "Mobil proje raporu ve sunumu",                   kitap: "s. 150–151",    hafta: "27–28", hazir: true }
    ]},
    { ad: "Bölüm 3 · Web Proje", simge: "🌐", konular: [
      { no: "40", baslik: "Özgün web proje fikri ve yazılım geliştirme planı", kitap: "s. 154–155", hafta: "29",    hazir: true },
      { no: "41", baslik: "Proje planının ilkeleri",                        kitap: "s. 154–156",    hafta: "29",    hazir: true },
      { no: "42", baslik: "Risk yönetimi ve proje takvimi",                 kitap: "s. 156–158",    hafta: "30",    hazir: true },
      { no: "43", baslik: "Gereksinim analizi ve sistem modelleme",         kitap: "s. 158–159",    hafta: "31–33", hazir: true },
      { no: "44", baslik: "Varlık ilişki şeması ve gözden geçirme",         kitap: "s. 163–166",    hafta: "32–34", hazir: true },
      { no: "45", baslik: "SQL Server'da veri tabanı",                      kitap: "s. 159–162",    hafta: "35",    hazir: true },
      { no: "46", baslik: "MVC projesi ve NuGet paketleri",                 kitap: "s. 166–171",    hafta: "36",    hazir: true },
      { no: "47", baslik: "Bağlantı dizesi ve Scaffolding",                 kitap: "s. 171–174",    hafta: "36",    hazir: true },
      { no: "48", baslik: "Controller ve View'ler, bağlantı ayarı",         kitap: "s. 174–179",    hafta: "37",    hazir: true },
      { no: "49", baslik: "Türkçe arayüz",                                  kitap: "s. 179–183",    hafta: "37",    hazir: true },
      { no: "50", baslik: "Web projesinin test, yayın ve bakımı",           kitap: "s. 183–184",    hafta: "38",    hazir: true },
      { no: "51", baslik: "Web proje raporu ve sunumu",                     kitap: "s. 184–187",    hafta: "39–40", hazir: true }
    ]}
  ]
};
