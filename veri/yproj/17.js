// YPROJ · 17 · Kullanıcılar, yetkiler ve şifreleme  (Kitap s. 78–83 · 11. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "frmPersonelIslemleri: txtAd, txtSoyad, txtAdres, mskTelefon, txtMail, txtKullanici, txtSifre … Load'da personeller ve yetkiler listelenir; iki yetki (Personel, Yönetici) VTYS'den elle eklenir. Parolalar <b>şifrelenerek</b> kaydedilir (kitap raporunda MD5). BilgiGirisKontrol, FormuTemizle, seçim, ekle, sil, güncelle. Girişten önce en az bir Yönetici tanımlanmalı.",
    akis: ["Roller tablosu", "Şifreleme metodu", "Kullanıcı formu", "İlk yöneticiyi ekle"],
    hatalar: ["MD5 kitapta kullanılıyor ama bugün güvenli sayılmıyor; öğrencilere SHA-256 ile aynı metot yapısının kurulabileceğini söyleyin (isteğe bağlı).", "Şifreyi grid'de göstermek: şifre sütunu listede gizlenmeli."] },
  { tur: "adim", baslik: "Kullanıcı formu ve şifreleme", hafta: "11",
    kitap: { ozet: "Personel formunda yetki seçtirdi, parolayı şifreleyip kaydetti.", gorsel: { tip: "akis", adimlar: [ { simge: "⌨️", yazi: "Parola: 1234" }, { simge: "🔐", yazi: "Şifreleme metodu", alt: "kitapta MD5" }, { simge: "🗄️", yazi: "Veri tabanına: 81dc9bdb…" } ] }, sayfa: "s. 78–83" },
    sen: { gorsel: { tip: "pencere", baslik: "Kullanıcı İşlemleri", satirlar: [ { etiket: "Ad soyad", deger: "" }, { etiket: "Kullanıcı adı", deger: "" }, { etiket: "Şifre", deger: "••••" }, { etiket: "Rol", deger: "▼ Yönetici" } ], dugmeler: ["YENİ", "EKLE", "SİL", "GÜNCELLE"] },
      adimlar: ["Rolleri Workbench'ten elle ekle.", "Şifreleme metodunu yaz.", "Kullanıcı formunu yap; şifreyi kaydetmeden önce şifrele.", "En az bir yönetici kullanıcı ekle."] },
    teslim: { dosya: "P1-17_kullanicilar", liste: ["Veri tabanında şifrenin şifreli göründüğü ekran görüntüsü"] } }
]};
