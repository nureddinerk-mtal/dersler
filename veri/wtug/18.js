// WTUG · 18 · Seçim listesi, fieldset, textarea, meter, progress  (Kitap s. 95–98)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "select/option, textarea, fieldset/legend, meter ve progress. meter ölçüm (doluluk), progress ilerleme (yükleme) içindir.", akis: ["Seçim listeleri", "Çerçeveli form ve yorum formu", "meter / progress uygulaması"], hatalar: ["textarea'yı input gibi tek etiketle yazmak (kapanışı var)", "meter ile progress'i karıştırmak"], sorular: [["Listeden birden fazla seçim?", "select'e multiple ekle; Ctrl ile seçilir."], ["textarea'nın boyutunu nasıl ayarlarım?", "rows ve cols ya da CSS width/height."]] },


  { tur: "bilgi", baslik: "Seçim listesi",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "&lt;select&gt;", alt: "Listenin kendisi" },
      { ust: "&lt;option&gt;", alt: "Her seçenek" },
      { ust: "&lt;optgroup label&gt;", alt: "Seçenekleri gruplar (grup adı seçilmez)" },
      { ust: "multiple · size", alt: "Çoklu seçim · kaç satır görünsün" },
      { ust: "selected", alt: "Açılışta seçili gelen" }
    ]}},

  { tur: "ornek", baslik: "Aşağı açılan ve sabit liste",
    kod: `<select name="iller" size="1">
  <option value="plaka54">Sakarya</option>
  <option value="plaka06">Ankara</option>
  <option value="plaka34">İstanbul</option>
</select>
<select name="aylar" multiple>
  <option value="1">Ocak</option>
  <option value="2">Şubat</option>
  <option value="3">Mart</option>
</select>`,
    sonuc: { tip: "tarayici", adres: "liste.html", icerik: `<select size="1"><option>Sakarya</option><option>Ankara</option><option>İstanbul</option></select> <select multiple><option>Ocak</option><option>Şubat</option><option>Mart</option><option>Nisan</option></select>` },
    not: "Tek seçenek görünüyorsa drop-down, çok görünüyorsa list box." },

  { tur: "ornek", baslik: "Gruplu liste",
    kod: `<select name="riskharitasi" multiple>
  <option selected value="none">Hiçbiri</option>
  <optgroup label="Kırmızı">
    <option value="k1">Sakarya</option>
    <option value="k2">Konya</option>
  </optgroup>
  <optgroup label="Mavi">
    <option value="m1">Uşak</option>
  </optgroup>
</select>`,
    sonuc: { tip: "tarayici", adres: "risk.html", icerik: `<select multiple size="7"><option selected>Hiçbiri</option><optgroup label="Kırmızı"><option>Sakarya</option><option>Konya</option></optgroup><optgroup label="Mavi"><option>Uşak</option></optgroup></select>` } },

  { tur: "bilgi", baslik: "Çerçeve ve yazı alanı",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "&lt;fieldset&gt;", alt: "Form elemanlarını çerçeveye alır" },
      { ust: "&lt;legend&gt;", alt: "Çerçevenin başlığı" },
      { ust: "&lt;textarea&gt;", alt: "Çok satırlı yazı alanı: rows (yükseklik), cols (genişlik)" },
      { ust: "tabindex", alt: "Tab tuşuyla gezinme sırası" }
    ]}},

  { tur: "uygulama", baslik: "Çerçeveli üyelik formu",
    gorsel: { tip: "resim", yol: G + "18-uyelik.png" },
    adimlar: [
      "form içine fieldset, başına legend: Üyelik Bilgileri.",
      "Ad Soyad (text), e-Posta (email), Doğum Tarihi (date).",
      "Üç alana da required ver. Gönder ve Temizle ekle."
    ],
    kitap: "s. 96 · Görsel 3.46" },

  { tur: "uygulama", baslik: "Yorum formu",
    gorsel: { tip: "resim", yol: G + "18-yorum.png" },
    adimlar: [
      "fieldset + legend: Yorum Gönder.",
      "e-Posta için input (tabindex=\"1\").",
      "Yorum için textarea: rows=\"3\" cols=\"20\" (tabindex=\"2\")."
    ],
    kitap: "s. 97 · Görsel 3.47" },

  { tur: "bilgi", baslik: "meter ve progress",
    gorsel: { tip: "ikili",
      sol: { baslik: "&lt;meter&gt; ölçüm (gösterge)", gorsel: { tip: "html", icerik: `<div style="font-family:serif">Puan: <meter min="0" low="40" high="90" max="100" value="55"></meter> 55<br>Puan: <meter min="0" low="40" high="90" max="100" value="95"></meter> 95</div>` } },
      sag: { baslik: "&lt;progress&gt; ilerleme", gorsel: { tip: "html", icerik: `<div style="font-family:serif">Anket: <progress max="100" value="40"></progress><br>Anket: <progress max="100" value="80"></progress></div>` } }
    },
    not: "meter: min, max, low, high, value. progress ölçüm için değil, görevin ilerlemesi için." },

  { tur: "uygulama", baslik: "Puanlar ve anket",
    gorsel: [{ tip: "resim", yol: G + "18-meter.png" }, { tip: "resim", yol: G + "18-progress.png" }],
    adimlar: [
      "Dört öğrencinin puanını meter ile göster (min 0, low 40, high 90, max 100).",
      "Beş öğrencinin anket durumunu progress ile göster (max 100).",
      "label'ları for ile ilgili id'ye bağla."
    ],
    kitap: "s. 97–98 · Görsel 3.48, 3.49" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ fieldset ile mesajlaşma formu oluştur.<br>2️⃣ meter ile derslerden aldığın puanları göster.<br>3️⃣ progress ile sınıf başkanı seçim anket sonuçlarını göster.",
    kitap: "s. 97–98" },

  { tur: "test", sorular: [
    { soru: "Seçim listesinde birden fazla seçim yapmayı sağlayan özellik?", secenekler: ["size", "multiple", "selected", "optgroup"], dogru: 1 },
    { soru: "Form elemanlarının etrafına çerçeve çizen etiket?", kod: true, secenekler: ["<legend>", "<fieldset>", "<frame>", "<border>"], dogru: 1 },
    { soru: "Çok satırlı yazı alanı?", kod: true, secenekler: ['<input type="text">', "<textarea>", "<select>", "<label>"], dogru: 1 },
    { soru: "Dosya indirme ilerlemesini göstermek için hangisi uygun?", kod: true, secenekler: ["<meter>", "<progress>", "<range>", "<output>"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Hazır liste ile otomatik tamamlama",
    kod: `<input list="hazirliste">
<datalist id="hazirliste">
  <option value="Öğretmen">
  <option value="Öğrenci">
  <option value="Veli">
</datalist>`,
    gorsel: { tip: "tarayici", adres: "datalist.html", icerik: `<input list="hl" placeholder="Tıkla ya da yaz"><datalist id="hl"><option value="Öğretmen"><option value="Öğrenci"><option value="Veli"></datalist>` },
    not: "Kutuya tıkla: seçenekler açılır, istersen kendin de yazarsın." }

]};
