// YAPZ · 12 · Matplotlib ile grafik  (Kitap s. 56–61)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Matplotlib'in pyplot modülü (plt) ile çizgi, çubuk, histogram, dağılım ve pasta grafikleri. Kalıp hep aynı: veriyi hazırla → plt.plot/bar/… → başlık ve etiketler → plt.show(). Hangi grafik ne zaman: değişim için çizgi, karşılaştırma için çubuk, dağılım için histogram, iki değişken ilişkisi için scatter, oran için pasta.",
    akis: ["Çizgi grafikler: liste, NumPy, denklem, başlık ve etiket, çoklu (31. Uyg)", "Grafik türleri tablosu", "Çubuk, histogram, dağılım, pasta (32. Uyg)"],
    hatalar: ["plt.show() yazmamak (Jupyter'da çoğu zaman yine görünür ama alışkanlık edinilmeli).", "title ve label'da tırnakları unutmak.", "Çoklu çubukta x+0.25 kaydırmasını yapmayınca çubukların üst üste binmesi."],
    sorular: [["Grafiğin rengini nasıl değiştiririm?", "color parametresiyle: plt.plot(x, y, color='red')."], ["Grafiği resim olarak nasıl kaydederim?", "plt.show()'dan önce plt.savefig('grafik.png')."]]},

  { tur: "bilgi", baslik: "Grafik kalıbı",
    kod: `import matplotlib.pyplot as plt
plt.plot(x, y)           # çiz
plt.title("Başlık")      # başlık
plt.xlabel("X Ekseni")   # eksen adları
plt.ylabel("Y Ekseni")
plt.show()               # göster` },

  { tur: "uygulama", baslik: "Çizgi grafik",
    gorsel: [{ tip: "resim", yol: G + "12-u31a.png" }, { tip: "resim", yol: G + "12-u31b.png" }],
    adimlar: ["[4,5,8,3,2,7] listesinin grafiği.", "np.arange(30) dizisinin grafiği.", "y = x² + 1 denklemi (x: 0–24).", "Başlık ve eksen etiketli grafik.", "Aynı eksende üç rastgele çizgi."],
    kitap: "s. 56–58 · 31. Uygulama" },

  { tur: "bilgi", baslik: "Hangi grafik ne zaman?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📈 Çizgi · plot", alt: "Zamanla değişim" },
      { ust: "📊 Çubuk · bar", alt: "Kategorileri karşılaştır" },
      { ust: "▥ Histogram · hist", alt: "Değerlerin dağılımı" },
      { ust: "⁘ Dağılım · scatter", alt: "İki değişken arası ilişki" },
      { ust: "◔ Pasta · pie", alt: "Bütünün parçaları (oran)" }
    ]}},

  { tur: "uygulama", baslik: "Grafik türleri",
    metin: "Histogram rastgele sayılardan; seninki farklı görünür.",
    gorsel: [{ tip: "resim", yol: G + "12-u32a.png" }, { tip: "resim", yol: G + "12-u32b.png" }],
    adimlar: ["Programlama dili oranları: çubuk grafik.", "Üç veri grubu: kaydırılmış (0, 0.25, 0.50) çoklu çubuk.", "0–100 arası 100 rastgele sayının histogramı (aralık 10).", "x–y noktaları: kırmızı scatter.", "Şehir nüfus oranları: pasta, başlık ve legend."],
    kitap: "s. 59–61 · 32. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi grafik çizimi için gerekli bir kütüphanedir?", secenekler: ["plot", "draw", "numpy", "pandas", "matplotlib"], dogru: 4 },
    { soru: "📖 Grafikleri görüntülemek için hangi kod kullanılır?", secenekler: ["plt.draw()", "plt.chart()", "plt.display()", "plt.show()", "plt.graph()"], dogru: 3, kod: true },
    { soru: "📖 Bir grafiğe başlık eklemek için hangi kod?", secenekler: ["plt.title(\"Başlık\")", "plt.title(Başlık)", "title(\"Başlık\")", "plt.label(\"Başlık\")", "plt.head(\"Başlık\")"], dogru: 0, kod: true },
    { soru: "📖 Hangisi bir grafik çeşidi değildir?", secenekler: ["Çubuk", "Yıldız", "Histogram", "Dağılım", "Pasta"], dogru: 1 },
    { soru: "📖 x=[0,1,2,3], y=[50,20,40,30] değerlerinin çizgi grafiği ve “Sonuçlar” başlığını çizen kod?", secenekler: ["plt.plot(x,y)\nplt.title(\"Sonuçlar\")\nplt.show()", "plt.plot(x,y, \"Sonuçlar\")\nplt.show()", "plt.plot(\"Sonuçlar\", x,y)\nplt.show()", "plt.bar(\"Sonuçlar\", x,y)\nplt.show()", "plt.plot(y,x)\nplt.title(\"Sonuçlar\")\nplt.show()"], dogru: 0, kod: true },
    { soru: "Sınıftaki boy uzunluklarının dağılımını göstermek için en uygun grafik?", secenekler: ["Pasta", "Histogram", "Çizgi", "Hiçbiri"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Yan yana iki grafik",
    kod: `fig, (sol, sag) = plt.subplots(1, 2, figsize=(9,3))
sol.plot([4,5,8,3,2,7]); sol.set_title("Çizgi")
sag.bar(["C","Python"], [25,40]); sag.set_title("Çubuk")
plt.show()`,
    not: "subplots ile tek resimde birden çok grafik. 20. konudaki Seaborn grafiklerinde de işe yarar." }

]};
