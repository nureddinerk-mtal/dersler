// WTUG · 42 · Klasör yapısı ve ara katman  (Kitap s. 226–235)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Proje klasörleri ve ara katman (middleware). Configure'daki sıra = isteğin geçtiği sıra. Kitaptaki Map tablosunda yazım hatası var, düzelttik.", akis: ["Klasör ağacı ve önemli dosyalar", "_Layout ve @RenderBody", "Use / Run / Map örnekleri"], hatalar: ["Statik dosyayı wwwroot dışına koymak", "UseStaticFiles'ı kaldırıp CSS'in yüklenmemesi", "app.Run'dan sonra yazılan katmanların çalışmaması"], sorular: [["Program.cs ile Startup.cs farkı?", "Program uygulamayı başlatır; Startup servisleri ve işlem hattını ayarlar. (.NET 6+ ile ikisi tek dosyada birleşti.)"], ["~ işareti ne?", "wwwroot klasörünün kısaltması."]] },


  { tur: "bilgi", baslik: "MVC projesinin içi",
    gorsel: { tip: "agac", kok: { ad: "mvc_test", cocuklar: [
      { ad: ".vscode", alt: "launch.json, tasks.json" }, { ad: "bin", alt: "derlenmiş dosyalar" },
      { ad: "Properties", alt: "launchSettings.json: port" }, { ad: "Controllers" }, { ad: "Models" },
      { ad: "Views", cocuklar: [{ ad: "_ViewImports" }, { ad: "_ViewStart" }, { ad: "Shared/_Layout" }] },
      { ad: "wwwroot", alt: "css, js, resim" }, { ad: "appsettings.json", alt: "ayarlar, bağlantı" },
      { ad: "Program.cs", alt: "başlangıç: Main()" }, { ad: "Startup.cs", alt: "servisler ve işlem hattı" }
    ]}}},

  { tur: "bilgi", baslik: "Önemli dosyalar",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>wwwroot</code> <span>statik dosyalar. ~ işareti bu klasör: ~/css/site.css</span></div>
      <div><code>_ViewImports</code> <span>tüm sayfalar için @using, @addTagHelper</span></div>
      <div><code>_ViewStart</code> <span>her sayfadan önce: Layout = "_Layout"</span></div>
      <div><code>_Layout</code> <span>ortak şablon. Sayfa içeriği @RenderBody() yerine gelir</span></div>
      <div><code>Program.cs</code> <span>Main() metodu, uygulamayı başlatır</span></div>
      <div><code>Startup.cs</code> <span>ConfigureServices: servisler · Configure: istek nasıl karşılanır</span></div>
      <div><code>appsettings.json</code> <span>veri tabanı bağlantısı gibi ayarlar</span></div></div>` } },

  { tur: "bilgi", baslik: "_Layout: ortak şablon",
    gorsel: { tip: "agac", kok: { ad: "_Layout.cshtml", cocuklar: [
      { ad: "header", alt: "menü (her sayfada aynı)" },
      { ad: "@RenderBody()", alt: "Index, Kategoriler… buraya gelir", renk: "#eb5757" },
      { ad: "footer", alt: "© 2021 (her sayfada aynı)" }
    ]}},
    not: "Menüyü bir kez değiştir, bütün sayfalarda değişsin." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Yeni bir MVC projesi oluştur, standart klasör ve dosyaların içeriklerini incele.",
    kitap: "s. 230" },

  { tur: "bilgi", baslik: "Ara katman (middleware)",
    metin: "İstek ile cevap arasında sırayla çalışan kod blokları. Sıraya işlem hattı (pipeline) denir.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📨", yazi: "İstek" },
      { yazi: "HttpsRedirection", alt: "HTTP → HTTPS" },
      { yazi: "StaticFiles", alt: "wwwroot" },
      { yazi: "Routing", alt: "hangi controller?" },
      { yazi: "Authorization", alt: "yetki" },
      { yazi: "Endpoints", alt: "action çalışır" },
      { simge: "📤", yazi: "Cevap", alt: "ters sırayla döner" }
    ]},
    not: "Configure metodundaki her app.Use… bir ara katman. Hata yakalayan katman en başa yazılır." },

  { tur: "bilgi", baslik: "Use ve Run",
    kod: `app.Use(async (context, next) =>
{
    await context.Response.WriteAsync("1. katmana gelindi.");
    await next.Invoke();            // sonraki katmana geç
    await context.Response.WriteAsync("1. katmandan çıkıldı.");
});
app.Run(async context =>            // son katman, next yok
{
    await context.Response.WriteAsync("2. katmana gelindi");
});`,
    gorsel: { tip: "resim", yol: G + "42-katmanlar.png" },
    not: "Kitapta alt alta yazılmış; WriteAsync alt satıra geçmediği için tarayıcıda yan yana görünür." },

  { tur: "uygulama", baslik: "Merhaba Dünya katmanı",
    gorsel: { tip: "resim", yol: G + "42-merhaba.png", yazi: "Adres ne olursa olsun aynı cevap." },
    adimlar: [
      "Yeni bir proje: dotnet new web",
      "Startup.cs → Configure içini sil.",
      "app.Run ile context.Response.WriteAsync(\"Merhaba Dünya!\") yaz.",
      "Farklı adresler dene: /, /abc, /Kitap"
    ],
    kitap: "s. 232" },

  { tur: "bilgi", baslik: "İşlem hattını bölmek: Map",
    kod: `app.Map("/istek1", Istek1);
app.Map("/istek2", Istek2);
app.Run(async context =>
{
    await context.Response.WriteAsync("İstek anlaşılmadı!");
});`,
    gorsel: { tip: "tablo", ad: "Hangi istek, hangi cevap?", sutunlar: ["İstek", "Cevap"], satirlar: [
      ["localhost:5001/", "İstek anlaşılmadı!"], ["localhost:5001/istek1", "İstek 1"], ["localhost:5001/istek2", "İstek 2"], ["localhost:5001/istek3", "İstek anlaşılmadı!"]
    ]},
    not: "Kitaptaki tabloda 3. satır yanlışlıkla /istek1 yazılmış; doğrusu /istek2." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Projene, her istekte isteğin adresini ve saatini bir metin dosyasına yazan bir ara katman ekle.",
    kitap: "s. 235" },

  { tur: "test", sorular: [
    { soru: "📖 Configure metodundaki sırayı ve yanıtın ters sırasını tanımlayan yapı?", secenekler: ["Yönlendirme", "İşlem hattı (Pipeline)", "Razor", "Model"], dogru: 1 },
    { soru: "📖 Hangisi Startup.cs dosyasının özelliklerinden biri değildir?", secenekler: ["ASP.NET Core uygulamalarının başlangıç noktasıdır.", "Her ASP.NET Core projesinde bulunmak zorundadır.", "Program.cs içerisinden çağrılır.", "Uygulama ayarlarının yapıldığı yerdir.", "Adının Startup olması zorunludur."], dogru: 4 },
    { soru: "📖 Hangisi standart klasör ve dosyalar arasında yer almaz?", secenekler: ["wwwroot", "Views > _ViewStart.cshtml", "Program.cs", "Settings.json", "Startup.cs"], dogru: 3 },
    { soru: "Sitenin logosunu nereye koyarsın?", secenekler: ["Models", "Controllers", "wwwroot", "bin"], dogru: 2 },
    { soru: "Projeyi 5001 değil 6000 portunda çalıştırmak için hangi dosya?", secenekler: ["appsettings.json", "launchSettings.json", "_Layout.cshtml", "site.css"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kendi ara katmanın: süre ölç",
    kod: `app.Use(async (context, next) =>
{
    var basla = DateTime.Now;
    await next.Invoke();
    var sure = (DateTime.Now - basla).TotalMilliseconds;
    Console.WriteLine(context.Request.Path + " → " + sure + " ms");
});`,
    not: "Her isteğin ne kadar sürdüğü terminale yazılır. Configure'ın en başına koy." }

]};
