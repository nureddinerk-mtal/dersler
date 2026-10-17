// WTUG · 41 · Razor Pages  (Kitap s. 222–226)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Razor Pages, MVC'nin sayfa bazlı sade hâli. Sınav ve kitap için farkları bilmek yeterli; projelerde MVC ile devam ediyoruz.", akis: ["Klasör karşılaştırması", "@page ve OnGet", "İlk Razor Pages projesi"], hatalar: ["@page satırını unutmak", ".cshtml ile .cshtml.cs adlarının farklı olması"], sorular: [["Hangisini kullanalım?", "Küçük projede Razor Pages, büyük projede MVC; ikisi birlikte de olur."], ["OnGet ne zaman çalışır?", "Sayfa adresine girilince (GET isteği)."]] },


  { tur: "bilgi", baslik: "Razor Pages: sayfa bazlı",
    metin: "MVC alt yapısını kullanır, klasör sayısını azaltır. MVC'nin yerine değil, yanında.",
    gorsel: { tip: "ikili",
      sol: { baslik: "MVC", gorsel: { tip: "agac", kok: { ad: "mvc_test", cocuklar: [{ ad: "Controllers" }, { ad: "Models" }, { ad: "Views" }, { ad: "wwwroot" }] } } },
      sag: { baslik: "Razor Pages", gorsel: { tip: "agac", kok: { ad: "razor_test", cocuklar: [{ ad: "Pages", cocuklar: [{ ad: "Kitap.cshtml", alt: "görünüm" }, { ad: "Kitap.cshtml.cs", alt: "PageModel" }] }, { ad: "wwwroot" }] } } }
    },
    not: "PageModel = controller + model bir arada. Sayfanın ilk satırında @page olur." },

  { tur: "bilgi", baslik: "Bir Razor sayfası",
    kod: `// Kitap.cshtml.cs
public class KitapModel : PageModel
{
    public string KitapAdi { get; set; }
    public void OnGet()
    {
        KitapAdi = "WEB TABANLI UYGULAMA GELİŞTİRME";
    }
}`,
    gorsel: { tip: "html", icerik: `<pre class="kod" style="margin:0">@page
@model KitapModel
&lt;div class="text-center"&gt;
  Kitap adı= &lt;b&gt;@Model.KitapAdi&lt;/b&gt;
&lt;/div&gt;</pre>` },
    not: "OnGet: sayfa açılınca (GET isteği) çalışır." },

  { tur: "uygulama", baslik: "İlk Razor Pages projesi",
    gorsel: { tip: "resim", yol: G + "41-kitap.png" },
    adimlar: [
      "mkdir razor_test → cd razor_test → dotnet new webapp → code .",
      "Pages klasörüne Kitap.cshtml ve Kitap.cshtml.cs ekle.",
      "OnGet içinde KitapAdi'ya değer ver, sayfada @Model.KitapAdi ile göster.",
      "Çalıştır, /Kitap adresini aç."
    ],
    kitap: "s. 223–225" },

  { tur: "bilgi", baslik: "MVC – Razor Pages farkı",
    gorsel: { tip: "tablo", ad: "Startup.cs farkları", sutunlar: ["", "MVC", "Razor Pages"], satirlar: [
      ["Servis", "services.AddControllersWithViews();", "services.AddRazorPages();"],
      ["Uç nokta", "endpoints.MapControllerRoute(…)", "endpoints.MapRazorPages();"],
      ["Klasör", "Models, Controllers, Views", "Pages"],
      ["Nerede?", "Büyük projeler", "Küçük, sayfa bazlı projeler"]
    ]},
    not: "İkisi aynı projede birlikte de kullanılabilir. İkisinde de Razor View motoru var." },

  { tur: "test", sorular: [
    { soru: "Razor Pages projesi oluşturan komut?", secenekler: ["dotnet new mvc", "dotnet new webapp", "dotnet new razor", "dotnet new pages"], dogru: 1 },
    { soru: "Bir view dosyasını Razor Page yapan ilk satır?", secenekler: ["@model", "@page", "@using", "@{ }"], dogru: 1 },
    { soru: "Sayfa açıldığında çalışan PageModel metodu?", secenekler: ["Index()", "OnGet()", "Main()", "Load()"], dogru: 1 },
    { soru: "Razor Pages'te sayfalar hangi klasörde?", secenekler: ["Views", "Pages", "Controllers", "wwwroot"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Form gönderilince: OnPost",
    kod: `public string Mesaj { get; set; }
public void OnPost(string ad)
{
    Mesaj = "Merhaba " + ad;
}`,
    not: "Sayfadaki form POST ile gönderilince OnPost çalışır. Sayfada @Model.Mesaj ile göster." }

]};
