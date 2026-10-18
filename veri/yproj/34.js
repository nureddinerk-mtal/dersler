// YPROJ · 34 · Açılış ekranı ve model sınıfı  (Kitap s. 132–133 · 23. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "LogoActivity: ViewBinding ile layout; CountDownTimer'dan türeyen ZamanSayaci sınıfı (5000 ms, 1000 ms aralık), onFinish'te Intent ile MainActivity. GeziRehberBilgileri: Serializable sınıf; imageID, Türkçe (yerAdi, ulkeAdi, sehirAdi, tarihce, hakkinda) ve İngilizce alanlar; kurucu metot. Öğrenci açılış ekranını ve verisini toplu tutan model sınıfını yazar.",
    akis: ["Açılış: zamanlayıcı ve Intent", "Model sınıfı: alanlar, kurucu, Serializable"],
    hatalar: ["Açılıştan sonra finish() çağırmamak: geri tuşuyla açılış ekranına dönülür (kitap kodunda da yok; eklenebilir)."] },
  { tur: "adim", baslik: "Açılış ekranı ve model sınıfı", hafta: "23",
    kitap: { ozet: "Logo 5 saniye görünüp ana sayfaya geçiyor; veriler tek sınıfta toplanıyor.", gorsel: { tip: "ikili",
      sol: { baslik: "LogoActivity", gorsel: { tip: "telefon", satirlar: [ { resim: "🏛️", yazi: "logo · 5 sn" } ] } },
      sag: { baslik: "GeziRehberBilgileri", gorsel: { tip: "varlik", varliklar: [ { ad: "GeziRehberBilgileri", alanlar: ["imageID", "yerAdi, ulkeAdi, sehirAdi", "tarihce, hakkinda", "placeName … about", "──────", "kurucu metot"] } ] } }, ok: "·" }, sayfa: "s. 132–133" },
    sen: { gorsel: { tip: "varlik", varliklar: [ { ad: "ModelSinifim", alanlar: ["… (Firestore'daki alanlar)", "──────", "kurucu metot", "implements Serializable"] } ] },
      adimlar: ["Açılış ekranını zamanlayıcıyla yaz; süre bitince ana sayfaya geç.", "Firestore'a gidecek verileri tutan model sınıfını yaz."] },
    teslim: { dosya: "P2-34_acilis-model", liste: ["Açılış ekranından ana sayfaya geçişin ekran görüntüsü"] } }
]};
