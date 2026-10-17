// YAPAY ZEKÂ VE MAKİNE ÖĞRENMESİ — KONULAR TABLOSU
// Her konu: no, baslik, kitap (sayfa), hazir (içerik dosyası var mı), ek (kitap dışı konu)
// İçerik dosyası: veri/yapz/<no>.js   (örn. veri/yapz/01.js, veri/yapz/0A.js)
// Kitap dışı konular harfli numara alır (0A, 37A…), kitap konularının numarası değişmez.
// Yeni konu: listeye satır ekle. İçerik yazılınca hazir: true yap.
window.KONULAR = {
  birimler: [
    { ad: "Başlarken", simge: "🧭", konular: [
      { no: "0A", baslik: "Yapay zekânın kısa tarihi",                       ek: true },
      { no: "0B", baslik: "Yapay zekâ etiği ve robot etiği",                 ek: true }
    ]},
    { ad: "Yapay Zekâya Giriş", simge: "🤖", konular: [
      { no: "01", baslik: "Yapay zekâ nedir? Alt alanlar, kullanım yerleri",  kitap: "s. 16–17" },
      { no: "02", baslik: "Geliştirme ortamı: Anaconda ve Jupyter",           kitap: "s. 17–23" },
      { no: "03", baslik: "Paket yükleme, Colab ve Kaggle Notebook",          kitap: "s. 23–27" },
      { no: "04", baslik: "Veri seti ve açık veri setleri",                   kitap: "s. 27–31" },
      { no: "05", baslik: "NumPy: dizi oluşturma, boyutlar, özellikler",      kitap: "s. 31–35" },
      { no: "06", baslik: "NumPy: indeksleme ve dilimleme",                   kitap: "s. 35–38" },
      { no: "07", baslik: "NumPy: boyutlandırma, birleştirme, ayırma, sıralama", kitap: "s. 38–42" },
      { no: "08", baslik: "NumPy: matematik ve trigonometri fonksiyonları",   kitap: "s. 42–44" },
      { no: "09", baslik: "Pandas: Seri ve DataFrame",                        kitap: "s. 44–49" },
      { no: "10", baslik: "Pandas: concat ve join ile birleştirme",           kitap: "s. 49–52" },
      { no: "11", baslik: "Pandas: CSV okuma/yazma, groupby",                 kitap: "s. 52–56" },
      { no: "12", baslik: "Matplotlib ile grafik",                            kitap: "s. 56–62" }
    ]},
    { ad: "Makine Öğrenmesi", simge: "📊", konular: [
      { no: "13", baslik: "Makine öğrenmesi: tahmin, kestirim, sınıflandırma", kitap: "s. 68–70" },
      { no: "14", baslik: "Öğrenme türleri: denetimli, denetimsiz, yarı denetimli, pekiştirmeli", kitap: "s. 70–74" },
      { no: "15", baslik: "Terimler, öğrenme süreci, çapraz doğrulama",       kitap: "s. 74–76" },
      { no: "16", baslik: "Sınıflandırma başarısı: karışıklık matrisi",       kitap: "s. 76–79" },
      { no: "17", baslik: "Regresyon başarısı, aşırı ve zayıf öğrenme",       kitap: "s. 79–83" },
      { no: "18", baslik: "SciPy",                                            kitap: "s. 84–86" },
      { no: "19", baslik: "Seaborn: kurulum ve ilk grafikler",                kitap: "s. 86–92" },
      { no: "20", baslik: "Seaborn: grafik türleri, korelasyon ısı haritası", kitap: "s. 92–99" },
      { no: "21", baslik: "Scikit-learn: veri yükleme ve inceleme",           kitap: "s. 100–106" },
      { no: "22", baslik: "Eksik veri, özellik seçimi, label encoding",       kitap: "s. 106–116" },
      { no: "23", baslik: "Veriyi bölme ve ölçekleme",                        kitap: "s. 117–118" },
      { no: "24", baslik: "Algoritmalar ve model seçimi",                     kitap: "s. 119–121" },
      { no: "25", baslik: "K-Means kümeleme, modelleri değerlendirme",        kitap: "s. 121–124" },
      { no: "26", baslik: "Pipeline (iş hattı)",                              kitap: "s. 124–125" },
      { no: "27", baslik: "Regresyon türleri",                                kitap: "s. 125–127" },
      { no: "28", baslik: "En küçük kareler, eşikleme, R², korelasyon",       kitap: "s. 127–128" },
      { no: "29", baslik: "Basit doğrusal regresyon: diyabet",                kitap: "s. 128–132" },
      { no: "30", baslik: "Çoklu doğrusal regresyon: konut fiyatı",           kitap: "s. 132–134" },
      { no: "31", baslik: "Polinom regresyon ve R² karşılaştırması",          kitap: "s. 134–141" },
      { no: "32", baslik: "K en yakın komşu (K-NN): iris",                    kitap: "s. 141–144" },
      { no: "33", baslik: "Karar ağacı",                                      kitap: "s. 144–147" },
      { no: "34", baslik: "Destek vektör makineleri: elma–portakal",          kitap: "s. 147–151" },
      { no: "35", baslik: "Rastgele orman: Melbourne ev fiyatları",           kitap: "s. 151–155" }
    ]},
    { ad: "Yapay Sinir Ağları", simge: "🧠", konular: [
      { no: "36", baslik: "Yapay sinir ağı nedir? Biyolojik nöron",           kitap: "s. 162–165" },
      { no: "37", baslik: "Yapay nöronun matematiği",                         kitap: "s. 165–167" },
      { no: "37A", baslik: "Tensörler: sinir ağının veri kutuları",           ek: true },
      { no: "38", baslik: "Aktivasyon fonksiyonları",                         kitap: "s. 167–173" },
      { no: "39", baslik: "Kullanım alanları, katmanlar, ileri ve geri besleme", kitap: "s. 173–175" },
      { no: "40", baslik: "Derin öğrenme, donanım, programlama dilleri",      kitap: "s. 175–177" },
      { no: "40A", baslik: "Optimizasyon: model nasıl daha iyi öğrenir?",     ek: true },
      { no: "41", baslik: "Google Colab: Drive bağlama, GPU",                 kitap: "s. 177–183" },
      { no: "42", baslik: "Yolo ile nesne algılama",                          kitap: "s. 183–193" },
      { no: "42A", baslik: "OpenCV ile görüntü işleme",                       ek: true },
      { no: "43", baslik: "MNIST: el yazısı rakam tanıma",                    kitap: "s. 193–201" },
      { no: "44", baslik: "XOR kapısını öğrenen sinir ağı",                   kitap: "s. 201–207" }
    ]}
  ]
};
