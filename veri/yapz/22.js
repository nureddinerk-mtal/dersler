// YAPZ · 22 · Eksik veri, özellik seçimi, label encoding  (Kitap s. 106–116)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "ML algoritmaları eksik veriyle ve metinle çalışmaz. İki yol: eksik satırı sil (dropna) ya da değer ata (fillna: sabit, ortalama, ortanca; SimpleImputer: mean, median, constant, most_frequent). Kategorik veri sayıya çevrilir: label encoding (0,1,2) ya da one hot encoding (her kategori bir sütun, kukla değişken tuzağına dikkat).",
    akis: ["Eksik veri: neden sorun?", "Uygulama 1–2: yükle, info, isnull().sum(), describe, dropna, fillna", "Uygulama 3: ortalama/ortanca ile doldur", "Uygulama 4: SimpleImputer", "Label vs one hot kartları", "Uygulama 5–6: LabelEncoder, OneHotEncoder", "Test"],
    hatalar: ["Kitaptaki <b>500_kisi_boy_kilo_eksik_veri.csv</b> yayımlanmamış. Malzemedeki dosya aynı yapıda (500 satır; 38/50/50 eksik; dropna sonrası 362 satır) <b>sınıf için üretildi</b>; değerler kitaptakiyle birebir aynı değil.", "Kitapta sütun bir yerde Kilo, bir yerde Agirlik geçiyor; dosyada <b>Kilo</b>.", "Yeni Pandas'ta <code>df.fillna(df.mean())</code> metin sütunu yüzünden hata verir: <code>df.mean(numeric_only=True)</code>.", "Imputer'ın axis parametresi kitapta anlatılıyor ama yeni SimpleImputer'da yok.", "inplace=True yazmazsa değişiklik kalıcı olmaz; çıktı görünür ama df değişmez."],
    sorular: [["Silmek mi doldurmak mı?", "Az satır eksikse silmek kolay. Çok satır eksikse veri kaybolur; doldurmak daha iyi."], ["Kukla değişken tuzağı?", "Üç sütundan ikisi 0 ise üçüncü zaten 1'dir; bilgi tekrar eder. Bir sütun atılır (drop='first')."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 22-u1 · 1. adım
df_boy_kilo = pd.read_csv('500_kisi_boy_kilo_eksik_veri.csv', sep=';')
df_boy_kilo.head()

# 22-u1 · 2. adım
df_boy_kilo.info()

# 22-u1 · 3. adım
df_boy_kilo.isnull().sum()

# 22-u1 · 4. adım
df_boy_kilo.describe()

# 22-u2 · 5. adım
df_boy_kilo_dna = df_boy_kilo.dropna()
df_boy_kilo_dna.info()

# 22-u2 · 6. adım
df_boy_kilo_dna.shape

# 22-u2 · 7. adım
df_boy_kilo['Boy'].fillna(170)

# 22-u2 · 8. adım
df_boy_kilo['Cinsiyet'].fillna('E').head()

# 22-u3 · 9. adım
df_boy_kilo.fillna(df_boy_kilo.mean(numeric_only=True))

# 22-u3 · 10. adım
df_boy_kilo.fillna(df_boy_kilo.median(numeric_only=True))

# 22-u4 · 11. adım
from sklearn.impute import SimpleImputer
imp = SimpleImputer(missing_values=np.nan, strategy='mean')
numerik_ozellikler = ['Boy', 'Kilo']
df_boy_kilo_imp1 = imp.fit_transform(df_boy_kilo[numerik_ozellikler])
df_boy_kilo_imp1

# 22-u4 · 12. adım
imp = SimpleImputer(missing_values=np.nan, strategy='constant', fill_value=165)
df_boy_kilo.Boy = imp.fit_transform(df_boy_kilo['Boy'].values.reshape(-1,1))[:,0]
df_boy_kilo.Boy.head()

# 22-u4 · 13. adım
imp = SimpleImputer(missing_values=np.nan, strategy='most_frequent')
df_boy_kilo.Cinsiyet = imp.fit_transform(df_boy_kilo['Cinsiyet'].values.reshape(-1,1))[:,0]
df_boy_kilo.Cinsiyet.head()

# 22-u5 · 1. adım
from sklearn.preprocessing import LabelEncoder
iris = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')
print(iris.loc[[0,50,100],:])
label_encoder = LabelEncoder()
print(np.asarray(iris['species'].unique()))

# 22-u5 · 2. adım
iris['species'] = label_encoder.fit_transform(iris['species'])
print(iris.loc[[0,50,100],:])
print(np.asarray(iris['species'].unique()))

# 22-u6 · 3. adım
from sklearn.preprocessing import OneHotEncoder
iris = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')
ohe_encoder = OneHotEncoder()
iris_ohe = iris['species'].values.reshape(-1,1)
print('Yeniden boyutlandırıldı:', iris_ohe.shape)

# 22-u6 · 4. adım
y = ohe_encoder.fit_transform(iris_ohe).toarray()
sonuc_y = pd.DataFrame(data=y, index=range(150), columns=['setosa','versicolor','virginica'])
print(sonuc_y)

# 22-u6 · 5. adım
veriseti_fnl = pd.concat([iris.iloc[:,0:3], sonuc_y], axis=1)
veriseti_fnl.loc[[0,50,100],:]`,
    not: "Ölçme soruları 19, 21, 22 bu konudan." },

  { tur: "bilgi", baslik: "Eksik veriyle ne yapılır?",
    gorsel: { tip: "ikili",
      sol: { baslik: "1. Sil", gorsel: { tip: "kartlar", kartlar: [ { ust: "dropna()", alt: "NaN olan satırları çıkarır. 500 → 362 satır" } ] } },
      sag: { baslik: "2. Değer ata", gorsel: { tip: "kartlar", kartlar: [ { ust: "fillna(170)", alt: "sabit" }, { ust: "fillna(mean / median)", alt: "ortalama / ortanca" }, { ust: "SimpleImputer", alt: "scikit-learn ile" } ] } },
      ok: "ya da" } },

  { tur: "uygulama", baslik: "Eksik veriyi bul",
    gorsel: { tip: "resim", yol: G + "22-u1.png" },
    adimlar: ["500_kisi_boy_kilo_eksik_veri.csv dosyasını sep=';' ile oku, ilk satırlara bak.", "info: hangi sütunda kaç dolu değer var?", "isnull().sum() ile eksik sayıları.", "describe ile özet istatistikler."],
    malzeme: ["500_kisi_boy_kilo_eksik_veri.csv"],
    kitap: "s. 107–108 · 42–45. Örnek" },

  { tur: "uygulama", baslik: "Sil ya da sabit değer ata",
    gorsel: { tip: "resim", yol: G + "22-u2.png" },
    adimlar: ["dropna ile eksik satırları çıkar, info'ya bak.", "Yeni veri çerçevesinin şekli (shape).", "Boy'daki eksiklere 170 ata.", "Cinsiyet'teki eksiklere 'E' ata."],
    kitap: "s. 108–110 · 46–49. Örnek" },

  { tur: "uygulama", baslik: "Ortalama ve ortanca",
    metin: "Yeni Pandas'ta <code>df.mean(numeric_only=True)</code> yazmalısın.",
    gorsel: { tip: "resim", yol: G + "22-u3.png" },
    adimlar: ["Sayısal eksiklere sütun ortalamasını ata.", "Sayısal eksiklere sütun ortancasını (median) ata."],
    kitap: "s. 110–111 · 50–51. Örnek" },

  { tur: "bilgi", baslik: "SimpleImputer",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "strategy='mean'", alt: "ortalama (sayısal)" }, { ust: "strategy='median'", alt: "ortanca (sayısal)" },
      { ust: "strategy='constant', fill_value=…", alt: "sabit değer" }, { ust: "strategy='most_frequent'", alt: "en sık değer (kategorik)" },
      { ust: "missing_values=np.nan", alt: "eksik neyle gösterilmiş?" }, { ust: "fit / transform / fit_transform", alt: "öğren / uygula / ikisi birden" }
    ]}},

  { tur: "uygulama", baslik: "scikit-learn ile doldur",
    gorsel: { tip: "resim", yol: G + "22-u4.png" },
    adimlar: ["SimpleImputer(strategy='mean') ile Boy ve Kilo'yu doldur.", "Boy'daki eksiklere sabit 165 ata (reshape(-1,1) gerekir).", "Cinsiyet'i en sık değerle (most_frequent) doldur."],
    kitap: "s. 112–113 · 52–54. Örnek" },

  { tur: "bilgi", baslik: "Kategorik veriyi sayıya çevir",
    gorsel: { tip: "ikili",
      sol: { baslik: "Label encoding", gorsel: { tip: "tablo", ad: "species", sutunlar: ["species", "kod"], satirlar: [["setosa", 0], ["versicolor", 1], ["virginica", 2]] } },
      sag: { baslik: "One hot encoding", gorsel: { tip: "tablo", ad: "species", sutunlar: ["setosa", "versicolor", "virginica"], satirlar: [[1, 0, 0], [0, 1, 0], [0, 0, 1]] } },
      ok: "ya da" },
    not: "One hot'ta bir sütun atılmalı (kukla değişken tuzağı)." },

  { tur: "uygulama", baslik: "LabelEncoder",
    gorsel: { tip: "resim", yol: G + "22-u5.png" },
    adimlar: ["iris'i URL'den oku, 0, 50, 100 numaralı satırları ve benzersiz türleri yazdır.", "species sütununu LabelEncoder ile kodla, aynı satırları ve benzersiz değerleri tekrar yazdır."],
    kitap: "s. 114–115 · 56. Örnek" },

  { tur: "uygulama", baslik: "OneHotEncoder",
    gorsel: { tip: "resim", yol: G + "22-u6.png" },
    adimlar: ["species sütununu reshape(-1,1) ile tek sütunlu diziye çevir.", "OneHotEncoder ile dönüştür, toarray ile diziye çevir, üç sütunlu DataFrame yap.", "İlk üç özellikle birleştir (concat, axis=1)."],
    kitap: "s. 115–116 · 57. Örnek" },

  { tur: "test", sorular: [
    { soru: "📖 Kategorik verinin dönüştürülmesi ile ilgili hangileri doğrudur?<br>I. “label encoding” kullanılabilir.<br>II. “one hot encoding” kullanılabilir.<br>III. İşlem yapılmazsa bazı algoritmalar kullanılamaz.<br>IV. Kukla değişkenler ortaya çıkar.", secenekler: ["Yalnız III", "I ve III", "I, II ve III", "I, III ve IV", "I, II, III ve IV"], dogru: 4 },
    { soru: "📖 Pandas'ta eksik veriyi çıkarmak için hangi metot kullanılmalıdır?", secenekler: ["dropna", "drop_nan", "miss_values", "resize", "shape"], dogru: 0, kod: true },
    { soru: "📖 Scikit-learn'de eksik veri işlemleri için hangi modül kullanılmalıdır?", secenekler: ["DataNone", "Decoding", "Encoding", "MissingValues", "SimpleImputer"], dogru: 4 },
    { soru: "Kategorik bir sütundaki eksikleri doldurmak için en uygun strateji?", secenekler: ["mean", "median", "most_frequent", "Hiçbiri"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Pandas ile one hot: get_dummies",
    kod: `pd.get_dummies(iris['species'], drop_first=True).head()`,
    not: "drop_first=True kukla değişken tuzağını önler: setosa sütunu atılır, iki sütun da 0 ise setosa demektir." }

]};
