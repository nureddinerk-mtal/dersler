// WTUG · 35 · Karar yapıları: if, else, else if, switch  (Kitap s. 180–185)
var G = "gorsel/wtug/";
window.KONU = { slaytlar: [

  { tur: "hoca", ozet: "if, else, else if, switch. Net kontrolü örneği sınır değerleri (10, 25, 40) üzerinden tartıştırmak için çok uygun.", akis: ["Yol ayrımı görseli", "if / else / else if", "Mod, net, gün uygulamaları"], hatalar: ["if(x=5) yazmak (atama, karşılaştırma değil)", "switch'te break unutmak", "else'ten sonra şart yazmak"], sorular: [["switch mi if mi?", "Tek değişkenin sabit değerlerine göre dallanıyorsa switch daha okunaklı."], ["Birden fazla şart?", "&amp;&amp; (ve), || (veya)."]] },


  { tur: "bilgi", baslik: "Yol ayrımı",
    gorsel: { tip: "html", icerik: `<svg viewBox="0 0 420 170" style="max-width:420px;width:100%;font-family:Segoe UI,Arial">
      <rect x="150" y="6" width="120" height="40" rx="8" fill="#9b51e0"/><text x="210" y="31" fill="#fff" text-anchor="middle" font-size="15">Şart?</text>
      <path d="M180 46 L90 100" stroke="#27ae60" stroke-width="3"/><path d="M240 46 L330 100" stroke="#eb5757" stroke-width="3"/>
      <text x="112" y="72" fill="#27ae60" font-weight="bold">true</text><text x="282" y="72" fill="#eb5757" font-weight="bold">false</text>
      <rect x="20" y="100" width="140" height="44" rx="8" fill="#27ae60"/><text x="90" y="127" fill="#fff" text-anchor="middle" font-size="14">if kodları çalışır</text>
      <rect x="260" y="100" width="140" height="44" rx="8" fill="#eb5757"/><text x="330" y="127" fill="#fff" text-anchor="middle" font-size="14">else kodları çalışır</text></svg>` },
    not: "Örnek: kullanıcının cevaplarına göre test sonucu ekrana yazılır." },

  { tur: "bilgi", baslik: "if",
    kod: `if(dakika >= 15){
  document.getElementById("reklam").style.display="none";
}`,
    not: "Şart doğruysa (true) süslü parantezdeki kodlar çalışır. Yanlışsa hiçbir şey olmaz." },

  { tur: "ornek", baslik: "15 dakika sonra reklamı kaldır",
    kod: `function reklamKaldir(){
  var d = new Date();
  var dakika = d.getMinutes();
  if(dakika >= 15){
    document.getElementById("reklam").style.display="none";
  }
}
// HTML: <body onload="reklamKaldir()">`,
    not: "6. Uygulama (s. 181). new Date() bilgisayarın saatini verir." },

  { tur: "bilgi", baslik: "Birden çok şart",
    kod: `if(katNo==8 && daireNo==32){ }                 // ikisi de doğru olmalı
if(ay=="Haziran" || ay=="Temmuz" || ay=="Ağustos"){ }  // biri yeter`,
    gorsel: { tip: "kartlar", kartlar: [{ ust: "&amp;&amp; ve", alt: "hepsi true → true" }, { ust: "|| veya", alt: "biri true → true" }] } },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "Kullanıcı adı ve şifre kutuları yap. Kullanıcı adı “Javascript” ve şifre “12345” ise “Girişiniz Onaylandı.”, değilse “Girişiniz Onaylanmadı.” mesajı çıksın.",
    kitap: "s. 182" },

  { tur: "bilgi", baslik: "if – else",
    kod: `if(şart){
  // şart doğruysa
}
else{
  // şart yanlışsa
}`,
    not: "else: “değilse, aksi durumda”. İki yoldan biri mutlaka çalışır." },

  { tur: "uygulama", baslik: "Görüntü modu",
    gorsel: { tip: "ikili",
      sol: { baslik: "Açılış", gorsel: { tip: "resim", yol: G + "35-mod-once.png" } },
      sag: { baslik: "Evet + Mod Ayarla", gorsel: { tip: "resim", yol: G + "35-mod-sonra.png" } }
    },
    adimlar: [
      "Gri div içinde form: soru metni, id'leri evet ve hayır olan iki radyo, Mod Ayarla düğmesi.",
      "Düğme onclick=\"modDegis()\".",
      "evet işaretliyse (checked==true) body siyah, yazı beyaz; değilse tersi."
    ],
    kitap: "s. 182–183 · 7. Uygulama" },

  { tur: "bilgi", baslik: "else if: daha çok yol",
    gorsel: { tip: "akis", adimlar: [
      { yazi: "&lt; 0", alt: "Geçersiz" }, { yazi: "&lt; 10", alt: "altında" }, { yazi: "&lt; 25", alt: "yakın" }, { yazi: "≤ 40", alt: "üstünde" }, { yazi: "else", alt: "Geçersiz" }
    ]},
    not: "Yukarıdan aşağı sınanır. İlk doğru olan çalışır, gerisine bakılmaz." },

  { tur: "uygulama", baslik: "Net kontrolü",
    gorsel: { tip: "resim", yol: G + "35-net.png", yazi: "30 yazıp Kontrol Et'e basınca." },
    adimlar: [
      "id=\"netler\" kutu, Kontrol Et düğmesi, id=\"ekran\" paragraf.",
      "kontrol(): kutudaki değeri netSayisi değişkenine al.",
      "if / else if / else ile beş durumu ekran paragrafına innerText olarak yaz."
    ],
    kitap: "s. 183–184 · 8. Uygulama" },

  { tur: "bilgi", baslik: "switch – case",
    kod: `switch(gun){
  case 0:
    alert("Pazar");
    break;
  case 1:
    alert("Pazartesi");
    break;
  default:
    alert("Bilinmiyor");
}`,
    not: "Değer hangi case ile eşleşirse o çalışır. break: switch'ten çık. Hiçbiri tutmazsa default." },

  { tur: "uygulama", baslik: "Bugün hangi gün?",
    gorsel: { tip: "resim", yol: G + "35-gun.png", yazi: "Senin ekranında bugünün adı çıkar." },
    adimlar: [
      "Kontrol Et düğmesi: onclick=\"hangiGun()\".",
      "var gun = new Date().getDay();  (0 = Pazar … 6 = Cumartesi)",
      "switch ile yedi case, her birinde alert ve break."
    ],
    kitap: "s. 185 · 9. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 JavaScript'teki kontrol yapılarından biri değildir?", secenekler: ["if", "if – else", "switch – case", "for"], dogru: 3 },
    { soru: "Net kontrolünde 25 yazılırsa hangi mesaj çıkar?", secenekler: ["ortalamanın altında", "ortalamaya yakın", "ortalamanın üstünde", "Geçersiz sayı!"], dogru: 2 },
    { soru: "switch'te break unutulursa?", secenekler: ["Hata verir", "Alttaki case'ler de çalışır", "Hiçbiri çalışmaz", "default çalışmaz"], dogru: 1 },
    { soru: "Yaş 18 ve üstü <u>veya</u> velisi izin verdiyse girebilir. Doğru şart?", secenekler: ["yas>=18 && izin==true", "yas>=18 || izin==true", "!(yas>=18)", "yas=18 || izin=true"], dogru: 1 },
    { soru: "Radyo düğmesinin işaretli olup olmadığını veren özellik?", secenekler: ["value", "checked", "selected", "innerText"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Tek satırda if: ? :",
    kod: `var sonuc = (not >= 50) ? "Geçti" : "Kaldı";`,
    not: "Şart ? doğruysa : yanlışsa. Kısa kararlar için." }

]};
