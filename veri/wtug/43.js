// WTUG · 43 · Yönlendirme (routing)  (Kitap s. 235–242)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Yönlendirme nedir?",
    metin: "Gelen isteğin hangi controller ve hangi action'a gideceğini belirler.",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "{controller=Home}", etiket: "yazılmazsa Home" }, { yazi: "/", etiket: "" },
      { yazi: "{action=Index}", etiket: "yazılmazsa Index" }, { yazi: "/", etiket: "" }, { yazi: "{id?}", etiket: "? = zorunlu değil" }
    ]},
    not: "Okunabilir, anlamlı adresler arama motorları için de önemli." },

  { tur: "bilgi", baslik: "Varsayılan yönlendirme",
    gorsel: { tip: "tablo", ad: "İstek → Controller / Action", sutunlar: ["İstek", "Controller / Action"], satirlar: [
      ["localhost:5001", "Home / Index"], ["/Home/Index/123", "Home / Index"], ["/Home/Hakkinda", "Home / Hakkinda"],
      ["/Haberler", "Haberler / Index"], ["/Haberler/123", "Haberler / Index"], ["/Haberler/EnCokOkunanlar", "Haberler / EnCokOkunanlar"]
    ]}},

  { tur: "bilgi", baslik: "Özel yönlendirme",
    kod: `endpoints.MapControllerRoute(
    name: "haberdetay",
    pattern: "Haber/{id}",
    defaults: new { controller = "Haberler", action = "HaberDetay" });`,
    not: "pattern: eşleşecek adres · defaults: gideceği yer. İstek, eşleşen İLK kurala gider; sıraya dikkat!" },

  { tur: "uygulama", baslik: "Haber detay",
    gorsel: { tip: "resim", yol: G + "43-haber-123.png" },
    adimlar: [
      "Startup.cs'e yukarıdaki haberdetay kuralını ekle.",
      "HaberlerController: HaberDetay(int id) → return View(id);",
      "Views/Haberler/HaberDetay.cshtml: @model int, h1 ve “Gelen parametre: @Model”.",
      "/Haber/123 adresini aç."
    ],
    kitap: "s. 237" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "YazarListesi ve YazarinKitaplari action'ları için özel yönlendirmeler oluştur.",
    kitap: "s. 238" },

  { tur: "bilgi", baslik: "Parametre kısıtlamaları",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>{id:int}</code> <span>sadece tam sayı</span></div><div><code>{aktif:bool}</code> <span>true / false</span></div>
      <div><code>{tarih:datetime}</code> <span>tarih</span></div><div><code>{ad:alpha}</code> <span>sadece harf</span></div>
      <div><code>{ad:minlength(4)}</code> <span>en az 4 karakter</span></div><div><code>{yas:min(18)}</code> <span>en az 18</span></div>
      <div><code>{yas:range(18,120)}</code> <span>18–120 arası</span></div><div><code>{id?}</code> <span>seçimlik</span></div></div>` },
    kod: `pattern: "HavaDurumu/{sehirId:int:range(1,81)}"`,
    not: "Kısıtlamaya uymayan istek hiçbir kurala eşleşmez → 404 Sayfa bulunamadı." },

  { tur: "uygulama", baslik: "Kısıtla ve varsayılan ver",
    gorsel: { tip: "ikili", ok: " ",
      sol: { baslik: "/Haber/abc  ({id:int})", gorsel: { tip: "resim", yol: G + "43-404.png" } },
      sag: { baslik: "/Haber  ({id?}, id = 100)", gorsel: { tip: "resim", yol: G + "43-haber-100.png" } }
    },
    adimlar: [
      "pattern'i Haber/{id:int} yap. /Haber/abc dene.",
      "pattern'i Haber/{id?} yap, action'da int id = 100 yaz.",
      "/Haber adresini aç: 100 görünmeli."
    ],
    kitap: "s. 238–240" },

  { tur: "bilgi", baslik: "Öznitelik yönlendirmesi",
    kod: `[Route("Home")]
public class HomeController : Controller
{
    [Route("")]
    [Route("Index/{id?}")]
    public IActionResult Index(int? id) { return View(); }

    [Route("Hakkinda")]
    public IActionResult Hakkinda() { return View(); }
}`,
    not: "Startup.cs'te MapControllerRoute(…) yerine endpoints.MapControllers(); yazılır." },

  { tur: "bilgi", baslik: "İstediğin adresi ver",
    kod: `[Route("Haberler")]
public IActionResult HaberListesi() { … }      // /Haberler

[Route("Detay/{id:int}")]
public IActionResult HaberDetay(int id) { … }   // /Detay/123

[Route("[controller]/[action]")]
public IActionResult About() { … }             // /Home/About`,
    not: "Adres ile metot adı aynı olmak zorunda değil. [controller] ve [action] kendi adlarıyla yer değiştirir." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ YazarListesi ve YazarinKitaplari için öznitelik yönlendirmeleri tanımla.<br>2️⃣ Bu action'lar “Yazarlar” ve “Yazar/KitapListesi” adresleriyle açılsın.",
    kitap: "s. 241" },

  { tur: "test", sorular: [
    { soru: "📖 ASP.NET Core'da yönlendirme ne yapar?", secenekler: ["Gelen isteğin hangi controller ve action'a gideceğini belirler", "Veri tabanına bağlanır", "Sayfayı tasarlar", "Paket yükler"], dogru: 0 },
    { soru: "Varsayılan kurala göre <code>/Kitap</code> isteği nereye gider?", secenekler: ["Home / Index", "Kitap / Index", "Kitap / Kitap", "404"], dogru: 1 },
    { soru: "<code>Urun/{id:int}</code> kuralına <code>/Urun/kalem</code> gelirse?", secenekler: ["id = kalem", "id = 0", "404 Sayfa bulunamadı", "Home / Index"], dogru: 2 },
    { soru: "Öznitelik yönlendirmesi için Startup.cs'e ne yazılır?", secenekler: ["endpoints.MapControllers();", "endpoints.MapRazorPages();", "app.UseStaticFiles();", "services.AddRazorPages();"], dogru: 0 },
    { soru: "Plaka 1–81 arası tam sayı olmalı. Doğru kısıt?", secenekler: ["{plaka:alpha}", "{plaka:int:range(1,81)}", "{plaka:minlength(81)}", "{plaka?}"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Türkçe karakterli adresler",
    metin: "<b>/Kitap/Çalı-Kuşu</b> gibi adresler tarayıcıda <b>%C3%87al%C4%B1-Ku%C5%9Fu</b> olarak kodlanır.",
    not: "Bu yüzden siteler adreslerde Türkçe karakter yerine ç→c, ş→s, ı→i kullanır: /kitap/cali-kusu" }

]};
