// WTUG · 17 · Formlar: form, input, button  (Kitap s. 91–94)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "form, input, button. name özelliği çok önemli: sunucuya veriyi o isimle gönderir (arka uç konusunda tekrar göreceğiz). Şimdilik form bir yere gönderilmiyor.", akis: ["form özellikleri (action, method)", "input türleri", "Üyelik formu"], hatalar: ["name vermemek (veri gitmez)", "label'ı for/id ile bağlamamak", "radio düğmelerine farklı name verip hepsinin seçilebilmesi"], sorular: [["Gönder'e bastım, bir şey olmadı?", "action boş; veriyi alacak sunucu kodu yok. .NET konusunda yapacağız."], ["password kutusu şifreyi gizler mi?", "Sadece ekranda gizler; güvenlik için HTTPS gerekir."]] },


  { tur: "bilgi", baslik: "Form ne işe yarar?",
    metin: "Ziyaretçiden bilgi alır, sunucuya gönderir.",
    gorsel: { tip: "akis", adimlar: [
      { simge: "⌨️", yazi: "Kullanıcı yazar", alt: "input" },
      { simge: "🖱️", yazi: "Gönder'e basar", alt: "submit" },
      { simge: "📨", yazi: "Veri gider", alt: "action adresine" },
      { simge: "🖥️", yazi: "Sunucu işler" }
    ]},
    not: "Üye ol, yorum yap, sipariş ver: hepsi form." },

  { tur: "bilgi", baslik: "form etiketinin özellikleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "name", alt: "Formun adı" },
      { ust: "action", alt: "Veriler hangi dosyaya gidecek?" },
      { ust: "method=\"get\"", alt: "Veri adres çubuğunda görünür" },
      { ust: "method=\"post\"", alt: "Veri gizli gider, daha güvenli" }
    ]},
    not: "Form elemanları &lt;form&gt;…&lt;/form&gt; arasına yazılır." },

  { tur: "ornek", baslik: "İlk form",
    kod: `<form name="giris" action="giris.html" method="get">
  <label>Ad:</label> <input type="text"/> <br/><br/>
  <label>Soyad: </label> <input type="text"/> <br/><br/>
  <input type="submit" value="Gönder"/>
</form>`,
    sonuc: { tip: "tarayici", adres: "giris.html", icerik: `<form onsubmit="return false"><label>Ad:</label> <input type="text"/> <br/><br/><label>Soyad: </label> <input type="text"/> <br/><br/><input type="submit" value="Gönder"/></form>` },
    not: "label: kutunun başlığı. input: veri girilen kutu, kapanışı yok." },

  { tur: "bilgi", baslik: "input type çeşitleri",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>text</code> <span><input type="text" style="width:90px"></span></div>
      <div><code>password</code> <span><input type="password" value="12345" style="width:90px"></span></div>
      <div><code>checkbox</code> <span><input type="checkbox" checked> çoklu seçim</span></div>
      <div><code>radio</code> <span><input type="radio" checked> tek seçim</span></div>
      <div><code>file</code> <span>dosya seçer</span></div>
      <div><code>submit</code> <span><input type="submit" value="Gönder" onclick="return false"></span></div>
      <div><code>reset</code> <span><input type="reset" value="Temizle"></span></div>
      <div><code>hidden</code> <span>gizli veri</span></div></div>` },
    not: "Radio'larda name aynı olmalı: biri seçilince diğeri kalkar." },

  { tur: "uygulama", baslik: "Üyelik formu",
    gorsel: { tip: "resim", yol: G + "17-uye.png" },
    adimlar: [
      "form'a action=\"uye.html\" method=\"post\" ver.",
      "Ad Soyad, e-Posta, Şifre için label + input.",
      "Cinsiyet için aynı name'li iki radio, biri seçili (checked).",
      "Gönder (submit) ve Temizle (reset) düğmeleri."
    ],
    kitap: "s. 93" },

  { tur: "uygulama", baslik: "HTML5 veri tipleri",
    gorsel: { tip: "resim", yol: G + "17-turler.png", yazi: "Her kutuya tıkla: tarih, saat, renk seçiciler açılır." },
    adimlar: [
      "form içine her satırı bir &lt;p&gt; olarak yaz.",
      "type: color, date, month, week, time, datetime-local",
      "type: email, url, number (min 1, max 9), password, range, search, tel",
      "Kaydet, tarayıcıda her kutuyu dene."
    ],
    kitap: "s. 93–94 · 16. Uygulama" },

  { tur: "bilgi", baslik: "&lt;button&gt; etiketi",
    kod: `<button type="submit">
  <img src="gonder.jpg" width="16" height="16"> Gönder
</button>`,
    gorsel: { tip: "tarayici", adres: "buton.html", icerik: `<button type="button"><img src="gorsel/malzeme/gonder.jpg" width="16" height="16"> Gönder</button> <button type="button"><img src="gorsel/malzeme/temizle.jpg" width="16" height="16"> Temizle</button>` },
    not: "input'tan farkı: kapanışı var, içine resim gibi başka etiket girer." },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Üyelik formuna benzer formlar yap, arkadaşınınkiyle karşılaştır.<br>2️⃣ Form bileşenleriyle bir randevu formu oluştur.<br>3️⃣ button etiketiyle bir üyelik formu oluştur.",
    malzeme: ["gonder.jpg", "temizle.jpg"],
    kitap: "s. 93–94" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi input type ile kullanılan form elemanı değildir?", secenekler: ["checkbox", "image", "radio", "text", "value"], dogru: 4 },
    { soru: "Şifreyi yıldızlı gösteren tip?", secenekler: ["text", "hidden", "password", "secret"], dogru: 2 },
    { soru: "Birden çok seçenek işaretlenebilen tip?", secenekler: ["radio", "checkbox", "submit", "range"], dogru: 1 },
    { soru: "Verinin adres çubuğunda göründüğü yöntem?", secenekler: ["post", "get", "put", "send"], dogru: 1 },
    { soru: "Formdaki verileri temizleyen düğme?", secenekler: ["submit", "reset", "clear", "button"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "get ile gönderilen veriyi gör",
    adimlar: [
      "İlk formu method=\"get\" ve action=\"giris.html\" ile kaydet.",
      "input'lara name ver: name=\"ad\", name=\"soyad\".",
      "Doldur, Gönder'e bas. Adres çubuğuna bak: <b>?ad=…&soyad=…</b>"
    ],
    not: "Bu yüzden şifre get ile gönderilmez!" }

]};
