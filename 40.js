// YAPZ · 40 · Derin öğrenme, donanım, programlama dilleri  (Kitap s. 175–177)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Derin öğrenme: çok sayıda gizli katmanlı yapay sinir ağları. Klasik ML'den farkı: özellik çıkarımını uzman yapmaz, ağ ham veriden kendisi öğrenir. Dönüm noktası 2012 ImageNet: CNN (AlexNet) Top-5 hatayı %26,1'den %15,3'e indirdi; bugün %3,6 ve altı. Donanım: büyük bellek ve GPU (paralel işlem). Diller: Python (ana), C++ (hız), Lisp (en eski, 1958, McCarthy), Java (JVM, taşınabilirlik), Prolog (mantık programlama).",
    akis: ["Derin öğrenme tanımı ve uygulamaları", "Klasik ML ↔ derin öğrenme akışı", "ImageNet grafiği", "CPU ↔ GPU", "Diller kartları", "Test"],
    hatalar: ["Derin öğrenmeyi ML'den ayrı bir şey sanmak; ML'nin alt alanıdır (13. konudaki halkalar).", "“Derin” kelimesini “anlamlı/derin düşünce” sanmak; katman sayısının çokluğunu anlatır."],
    sorular: [["GPU neden hızlı?", "CPU'da az sayıda güçlü çekirdek, GPU'da binlerce küçük çekirdek var. Sinir ağındaki matris çarpımları binlerce parçaya bölünüp aynı anda yapılır."], ["Python yavaş değil mi?", "Python sadece yönetir; ağır hesap TensorFlow/PyTorch'un C++/CUDA ile yazılmış çekirdeklerinde yapılır."]],
    not: "Ölçme sorusu 2 (cevap B: veri tabanı işlemleri) bu konudan. Kitapta Colab'ın ücretsiz GPU'su “Tesla K80” yazıyor; bugün genelde T4." },

  { tur: "bilgi", baslik: "Derin öğrenme",
    metin: "Çok sayıda gizli katman ve nöron içeren yapay sinir ağlarıyla öğrenme.",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🗣️ Dil modelleme, doğal dil işleme" }, { ust: "🎙️ Konuşma ve ses işleme" }, { ust: "🔎 Bilgi erişimi" },
      { ust: "👁️ Nesne tanıma, bilgisayarlı görü" }, { ust: "🧩 Çok modlu, çok görevli öğrenme" }
    ]}},

  { tur: "bilgi", baslik: "Fark: özellikleri kim çıkarıyor?",
    gorsel: { tip: "ikili",
      sol: { baslik: "Klasik makine öğrenmesi", gorsel: { tip: "akis", adimlar: [ { simge: "🖼️", yazi: "Ham veri" }, { simge: "🧑‍🔬", yazi: "Uzman özellik çıkarır" }, { simge: "🤖", yazi: "Model" } ] } },
      sag: { baslik: "Derin öğrenme", gorsel: { tip: "akis", adimlar: [ { simge: "🖼️", yazi: "Ham veri" }, { simge: "🧠", yazi: "Katmanlar özellikleri kendisi öğrenir" } ] } },
      ok: "≠" } },

  { tur: "bilgi", baslik: "2012: derin öğrenmenin patlaması",
    gorsel: { tip: "resim", yol: G + "40-imagenet.png" },
    not: "ImageNet: 1,2 milyon resimlik dünyanın en büyük nesne tanıma yarışması. Top-5 hata: doğru cevap modelin ilk 5 tahmininde yoksa hata sayılır." },

  { tur: "bilgi", baslik: "Donanım: CPU ↔ GPU",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🧠 CPU", alt: "Az sayıda güçlü çekirdek · sıralı işler" },
      { ust: "🎮 GPU", alt: "Binlerce küçük çekirdek · paralel matris işlemleri" },
      { ust: "💾 Bellek", alt: "Milyonlarca resim ve ağırlık için büyük bellek" },
      { ust: "☁️ Colab", alt: "Ücretsiz GPU/TPU (41. konu)" }
    ]}},

  { tur: "bilgi", baslik: "Hangi dil?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🐍 Python", alt: "Hızlı prototip, yüzlerce kütüphane (NumPy, SciPy, TensorFlow)" },
      { ust: "⚡ C++", alt: "En hızlı; kütüphanelerin çoğu C/C++ ile yazılı" },
      { ust: "λ Lisp", alt: "1958 · John McCarthy · sembolik hesaplama" },
      { ust: "☕ Java", alt: "JVM: her platformda çalışır · WEKA" },
      { ust: "📜 Prolog", alt: "Mantık programlama: gerçekler ve kurallar" }
    ]},
    not: "Tek doğru dil yok; ihtiyaca göre seçilir." },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi derin öğrenme uygulamalarıyla geliştirilmez?", secenekler: ["Bilgi erişimi", "Veri tabanı işlemleri", "Konuşma ve ses işleme", "Nesne tanıma ve bilgisayarlı görü", "Dil modelleme ve doğal dil işleme"], dogru: 1 },
    { soru: "Derin öğrenmeyi klasik makine öğrenmesinden ayıran en önemli özellik?", secenekler: ["Veri kullanmaması", "Özellikleri ham veriden kendisinin öğrenmesi", "Sadece sayısal veriyle çalışması", "Tek katmanlı olması"], dogru: 1 },
    { soru: "Derin ağların eğitiminde CPU yerine ne kullanılır?", secenekler: ["RAM", "GPU", "SSD", "Modem"], dogru: 1 },
    { soru: "“Yapay zekâ” terimini ortaya atan McCarthy'nin geliştirdiği dil?", secenekler: ["Prolog", "Java", "Lisp", "C++"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Katmanlar ne görüyor?",
    metin: "Bir resim tanıma ağında ilk katmanlar kenar ve renk lekeleri, orta katmanlar göz, tekerlek gibi parçalar, son katmanlar bütün nesneleri yakalar. <b>poloclub.github.io/cnn-explainer</b> sitesinde bunu canlı izleyebilirsin.",
    not: "43. konudaki MNIST ağı da aynı mantıkla çalışan küçük bir evrişimli ağ (CNN)." }

]};
