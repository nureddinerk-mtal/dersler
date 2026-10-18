// SOS · 16 · Veri, enformasyon, bilgi ve veri türleri  (Kitap s. 128–132)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.1: <b>Veri</b> (data): yorumlanmamış ham gerçekler ve semboller (Arabanın rengi sarıdır; Emre Türkçeden 95 aldı). <b>Enformasyon</b> (information): bir veri kümesinin analiz, karşılaştırma ve özetlenmesiyle çıkar; kim, ne, nerede, ne zaman (Emre en yüksek puanı aldı). <b>Bilgi</b> (knowledge): kişinin veriye yönelttiği anlam; desen ve eğilimleri bulan “nasıl” sorusunun yanıtı (Her yıl Türkçe ortalaması yaklaşık 85 olur). Bilgi piramidi: veri (toplanır, organize edilir) → enformasyon (analiz, özetleme) → bilgi (sentez, karar verme); yukarı çıktıkça değer artar. Sıra Sizde: çevrenden veri, enformasyon, bilgi örneği. 3.2 Veri türleri: <b>nitel</b> (sayıyla ifade edilemeyen): sınıflanabilen/nominal (plaka kodu, meslek; ikili ise binominal: evli/bekâr, kadın/erkek, PCR pozitif/negatif; sıralama ve karşılaştırma yapılamaz) ve sıralanabilen/ordinal (madalya, derece, eğitim seviyesi, gelir düzeyi; aradaki fark bilinmez); <b>nicel</b> (sayısal): eşit aralıklı/interval (sıcaklık, sınav puanı, IQ; kesin sıfır yok; fark var, oran yok) ve sürekli/ratio (uzunluk, ağırlık, kişi sayısı; kesin sıfır var; fark ve oran var). Tablo 3.1: nominalden ratio'ya doğru daha çok ayrıntı ve işlem.",
    akis: ["Hazırlık: veriye dayalı bilgi nasıl edinilir?", "Veri, enformasyon, bilgi", "Bilgi piramidi", "Sıra Sizde: üç örnek", "Nitel / nicel", "Nominal, ordinal, interval, ratio", "Tablo 3.1", "Test"],
    hatalar: ["Kitap “ratio” için “sürekli nicel veri” adını kullanıyor; istatistikte doğrusu <b>oranlı (oran) ölçek</b>. “Sürekli” başka bir ayrımdır (sürekli/kesikli). Kitaptaki “kişi sayısı” örneği kesiklidir ama oranlıdır. Testlerde kitabın adını kullanın, sözlü düzeltin.", "Birim testi 1. soru (“Bilgi, verinin işlenmiş hâlidir”, D) ile piramit uyumlu ama 2. soruda “işlenmiş bilgiye enformasyon denir” Yanlış; sıra veri → enformasyon → bilgi.", "Plaka kodu sayı olduğu hâlde nominal: öğrencilerin en çok takıldığı yer; telefon ve okul numarasıyla pekiştirin."],
    sorular: [["Sınav puanında neden oran kurulamaz?", "0 puan “hiç bilgi yok” demek değildir; kesin sıfır yok (interval)."], ["Boy uzunluğu hangi tür?", "Ratio: 0 cm yokluk demek; 180 cm, 90 cm'nin iki katıdır."]] },

  { tur: "bilgi", baslik: "Veri · enformasyon · bilgi",
    gorsel: { tip: "tablo", sutunlar: ["", "Ne?", "Kitaptan örnek"], satirlar: [
      ["📊 Veri", "yorumlanmamış ham gerçek", "Emre Türkçe sınavından 95 aldı."],
      ["📋 Enformasyon", "veri kümesinin analizi; kim, ne, nerede, ne zaman", "Emre Türkçe sınavından en yüksek puanı almıştır."],
      ["💡 Bilgi", "veriye verilen anlam; “nasıl?”", "Her yıl Türkçe dersi ortalaması yaklaşık 85 olur."]] } },

  { tur: "bilgi", baslik: "Bilgi piramidi",
    gorsel: { tip: "html", icerik: "<div style='display:flex;flex-direction:column;align-items:center;gap:4px;font-weight:bold;color:#fff;text-align:center'><div style='width:46%;background:#9b51e0;padding:12px 4px;clip-path:polygon(24% 0,76% 0,100% 100%,0 100%)'>Bilgi<br><small style='font-weight:normal'>sentez, karar verme</small></div><div style='width:62%;background:#2d9cdb;padding:12px 4px;clip-path:polygon(9% 0,91% 0,100% 100%,0 100%)'>Enformasyon<br><small style='font-weight:normal'>analiz, özetleme</small></div><div style='width:90%;background:#27ae60;padding:12px 4px;clip-path:polygon(6% 0,94% 0,100% 100%,0 100%)'>Veri<br><small style='font-weight:normal'>toplanır, organize edilir</small></div></div>" },
    metin: "Yukarı çıktıkça <b>değer artar</b>." },

  { tur: "odev", baslik: "Sıra Sizde · Üç örnek",
    metin: "Çevrende küçük bir araştırma yap; veri, enformasyon ve bilgiye birer örnek bul. Arkadaşlarınınkiyle karşılaştır.",
    kitap: "s. 129" },

  { tur: "bilgi", baslik: "Veri türleri",
    gorsel: { tip: "agac", kok: { ad: "Veri", cocuklar: [
      { ad: "🔤 Nitel", alt: "sayı dışı", cocuklar: [ { ad: "Nominal", alt: "sınıflanabilen" }, { ad: "Ordinal", alt: "sıralanabilen" } ] },
      { ad: "🔢 Nicel", alt: "sayısal", cocuklar: [ { ad: "Interval", alt: "eşit aralıklı" }, { ad: "Ratio", alt: "sürekli" } ] } ] } } },

  { tur: "bilgi", baslik: "Hangi işlem yapılır?",
    gorsel: { tip: "tablo", sutunlar: ["Tür", "İşlem", "Kitaptan örnek"], satirlar: [
      ["Nominal nitel", "kategorileri belirleme", "cinsiyet, meslek, plaka kodu"],
      ["Ordinal nitel", "+ karşılaştırma (önce-sonra, az-çok)", "eğitim seviyesi, madalya, gelir düzeyi"],
      ["Interval nicel", "+ farkı hesaplama", "sıcaklık, sınav puanı, IQ"],
      ["Ratio nicel", "+ oranı hesaplama", "uzunluk, ağırlık, kişi sayısı"]] },
    not: "Interval'da kesin sıfır yok: 0 °C sıcaklığın olmadığı demek değil. Ratio'da 0 yokluktur." },

  { tur: "test", sorular: [
    { soru: "“Elif'in boyu 173 cm'dir.” ifadesi hangisidir?", secenekler: ["Bilgi piramidi", "Enformasyon", "Bilgi", "Veri"], dogru: 3 },
    { soru: "“Elif sınıftaki en uzun kızdır.” ifadesi hangisidir?", secenekler: ["Enformasyon", "Veri", "Bilgi", "Ham sembol"], dogru: 0 },
    { soru: "İl plaka kodları hangi veri türüdür?", secenekler: ["Interval nicel", "Ordinal nitel", "Nominal nitel", "Ratio nicel"], dogru: 2 },
    { soru: "Altın, gümüş, bronz madalyalar hangi veri türüdür?", secenekler: ["Nominal", "Ordinal", "Interval", "Ratio"], dogru: 1 },
    { soru: "Kesin sıfır noktası olan, farkı ve oranı hesaplanabilen veri türü hangisidir?", secenekler: ["Nominal", "Ordinal", "Ratio", "Interval"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Hangi tür?",
    metin: "Şunları sınıflandır: ayakkabı numarası, kan grubu, yaş, müşteri memnuniyeti (1–5 yıldız), doğum yılı, sınıf mevcudu. Hangisi tartışmalı? Neden?" }

]};
