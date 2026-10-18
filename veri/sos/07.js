// SOS · 07 · E-ticarette ödeme yöntemleri  (Kitap s. 68–74)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.1.2: Ödeme sanal ortamda olduğu için güven sorunu var; güvenlik önlemi ve birden çok ödeme yöntemi güveni artırır. <b>Kredi kartı</b> (en çok kullanılan; banka sorumlu; taksit, indirim; site SSL + bankadan sanal POS; CVC, SMS, 3D Secure). <b>Havale / EFT</b> (aynı banka: havale, farklı banka: EFT; kullanıcı kontrol eder; ödeme hemen geçmeyebilir, onay elle, işlem ücreti olabilir). <b>Sanal kart</b> (internet şubesinden farklı numara, CVC, tarih; limiti sahibi belirler, silinebilir). <b>Elektronik para</b> (kuruluşa üye ol, para yükle, sadece hesap bilgisiyle öde; şirket olmak gerekmez, 18 yaş altı da kullanabilir; güven tereddüdü). Sıra Sizde: elektronik para kuruluşlarını araştır. <b>Kapıda ödeme</b> (güvenmeyenler, düşük puanlı satıcı, sosyal medya alışverişleri; tahsilat ücreti; satıcıya geri dönen kargo zararı). <b>Mobil ödeme</b> (GSM operatörü; faturaya ya da bakiyeden). <b>E-cüzdan</b> (kimlik, kart, e-para saklar; mağazada da kullanılır). <b>Elektronik çek</b> (firmalar arası; dijital imzayla geçerli). <b>Çevrimiçi ödeme sistemleri</b> (fintek firmaları; tek tek sanal POS almaya gerek yok; yeni ve küçük işletmelere uygun). <b>Karekod</b> (21 Ağustos 2020 Tr Karekod yönetmeliği; banka uygulaması yeterli). <b>Kripto para ve dijital cüzdan</b> (merkezsiz, blokzincir). Sonuç: en az iki üç yöntem sunulmalı.",
    akis: ["Ödeme neden kritik?", "Kart, havale/EFT, sanal kart", "Elektronik para + Sıra Sizde", "Kapıda ödeme", "Mobil, e-cüzdan, e-çek", "Çevrimiçi ödeme sistemleri, karekod, kripto", "Test"],
    hatalar: ["Kitap havale/EFT'yi “çevrimiçi kredi kartı kullanımına göre daha güvenli” diyor; 3D Secure'lu kart ödemesinde itiraz ve iade hakkı (chargeback) da var. Havale yapılan sahte satıcıdan para geri alınması çok zordur; dolandırıcılıkların çoğu havale ile olur. Öğrencileri bu konuda uyarın.", "Kripto paralarla ödeme Türkiye'de 16 Nisan 2021 tarihli TCMB yönetmeliğiyle yasaklandı; kitapta bu yok.", "Kitap mobil ödemeyi “hiçbir bilgi girmeden yapıldığı için son derece güvenli” diyor; telefonu ele geçiren kişi de ödeme yapabilir. Mobil ödeme limitlerini ve kapatma ayarını anlatın.", "Elektronik para kuruluşları için 18 yaş altı kullanım bugün genellikle veli onayı ister."],
    sorular: [["Sanal kartın asıl faydası?", "Bilgiler çalınsa bile belirlediğin limitten fazlası harcanamaz; kartı istediğin an silersin."], ["Satıcı neden kapıda ödemeyi sevmez?", "Teslim alınmayan ürün geri döner; satıcı kargo ücretini öder, zarar eder."]],
    not: "Birim testi 8. soru (kripto için elektronik cüzdan gerekir, D) bu konudan." },

  { tur: "bilgi", baslik: "Kartla ödeme nasıl çalışır?",
    gorsel: { tip: "akis", adimlar: [ { simge: "🧑", yazi: "Kart bilgisi", alt: "+ CVC" }, { simge: "🔒", yazi: "SSL'li site" }, { simge: "🏧", yazi: "Sanal POS" }, { simge: "🏦", yazi: "Banka doğrular", alt: "3D Secure" }, { simge: "🏪", yazi: "Para satıcıya" } ] },
    metin: "En çok kullanılan yöntem. Güvenlikten <b>banka</b> sorumlu; taksit ve indirim imkânı var." },

  { tur: "bilgi", baslik: "Havale / EFT ve sanal kart",
    gorsel: { tip: "ikili",
      sol: { baslik: "🏦 Havale / EFT", gorsel: { tip: "kartlar", kartlar: [ { ust: "Havale", alt: "aynı banka" }, { ust: "EFT", alt: "farklı banka" }, { ust: "Onay elle yapılır", alt: "ödeme hemen geçmeyebilir" } ] } },
      sag: { baslik: "💳 Sanal kart", gorsel: { tip: "kartlar", kartlar: [ { ust: "İnternet şubesinden" }, { ust: "Farklı numara, CVC, tarih" }, { ust: "Limiti sen belirlersin", alt: "istediğinde silersin" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Elektronik para",
    gorsel: { tip: "akis", adimlar: [ { simge: "📝", yazi: "Kuruluşa üye ol" }, { simge: "💳", yazi: "Kartını tanımla" }, { simge: "⬆️", yazi: "Para yükle" }, { simge: "🛒", yazi: "Sadece hesap bilgisiyle öde" } ] },
    metin: "Kart bilgisi tek bir yerde durur, her siteye girilmez.",
    not: "Herkes hesap açabilir; bu da güven konusunda tereddüt yaratır." },

  { tur: "odev", baslik: "Sıra Sizde · Elektronik para",
    metin: "Türkiye'de ve dünyada elektronik para hizmeti veren kuruluşları bul. Güvenilirlik, altyapı ve geçerlilik bilgilerini topla, sınıfta paylaş.",
    kitap: "s. 70" },

  { tur: "bilgi", baslik: "Kapıda ödeme",
    gorsel: { tip: "ikili",
      sol: { baslik: "🧑 Müşteri için", gorsel: { tip: "kartlar", kartlar: [ { ust: "✅ Çok güvenilir" }, { ust: "➖ Tahsilat ücreti" } ] } },
      sag: { baslik: "🏪 Satıcı için", gorsel: { tip: "kartlar", kartlar: [ { ust: "✅ Güvenmeyen müşteriyi kazanır" }, { ust: "➖ Adreste kimse yok" }, { ust: "➖ Vazgeçti, parası yetmedi" }, { ust: "➖ Kargo geri döner, zarar" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Diğer yöntemler",
    gorsel: { tip: "tablo", sutunlar: ["Yöntem", "Nasıl?"], satirlar: [
      ["📱 Mobil ödeme", "GSM operatörü; tutar faturaya yansır ya da bakiyeden düşer"],
      ["👛 E-cüzdan", "kimlik, kart ve e-para saklanır; bilgi girmeden ödeme"],
      ["🧾 Elektronik çek", "firmalar arası; dijital imzayla geçerli"],
      ["🔗 Çevrimiçi ödeme sistemleri", "fintek firması; tek tek bankadan sanal POS almaya gerek yok"],
      ["🔳 Karekod", "banka uygulamasıyla okut, öde (2020'den beri)"],
      ["🪙 Kripto para", "merkezi kuruluşu yok; dijital cüzdanlar arası kod aktarımı"]] },
    metin: "Sitede en az <b>iki üç</b> ödeme yöntemi sunulmalı." },

  { tur: "test", sorular: [
    { soru: "Farklı bankalardaki hesaplar arasındaki para transferine ne denir?", secenekler: ["Havale", "EFT", "Sanal POS", "Karekod"], dogru: 1 },
    { soru: "Limiti sahibi tarafından belirlenen, istendiğinde silinebilen kart hangisidir?", secenekler: ["E-cüzdan", "Kredi kartı", "Elektronik çek", "Sanal kart"], dogru: 3 },
    { soru: "Tutarın telefon faturasına yansıdığı yöntem hangisidir?", secenekler: ["Mobil ödeme", "Havale", "Kripto para", "Elektronik çek"], dogru: 0 },
    { soru: "Kapıda ödemenin satıcı açısından riski hangisidir?", secenekler: ["Bankanın sorumlu olması", "SSL gerekmesi", "Teslim alınmayan ürünün kargo masrafı", "Taksit yapılması"], dogru: 2 },
    { soru: "Girişimciyi bankalardan tek tek sanal POS alma yükünden kurtaran yöntem hangisidir?", secenekler: ["Kapıda ödeme", "Çevrimiçi ödeme sistemleri", "Havale", "Elektronik çek"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kart numaram nerede?",
    metin: "Telefonla temassız ödeme yaparken satıcıya gerçek kart numaran gitmez; telefon her işlem için tek kullanımlık bir kod (token) üretir. Bu yöntem, kitaptaki sanal kart fikrine nasıl benziyor?" }

]};
