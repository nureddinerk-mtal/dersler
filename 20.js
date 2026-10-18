// YAPZ · 20 · Seaborn: grafik türleri, korelasyon ısı haritası  (Kitap s. 92–99)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "tips veri setiyle Seaborn grafik galerisi: relplot (style, size, col), lineplot, histogram + KDE, korelasyon ısı haritası, displot, catplot (box, violin), PairGrid. Korelasyon kavramı (-1…+1) burada ilk kez geçiyor; 28. konuda tekrar edilecek.",
    akis: ["relplot: style, size/sizes, col (Uyg 1–2)", "lineplot, histogram, ısı haritası (Uyg 3–4)", "Korelasyon kartları", "displot, box, violin, PairGrid (Uyg 5–6)", "Sıra Sizde: violin", "Test"],
    hatalar: ["Kitaptaki <code>sns.distplot</code> kaldırıldı. Yerine <code>sns.histplot(..., kde=True)</code>.", "Kitaptaki <code>bahsis_veri.corr()</code> yeni Pandas'ta hata verir (metin sütunları var). Doğrusu <code>corr(numeric_only=True)</code>.", "Kitapta PairGrid satırı <code>sg = sns.PairGrid(...)</code> yazılmış ama sonra <code>g.map_upper</code> kullanılmış. İkisi de g olmalı.", "height=10 grafikleri dev yapar; 4 civarı yeterli.", "relplot'ta hue='sakız' yerine 'sigara' (19. konudaki düzeltme)."],
    sorular: [["Korelasyon 0.7 ne demek?", "Güçlü, aynı yönlü ilişki: fatura arttıkça bahşiş de artma eğiliminde."], ["Violin ile box farkı?", "Box yalnızca çeyrekleri gösterir; violin dağılımın şeklini (nerede yoğun) de gösterir."]],
    kod: `# ÇÖZÜM (güncel kütüphanelerle test edildi)
# 20-u1 · 1. adım
sns.relplot(x='fatura_toplami', y='bahsis', hue='sigara', style='zaman', data=bahsis_veri, palette='viridis', height=3.6)
plt.ylabel('Bahşiş'); plt.xlabel('Fatura Toplamı')
plt.title('Bahşiş - Fatura Toplamı Saçılım Grafiği')
plt.show()

# 20-u1 · 2. adım
sns.relplot(x='fatura_toplami', y='bahsis', size='kisi_sayisi', sizes=(5,200), hue='kisi_sayisi', height=3.6, data=bahsis_veri)
plt.ylabel('Bahşiş'); plt.xlabel('Fatura Toplamı')
plt.title('Kişi Sayısı Bahşiş-Fatura Toplamı Saçılım Grafiği')
plt.show()

# 20-u2 · 3. adım
sns.relplot(x='fatura_toplami', y='bahsis', hue='cinsiyet', col='zaman', data=bahsis_veri, palette='viridis', height=3.2)
plt.show()

# 20-u2 · 4. adım
sns.lineplot(x='fatura_toplami', y='bahsis', hue='cinsiyet', data=bahsis_veri, palette='Set1')
plt.xlabel('Toplam Fatura'); plt.ylabel('Bahşiş')
plt.title('Cinsiyete Göre Fatura Toplamı-Bahşiş Çizgi Grafiği')
plt.show()

# 20-u3 · 5. adım
sns.histplot(bahsis_veri['fatura_toplami'], kde=True)
plt.show()

# 20-u3 · 6. adım
sns.heatmap(bahsis_veri.corr(numeric_only=True), annot=True, linewidths=.5, fmt='.1f')
plt.show()

# 20-u4 · 7. adım
sns.displot(bahsis_veri, x='bahsis', hue='cinsiyet', height=3.6)
plt.xlabel('Bahşiş'); plt.ylabel('Frekans')
plt.title('Cinsiyete Göre Bahşiş Histogram')
plt.show()

# 20-u4 · 8. adım
sns.catplot(x='gun', y='fatura_toplami', kind='box', data=bahsis_veri, height=3.6)
plt.xlabel('Günler'); plt.ylabel('Fatura Toplamı')
plt.title('Günlere Göre Fatura Toplamı')
plt.show()

# 20-u5 · 9. adım
sns.catplot(x='gun', y='fatura_toplami', hue='cinsiyet', kind='violin', inner='stick', split=True, palette='pastel', data=bahsis_veri, height=3.6)
plt.xlabel('Günler'); plt.ylabel('Fatura Toplamı')
plt.title('Günlere Göre Cinsiyet-Fatura Toplamı')
plt.show()

# 20-u5 · 10. adım
g = sns.PairGrid(bahsis_veri, height=1.8)
g.map_upper(sns.scatterplot)
g.map_lower(sns.kdeplot, fill=True)
g.map_diag(sns.histplot, kde=True)
plt.show()`,
    not: "Bu uygulamalar 19. konudaki bahsis_veri (Türkçe sütunlu) değişkenini kullanır. Yeni oturumda önce o hücreler çalıştırılmalı." },

  { tur: "bilgi", baslik: "Grafik türleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "relplot", alt: "İlişki: scatter'ın esnek hâli (style, size, col)" },
      { ust: "lineplot", alt: "Çizgi grafiği" },
      { ust: "histplot / displot", alt: "Dağılım (histogram, KDE eğrisi)" },
      { ust: "heatmap", alt: "Isı haritası (korelasyon)" },
      { ust: "catplot", alt: "Kategorik: kind = box, violin, strip, swarm, bar, count" },
      { ust: "PairGrid", alt: "Tüm özellik çiftleri tek resimde" }
    ]}},

  { tur: "uygulama", baslik: "relplot ile ilişkiler",
    gorsel: { tip: "resim", yol: G + "20-u1.png" },
    adimlar: ["Bahşiş – fatura: renk sigara (hue), işaret zaman (style), viridis paleti.", "Kişi sayısına göre nokta büyüklüğü (size, sizes=(5,200)) ve renk."],
    kitap: "s. 91–92 · 22–23. Örnek" },

  { tur: "uygulama", baslik: "Alt grafikler ve çizgi",
    gorsel: { tip: "resim", yol: G + "20-u2.png" },
    adimlar: ["col='zaman' ile öğle ve akşam için iki ayrı grafik.", "Cinsiyete göre fatura – bahşiş çizgi grafiği (lineplot)."],
    kitap: "s. 93–94 · 24–25. Örnek" },

  { tur: "bilgi", baslik: "Korelasyon",
    metin: "İki değişken arasındaki doğrusal ilişkinin <b>gücü</b> ve <b>yönü</b>. -1 ile +1 arasında.",
    gorsel: { tip: "parcala", parcalar: [ { yazi: "−1", etiket: "tam ters yönlü", renk: "#eb5757" }, { yazi: "0", etiket: "ilişki yok", renk: "#9aa0a6" }, { yazi: "+1", etiket: "tam aynı yönlü", renk: "#27ae60" } ], ayrac: "⟷" } },

  { tur: "uygulama", baslik: "Dağılım ve ısı haritası",
    metin: "Kitaptaki <code>distplot</code> kaldırıldı → <code>histplot(..., kde=True)</code>. <code>corr()</code> içine <code>numeric_only=True</code> yaz.",
    gorsel: { tip: "resim", yol: G + "20-u3.png" },
    adimlar: ["Fatura toplamının histogramı ve KDE eğrisi.", "Sayısal sütunların korelasyon ısı haritası (annot=True, fmt='.1f')."],
    kitap: "s. 94–95 · 26–27. Örnek" },

  { tur: "uygulama", baslik: "Kategorilere göre",
    gorsel: { tip: "resim", yol: G + "20-u4.png" },
    adimlar: ["Cinsiyete göre bahşiş histogramı (displot, hue).", "Günlere göre fatura toplamı kutu grafiği (catplot, kind='box')."],
    kitap: "s. 96–97 · 28–29. Örnek" },

  { tur: "uygulama", baslik: "Keman grafiği ve çoklu grafik",
    gorsel: { tip: "resim", yol: G + "20-u5.png" },
    adimlar: ["Günlere ve cinsiyete göre fatura: kind='violin', inner='stick', split=True, pastel.", "PairGrid: köşegenin üstü scatter, altı KDE (fill=True), köşegen histogram."],
    kitap: "s. 98–99 · 30–31. Örnek" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Aynı veri seti (tips) üzerinde keman (violin) grafiğini kullanarak farklı bir görselleştirme yap. Örneğin zamana göre bahşiş ya da kişi sayısına göre fatura.",
    kitap: "s. 99" },

  { tur: "test", sorular: [
    { soru: "📖 Seaborn'da ısı haritası için hangi metot kullanılır?", secenekler: ["catplot", "displot", "heatmap", "plt", "relplot"], dogru: 2 },
    { soru: "Korelasyon değeri -0.9 ise ne söylenir?", secenekler: ["İlişki yok", "Güçlü ve ters yönlü ilişki", "Zayıf ve aynı yönlü ilişki", "Tam aynı yönlü ilişki"], dogru: 1 },
    { soru: "catplot'ta kutu grafiği için hangisi yazılır?", secenekler: ["kind='box'", "type='box'", "style='box'", "hue='box'"], dogru: 0, kod: true },
    { soru: "relplot'ta kategorilere göre yan yana alt grafikler için hangi parametre?", secenekler: ["hue", "size", "col", "style"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Tek satırda tüm çiftler",
    kod: `sns.pairplot(bahsis_veri, hue='cinsiyet')
plt.show()`,
    not: "pairplot, PairGrid'in hazır hâli. 21. konuda iris çiçekleriyle türlerin nasıl ayrıştığını göreceksin." }

]};
