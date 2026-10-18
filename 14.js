// YAPZ · 14 · Öğrenme türleri  (Kitap s. 70–74)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Dört öğrenme türü: denetimli (etiket/sonuç var), denetimsiz (etiket yok, kümeleme), yarı denetimli (az etiketli + çok etiketsiz), pekiştirmeli (deneme–ödül). Ayırt etmenin tek sorusu: “Veride cevap sütunu var mı?” Kitaptaki örnekler: spam filtresi, ikinci el araba fiyatı, öneri sistemleri/sepet analizi, labirentteki robot.",
    akis: ["Dört tür kartı", "Denetimli: sınıflandırma (spam) ve kestirim (araba fiyatı)", "Denetimsiz: kümeleme, öneri, sepet analizi", "Yarı denetimli akışı", "Pekiştirmeli: robot ve ödül", "Etkinlik: örnek durumları türlere ayır", "Test"],
    hatalar: ["Regresyonu denetimsiz sanmak. Regresyon da sonuç sütunu olan denetimli öğrenmedir.", "Pekiştirmeli öğrenmeyi “etiketli veri bol” durumla karıştırmak. Tam tersi: etiket yok, ödül var.", "Sepet analizini sınıflandırma sanmak. Birliktelik analizidir, denetimsizdir."],
    sorular: [["ChatGPT hangi tür?", "Karışık: önce çok büyük etiketsiz metinle (kendi kendine denetimli), sonra insan geri bildirimiyle pekiştirmeli öğrenme (RLHF) ile eğitilir."], ["Netflix önerileri?", "Benzer kullanıcıları kümeleyen denetimsiz yöntemler + puanları kullanan ek modeller."]],
    not: "Ölçme soruları 2, 3, 4, 5, 25, 26 bu konudan. Kitap anahtarıyla uyumlu." },

  { tur: "bilgi", baslik: "Dört öğrenme türü",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "👩‍🏫 Denetimli", alt: "Veride cevap var (etiket ya da sayı). Sınıflandırma, kestirim." },
      { ust: "🧺 Denetimsiz", alt: "Cevap yok. Benzerleri grupla: kümeleme, birliktelik." },
      { ust: "🌗 Yarı denetimli", alt: "Az etiketli + çok etiketsiz veri." },
      { ust: "🎮 Pekiştirmeli", alt: "Deneme–yanılma, ödül–ceza." }
    ]},
    not: "Ayırt etme sorusu: “Veride doğru cevap sütunu var mı?”" },

  { tur: "bilgi", baslik: "Denetimli öğrenme",
    gorsel: { tip: "ikili",
      sol: { baslik: "Sınıflandırma · spam filtresi", gorsel: { tip: "akis", adimlar: [ { simge: "📧", yazi: "Etiketli e-postalar" }, { simge: "🤖", yazi: "Model" }, { simge: "📥🗑️", yazi: "Gelen / İstenmeyen" } ] } },
      sag: { baslik: "Kestirim · ikinci el araba", gorsel: { tip: "akis", adimlar: [ { simge: "🚗", yazi: "Marka, km, renk…" }, { simge: "🤖", yazi: "Model" }, { simge: "💰", yazi: "Fiyat (sayı)" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Denetimsiz öğrenme",
    metin: "Etiket yok. Algoritma örnekleri benzerliğe göre <b>kümeler</b>. Sonra her kümeden birkaç örneğe bakıp kümeye isim verilir.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🔺🟦🔵🔺🔵🟦", yazi: "Karışık veri" },
      { simge: "🤖", yazi: "ML algoritması" },
      { simge: "🔺🔺 | 🟦🟦 | 🔵🔵", yazi: "3 küme" }
    ]},
    not: "Öneri sistemleri ve sepet analizi (A'yı alan B'yi de alıyor) denetimsiz öğrenmeye örnektir." },

  { tur: "bilgi", baslik: "Yarı denetimli öğrenme",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🏷️", yazi: "Az etiketli veri", alt: "denetimli" },
      { simge: "🧺", yazi: "Çok etiketsiz veri", alt: "denetimsiz → kümeler" },
      { simge: "🏷️❔", yazi: "Sözde etiket", alt: "kümelere isim ver" },
      { simge: "🔁", yazi: "Yeniden eğitim" }
    ]},
    not: "En çok bilgisayarlı görü ve doğal dil işlemede kullanılır." },

  { tur: "bilgi", baslik: "Pekiştirmeli öğrenme",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🤖", yazi: "Ajan (robot)" },
      { simge: "➡️", yazi: "Eylem", alt: "bir yöne git" },
      { simge: "🌍", yazi: "Ortam", alt: "labirent" },
      { simge: "⭐ / ❌", yazi: "Ödül / ceza", alt: "skor arttı mı?" }
    ]},
    not: "Gözetmen yok, etiket yok. Robotik, oyunlar, kişisel öneriler." },

  { tur: "uygulama", baslik: "Hangi tür?",
    metin: "Defterine tabloyu çiz, her durumun öğrenme türünü ve (varsa) problem tipini yaz.",
    gorsel: { tip: "tablo", ad: "Durumlar", sutunlar: ["Durum", "Tür", "Problem"], satirlar: [
      ["Röntgenden hasta / sağlıklı ayırmak", "?", "?"], ["Evin özelliklerinden fiyatını bulmak", "?", "?"], ["Müşterileri alışverişe göre gruplamak", "?", "?"],
      ["Satranç oynamayı kendi kendine öğrenmek", "?", "?"], ["Ekmek alan süt de alıyor mu?", "?", "?"]] },
    kitap: "s. 70–74" },

  { tur: "test", sorular: [
    { soru: "📖 Makine öğrenmesi türleri hangisinde doğru verilmiştir?", secenekler: ["Denetimli, Denetimsiz, Güçsüz ve Güçlü", "Denetimsiz, Yarı Denetimsiz ve Güçlendirilmiş", "Basit, Orta ve Üst Seviye", "Denetimli, Denetimsiz, Yarı Denetimli ve Pekiştirmeli", "Yarı Denetimli, Denetimli, Denetimsiz ve Yarı Denetimsiz"], dogru: 3 },
    { soru: "📖 Hangileri doğrudur?<br>I. Denetimli öğrenme, kestirim ve sınıflandırma için kullanılır.<br>II. Denetimli öğrenmede veri setinde etiket sütunu bulunmalıdır.<br>III. Denetimsiz öğrenmede etiket sütunu gerekmez.<br>IV. Kümeleme denetimsiz bir modeldir.<br>V. Regresyon denetimsiz bir modeldir.", secenekler: ["Yalnız I", "I ve II", "I ve III", "I, II ve III", "I, II, III ve IV"], dogru: 4 },
    { soru: "📖 Hasta değerlerinden insanların hasta olup olmadığını sınıflayan bir model için hangi tür kullanılır?", secenekler: ["Denetimli", "Denetimsiz", "Karışık", "Pekiştirmeli", "Yarı denetimli"], dogru: 0 },
    { soru: "📖 Hangisi doğrudur?", secenekler: ["Doğal dil işleme, denetimsiz öğrenmenin kullanıldığı alanlardan biridir.", "Etiketli veri az, etiketsiz veri çoksa denetimli öğrenme tercih edilir.", "Pekiştirmeli öğrenme etiketli veri ve ortam hakkında yeterli bilgi olduğunda tercih edilir.", "Sepet analizi, pazarlamada kullanılan denetimsiz modellerden biridir.", "Yarı denetimli öğrenme pekiştirmeli ve denetimsiz öğrenmenin karışımıdır."], dogru: 3 },
    { soru: "📖 İkinci el araç özellikleri ve fiyatlarından bir aracın fiyatını tahmin etmek için hangi model?", secenekler: ["Denetimli \\ kestirim", "Denetimli \\ sınıflandırma", "Denetimli \\ kümeleme", "Denetimsiz \\ kümeleme", "Yarı denetimli \\ kestirim"], dogru: 0 },
    { soru: "📖 Markette birlikte satılan ürünleri bulup öneri sistemi geliştirmek için hangi model?", secenekler: ["Denetimli \\ market analizi", "Denetimli \\ pazar analizi", "Denetimsiz \\ birliktelik analizi", "Denetimsiz \\ boyut indirgeme", "Denetimsiz \\ kümeleme"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "AlphaGo Zero",
    metin: "2017'de DeepMind'ın AlphaGo Zero'su Go oyununu hiç insan maçı görmeden, sadece kendisiyle oynayarak öğrendi. Üç günde, dünya şampiyonunu yenen eski sürümü 100–0 yendi. Saf pekiştirmeli öğrenme.",
    not: "0A konusundaki AlphaGo hikâyesinin devamı." }

]};
