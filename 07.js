// YAPZ · 07 · NumPy: boyutlandırma, birleştirme, ayırma, sıralama  (Kitap s. 38–41)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "reshape eleman sayısını değiştirmeden şekli değiştirir (9 eleman → 3×3 olur, 2×5 olmaz). concatenate birleştirir, split böler, sort sıralar. axis=0 satır yönü (aşağı), axis=1 sütun yönü (yana). axis kavramı Pandas'ta da aynen geçerli, burada iyi oturtun.",
    akis: ["reshape (13. Uyg)", "concatenate ve axis (14. Uyg)", "split / vsplit / hsplit (15. Uyg), sort (16. Uyg)"],
    hatalar: ["reshape'te eleman sayısını tutturmamak (ValueError).", "np.sort(x) ile x.sort() farkını bilmemek: ilki kopya döndürür, ikincisi diziyi kalıcı değiştirir.", "axis 0 ve 1'i karıştırmak."],
    sorular: [["reshape(-1) ne yapar?", "Diziyi tek boyuta açar; -1 “sen hesapla” demektir."], ["split eşit bölemezse?", "np.split(x,3) eşit bölünemezse hata verir; indeks listesiyle ([2,6]) istediğin yerden bölebilirsin."]]},

  { tur: "bilgi", baslik: "reshape: şekil değiştir",
    gorsel: { tip: "html", icerik: `<div style="display:flex;align-items:center;gap:14px;justify-content:center;flex-wrap:wrap;font-family:Consolas,monospace">
      <div style="display:flex">${[1,2,3,4,5,6,7,8,9].map(n=>`<div style="width:26px;height:26px;border:1px solid #2f80ed;display:grid;place-items:center;background:#eaf2fd;font-size:.8rem">${n}</div>`).join("")}</div>
      <b style="color:#888">reshape(3,3) ➜</b>
      <div style="display:grid;grid-template-columns:repeat(3,26px)">${[1,2,3,4,5,6,7,8,9].map(n=>`<div style="height:26px;border:1px solid #27ae60;display:grid;place-items:center;background:#e8f7ee;font-size:.8rem">${n}</div>`).join("")}</div></div>` },
    not: "Eleman sayısı aynı kalmalı: 9 = 3 × 3." },

  { tur: "uygulama", baslik: "Yeniden boyutlandır",
    gorsel: { tip: "resim", yol: G + "07-u13.png" },
    adimlar: ["1–9 arası dizi oluştur.", "3×3 yap.", "3×3×1 yap.", "reshape(-1) ile tekrar tek boyuta indir."],
    kitap: "s. 38 · 13. Uygulama" },

  { tur: "bilgi", baslik: "axis: hangi yönde?",
    gorsel: { tip: "html", icerik: `<div style="display:flex;gap:30px;justify-content:center;flex-wrap:wrap;text-align:center;font-weight:600">
      <div><div style="font-size:2rem;color:#2f80ed">⬇️</div>axis=0<br><small style="font-weight:400">satırlar (alt alta)</small></div>
      <div><div style="font-size:2rem;color:#27ae60">➡️</div>axis=1<br><small style="font-weight:400">sütunlar (yan yana)</small></div></div>` },
    kod: `np.concatenate([a,b])          # alt alta
np.concatenate([a,b], axis=1)  # yan yana
np.split(x,3)                  # 3 eşit parça
np.sort(y, axis=1)             # her satırı kendi içinde sırala` },

  { tur: "uygulama", baslik: "Birleştir",
    gorsel: { tip: "resim", yol: G + "07-u14.png" },
    adimlar: ["x ve y'yi birleştir, sonra z'yi de ekle.", "İki 2×3 diziyi alt alta birleştir.", "Aynı dizileri axis=1 ile yan yana birleştir."],
    kitap: "s. 39 · 14. Uygulama" },

  { tur: "uygulama", baslik: "Ayır",
    gorsel: { tip: "resim", yol: G + "07-u15.png" },
    adimlar: ["11–19 dizisini 3 parçaya böl.", "[2,6] indekslerinden böl, a, b, c'ye aktar.", "4×4 diziyi vsplit ile satır, hsplit ile sütun bazında ikiye böl."],
    kitap: "s. 40 · 15. Uygulama" },

  { tur: "uygulama", baslik: "Sırala",
    metin: "Sayılar rastgele; sıralamanın doğru olup olmadığına bak.",
    gorsel: { tip: "resim", yol: G + "07-u16.png" },
    adimlar: ["1–100 arası 10 rastgele sayı.", "np.sort ile sırala; x.sort() ile kalıcı sırala.", "4×4 diziyi axis=1 ve axis=0 ile sırala."],
    kitap: "s. 40–41 · 16. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 <code>np.concatenate([np.array([1,2,3]), np.array([4,5,6])])</code> çıktısı?", secenekler: ["array([[1, 2, 3], [4, 5, 6]])", "array([1, 2, 3, 4, 5, 6])", "array([4, 5, 6, 1, 2, 3])", "array([[4, 5, 6],[1,2,3]])", "array([[1,2,3,1,2,3],[4,5,6,4,5,6]])"], dogru: 1, kod: true },
    { soru: "12 elemanlı dizi hangi şekle getirilemez?", secenekler: ["(3,4)", "(2,6)", "(5,2)", "(12,1)"], dogru: 2 },
    { soru: "İki tabloyu yan yana birleştirmek için?", secenekler: ["axis=0", "axis=1", "axis=2", "axis=-5"], dogru: 1 },
    { soru: "Diziyi kalıcı olarak sıralayan?", secenekler: ["np.sort(x)", "x.sort()", "sorted(x)", "x.split()"], dogru: 1, kod: true }
  ]},

  { tur: "merak", baslik: "Büyükten küçüğe",
    kod: `x = np.array([5, 2, 9, 1])
np.sort(x)[::-1]     # array([9, 5, 2, 1])`,
    not: "NumPy'da ters sıralama parametresi yok; sıralayıp 06'daki [::-1] ile çeviririz." }

]};
