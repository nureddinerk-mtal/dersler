// WTUG · 08 · Tablolar  (Kitap s. 66–67)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "table → tr → td/th sırası. Tablo satır satır yazılır, sütun diye bir etiket yoktur. Bu, öğrencinin en zorlandığı zihinsel model.", akis: ["Tahtada 3×3 tablo çiz, satır satır kodla", "border, cellpadding, cellspacing", "Görüntüden kodu bul"], hatalar: ["Sütun etiketi aramak", "Bir satırda eksik td yazıp tablonun kaymasını anlamamak", "th'yi tr dışına yazmak"], sorular: [["Tabloyu ortalayabilir miyim?", "Eski yöntem align=\"center\"; doğrusu CSS margin:auto."], ["th ile td farkı?", "th başlık hücresi: kalın ve ortalı gelir, anlam olarak da başlıktır."]] },


  { tur: "bilgi", baslik: "Tablo: satır × sütun",
    metin: "Satır ile sütunun kesiştiği yer <b>hücre</b>dir.",
    gorsel: { tip: "html", icerik: `<table style="border-collapse:collapse;margin:0 auto;font-family:Consolas,monospace;text-align:center">
      <tr><td></td><td style="color:#2f80ed;font-weight:700;padding:4px 10px">1. sütun</td><td style="color:#2f80ed;font-weight:700">2. sütun</td><td style="color:#2f80ed;font-weight:700">3. sütun</td></tr>
      <tr><td style="color:#27ae60;font-weight:700;padding:4px 10px">1. satır &lt;tr&gt;</td><td style="border:2px solid #2b2b2b;padding:10px 18px;background:#fff8d9">hücre</td><td style="border:2px solid #2b2b2b">&lt;td&gt;</td><td style="border:2px solid #2b2b2b">&lt;td&gt;</td></tr>
      <tr><td style="color:#27ae60;font-weight:700;padding:4px 10px">2. satır &lt;tr&gt;</td><td style="border:2px solid #2b2b2b;padding:10px 18px">&lt;td&gt;</td><td style="border:2px solid #2b2b2b">&lt;td&gt;</td><td style="border:2px solid #2b2b2b">&lt;td&gt;</td></tr></table>` },
    not: "Hücreye metin, liste, resim, bağlantı, hatta tablo konur." },

  { tur: "bilgi", baslik: "Tablo etiketleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "&lt;table&gt;", alt: "Tablonun tamamı" },
      { ust: "&lt;tr&gt;", alt: "Satır (table row)" },
      { ust: "&lt;td&gt;", alt: "Veri hücresi" },
      { ust: "&lt;th&gt;", alt: "Başlık hücresi: kalın, ortalı" },
      { ust: "&lt;caption&gt;", alt: "Tablonun üstünde başlık" },
      { ust: "thead · tbody · tfoot", alt: "Başlık · içerik · alt bölüm" }
    ]}},

  { tur: "bilgi", baslik: "Çerçeve ve boşluk",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "border=\"1\"", alt: "Çerçeve kalınlığı. Yazmazsan çerçeve yok." },
      { ust: "cellpadding", alt: "Hücre İÇİ boşluk (kenar ↔ yazı)" },
      { ust: "cellspacing", alt: "Hücreler ARASI boşluk" }
    ]},
    not: "Üçü de &lt;table&gt; etiketine yazılır. HTML5'te bu işler CSS ile de yapılır." },

  { tur: "ornek", baslik: "İlk tablo",
    kod: `<table border="1">
  <tr>
    <th>Ders</th> <th>Saat</th>
  </tr>
  <tr>
    <td>Web Tabanlı Uyg. Geliştirme</td> <td>9</td>
  </tr>
  <tr>
    <td>Seçmeli Programlama</td> <td>3</td>
  </tr>
</table>`,
    sonuc: { tip: "tarayici", adres: "tablo.html", icerik: `<table border="1"><tr><th>Ders</th><th>Saat</th></tr><tr><td>Web Tabanlı Uyg. Geliştirme</td><td>9</td></tr><tr><td>Seçmeli Programlama</td><td>3</td></tr></table>` } },

  { tur: "uygulama", baslik: "Yazılı notları",
    gorsel: { tip: "resim", yol: G + "08-notlar.png" },
    adimlar: [
      "table içine caption, thead, tbody, tfoot yaz.",
      "Başlık satırında th, diğer satırlarda td kullan.",
      "border=\"1\" cellpadding=\"5\" ver, <b>tablo.html</b> kaydet."
    ],
    kitap: "s. 68 · 8. Uygulama (kitapta ortalama 95 yazıyor, doğrusu 90)" },

  { tur: "uygulama", baslik: "Görüntüden kodu bul",
    metin: "Önce kâğıda ızgarayı çiz, sonra kodla.",
    gorsel: { tip: "resim", yol: G + "08-bulmaca1.png" },
    adimlar: [
      "Kaç satır, kaç sütun var? Say.",
      "İlk satır üç sütun boyunca: colspan=\"3\".",
      "“Dallar” iki satır boyunca: rowspan=\"2\" (sonraki konuda detayı var)."
    ],
    kitap: "Öğretmen ek uygulaması (EK)" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Sütun başlıkları haftanın günleri, satır başlıkları ders saatleri olan kendi ders programı tablonu oluştur.",
    kitap: "s. 69" },

  { tur: "test", sorular: [
    { soru: "Tablonun bir satırını oluşturan etiket?", kod: true, secenekler: ["<td>", "<tr>", "<th>", "<col>"], dogru: 1 },
    { soru: "Hücre içi boşluğu ayarlayan özellik?", secenekler: ["cellspacing", "border", "cellpadding", "caption"], dogru: 2 },
    { soru: "Tablonun dışında üstte başlık oluşturan etiket?", kod: true, secenekler: ["<thead>", "<th>", "<caption>", "<summary>"], dogru: 2 },
    { soru: "border yazılmazsa ne olur?", secenekler: ["Kalın çerçeve", "Çerçeve görünmez", "Tablo görünmez", "Hata verir"], dogru: 1 },
    { soru: "Toplam satırı hangi bölüme yazılır?", kod: true, secenekler: ["<thead>", "<tbody>", "<tfoot>", "<caption>"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Hücreyi boya",
    metin: "style özelliğiyle hücreye ya da satıra renk ver.",
    kod: `<tr style="background-color:#1f3a6b; color:white;">
  <th>Ders</th><th>Durum</th>
</tr>
<tr>
  <td>HTML</td>
  <td style="background-color:#c8f0d8;">Bitti</td>
</tr>`,
    not: "tr'ye yazarsan bütün satır boyanır." }

]};
