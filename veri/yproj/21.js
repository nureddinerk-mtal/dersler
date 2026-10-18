// YPROJ · 21 · Test ve kullanıcı kabul testi  (Kitap s. 42–45, 94–99 · 11–12. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "1.2.4: Uygulama amaç ve hedeflere göre test edilir; eksik ve hatalar belgelenir; hatalı aşamaya dönülür; test bitmeden yayın yapılmaz. Kullanıcı kabul testi: müşteri dener, düzeltmeleri ister. Hatalar çoğunlukla analiz ve tasarımdan kaynaklanır. Stok Takip testinde bulunanlar: ürün arama eksik (txtAraUrunAdi + TextChanged), satış iptalinde onay yok (MessageBox Evet/Hayır), kullanıcı kabul testinde anlamsız hata mesajı (UNIQUE ihlali) → anlamlı mesaj. Sıra Sizde: diğer sayfalarda silme onayı ve anlamlı hata mesajları. Araştırma: test yazılımları. Öğrenci test tablosu yapar, bir arkadaşı ‘müşteri’ olarak kabul testi yapar.",
    akis: ["Test nedir?", "Test tablosu", "Silmede onay", "Anlamlı hata mesajları", "Arkadaşınla kullanıcı kabul testi"],
    hatalar: ["Sadece doğru verilerle test etmek: boş, çok uzun, harf, tekrar eden kayıtla denenmeli.", "Kabul testinde ‘müşteri’ olan arkadaş projeyi hiç görmemiş olmalı; bulduklarını tabloya yazmalı."] },
  { tur: "adim", baslik: "Test tablosu", hafta: "11–12",
    kitap: { ozet: "Her sayfayı test etti; eksik aramayı ve onaysız iptali buldu, düzeltti.", gorsel: { tip: "tablo", sutunlar: ["Bulunan", "Düzeltme"], satirlar: [["Ürün arama yok", "arama kutusu + TextChanged"], ["Satış iptalinde onay yok", "MessageBox Evet / Hayır"], ["Anlamsız hata mesajı", "kullanıcıya anlamlı mesaj"]] }, sayfa: "s. 94–98" },
    sen: { gorsel: { tip: "tablo", sutunlar: ["Sayfa", "Ne denedim?", "Beklenen", "Sonuç", "Düzeltme"], satirlar: [["…", "boş kayıt", "uyarı", "…", "…"], ["…", "aynı kaydı iki kez", "anlamlı mesaj", "…", "…"], ["…", "sil → Hayır", "silinmez", "…", "…"]] },
      adimlar: ["Her sayfada ekle, sil, güncelle, listele, arama ve girişleri dene.", "Bütün silme işlemlerine Evet / Hayır onayı ekle.", "Hata mesajlarını kullanıcının anlayacağı hâle getir.", "Bir arkadaşın ‘müşteri’ olsun: kabul testi yapsın, bulduklarını yazsın."] },
    teslim: { dosya: "P1-21_test", liste: ["Müşteri ihtiyaçlarını karşılayıp karşılamadığını test ettim.", "Uygulamanın hata verip kapanmadığını kontrol ettim.", "Eksikleri giderdim.", "Hataları düzelttim."] } }
]};
