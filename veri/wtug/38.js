// WTUG · 38 · Zamanlayıcılar ve jQuery  (Kitap s. 193–200)
var G = "gorsel/wtug/";
var JQ = '<script src="https://code.jquery.com/jquery-3.6.0.min.js"><\/script>';
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "İki zamanlayıcı",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "⏱️ setTimeout", alt: "Süre dolunca bir kez çalışır" },
      { ust: "🔁 setInterval", alt: "Her süre dolduğunda tekrar çalışır. clearInterval ile durur." }
    ]},
    kod: `setTimeout(() => {
  document.getElementById("reklam").style.display="none";
}, 5000);               // 5 sn sonra bir kez

var a = setInterval(function(){
  sayac = sayac - 1;
  document.getElementById("ekran").innerHTML = sayac;
  if(sayac==0){ clearInterval(a); }
}, 3000);               // her 3 sn'de bir`,
    not: "Süre milisaniye: 1000 = 1 saniye." },

  { tur: "ornek", baslik: "Geri sayım",
    kod: `var sayac=10;
var a=setInterval(function(){
  sayac=sayac-1;
  document.getElementById("ekran").innerHTML=sayac;
  if(sayac==0){ clearInterval(a); }
},1000);`,
    sonuc: { tip: "tarayici", adres: "sayac.html", icerik: `<h1 id="ekran">10</h1><button onclick="location.reload()">Yeniden</button><script>var sayac=10;var a=setInterval(function(){sayac=sayac-1;document.getElementById("ekran").innerHTML=sayac;if(sayac==0){clearInterval(a);}},1000);<\/script>` },
    not: "Kitapta 3000 (3 sn). Burada beklememek için 1000." },

  { tur: "uygulama", baslik: "Rastgele melodi",
    gorsel: { tip: "resim", yol: G + "38-nota.png", yazi: "Her 2 saniyede bir rastgele nota eklenir. Seninki farklı olur." },
    adimlar: [
      "id=\"potre\" h3, Melodi Başlat ve Melodi Durdur düğmeleri.",
      "Yedi notalık dizi: do re mi fa sol la si.",
      "melodiBaslat(): setInterval ile 2000 ms'de bir rastgele nota + \"_\" ekle.",
      "melodiDurdur(): clearInterval(metronom)."
    ],
    kitap: "s. 194 · 16. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Sayfaya 60'tan 0'a kadar sayıları bir dakika boyunca yazdır. Son dört sayı rakamla değil yazıyla çıksın: üç, iki, bir, sıfır.",
    kitap: "s. 194" },

  { tur: "bilgi", baslik: "JavaScript kütüphaneleri",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "jQuery", alt: "Az kodla çok iş. Bu konuda bunu öğreniyoruz." },
      { ust: "React", alt: "Bileşen tabanlı arayüz" },
      { ust: "Angular", alt: "Büyük uygulamalar" },
      { ust: "Vue", alt: "Kolay öğrenilen arayüz" }
    ]},
    kod: `<script src="https://code.jquery.com/jquery-3.6.0.js"></script>`,
    not: "jQuery ayrı bir dil değil, JavaScript kütüphanesi. Bağlantısı head içine yazılır." },

  { tur: "bilgi", baslik: "jQuery ile kısa yazım",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>$("#icerik")</code> <span>getElementById("icerik")</span></div>
      <div><code>$(".icerik")</code> <span>getElementsByClassName("icerik")</span></div>
      <div><code>$("p")</code> <span>getElementsByTagName("p")</span></div>
      <div><code>.html()</code> <span>innerHTML</span></div><div><code>.text()</code> <span>innerText</span></div><div><code>.val()</code> <span>value</span></div></div>` },
    kod: `$(document).ready(function(){
  $("#buton1").click(function(){
    // tıklanınca çalışacak kodlar
  });
});`,
    not: "ready: sayfa tamamen yüklenince çalışır. Neredeyse tüm jQuery kodu bunun içine yazılır." },

  { tur: "ornek", baslik: "Efektler",
    kod: `$("#kutu").hide(1000);      // gizle (yeri kapanır)
$("#kutu").show(1000);      // göster
$("#kutu").fadeOut(1000);   // solarak kaybol
$("#kutu").fadeIn(1000);    // belirerek gel
$("#kutu").slideUp(500);    // yukarı kayarak kapan
$("#kutu").slideDown(500);  // aşağı kayarak açıl
$("#kutu").animate({left:'250px', width:'150px'}, 1000);`,
    sonuc: { tip: "tarayici", adres: "efekt.html", icerik: JQ + `<button id="b1">hide</button> <button id="b2">show</button> <button id="b3">fadeOut</button> <button id="b4">fadeIn</button> <button id="b5">slideUp</button> <button id="b6">slideDown</button> <button id="b7">animate</button>
<div style="position:relative;height:120px;margin-top:8px"><div id="kutu" style="position:absolute;left:0;width:80px;height:80px;background:tomato;color:#fff;text-align:center;line-height:80px">Kutu</div></div>
<script>$(function(){$("#b1").click(()=>$("#kutu").hide(1000));$("#b2").click(()=>$("#kutu").show(1000));$("#b3").click(()=>$("#kutu").fadeOut(1000));$("#b4").click(()=>$("#kutu").fadeIn(1000));$("#b5").click(()=>$("#kutu").slideUp(500));$("#b6").click(()=>$("#kutu").slideDown(500));$("#b7").click(()=>$("#kutu").css({left:0,width:80}).animate({left:"250px",width:"150px"},1000));});<\/script>` },
    not: "Düğmelere bas, efekti gör." },

  { tur: "uygulama", baslik: "Metni aktar",
    gorsel: { tip: "resim", yol: G + "38-aktar.png", yazi: "Yazıp Metni Aktar'a basınca: üstte h3 başlık olarak, altta düz metin." },
    adimlar: [
      "head'e jQuery bağlantısı. body mor, yazı beyaz.",
      "Kutu (id=\"aciklama\"), düğme (id=\"buton1\"), iki paragraf (icerik1, icerik2).",
      "ready içinde #buton1 click: kutudaki değeri val() ile al.",
      "icerik1'e html() ile h3 içinde, icerik2'ye text() ile yaz."
    ],
    kitap: "s. 197–198 · 17. Uygulama" },

  { tur: "bilgi", baslik: "İçerik ekle, çıkar, boya",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>append()</code> <span>içine, sona ekle</span></div><div><code>prepend()</code> <span>içine, başa ekle</span></div>
      <div><code>before()</code> <span>elemanın önüne ekle</span></div><div><code>after()</code> <span>elemanın arkasına ekle</span></div>
      <div><code>empty()</code> <span>içini boşalt</span></div><div><code>remove()</code> <span>elemanı tamamen kaldır</span></div>
      <div><code>css({…})</code> <span>stil değiştir</span></div></div>` },
    kod: `$("#kutu").css({"background-color":"orange", "font-size":"16px"});` },

  { tur: "uygulama", baslik: "Kutularla oyna",
    gorsel: { tip: "ikili",
      sol: { baslik: "Açılış", gorsel: { tip: "resim", yol: G + "38-kutular-once.png" } },
      sag: { baslik: "Boya → Kutu 2'den Sonra Ekle → Kutu 4'ü Boşalt", gorsel: { tip: "resim", yol: G + "38-kutular-sonra.png" } }
    },
    adimlar: [
      "HTML, CSS, JS dosyaları + jQuery bağlantısı. body darkslateblue, yazı beyaz.",
      "#cerceve içinde dört span kutu, altında yedi düğme (islem1 … islem7).",
      "span: 50 × 50, beyaz, inline-block. input: 240px genişlik.",
      "Her düğmeye bir fonksiyon: css, before, after, prepend, append, empty, remove."
    ],
    kitap: "s. 198–199 · 18. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 id=\"ekran\" olan elemanı gri arka plan, turuncu yazı yapan jQuery kodu?", secenekler: [
      "$(document).ready(function(){ $(\"#ekran\").css({\"background-color\":\"gray\",\"color\":\"orange\"}); });",
      "$(document).ready(function(){ $(\".ekran\").css({\"background-color\":\"gray\",\"color\":\"orange\"}); });",
      "document.ready(function(){ $(\"ekran\").html(\"gray\"); });",
      "$(\"#ekran\").ready(function(){ alert(\"gray\"); });"], dogru: 0, kod: true },
    { soru: "Her 2 saniyede bir tekrar eden zamanlayıcı?", secenekler: ["setTimeout(…, 2000)", "setInterval(…, 2000)", "setInterval(…, 2)", "clearInterval(2000)"], dogru: 1 },
    { soru: "Kutu 4'ün sadece içi boşalsın, kendisi kalsın?", secenekler: ["remove()", "empty()", "hide()", "pop()"], dogru: 1 },
    { soru: "jQuery'de innerText'in karşılığı?", secenekler: ["html()", "val()", "text()", "css()"], dogru: 2 },
    { soru: "Eleman gizlenince yerine başkası <u>yerleşmeyen</u> efekt?", secenekler: ["hide", "slideUp", "fadeOut", "remove"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "jQuery ile tıklayınca aç-kapa",
    kod: `$("#baslik").click(function(){
  $("#icerik").slideToggle(400);
});`,
    gorsel: { tip: "tarayici", adres: "sss.html", icerik: JQ + `<h3 id="baslik" style="cursor:pointer;background:#2f80ed;color:#fff;padding:8px;margin:0">❓ JavaScript zor mu? (tıkla)</h3><p id="icerik" style="background:#eaf2fd;padding:8px;margin:0">Hayır! Her gün biraz yazınca kolaylaşır.</p><script>$("#baslik").click(function(){$("#icerik").slideToggle(400);});<\/script>` },
    not: "toggle: açıksa kapatır, kapalıysa açar. Sık sorulan sorular sayfalarında çok kullanılır." }

]};
