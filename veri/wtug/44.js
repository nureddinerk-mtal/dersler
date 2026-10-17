// WTUG · 44 · Form işlemleri: GET, POST, dosya  (Kitap s. 242–251)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Form: kullanıcıdan sunucuya",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "&lt;form", etiket: "" }, { yazi: "method=\"POST\"", etiket: "nasıl gidecek?" }, { yazi: "action=\"/Home/Index\"&gt;", etiket: "nereye gidecek?" },
      { yazi: "&lt;input name=\"ad\"&gt;", etiket: "name = verinin adı" }
    ]},
    not: "Sunucu, gelen veriyi input'un name değerinden tanır." },

  { tur: "bilgi", baslik: "GET mi, POST mu?",
    gorsel: { tip: "tablo", ad: "Karşılaştırma", sutunlar: ["", "GET", "POST"], satirlar: [
      ["Veri nerede?", "Adres satırında görünür", "İstek içinde, görünmez"],
      ["Güvenlik", "Güvenli değil", "Güvenli"], ["Hız", "Hızlı", "Daha yavaş"],
      ["Varsayılan mı?", "Evet", "Hayır"], ["Taşıdığı", "Sadece metin, sınırlı", "Metin + dosya, sınırsız"],
      ["Ne için?", "Arama, önemsiz veri", "Şifre, kayıt, dosya"]
    ]}},

  { tur: "uygulama", baslik: "GET ile gönder",
    gorsel: { tip: "sayfalar", ana: { resim: G + "44-form.png", ad: "Views/Home/Index" },
      dallar: [{ buton: "Gönder", resim: G + "44-get-sonuc.png", ad: "VeriAlGet: veriler adreste!" }] },
    adimlar: [
      "dotnet new mvc ile FormUygulama projesi.",
      "Index.cshtml: method=\"GET\" action=\"/Home/VeriAlGet\", dört input (okulno, ad, soyad, sinif) ve Gönder.",
      "HomeController: [HttpGet] VeriAlGet(int okulno, string ad, string soyad, string sinif)",
      "return Content(okulno+\"-\"+ad+\"-\"+soyad+\"-\"+sinif);"
    ],
    kitap: "s. 244–245 · 1. Uygulama" },

  { tur: "bilgi", baslik: "Parametresiz okuma",
    kod: `[HttpGet]
public IActionResult VeriAlGet()
{
    int okulno = int.Parse(HttpContext.Request.Query["okulno"]);
    string ad = HttpContext.Request.Query["ad"];
    ...
}`,
    not: "2. Uygulama (s. 245). Adres satırındaki ?okulno=…&ad=… bölümüne query string denir." },

  { tur: "uygulama", baslik: "POST ile gönder",
    gorsel: { tip: "sayfalar", ana: { resim: G + "44-form.png", ad: "Views/Home/Index" },
      dallar: [{ buton: "Gönder", resim: G + "44-post-sonuc.png", ad: "[HttpPost] Index: adreste veri yok" }] },
    adimlar: [
      "Formu method=\"POST\" action=\"/Home/Index\" yap.",
      "İki Index action'ı: [HttpGet] boş form gösterir, [HttpPost] verileri alır.",
      "[HttpPost] Index(string okulno, string ad, string soyad, string sinif) → Content(…)"
    ],
    kitap: "s. 245–246 · 3. Uygulama" },

  { tur: "bilgi", baslik: "POST verisini almanın 3 yolu",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "1 · Parametre", alt: "Index(string okulno, string ad…)" },
      { ust: "2 · IFormCollection", alt: "collection[\"okulno\"]" },
      { ust: "3 · Model binding", alt: "Index(Ogrenci ogrenci) → ogrenci.OkulNo" }
    ]},
    kod: `public class Ogrenci
{
    public int OkulNo { get; set; }
    public string OgrenciAdi { get; set; }
    public string OgrenciSoyadi { get; set; }
    public string Sinifi { get; set; }
}`,
    not: "Model binding: input name değerleri model özellik adlarıyla aynı olmalı (name=\"OkulNo\")." },

  { tur: "uygulama", baslik: "IFormCollection ve model binding",
    gorsel: { tip: "resim", yol: G + "44-post-sonuc.png", yazi: "İki yöntemde de sonuç aynı." },
    adimlar: [
      "4. Uygulama: using Microsoft.AspNetCore.Http; → Index(IFormCollection collection)",
      "5. Uygulama: Models/Ogrenci.cs oluştur.",
      "Formdaki name'leri OkulNo, OgrenciAdi, OgrenciSoyadi, Sinifi yap.",
      "Index(Ogrenci ogrenci) ile ogrenci.OgrenciAdi… değerlerini Content ile göster."
    ],
    kitap: "s. 246–248 · 4. ve 5. Uygulama (kitaptaki int.Parse(ogrenci.OkulNo) gereksiz; OkulNo zaten int)" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "5. Uygulamadaki input name değerlerini küçük harfe çevir (okulno, ogrenciadi…). Veriler hâlâ geliyor mu? Sonucu arkadaşlarınla paylaş.",
    kitap: "s. 248" },

  { tur: "uygulama", baslik: "Dosya yükle",
    gorsel: { tip: "sayfalar", ana: { resim: G + "44-dosya-form.png", ad: "enctype=\"multipart/form-data\"" },
      dallar: [{ buton: "Gönder", resim: G + "44-dosya-sonuc.png", ad: "Resim wwwroot'a kaydedildi" }] },
    adimlar: [
      "Forma enctype=\"multipart/form-data\" ve &lt;input type=\"file\" name=\"Resim\"&gt; ekle.",
      "using System.IO; → Index(Ogrenci ogrenci, IFormFile Resim)",
      "Resim boşsa “Resim yüklenemedi.” döndür.",
      "Path.Combine(…, \"wwwroot\", Resim.FileName) yoluna CopyTo ile kaydet.",
      "Diğer yol: Ogrenci modeline public IFormFile Resim { get; set; } ekle."
    ],
    kitap: "s. 249–250 · 6. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Formlarla ilgili hangisi yanlıştır?", secenekler: ["Veri girişleri input etiketleri ile sağlanır.", "Kullanıcıdan alınan verileri sunucuya aktarır.", "Girilen verileri göndermek için submit butonu kullanılır.", "Kullanıcı ile web siteleri arasında etkileşim için kullanılır.", "Formlar içerisinde sadece input etiketleri kullanılır."], dogru: 4 },
    { soru: "📖 Formdan gönderilen dosyayı sunucuda almak için hangisi kullanılır?", secenekler: ["CopyTo()", "FileFormData", "FormData", "IFormCollection", "IFormFile"], dogru: 4 },
    { soru: "📖 POST metodu ile ilgili hangisi doğrudur?", secenekler: ["Veriler adres satırında görünür", "Veri taşıma sınırı vardır", "Veri gönderimi güvenlidir", "Varsayılan metottur", "Sadece metin verileri taşır"], dogru: 2 },
    { soru: "Giriş formu kullanıcı adı ve şifre gönderiyor. Hangi metot?", secenekler: ["GET", "POST"], dogru: 1 },
    { soru: "Bir action'a nitelik yazılmazsa varsayılan olarak hangisidir?", secenekler: ["[HttpGet]", "[HttpPost]", "[HttpPut]", "[HttpDelete]"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Aynı adlı dosya gelirse?",
    kod: `var ad = Guid.NewGuid() + Path.GetExtension(Resim.FileName);
var yol = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", ad);`,
    not: "İki öğrenci “resim.jpg” yüklerse ilki silinir. Guid her seferinde benzersiz bir ad üretir." }

]};
