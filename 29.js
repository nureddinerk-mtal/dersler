// YAPZ · 29 · Basit doğrusal regresyon: diyabet  (Kitap s. 128–132)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "2. Uygulama: scikit-learn'ün diyabet veri seti (442 hasta, 10 özellik, hedef: bir yıl sonraki hastalık ilerleme değeri). Tek özellik (3. sütun, BMI) seçilip basit doğrusal regresyon kuruluyor. Son 20 kayıt test. Sonuçlar kitapla birebir aynı çıkıyor: sabit 152,92, katsayı 938,24, MSE 2548,07, R² 0,47.",
    akis: ["Veri setini tanıt (özellikler ölçeklenmiş, o yüzden küçük sayılar)", "Uygulama 1: yükle, bilgi, tek özellik seç, böl, saçılım", "Uygulama 2: model, tahmin, katsayılar", "Formülü yaz: diyabet = 152,92 + 938,24 · özellik", "Uygulama 3: regresyon doğrusu, MSE ve R²", "Test"],
    hatalar: ["<code>diabetes_X[:, np.newaxis, 2]</code> satırını anlamamak: 3. sütunu (indeks 2) alıp 2 boyutlu yapar; scikit-learn X'in 2 boyutlu olmasını ister.", "[:-20] ve [-20:] dilimlerini karıştırmak (6. konu).", "Kitapta “422 kayıt eğitim” yazıyor: 442 − 20 = 422, doğru."],
    sorular: [["Özellik değerleri neden -0.1 ile 0.15 arasında?", "Bu veri seti hazır gelirken ölçeklenmiş (standartlaştırılmış) olarak gelir."], ["R² 0,47 iyi mi?", "Orta. Tek özellikle hastalığın yarısını açıklayabiliyoruz. 10 özelliğin hepsini kullanmak daha iyi sonuç verir (Meraklısına)."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 29-u1 · 1–2. adım
import matplotlib.pyplot as plt, numpy as np, pandas as pd
from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error, r2_score
diabetes_X, diabetes_y = datasets.load_diabetes(return_X_y=True)
pd.DataFrame(data=diabetes_X).info()
diabetes_X = diabetes_X[:, np.newaxis, 2]

# 29-u1 · 3–4. adım
diabetes_X_train = diabetes_X[:-20]; diabetes_X_test = diabetes_X[-20:]
diabetes_y_train = diabetes_y[:-20]; diabetes_y_test = diabetes_y[-20:]
plt.scatter(diabetes_X, diabetes_y)
plt.title('Diyabet Grafik'); plt.xlabel('Özellik-1'); plt.ylabel('Diyabet değeri')
plt.grid(True); plt.show()

# 29-u2 · 5. adım
regr = linear_model.LinearRegression()
regr.fit(diabetes_X_train, diabetes_y_train)

# 29-u2 · 6. adım
diabetes_y_pred = regr.predict(diabetes_X_test)
diabetes_y_pred

# 29-u2 · 7. adım
print('Sabit (bias): \\n', regr.intercept_)
print('Katsayı: \\n', regr.coef_)

# 29-u3 · 8. adım
plt.scatter(diabetes_X_test, diabetes_y_test, color='black')
plt.plot(diabetes_X_test, diabetes_y_pred, color='blue', linewidth=3)
plt.xticks(()); plt.yticks(())
plt.show()

# 29-u3 · 9. adım
print('Ortalama Kare Hata: %.2f' % mean_squared_error(diabetes_y_test, diabetes_y_pred))
print('R Kare: %.2f' % r2_score(diabetes_y_test, diabetes_y_pred))`,
    not: "Kitapta saçılım grafiğinde tüm veri (diabetes_X) çiziliyor, uygulamada da öyle." },

  { tur: "bilgi", baslik: "Diyabet veri seti",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "442 hasta", alt: "satır" }, { ust: "10 özellik", alt: "yaş, cinsiyet, BMI, tansiyon, 6 kan değeri" },
      { ust: "Hedef", alt: "Bir yıl sonraki hastalık ilerleme değeri" }, { ust: "Seçilen özellik", alt: "3. sütun (indeks 2): BMI" }
    ]},
    kod: `from sklearn import datasets
diabetes_X, diabetes_y = datasets.load_diabetes(return_X_y=True)` },

  { tur: "uygulama", baslik: "Veriyi hazırla ve gör",
    gorsel: { tip: "resim", yol: G + "29-u1.png" },
    adimlar: ["Kütüphaneleri içe aktar. Veri setini X ve y olarak yükle, DataFrame'e çevirip info'ya bak. Sadece 3. sütunu seç (np.newaxis).", "Son 20 kaydı test, gerisini eğitim olarak ayır. Özellik – diyabet saçılım grafiğini çiz."],
    kitap: "s. 128–130 · 2. Uygulama 1–4. adım" },

  { tur: "uygulama", baslik: "Modeli eğit, tahmin et",
    gorsel: { tip: "resim", yol: G + "29-u2.png" },
    adimlar: ["LinearRegression nesnesi oluştur ve eğitim setiyle eğit.", "Test seti için tahminleri yap.", "Sabiti (intercept_) ve katsayıyı (coef_) yazdır."],
    kitap: "s. 130 · 5–7. adım" },

  { tur: "bilgi", baslik: "Modelin formülü",
    gorsel: { tip: "parcala", parcalar: [ { yazi: "diyabet", etiket: "y" }, { yazi: "=", etiket: "" }, { yazi: "152,92", etiket: "β₀ sabit" }, { yazi: "+", etiket: "" }, { yazi: "938,24", etiket: "β₁ katsayı" }, { yazi: "· özellik", etiket: "X" } ] },
    not: "Özellik 0,05 olan bir hasta için: 152,92 + 938,24 × 0,05 ≈ 199,8" },

  { tur: "uygulama", baslik: "Doğruyu çiz, başarıyı ölç",
    gorsel: { tip: "resim", yol: G + "29-u3.png" },
    adimlar: ["Test setinin gerçek değerlerini siyah noktalar, tahminleri mavi doğru olarak çiz (eksen değerleri gizli).", "Ortalama kare hata ve R² değerini 2 basamakla yazdır."],
    kitap: "s. 131 · 8–9. adım" },

  { tur: "test", sorular: [
    { soru: "Modelin sabitini veren özellik hangisi?", secenekler: ["regr.coef_", "regr.intercept_", "regr.predict", "regr.score"], dogru: 1, kod: true },
    { soru: "diabetes_X[:-20] ne seçer?", secenekler: ["İlk 20 kayıt", "Son 20 kayıt", "Son 20 hariç hepsi", "20. kayıt"], dogru: 2, kod: true },
    { soru: "Katsayı pozitif (938) ise özellik arttıkça diyabet değeri…", secenekler: ["azalır", "artar", "değişmez", "önce artar sonra azalır"], dogru: 1 },
    { soru: "R² = 0,47 ne anlama gelir?", secenekler: ["Model mükemmel", "Model değişimin yaklaşık yarısını açıklıyor", "Model hiç işe yaramıyor", "Hata %47"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "10 özelliğin hepsiyle",
    kod: `X, y = datasets.load_diabetes(return_X_y=True)
model = linear_model.LinearRegression().fit(X[:-20], y[:-20])
print('R² (10 özellik): %.2f' % r2_score(y[-20:], model.predict(X[-20:])))`,
    not: "Tek özellikle 0,47 idi. Bu bir çoklu doğrusal regresyon; 30. konunun konusu." }

]};
