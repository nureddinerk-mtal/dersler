// WTUG · 39 · .NET Core ve kurulum  (Kitap s. 202–207)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Arka uca geçiş. .NET SDK kurulumu ve ilk MVC projesi. Laboratuvar bilgisayarlarında SDK ve VS Code C# eklentisi önceden kurulu olmalı (Deep Freeze!).", akis: ["Ön uç – arka uç hatırlatma", "SDK / Runtime farkı", "dotnet new mvc ile ilk proje"], hatalar: ["dotnet komutu tanınmıyor: SDK kurulu değil ya da terminal yeniden açılmamış", "Proje klasörüne girmeden (cd) komut çalıştırmak", "HTTPS sertifika uyarısında takılmak (dotnet dev-certs https --trust)"], sorular: [["Neden C#?", ".NET'in ana dili; Java'ya benzer, iş piyasasında çok aranır."], ["Visual Studio mu VS Code mu?", "Kitap VS Code kullanıyor; hafif ve ücretsiz."]] },


  { tur: "bilgi", baslik: "Ön uç ve arka uç",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🖥️", yazi: "Tarayıcı", alt: "HTML, CSS, JS (ön uç)" },
      { simge: "📨", yazi: "İstek", alt: "localhost:5001/Kitap" },
      { simge: "⚙️", yazi: "Sunucu", alt: "ASP.NET Core, C# (arka uç)" },
      { simge: "🗄️", yazi: "Veri tabanı", alt: "kitaplar, öğrenciler" }
    ]},
    not: "Şimdiye kadar tarayıcıda çalışan kodlar yazdık. Artık sunucuda çalışan, veri tabanıyla konuşan kodlar yazacağız." },

  { tur: "bilgi", baslik: ".NET nedir?",
    metin: "Microsoft'un açık kaynak kodlu, platformdan bağımsız yazılım geliştirme ortamı.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🌐 Web", alt: "Web uygulamaları, API'ler" },
      { ust: "📱 Mobil", alt: "Xamarin" },
      { ust: "🪟 Masaüstü", alt: "WPF, Windows Forms" },
      { ust: "🎮 Oyun", alt: "Unity" },
      { ust: "🤖 Yapay zekâ", alt: "ML.NET" },
      { ust: "📡 IoT", alt: "Nesnelerin interneti" }
    ]},
    not: "İşletim sistemi: Windows, macOS, Linux, Android, iOS · Dil: C#, Visual Basic, F#" },

  { tur: "bilgi", baslik: "Sürümler",
    gorsel: { tip: "akis", adimlar: [
      { yazi: ".NET Framework", alt: "sadece Windows" },
      { yazi: ".NET Core 1.0", alt: "2016, çapraz platform" },
      { yazi: ".NET Core 3.1", alt: "2019" },
      { yazi: ".NET 5", alt: "2020, adından Core çıktı" }
    ]},
    not: "Kitap .NET 5 ile yazıldı. Güncel sürüm: dotnet.microsoft.com/download" },

  { tur: "bilgi", baslik: "SDK mı, Runtime mı?",
    gorsel: { tip: "ikili", ok: " ",
      sol: { baslik: "🛠️ .NET SDK", gorsel: { tip: "html", icerik: "<p style='margin:0'>Uygulama <b>geliştirmek</b> ve çalıştırmak için.<br>Bizim bilgisayarlara bu kurulur.</p>" } },
      sag: { baslik: "▶️ .NET Runtime", gorsel: { tip: "html", icerik: "<p style='margin:0'>Sadece <b>çalıştırmak</b> için.<br>Sunucuya kurulur.</p>" } }
    }},

  { tur: "uygulama", baslik: ".NET SDK kur",
    gorsel: { tip: "terminal", baslik: "Komut İstemi", satirlar: [
      "> dotnet --info",
      ".NET SDK (reflecting any global.json):",
      " Version:   5.0.100",
      "",
      ".NET SDKs installed:",
      "  5.0.100 [C:\\Program Files\\dotnet\\sdk]"
    ]},
    adimlar: [
      "dotnet.microsoft.com/download → Download .NET SDK x64.",
      "İndirilen dosyayı çalıştır, kurulumu bitir.",
      "Komut isteminde <b>dotnet --info</b> yaz. Sürüm listesi geliyorsa tamam.",
      "Visual Studio Code'a <b>C#</b> eklentisini kur."
    ],
    kitap: "s. 204–206" },

  { tur: "bilgi", baslik: "ASP.NET Core",
    metin: ".NET üzerine kurulu, açık kaynak web uygulama geliştirme teknolojisi.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "Çapraz platform", alt: "Windows, Linux, macOS" },
      { ust: "Açık kaynak", alt: "Topluluk odaklı" },
      { ust: "Hızlı", alt: "Yüksek performans, ölçeklenebilir" },
      { ust: "MVC + Razor", alt: "Hazır mimari desteği" },
      { ust: "Paket yönetimi", alt: "NuGet" },
      { ust: "Yan yana", alt: "Birden çok .NET sürümü birlikte" }
    ]}},

  { tur: "uygulama", baslik: "İlk proje: çalıştır ve gör",
    gorsel: { tip: "resim", yol: G + "39-hos-geldiniz.png" },
    adimlar: [
      "VS Code → Terminal → New Terminal.",
      "mkdir mvc_test → cd mvc_test",
      "dotnet new mvc → code .",
      "“Required assets… Add them?” sorusuna Yes. Run and Debug → ▶ (ya da terminalde dotnet run).",
      "Durdurmak: Shift + F5"
    ],
    kitap: "s. 208–211" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi .NET'in sunduğu avantajlardan biri değildir?", secenekler: ["Çapraz platform desteği", "Yüksek performans", "Kapalı kaynak kodlu olması", "Birlikte çalışmayı kolaylaştırması", "Birden fazla sürümün yan yana çalışabilmesi"], dogru: 2 },
    { soru: "Okul sunucusunda sadece hazır uygulamayı çalıştıracağız. Ne kurulmalı?", secenekler: [".NET SDK", ".NET Runtime", "Visual Studio Code", "C# eklentisi"], dogru: 1 },
    { soru: "Kurulu .NET sürümlerini gösteren komut?", secenekler: ["dotnet new", "dotnet --info", "dotnet run", "code ."], dogru: 1 },
    { soru: "Yeni bir MVC projesi oluşturan komut?", secenekler: ["dotnet new mvc", "dotnet add mvc", "dotnet create mvc", "mkdir mvc"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Komutlarla tanış",
    gorsel: { tip: "terminal", satirlar: [
      "> dotnet new --list",
      "Templates             Short Name",
      "ASP.NET Core Empty    web",
      "ASP.NET Core Web App  webapp",
      "ASP.NET Core Web API  webapi",
      "ASP.NET Core MVC      mvc",
      "Console Application   console"
    ]},
    not: "dotnet new console ile bir konsol uygulaması oluştur, dotnet run ile “Hello World!” yazısını gör." }

]};
