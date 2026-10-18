// YPROJ · 38 · Mobil uygulamanın test ve bakımı  (Kitap s. 148–150 · 25. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "3.4: Kodlamanın bitmesi hazır olmak değildir; yazılımcı sorun çıkarmaya çalışan kullanıcı gibi test etmeli. Gezi Rehberi testinde: dil seçimine göre liste ve detay doğru, logo ekranı doğru; eksik: boş bilgiyle kayıt yapılabiliyor. Çözüm: fotoğraf seçilmediyse İleri butonu pasif (onCreate ve onResume'da imageData kontrolü). Sıra Sizde: Türkçe ve İngilizce giriş alanları dolmadan İleri / Kaydet aktif olmasın; geri dönüldüğünde bilgiler yerindeyse butonlar aktif kalsın.",
    akis: ["Sorun çıkaran kullanıcı gibi test", "Boş girişte butonu pasif yap", "Test tablosu"] },
  { tur: "adim", baslik: "Test ve bakım", hafta: "25",
    kitap: { ozet: "Fotoğraf seçilmeden İleri butonunu pasif yaptı.", gorsel: { tip: "ikili", sol: { baslik: "Fotoğraf yok", gorsel: { tip: "telefon", satirlar: [ { resim: "➕", yazi: "fotoğraf seç" }, { dugme: "İleri (pasif)" } ] } }, sag: { baslik: "Fotoğraf seçildi", gorsel: { tip: "telefon", satirlar: [ { resim: "🏞️" }, { dugme: "İleri", vurgu: true } ] } }, ok: "➜" }, sayfa: "s. 148–150" },
    sen: { gorsel: { tip: "tablo", sutunlar: ["Ekran", "Ne denedim?", "Beklenen", "Sonuç", "Düzeltme"], satirlar: [["Ekleme", "alanlar boş", "buton pasif", "…", "…"], ["Liste", "internet yok", "uyarı", "…", "…"], ["…", "…", "…", "…", "…"]] },
      adimlar: ["Bütün giriş alanları dolmadan İleri / Kaydet butonları pasif olsun.", "Geri dönüldüğünde bilgiler yerindeyse butonlar aktif kalsın.", "Uygulamayı gerçek bir telefonda dene."] },
    teslim: { dosya: "P2-38_test", liste: ["Bilgi girişleri tamamlanmadan butonların pasif olduğunu sağladım.", "Test tablosunu yükledim."] } }
]};
