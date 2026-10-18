// YPROJ · 04 · Müşterinin ihtiyaçları ve projenin sınırları  (Kitap s. 17–18, 54 · 3. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "1.2.1 / 2.1: Planlama aşamasında yapılanlar: müşterinin temel ihtiyaçları, projenin sınırları, proje lideri ve takım lideri, ekipler ve iş bölümü, zaman ve kaynak planı, maliyet, risk yönetimi, proje takvimi. Kitap örneği Stok Takip: bilişim malzemesi satan firma; ürünün tedarikçisi, müşterisi, işlemi yapan personel ve zamanı saklanmalı; personel kullanıcı adı ve şifreyle girer. Sınırlar: personel CRUD + giriş; ürün CRUD + arama; tedarikçi ve müşteri CRUD; satış, satış iptali, stok takibi. Öğrenci kendi müşterisinin ağzından ihtiyaçları ve maddeler hâlinde sınırları yazar (Sıra Sizde: Personel Takip planlaması yerine kendi projesi).",
    akis: ["Planlamada neler yapılır?", "Kitap: Stok Takip ihtiyaçları ve sınırları", "Kendi müşterinin ağzından yaz", "Sınırlar: hangi tabloda hangi işlem?"],
    hatalar: ["İhtiyaçları teknik dille yazmak (“MySQL tablosu olacak”). Müşteri dili kullanılmalı: “Hangi kitabın kimde olduğunu görmeliyim.”", "Sınırları yazmamak: proje sonsuza kadar büyür. Neyin olmayacağını da yazdırın."] },

  { tur: "bilgi", baslik: "Planlamada neler yapılır?",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🙋 Müşterinin ihtiyaçları" }, { ust: "📏 Projenin sınırları" }, { ust: "👤 Proje lideri, iş bölümü" }, { ust: "⏱️ Zaman ve kaynak" }, { ust: "💰 Maliyet" }, { ust: "⚠️ Risk yönetimi" }, { ust: "🗓️ Proje takvimi" } ] } },

  { tur: "adim", baslik: "Müşterinin temel ihtiyaçları", hafta: "3",
    kitap: { ozet: "Bilişim malzemesi satan firma için satış ve stok takibi.", metin: "Ürünün hangi firmadan geldiği, hangi müşteriye satıldığı, işlemi hangi personelin ne zaman yaptığı saklanmalı. Personel kullanıcı adı ve şifreyle girmeli.", sayfa: "s. 54" },
    sen: { metin: "Müşterinin ağzından 3–5 cümle yaz.", gorsel: { tip: "tablo", sutunlar: ["Müşteri diyor ki…"], satirlar: [["“… bir uygulamaya ihtiyacımız var.”"], ["“… bilgileri saklanmalı.”"], ["“… giriş yapabilmeli.”"]] } },
    teslim: { dosya: "P1-04_ihtiyaclar-sinirlar" } },

  { tur: "adim", baslik: "Projenin sınırları", hafta: "3",
    kitap: { ozet: "Hangi kayıtta hangi işlemler yapılacağını maddeledi.", gorsel: { tip: "tablo", sutunlar: ["Kayıt", "İşlemler"], satirlar: [["Personel", "ekle, sil, güncelle, listele + giriş"], ["Ürün", "ekle, sil, güncelle, listele, ara"], ["Tedarikçi, müşteri", "ekle, sil, güncelle, listele"], ["Satış", "satış yap, iptal et, stok takibi"]] }, sayfa: "s. 54" },
    sen: { gorsel: { tip: "tablo", sutunlar: ["Kayıt", "İşlemler"], satirlar: [["…", "ekle, sil, güncelle, listele"], ["…", "…"], ["Ana işlem: …", "…"], ["Olmayacaklar", "…"]] } },
    teslim: { dosya: "P1-04_ihtiyaclar-sinirlar", liste: ["Kullanıcı ihtiyaçlarına göre projenin sınırlarını belirledim."] } }
]};
