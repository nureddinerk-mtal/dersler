// YAPZ · 13 · Makine öğrenmesi: tahmin, kestirim, sınıflandırma  (Kitap s. 68–70)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "2. öğrenme biriminin girişi. Makine öğrenmesi (yapay öğrenme) yapay zekânın alt alanıdır; derin öğrenme de makine öğrenmesinin içindedir. Ana fikir: klasik programlamada kuralları biz yazarız, makine öğrenmesinde veri ve cevaplardan kuralları makine çıkarır. Kedi örneği (çocuğun şablon oluşturması) dersin omurgası.",
    akis: ["İç içe halkalar: YZ ⊃ ML ⊃ Derin öğrenme", "Kedi örneği: örnek gör → şablon oluştur → yeni kediyi karşılaştır", "Klasik programlama vs makine öğrenmesi şeması", "Kısa test"],
    hatalar: ["“Makine öğrenmesi her problemde en iyi sonucu verir” sanmak. Veri azsa ya da kötüyse sonuç da kötü olur.", "Yapay zekâ ile makine öğrenmesini eş anlamlı kullanmak. ML, YZ'nin bir alt alanı."],
    sorular: [["Makine gerçekten öğreniyor mu?", "İnsan gibi anlamıyor. Verideki örüntüleri sayılarla (katsayılar, kurallar) yakalıyor. “Öğrenme” bu sayıları veriye göre ayarlamak demek."], ["Kod yazmadan ML yapılır mı?", "Teachable Machine gibi araçlarla basit modeller kurulabilir. Ama bu derste Python ile yapacağız."]],
    not: "Ölçme sorusu 1'de kitabın cevap anahtarı D diyor. Doğrusu C (I, III, IV): II yanlış, ML her problemde en iyi sonucu vermez. Testte C doğru kabul edildi." },

  { tur: "bilgi", baslik: "Makine öğrenmesi nerede durur?",
    metin: "İnsan öğrenmesini taklit eden her öğrenmeye <b>yapay öğrenme</b> (makine öğrenmesi, <i>Machine Learning</i>) denir.",
    gorsel: { tip: "agac", kok: { ad: "Yapay Zekâ", cocuklar: [ { ad: "Makine Öğrenmesi", alt: "yapay öğrenme", cocuklar: [ { ad: "Derin Öğrenme", alt: "3. birim" } ] } ] } } },

  { tur: "bilgi", baslik: "Bir çocuk kediyi nasıl öğrenir?",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🐱", yazi: "“Bu bir kedi”", alt: "etiketli örnek" },
      { simge: "🐈‍⬛🐈", yazi: "Farklı kediler", alt: "renk, tür, boy" },
      { simge: "🧩", yazi: "Şablon", alt: "kuyruk, kulak, bıyık" },
      { simge: "❓", yazi: "Yeni hayvan", alt: "şablonla eşleşiyor mu?" }
    ]},
    not: "Makine de aynısını yapar: kedi/köpek etiketli fotoğraflardan özellikleri çıkarır, yeni fotoğrafı sınıflandırır." },

  { tur: "bilgi", baslik: "Klasik programlama ↔ Makine öğrenmesi",
    gorsel: { tip: "ikili",
      sol: { baslik: "Klasik programlama", gorsel: { tip: "akis", adimlar: [ { simge: "📥", yazi: "Veri + Kurallar" }, { simge: "⚙️", yazi: "Program" }, { simge: "📤", yazi: "Cevap" } ] } },
      sag: { baslik: "Makine öğrenmesi", gorsel: { tip: "akis", adimlar: [ { simge: "📥", yazi: "Veri + Cevaplar" }, { simge: "🤖", yazi: "Algoritma" }, { simge: "📜", yazi: "Kurallar (model)" } ] } },
      ok: "≠" },
    not: "Klasik programlamada tüm durumları önceden bilip if'lerle yazmak gerekir. Bu her zaman mümkün değil." },

  { tur: "bilgi", baslik: "Üç kelime",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🏷️ Sınıflandırma", alt: "Sonuç bir etiket: kedi / köpek, spam / normal" },
      { ust: "📏 Kestirim (regresyon)", alt: "Sonuç bir sayı: ikinci el araba fiyatı" },
      { ust: "🔮 Tahmin", alt: "Bulunan bağıntıyla yeni değeri hesaplamak" }
    ]},
    not: "Kestirim bağıntının sabitlerini bulmak, tahmin o bağıntıyla değer hesaplamak. Kitaplarda çoğu zaman aynı anlamda kullanılır." },

  { tur: "test", sorular: [
    { soru: "📖 Makine öğrenmesi ile ilgili hangileri doğrudur?<br>I. İstatistiksel ve matematiksel yöntemleri içerir.<br>II. Tüm problem durumlarında en iyi sonucu verir.<br>III. Yapay öğrenme olarak da adlandırılır.<br>IV. Yapay zekânın alt alanıdır.", secenekler: ["Yalnız III", "II ve IV", "I, III ve IV", "II, III ve IV", "I, II, III ve IV"], dogru: 2 },
    { soru: "Klasik programlamada kuralları kim belirler?", secenekler: ["Veri", "Programcı", "Algoritma", "Model"], dogru: 1 },
    { soru: "Makine öğrenmesinde algoritmaya ne verilir, ne elde edilir?", secenekler: ["Kurallar verilir, veri elde edilir", "Veri ve cevaplar verilir, kurallar elde edilir", "Sadece cevaplar verilir", "Program verilir, veri elde edilir"], dogru: 1 },
    { soru: "Bir evin metrekaresinden fiyatını bulmak hangisidir?", secenekler: ["Sınıflandırma", "Kestirim (regresyon)", "Kümeleme", "Hiçbiri"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kodsuz bir model eğit",
    adimlar: ["teachablemachine.withgoogle.com adresini aç → Görüntü projesi.", "İki sınıf oluştur: “elim açık”, “elim yumruk”. Kamerayla her birine 30 örnek ver.", "Eğit, sonra kameraya yeni hareketler göster."],
    not: "Tam olarak kedi örneği: etiketli örnek → şablon → yeni örneği sınıflandırma." }

]};
