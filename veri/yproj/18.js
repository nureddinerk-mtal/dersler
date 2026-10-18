// YPROJ · 18 · Giriş ekranı  (Kitap s. 83–85 · 11. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "frmGiris: txtKullaniciAdi, txtSifre (PasswordChar *), btnGiris. Girilen parola aynı metotla şifrelenip veri tabanındakiyle karşılaştırılır; doğruysa ana sayfa açılır ve kullanıcı bilgisi aktarılır. Program.cs'de başlangıç formu frmGiris; giriş formu kapanınca uygulama sonlanır (FormClosed → Application.Exit).",
    akis: ["Giriş formu", "Şifreleyip karşılaştır", "Program.cs başlangıç formu", "Kapanınca uygulama sonlansın"],
    hatalar: ["Ana sayfa açılınca giriş formunu Close() ile kapatmak tüm uygulamayı kapatır: kitaptaki gibi Hide() ve FormClosed'da Exit.", "Hatalı girişte hangi bilginin yanlış olduğunu söylememek (güvenlik): “Kullanıcı adı veya şifre hatalı.”"] },
  { tur: "adim", baslik: "Giriş ekranı", hafta: "11",
    kitap: { ozet: "Kullanıcı adı ve şifreyle giriş; uygulama giriş formuyla açılır.", sayfa: "s. 83–85" },
    sen: { gorsel: { tip: "pencere", baslik: "Giriş", satirlar: [ { etiket: "Kullanıcı adı", deger: "" }, { etiket: "Şifre", deger: "****" } ], dugmeler: ["GİRİŞ YAP"], vurgu: "GİRİŞ YAP" },
      adimlar: ["Giriş formunu yap; şifre kutusunda PasswordChar = *.", "Girilen şifreyi şifrele, veri tabanındakiyle karşılaştır.", "Doğruysa ana sayfayı aç, kullanıcının adını ve rolünü gönder.", "Program.cs'de başlangıç formu giriş formu olsun.", "Giriş formu kapanınca uygulama kapansın."] },
    teslim: { dosya: "P1-18_giris", liste: ["Doğru ve hatalı girişi denedim."] } }
]};
