// WTUG · 48 · Tablolar arası ilişkiler  (Kitap s. 284–293)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Üç ilişki türü",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "1 ⟷ 1 Bire bir", alt: "Bir öğrencinin bir adresi var" },
      { ust: "1 ⟷ ∞ Bire çok", alt: "Bir türde çok kitap var" },
      { ust: "∞ ⟷ ∞ Çoka çok", alt: "Bir öğrenci çok kitap alır, bir kitabı çok öğrenci alır" }
    ]},
    not: "İlişki, iki tablodaki ortak alanla (yabancı anahtar 🔗) kurulur." },

  { tur: "bilgi", baslik: "Bire bir: öğrenci – adres",
    gorsel: { tip: "tablolar", iliski: "1 ⟷ 1", tablolar: [
      { ad: "Ogrenciler", anahtar: "OgrenciId", sutunlar: ["OgrenciId", "OgrenciNo", "OgrenciAdSoyad", "OgrenciSinif"], satirlar: [[1, 101, "Elif Yılmaz", "11E"], [2, 102, "Can Demir", "11E"]] },
      { ad: "Adresler", anahtar: "AdresId", yabanci: "OgrenciId", sutunlar: ["AdresId", "OgrenciAdres", "OgrenciId"], satirlar: [[1, "Atatürk Cad. No:5 Altınordu", 2]] }
    ]},
    kod: `public class Ogrenci { ...  public Adres Adres { get; set; } }
public class Adres   { ...  public int OgrenciId { get; set; }   // yabancı anahtar
                             public Ogrenci Ogrenci { get; set; } }`,
    not: "Adresler tablosunda aynı OgrenciId ikinci kez olamaz." },

  { tur: "uygulama", baslik: "Öğrenci ve adresi",
    gorsel: { tip: "sayfalar", ana: { resim: G + "48-ogrenci-liste.png", ad: "/ogrenci/liste" },
      dallar: [{ buton: "Adres Ekle", resim: G + "48-adres-ekle.png", ad: "/ogrenci/adresekle/2" }] },
    adimlar: [
      "Ogrenci ve Adres modelleri; DbContext'e DbSet&lt;Ogrenci&gt; Ogrenciler ve DbSet&lt;Adres&gt; Adresler → migration.",
      "OgrenciController: Ekle (GET/POST) ve Liste. Listedeki her satıra Adres Ekle linki.",
      "AdresEkle(int id) GET: öğrenciyi bul, ViewBag.Ogrenci ile gönder.",
      "AdresEkle view: öğrenci bilgileri, gizli OgrenciId, textarea. POST: db.Adresler.Add → SaveChanges."
    ],
    kitap: "s. 284–287 · 23. Uygulama (kitapta “Ogreciler” yazım hatası var; tek ad kullan: Ogrenciler)" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Adresi olan bir öğrenciye ikinci adres eklemeye çalış. Ne hata çıktı? Grupla çözümünü araştır, sınıfta paylaş.",
    kitap: "s. 288" },

  { tur: "bilgi", baslik: "Bire çok: tür – kitap",
    gorsel: { tip: "tablolar", iliski: "1 ⟷ ∞", tablolar: [
      { ad: "KitapTurler", anahtar: "KitapTurId", sutunlar: ["KitapTurId", "KitapTurAdi"], satirlar: [[1, "Roman"], [2, "Tarih"], [3, "Hikâye"]] },
      { ad: "Kitaplar", anahtar: "KitapId", yabanci: "KitapTurId", sutunlar: ["KitapId", "KitapAdi", "KitapTurId"], satirlar: [[1, "Çalı Kuşu", 1], [2, "Sinekli Bakkal", 1], [3, "Nutuk", 2], [4, "Kaşağı", 3]] }
    ]},
    kod: `public class KitapTur { ...  public ICollection<Kitap> Kitap { get; set; } }
public class Kitap    { ...  public int KitapTurId { get; set; }
                              public KitapTur KitapTur { get; set; } }`,
    not: "“Roman” yazısı her kitapta tekrar edilmez, sadece numarası (1) tutulur." },

  { tur: "uygulama", baslik: "Türler ve açılır liste",
    gorsel: [
      { tip: "resim", yol: G + "48-tur-ekle.png", yazi: "1 · Önce türleri ekle" },
      { tip: "resim", yol: G + "48-kitap-ekle.png", yazi: "2 · Kitap eklerken tür listeden seçilir" }
    ],
    adimlar: [
      "KitapTur modeli, Kitap'a KitapTurId + KitapTur; DbSet&lt;KitapTur&gt; KitapTurler → migration.",
      "KitapTurController: Ekle GET/POST.",
      "Kitap Ekle GET: ViewBag.KitapTurList = db.KitapTurler.OrderBy(x=>x.KitapTurAdi).ToList();",
      "View: &lt;select asp-for=\"KitapTurId\" asp-items=\"@(new SelectList(ViewBag.KitapTurList,\"KitapTurId\",\"KitapTurAdi\"))\"&gt;",
      "Liste: db.Kitaplar.Include(x=>x.KitapTur).ToList(); hücrede @item.KitapTur.KitapTurAdi"
    ],
    kitap: "s. 288–291 · 24. Uygulama" },

  { tur: "bilgi", baslik: "Çoka çok: ödünç işlemleri",
    gorsel: { tip: "tablolar", iliski: ["1 ⟷ ∞", "∞ ⟷ 1"], tablolar: [
      { ad: "Ogrenciler", anahtar: "OgrenciId", sutunlar: ["OgrenciId", "OgrenciAdSoyad"], satirlar: [[1, "Elif Yılmaz"], [2, "Can Demir"]] },
      { ad: "Islemler", anahtar: "IslemId", yabanci: ["OgrenciId", "KitapId"], sutunlar: ["IslemId", "OgrenciId", "KitapId", "AlisTarih", "VerisTarih"], satirlar: [[1, 2, 1, "05.10.2026", "19.10.2026"], [2, 2, 3, "06.10.2026", "20.10.2026"], [3, 1, 1, "21.10.2026", "04.11.2026"]] },
      { ad: "Kitaplar", anahtar: "KitapId", sutunlar: ["KitapId", "KitapAdi"], satirlar: [[1, "Çalı Kuşu"], [3, "Nutuk"]] }
    ]},
    not: "Çoka çok = iki tane bire çok + ara tablo (Islemler). Can iki kitap almış; Çalı Kuşu'nu iki öğrenci almış." },

  { tur: "uygulama", baslik: "Ödünç ver",
    gorsel: { tip: "sayfalar", ana: { resim: G + "48-islem-ekle.png", ad: "/islem/ekle" },
      dallar: [{ buton: "Kaydet", resim: G + "48-islem-sonuc.png", ad: "Islemler tablosuna yeni satır" }] },
    adimlar: [
      "Islem modeli: IslemId, OgrenciId, KitapId, AlisTarih, VerisTarih, Ogrenci, Kitap.",
      "Ogrenci ve Kitap'a ICollection&lt;Islem&gt; Islem; DbSet&lt;Islem&gt; Islemler → migration.",
      "IslemController Ekle GET: öğrenci ve kitap listelerini ViewBag ile gönder.",
      "View: iki select + iki tarih kutusu. POST: db.Add(model); SaveChanges()."
    ],
    kitap: "s. 291–293 · 25. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Ülkeler ve başkentleri iki tabloda tutuluyor. İlişki türü?", secenekler: ["Bire – Bir", "Bire – Çok", "Bire – Sıfır", "Çoka – Bir", "Çoka – Çok"], dogru: 0 },
    { soru: "Bir sınıfta çok öğrenci var, her öğrenci tek sınıfta. İlişki?", secenekler: ["Bire bir", "Bire çok", "Çoka çok"], dogru: 1 },
    { soru: "Öğrenciler ve seçtikleri dersler (bir öğrenci çok ders, bir derste çok öğrenci)?", secenekler: ["Bire bir", "Bire çok", "Çoka çok"], dogru: 2 },
    { soru: "Kitap listesinde tür adını (Roman) göstermek için hangi metot?", secenekler: ["Include(x=>x.KitapTur)", "OrderBy(x=>x.KitapTur)", "Find(x.KitapTur)", "Remove(x.KitapTur)"], dogru: 0 },
    { soru: "Çoka çok ilişki için ne gerekir?", secenekler: ["Ara bağlantı tablosu", "Tek tablo", "Sadece [Key]", "Razor Pages"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "Kim hangi kitabı almış?",
    kod: `var liste = db.Islemler
    .Include(x => x.Ogrenci)
    .Include(x => x.Kitap)
    .Where(x => x.VerisTarih < DateTime.Now)
    .ToList();
// @item.Ogrenci.OgrenciAdSoyad — @item.Kitap.KitapAdi`,
    not: "Teslim tarihi geçmiş ödünçleri listeler. Kütüphaneci için bir “gecikenler” sayfası olur." }

]};
