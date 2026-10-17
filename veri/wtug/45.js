// WTUG · 45 · Doğrulama ve Tag Helper  (Kitap s. 251–263)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Doğrulama nitelikleri, ModelState.IsValid ve Tag Helper'lar. Sunucuda doğrulama şart, istemci tarafı sadece kolaylık.", akis: ["Nitelik panosu", "Kullanıcı kaydı ve hata özeti", "Tag Helper'lar ve CSRF token"], hatalar: ["using System.ComponentModel.DataAnnotations eksik", "Hata olunca View(kullanici) yerine View() döndürüp formun boşalması", "_ViewImports'taki addTagHelper satırını silmek"], sorular: [["JS ile kontrol ettik, sunucuda neden tekrar?", "JS kapatılabilir ya da istek doğrudan gönderilebilir."], ["CSRF nedir?", "Başka bir sitenin, oturum açık kullanıcı adına sahte form göndermesi; token engeller."]] },


  { tur: "bilgi", baslik: "Doğrulama: iki taraf",
    gorsel: { tip: "ikili", ok: "＋",
      sol: { baslik: "🖥️ İstemci (tarayıcı)", gorsel: { tip: "html", icerik: "<ul style='margin:0;padding-left:18px'><li>JavaScript ile</li><li>Hızlı, sunucuyu yormaz</li><li>Kapatılabilir ⚠️</li></ul>" } },
      sag: { baslik: "⚙️ Sunucu", gorsel: { tip: "html", icerik: "<ul style='margin:0;padding-left:18px'><li>C# ile, model doğrulama</li><li>Atlatılamaz</li><li>Her zaman ŞART ✅</li></ul>" } }
    },
    not: "İstemcide doğrulama yapılsa bile sunucuda mutlaka yapılır." },

  { tur: "bilgi", baslik: "Doğrulama nitelikleri",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>[Required]</code> <span>boş bırakılamaz</span></div><div><code>[StringLength(50)]</code> <span>en fazla 50 karakter</span></div>
      <div><code>[Range(1,100)]</code> <span>sayı aralığı</span></div><div><code>[EmailAddress]</code> <span>e-posta biçimi</span></div>
      <div><code>[Phone]</code> <span>telefon biçimi</span></div><div><code>[Compare("Sifre")]</code> <span>iki alan aynı mı</span></div>
      <div><code>[RegularExpression]</code> <span>belirli kalıp</span></div><div><code>[MinLength] [MaxLength]</code> <span>en az / en fazla</span></div>
      <div><code>[Url] [CreditCard]</code> <span>adres, kart biçimi</span></div></div>` },
    kod: `[Required(ErrorMessage = "Ad alanı boş bırakılamaz.")]
[StringLength(50, ErrorMessage = "50 karakterden fazla girilmez.")]
public string Ad { get; set; }`,
    not: "using System.ComponentModel.DataAnnotations; gerekir." },

  { tur: "uygulama", baslik: "Kullanıcı kaydı: ModelState",
    gorsel: { tip: "sayfalar", ana: { resim: G + "45-kayit.png", ad: "Kullanici/Ekle" },
      dallar: [{ buton: "Gönder", resim: G + "45-basarisiz.png", ad: "ModelState.IsValid == false" }] },
    adimlar: [
      "ModelValidation projesi. Models/Kullanici.cs: Ad, Soyad, Eposta, Telefon, Sifre, SifreTekrar + kitaptaki nitelikler.",
      "KullaniciController: [HttpGet] Ekle() → View().",
      "Views/Kullanici/Ekle.cshtml: altı input (name = özellik adı), Gönder.",
      "[HttpPost] Ekle(Kullanici kullanici): ModelState.IsValid ise “başarılı”, değilse “başarısız”."
    ],
    kitap: "s. 253–255 · 7. Uygulama" },

  { tur: "uygulama", baslik: "Hataları göster",
    gorsel: { tip: "resim", yol: G + "45-ozet.png" },
    adimlar: [
      "Formun üstüne @Html.ValidationSummary() yaz.",
      "POST action'da hata varsa return View(kullanici); (form dolu geri gelir).",
      "Yanlış değerlerle dene: boş ad, “ali@”, farklı şifreler."
    ],
    kitap: "s. 255 · 8. Uygulama" },

  { tur: "bilgi", baslik: "Tag Helper",
    metin: "Sunucu kodunu HTML etiketi gibi yazdırır.",
    kod: `<label asp-for="EPosta"></label>
<input asp-for="EPosta" class="form-control">
<span asp-validation-for="EPosta"></span>`,
    gorsel: { tip: "akis", adimlar: [{ simge: "📝", yazi: "asp-for=\"EPosta\"" }, { simge: "⚙️", yazi: "sunucu" }, { simge: "📄", yazi: "type=\"email\" id name value" }] },
    not: "_ViewImports.cshtml: @addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers (şablonda hazır)." },

  { tur: "uygulama", baslik: "Input ve Label Tag Helper",
    gorsel: { tip: "resim", yol: G + "45-label.png", yazi: "Etiket yazıları Display'den, kutu tipleri DataType'tan geldi." },
    adimlar: [
      "TagHelperUygulama projesi. Kullanici modeline [Display(Name=\"…\")] ve [DataType(…)] ekle.",
      "Ekle.cshtml: @model …Kullanici, her alan için label asp-for + input asp-for.",
      "Çalıştır, Ctrl + U ile oluşan HTML'e bak: type=\"email\", type=\"date\", type=\"password\"…"
    ],
    kitap: "s. 257–260 · 9. ve 10. Uygulama" },

  { tur: "bilgi", baslik: "Form Tag Helper",
    kod: `<form asp-controller="kitap" asp-action="ekle" method="POST">
  <input name="kitap">
  <button type="submit">Gönder</button>
</form>`,
    gorsel: { tip: "html", icerik: `<div style="font-size:.85rem;margin-bottom:4px">⬇ Tarayıcıya giden HTML</div><pre class="kod" style="margin:0">&lt;form method="POST" action="/kitap/ekle"&gt;
  &lt;input name="kitap"&gt;
  &lt;button type="submit"&gt;Gönder&lt;/button&gt;
  &lt;input name="__RequestVerificationToken"
         type="hidden" value="CfDJ8N…"&gt;
&lt;/form&gt;</pre>` },
    not: "Gizli token, başka sitelerden sahte form gönderilmesini (CSRF) önler. Action'a [ValidateAntiForgeryToken] yazılır." },

  { tur: "bilgi", baslik: "Form niteliklerinin çıktısı",
    gorsel: { tip: "tablo", ad: "Yazılan → Oluşan action", sutunlar: ["Tag Helper", "Oluşan adres"], satirlar: [
      ["asp-controller=\"kitap\" asp-action=\"ekle\"", "/kitap/ekle"],
      ["… asp-route-id=\"10\"", "/kitap/ekle/10"],
      ["… asp-route-id=\"10\" asp-route-val=\"roman\" ({id?}/{val?})", "/kitap/ekle/10/roman"],
      ["… asp-route-id=\"10\" (rotada id yok)", "/kitap/ekle?id=10"],
      ["asp-antiforgery=\"false\"", "token eklenmez"]
    ]},
    not: "11. ve 12. Uygulama (s. 261–262): her birini dene, Ctrl + U ile çıktıyı karşılaştır." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "11. Uygulamada tarayıcıdan __RequestVerificationToken değerini değiştirip gönder. Ne oldu? Arkadaşlarınla paylaş.",
    kitap: "s. 261" },

  { tur: "uygulama", baslik: "Validation Tag Helper",
    gorsel: { tip: "resim", yol: G + "45-alan-hata.png", yazi: "Her hata kendi kutusunun altında." },
    adimlar: [
      "Kullanıcı formunu asp-for ile yeniden yaz.",
      "Her input altına &lt;span asp-validation-for=\"Ad\"&gt;&lt;/span&gt;",
      "Hepsini toplu göstermek için: &lt;div asp-validation-summary=\"All\"&gt;&lt;/div&gt;",
      "Kırmızı yap: .field-validation-error { color:red }"
    ],
    kitap: "s. 263" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Validation Tag Helper'larla istemci taraflı doğrulama yap. İpucu: sayfanın altına &lt;partial name=\"_ValidationScriptsPartial\" /&gt; ekle; hata, sunucuya gitmeden çıkar.",
    kitap: "s. 256, 263" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi Tag Helper'ların özelliklerinden değildir?", secenekler: ["HTML etiketlerine benzer.", "Kurulum yapılarak kullanılır.", "IntelliSense özelliği kullanılır.", "Temiz ve okunabilir kodlama yapılır.", "Hazır metotlar bulundurur."], dogru: 1 },
    { soru: "📖 Hangisi Form Tag Helper niteliklerinden değildir?", secenekler: ["asp-action", "asp-antiforgery", "asp-controller", "asp-path", "asp-route"], dogru: 3 },
    { soru: "📖 Label Tag Helper'da etiket yazısı hangi nitelikten gelir?", secenekler: ["DataType", "Display", "DisplayFormat", "EmailAddress", "Key"], dogru: 1 },
    { soru: "📖 Sunucu taraflı doğrulama ile ilgili hangisi doğrudur?", secenekler: ["Sunucu kaynaklarını kullanmaz", "Doğrulama tarayıcıda gerçekleştirilir", "Güvenli değildir", "Javascript kullanılır", "Model doğrulama kullanılır"], dogru: 4 },
    { soru: "📖 Hangi açıklama doğrudur?", secenekler: ["StringLength, sayısal uzunluğu ifade eder.", "Compare, iki model değerinin karşılaştırma durumunu gösterir.", "Range, tarih aralığını gösterir.", "MaxLength, minimum karakter uzunluğunu gösterir.", "Required, değer boş olabilir demektir."], dogru: 1 },
    { soru: "📖 Girilen verilerin doğruluğunu kontrol etmek için?", secenekler: ["ModelState.Errors", "ModelState.IsValid", "Validation.Check", "Validation.IsValid", "Validation.Summary"], dogru: 1 },
    { soru: "“Şifre tekrar” alanı şifreyle aynı olmalı. Hangi nitelik?", secenekler: ["[Required]", "[Compare(\"Sifre\")]", "[Range]", "[Phone]"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kendi hata mesajını ekle",
    kod: `if (kullanici.Ad == "admin")
{
    ModelState.AddModelError("Ad", "Bu ad kullanılamaz.");
    return View(kullanici);
}`,
    not: "Hazır niteliklerin yakalayamadığı kurallar için. Mesaj, Ad kutusunun altındaki span'de çıkar." }

]};
