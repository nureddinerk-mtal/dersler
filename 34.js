// YAPZ · 34 · Destek vektör makineleri: elma–portakal  (Kitap s. 147–151)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "SVM: iki sınıf arasında en geniş payı (margin) bırakan karar sınırını bulur; sınıra en yakın örnekler destek vektörleridir. Doğrusal olmayan verilerde çekirdek (kernel, rbf) kullanılır. 8. Uygulama: elma–portakal (40 meyve, ağırlık ve boyut). Sonuç: 12 testten 1 hata, %91,66, kitapla aynı.",
    akis: ["Karar sınırı ve destek vektörleri (grafik)", "Uygulama 1: veri", "Uygulama 2: böl, SVC eğit, iki meyve tahmin et, değerlendir", "Test"],
    hatalar: ["Kitaptaki <b>apples_and_oranges.csv</b> internette artık bulunamıyor. Malzemedeki dosya kitaptaki ilk 5 satırla başlayan, aynı yapıda (40 satır, Weight/Size/Class) <b>sınıf için üretilmiş</b> bir veri seti.", "Kitap SVC(kernel='rbf') kullanıyor; o zamanki varsayılan gamma 'auto' idi. Yeni sürümde varsayılan 'scale' ve bu veride hepsini portakal sanıyor (%42). Kitaptaki sonucu almak için <code>SVC(kernel='rbf', gamma='auto')</code>. Ya da ölçekleme yapın.", "Kitapta 7. adım kodu 4. adımı tekrar ediyor ve basılan rapor karar ağacının raporu (155/120 örnek). Doğru rapor 12 örnekli.", "Yeni sürümde predict'e liste verince “feature names” uyarısı çıkar; DataFrame ile vermek temiz."],
    sorular: [["Kernel ne?", "Veriyi daha yüksek boyuta taşıyıp düz bir sınırla ayrılabilir hâle getiren hile. rbf en yaygını."], ["SVM regresyon yapar mı?", "Evet: SVR (destek vektör regresyonu)."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 34-u1 · 1. adım
data = pd.read_csv('apples_and_oranges.csv')
data.head()

# 34-u1 · 2. adım
data.columns = ['agirlik','boyut','sinif']
data.head()

# 34-u1 · 3. adım
data.info()

# 34-u2 · 4. adım
X = data.drop(['sinif'], axis='columns')
y = data['sinif']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1)
print('Eğitim veri setindeki veri sayısı:', len(X_train))
print('Test veri setindeki veri sayısı:', len(X_test))

# 34-u2 · 5. adım
from sklearn.svm import SVC
model = SVC(kernel='rbf', gamma='auto')
model.fit(X_train, y_train)

# 34-u2 · 6. adım
y_pred = model.predict(X_test)
print(model.predict(pd.DataFrame([[74, 5.3]], columns=X.columns)))
print(model.predict(pd.DataFrame([[62, 3.0]], columns=X.columns)))

# 34-u2 · 7. adım
print(confusion_matrix(y_test, y_pred))
print(classification_report(y_test, y_pred))`,
    not: "Ölçme sorusu 35 (cevap D: K-NN) bu konuya yerleştirildi." },

  { tur: "bilgi", baslik: "Destek vektörleri",
    gorsel: { tip: "resim", yol: G + "34-svm.png" },
    metin: "SVM iki sınıfı ayıran ve iki tarafa da <b>en uzak</b> olan sınırı arar. Sınıra en yakın örnekler (kırmızı halkalı) sınırı belirler: destek vektörleri." },

  { tur: "uygulama", baslik: "8. Uygulama · Veri",
    metin: "Kitaptaki dosyanın aynı yapıdaki bir benzeri malzemede.",
    gorsel: { tip: "resim", yol: G + "34-u1.png" },
    adimlar: ["apples_and_oranges.csv'yi oku, ilk satırlara bak.", "Sütun adlarını agirlik, boyut, sinif yap.", "info ile eksik veri olmadığını doğrula."],
    malzeme: ["apples_and_oranges.csv"],
    kitap: "s. 148–149 · 8. Uygulama 1–3. adım" },

  { tur: "uygulama", baslik: "8. Uygulama · Model",
    metin: "Yeni scikit-learn'de kitaptaki sonucu almak için <code>SVC(kernel='rbf', gamma='auto')</code> yaz.",
    gorsel: { tip: "resim", yol: G + "34-u2.png" },
    adimlar: ["X = agirlik ve boyut, y = sinif; %30 test, random_state=1. Eğitim ve test sayılarını yazdır.", "SVC modelini oluştur ve eğit.", "Test seti için tahmin yap; 74 g – 5,3 cm ve 62 g – 3,0 cm meyveleri tahmin et.", "Hata matrisi ve sınıflandırma raporunu yazdır."],
    kitap: "s. 149–151 · 4–7. adım" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi sadece sınıflandırma için kullanılan bir algoritmadır? <small>(kitap anahtarına göre)</small>", secenekler: ["Destek vektör makineleri", "Doğrusal regresyon", "Karar ağaçları", "K-NN", "Rastgele orman"], dogru: 3 },
    { soru: "Karar sınırına en yakın örneklere ne denir?", secenekler: ["Küme merkezi", "Destek vektörleri", "Yaprak", "Komşu"], dogru: 1 },
    { soru: "Doğrusal ayrılamayan veride SVM ne kullanır?", secenekler: ["Çekirdek (kernel)", "Eşikleme", "Ortanca", "Kukla değişken"], dogru: 0 },
    { soru: "12 test örneğinden 11'i doğru. Doğruluk yaklaşık kaçtır?", secenekler: ["%11", "%85", "%91,66", "%99"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Karar sınırını çiz",
    kod: `import numpy as np
xx, yy = np.meshgrid(np.linspace(60, 80, 200), np.linspace(3, 7, 200))
izgara = pd.DataFrame({'agirlik': xx.ravel(), 'boyut': yy.ravel()})
z = (model.predict(izgara) == 'apple').reshape(xx.shape)
plt.contourf(xx, yy, z, alpha=0.3)
renk = data.sinif.map({'apple': 'red', 'orange': 'orange'})
plt.scatter(data.agirlik, data.boyut, c=renk)
plt.xlabel('Ağırlık'); plt.ylabel('Boyut'); plt.show()`,
    not: "Arka plan rengi modelin o noktaya ne diyeceğini gösterir." }

]};
