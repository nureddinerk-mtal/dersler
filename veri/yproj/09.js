// YPROJ · 09 · Veri akış ve sınıf diyagramı  (Kitap s. 25, 56 · 6. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "Veri akış diyagramı: sistemdeki veri akışını grafikle gösterir (dış varlık, süreç, veri deposu, akış okları). Sınıf diyagramı: sınıflar, özellikleri, metotları ve bağlantıları (telefon rehberinde Kisi ve Grup sınıfları; metotlar Ekle, Listele, Guncelle, Sil, KisiAra). Stok Takip'te sınıflar Entity Framework ile veri tabanından otomatik üretileceği için kitap bu projede yalnızca veri akış diyagramını çiziyor (Görsel 2.3); sınıf diyagramı 1. birimde (Görsel 1.8). Öğrenci ana işleminin veri akışını ve en az iki sınıfın diyagramını çizer (Sıra Sizde: tasarım işlemleri).",
    akis: ["Veri akış diyagramı sembolleri", "Ana işleminin veri akışı", "Sınıf diyagramı: özellikler, metotlar"],
    hatalar: ["Veri akışını program akış şeması (if/döngü) gibi çizmek. Veri akışında ‘veri nereden gelir, nereye yazılır’ gösterilir.", "Metot adları fiil, sınıf adları isim olmalı (s. 27): Kaydet, Sil / Urun, Kitap."] },
  { tur: "adim", baslik: "Veri akış diyagramı", hafta: "6",
    kitap: { ozet: "Ürün satışında verinin yolunu çizdi.", gorsel: { tip: "akis", adimlar: [ { simge: "🧑", yazi: "Personel", alt: "dış varlık" }, { simge: "⚙️", yazi: "Satış yap", alt: "süreç" }, { simge: "🗄️", yazi: "Satışlar, satış detayları", alt: "veri deposu" }, { simge: "⚙️", yazi: "Stoğu düş", alt: "süreç" }, { simge: "🗄️", yazi: "Ürünler" } ] }, sayfa: "s. 25, 56" },
    sen: { metin: "Ana işleminin verisi nereden gelir, hangi tablolara yazılır?", gorsel: { tip: "akis", adimlar: [ { simge: "🧑", yazi: "…", alt: "dış varlık" }, { simge: "⚙️", yazi: "…", alt: "süreç" }, { simge: "🗄️", yazi: "…", alt: "veri deposu" } ] } },
    teslim: { dosya: "P1-09_veri-akis", liste: ["Veri akış diyagramlarını oluşturdum."] } },
  { tur: "adim", baslik: "Sınıf diyagramı", hafta: "6",
    kitap: { ozet: "Telefon rehberinde Kisi ve Grup sınıflarını çizdi.", gorsel: { tip: "varlik", varliklar: [ { ad: "Kisi", alanlar: ["ad, soyad, telefon1 …", "──────", "Ekle()", "Listele()", "Guncelle()", "Sil()", "KisiAra()"] }, { ad: "Grup", alanlar: ["grupAdi", "──────", "Ekle()", "Listele()", "Guncelle()", "Sil()"] } ], iliskiler: ["Grup 1 ─ n Kisi"] }, sayfa: "s. 25" },
    sen: { metin: "En az iki sınıf: üstte özellikler, altta metotlar.", gorsel: { tip: "varlik", varliklar: [ { ad: "Sınıf 1", alanlar: ["özellikler …", "──────", "Metot() …"] }, { ad: "Sınıf 2", alanlar: ["özellikler …", "──────", "Metot() …"] } ] } },
    teslim: { dosya: "P1-09_sinif", liste: ["Sınıf diyagramlarını oluşturdum."] } }
]};
