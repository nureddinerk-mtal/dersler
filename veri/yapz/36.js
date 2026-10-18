// YAPZ · 36 · Yapay sinir ağı nedir? Biyolojik nöron  (Kitap s. 162–165)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "3. öğrenme biriminin girişi. Yapay sinir ağı (YSA): beynin biyolojik sinir ağlarının matematiksel modeli; örneklerden öğrenir, genelleme yapar, karar verir. İlk model 1943 McCulloch–Pitts. Avantajlar/dezavantajlar, biyolojik nöron (dendrit → çekirdek → akson → sinaps), nöron türleri, beyinde öğrenme, YSA'nın üç katmanı (giriş, gizli, çıkış).",
    akis: ["Hazırlık sorusu: Beyni taklit eden bir sistemin artısı/eksisi ne olur? (2 dk tartışma)", "Tanım ve 1943", "Avantaj / dezavantaj kartları", "Biyolojik nöron akışı ve sayılar", "Nöron türleri, beyinde öğrenme", "Katmanlar görseli", "Test"],
    hatalar: ["Yapay nöronu biyolojik nöronun birebir kopyası sanmak. Sadece kaba bir benzetme.", "Gizli katmanın “saklı / gizli bilgi” olduğunu düşünmek. Sadece dışarıdan doğrudan görülmeyen ara katman demek."],
    sorular: [["Beyinde kaç nöron var?", "Yaklaşık 100 milyar; her biri 50.000–250.000 bağlantı kurabilir (kitaptaki rakamlar)."], ["ChatGPT de sinir ağı mı?", "Evet, çok büyük bir sinir ağı (transformer). Yüz milyarlarca ağırlığı var."]],
    not: "3. birim ölçme soruları: 1E 2B 3E 4D 5A 6C 7A 8B 9C 10C. Bu konuda 1, 6, 7, 8, 9, 10." },

  { tur: "bilgi", baslik: "Yapay sinir ağı",
    metin: "İnsan beyninin sinir ağlarını <b>matematiksel olarak modelleyen</b>, örneklerden öğrenip yeni bilgi üreten, karar veren ve sınıflandıran yazılımlar.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "1943", alt: "İlk model: McCulloch (sinir hekimi) ve Pitts (matematikçi)" },
      { ust: "Taklit ettiği", alt: "Öğrenme, hatırlama, genelleme, karar verme" }
    ]},
    not: "0A konusundaki Perceptron (1958) bu modelin ilk öğrenen hâliydi." },

  { tur: "bilgi", baslik: "Artıları ve eksileri",
    gorsel: { tip: "ikili",
      sol: { baslik: "✅ Avantajlar", gorsel: { tip: "kartlar", kartlar: [ { ust: "Öğrenir", alt: "farklı algoritmalarla" }, { ust: "Genelleme", alt: "görmediği veriye sonuç üretir" }, { ust: "Örüntü tanıma", alt: "sınıflandırma, eksik tamamlama" }, { ust: "Hata toleransı", alt: "" } ] } },
      sag: { baslik: "⚠️ Dezavantajlar", gorsel: { tip: "kartlar", kartlar: [ { ust: "Veri ister", alt: "örnek yoksa eğitim yok" }, { ust: "Deneme–yanılma", alt: "uygun yapı zor bulunur" }, { ust: "Ne zaman durmalı?", alt: "kesin yöntem yok" }, { ust: "Güçlü donanım", alt: "paralel işlem (GPU)" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Biyolojik nöron",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🌿", yazi: "Dendrit", alt: "uyarıları alır" },
      { simge: "⚪", yazi: "Hücre gövdesi", alt: "toplar, eşiği aşarsa ateşler" },
      { simge: "➖", yazi: "Akson", alt: "sinyali iletir" },
      { simge: "🔗", yazi: "Sinaps", alt: "kimyasal (nörotransmitter) geçiş" }
    ]},
    not: "~100 milyar nöron · nöron başına 50.000–250.000 bağlantı · 6×10¹³'ten fazla bağlantı." },

  { tur: "bilgi", baslik: "Nöron türleri ve beyinde öğrenme",
    gorsel: { tip: "ikili",
      sol: { baslik: "Üç nöron türü", gorsel: { tip: "kartlar", kartlar: [ { ust: "Duyusal", alt: "duyulardan beyne" }, { ust: "Motor", alt: "kaslara hareket" }, { ust: "Ara", alt: "devreler, iletişim" } ] } },
      sag: { baslik: "Beyin nasıl öğrenir?", gorsel: { tip: "kartlar", kartlar: [ { ust: "Yeni akson üreterek" }, { ust: "Aksonların uyarılmasıyla" }, { ust: "Akson güçlerini değiştirerek", alt: "← YSA'daki ağırlıklar!" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Yapay sinir ağının katmanları",
    gorsel: { tip: "resim", yol: G + "36-katman.png" },
    metin: "Veri <b>giriş</b> katmanından girer, <b>gizli</b> katmanlarda ağırlıklarla işlenir, <b>çıkış</b> katmanından sonuç çıkar. Eğitim, doğru çıktıyı veren ağırlıkları bulana kadar tekrarlanır." },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi yapay sinir ağlarının özelliklerindendir?", secenekler: ["Özetleme", "Hızlandırma", "Onaylama", "Kaydetme", "Sınıflandırma"], dogru: 4 },
    { soru: "📖 Ağın temel birimi hangisidir?", secenekler: ["Beyin", "Nükleus", "Nöron", "Akson", "Dentrit"], dogru: 2 },
    { soru: "📖 Dendritlerin fonksiyonuna ne ad verilir?", secenekler: ["Reseptör (alıcı)", "Verici", "Hem alıcı hem verici", "Aktifleme", "İletme"], dogru: 0 },
    { soru: "📖 Sinapsta sinyal iletimi sürecinin özelliği hangisidir?", secenekler: ["Fiziksel", "Kimyasal", "Hem fiziksel hem kimyasal", "Elektriksel", "Manyetik"], dogru: 1 },
    { soru: "📖 Nöronda kimyasal reaksiyonlar nerede gerçekleşir?", secenekler: ["Dendritler", "Akson", "Sinapslar", "Nükleus", "Çekirdek"], dogru: 2 },
    { soru: "📖 Aksonun amacı hangisidir?", secenekler: ["Reseptör", "Verici", "İletim", "Seçme", "Sınıflandırma"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Sinek beyni haritası",
    metin: "2024'te bilim insanları bir meyve sineğinin beynindeki ~140.000 nöronun ve 50 milyon bağlantının tamamını haritaladı (FlyWire projesi). İnsan beyninin 100 milyar nöronunu düşün: yapay sinir ağları bunun yanında hâlâ çok basit." }

]};
