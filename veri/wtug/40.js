// WTUG · 40 · MVC: model, controller, view  (Kitap s. 207–222)
var G = "gorsel/wtug/";
var L = "https://localhost:5001";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "MVC: Model veri, View görünüm, Controller trafik polisi. Adres → Controller → Action → View yolu oturursa geri kalanı kolaylaşır.", akis: ["Adres parçalama", "Model, Controller, action dönüş türleri", "View, Razor ve veri aktarımı"], hatalar: ["Controller adını …Controller ile bitirmemek", "View dosyasını yanlış klasöre koymak (Views/Kitap/…)", "View'de @model satırını unutup Model'in null gelmesi"], sorular: [["ViewBag mi model mi?", "Tek bir iki değer için ViewBag; asıl veri için model (tür güvenli)."], ["Sayfa değişikliğim görünmüyor?", "dotnet watch run kullanılırsa kaydedince otomatik yenilenir."]] },


  { tur: "bilgi", baslik: "MVC: üç katman",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🖥️", yazi: "View", alt: "kullanıcının gördüğü (HTML, CSS, JS)" },
      { simge: "🧭", yazi: "Controller", alt: "istekleri yönetir, hesaplar, koordine eder" },
      { simge: "📦", yazi: "Model", alt: "verinin özellikleri (kitap adı, sayfa…)" }
    ]},
    not: "Tasarım deseni: sık karşılaşılan sorunlar için hazır çözüm yöntemi." },

  { tur: "bilgi", baslik: "Bir istek nasıl karşılanır?",
    gorsel: { tip: "parcala", ayrac: "/", parcalar: [
      { yazi: "localhost:5001", etiket: "sunucu" }, { yazi: "Kitap", etiket: "KitapController" }, { yazi: "Liste", etiket: "Liste() action" }, { yazi: "1", etiket: "id parametresi" }
    ]},
    not: "Controller adı “Controller” ile biter: KitapController. Dosyalar: Controllers klasörü." },

  { tur: "bilgi", baslik: "Model",
    kod: `public class KitapModel
{
    public int KitapId { get; set; }
    public string KitapAdi { get; set; }
    public int SayfaSayisi { get; set; }
}`,
    not: "Models klasörüne, .cs uzantılı. Her veri için ayrı bir sınıf." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Kategori modeli oluştur: Kategori ID, Kategori Adı ve kitap listesi (List&lt;KitapModel&gt;; gerekli isim uzayını ekle).",
    kitap: "s. 212" },

  { tur: "bilgi", baslik: "Controller ve action",
    kod: `using Microsoft.AspNetCore.Mvc;
public class KitapController : Controller
{
    public string Index()
    {
        return "Kitap controller sınıfındaki Index metodu çalıştı";
    }
}`,
    gorsel: { tip: "resim", yol: G + "40-kitap-index.png" },
    not: "public metotların hepsi action. Adreste action yazılmazsa Index() çalışır." },

  { tur: "bilgi", baslik: "Action ne döndürebilir?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "View()", alt: "Views klasöründeki sayfa" },
      { ust: "Json(…)", alt: "JSON verisi" },
      { ust: "File(…)", alt: "resim, video, dosya" },
      { ust: "string / int", alt: "düz metin" },
      { ust: "RedirectToAction", alt: "başka action'a yönlendir" }
    ]}},

  { tur: "uygulama", baslik: "JSON ve resim döndür",
    gorsel: [
      { tip: "resim", yol: G + "40-json.png", yazi: "JsonCikti() → Json(new { Id=1, Seviye=\"11. Sınıf\", KitapAdi=\"…\" })" },
      { tip: "resim", yol: G + "40-resim.png", yazi: "Resim() → File(\"~/meblogo.png\", \"image/png\")" }
    ],
    adimlar: [
      "KitapController'a JsonResult döndüren JsonCikti() action'ı yaz.",
      "meblogo.png'yi wwwroot klasörüne koy.",
      "FileResult döndüren Resim() action'ı yaz.",
      "İki adresi tarayıcıda aç."
    ],
    malzeme: ["meblogo.png"],
    kitap: "s. 215–216" },

  { tur: "uygulama", baslik: "Parametreli action",
    gorsel: [
      { tip: "resim", yol: G + "40-liste-1.png", yazi: "Liste(int id) → $\"Parametreden gelen değer: {id}\"" },
      { tip: "resim", yol: G + "40-liste-2.png", yazi: "[Route(\"Kitap/Liste/{id}/{ad}\")] Liste(int id, string ad)" }
    ],
    adimlar: ["Tek parametreli Liste(int id) yaz, /Kitap/Liste/1 ile dene.", "Route niteliğiyle iki parametreli hâle getir, /Kitap/Liste/1/MEB ile dene."],
    kitap: "s. 216–217" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Projeye YazarController ekle.<br>2️⃣ İçine YazarListesi ve YazarinKitaplari action'larını ekle.",
    kitap: "s. 214, 217" },

  { tur: "bilgi", baslik: "View: nerede durur?",
    gorsel: { tip: "agac", kok: { ad: "Views", cocuklar: [
      { ad: "Home", alt: "HomeController'ın sayfaları", cocuklar: [{ ad: "Index.cshtml" }] },
      { ad: "Kitap", alt: "KitapController'ın sayfaları", cocuklar: [{ ad: "Kategoriler.cshtml" }, { ad: "KitapListesi.cshtml" }] },
      { ad: "Shared", alt: "ortak: _Layout.cshtml" }
    ], yan: true }},
    not: "Klasör adı = controller adı · dosya adı = action adı · uzantı .cshtml" },

  { tur: "uygulama", baslik: "Kategoriler sayfası",
    gorsel: { tip: "ikili",
      sol: { baslik: "Layout ile", gorsel: { tip: "resim", yol: G + "40-kategoriler.png" } },
      sag: { baslik: "Layout = null", gorsel: { tip: "resim", yol: G + "40-layout-null.png" } }
    },
    adimlar: [
      "KitapController'a Kategoriler() ve KitapListesi(int id) action'ları: return View();",
      "Views/Kitap/Kategoriler.cshtml: text-center div, display-4 başlık, açıklama.",
      "Sayfanın üstüne @{ Layout = null; } yaz, farkı gör. Sonra sil."
    ],
    kitap: "s. 218–219" },

  { tur: "bilgi", baslik: "Razor: HTML içinde C#",
    kod: `@{
    var a = 10;
    var b = 20;
}
<b>a</b> değeri = @a
İki sayının toplamı <span style="color:red">@(a+b)</span>`,
    gorsel: { tip: "resim", yol: G + "40-razor.png" },
    not: "@ ile başlayan ifadeler sunucuda çalışır, sonuç HTML olarak gelir." },

  { tur: "bilgi", baslik: "Controller'dan view'e veri",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>ViewBag.Sahip = "…"</code> <span>View: @ViewBag.Sahip</span></div>
      <div><code>ViewData["Sahip"] = "…"</code> <span>View: @ViewData["Sahip"]</span></div>
      <div><code>TempData["Sahip"] = "…"</code> <span>yönlendirmeden sonra da yaşar</span></div>
      <div><code>return View(kitap);</code> <span>View: @model KitapModel → @Model.KitapAdi</span></div></div>` },
    not: "TempData ile nesne taşımak için önce JSON'a çevrilir: dotnet add package Newtonsoft.Json" },

  { tur: "uygulama", baslik: "ViewBag ile kitap bilgisi",
    gorsel: { tip: "resim", yol: G + "40-viewbag.png" },
    adimlar: [
      "Kategoriler() içinde bir KitapModel oluştur (KitapId=1, KitapAdi=\"WEB TABANLI…\").",
      "ViewBag.Kitap = kitap; ViewBag.Sahip = \"Millî Eğitim Bakanlığı\";",
      "View'de @ViewBag.Kitap.KitapAdi ve @ViewBag.Sahip yaz.",
      "Aynısını ViewData ve return View(kitap) ile de dene."
    ],
    kitap: "s. 220–222" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Yazar action'larının view'lerini oluştur.<br>2️⃣ Bu view'lere ViewBag, ViewData, TempData ve model ile veri gönderip göster.",
    kitap: "s. 219, 222" },

  { tur: "test", sorular: [
    { soru: "📖 HTML ve C# kodlarının bir arada çalışmasını sağlayan yapı?", secenekler: ["Razor View Motoru", "Middleware", "NuGet", "Entity Framework"], dogru: 0 },
    { soru: "<code>localhost:5001/Yazar</code> isteğinde hangi metot çalışır?", secenekler: ["HomeController.Index()", "YazarController.Index()", "YazarController.Yazar()", "Views/Yazar.cshtml"], dogru: 1 },
    { soru: "KitapController'daki Kategoriler action'ı View() döndürürse hangi dosya açılır?", secenekler: ["Views/Kategoriler.cshtml", "Views/Kitap/Kategoriler.cshtml", "Views/Shared/Kitap.cshtml", "Controllers/Kategoriler.cshtml"], dogru: 1 },
    { soru: "Kitap kayıtlarının hangi özelliklere sahip olacağı hangi katmanda tanımlanır?", secenekler: ["Model", "View", "Controller", "wwwroot"], dogru: 0 },
    { soru: "View'de <code>@Model.KitapAdi</code> kullanmak için action ne döndürmeli?", secenekler: ["return View();", "return View(kitap);", "return Json(kitap);", "return \"kitap\";"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Razor'da döngü",
    kod: `@{ var dersler = new[] { "Matematik", "Fizik", "Kimya" }; }
<ul>
@foreach (var d in dersler)
{
    <li>@d</li>
}
</ul>`,
    not: "Sunucu üç li etiketi üretir, tarayıcıya hazır liste gider. Veri tabanından gelen listeler böyle gösterilecek." }

]};
