// WTUG · 36 · Diziler  (Kitap s. 185–188)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "bilgi", baslik: "Dizi: tek ad, çok değer",
    gorsel: { tip: "html", icerik: `<div style="font-family:Consolas,monospace;text-align:center"><div style="font-weight:bold;margin-bottom:6px">sehirler</div><div style="display:flex;justify-content:center;flex-wrap:wrap">
      ${["İzmir","İstanbul","Ankara","Bursa","Ordu"].map((s,i)=>`<div><div style="border:2px solid #2f80ed;padding:12px 10px;min-width:70px;background:#eaf2fd">"${s}"</div><div style="color:#eb5757;font-weight:bold">[${i}]</div></div>`).join("")}</div></div>` },
    not: "Beş ayrı değişken yerine tek dizi. İlk sıra numarası 0." },

  { tur: "bilgi", baslik: "Tanımla, ata, oku",
    kod: `var sehirler = [];                                    // boş dizi
sehirler = ["İzmir","İstanbul","Ankara","Bursa","Ordu"]; // toplu ata
sehirler[1] = "İstanbul";                              // tek tek ata
alert("Web sayfasına " + sehirler[4] + " ilinden bağlanıyorsunuz");`,
    not: "Seçicilerdeki [0] de buradan gelir: id dışındaki seçiciler dizi döndürür." },

  { tur: "bilgi", baslik: "Dizi fonksiyonları",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>push(x)</code> <span>sona eleman ekle</span></div><div><code>pop()</code> <span>sondakini çıkar</span></div>
      <div><code>length</code> <span>eleman sayısı</span></div><div><code>sort()</code> <span>A'dan Z'ye sırala</span></div>
      <div><code>reverse()</code> <span>ters çevir</span></div><div><code>indexOf(x)</code> <span>x kaçıncı sırada? (yoksa -1)</span></div></div>` },
    not: "Kitapta length() yazıyor; doğrusu parantezsiz: urunler.length" },

  { tur: "ornek", baslik: "Fonksiyonlar çalışırken",
    kod: `var urunler = ["kalem","defter","silgi"];
urunler.push("cetvel");     // kalem,defter,silgi,cetvel
urunler.sort();             // cetvel,defter,kalem,silgi
urunler.pop();              // cetvel,defter,kalem
urunler.length;             // 3
urunler.indexOf("defter");  // 1`,
    sonuc: { tip: "tarayici", adres: "dizi.html", icerik: `<div id="e" style="font-family:Consolas,monospace;font-size:16px;line-height:1.7"></div><script>var e=document.getElementById("e");var u=["kalem","defter","silgi"];u.push("cetvel");e.innerHTML+="push → "+u+"<br>";u.sort();e.innerHTML+="sort → "+u+"<br>";u.pop();e.innerHTML+="pop → "+u+"<br>";e.innerHTML+="length → "+u.length+"<br>";e.innerHTML+="indexOf(\\"defter\\") → "+u.indexOf("defter");<\/script>` } },

  { tur: "uygulama", baslik: "Not ortalaması",
    gorsel: { tip: "resim", yol: G + "36-ortalama.png" },
    adimlar: [
      "Üç dizi: matematik=[60,90,100], tarih=[80,80], fizik=[100,90,75].",
      "Boş bir ortalamalar dizisi tanımla (kitapta unutulmuş: var ortalamalar=[];).",
      "Her dersin ortalamasını push ile ortalamalar'a ekle.",
      "Üç ortalamanın ortalamasını alert ile göster."
    ],
    kitap: "s. 187 · 10. Uygulama" },

  { tur: "uygulama", baslik: "Dijital sözlük",
    gorsel: { tip: "resim", yol: G + "36-sozluk.png", yazi: "computer yazıp Çevir'e basınca." },
    adimlar: [
      "body turuncu. Kutu (id=\"arananKelime\"), Çevir düğmesi, id=\"turkce\" h3.",
      "Fonksiyondan önce iki dizi: ingilizce ve turkce (aynı sırada dokuz kelime).",
      "cevir(): indexOf ile kelimenin sıra numarasını bul.",
      "Bulunduysa (siraNo>=0) h3'e turkce[siraNo] yaz."
    ],
    kitap: "s. 187–188 · 11. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 <code>getElementsByClassName(\"kutular\")[3]</code> kaçıncı elemanı seçer?", secenekler: ["3.", "4.", "2.", "Sonuncuyu"], dogru: 1 },
    { soru: "📖 <code>sehirler = [\"İzmir\",\"İstanbul\",\"Ankara\",\"Bursa\",\"Ordu\"]</code> → dizisiz yazınca sehir3 hangisi olur?", secenekler: ["İstanbul", "Ankara", "Bursa", "Ordu"], dogru: 1 },
    { soru: "Sözlükte olmayan bir kelime aranırsa indexOf ne döndürür?", secenekler: ["0", "-1", "null", "Hata"], dogru: 1 },
    { soru: "<code>var a=[5,8,2]; a.push(9); a.pop(); a.pop();</code> → a?", secenekler: ["[5,8]", "[5,8,2]", "[8,2]", "[5]"], dogru: 0 },
    { soru: "Dizide kaç eleman olduğunu veren?", secenekler: ["a.size", "a.length", "a.count()", "a.sort()"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Diziyi tek satırda birleştir",
    kod: `var notalar = ["do","re","mi"];
notalar.join(" - ");   // "do - re - mi"`,
    not: "join, dizi elemanlarını araya istediğin işareti koyarak tek metne çevirir." }

]};
