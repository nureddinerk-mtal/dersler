// YAPZ · 09 · Pandas: Seri ve DataFrame  (Kitap s. 44–49)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Pandas = Python'un Excel'i. Seri tek sütun (etiketli), DataFrame tablo. Makine öğrenmesinde veri neredeyse her zaman DataFrame olarak okunur. Kritik ikili: iloc (konuma göre, sayı) ve loc (etikete göre, isim). loc'ta bitiş dahil, iloc'ta değil; bu fark çok soruluyor.",
    akis: ["Seri (21. Uyg)", "DataFrame oluşturma (22. Uyg)", "İnceleme: info, shape, head (23. Uyg) ve seçim: [], iloc, loc (24. Uyg)"],
    hatalar: ["pd.Series ve pd.DataFrame'de büyük harfi unutmak.", "df[\"sütun\"] ile df[[\"s1\",\"s2\"]] farkı: çift köşeli parantez birden çok sütun seçer.", "iloc[0:3] 3 satır, loc[0:3] 4 satır getirir.", "Kitaptaki 24. Uygulamada \"seri3\":3 yazım hatası var; doğrusu d3."],
    sorular: [["Seri ile NumPy dizisi farkı?", "Seri'nin her elemanının bir etiketi (indeksi) vardır; s4[\"tr\"] gibi isimle erişilebilir."], ["head() kaç satır gösterir?", "Varsayılan 5; head(10) ile 10 satır."]]},

  { tur: "bilgi", baslik: "Seri ve DataFrame",
    gorsel: { tip: "ikili", ok: " ",
      sol: { baslik: "Seri: tek sütun", gorsel: { tip: "tablo", ad: "s4", sutunlar: ["indeks", "değer"], satirlar: [["tr", "Türkiye"], ["fr", "Fransa"], ["de", "Almanya"]] } },
      sag: { baslik: "DataFrame: tablo", gorsel: { tip: "tablo", ad: "df", sutunlar: ["", "Ad", "Yaş"], satirlar: [[0, "Ali", 10], [1, "Ayşe", 12], [2, "Mehmet", 13]] } }
    },
    kod: `import pandas as pd
s = pd.Series(["Merve","Yusuf"])
df = pd.DataFrame({"Ad":["Ali","Ayşe"], "Yaş":[10,12]})` },

  { tur: "uygulama", baslik: "Seri oluştur",
    gorsel: { tip: "resim", yol: G + "09-u21.png" },
    adimlar: ["Pandas'ı pd adıyla import et.", "İsim listesinden seri.", "Karakterlerden oluşan NumPy dizisinden seri.", "Sözlükten seri: anahtarlar indeks olur."],
    kitap: "s. 45 · 21. Uygulama" },

  { tur: "uygulama", baslik: "DataFrame oluştur",
    gorsel: { tip: "resim", yol: G + "09-u22.png" },
    adimlar: ["Tek listeden DataFrame, sütun adı “Veriler”.", "İki boyutlu listeden Ad–Yaş tablosu.", "Liste sözlüğünden aynı tablo."],
    kitap: "s. 46 · 22. Uygulama" },

  { tur: "bilgi", baslik: "Tabloyu incele",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>df.info()</code> <span>sütunlar, tipler, bellek</span></div><div><code>df.shape</code> <span>(satır, sütun)</span></div>
      <div><code>df.size</code> <span>toplam hücre</span></div><div><code>df.ndim</code> <span>boyut sayısı</span></div>
      <div><code>df.head() · df.tail()</code> <span>ilk / son 5 satır</span></div><div><code>df.values</code> <span>değerler (NumPy dizisi)</span></div></div>` } },

  { tur: "uygulama", baslik: "DataFrame inceleme",
    metin: "Sayılar rastgele.",
    gorsel: { tip: "resim", yol: G + "09-u23.png" },
    adimlar: ["1–100 arası 3×3 rastgele dizi → x1, x2, x3 sütunlu DataFrame.", "info, axes, shape, ndim, size, values'a bak.", "index ile satırlara Ogrenci1, 2, 3 adını ver.", "head() ve tail() dene."],
    kitap: "s. 47–48 · 23. Uygulama" },

  { tur: "bilgi", baslik: "Seçim: iloc ve loc",
    gorsel: { tip: "ikili", ok: " ",
      sol: { baslik: "iloc · konuma göre", gorsel: { tip: "html", icerik: "<pre class='kod' style='margin:0'>df.iloc[0]       # ilk satır\ndf.iloc[0:3]     # 0,1,2\ndf.iloc[:, 0:2]  # ilk 2 sütun</pre>" } },
      sag: { baslik: "loc · etikete göre", gorsel: { tip: "html", icerik: "<pre class='kod' style='margin:0'>df.loc[0:3]          # 0,1,2,3 !\ndf.loc[:, \"seri1\"]\ndf.loc[2:5, \"seri1\":\"seri3\"]</pre>" } }
    },
    not: "iloc'ta bitiş dahil değil, loc'ta dahil." },

  { tur: "uygulama", baslik: "Satır ve sütun seç",
    metin: "Sayılar rastgele.",
    gorsel: { tip: "resim", yol: G + "09-u24.png" },
    adimlar: ["0–100 arası 10'ar sayılık 4 dizi → sözlük → DataFrame (seri1…seri4).", "df[2:4], df[\"seri1\"], df.seri1, df[[\"seri1\",\"seri4\"]].", "iloc ile konuma göre, loc ile etikete göre seç."],
    kitap: "s. 48–49 · 24. Uygulama (kitapta \"seri3\":3 yazılmış; d3 olmalı)" },

  { tur: "test", sorular: [
    { soru: "📖 Bir DataFrame'de axes=0 ifadesi neyi ifade eder?", secenekler: ["Index", "Row", "Column", "Values", "Size"], dogru: 1 },
    { soru: "📖 DataFrame oluştururken sütun isimlerini belirtmek için hangi parametre?", secenekler: ["index", "size", "variable", "columns", "rows"], dogru: 3 },
    { soru: "📖 <code>x = pd.Series([1,2,3,4,5],index=['a','b','c','d','e'])</code> → <code>x['b']</code>?", secenekler: ["1", "2", "3", "4", "5"], dogru: 1 },
    { soru: "📖 data DataFrame'inin ilk üç satırı ve ilk üç sütunu?", secenekler: ["data.iloc[0:3,0:3]", "data.iloc[0:2,0:2]", "data.iloc[1:3,1:3]", "data.loc[0:3,0:3]", "data.loc[1:3,1:3]"], dogru: 0, kod: true },
    { soru: "Bir DataFrame'in ilk 5 satırını gösteren?", secenekler: ["df.tail()", "df.head()", "df.info()", "df.size"], dogru: 1, kod: true }
  ]},

  { tur: "merak", baslik: "Koşulla satır seç",
    kod: `df = pd.DataFrame({"Ad":["Ali","Ayşe","Mehmet"], "Yaş":[10,12,13]})
df[df["Yaş"] > 11]`,
    not: "06'daki mantıksal seçimin Pandas hâli. Veri filtrelemede en çok kullanılan yöntem." }

]};
