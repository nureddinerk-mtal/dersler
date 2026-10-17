// WTUG · 34 · Olaylar ve fonksiyonlar  (Kitap s. 173–180)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "Olay (onclick vb.) + fonksiyon. Parametre ve return mantığı programlama temeli; 11E Seçmeli Programlama dersiyle bağ kurabilirsiniz.", akis: ["Olay tablosu", "Gece/gündüz canlı örneği", "Galeri, kenar, kare, mesaj uygulamaları"], hatalar: ["onclick=\"fonksiyon\" yazıp parantezi unutmak", "Fonksiyon adında büyük-küçük harf uyuşmazlığı", "return'den sonra kod yazıp çalışmasını beklemek"], sorular: [["this ne demek?", "Olayı tetikleyen elemanın kendisi."], ["Fonksiyonu nereye yazmalıyım?", "Çağrılmadan önce tanımlı olması yeter; genelde script içinde en üstte."]] },


  { tur: "bilgi", baslik: "Olay (event)",
    metin: "Kullanıcı bir şey yapar, eleman kodu çalıştırır.",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>onclick</code> <span>tıklayınca</span></div><div><code>ondblclick</code> <span>çift tıklayınca</span></div>
      <div><code>onmouseover</code> <span>fare üstüne gelince</span></div><div><code>onmouseout</code> <span>fare ayrılınca</span></div>
      <div><code>onmousedown / up</code> <span>fareye basınca / bırakınca</span></div><div><code>onfocus / onblur</code> <span>kutuya girince / çıkınca</span></div>
      <div><code>onkeydown</code> <span>klavyeden yazarken</span></div><div><code>onload</code> <span>sayfa yüklenince</span></div></div>` } },

  { tur: "bilgi", baslik: "Fonksiyon",
    kod: `function fonksiyonAdi(){   // tanımla
  //kodlar
}
fonksiyonAdi();            // çağır (istediğin kadar)`,
    not: "Kod tekrarını önler. Genellikle bir olay tarafından çağrılır: onclick=\"fonksiyonAdi()\"" },

  { tur: "ornek", baslik: "Gece / gündüz modu",
    kod: `<button type="button" onclick="darkMode()">Gece Modu</button>
<button type="button" onclick="lightMode()">Gündüz Modu</button>
<script>
function darkMode(){
  document.getElementsByTagName("body")[0].style.color="white";
  document.getElementsByTagName("body")[0].style.backgroundColor="black";
}
function lightMode(){
  document.getElementsByTagName("body")[0].style.color="black";
  document.getElementsByTagName("body")[0].style.backgroundColor="white";
}
</script>`,
    sonuc: { tip: "tarayici", adres: "mod.html", icerik: `<button type="button" onclick="darkMode()">Gece Modu</button> <button type="button" onclick="lightMode()">Gündüz Modu</button><h2>Merhaba!</h2><p>Düğmelere tıkla.</p><script>function darkMode(){document.body.style.color="white";document.body.style.backgroundColor="black";}function lightMode(){document.body.style.color="black";document.body.style.backgroundColor="white";}<\/script>` },
    not: "Düğmelere tıklayabilirsin, gerçekten çalışıyor." },

  { tur: "uygulama", baslik: "Parametresiz fonksiyon: galeri",
    metin: "Fare hangi düğmenin üstüne gelirse o resim öne çıkar.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Fare “Resim 1” üstünde", gorsel: { tip: "resim", yol: G + "34-galeri-1.png" } },
      sag: { baslik: "Fare “Resim 3” üstünde", gorsel: { tip: "resim", yol: G + "34-galeri-3.png" } }
    },
    adimlar: [
      "HTML, CSS, JS dosyalarını oluştur, bağla. Resimler klasörüne üç resim koy.",
      "#galeri: relative, 300 × 200. img: absolute, üst üste dursun.",
      "Üç düğme: onmousemove ile resmiGoster1, 2, 3.",
      "Her fonksiyon kendi resminin zIndex'ini 2, diğerlerini 1 yapsın."
    ],
    malzeme: ["gunBatimi.jpg", "kahveBilgisayar.jpg", "kumsal.jpg"],
    kitap: "s. 175–176 · 2. Uygulama" },

  { tur: "bilgi", baslik: "Parametreli fonksiyon",
    kod: `function yeniBoyut(a){
  document.getElementById(a).style.width="150px";
  document.getElementById(a).style.height="150px";
}
yeniBoyut("resim");   // a = "resim"`,
    not: "Parametre fonksiyona dışarıdan bilgi taşır. Aynı fonksiyon farklı elemanlarda çalışır." },

  { tur: "uygulama", baslik: "Kenar yuvarlama",
    gorsel: { tip: "ikili",
      sol: { baslik: "0 piksel seçili", gorsel: { tip: "resim", yol: G + "34-kenar-0.png" } },
      sag: { baslik: "50 piksel seçili", gorsel: { tip: "resim", yol: G + "34-kenar-50.png" } }
    },
    adimlar: [
      "body gri, yazı beyaz kalın. #cerceve: turuncu 100 × 100 kutu.",
      "Dört radyo düğmesi (aynı name): 0, 10, 25, 50 piksel.",
      "Hepsi onClick ile kenarYuvarla('…px') çağırsın.",
      "Fonksiyon: kutunun borderRadius'u = derece."
    ],
    kitap: "s. 177 · 3. Uygulama" },

  { tur: "uygulama", baslik: "Karesini al",
    gorsel: { tip: "resim", yol: G + "34-kare.png", yazi: "12 yazınca altında 144 çıkar." },
    adimlar: [
      "form içinde bir metin kutusu ve id=\"sonuc\" paragraf.",
      "Kutuya onkeyup=\"kareAl(this)\" ekle. this = kutunun kendisi.",
      "Fonksiyonda a.value'nun karesini al, sonuc paragrafına yaz."
    ],
    kitap: "s. 178 · 4. Uygulama (kitapta onkeypress; onkeyup son tuşu da sayar)" },

  { tur: "bilgi", baslik: "return: geriye değer döndür",
    kod: `function megaBayt(a){
  var sonuc = a * 1024;
  return sonuc;
}
var x = megaBayt(100);    // x = 102400

function birlestir(ad, soyad){
  return ad + " " + soyad;
}
alert(birlestir("Zübeyde","Bektaş"));   // Zübeyde Bektaş`,
    gorsel: { tip: "akis", adimlar: [{ simge: "📥", yazi: "100" }, { simge: "⚙️", yazi: "megaBayt" }, { simge: "📤", yazi: "102400" }] } },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Üç parametreli, geriye değer döndüren bir fonksiyon yaz. Parametreleri birbiriyle çarpsın. Sonucu alert ile göster.",
    kitap: "s. 179" },

  { tur: "uygulama", baslik: "Mesajlaşma ekranı",
    gorsel: { tip: "resim", yol: G + "34-mesaj.png", yazi: "Yazıp Gönder'e basınca mesaj saatiyle birlikte alta eklenir, kutu boşalır." },
    adimlar: [
      "Kitaptaki HTML ve CSS kodlarını yaz (genelCerceve, mesajGirisi, mesajKutulari).",
      "mesajGonder(): kutudaki değeri al.",
      "new Date() ile saat ve dakikayı al.",
      "mesajKutulari'na innerHTML += ile yeni bir div.gidenMesaj ekle, kutuyu boşalt."
    ],
    malzeme: ["profil.png"],
    kitap: "s. 179–180 · 5. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Fonksiyonun sonunda geriye değer döndüren komut?", secenekler: ["break", "return", "function", "alert"], dogru: 1 },
    { soru: "Fare bir resmin üstüne gelince büyüsün. Hangi olay?", secenekler: ["onclick", "onload", "onmouseover", "onblur"], dogru: 2 },
    { soru: "Sayfa açılır açılmaz bir fonksiyon çalışsın. Nereye yazılır?", secenekler: ["&lt;body onload=\"…\"&gt;", "&lt;body onclick=\"…\"&gt;", "&lt;head onfocus=\"…\"&gt;", "&lt;p onkeydown=\"…\"&gt;"], dogru: 0 },
    { soru: "<code>function topla(a,b){ return a*b; }</code> → <code>topla(3,4)</code> kaç döndürür?", secenekler: ["7", "12", "34", "Hata"], dogru: 1 },
    { soru: "onkeyup=\"kareAl(this)\" içindeki this neyi gönderir?", secenekler: ["Sayfayı", "Fonksiyonu", "O kutunun kendisini", "Boş değer"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Olayı JS içinden bağla",
    kod: `var buton = document.getElementById("buton1");
buton.addEventListener("click", function(){
  alert("HTML'e onclick yazmadan çalıştım!");
});`,
    not: "Büyük projelerde HTML ile JS böyle ayrı tutulur." }

]};
