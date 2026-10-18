// YAPZ · 05 · NumPy: dizi oluşturma, boyutlar, özellikler  (Kitap s. 31–35)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "NumPy, yapay zekânın sayı deposu. Temeli ndarray: hızlı, tek tipli, çok boyutlu dizi. Bu konuda dört şey oturmalı: np.array ile dizi kurmak, boyut fikri (1B satır, 2B tablo, 3B küp), hazır diziler (zeros, ones, arange, linspace, random) ve özellikler (shape, ndim, size, dtype). shape kavramı sinir ağlarında (3. birim) sürekli karşımıza çıkacak.",
    akis: ["NumPy neden? Python listesi ile farkı", "Boyutlar görseli ve 6–7. uygulama", "Yer tutucular (8. Uyg) ve özellikler (9. Uyg)"],
    hatalar: ["import numpy as np satırını çalıştırmadan np kullanmak (NameError).", "np.zeros(4,3) yazmak: boyut demet olarak verilir → np.zeros((4,3)).", "arange'de bitiş değerinin dahil olduğunu sanmak (np.arange(1,10) 9'da biter).", "Kitapta “arrange” yazıyor; doğrusu arange."],
    sorular: [["Neden liste değil de NumPy dizisi?", "Çok daha hızlı ve matematik işlemleri tek satırda yapılır: dizi*2 bütün elemanları ikiyle çarpar."], ["array([1., 2., 3.]) içindeki noktalar ne?", "Elemanlar ondalık (float) sayıya dönüştürülmüş demek. NumPy dizisinde tüm elemanlar aynı tiptedir."],
              ["random her seferinde farklı çıkıyor?", "Evet, rastgele. Aynı sonucu almak için np.random.seed(0) gibi bir tohum verilir."]]},

  { tur: "bilgi", baslik: "NumPy nedir?",
    metin: "Bilimsel hesaplamalar için açık kaynak Python kütüphanesi. Temeli <b>ndarray</b> dizisi.",
    kod: `import numpy as np     # np takma adıyla
a = np.array([1, 2, 3])`,
    not: "Python listesinden daha hızlı ve işlevsel. Bütün elemanlar aynı veri tipinde." },

  { tur: "bilgi", baslik: "Boyutlar",
    gorsel: { tip: "html", icerik: `<div style="display:flex;gap:26px;justify-content:center;flex-wrap:wrap;align-items:flex-end;font-family:Consolas,monospace;text-align:center">
      <div><div style="display:flex">${[1,2,3].map(n=>`<div style="width:34px;height:34px;border:2px solid #2f80ed;display:grid;place-items:center;background:#eaf2fd">${n}</div>`).join("")}</div><b style="color:#2f80ed">1 boyut</b><br><small>satır</small></div>
      <div><div style="display:grid;grid-template-columns:repeat(3,34px)">${[1,2,3,4,5,6].map(n=>`<div style="height:34px;border:2px solid #27ae60;display:grid;place-items:center;background:#e8f7ee">${n}</div>`).join("")}</div><b style="color:#27ae60">2 boyut</b><br><small>tablo</small></div>
      <div style="position:relative;width:118px;height:86px"><div style="position:absolute;left:14px;top:0;display:grid;grid-template-columns:repeat(3,30px);opacity:.55">${Array(6).fill(0).map(()=>`<div style="height:30px;border:2px solid #9b51e0;background:#f3eafd"></div>`).join("")}</div><div style="position:absolute;left:0;top:14px;display:grid;grid-template-columns:repeat(3,30px)">${[1,2,3,4,5,6].map(n=>`<div style="height:30px;border:2px solid #9b51e0;display:grid;place-items:center;background:#f3eafd">${n}</div>`).join("")}</div></div><div style="margin-left:-118px;margin-top:92px"><b style="color:#9b51e0">3 boyut</b><br><small>küp</small></div></div>` }},

  { tur: "uygulama", baslik: "İlk NumPy dizisi",
    gorsel: { tip: "resim", yol: G + "05-u6.png" },
    adimlar: ["NumPy'ı np adıyla import et.", "[1,2,3] listesinden dizi oluştur.", "İçine 3.14 ekle: hepsi ondalığa döndü mü?", "dtype=int ile hepsini tam sayı yap."],
    kitap: "s. 32 · 6. Uygulama" },

  { tur: "uygulama", baslik: "1, 2 ve 3 boyutlu dizi",
    gorsel: { tip: "resim", yol: G + "05-u7.png" },
    adimlar: ["birboyut: tek liste.", "ikiboyut: iç içe iki liste.", "ucboyut: iç içe üç seviye liste."],
    kitap: "s. 33 · 7. Uygulama" },

  { tur: "bilgi", baslik: "Hazır diziler (yer tutucular)",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>np.zeros((4,3))</code> <span>sıfırlarla dolu 4×3</span></div><div><code>np.ones(5)</code> <span>birlerle dolu</span></div>
      <div><code>np.full((4,3),10)</code> <span>hepsi 10</span></div><div><code>np.arange(1,30,2)</code> <span>başla, bitir (dahil değil), artış</span></div>
      <div><code>np.linspace(0,10,num=5)</code> <span>eşit aralıklı 5 sayı</span></div><div><code>np.random.randint(0,10,5)</code> <span>0–9 arası rastgele 5 sayı</span></div></div>` } },

  { tur: "uygulama", baslik: "Yer tutucu diziler",
    metin: "Rastgele sayılar sende farklı çıkar.",
    gorsel: [{ tip: "resim", yol: G + "05-u8a.png" }, { tip: "resim", yol: G + "05-u8b.png" }],
    adimlar: ["zeros ile 5 sıfır, sonra 4×3 tam sayı sıfır.", "ones ve full ile 4×3 diziler.", "arange: 1'den 30'a ikişer.", "linspace: 0–10 arası 5 sayı.", "randint: 5 ve 4×3 rastgele sayı."],
    kitap: "s. 33–34 · 8. Uygulama" },

  { tur: "bilgi", baslik: "Diziyi incele",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>shape</code> <span>her boyuttaki eleman sayısı → (2, 3)</span></div><div><code>ndim</code> <span>kaç boyutlu → 2</span></div>
      <div><code>size</code> <span>toplam eleman sayısı → 6</span></div><div><code>dtype</code> <span>veri tipi → int64</span></div>
      <div><code>itemsize</code> <span>bir elemanın bayt boyutu → 8</span></div></div>` },
    not: "Parantez yok: a.shape (a.shape() değil)." },

  { tur: "uygulama", baslik: "Dizi özellikleri",
    gorsel: { tip: "resim", yol: G + "05-u9.png" },
    adimlar: ["2×3 bir dizinin shape'ini yazdır.", "2×4 dizinin ndim'ini bul.", "5 elemanlı dizinin size'ını bul.", "Ondalıklı dizinin dtype'ını, tam sayılı dizinin itemsize'ını bul."],
    kitap: "s. 34–35 · 9. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 NumPy dizilerini kullanabilmek için hangi kod kullanılır?", secenekler: ["import numpy as np", "import pyplot as plt", "import pandas as pd", "import math as np", "import python as pt"], dogru: 0, kod: true },
    { soru: "📖 NumPy dizisi oluşturmanın doğru söz dizimi?", secenekler: ["np.createArray([1, 2, 3, 4, 5])", "np.array([1, 2, 3, 4, 5])", "np.object([1, 2, 3, 4, 5])", "np.numpy([1, 2, 3, 4, 5])", "np.Series([1, 2, 3, 4, 5])"], dogru: 1, kod: true },
    { soru: "📖 NumPy dizilerinde boyut sayısı bilgisine erişmek için hangisi kullanılır?", secenekler: ["size", "dtype", "ndim", "shape", "itemsize"], dogru: 2 },
    { soru: "📖 <code>array([1, 2, 3, 4, 5, 6, 7, 8, 9])</code> çıktısını veren kod?", secenekler: ["np.arange(1,10)", "np.arange(0,10)", "np.array(1,10)", "np.array(0,10)", "np.arange(1,9)"], dogru: 0, kod: true },
    { soru: "<code>np.zeros((2,4))</code> kaç elemanlıdır?", secenekler: ["2", "4", "6", "8"], dogru: 3 }
  ]},

  { tur: "merak", baslik: "Liste mi, NumPy mı? Hız yarışı",
    kod: `import time
liste = list(range(1_000_000))
dizi = np.arange(1_000_000)

t = time.time(); [x*2 for x in liste]; print("liste:", time.time()-t)
t = time.time(); dizi*2;               print("numpy:", time.time()-t)`,
    not: "NumPy genellikle onlarca kat hızlıdır. Yapay zekâ milyonlarca sayıyla çalıştığı için bu fark çok önemli." }

]};
