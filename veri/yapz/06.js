// YAPZ · 06 · NumPy: indeksleme ve dilimleme  (Kitap s. 35–38)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "İndeks 0'dan başlar; 2B dizide [satır, sütun]. Dilimleme [başla:bitir:adım], bitiş dahil değil. Mantıksal seçim (y[y>4]) makine öğrenmesinde veri filtrelemenin temeli. Tahtada 4×4 kareli tablo çizip renkli kalemle seçimleri boyamak çok işe yarar.",
    akis: ["İndeks: 1B, 2B, 3B, negatif indeks (10. Uyg)", "Dilimleme 1B (11. Uyg)", "Dilimleme 2B ve mantıksal seçim (12. Uyg)"],
    hatalar: ["İlk elemanı 1. indeks sanmak.", "x[0:4]'ün 4. indeksi de aldığını sanmak.", "2B dizide satır ve sütun sırasını karıştırmak.", "Kitaptaki “ y[1,:]” satırının başındaki boşluk Python'da IndentationError verir."],
    sorular: [["b[2,1] ile b[2][1] farkı?", "Sonuç aynı; b[2,1] NumPy'a özgü ve daha hızlı yazım."], ["y[:,1] ne demek?", "Bütün satırların 1 numaralı sütunu, yani ikinci sütun."]]},

  { tur: "bilgi", baslik: "İndeks 0'dan başlar",
    gorsel: { tip: "html", icerik: `<div style="font-family:Consolas,monospace;text-align:center"><div style="display:inline-flex">${[1,2,3,4].map((n,i)=>`<div><div style="width:46px;height:40px;border:2px solid #2f80ed;display:grid;place-items:center;background:#eaf2fd">${n}</div><div style="color:#eb5757;font-weight:bold">${i}</div><div style="color:#9b51e0;font-size:.8rem">${i-4}</div></div>`).join("")}</div>
      <div style="font-size:.85rem;margin-top:4px"><span style="color:#eb5757">■ indeks</span> &nbsp; <span style="color:#9b51e0">■ negatif indeks</span></div></div>` },
    kod: `a = np.array([1,2,3,4])
a[0]      # 1
a[-1]     # 4  (sondan birinci)
b[2,1]    # 2B: [satır, sütun]` },

  { tur: "uygulama", baslik: "İndeksleme",
    gorsel: { tip: "resim", yol: G + "06-u10.png" },
    adimlar: ["1B dizide ilk elemanı al, 2. indeksi 99 yap.", "3×3 dizide [2,1] elemanını al, [1,2]'yi 99 yap.", "3B dizide [0,1,2] elemanını al.", "Negatif indeksle sondan seç."],
    kitap: "s. 35–36 · 10. Uygulama" },

  { tur: "bilgi", baslik: "Dilimleme",
    gorsel: { tip: "parcala", parcalar: [{ yazi: "x[", etiket: "" }, { yazi: "başla", etiket: "yoksa 0" }, { yazi: ":", etiket: "" }, { yazi: "bitir", etiket: "dahil değil" }, { yazi: ":", etiket: "" }, { yazi: "adım", etiket: "yoksa 1" }, { yazi: "]", etiket: "" }] },
    kod: `y[1,:]       # 2. satırın hepsi
y[:,1]       # 2. sütunun hepsi
y[0:2,0:3]   # ilk 2 satır, ilk 3 sütun
y[y>4]       # 4'ten büyükler (mantıksal seçim)` },

  { tur: "uygulama", baslik: "1 boyutlu dilimleme",
    gorsel: { tip: "resim", yol: G + "06-u11.png" },
    adimlar: ["10–29 arası dizi: np.arange(10,30).", "0–4 arası, 4'ten sona, 0–10 arası ikişer atlayarak seç."],
    kitap: "s. 36–37 · 11. Uygulama" },

  { tur: "uygulama", baslik: "2 boyutlu dilimleme",
    metin: "Dizi rastgele; seçim mantığını kontrol et.",
    gorsel: { tip: "resim", yol: G + "06-u12.png" },
    adimlar: ["4×4 rastgele dizi oluştur.", "İkinci satırı, ikinci sütunu seç.", "İlk 2 satır × ilk 3 sütunu, ilk 2 sütunu seç.", "4'ten büyük elemanları seç."],
    kitap: "s. 37 · 12. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 <code>isimler = np.array([\"Ali\",\"Ayşe\",\"Ahmet\",\"Fatma\",\"Zeynep\"])</code> → <code>isimler[2] = \"Ömer\"</code> sonrası dizi?", secenekler: ["['Ali','Ayşe','Ahmet','Fatma','Zeynep']", "['Ali','Ayşe','Ahmet','Ömer','Zeynep']", "['Ali','Ömer','Ahmet','Fatma','Zeynep']", "['Ömer','Ayşe','Ahmet','Fatma','Zeynep']", "['Ali','Ayşe','Ömer','Fatma','Zeynep']"], dogru: 4, kod: true },
    { soru: "📖 <code>x=np.array([[1,0,4,2,1],[7,6,1,5,3],[1,9,5,8,2]])</code> → <code>x[0:1]</code>?", secenekler: ["array([[1, 9, 5, 8, 2]])", "array([7, 6, 1, 5, 3])", "array([[1, 0, 4, 2, 1]])", "array([1, 0, 4, 2, 1])", "array([[4, 1, 5]])"], dogru: 2, kod: true },
    { soru: "<code>x = np.arange(10,20)</code> → <code>x[-1]</code>?", secenekler: ["10", "19", "20", "-1"], dogru: 1 },
    { soru: "2B dizide bütün satırların ilk sütunu?", secenekler: ["y[0,:]", "y[:,0]", "y[0]", "y[1,1]"], dogru: 1, kod: true }
  ]},

  { tur: "merak", baslik: "Tersine çevir",
    kod: `x = np.arange(1,6)
x[::-1]        # array([5, 4, 3, 2, 1])`,
    not: "Adım -1 olunca dizi sondan başa okunur." }

]};
