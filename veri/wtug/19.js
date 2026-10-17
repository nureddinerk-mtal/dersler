// WTUG · 19 · Veri giriş özellikleri  (Kitap s. 98–101)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Form geneli için",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "autocomplete=\"on\"", alt: "Daha önce yazılanı önerir (off: kapalı)" },
      { ust: "novalidate", alt: "Veri tipini kontrol etme" }
    ]},
    not: "Bu ikisi &lt;form&gt; etiketine yazılır." },

  { tur: "bilgi", baslik: "Kutu (input) için",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>placeholder</code> <span>kutuda soluk ipucu</span></div>
      <div><code>required</code> <span>boş bırakılamaz</span></div>
      <div><code>autofocus</code> <span>açılınca imleç burada</span></div>
      <div><code>min · max</code> <span>en küçük · en büyük</span></div>
      <div><code>step</code> <span>kaçar kaçar artsın</span></div>
      <div><code>pattern</code> <span>belirli kalıba uysun</span></div>
      <div><code>list</code> <span>hazır liste (datalist)</span></div>
      <div><code>multiple</code> <span>birden çok değer</span></div></div>` } },

  { tur: "ornek", baslik: "placeholder, min, step",
    kod: `<input type="email" placeholder="e-Posta">
<input type="number" min="1" max="5" placeholder="1-5">
<input type="number" step="2" placeholder="Çift Sayı">`,
    sonuc: { tip: "tarayici", adres: "ozellik.html", icerik: `<input type="email" placeholder="e-Posta"> <input type="number" min="1" max="5" placeholder="1-5"> <input type="number" step="2" placeholder="Çift Sayı">` },
    not: "Okla sayıyı artır: step=\"2\" ikişer ikişer artar." },

  { tur: "bilgi", baslik: "pattern: kalıp kontrolü",
    kod: `<input type="password" pattern=".{6,}" title="Altı veya daha fazla">
<input type="url" pattern="https?://.+" placeholder="http:// dâhil edin">`,
    gorsel: { tip: "kartlar", kartlar: [
      { ust: ".{6,}", alt: "En az 6 karakter" },
      { ust: "https?://.+", alt: "http:// ya da https:// ile başlasın" }
    ]},
    not: "Doğrulama: veri sunucuya gitmeden tarayıcıda kontrol edilir. JavaScript gerekmez." },

  { tur: "uygulama", baslik: "Kontrollü kayıt formu",
    gorsel: { tip: "resim", yol: G + "19-kayit.png", yazi: "Boş gönderince tarayıcı uyarı vermeli." },
    adimlar: [
      "Ad Soyad: placeholder, required, autofocus.",
      "e-Posta: type=\"email\", required. Şifre: pattern=\".{6,}\".",
      "Yaş: number, min 14 max 18. Rol: datalist (Öğretmen, Öğrenci, Veli).",
      "Boş ya da hatalı gönder, uyarıları gözle."
    ],
    kitap: "Ek uygulama (EK) · kitap s. 99–100 özellikleri" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "1️⃣ Kitaptaki autocomplete ve novalidate formunu oluştur.<br>2️⃣ Veri giriş özellikleri formunu (s. 100) oluştur, her kutuyu dene.<br>🔎 Araştırma: Kullanıcı adı sadece küçük harf ve en fazla 10 karakter olsun: pattern'i bul.",
    kitap: "s. 99–101" },

  { tur: "test", sorular: [
    { soru: "Kutu boşken içinde soluk ipucu gösteren özellik?", secenekler: ["value", "placeholder", "title", "label"], dogru: 1 },
    { soru: "Doldurulması zorunlu alan için?", secenekler: ["autofocus", "required", "multiple", "step"], dogru: 1 },
    { soru: "Sayfa açılınca imlecin bir kutuda olması için?", secenekler: ["autofocus", "autocomplete", "focus", "list"], dogru: 0 },
    { soru: 'pattern=".{6,}" ne demek?', secenekler: ["En fazla 6 karakter", "Tam 6 rakam", "En az 6 karakter", "6 kelime"], dogru: 2 },
    { soru: "Formdaki tip kontrolünü kapatan özellik?", secenekler: ["autocomplete", "novalidate", "formaction", "disabled"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Telefon kalıbı",
    metin: "05XX XXX XX XX biçiminde telefon isteyen kutu:",
    kod: `<input type="tel" pattern="05[0-9]{9}" placeholder="05XXXXXXXXX" required>`,
    not: "[0-9]{9}: 0–9 arası 9 rakam. Kalıplara “düzenli ifade” (regex) denir." }

]};
