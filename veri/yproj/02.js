// YPROJ · 02 · Özgün masaüstü proje fikrini seç  (Kitap s. 16 · Yıllık plan 1. hafta)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Öğrenci masaüstü (Windows Forms, C#, MySQL) projesinin konusunu seçer ve kitaptaki ilk Sıra Sizde'nin (hazırlık aşaması) kontrol listesiyle fizibilitesini yapar. Kitapta geçen konular kapalı: telefon rehberi, stok takip, personel takip. Büyüklük en az Stok Takip kadar olmalı: iki rollü giriş, en az 5 ilişkili tablo, bir ana işlem ve detayı (kitapta satış + satış detayı), ekle/sil/güncelle/listele, arama. Yıllık plan temrinlerinden kütüphane ve restoran açık; öğrenci kendi fikrini de getirebilir.",
    akis: ["Kapalı konular", "Büyüklük ölçütleri", "Fikir kartı", "Fizibilite kontrol listesi", "🧑‍🏫 Fikir onayı"],
    hatalar: ["Çok küçük fikir (2 tablolu not defteri) ya da çok büyük fikir (muhasebe programı). Ölçütleri birlikte sayın: tablo sayısı, ana işlem.", "Ana işlemi olmayan fikir: her projede kitaptaki ‘satış’ gibi birden çok tabloyu birlikte değiştiren bir işlem olmalı (ödünç verme, sipariş, randevu, kiralama…).", "Sınıfta aynı konuyu seçen iki öğrenci olursa ana işlemleri farklı olsun."],
    sorular: [["Kütüphane seçebilir miyim?", "Evet; yıllık plan temrinlerinde var, kitapta örnek değil. Ana işlem: ödünç verme / iade."], ["Oyun yapabilir miyim?", "Masaüstü bölümünde veri tabanlı form uygulaması isteniyor; oyun mobil bölümde seçilebilir."]],
    not: "Onayladığınız fikirleri bir listede tutun; aynı fikir tekrarlanmasın." },

  { tur: "bilgi", baslik: "Kitapta geçen konular seçilemez",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🚫 Telefon rehberi" }, { ust: "🚫 Stok takip" }, { ust: "🚫 Personel takip" } ] },
    metin: "Aynı türde (masaüstü), <b>senin</b> fikrin olsun." },

  { tur: "bilgi", baslik: "En az bu kadar büyük olsun",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🔐 Giriş ekranı", alt: "en az 2 rol" }, { ust: "🗄️ En az 5 tablo", alt: "birbirine bağlı" }, { ust: "⭐ Ana işlem + detayı", alt: "kitapta: satış + satış detayı" }, { ust: "✏️ Ekle, sil, güncelle, listele" }, { ust: "🔍 Arama" } ] } },

  { tur: "adim", baslik: "Fikir kartın", hafta: "1",
    kitap: { ozet: "Telefon rehberi projesini fizibilite ölçütleriyle inceledi.", metin: "İhtiyaç, maliyet, kullanılabilirlik, yöntem-teknik ve yasalara uygunluk açısından sorun yoksa projeye başlanır.", sayfa: "s. 16" },
    sen: { metin: "Projenin adını, kimin için olduğunu ve ana işlemini yaz; fizibiliteyi kontrol et.",
      gorsel: { tip: "tablo", sutunlar: ["Başlık", "Senin projen"], satirlar: [["Proje adı", "…"], ["Kim kullanacak? (müşteri)", "…"], ["Hangi sorunu çözüyor?", "…"], ["Ana işlem", "…"], ["Tablolar (en az 5)", "…"], ["Roller (en az 2)", "…"]] } },
    teslim: { dosya: "P1-02_fikir-karti", liste: ["Kullanıcı ihtiyacı ve maliyet açısından yapılabilirliği kontrol ettim.", "Kullanılabilirliği kontrol ettim.", "Yöntem ve teknik açıdan yapılabilirliğini inceledim.", "Yasalara uygunluğunu (telif vb.) kontrol ettim."] },
    onay: "Hocana göster: fikir onayı almadan planlamaya geçme." }

]};
