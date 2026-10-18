// YAPZ · 11 · Pandas: CSV okuma/yazma, groupby  (Kitap s. 52–56)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Gerçek veri dosyadan gelir: pd.read_csv. İlk iş her zaman head, shape, info, describe ile veriyi tanımak; bu dörtlü 21. konuda (makine öğrenmesi süreci) aynen tekrar edecek. groupby: “türlere göre ortalama” gibi gruplu özetler. Iris veri seti bütün yıl kullanılacak; dosya slaytta indirilebilir.",
    akis: ["Okuma/yazma fonksiyon tablosu", "CSV inceleme (28. Uyg)", "Dışa aktarma (29. Uyg) ve groupby (30. Uyg)"],
    hatalar: ["Dosyayı defterle aynı klasöre koymamak (FileNotFoundError). Colab'da önce sol menüden dosyayı yüklemek gerekir.", "drop'un tabloyu kalıcı değiştirdiğini sanmak (yeni tablo döndürür).", "Kitaptaki 29. Uygulamada data_source='yahoo' artık çalışmıyor; yfinance kullanın.", "Kitapta tırnaklar “AAAA” şeklinde (akıllı tırnak) basılmış; kopyalanınca hata verir."],
    sorular: [["describe() neyi gösterir?", "Sayısal sütunların adet, ortalama, standart sapma, en küçük, çeyrekler ve en büyük değerlerini."], ["Iris nedir?", "3 türden 150 iris çiçeğinin taç ve çanak yaprak ölçüleri. Makine öğrenmesinin “merhaba dünya”sı."]]},

  { tur: "bilgi", baslik: "Dosyadan oku, dosyaya yaz",
    gorsel: { tip: "ikili", ok: "⇄",
      sol: { baslik: "📥 Okuma", gorsel: { tip: "html", icerik: "<pre class='kod' style='margin:0'>pd.read_csv(\"veri.csv\")\npd.read_excel(\"veri.xlsx\")\npd.read_json(...)\npd.read_html(url)\npd.read_sql(sorgu, baglanti)</pre>" } },
      sag: { baslik: "📤 Yazma", gorsel: { tip: "html", icerik: "<pre class='kod' style='margin:0'>df.to_csv(\"data.csv\")\ndf.to_excel(\"data.xlsx\")\ndf.to_json(\"data.json\")\ndf.to_html(\"data.html\")\ndf.to_sql(tablo, baglanti)</pre>" } }
    }},

  { tur: "bilgi", baslik: "Veriyi tanıma dörtlüsü",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "head() / tail()", alt: "İlk / son satırlara göz at" },
      { ust: "shape", alt: "Kaç satır, kaç sütun?" },
      { ust: "info()", alt: "Sütun tipleri, boş değer var mı?" },
      { ust: "describe()", alt: "Ortalama, en küçük, en büyük…" }
    ]},
    not: "Ayrıca: df.columns (sütun adları), df.drop(1) (satır sil), df.drop('sütun', axis=1) (sütun sil), df.copy() (kopya)." },

  { tur: "uygulama", baslik: "CSV'yi incele",
    gorsel: { tip: "resim", yol: G + "11-u28.png" },
    adimlar: ["iris.csv'yi indir, defterinle aynı klasöre koy (Colab'da: sol menü 📁 → yükle).", "read_csv ile oku, head() ve tail()'e bak.", "Kopyasını al; shape, info(), describe(), columns.", "Species sütununu drop ile çıkar, bir satırı sil."],
    malzeme: ["iris.csv"],
    kitap: "s. 53 · 28. Uygulama" },

  { tur: "uygulama", baslik: "Hisse verisini dışa aktar",
    gorsel: { tip: "agac", kok: { ad: "📁 Defterin olduğu klasör", yan: true, cocuklar: [{ ad: "data.csv", alt: "to_csv" }, { ad: "data1.xlsx", alt: "to_excel" }, { ad: "data2.html", alt: "sadece Open sütunu" }] } },
    adimlar: [
      "Kitaptaki pandas_datareader'ın Yahoo kaynağı artık çalışmıyor. Yerine: !pip install yfinance",
      "import yfinance as yf → df = yf.download(\"THYAO.IS\", start=\"2020-01-01\", end=\"2022-05-15\")",
      "df.to_csv('data.csv'), df.to_excel('data1.xlsx')",
      "df[[\"Open\"]].to_html('data2.html'). Üç dosya oluştu mu?"
    ],
    kitap: "s. 54 · 29. Uygulama" },

  { tur: "bilgi", baslik: "groupby: grupla, özetle",
    gorsel: { tip: "akis", adimlar: [{ simge: "🌸", yazi: "150 çiçek" }, { simge: "🗂️", yazi: "Türe göre ayır", alt: "groupby(\"Species\")" }, { simge: "📊", yazi: "Her grubu özetle", alt: "count, mean, sum, agg" }] },
    kod: `data.groupby("Species").mean()
data.groupby("Species")["SepalLengthCm"].aggregate(["max","min"])` },

  { tur: "uygulama", baslik: "Iris türlerini grupla",
    gorsel: { tip: "resim", yol: G + "11-u30.png" },
    adimlar: ["iris.csv'yi oku, info() ile incele.", "Species'e göre grupla: count, mean, sum.", "agg ile birden çok özet (min, max, std).", "Sadece SepalLengthCm sütununun max ve min'i."],
    malzeme: ["iris.csv"],
    kitap: "s. 55 · 30. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Bir csv dosyasını DataFrame'e yüklemek için hangisi kullanılır?", secenekler: ["read_csv()", "ReadFile()", "Readcsv()", "to_csv", "read_file()"], dogru: 0, kod: true },
    { soru: "Sütunların ortalama, en küçük ve en büyük değerlerini tek seferde gösteren?", secenekler: ["df.info()", "df.describe()", "df.head()", "df.shape"], dogru: 1, kod: true },
    { soru: "Bir DataFrame'i Excel dosyasına kaydetmek için?", secenekler: ["df.to_excel()", "pd.read_excel()", "df.excel()", "df.save()"], dogru: 0, kod: true },
    { soru: "Iris verisinde her türün ortalama ölçüsü?", secenekler: ["data.mean()", "data.groupby(\"Species\").mean()", "data.head()", "data.drop(\"Species\")"], dogru: 1, kod: true }
  ]},

  { tur: "merak", baslik: "Internetten tablo oku",
    kod: `url = "https://tr.wikipedia.org/wiki/Türkiye'nin_illeri"
tablolar = pd.read_html(url)
tablolar[0].head()`,
    not: "read_html sayfadaki bütün HTML tablolarını (WTUG'daki &lt;table&gt;!) DataFrame listesine çevirir." }

]};
