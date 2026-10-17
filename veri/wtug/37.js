// WTUG · 37 · Döngüler  (Kitap s. 188–193)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Sayaç, for, while, do-while. İç içe for ile satranç tahtası en etkileyici örnek; kâğıtta i ve j değerlerini tablo yapıp izletin.", akis: ["Döngü akışı", "Sayaç ve for", "Kutular, satranç, while uygulamaları"], hatalar: ["Sonsuz döngü (artırmayı unutmak) — sekme donar, kapatıp aç", "i&lt;=8 yazıp 9 tur döndürmek", "for içinde ; yerine , kullanmak"], sorular: [["Sayfa dondu?", "Sonsuz döngü; sekmeyi kapat, artırma satırını kontrol et."], ["for mu while mı?", "Tekrar sayısı belliyse for, şarta bağlıysa while."]] },


  { tur: "bilgi", baslik: "Döngü: tekrar et",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🏁", yazi: "Başla", alt: "i = 0" }, { simge: "❓", yazi: "Şart", alt: "i &lt; 8 ?" },
      { simge: "⚙️", yazi: "Kodlar", alt: "çalışır" }, { simge: "➕", yazi: "Artır", alt: "i++ → şarta dön" }
    ]},
    not: "500 ürün için 500 if yerine döngü içinde tek if." },

  { tur: "bilgi", baslik: "Sayaç",
    kod: `sayac++;     // bir artır
sayac--;     // bir azalt
sayac += 5;  // beş artır
sayac *= 2;  // iki katına çıkar`,
    not: "Bir değeri adım adım değiştiren değişkene sayaç denir." },

  { tur: "uygulama", baslik: "Sayıyı artır, azalt",
    gorsel: { tip: "resim", yol: G + "37-sayac.png", yazi: "Üç kez “Sayıyı Artır”a basıldı." },
    adimlar: [
      "Açık mavi (lightskyblue), 10px iç boşluklu div.",
      "İçinde: Artır düğmesi, id=\"sayac\" h1 (0), Azalt düğmesi.",
      "arttir(): sayac'ın innerText'i ++, azalt(): --"
    ],
    kitap: "s. 189 · 12. Uygulama" },

  { tur: "bilgi", baslik: "for döngüsü",
    gorsel: { tip: "parcala", parcalar: [
      { yazi: "for(", etiket: "" }, { yazi: "i=0;", etiket: "başlangıç" }, { yazi: "i&lt;8;", etiket: "şart" }, { yazi: "i++", etiket: "artış" }, { yazi: "){ … }", etiket: "tekrar eden kodlar" }
    ]},
    not: "Tekrar sayısı belliyse for. Bu döngü 8 kez döner: i = 0, 1, … 7" },

  { tur: "uygulama", baslik: "Renkli kutular",
    gorsel: { tip: "resim", yol: G + "37-kutular.png", yazi: "Renkler rastgele: her tıklamada değişir, seninki farklı olur." },
    adimlar: [
      "1'den 8'e rakamlı sekiz div ve Renkleri Değiştir düğmesi.",
      "div: 20 × 20, 2px solid gray, margin 2px, ortalı, float:left.",
      "Sekiz renkli bir dizi tanımla.",
      "for ile 8 kez: Math.floor(Math.random()*8) ile rastgele renk seç, i. div'i boya."
    ],
    kitap: "s. 190 · 13. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Bir diziye 100 rastgele sayı aktar. Büyükten küçüğe sırala, bir div içinde ekrana yazdır.",
    kitap: "s. 191" },

  { tur: "uygulama", baslik: "Satranç tahtası",
    gorsel: { tip: "resim", yol: G + "37-satranc.png", yazi: "Tahtayı Oluştur'a basınca." },
    adimlar: [
      "#tahtaCerceve: 240 × 240, 3px solid black. Altında düğme.",
      ".kareBeyaz ve .kareSiyah: 30 × 30, float:left.",
      "İç içe iki for (i satır, j sütun), her biri 8 kez.",
      "(i+j)%2==0 ise beyaz kare, değilse siyah kare ekle (innerHTML +=)."
    ],
    kitap: "s. 191–192 · 14. Uygulama" },

  { tur: "bilgi", baslik: "while ve do – while",
    gorsel: { tip: "ikili",
      sol: { baslik: "while: önce sor", gorsel: { tip: "html", icerik: `<pre class="kod" style="margin:0">while(sayi1&lt;=10){
  …
  sayi1++;
}</pre>` } },
      sag: { baslik: "do-while: önce yap", gorsel: { tip: "html", icerik: `<pre class="kod" style="margin:0">do{
  …
  sayi2--;
}while(sayi2&gt;=0)</pre>` } }
    },
    not: "do-while, şart baştan yanlış olsa bile en az bir kez çalışır." },

  { tur: "uygulama", baslik: "0'dan 10'a, 10'dan 0'a",
    gorsel: { tip: "resim", yol: G + "37-sayilar.png" },
    adimlar: [
      "İki div: ekran1 ve ekran2.",
      "while ile sayi1'i 0'dan 10'a artırarak ekran1'e yaz.",
      "do-while ile sayi2'yi 10'dan 0'a azaltarak ekran2'ye yaz (kitabın adımında ekran1 yazıyor, kodda ekran2)."
    ],
    kitap: "s. 192–193 · 15. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Bu kod hangi sayıyı gösterir?<pre class=\"kod\">var say=0;\nfor(i=0;i&lt;4;i++){\n  for(j=0;j&lt;5;j++){\n    if(j%2==0){ say++; }\n  }\n}\nalert(say);</pre>", secenekler: ["8", "10", "12", "20"], dogru: 2 },
    { soru: "<code>for(i=1; i&lt;=5; i++)</code> kaç kez döner?", secenekler: ["4", "5", "6", "Sonsuz"], dogru: 1 },
    { soru: "Şart baştan yanlış olsa da en az bir kez çalışan döngü?", secenekler: ["for", "while", "do – while", "switch"], dogru: 2 },
    { soru: "Satranç tahtasında i=2, j=3 karesi hangi renk?", secenekler: ["Beyaz", "Siyah"], dogru: 1 },
    { soru: "<code>Math.floor(Math.random()*8)</code> hangi aralıkta sayı üretir?", secenekler: ["1–8", "0–7", "0–8", "1–7"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "break ve continue",
    kod: `for(i=1; i<=10; i++){
  if(i==3) continue;   // 3'ü atla, döngüye devam
  if(i==6) break;      // 6'da döngüden tamamen çık
  ekran.innerHTML += i;
}
// Sonuç: 1245`,
    gorsel: { tip: "tarayici", adres: "dongu.html", icerik: `<div id="ekran" style="font-size:24px"></div><script>var ekran=document.getElementById("ekran");for(i=1;i<=10;i++){if(i==3)continue;if(i==6)break;ekran.innerHTML+=i;}<\/script>` } }

]};
