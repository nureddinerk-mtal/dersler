// WTUG · 49 · Yayınlama ve web servisler  (Kitap s. 293–315)
var G = "gorsel/wtug/";
var L = "https://localhost:5001";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Yayınlama (publish, IIS) ve web servisler (REST API). Postman ile istek göndermek öğrencilere çok somut geliyor. Dersin özeti: ön uç fetch ile API'den veri alır.", akis: ["Publish türleri ve IIS adımları", "REST – SOAP, HTTP metotları", "İlk API ve katmanlı API"], hatalar: ["IIS'te Hosting Bundle kurmadan 500.19 hatası almak", "ControllerBase yerine Controller kullanmak (çalışır ama gereksiz)", "Postman'de Content-Type'ı application/json yapmamak"], sorular: [["API'yi tarayıcıdan deneyebilir miyim?", "GET isteklerini evet; POST, PUT, DELETE için Postman gibi bir araç gerekir."], ["Okulun sitesini böyle mi yayınlıyorlar?", "Benzer şekilde: dosyalar sunucuya kopyalanır, alan adı sunucunun IP'sine yönlendirilir (1. konu)."]] },


  { tur: "bilgi", baslik: "Yayınlama (publish)",
    metin: "Bilgisayarda geliştirilen uygulamayı sunucuya hazırlayıp dünyaya açmak.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📝", yazi: ".cs dosyaları", alt: "kaynak kod (sende kalır)" },
      { simge: "📦", yazi: "dotnet publish", alt: "derle, paketle" },
      { simge: "⚙️", yazi: ".dll dosyaları", alt: "publish klasörü" },
      { simge: "🌐", yazi: "Sunucu", alt: "IIS" }
    ]}},

  { tur: "bilgi", baslik: "İki yayınlama şekli",
    gorsel: { tip: "ikili", ok: " ",
      sol: { baslik: "Çalışma zamanına bağlı", gorsel: { tip: "html", icerik: "<pre class='kod' style='margin:0'>dotnet publish -c Release</pre><ul style='margin:6px 0 0;padding-left:18px'><li>✅ Küçük boyut, çapraz platform</li><li>⚠️ Sunucuda .NET kurulu olmalı</li></ul>" } },
      sag: { baslik: "Bağımsız (self-contained)", gorsel: { tip: "html", icerik: "<pre class='kod' style='margin:0'>dotnet publish -c Release\n  -r win10-x64 --self-contained</pre><ul style='margin:6px 0 0;padding-left:18px'><li>✅ .NET kurulumu gerekmez</li><li>⚠️ Büyük boyut, güncellemesi zor</li></ul>" } }
    },
    not: "Release: kod optimize edilir, geliştirme kodları dâhil edilmez." },

  { tur: "uygulama", baslik: "IIS'te yayınla",
    gorsel: { tip: "resim", yol: G + "49-iis.png", yazi: "Tarayıcıya localhost yazınca uygulaman açılır." },
    adimlar: [
      "dotnet publish -c Release → bin\\Release\\…\\publish klasörü.",
      "Denetim Masası → Windows özelliklerini aç veya kapat → Internet Information Services ✅.",
      "publish içindekileri C:\\inetpub\\CoreUygulama klasörüne kopyala.",
      "inetmgr → Siteler → Web Sitesi Ekle. Default Web Site'ı durdur, CoreUygulama'yı başlat.",
      "Hosting Bundle'ı kur. Güvenlik duvarında TCP 80 için gelen kuralı aç, başka bilgisayardan IP ile dene."
    ],
    kitap: "s. 295–298 · 26. Uygulama" },

  { tur: "bilgi", baslik: "Web servis",
    metin: "Farklı platformların birbiriyle veri alışverişi yaptığı yapı.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📱", yazi: "Mobil uygulama" }, { simge: "🌐", yazi: "Web sitesi" }, { simge: "🔌", yazi: "API", alt: "JSON / XML" }, { simge: "🗄️", yazi: "Veri tabanı" }
    ]},
    not: "Aynı kütüphane verisini hem site hem mobil uygulama kullanır. API: Uygulama Geliştirme Arayüzü." },

  { tur: "bilgi", baslik: "REST ve SOAP",
    gorsel: { tip: "tablo", ad: "Karşılaştırma", sutunlar: ["", "SOAP", "REST"], satirlar: [
      ["Nedir?", "Protokol", "Mimari tarz"], ["Veri", "Sadece XML", "JSON, XML, metin, HTML"],
      ["Taşıma", "HTTP, SMTP, UDP…", "Sadece HTTP"], ["Performans", "Düşük, çok kaynak", "Yüksek, az kaynak"],
      ["Nerede?", "Bankacılık, ödeme", "Web, mobil, sosyal ağ"]
    ]},
    not: "ASP.NET Core Web API ile REST servisleri (RESTful) yazacağız." },

  { tur: "bilgi", baslik: "HTTP metotları = CRUD",
    gorsel: { tip: "tablo", ad: "api/kitaplar", sutunlar: ["Metot", "Adres", "İşlem"], satirlar: [
      ["GET", "/api/kitaplar", "Hepsini oku"], ["GET", "/api/kitaplar/5", "Birini oku"], ["POST", "/api/kitaplar", "Ekle"],
      ["PUT", "/api/kitaplar/5", "Güncelle (tamamı)"], ["PATCH", "/api/kitaplar/5", "Güncelle (bir kısmı)"], ["DELETE", "/api/kitaplar/5", "Sil"]
    ]}},

  { tur: "uygulama", baslik: "İlk Web API",
    gorsel: [
      { tip: "istek", metot: "GET", adres: L + "/api/kitaplar", cevap: "Tüm Kitaplar Gösterilecek..." },
      { tip: "istek", metot: "GET", adres: L + "/api/kitaplar/3", cevap: "3. Numaralı Kitap Gösterilecek..." },
      { tip: "istek", metot: "DELETE", adres: L + "/api/kitaplar", cevap: "Kitap Silme İşlemi Gerçekleştirilecek..." }
    ],
    adimlar: [
      "dotnet new web -o KutuphaneApi → dotnet run → “Hello World!”",
      "Startup: services.AddControllers(); ve endpoints.MapControllers();",
      "Controllers/KitaplarController: [Route(\"api/[controller]\")] [ApiController], ControllerBase'den türet.",
      "[HttpGet], [HttpGet(\"{id}\")], [HttpPost], [HttpPut], [HttpDelete] action'ları Content döndürsün.",
      "Postman ile beş isteği gönder."
    ],
    kitap: "s. 299–301 · 27. Uygulama" },

  { tur: "bilgi", baslik: "Katmanlı mimari",
    gorsel: { tip: "agac", kok: { ad: "Kutuphane.sln", cocuklar: [
      { ad: "Api", alt: "Sunum: KitapController" },
      { ad: "Business", alt: "İş: IKitapService → KitapManager" },
      { ad: "DataAccess", alt: "Veri erişim: IKitapRepository → KitapRepository, DbContext" },
      { ad: "Entities", alt: "Modeller: Kitap" }
    ], yan: true }},
    not: "Api → Business → DataAccess → veri tabanı. Her katman sadece bir altındakini bilir. Kod tekrarı yok (DRY)." },

  { tur: "uygulama", baslik: "Katmanlı kitap API'si",
    gorsel: [
      { tip: "istek", metot: "POST", adres: L + "/api/kitap", govde: '{\n  "kitapAdi": "Çalı Kuşu",\n  "kitapYazar": "Reşat Nuri Güntekin",\n  "kitapTur": "Roman"\n}', cevap: "Kayıt Oluşturma Başarılı." },
      { tip: "istek", metot: "GET", adres: L + "/api/kitap", cevap: '[\n  {\n    "kitapId": 1,\n    "kitapAdi": "Çalı Kuşu",\n    "kitapYazar": "Reşat Nuri Güntekin",\n    "kitapTur": "Roman"\n  }\n]' }
    ],
    adimlar: [
      "dotnet new sln; classlib ile Entities, DataAccess, Business; web ile Api. Hepsini dotnet sln add ile ekle.",
      "DataAccess: EF paketleri, Entities referansı, DbContext, migration; IKitapRepository + KitapRepository.",
      "Business: IKitapService + KitapManager (_kitapRepository üzerinden).",
      "Api: KitapController (_kitapService üzerinden) GET, GET/{id}, POST, PUT, DELETE/{id}.",
      "Postman: Content-Type = application/json, beş isteği dene."
    ],
    kitap: "s. 303–313 · 28. Uygulama (KitapRepository'ye kitapta unutulan GetAll metodunu da yaz)" },

  { tur: "test", sorular: [
    { soru: "📖 ASP.NET Core Web API hangi protokolü kullanır?", secenekler: ["HTTP", "SMTP", "SOAP", "TCP", "WSDL"], dogru: 0 },
    { soru: "Mobil uygulama yeni kitap eklemek istiyor. Hangi metot?", secenekler: ["GET", "POST", "DELETE", "PATCH"], dogru: 1 },
    { soru: "Sunucuda .NET kurulu değil. Nasıl yayınlarsın?", secenekler: ["dotnet publish", "dotnet publish -c Release", "dotnet publish -r win10-x64 --self-contained", "dotnet run"], dogru: 2 },
    { soru: "Katmanlı mimaride veri tabanı işlemleri hangi katmanda?", secenekler: ["Sunum (Api)", "İş (Business)", "Veri erişim (DataAccess)", "Entities"], dogru: 2 },
    { soru: "Windows'ta ASP.NET Core sitesini yayınlayan sunucu yazılımı?", secenekler: ["IIS", "NuGet", "LocalDB", "Postman"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "API'yi JavaScript ile kullan",
    kod: `fetch("https://localhost:5001/api/kitap")
  .then(cevap => cevap.json())
  .then(kitaplar => {
    kitaplar.forEach(k => {
      document.getElementById("liste").innerHTML += "<li>" + k.kitapAdi + "</li>";
    });
  });`,
    not: "Ön uç (JavaScript) ile arka uç (API) burada buluşur. Bütün dersin özeti bu birkaç satırda!" }

]};
