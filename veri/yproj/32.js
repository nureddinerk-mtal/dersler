// YPROJ · 32 · Ekran ve menü dosyaları  (Kitap s. 124–129 · 22. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "3.3: Kodlamadan önce dosya yapısı belirlenir: MainActivity (ListView ile liste), LogoActivity (açılış), KayitActivity (fragmentlerle Firebase'e kayıt), GeziRehberiActivity (detay: ImageView, TextView), GeziRehberBilgileri sınıfı (verileri toplu tutar), üç fragment (FotoKayit, TrBilgi, EngBilgi), menüler gezi_menu (Giriş Yap, Yer Ekle, Yer Sil, English) ve dilsecimi_menu (English, Geri). Layout'lar: activity_gezi_rehberi (TextView, Multiline, ImageView), activity_kayit (alt ConstraintLayout'ta iki buton, üstte fragment alanı), activity_logo (drawable'daki logo ortada), activity_main (tek ListView), fragment_foto_kayit (ImageView), fragment_tr_bilgi / eng_bilgi (EditText, Multiline). Bileşen id'leri Component Tree'den görülür. Not: logo telifli olmamalı; ticari amaçta telif alınmalı.",
    akis: ["Dosya yapısını çıkar", "Activity ve fragment layout'ları", "Menü dosyaları"],
    hatalar: ["Bileşenlere anlamlı id vermemek (button1): kitaptaki gibi editText_YerAdiGir, butonIleri1.", "Kitaptaki dosya adında yazım hatası var: ‘fragmnet_tr_bilgi.xml’ (doğrusu fragment_tr_bilgi)."] },
  { tur: "adim", baslik: "Dosya yapısı ve layout'lar", hafta: "22",
    kitap: { ozet: "4 activity, 3 fragment, 1 sınıf ve 2 menü dosyası oluşturdu.", gorsel: { tip: "agac", kok: { ad: "📁 app", cocuklar: [ { ad: "☕ java", alt: "LogoActivity, MainActivity, KayitActivity, GeziRehberiActivity, GeziRehberBilgileri, 3 Fragment" }, { ad: "🖼️ res/layout", alt: "activity_*.xml, fragment_*.xml" }, { ad: "☰ res/menu", alt: "gezi_menu.xml, dilsecimi_menu.xml" } ] } }, sayfa: "s. 124–129" },
    sen: { metin: "Eskizlerindeki her ekran için activity ya da fragment ve layout dosyasını oluştur; menünü XML'de yaz.", gorsel: { tip: "telefon", baslik: "Projem", sag: "⋮", satirlar: [ { metin: "☰ Menü: …, …, …" }, { liste: ["…", "…", "…"] } ] } },
    teslim: { dosya: "P2-32_layoutlar", liste: ["Project penceresinde dosya yapısının ekran görüntüsü", "Her layout'un Design görünümü"] } }
]};
