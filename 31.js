// YAPZ · 31 · Polinom ve lojistik regresyon  (Kitap s. 134–141)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "İki uygulama. 4. Uygulama: pozisyon–maaş (10 satır). Doğrusal, 2. ve 3. derece polinom modelleri karşılaştırılıyor: R² 0,67 / 0,92 / 0,98, 6,5 seviye için tahminler kitapla aynı. 5. Uygulama: Pima diyabet veri seti (768 kişi) ile lojistik regresyon: doğruluk %77,92, hata matrisi [[141 16] [35 39]] kitapla aynı.",
    akis: ["Polinom fikri: X, X², X³ sütunları üret (PolynomialFeatures)", "4. Uygulama 1: veri", "4. Uygulama 2: üç model, grafik, R², 6,5 tahmini", "Lojistik regresyon hatırlatma", "5. Uygulama 1: Pima veri seti", "5. Uygulama 2: eğit, hata matrisi, rapor, doğruluk", "Test"],
    hatalar: ["Kitapta son print'te “İkinci Derece Pol. Tahmini” yazıyor ama üçüncü dereceyi basıyor.", "Yeni scikit-learn'de LogisticRegression yakınsama uyarısı verebilir: <code>LogisticRegression(max_iter=1000)</code>.", "Kitap y'yi <code>diyabet_df[['sonuc']]</code> (DataFrame) veriyor, uyarı çıkar. <code>diyabet_df['sonuc']</code> (Seri) daha doğru.", "Kitaptaki <code>diyabet_df = diyabet_df.values</code> satırı modele bir şey katmıyor, atlanabilir.", "Kitaptaki <code>plt.style.use('fivethirtyeight')</code> sonraki tüm grafikleri etkiler."],
    sorular: [["Derece artınca hep daha mı iyi?", "Eğitim verisinde evet, ama yeni veride aşırı öğrenme olur. 10 noktaya 9. derece polinom her noktadan geçer ama saçma tahminler verir."], ["Recall 0,53 ne demek?", "Gerçek diyabetlilerin sadece yarısını yakalıyor. Sağlık için düşük; duyarlılık önemli (16. konu)."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 31-u1 · 2. adım
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
df = pd.read_csv('Position_Salaries.csv')
print(df)

# 31-u1 · 3. adım
df.columns = ['pozisyon','pozisyon_seviyesi','maas']
df.head()

# 31-u2 · 9. adım
X = df.iloc[:,1:2].values; y = df.iloc[:,2].values
lin_reg = LinearRegression().fit(X, y)
poly_reg2 = PolynomialFeatures(degree=2); lin_reg_2 = LinearRegression().fit(poly_reg2.fit_transform(X), y)
poly_reg3 = PolynomialFeatures(degree=3); lin_reg_3 = LinearRegression().fit(poly_reg3.fit_transform(X), y)
y_tahmin_lineer = lin_reg.predict(X)
y_tahmin_poly2 = lin_reg_2.predict(poly_reg2.fit_transform(X))
y_tahmin_poly3 = lin_reg_3.predict(poly_reg3.fit_transform(X))
with plt.style.context('fivethirtyeight'):
    plt.figure(figsize=(6,3.8))
    plt.scatter(X, y, color='red')
    plt.plot(X, y_tahmin_lineer, color='orange', label='Doğrusal')
    plt.plot(X, y_tahmin_poly2, color='blue', label='2. derece')
    plt.plot(X, y_tahmin_poly3, color='green', label='3. derece')
    plt.legend(); plt.xlabel('Pozisyon seviyesi'); plt.ylabel('Maaş')
    plt.show()

# 31-u2 · 10. adım
from sklearn.metrics import r2_score
print('Doğrusal Regresyon R Kare Değeri: %.2f' % r2_score(y, y_tahmin_lineer))
print('İkinci derece polinomsal regresyon R kare değeri: %.2f' % r2_score(y, y_tahmin_poly2))
print('Üçüncü derece polinomsal regresyon R Kare değeri: %.2f' % r2_score(y, y_tahmin_poly3))

# 31-u2 · 11. adım
print('Lineer Regresyon Tahmini: ', lin_reg.predict([[6.5]]))
print('İkinci Derece Pol. Tahmini: ', lin_reg_2.predict(poly_reg2.fit_transform([[6.5]])))
print('Üçüncü Derece Pol. Tahmini: ', lin_reg_3.predict(poly_reg3.fit_transform([[6.5]])))

# 31-u3 · 2. adım
diyabet_df = pd.read_csv('diabetes.csv')
diyabet_df.head()

# 31-u3 · 3. adım
diyabet_df.rename(columns={'Pregnancies':'gebelik','Glucose':'glikoz','BloodPressure':'kan_basinci','SkinThickness':'cilt_kalinligi','Insulin':'insulin','BMI':'vki','DiabetesPedigreeFunction':'diyabet_fonk','Age':'yas','Outcome':'sonuc'}, inplace=True)
diyabet_df.head()

# 31-u3 · 4. adım
diyabet_df.info()

# 31-u4 · 5–6. adım
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
X = diyabet_df[['gebelik','glikoz','kan_basinci','cilt_kalinligi','insulin','vki','diyabet_fonk','yas']]
y = diyabet_df['sonuc']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)
logistic_model = LogisticRegression(max_iter=1000)
logistic_model.fit(X_train, y_train)

# 31-u4 · 7. adım
tahminler = logistic_model.predict(X_test)
print('Hata Matrisi'); print(confusion_matrix(y_test, tahminler))
print('\\nSınıflandırma Raporu'); print(classification_report(y_test, tahminler))
print('Lojistik Regresyon model doğruluğu: {:.2f}%'.format(accuracy_score(y_test, tahminler)*100))`,
    not: "Pima veri seti malzemede diabetes.csv olarak var (Kaggle'daki ile aynı sütun adları)." },

  { tur: "bilgi", baslik: "Polinom regresyon nasıl yapılır?",
    gorsel: { tip: "akis", adimlar: [
      { simge: "X", yazi: "Seviye", alt: "1, 2, …, 10" },
      { simge: "🔧", yazi: "PolynomialFeatures(degree=3)", alt: "1, X, X², X³ sütunları" },
      { simge: "📈", yazi: "LinearRegression", alt: "yeni sütunlarla eğit" }
    ]},
    not: "Eğri aslında doğrusal regresyonla çiziliyor; sadece X'in kuvvetleri yeni özellik oluyor." },

  { tur: "uygulama", baslik: "4. Uygulama · Veri",
    gorsel: { tip: "resim", yol: G + "31-u1.png" },
    adimlar: ["Position_Salaries.csv'yi oku ve yazdır.", "Sütun adlarını pozisyon, pozisyon_seviyesi, maas yap."],
    malzeme: ["Position_Salaries.csv"],
    kitap: "s. 134–135 · 4. Uygulama 1–3. adım" },

  { tur: "uygulama", baslik: "4. Uygulama · Üç model",
    gorsel: { tip: "resim", yol: G + "31-u2.png" },
    adimlar: ["X = pozisyon_seviyesi, y = maas. Doğrusal, 2. derece ve 3. derece modelleri eğit.", "Gerçek noktaları kırmızı, modelleri turuncu / mavi / yeşil çizgiyle çiz.", "Üç modelin R² değerlerini yazdır.", "6,5 seviyesindeki bir çalışanın maaşını üç modelle tahmin et."],
    kitap: "s. 135–137 · 4–11. adım" },

  { tur: "bilgi", baslik: "Lojistik regresyon",
    gorsel: { tip: "resim", yol: G + "27-lojistik.png" },
    metin: "Sınıflandırma yapar: çıktı 0 ya da 1. Örnek: diyabet var / yok." },

  { tur: "uygulama", baslik: "5. Uygulama · Pima diyabet verisi",
    gorsel: { tip: "resim", yol: G + "31-u3.png" },
    adimlar: ["diabetes.csv'yi oku, ilk satırlara bak.", "Sütun adlarını Türkçeye çevir (gebelik, glikoz, kan_basinci, …, sonuc).", "info ile eksik veri olmadığını doğrula."],
    malzeme: ["diabetes.csv"],
    kitap: "s. 137–139 · 5. Uygulama 1–4. adım" },

  { tur: "uygulama", baslik: "5. Uygulama · Model ve değerlendirme",
    gorsel: { tip: "resim", yol: G + "31-u4.png" },
    adimlar: ["8 özelliği X, sonuc'u y yap; %70 eğitim %30 test (random_state=0). LogisticRegression(max_iter=1000) eğit.", "Test setinde tahmin yap; hata matrisi, sınıflandırma raporu ve doğruluğu yazdır."],
    kitap: "s. 139–140 · 5–7. adım" },

  { tur: "test", sorular: [
    { soru: "Hangi modelin R² değeri en yüksek çıktı?", secenekler: ["Doğrusal", "2. derece polinom", "3. derece polinom", "Hepsi eşit"], dogru: 2 },
    { soru: "Polinom özellikleri üretmek için hangi sınıf kullanılır?", secenekler: ["LinearRegression", "PolynomialFeatures", "StandardScaler", "LabelEncoder"], dogru: 1 },
    { soru: "Hata matrisi [[141 16] [35 39]] ise kaç diyabetli kişi yanlışlıkla “sağlıklı” tahmin edildi?", secenekler: ["16", "35", "39", "141"], dogru: 1 },
    { soru: "Lojistik regresyonun çıktısı nedir?", secenekler: ["Sürekli bir sayı", "Bir sınıf (0 / 1)", "Küme numarası", "Korelasyon"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Olasılığı gör",
    kod: `logistic_model.predict_proba(X_test[:5])`,
    not: "Her satırda iki sayı: sağlıklı ve diyabetli olma olasılığı. 0,5'ten büyük olan tahmin edilir: eşikleme (28. konu)." }

]};
