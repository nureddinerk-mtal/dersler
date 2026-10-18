// YPROJ · 50 · Web projesinin test, yayın ve bakımı  (Kitap s. 183–184 · 38. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "4.4: Test: proje başlangıçta belirlenen görevleri ne ölçüde yapıyor, ihtiyaçlara cevap veriyor mu, doğru çalışıyor mu, performans yeterli mi? Testler: <b>alfa</b>, <b>beta</b>, <b>kabul</b>. Yayın: yalnızca kurum içi kullanılacaksa intranet; her yerden erişilecekse dünya çapında yayın yapan sunucu (hosting) ve benzersiz isim (alan adı); hizmet alınan şirketler aynı ya da farklı olabilir. Bakım: performans, güvenilirlik ve güvenliğin sürdürülmesi; ihtiyaca göre güncelleme; her güncelleme bir sürüm (versiyon). Yıllık planda kurulum aşaması da var.",
    akis: ["Alfa, beta, kabul testi", "Intranet / hosting + alan adı", "Bakım ve sürüm"],
    hatalar: ["Okulda gerçek yayın gerekmiyor; ‘yayın planı’ yazılı olarak istenir. İsteyen öğrenci ücretsiz bir barındırma hizmetini öğretmenle birlikte deneyebilir (kart bilgisi girilmemeli)."] },
  { tur: "bilgi", baslik: "Test ve yayın",
    gorsel: { tip: "ikili", sol: { baslik: "🧪 Testler", gorsel: { tip: "akis", adimlar: [ { simge: "α", yazi: "Alfa", alt: "geliştirici ekip" }, { simge: "β", yazi: "Beta", alt: "seçilmiş kullanıcılar" }, { simge: "✅", yazi: "Kabul", alt: "müşteri" } ] } }, sag: { baslik: "🌐 Yayın", gorsel: { tip: "kartlar", kartlar: [ { ust: "🏢 Intranet", alt: "sadece kurum içi" }, { ust: "🌍 Hosting + alan adı", alt: "her yerden erişim" } ] } }, ok: "➜" } },
  { tur: "adim", baslik: "Test tablosu ve yayın planı", hafta: "38",
    kitap: { ozet: "Alfa, beta ve kabul testlerini; yayın seçeneklerini ve sürümlemeyi anlattı.", sayfa: "s. 183–184" },
    sen: { gorsel: { tip: "tablo", sutunlar: ["Test", "Kim yaptı?", "Ne denendi?", "Bulunan", "Düzeltme"], satirlar: [["Alfa", "ben", "…", "…", "…"], ["Beta", "2 arkadaşım", "…", "…", "…"], ["Kabul", "‘müşteri’ arkadaşım", "…", "…", "…"]] },
      adimlar: ["Üç test türünü yap, tabloya yaz.", "Yayın planını yaz: intranet mi, hosting + alan adı mı? Neden?", "Sürüm numarası ver (ör. 1.0) ve bakımda ne ekleyeceğini yaz."] },
    teslim: { dosya: "P3-50_test-yayin" } }
]};
