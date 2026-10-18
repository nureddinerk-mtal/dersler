// YAPZ · 35 · Rastgele orman: Melbourne ev fiyatları  (Kitap s. 151–155)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Topluluk öğrenmesi: zayıf öğrenicileri bir heyet gibi birleştirip güçlü karar verici elde etmek. Üç tür: torbalama (bagging, paralel, oylama/ortalama: Rastgele Orman), yükseltme (boosting, sıralı, hatalara ağırlık: AdaBoost, XGBoost), yığma (stacking, üst öğrenici). 9. Uygulama: Melbourne ev fiyatları (13580 satır, 21 sütun) ile RandomForestRegressor, R² 0,70. Birim sonu: gözetimli öğrenme kontrol listesiyle proje ödevi.",
    akis: ["Topluluk öğrenmesi kartları", "Torbalama → rastgele orman şeması", "9. Uygulama adımları", "Meraklısına: aynı adımlar Boston verisiyle (malzemede)", "Kontrol listeli ödev", "Test"],
    hatalar: ["<b>melb_data.csv</b> (Kaggle, “Melbourne Housing Snapshot”) 13580 satır; dosyayı Kaggle'dan indirmek gerekiyor (ücretsiz üyelik). Okul ağında Kaggle açılmıyorsa Meraklısına slaytındaki Boston örneği aynı adımlarla çalışır (malzemede).", "Kitapta <code>mean_absolute_error</code> kullanılıp “Ortalama Kare Hata” diye yazdırılıyor; bu MAE. Ayrıca mean_absolute_error içe aktarılmamış: <code>from sklearn.metrics import mean_absolute_error</code> eklenmeli.", "dropna sonrası satır sayısı çok düşer (~6200); sorun değil.", "RandomForestRegressor'a random_state verilmezse R² her çalıştırmada biraz değişir."],
    sorular: [["Neden “rastgele”?", "Her ağaç verinin rastgele bir alt kümesiyle ve rastgele seçilmiş özelliklerle eğitilir; ağaçlar birbirinden farklı olur."], ["Rastgele orman karar ağacından neden iyi?", "Tek ağaç ezberleyebilir; yüz ağacın ortalaması hataları dengeler (aşırı öğrenmeyi azaltır)."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 35 · 9. Uygulama (melb_data.csv Kaggle'dan indirilmeli)
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score
melb_df = pd.read_csv('melb_data.csv')
melb_df.info()
melb_df = melb_df.dropna(axis=0)
y = melb_df.Price
ozellikler = ['Rooms', 'Bathroom', 'Landsize', 'BuildingArea', 'YearBuilt', 'Lattitude', 'Longtitude']
X = melb_df[ozellikler]
train_X, val_X, train_y, val_y = train_test_split(X, y, test_size=0.2, random_state=0)
forest_model = RandomForestRegressor(random_state=0)
forest_model.fit(train_X, train_y)
melb_preds = forest_model.predict(val_X)
print('Ortalama Mutlak Hata: %.2f' % mean_absolute_error(val_y, melb_preds))
print('R Kare: %.2f' % r2_score(val_y, melb_preds))`,
    not: "Ölçme sorusu 36 (cevap E: rastgele orman) bu konudan." },

  { tur: "bilgi", baslik: "Topluluk öğrenmesi",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🎒 Torbalama (bagging)", alt: "Farklı alt kümelerle paralel modeller; oylama / ortalama. Rastgele Orman" },
      { ust: "🚀 Yükseltme (boosting)", alt: "Sıralı modeller; her biri öncekinin hatalarına odaklanır. AdaBoost, XGBoost" },
      { ust: "🧱 Yığma (stacking)", alt: "Modellerin tahminleri bir üst öğreniciye girdi olur" }
    ]},
    not: "Kendi başına zayıf öğrenciler bir araya gelince güçlü bir heyet olur." },

  { tur: "bilgi", baslik: "Rastgele orman",
    gorsel: { tip: "akis", adimlar: [
      { simge: "📦", yazi: "Eğitim verisi" },
      { simge: "🎲", yazi: "Rastgele alt kümeler", alt: "satır + özellik" },
      { simge: "🌳🌳🌳", yazi: "Çok sayıda karar ağacı" },
      { simge: "🗳️", yazi: "Oylama / ortalama", alt: "sınıf / sayı" }
    ]}},

  { tur: "uygulama", baslik: "9. Uygulama · Melbourne",
    metin: "<b>melb_data.csv</b> dosyasını Kaggle'dan indir (“Melbourne Housing Snapshot”). Görseldeki çıktılar kitaptan alındı.",
    gorsel: { tip: "resim", yol: G + "35-u1.png" },
    adimlar: ["Kütüphaneleri içe aktar (mean_absolute_error ve r2_score dahil).", "Veri setini oku, ilk satırlara bak.", "info: 21 sütun, bazılarında eksik veri.", "Eksik satırları çıkar (dropna). y = Price; X = Rooms, Bathroom, Landsize, BuildingArea, YearBuilt, Lattitude, Longtitude. %20 test, random_state=0.", "RandomForestRegressor oluştur, eğit, test için tahmin yap.", "Ortalama mutlak hata ve R²'yi yazdır."],
    kitap: "s. 151–153 · 9. Uygulama" },

  { tur: "odev", baslik: "Gözetimli öğrenme projesi",
    metin: "Bir örnek veri seti seç (iris, tips, diabetes, Boston…) ve baştan sona bir gözetimli öğrenme uygulaması yap. Kontrol listesi:",
    gorsel: { tip: "tablo", ad: "Kontrol listesi", sutunlar: ["Ölçüt", "Evet", "Hayır"], satirlar: [
      ["1. Uygun kütüphaneleri dosyaya dahil etti.", "☐", "☐"], ["2. Veri setini yükledi.", "☐", "☐"], ["3. Veri seti hakkında bilgi almak için gerekli kodu yazdı.", "☐", "☐"],
      ["4. Özellikleri ve çıktıyı ayırdı.", "☐", "☐"], ["5. Veri setini eğitim ve test olarak böldü.", "☐", "☐"], ["6. Probleme uygun modeli seçip oluşturdu.", "☐", "☐"], ["7. Uygun metriklerle sonucu değerlendirdi.", "☐", "☐"]] },
    kitap: "s. 154 · Kontrol listesi" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi bir topluluk öğrenmesi modelidir?", secenekler: ["Apriori", "K-Means", "Naive Bayes", "Polinomsal regresyon", "Rastgele orman"], dogru: 4 },
    { soru: "Rastgele orman hangi topluluk yöntemine örnektir?", secenekler: ["Torbalama", "Yükseltme", "Yığma", "Kümeleme"], dogru: 0 },
    { soru: "Rastgele orman regresyonda ağaçların tahminlerini nasıl birleştirir?", secenekler: ["Oylama", "Ortalama", "En büyüğü seçer", "İlk ağacı kullanır"], dogru: 1 },
    { soru: "Rastgele ormanın tek karar ağacına göre en önemli avantajı?", secenekler: ["Daha hızlı eğitilmesi", "Aşırı öğrenmeyi azaltması", "Ölçekleme gerektirmesi", "Eksik veriyi kendisi bulması"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Aynı adımlar Boston verisiyle",
    gorsel: { tip: "resim", yol: G + "35-m1.png" },
    kod: `from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score
ev = pd.read_csv('BostonHousing.csv')
X = ev[['rm','lstat','crim','dis','ptratio']]; y = ev.medv
train_X, val_X, train_y, val_y = train_test_split(X, y, test_size=0.2, random_state=0)
forest_model = RandomForestRegressor(random_state=0).fit(train_X, train_y)
tahmin = forest_model.predict(val_X)
print('Ortalama Mutlak Hata: %.2f' % mean_absolute_error(val_y, tahmin))
print('R Kare: %.2f' % r2_score(val_y, tahmin))`,
    malzeme: ["BostonHousing.csv"],
    not: "rm: oda sayısı, lstat: düşük gelirli nüfus oranı, crim: suç oranı, dis: iş merkezlerine uzaklık, ptratio: öğrenci/öğretmen oranı. medv: fiyat (bin $)." }

]};
