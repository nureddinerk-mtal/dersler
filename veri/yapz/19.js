// YAPZ · 19 · Seaborn: kurulum ve ilk grafikler  (Kitap s. 86–92)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Seaborn: Matplotlib tabanlı, Pandas ile bütünleşik, daha güzel ve bilgilendirici grafikler. Hazır veri setleri var; birim boyunca tips (restoran bahşişleri) kullanılıyor. Kalıp: sns.grafik(data=df, x='sütun', y='sütun', hue='kategori').",
    akis: ["Seaborn nedir, kurulum", "Uygulama 1: veri setleri listesi, tips yükle, sütunları Türkçeleştir", "Uygulama 2: info ve describe", "Uygulama 3: scatterplot, hue/palette/set_style", "Test"],
    hatalar: ["Kitapta rename içinde <code>'gum':'sakız'</code> var; tips veri setinde böyle bir sütun yok, sütun <b>smoker</b> (sigara içen). Doğrusu <code>'smoker':'sigara'</code>. Yoksa sütun İngilizce kalır.", "Kitaptaki <code>sns.set(rc={'figure.figsize':(11.7,8.27)})</code> grafikleri çok büyütür; Colab'da gerek yok.", "x ve y'ye sütun adını tırnaksız yazmak."],
    sorular: [["hue ne demek?", "Renk tonu. Noktaları bir kategoriye (cinsiyet gibi) göre farklı renklere boyar."], ["Seaborn mu Matplotlib mi?", "Seaborn arka planda Matplotlib kullanır. Başlık/etiket için yine plt.title, plt.xlabel yazılır."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 19-u1 · 1. adım
import seaborn as sns
import matplotlib.pyplot as plt
print(sns.get_dataset_names())

# 19-u1 · 2. adım
bahsis_veri = sns.load_dataset('tips')
print(type(bahsis_veri))
bahsis_veri.head()

# 19-u1 · 3. adım
bahsis_veri.rename(columns={'total_bill':'fatura_toplami','tip':'bahsis','sex':'cinsiyet','smoker':'sigara','day':'gun','time':'zaman','size':'kisi_sayisi'}, inplace=True)
bahsis_veri.head()

# 19-u2 · 4. adım
bahsis_veri.info()

# 19-u2 · 5. adım
bahsis_veri.describe()

# 19-u3 · 6. adım
sns.scatterplot(data=bahsis_veri, x='fatura_toplami', y='bahsis')
plt.show()

# 19-u3 · 7. adım
sns.set_style('whitegrid')
plt.figure(figsize=(6,3.8))
sns.scatterplot(data=bahsis_veri, x='fatura_toplami', y='bahsis', hue='cinsiyet', palette='Set1')
plt.ylabel('Bahşiş'); plt.xlabel('Toplam Fatura')
plt.title('Cinsiyete Göre Bahşiş Fatura Toplamı Saçılım Grafiği')
plt.show()`,
    not: "describe çıktısı kitapta karışık basılmış (min/max satırlarında 'category' yazıyor). Öğrencilerin ekranındaki doğru." },

  { tur: "bilgi", baslik: "Seaborn",
    metin: "Matplotlib tabanlı, gelişmiş görselleştirme kütüphanesi. Pandas veri çerçeveleriyle doğrudan çalışır.",
    kod: `!pip install seaborn        # Colab ve Anaconda'da hazır
import seaborn as sns
import matplotlib.pyplot as plt`,
    gorsel: { tip: "tablo", ad: "tips · bahşiş veri seti", sutunlar: ["Sütun", "Türkçe", "Anlamı"], satirlar: [
      ["total_bill", "fatura_toplami", "Fatura miktarı"], ["tip", "bahsis", "Bahşiş"], ["sex", "cinsiyet", "Female / Male"], ["smoker", "sigara", "Yes / No"],
      ["day", "gun", "Thur, Fri, Sat, Sun"], ["time", "zaman", "Lunch / Dinner"], ["size", "kisi_sayisi", "Masadaki kişi sayısı"]] } },

  { tur: "uygulama", baslik: "Veri setini tanı",
    metin: "Kitapta <code>'gum':'sakız'</code> yazıyor ama tips'te öyle bir sütun yok. <code>'smoker':'sigara'</code> kullan.",
    gorsel: { tip: "resim", yol: G + "19-u1.png" },
    adimlar: ["Seaborn'daki hazır veri setlerinin adlarını yazdır.", "tips veri setini bahsis_veri adıyla yükle; türünü ve ilk 5 satırını göster.", "Sütun adlarını Türkçeye çevir (inplace=True)."],
    kitap: "s. 86–87 · 14–17. Örnek" },

  { tur: "uygulama", baslik: "Veri hakkında bilgi",
    gorsel: { tip: "resim", yol: G + "19-u2.png" },
    adimlar: ["info ile veri tiplerine ve eksik veriye bak.", "describe ile sayısal sütunların özet istatistiklerini göster."],
    kitap: "s. 88 · 18–19. Örnek" },

  { tur: "uygulama", baslik: "İlk saçılım grafikleri",
    gorsel: { tip: "resim", yol: G + "19-u3.png" },
    adimlar: ["Fatura toplamı (x) – bahşiş (y) saçılım grafiği.", "whitegrid stili, cinsiyete göre renk (hue), Set1 paleti, Türkçe eksen adları ve başlık."],
    kitap: "s. 89–90 · 20–21. Örnek" },

  { tur: "bilgi", baslik: "Sık kullanılan parametreler",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "data", alt: "Veri çerçevesi" }, { ust: "x, y", alt: "Sütun adları" },
      { ust: "hue", alt: "Kategoriye göre renk" }, { ust: "palette", alt: "Renk paleti: Set1, viridis, pastel…" },
      { ust: "set_style", alt: "darkgrid, whitegrid, dark, white, ticks" }, { ust: "color", alt: "Tek renk" }
    ]}},

  { tur: "test", sorular: [
    { soru: "📖 Hangisi grafik çizmek için kullanılan kütüphanedir?", secenekler: ["Django", "matplotlib", "PyQt5", "Requests", "Scrapy"], dogru: 1 },
    { soru: "📖 Pandas ile ilgili hangisi doğrudur?", secenekler: ["“head” ile veri setinin başındaki satırlar listelenir.", "Bir seri hakkında bilgi almak için “size” kullanılır.", "“shape” bir serinin boyutunu görmek için kullanılır.", "“ndim” bir serinin şeklini görmek için kullanılır.", "“long” serinin uzunluğunu görmek için kullanılır."], dogru: 0 },
    { soru: "📖 Bir veri setinde eksik veri durumunu görmek için hangisi kullanılmalıdır?", secenekler: ["count", "describe", "info", "shape", "unique"], dogru: 2 },
    { soru: "📖 Seaborn ile ilgili hangisi doğrudur?", secenekler: ["“hue” grafiğin büyüklüğünü belirler.", "“height” grafiği kategorik olarak gruplar.", "“palette” sütun adlarını gösterir.", "“kind” grafik türünü belirler.", "“label” renk paletini belirler."], dogru: 3 }
  ]},

  { tur: "merak", baslik: "Regresyon çizgisi ekle",
    kod: `sns.regplot(x='fatura_toplami', y='bahsis', data=bahsis_veri,
            marker='+', scatter_kws={'alpha':0.4})
plt.show()`,
    not: "Kitapta yorum satırı olarak duruyor. Noktaların arasından geçen en uygun doğruyu çizer; 29. konuda bu doğruyu kendimiz bulacağız." }

]};
