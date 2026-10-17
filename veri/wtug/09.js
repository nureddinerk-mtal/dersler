// WTUG · 09 · Hücre birleştirme: colspan, rowspan  (Kitap s. 67–69)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "colspan yana, rowspan aşağı",
    gorsel: { tip: "ikili",
      sol: { baslik: "colspan=\"2\" ➡️", gorsel: { tip: "html", icerik: `<table style="border-collapse:collapse;margin:0 auto;text-align:center;font-family:Consolas,monospace">
        <tr><td colspan="2" style="border:2px solid #2b2b2b;padding:10px;background:#e3f0ff">2 sütun</td></tr>
        <tr><td style="border:2px solid #2b2b2b;padding:10px 20px">A</td><td style="border:2px solid #2b2b2b;padding:10px 20px">B</td></tr></table>` } },
      sag: { baslik: "rowspan=\"2\" ⬇️", gorsel: { tip: "html", icerik: `<table style="border-collapse:collapse;margin:0 auto;text-align:center;font-family:Consolas,monospace">
        <tr><td rowspan="2" style="border:2px solid #2b2b2b;padding:10px;background:#dcf5e4">2<br>satır</td><td style="border:2px solid #2b2b2b;padding:10px 20px">A</td></tr>
        <tr><td style="border:2px solid #2b2b2b;padding:10px 20px">B</td></tr></table>` } }
    },
    not: "td'ye ya da th'ye yazılır. Değer: kaç hücre birleşecek." },

  { tur: "bilgi", baslik: "Hücre sayma kuralı",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📏 eşit satırlar", alt: "Her satırın toplam genişliği aynı olmalı" },
      { ust: "colspan=\"2\"", alt: "İki hücre sayılır → o satırda bir td eksik yaz" },
      { ust: "rowspan=\"2\"", alt: "Alt satırda o hücreyi yazma, yeri dolu" }
    ]},
    not: "Tablo bozuksa önce her satırdaki hücreleri say." },

  { tur: "ornek", baslik: "Kitaptaki şema",
    kod: `<table border="1" cellpadding="5">
  <tr>
    <th rowspan="3">..</th>
    <th colspan="2">..</th>
  </tr>
  <tr> <td>..</td> <td>..</td> </tr>
  <tr> <td>..</td> <td>..</td> </tr>
</table>`,
    sonuc: { tip: "tarayici", adres: "birlestir.html", icerik: `<table border="1" cellpadding="5"><tr><th rowspan="3">rowspan=3</th><th colspan="2">colspan=2</th></tr><tr><td>..</td><td>..</td></tr><tr><td>..</td><td>..</td></tr></table>` },
    not: "2. ve 3. satırda sadece 2 td var: soldaki hücre yukarıdan iniyor." },

  { tur: "uygulama", baslik: "Görüntüden kodu bul",
    gorsel: { tip: "resim", yol: G + "09-bulmaca2.png" },
    adimlar: [
      "Izgarayı çiz: kaç sütun var? (Öğrenci, 1., 2., Ort.)",
      "“Öğrenci” ve “Ort.” iki satır: rowspan. “Yazılı” iki sütun: colspan.",
      "Ortalama hücrelerini style ile boya."
    ],
    kitap: "Öğretmen ek uygulaması (EK)" },

  { tur: "uygulama", baslik: "Haftalık ders programı",
    gorsel: { tip: "resim", yol: G + "09-program.png" },
    adimlar: [
      "Önce tabloyu kur: 4 sütun (Saat + 3 gün).",
      "SPROG rowspan=\"3\", WTUG rowspan=\"4\", öğle arası colspan=\"3\".",
      "Hücre içine liste yaz, renkleri style ile ver.",
      "Altına dl ve details ekle."
    ],
    kitap: "Öğretmen ek uygulaması (EK) · kitap s. 69 Sıra Sizde'ye dayanır" },

  { tur: "uygulama", baslik: "Kütüphane kitap listesi",
    gorsel: { tip: "resim", yol: G + "09-kutuphane.png" },
    adimlar: [
      "6 sütun. Başlık iki satır: “Ödünç bilgisi” colspan=\"2\", diğerleri rowspan=\"2\".",
      "Raf hücreleri rowspan=\"2\" ile grupla.",
      "“Onarımda” hücresi colspan=\"2\".",
      "tfoot: colspan=\"3\" + colspan=\"3\"."
    ],
    kitap: "Öğretmen ek uygulaması (EK)" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Hücre 1–5 tablosunu rowspan ile oluştur (Görsel 3.21).<br>2️⃣ Hücre 1, 2, 4, 5, 6 tablosunu colspan ile oluştur (Görsel 3.22).",
    kitap: "s. 67–68" },

  { tur: "test", sorular: [
    { soru: "Bir hücreyi yana doğru iki sütun genişliğinde yapmak için?", secenekler: ['rowspan="2"', 'colspan="2"', 'cellspacing="2"', 'border="2"'], dogru: 1 },
    { soru: '4 sütunlu tabloda ilk satırdaki bir hücreye rowspan="2" verildi. 2. satıra kaç hücre yazılır?', secenekler: ["2", "3", "4", "5"], dogru: 1 },
    { soru: 'Bir satırda colspan="3" olan hücre ve 1 td var. Tablo kaç sütun?', secenekler: ["2", "3", "4", "5"], dogru: 2 },
    { soru: "Hücre birleştirme özellikleri hangi etiketlere yazılır?", secenekler: ["table", "tr", "td ve th", "caption"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Hata avı",
    metin: "Bu kodda 2 hata var. Bul!",
    kod: `<table border="1">
  <tr><th colspan="3">Kulüp Saatleri</th></tr>
  <tr>
    <td rowspan="2">Robotik</td><td>Salı</td><td>15:30</td>
  </tr>
  <tr>
    <td>Robotik</td><td>Perşembe</td><td>15:30</td>
  </tr>
</table>
<p><b>Katılım <i>gönüllüdür</b></i></p>`,
    not: "İpucu: rowspan'li hücre alt satırda yazılmaz. Etiket kapanma sırası?" }

]};
