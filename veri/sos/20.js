// SOS · 20 · Grafik çeşitleri 2: radar, ağaç haritası, güneş ışığı, histogram, kutu, şelale, huni, bileşik  (Kitap s. 149–162)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "<b>Radar</b> (örümcek, ağ, yıldız, kutup): çoklu nicel değerleri karşılaştırma; boyut başına değer sayısı sınırlı (Tablo 3.9: üç öğrencinin beş ders puanı). <b>Ağaç haritası</b>: hiyerarşik veri, iç içe dikdörtgenler (Tablo 3.10: Ankara/Antalya → beyaz eşya/mobilya → ürün). <b>Güneş ışığı</b>: hiyerarşi halkalarla, en içteki üst düzey (Tablo 3.11: B üreticisi ve nar en büyük). <b>Histogram</b>: frekans dağılımı, aralıklarla sütun (Tablo 3.12–3.13: 1, 2, 4, 6, 7, 5; aralıklar sağdan kapalı: 55 puan 40–55 aralığında). 3. Uygulama (1 ders saati): arkadaşlarının puanları → sırala → aralıklara say → Görsel 3.22 şablonuna histogram çiz. <b>Kutu ve yatay çizgi</b>: dörtte birlikler, ortanca (kutudaki çizgi), ortalama (✕), uç değerler (Tablo 3.14: Beden Eğitimi en yüksekte). <b>Şelale</b> (köprü): toplamın eklemeler ve çıkarmalarla değişimi; artış mavi, azalış kırmızı (Tablo 3.15: 5300 − 1050 − 1500 + 2000 − 800 − 500 = 3450) (Sıra Sizde: şelale örnekleri). <b>Huni</b>: aşamalarda sayısal değişim (Tablo 3.16: 2572 → 554 → 257 → 90) (Sıra Sizde: 2014–2018 kayısı üretimi tablosu ve uygun grafik). <b>Bileşik</b>: birden çok grafik birlikte (yanan alan alan grafiği sol eksen, yangın sayısı çizgi sağ eksen) (Sıra Sizde: ilin aylık sıcaklık ortalamaları).",
    akis: ["Radar", "Ağaç haritası", "Güneş ışığı", "Histogram + 3. Uygulama", "Kutu grafiği", "Şelale + Sıra Sizde", "Huni + Sıra Sizde: kayısı", "Bileşik + Sıra Sizde: sıcaklık", "Test"],
    hatalar: ["Tablo 3.14'te Matematik ortalaması 46,20833 yazıyor; 25 puanın ortalaması <b>45,84</b> (kitap 24 değere bölmüş).", "Kitap kutu grafiğinde “T” çizgilerinin aykırı değerleri gösterdiğini söylüyor; bıyıklar (T çizgileri) aykırı olmayan en küçük ve en büyük değere kadar uzanır, aykırı değerler ayrı nokta olarak çizilir. Platformdaki kutu grafikte bıyıklar en küçük ve en büyük değere kadar.", "Histogramda Tablo 3.13 aralıkları Excel'in sağdan kapalı aralıklarıyla hesaplanmış (40–55 aralığına 55 dahil); elle sayan öğrenciler farklı sonuç bulabilir.", "Radar, ağaç haritası, güneş ışığı, kutu, şelale, huni Excel 2016 ve sonrasında var; eski Office'te yok."],
    sorular: [["Histogram ile sütun grafik farkı?", "Histogram sayısal veriyi aralıklara bölüp frekansı gösterir, sütunlar bitişiktir; sütun grafik kategorileri karşılaştırır."], ["Ortanca neden ortalamadan kullanışlı olabilir?", "Aykırı değerler çoksa ortalamayı çeker; ortanca etkilenmez."]] },

  { tur: "bilgi", baslik: "Radar grafiği",
    gorsel: { tip: "grafik", tur: "radar", baslik: "Öğrencilerin sınav puanları", min: 0, max: 100, etiketler: ["Türkçe", "Matematik", "Beden Eğt.", "Bilişim Tek.", "Müzik"], seriler: [{ ad: "1. Öğrenci", degerler: [80, 60, 95, 85, 80] }, { ad: "2. Öğrenci", degerler: [90, 70, 85, 80, 90] }, { ad: "3. Öğrenci", degerler: [95, 100, 85, 100, 85] }], kaynak: "Tablo 3.9" },
    metin: "Örümcek, ağ, yıldız ya da kutup grafiği de denir. Çoklu nicel değerleri karşılaştırır." },

  { tur: "bilgi", baslik: "Ağaç haritası",
    gorsel: { tip: "grafik", tur: "agacharita", baslik: "Mağaza satışları (adet)", agac: [
      { ad: "Ankara", cocuklar: [ { ad: "Beyaz eşya", cocuklar: [ { ad: "Buzdolabı", deger: 3 }, { ad: "Çamaşır mak.", deger: 2 } ] }, { ad: "Mobilya", cocuklar: [ { ad: "Gardırop", deger: 4 }, { ad: "Mutfak dolabı", deger: 5 } ] } ] },
      { ad: "Antalya", cocuklar: [ { ad: "Beyaz eşya", cocuklar: [ { ad: "Bulaşık mak.", deger: 2 }, { ad: "Buzdolabı", deger: 4 } ] }, { ad: "Mobilya", cocuklar: [ { ad: "Mutfak dolabı", deger: 5 } ] } ] } ], kaynak: "Tablo 3.10" },
    metin: "Hiyerarşik veri iç içe dikdörtgenlerle; dikdörtgen büyüdükçe değer büyür." },

  { tur: "bilgi", baslik: "Güneş ışığı grafiği",
    gorsel: { tip: "grafik", tur: "gunes", baslik: "Meyve üretimi", agac: [
      { ad: "A", cocuklar: [ { ad: "Kayısı", deger: 10000 }, { ad: "Kiraz", deger: 5000 }, { ad: "Vişne", deger: 15000 } ] },
      { ad: "B", cocuklar: [ { ad: "Kayısı", deger: 15000 }, { ad: "Kiraz", deger: 17000 }, { ad: "Vişne", deger: 3000 }, { ad: "Nar", deger: 80000 } ] },
      { ad: "C", cocuklar: [ { ad: "Kiraz", deger: 5000 }, { ad: "Nar", deger: 12000 }, { ad: "Vişne", deger: 7000 } ] } ], kaynak: "Tablo 3.11" },
    metin: "Hiyerarşi halkalarla; en içteki halka en üst düzey. B üreticisi ve nar açıkça öne çıkıyor." },

  { tur: "bilgi", baslik: "Histogram",
    gorsel: { tip: "grafik", tur: "histogram", baslik: "Sınav puanları dağılımı", etiketler: ["10-25", "25-40", "40-55", "55-70", "70-85", "85-100"], seriler: [{ ad: "Öğrenci sayısı", degerler: [1, 2, 4, 6, 7, 5] }], degerYaz: true, xBaslik: "Puan aralığı", yBaslik: "Öğrenci sayısı", kaynak: "Tablo 3.12–3.13" },
    metin: "Verinin aralıklara göre <b>sıklığını</b> (frekans) gösteren sütun grafiği. 18 öğrenci 55'in üstünde." },

  { tur: "uygulama", baslik: "3. Uygulama · Histogram çiz",
    metin: "Bir dersin puanlarını aralıklara ayır, frekans tablosunu ve histogramını çiz.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Frekans tablosu", gorsel: { tip: "tablo", sutunlar: ["Aralık", "Frekans"], satirlar: [["0-20", "…"], ["20-40", "…"], ["40-60", "…"], ["60-80", "…"], ["80-100", "…"]] } },
      sag: { baslik: "Histogram", gorsel: { tip: "akis", adimlar: [ { simge: "↕️", yazi: "Dikey: öğrenci sayısı" }, { simge: "↔️", yazi: "Yatay: puan aralığı" }, { simge: "📊", yazi: "Bitişik sütunlar" } ] } },
      ok: "➜" },
    adimlar: ["Arkadaşlarının bir dersten aldığı puanları topla (0–100 arası rastgele puanlar da olur).", "Puanları küçükten büyüğe sırala.", "Her aralığa düşen puan sayısını say.", "Kitaptaki Görsel 3.22 şablonuna histogramı çiz."],
    kitap: "s. 154–155 · 3. Uygulama" },

  { tur: "bilgi", baslik: "Kutu ve yatay çizgi grafiği",
    gorsel: { tip: "grafik", tur: "kutu", baslik: "Derslere göre sınav puanları", seriler: [
      { ad: "Türkçe", degerler: [85, 52, 10, 45, 30, 45, 35, 69, 55, 60, 62, 64, 70, 75, 74, 76, 81, 85, 87, 88, 90, 71, 95, 93, 59] },
      { ad: "Matematik", degerler: [37, 28, 10, 82, 60, 66, 91, 23, 16, 29, 29, 74, 22, 71, 11, 77, 92, 27, 16, 73, 63, 49, 31, 24, 45] },
      { ad: "Beden Eğitimi", degerler: [57, 59, 70, 92, 73, 57, 84, 94, 52, 91, 86, 56, 89, 93, 90, 50, 83, 95, 83, 81, 59, 70, 82, 51, 64] } ], kaynak: "Tablo 3.14" },
    metin: "Kutudaki çizgi <b>ortanca</b>, ✕ <b>ortalama</b>; kutu ortadaki yarıyı, T çizgileri uçları gösterir. Beden Eğitimi puanları en yüksekte." },

  { tur: "bilgi", baslik: "Şelale grafiği",
    gorsel: { tip: "grafik", tur: "selale", baslik: "Gelir ve gider", etiketler: ["Aylık gelir", "Kira", "Mutfak", "Ek gelir", "Kıyafet", "Kırtasiye"], seriler: [{ degerler: [5300, -1050, -1500, 2000, -800, -500] }], toplamAd: "Kalan", kaynak: "Tablo 3.15" },
    metin: "Bir toplamın eklemeler ve çıkarmalarla değişimi. 🟦 artış · 🟥 azalış. <b>Köprü grafik</b> de denir." },

  { tur: "odev", baslik: "Sıra Sizde · Şelale",
    metin: "Şelale grafiğin kullanıldığı alanları araştır; çarpıcı bulduğun örnekleri sınıfta paylaş.",
    kitap: "s. 159" },

  { tur: "bilgi", baslik: "Huni grafiği",
    gorsel: { tip: "grafik", tur: "huni", baslik: "İşe alım süreci", etiketler: ["Başvuru", "Sınavı geçen", "Mülakatı geçen", "İşe alınan"], seriler: [{ degerler: [2572, 554, 257, 90] }], kaynak: "Tablo 3.16" },
    metin: "Bir sürecin aşamalarındaki sayısal değişim; aksayan aşama kolayca görülür." },

  { tur: "odev", baslik: "Sıra Sizde · Kayısı üretimi",
    metin: "Türkiye'nin 2014–2018 kayısı üretimini tablo yap; uygun bir grafik seçip çiz.",
    kitap: "s. 160" },

  { tur: "bilgi", baslik: "Bileşik grafik",
    gorsel: { tip: "grafik", tur: "bilesik", baslik: "Orman yangınları", etiketler: ["2016", "2017", "2018", "2019", "2020"], seriler: [{ ad: "Yanan alan (ha)", tur: "alan", degerler: [9156, 11993, 5644, 11332, 20938], renk: "#f2994a" }, { ad: "Yangın sayısı", tur: "cizgi", sag: true, degerler: [3188, 2411, 2167, 2688, 3350], renk: "#eb5757" }], yBaslik: "ha", sagBaslik: "adet", kaynak: "Tablo 3.8" },
    metin: "Birden çok grafik bir arada. Sol eksen yanan alan, sağ eksen yangın sayısı." },

  { tur: "odev", baslik: "Sıra Sizde · İlimin sıcaklıkları",
    metin: "Bulunduğun ilin aylık sıcaklık ortalamalarını tablo yap; uygun bir grafikle görselleştir.",
    kitap: "s. 161" },

  { tur: "test", sorular: [
    { soru: "Verinin aralıklara göre frekansını gösteren sütun grafiği hangisidir?", secenekler: ["Huni", "Histogram", "Radar", "Şelale"], dogru: 1 },
    { soru: "Hiyerarşik veriyi iç içe dikdörtgenlerle gösteren grafik hangisidir?", secenekler: ["Çizgi", "Kutu", "Hisse senedi", "Ağaç haritası"], dogru: 3 },
    { soru: "Bir toplamın eklemeler ve çıkarmalarla değişimini gösteren grafik hangisidir?", secenekler: ["Şelale", "Radar", "Pasta", "XY dağılım"], dogru: 0 },
    { soru: "Kutu grafiğinde kutunun içindeki çizgi neyi gösterir?", secenekler: ["En büyük değer", "Toplam", "Ortanca", "Frekans"], dogru: 2 },
    { soru: "İşe alım sürecinde her aşamada kalan kişi sayısını göstermek için en uygun grafik hangisidir?", secenekler: ["Radar", "Huni", "Halka", "Kabarcık"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kendi radarın",
    metin: "Son karnendeki beş dersin notuyla kendi radar grafiğini çiz (Excel: Ekle → Önerilen Grafikler → Tüm Grafikler → Radar). Bir arkadaşınınkiyle üst üste koyunca şekiller neyi anlatıyor?" }

]};
