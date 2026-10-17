// WTUG · 47 · Veri ekle, listele, güncelle, sil (CRUD)  (Kitap s. 274–284)
var G = "gorsel/wtug/";
var KT = { tip: "tablo", ad: "KitapTablo", anahtar: "KitapId", sutunlar: ["KitapId", "KitapAdi", "KitapYazar", "KitapTur", "YayinEvi"] };
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "CRUD: dört temel işlem",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "➕ Create", alt: "Ekle → db.Add() + SaveChanges()" },
      { ust: "📋 Read", alt: "Listele → db.Kitaplar.ToList()" },
      { ust: "✏️ Update", alt: "Güncelle → Find() + db.Update() + SaveChanges()" },
      { ust: "🗑️ Delete", alt: "Sil → Find() + db.Remove() + SaveChanges()" }
    ]},
    not: "SaveChanges() çağrılmadan hiçbir değişiklik veri tabanına yazılmaz." },

  { tur: "bilgi", baslik: "Kütüphane sitesinin sayfaları",
    gorsel: { tip: "sayfalar", ana: { resim: G + "47-liste-linkli.png", ad: "/kitap/liste" },
      dallar: [
        { buton: "Güncelle", resim: G + "47-guncelle.png", ad: "/kitap/guncelle/2" },
        { buton: "Sil", resim: G + "47-sil.png", ad: "/kitap/sil/4" }
      ]},
    not: "Bu konunun sonunda bu üç sayfa + ekleme sayfası çalışıyor olacak." },

  { tur: "uygulama", baslik: "Kitap ekle",
    gorsel: { tip: "sayfalar", ana: { resim: G + "47-ekle.png", ad: "/kitap/ekle" },
      dallar: [{ buton: "Kaydet", resim: G + "47-ekle-sonuc.png", ad: "veri tabanına yazıldı" }] },
    adimlar: [
      "KitapController: [HttpGet] Ekle() → View().",
      "Views/Kitap/Ekle.cshtml: @model Kitap, asp-validation-summary, dört alan (label + input asp-for), Kaydet.",
      "[HttpPost][ValidateAntiForgeryToken] Ekle(Kitap kitap): ModelState.IsValid ise using (var db = new KutuphaneDbContext()) { db.Add(kitap); db.SaveChanges(); }",
      "Geçersizse return View(kitap); (kitapta yanlışlıkla View(model) yazıyor)."
    ],
    kitap: "s. 275–276 · 19. Uygulama" },

  { tur: "bilgi", baslik: "Ekledikçe tablo dolar",
    gorsel: [
      { tip: "resim", yol: G + "47-ekle-hata.png", yazi: "Kurala uymayan kayıt girilmez: ad boş, tür 5 harften kısa." },
      Object.assign({}, KT, { satirlar: [[1, "Çalı Kuşu", "Reşat Nuri Güntekin", "Roman", "İnkılap"], [2, "Sinekli Bakkal", "Halide Edib Adıvar", "Roman", "Can"], [3, "Nutuk", "Mustafa Kemal Atatürk", "Tarih", "Türk Tarih Kurumu"], [4, "Kaşağı", "Ömer Seyfettin", "Hikâye", "Bilgi"], [5, "Yalnızız", "Peyami Safa", "Roman", "Ötüken"]] })
    ],
    not: "KitapId'yi biz girmeyiz; veri tabanı 1, 2, 3… diye kendisi verir." },

  { tur: "bilgi", baslik: "LINQ ile veri al",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>Find(2)</code> <span>Id'si 2 olan kayıt</span></div><div><code>First(x=>…)</code> <span>ilk uyan (yoksa hata)</span></div>
      <div><code>FirstOrDefault(x=>…)</code> <span>ilk uyan (yoksa null)</span></div><div><code>Single(x=>…)</code> <span>tek kayıt (birden çoksa hata)</span></div>
      <div><code>Any(x=>…)</code> <span>var mı? true / false</span></div><div><code>Where(x=>…)</code> <span>uyanların hepsi</span></div>
      <div><code>Select(x=>x.KitapAdi)</code> <span>sadece istenen alanlar</span></div><div><code>OrderBy / OrderByDescending</code> <span>A→Z / Z→A sırala</span></div>
      <div><code>ToList()</code> <span>listeye çevir, view'e gönder</span></div></div>` },
    kod: `var sonuc = db.Kitaplar.Where(x => x.KitapYazar == "Peyami Safa").ToList();`,
    not: "x => … : “her bir x için” diye okunur." },

  { tur: "uygulama", baslik: "Kitapları listele",
    gorsel: { tip: "ikili",
      sol: { baslik: "Find(2): tek kitap", gorsel: { tip: "resim", yol: G + "47-liste-tek.png" } },
      sag: { baslik: "ToList(): hepsi", gorsel: { tip: "resim", yol: G + "47-liste.png" } }
    },
    adimlar: [
      "Liste() action: var liste = db.Kitaplar.Find(2); → View(liste). View: @model Kitap, list-group.",
      "First() ile dene.",
      "ToList() yap. View: @model IList&lt;Kitap&gt;, table ve @foreach.",
      "Sırayla dene: Where(x=>x.KitapId>=2), Where(x=>x.KitapAdi.StartsWith(\"A\")), OrderBy(x=>x.KitapAdi)."
    ],
    kitap: "s. 278–280 · 20. Uygulama (kitaptaki tablo başlıklarını hücrelerle aynı sıraya getir)" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Kitapları ada göre tersten (Z→A) sıralayıp listele.",
    kitap: "s. 280" },

  { tur: "uygulama", baslik: "Güncelle",
    gorsel: { tip: "sayfalar", ana: { resim: G + "47-liste-linkli.png", ad: "Liste" },
      dallar: [{ buton: "Güncelle", resim: G + "47-guncelle.png", ad: "Form dolu gelir, değiştir, kaydet" }] },
    adimlar: [
      "Liste tablosuna: &lt;a asp-controller=\"kitap\" asp-action=\"guncelle\" asp-route-id=\"@item.KitapId\"&gt;Güncelle&lt;/a&gt;",
      "[HttpGet] Guncelle(int id): db.Kitaplar.Find(id) → View(kitap).",
      "Guncelle.cshtml: Ekle formu + &lt;input type=\"hidden\" asp-for=\"KitapId\"&gt;",
      "[HttpPost] Guncelle(Kitap kitap): db.Update(kitap); SaveChanges(); RedirectToAction(\"Liste\")."
    ],
    kitap: "s. 280–282 · 21. Uygulama" },

  { tur: "uygulama", baslik: "Sil",
    gorsel: { tip: "sayfalar", ana: { resim: G + "47-sil.png", ad: "/kitap/sil/4: emin misin?" },
      dallar: [{ buton: "Sil", resim: G + "47-liste-sonra.png", ad: "Kaşağı listeden gitti" }] },
    adimlar: [
      "Listeye Sil linki ekle (asp-action=\"sil\").",
      "[HttpGet] Sil(int? id): id ya da kitap yoksa NotFound(); varsa View(kitap).",
      "Sil.cshtml: kitap bilgileri + asp-action=\"silonay\" formu, kırmızı Sil düğmesi.",
      "[HttpPost] SilOnay(int id): Find → db.Remove → SaveChanges → Liste'ye dön."
    ],
    kitap: "s. 282–283 · 22. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi bir LINQ sorgusu değildir?", secenekler: ["FirstOrDefault", "OrderBy", "SaveChange", "Select", "ToList"], dogru: 2 },
    { soru: "Kayıt ekledin ama tabloya gelmedi. Büyük ihtimalle ne unutuldu?", secenekler: ["db.SaveChanges()", "ToList()", "@model", "OrderBy()"], dogru: 0 },
    { soru: "Güncelleme formunda KitapId neden gizli input olarak tutulur?", secenekler: ["Tasarım için", "Hangi kaydın güncelleneceğini bilmek için", "Doğrulama için", "Gerek yok"], dogru: 1 },
    { soru: "Hiç kitabı olmayan yazarı aradın. Hata yerine null döndüren?", secenekler: ["First()", "Single()", "FirstOrDefault()", "Find().ToList()"], dogru: 2 },
    { soru: "En yeni eklenen kitap en üstte görünsün?", secenekler: ["OrderBy(x=>x.KitapId)", "OrderByDescending(x=>x.KitapId)", "Where(x=>x.KitapId)", "Select(x=>x.KitapId)"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Arama kutusu",
    kod: `public IActionResult Liste(string ara)
{
    using (var db = new KutuphaneDbContext())
    {
        var liste = db.Kitaplar.Where(x => ara == null || x.KitapAdi.Contains(ara)).ToList();
        return View(liste);
    }
}`,
    not: "Listenin üstüne GET metotlu bir form ve name=\"ara\" kutusu koy: /kitap/liste?ara=Kuş" }

]};
