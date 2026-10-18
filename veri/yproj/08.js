// YPROJ · 08 · Varlık ilişki şeması  (Kitap s. 23–24, 56 · 5. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "Tasarım: fiziksel (bileşenler, arayüzler) ve mantıksal (mimari, altyapı); birbirine bağımlı olmamalı. UML diyagramlarıyla sistem modellenir. Varlık ilişki şeması: varlık sınıfı (dikdörtgen), öz nitelik (elips), birincil anahtar (alt çizgili), ilişki (bağıntı, eşkenar dörtgen). Stok Takip varlıkları: kategoriler, tedarikçiler, ürünler, müşteriler, personeller, yetkiler, satışlar, satış detayları; ilişkiler 1-n. Öğrenci en az 5 varlık ve aralarındaki 1-n ilişkileri çizer.",
    akis: ["Fiziksel / mantıksal tasarım", "VİŞ sembolleri", "Kitaptaki varlıklar", "Kendi şeman"],
    hatalar: ["n-n ilişkiyi doğrudan çizmek: kitaptaki gibi ara varlık (satış detayı) kurulmalı. Ana işlem genellikle bir ana tablo + detay tablosu ister.", "Araç: draw.io'nun Entity Relation şekilleri ya da kâğıt."] },
  { tur: "bilgi", baslik: "Varlık ilişki şeması sembolleri",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "▭ Varlık sınıfı", alt: "Urun" }, { ust: "⬭ Öz nitelik", alt: "urunAdi" }, { ust: "<u>Birincil anahtar</u>", alt: "alt çizgili" }, { ust: "◇ İlişki", alt: "1 – n" } ] } },
  { tur: "adim", baslik: "Varlık ilişki şeması", hafta: "5",
    kitap: { ozet: "Stok Takip'in 8 varlığını ve ilişkilerini çizdi.", gorsel: { tip: "varlik", varliklar: [ { ad: "Kategori", alanlar: ["🔑 kategori_id", "kategori_adi"] }, { ad: "Tedarikçi", alanlar: ["🔑 id", "firma_adi", "…"] }, { ad: "Ürün", alanlar: ["🔑 urun_kodu", "urun_adi", "stok_adedi", "fiyat"] }, { ad: "Müşteri", alanlar: ["🔑 id", "ad_soyad", "…"] }, { ad: "Personel", alanlar: ["🔑 id", "kullanici_adi", "sifre"] }, { ad: "Satış", alanlar: ["🔑 satis_id", "islemTarihi"] }, { ad: "Satış detayı", alanlar: ["🔑 satis_detay_id", "miktar", "fiyat"] } ], iliskiler: ["Kategori 1 ─ n Ürün", "Tedarikçi 1 ─ n Ürün", "Müşteri 1 ─ n Satış", "Personel 1 ─ n Satış", "Satış 1 ─ n Satış detayı", "Ürün 1 ─ n Satış detayı"] }, sayfa: "s. 24, 56" },
    sen: { metin: "En az 5 varlık; birincil anahtarları ve 1-n ilişkileri göster.", gorsel: { tip: "varlik", varliklar: [ { ad: "Varlık 1", alanlar: ["🔑 …", "…"] }, { ad: "Varlık 2", alanlar: ["🔑 …", "…"] }, { ad: "Ana işlem", alanlar: ["🔑 …", "tarih"] }, { ad: "Ana işlem detayı", alanlar: ["🔑 …", "…"] }, { ad: "Kullanıcı", alanlar: ["🔑 …", "kullanici_adi", "sifre"] } ], iliskiler: ["… 1 ─ n …"] } },
    teslim: { dosya: "P1-08_varlik-iliski", liste: ["Varlık ilişki şemasını oluşturdum."] } }
]};
