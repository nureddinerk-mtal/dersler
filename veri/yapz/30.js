// YAPZ · 30 · Çoklu doğrusal regresyon: konut fiyatı  (Kitap s. 132–134)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "3. Uygulama: 6 satırlık konut veri seti (alan, oda sayısı, bina yaşı → fiyat). Eksik oda sayısı ortanca (4) ile dolduruluyor, üç özellikle model eğitiliyor. Sonuçlar kitapla aynı: sabit 221323, katsayılar 112,06 / 23388,88 / −3231,72, R² 0,96, [3000, 3, 40] için 498408.",
    akis: ["Veri setini göster, eksik değeri bul", "Uygulama 1: yükle, Türkçeleştir, info", "Uygulama 2: ortanca ile doldur, eğit, katsayılar", "Formül ve katsayıları yorumla (yaş eksi!)", "Uygulama 3: değerlendir, yeni tahmin", "Test"],
    hatalar: ["Kitaptaki yol <code>'../content/sample_data/homeprices.csv'</code>. Colab'da dosyayı sol paneldeki 📁'ye yükleyip <code>pd.read_csv('homeprices.csv')</code> yazmak daha kolay.", "reg.fit'e özellikleri tek köşeli parantezle vermek: <code>data[['alan','oda_sayisi','yasi']]</code> çift köşeli olmalı.", "6 satırla eğitip aynı 6 satırla test etmek aslında kötü bir alışkanlık; kitap veri az olduğu için böyle yapmış. Bunu öğrencilere söyle."],
    sorular: [["Yaş katsayısı neden eksi?", "Bina yaşlandıkça fiyat düşüyor: her yıl yaklaşık 3232 birim."], ["MSE neden bu kadar büyük?", "Fiyatlar yüz binlerle ölçülüyor, karesi alınınca sayı dev olur. Karekökü (RMSE) ≈ 21126 daha anlamlı."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 30-u1 · 2. adım
data = pd.read_csv('homeprices.csv')
data.head()

# 30-u1 · 3. adım
data.rename(columns={'area':'alan','bedrooms':'oda_sayisi','age':'yasi','price':'fiyati'}, inplace=True)
data.head()

# 30-u1 · 4. adım
data.info()

# 30-u2 · 5. adım
median_oda_sayisi = data['oda_sayisi'].median()
data.oda_sayisi = data.oda_sayisi.fillna(median_oda_sayisi)
data

# 30-u2 · 6. adım
reg = linear_model.LinearRegression()
reg.fit(data[['alan','oda_sayisi','yasi']], data.fiyati)

# 30-u2 · 7. adım
print('Sabit (bias): \\n', reg.intercept_)
print('Katsayılar: \\n', reg.coef_)

# 30-u3 · 8–9. adım
reg_pred = reg.predict(data[['alan','oda_sayisi','yasi']])
print('Ortalama Kare Hata: %.2f' % mean_squared_error(data.fiyati, reg_pred))
print('R Kare: %.2f' % r2_score(data.fiyati, reg_pred))

# 30-u3 · 10. adım
reg.predict([[3000,3,40]])`,
    not: "Veri seti Kaggle'daki homeprices.csv; malzemede de var." },

  { tur: "bilgi", baslik: "Konut veri seti",
    gorsel: { tip: "tablo", ad: "homeprices.csv", sutunlar: ["area", "bedrooms", "age", "price"], satirlar: [[2600, 3, 20, 550000], [3000, 4, 15, 565000], [3200, "NaN", 18, 610000], [3600, 3, 30, 595000], [4000, 5, 8, 760000], [4100, 6, 8, 810000]] },
    not: "Üç bağımsız değişken (alan, oda sayısı, yaş), bir bağımlı değişken (fiyat). Bir oda sayısı eksik." },

  { tur: "uygulama", baslik: "Veriyi tanı",
    gorsel: { tip: "resim", yol: G + "30-u1.png" },
    adimlar: ["homeprices.csv'yi oku, ilk satırlara bak.", "Sütun adlarını alan, oda_sayisi, yasi, fiyati yap.", "info ile eksik veriyi bul."],
    malzeme: ["homeprices.csv"],
    kitap: "s. 132–133 · 3. Uygulama 1–4. adım" },

  { tur: "uygulama", baslik: "Doldur ve eğit",
    gorsel: { tip: "resim", yol: G + "30-u2.png" },
    adimlar: ["Oda sayısının ortancasını bul, eksik değere ata.", "Üç özellik ve fiyat ile LinearRegression eğit.", "Sabiti ve katsayıları yazdır."],
    kitap: "s. 133 · 5–7. adım" },

  { tur: "bilgi", baslik: "Modelin formülü",
    gorsel: { tip: "parcala", parcalar: [ { yazi: "221323", etiket: "sabit" }, { yazi: "+ 112,06·alan", etiket: "her m² için" }, { yazi: "+ 23388,88·oda", etiket: "her oda için" }, { yazi: "− 3231,72·yaş", etiket: "her yıl için", renk: "#eb5757" } ] } },

  { tur: "uygulama", baslik: "Değerlendir ve tahmin et",
    gorsel: { tip: "resim", yol: G + "30-u3.png" },
    adimlar: ["Veri setindeki evler için tahmin yap; MSE ve R²'yi yazdır.", "3000 m², 3 odalı, 40 yıllık bir evin fiyatını tahmin et."],
    kitap: "s. 134 · 8–10. adım" },

  { tur: "test", sorular: [
    { soru: "Bu modelde kaç bağımsız değişken var?", secenekler: ["1", "2", "3", "4"], dogru: 2 },
    { soru: "Eksik oda sayısı hangi yöntemle dolduruldu?", secenekler: ["Ortalama", "Ortanca", "Sabit 0", "Satır silindi"], dogru: 1 },
    { soru: "Diğer her şey aynıyken ev 10 yıl daha yaşlıysa fiyat yaklaşık ne olur?", secenekler: ["32317 artar", "32317 azalır", "Değişmez", "112 azalır"], dogru: 1 },
    { soru: "Tek bir ev için tahmin yaparken predict'e veri nasıl verilir?", secenekler: ["reg.predict(3000,3,40)", "reg.predict([3000,3,40])", "reg.predict([[3000,3,40]])", "reg.predict('3000,3,40')"], dogru: 2, kod: true }
  ]},

  { tur: "merak", baslik: "Elle hesapla",
    kod: `b = reg.intercept_
a = reg.coef_
print(b + a[0]*3000 + a[1]*3 + a[2]*40)   # reg.predict ile aynı`,
    not: "Model sihir değil: öğrendiği sabit ve katsayılarla bir toplama yapıyor." }

]};
