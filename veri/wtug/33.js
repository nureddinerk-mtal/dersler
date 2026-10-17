// WTUG · 33 · Değişkenler, veri tipleri, operatörler  (Kitap s. 169–173)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "var, veri tipleri, operatörler. \"1\"+\"98\"+\"8\" = \"1988\" örneği tip kavramını çok iyi oturtuyor. = ile == farkı vurgulanmalı.", akis: ["Değişken = etiketli kutu", "Veri tipleri ve metinsel toplama", "Operatörler canlı örneği"], hatalar: ["Sayıyı tırnak içinde yazıp toplamak", "Değişken adında boşluk ya da tire kullanmak", "= ile == karıştırmak"], sorular: [["Kutudan gelen sayı neden toplanmıyor?", "value her zaman metindir; Number(…) ya da parseInt ile sayıya çevrilir."], ["let ve const?", "Modern yazım; kitap var kullanıyor, ikisi de olur."]] },


  { tur: "bilgi", baslik: "Değişken: etiketli kutu",
    gorsel: { tip: "html", icerik: `<div style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;font-family:Consolas,monospace">
      ${[["sayi","52","#2f80ed"],["sehir","\"Ordu\"","#27ae60"],["tercih","true","#f2994a"]].map(k=>`<div style="text-align:center"><div style="border:3px solid ${k[2]};border-top:none;border-radius:0 0 10px 10px;padding:16px 18px;min-width:90px;font-size:1.1rem">${k[1]}</div><div style="margin-top:4px;font-weight:bold;color:${k[2]}">${k[0]}</div></div>`).join("")}</div>` },
    kod: `var sayi=52;`,
    not: "Değişken veriyi RAM'de tutar. Sayfa kapanınca silinir. Tanımlarken var yazılır, tipi JavaScript kendisi anlar." },

  { tur: "bilgi", baslik: "Veri tipleri",
    kod: `var sayi=52;          //sayısal (number)
var oran=1.618;       //sayısal (float)
var sehir="Ordu";     //metinsel (string)
var tercih=true;      //mantıksal (boolean)
var personel={        //nesne (object)
  ad:"Sinan",
  boy:1.87,
  meslek:"Şef(Aşçı)"
}`,
    not: "Tırnak içindeki sayı metindir: \"2021\" bir string. Nesnenin özelliğine nokta ile ulaşılır: personel.ad" },

  { tur: "uygulama", baslik: "Metinsel toplama",
    metin: "Üç değişken: \"1\", \"98\", \"8\". Toplayınca ne çıkar?",
    gorsel: { tip: "resim", yol: G + "33-toplama.png" },
    adimlar: [
      "a, b, c değişkenlerine tırnak içinde 1, 98, 8 ata.",
      "Toplam = a + b + c",
      "alert ile Toplam'ı göster. Neden 107 değil?"
    ],
    kitap: "s. 170–171 · 1. Uygulama" },

  { tur: "bilgi", baslik: "Değişken adı kuralları",
    gorsel: { tip: "ikili", ok: " ",
      sol: { baslik: "✅ Olur", gorsel: { tip: "html", icerik: `<div style="font-family:Consolas,monospace;line-height:1.9">adSoyad<br>_sayac<br>$fiyat<br>sayi2</div>` } },
      sag: { baslik: "❌ Olmaz", gorsel: { tip: "html", icerik: `<div style="font-family:Consolas,monospace;line-height:1.9">2sayi <small>(sayıyla başlar)</small><br>ad-soyad <small>(özel karakter)</small><br>var <small>(JS kelimesi)</small><br>ad soyad <small>(boşluk)</small></div>` } }
    },
    not: "Büyük-küçük harf farklıdır: Sayi ile sayi iki ayrı değişken. Her ad benzersiz olmalı." },

  { tur: "bilgi", baslik: "Operatörler",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>+ - * /</code> <span>dört işlem</span></div><div><code>%</code> <span>mod: bölümden kalan (8%3 → 2)</span></div>
      <div><code>++ --</code> <span>bir artır / azalt</span></div><div><code>= += -= *= /=</code> <span>atama (A+=5: A'ya 5 ekle)</span></div>
      <div><code>&lt; &gt; &lt;= &gt;=</code> <span>küçük, büyük…</span></div><div><code>== !=</code> <span>eşit mi, farklı mı</span></div>
      <div><code>&amp;&amp;</code> <span>ve: ikisi de doğru</span></div><div><code>||</code> <span>veya: biri doğru yeter</span></div>
      <div><code>!</code> <span>değil: tersine çevir</span></div></div>` },
    not: "= değer atar, == karşılaştırır. Karıştırma!" },

  { tur: "ornek", baslik: "Operatörler çalışırken",
    kod: `var a=5.5, b=16;
ekran.innerHTML += (a + b) + "<br>";     // 21.5
ekran.innerHTML += ("5" + "3") + "<br>"; // 53
ekran.innerHTML += (8 % 3) + "<br>";     // 2
var A=10; A+=5;
ekran.innerHTML += A + "<br>";           // 15
ekran.innerHTML += (A>3 && A<100);       // true`,
    sonuc: { tip: "tarayici", adres: "operator.html", icerik: `<div id="ekran" style="font-size:20px"></div><script>var ekran=document.getElementById("ekran");var a=5.5,b=16;ekran.innerHTML+=(a+b)+"<br>";ekran.innerHTML+=("5"+"3")+"<br>";ekran.innerHTML+=(8%3)+"<br>";var A=10;A+=5;ekran.innerHTML+=A+"<br>";ekran.innerHTML+=(A>3&&A<100);<\/script>` } },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Kurallara uyarak her veri tipinden (sayı, ondalık, metin, mantıksal, nesne) ikişer değişken tanımla, değer ata.",
    kitap: "s. 171" },

  { tur: "test", sorular: [
    { soru: "<code>var x = \"7\" + \"3\";</code> x kaçtır?", secenekler: ["10", "73", "\"73\" metni", "Hata"], dogru: 2 },
    { soru: "Hangisi geçerli bir değişken adı?", secenekler: ["2ogrenci", "ogrenci-sayisi", "_ogrenciSayisi", "var"], dogru: 2 },
    { soru: "<code>17 % 5</code> sonucu?", secenekler: ["3", "2", "3.4", "12"], dogru: 1 },
    { soru: "A=20 iken <code>A-=5</code> sonrası A?", secenekler: ["5", "15", "25", "-5"], dogru: 1 },
    { soru: "Not 50 ve devamsızlık 10'dan az ise geçer. Doğru şart?", secenekler: ["(not>=50) || (dev<10)", "(not>=50) && (dev<10)", "!(not>=50)", "(not=50) && (dev=10)"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "var yerine let ve const",
    kod: `let sayac = 0;        // değişebilir
const pi = 3.14;      // sabit, değiştirilemez
sayac = 5;            // olur
pi = 3;               // HATA!`,
    not: "Modern JavaScript'te var yerine çoğunlukla let ve const kullanılır." }

]};
