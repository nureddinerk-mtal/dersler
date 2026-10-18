// SOS · 10 · Bilgi güvenliği, siber zorbalık, şifre güvenliği  (Kitap s. 91–94, 125)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "2.2: İnternette de riskler var: kişisel bilgilerin izinsiz görülmesi, kullanılması. Sıra Sizde: kendi bilgi güvenliğin için önlemler. Bilgi: insan aklının idrak ettiği olguların tümü; bilişimde işlenen verilerin tümü. <b>Bilgi güvenliği</b>: bilginin izinsiz elde edilmesi, değiştirilmesi, sızdırılması, çalınması, zarar görmesine karşı önlemler. Üç ilke: <b>gizlilik</b> (banka bilgisinin saldırganın eline geçmesi ihlal), <b>bütünlük</b> (web sayfası içeriğinin değiştirilmesi), <b>erişilebilirlik</b> (siteye erişimin engellenmesi); biri zarar görürse zafiyet. 2.3 Siber zorbalık: yalan haber, aşağılama, kötü söz, tehdit, utandırıcı görsel; ruhsal, fiziksel, duygusal hasar. Sıra Sizde: şaka ve zorbalık farkı. Her paylaşım dijital iz bırakır. İlk adım: ebeveyne ya da sorumlu bir yetişkine söylemek; platformun “Şikâyet Et” özelliği, ebeveyn rehberleri. Güvenlik yazılımları: antivirüs ve güvenlik duvarı (güncel), e-posta güvenlik eklentileri, lisanslı ve güncel yazılım, harici diski taratma. Korunma: kişisel bilgi/görsel paylaşmama, gizlilik ayarları, saldırıları bildirme, tanımadığını eklememe, paylaşımı sınırlama, olası zorbaları engelleme. Bilgi kutusu (s. 125): şifre güvenliği.",
    akis: ["Sıra Sizde: kendi önlemlerin", "Bilgi güvenliğinin 3 ilkesi", "Siber zorbalık ve dijital iz", "Sıra Sizde: şaka mı zorbalık mı?", "İlk adım: bir yetişkine söyle", "Güvenlik yazılımları", "Korunma yöntemleri", "Şifre güvenliği", "Test"],
    hatalar: ["Bu konu öğrencilerin kendi yaşantısına dokunabilir. Sınıfta yaşanmış olayları isim vererek anlattırmayın; yaşayan öğrenci için okul rehberlik servisini hatırlatın.", "Kitap “şifreler belirli aralıklarla değiştirilmeli” diyor; güncel öneri (NIST): güçlü ve benzersiz şifre + iki aşamalı doğrulama; sızıntı şüphesi yoksa sık değiştirmeye gerek yok. İsterseniz belirtin.", "Birim testi 4. soru: zorbayı ikna etmeye çalışmak gerekmez (Y); doğrusu yetişkine söylemek, engellemek, bildirmek."],
    sorular: [["Web sayfasının içeriğinin değiştirilmesi hangi ilkeyi ihlal eder?", "Bütünlük."], ["Zorba sahte hesap kullanıyorsa yakalanmaz mı?", "Her paylaşım dijital iz bırakır; platformların ve hukukun iz sürme yolları vardır."]],
    not: "Zorbalığa maruz kalan öğrenciler için okulun rehberlik servisi ve gerekirse 112 / Aile ve Sosyal Hizmetler danışma hattı (ALO 183) bilgisini sınıf panosunda tutun." },

  { tur: "odev", baslik: "Sıra Sizde · Önlemlerim",
    metin: "İnternette kendi bilgi güvenliğini tehdit edecek bir durumla karşılaşmamak için neler yaparsın? Arkadaşlarınla paylaş.",
    kitap: "s. 91" },

  { tur: "bilgi", baslik: "Bilgi güvenliğinin üç ilkesi",
    gorsel: { tip: "tablo", sutunlar: ["İlke", "Anlamı", "İhlal örneği"], satirlar: [
      ["🔒 Gizlilik", "yetkisiz kişinin eline geçmesin", "banka hesap bilgisinin saldırgana geçmesi"],
      ["🧩 Bütünlük", "yetkisiz kişi değiştiremesin", "web sayfası içeriğinin değiştirilmesi"],
      ["🔓 Erişilebilirlik", "gerektiğinde kullanılabilsin", "siteye erişimin engellenmesi"]] },
    metin: "Biri zarar görürse <b>güvenlik zafiyeti</b> oluşur." },

  { tur: "bilgi", baslik: "Siber zorbalık",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "📰 Yalan haber" }, { ust: "😠 Aşağılayıcı ifade" }, { ust: "⚠️ Tehdit" }, { ust: "📸 Utandırıcı görsel" } ] },
    metin: "Zorbalar kimliğini gizlese de her paylaşım <b>parmak izi gibi dijital iz</b> bırakır." },

  { tur: "odev", baslik: "Sıra Sizde · Şaka mı, zorbalık mı?",
    metin: "“Şaka” ve “zorbalık” kavramlarını sözlükte ve internette araştır, aradaki farkı sınıfta tartış.",
    kitap: "s. 92" },

  { tur: "bilgi", baslik: "Zorbalığa uğrarsam",
    gorsel: { tip: "akis", adimlar: [ { simge: "🧑‍🤝‍🧑", yazi: "Ebeveynine ya da sorumlu bir yetişkine söyle", alt: "ilk ve en önemli adım" }, { simge: "🚩", yazi: "Platformda “Şikâyet Et”" }, { simge: "⛔", yazi: "Hesabı engelle" } ] } },

  { tur: "bilgi", baslik: "Güvenlik yazılımları ve korunma",
    gorsel: { tip: "ikili",
      sol: { baslik: "🛡️ Cihazında", gorsel: { tip: "kartlar", kartlar: [ { ust: "Antivirüs, güvenlik duvarı", alt: "güncel" }, { ust: "E-posta güvenlik eklentisi" }, { ust: "Lisanslı, güncel yazılım" }, { ust: "USB belleği taramadan açma" } ] } },
      sag: { baslik: "📱 Sosyal medyada", gorsel: { tip: "kartlar", kartlar: [ { ust: "Adres, telefon, kimlik paylaşma" }, { ust: "Gizlilik ayarlarını yap" }, { ust: "Tanımadığını ekleme" }, { ust: "Paylaşımı kişilere göre sınırla" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Şifre güvenliği",
    gorsel: { tip: "ikili",
      sol: { baslik: "❌ Zayıf", gorsel: { tip: "kartlar", kartlar: [ { ust: "Sıralı, tekrar eden rakamlar" }, { ust: "Klavyede yan yana harfler" }, { ust: "Doğum tarihi, yakınının adı" }, { ust: "Her yerde aynı şifre" } ] } },
      sag: { baslik: "✅ Güçlü", gorsel: { tip: "kartlar", kartlar: [ { ust: "En az 8 karakter" }, { ust: "Büyük-küçük harf, rakam, noktalama" }, { ust: "Her hesaba farklı şifre" }, { ust: "İki aşamalı doğrulama" } ] } },
      ok: "➜" },
    kitap: "s. 125 · Bilgi kutusu" },

  { tur: "test", sorular: [
    { soru: "Bir web sayfasının içeriğinin saldırgan tarafından değiştirilmesi hangi ilkenin ihlalidir?", secenekler: ["Gizlilik", "Bütünlük", "Erişilebilirlik", "Etik"], dogru: 1 },
    { soru: "Bir siteye erişimin engellenmesi hangi ilkenin ihlalidir?", secenekler: ["Gizlilik", "Erişilebilirlik", "Bütünlük", "Dürüstlük"], dogru: 1 },
    { soru: "Siber zorbalığa uğradığını düşünen kişinin ilk ve en önemli adımı nedir?", secenekler: ["Zorbaya cevap yazmak", "Paylaşımı çoğaltmak", "Hesabını herkese açmak", "Ebeveynine ya da sorumlu bir yetişkine söylemek"], dogru: 3 },
    { soru: "Hangisi güçlü şifre özelliğidir?", secenekler: ["Harf, rakam ve noktalama içermesi", "Tüm hesaplarda aynı olması", "Doğum tarihi içermesi", "Klavyede yan yana harfler"], dogru: 0 },
    { soru: "Hangisi siber zorbalıktan korunma yöntemi değildir?", secenekler: ["Gizlilik ayarlarını yapmak", "Tanımadığı kişileri eklememek", "Telefon numarasını herkese açık paylaşmak", "Olası zorba hesapları engellemek"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Şifre ne kadar dayanır?",
    metin: "Bir bilgisayar saniyede milyarlarca şifre deneyebilir. 6 rakamlı bir şifrede yalnızca 1 milyon olasılık var; 12 karakterli harf, rakam ve sembol karışık şifrede olasılık sayısı 20 basamaklı bir sayıdır. Kendi şifrelerini düşün: hangisi ilk denemelerde bulunurdu? (Şifreni kimseye söyleme!)" }

]};
