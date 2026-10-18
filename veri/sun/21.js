// SUN · 21 · HTTPS ve dizinlere göz atma  (Kitap s. 266–272)
window.KONU = { dil: "html", slaytlar: [

  { tur: "hoca",
    ozet: "5.1.3: HTTP açık yazım (clear text) kullanır; ağı izleyen biri içeriği okuyabilir. HTTPS güvenlik sertifikasıyla veriyi şifreler (kriptolar); özellikle kullanıcıdan veri alan dinamik sitelerde önerilir. 3. Uygulama: wwwroot\\VeriAl\\index.html (ad, soyad formu; kod kitapta); IIS → sunucu simgesi → <b>Sunucu Sertifikaları</b> → Eylemler → <b>Otomatik Olarak İmzalanan Sertifika Oluştur</b> (ad: sertifika1); Web Sitesi Ekle: tür https (port 443 olur), ana bilgisayar adı www.verial.local, SSL sertifikası sertifika1; DNS: verial.local + www A kaydı; tarayıcıda https://www.verial.local → “Bu site güvenli değil” uyarısı → Ek bilgi / Gelişmiş → Web sayfasına gidin. Sertifika türleri: Sertifika İsteği Oluştur (internet için ücretli, sertifika otoritesinden), Etki Alanı Sertifikası Oluştur (kurumsal), Otomatik Olarak İmzalanan (sadece yerel ağ, otorite onayı yok). 5.1.4 Dizinlere göz atma: web arayüzünde dosyaları listeleyip indirme (değiştirme/silme yok). 4. Uygulama: wwwroot\\Belgeler'e dosyalar; site ana bilgisayar adı gozat.belgeler.local; site → <b>Dizinlere Gözatma</b> → Eylemler → Etkinleştir; DNS: belgeler.local + gozat A kaydı; http://gozat.belgeler.local.",
    akis: ["HTTP neden güvensiz?", "HTTPS ve sertifika türleri", "3. Uygulama: kendinden imzalı sertifikayla HTTPS", "Tarayıcı uyarısı neden çıkıyor?", "Dizinlere göz atma", "4. Uygulama", "Test"],
    hatalar: ["Kendinden imzalı sertifika her tarayıcıda uyarı verir; normaldir. Öğrencilere bu uyarıyı internetteki gerçek sitelerde görürlerse devam etmemeleri gerektiğini mutlaka söyleyin.", "Sertifika adı (localhost ya da sunucu adı) ile adres (www.verial.local) farklı olduğu için tarayıcı ayrıca ad uyuşmazlığı uyarısı da verir.", "Form “Gönder”e basınca 405 hatası verebilir (statik sayfa POST kabul etmez); uygulamanın amacı HTTPS yayını, formun çalışması değil.", "Dizinlere Gözatma etkinleştirilmezse “403 – Forbidden” hatası çıkar.", "Kitap 3. Uygulamada güvenlik duvarı kuralından söz etmiyor; 443 için “Dünya Çapında Web Hizmetleri (HTTPS Trafiği-Gelen)” kuralı IIS kurulunca genelde kendiliğinden açılır."],
    sorular: [["HTTPS adres çubuğundaki kilit ne demek?", "Bağlantı şifreli ve sertifika güvenilir bir otorite tarafından onaylanmış demek."], ["Dizinlere göz atma güvenli mi?", "Klasördeki her şey herkese açılır; yalnızca paylaşılması istenen dosyalar konmalı."]],
    kod: `<!-- 3. Uygulama · C:\\inetpub\\wwwroot\\VeriAl\\index.html (kitaptaki kod) -->
<html>
<title>Hos Geldiniz</title>
<body>
<form method="post">
Ad.....:<input type="text" name="ad">
<br>
Soyad:<input type="text" name="soyad">
<br>
<input type="submit" value="Gönder">
</form>
</body>
</html>` },

  { tur: "bilgi", baslik: "HTTP ve HTTPS",
    gorsel: { tip: "ikili",
      sol: { baslik: "🔓 HTTP · 80", gorsel: { tip: "kartlar", kartlar: [ { ust: "ad=Ayşe&parola=1234", alt: "ağı izleyen biri okuyabilir" } ] } },
      sag: { baslik: "🔒 HTTPS · 443", gorsel: { tip: "kartlar", kartlar: [ { ust: "x7#Kq!9zR@2…", alt: "sertifikayla şifrelenir" } ] } },
      ok: "➜" } },

  { tur: "bilgi", baslik: "Sertifika türleri",
    gorsel: { tip: "tablo", sutunlar: ["IIS seçeneği", "Nerede geçerli?"], satirlar: [
      ["Sertifika İsteği Oluştur", "internet; sertifika otoritesinden (ücretli)"],
      ["Etki Alanı Sertifikası Oluştur", "kurumun etki alanı"],
      ["Otomatik Olarak İmzalanan Sertifika Oluştur", "yalnızca yerel ağ; otorite onayı yok"]] },
    metin: "IIS Yöneticisi → sunucu simgesi → <b>Sunucu Sertifikaları</b>." },

  { tur: "uygulama", baslik: "3. Uygulama · https://www.verial.local",
    metin: "Ad-soyad formu olan VeriAl sitesi HTTPS ile açılsın.",
    gorsel: [
      { tip: "pencere", baslik: "Web Sitesi Ekle", satirlar: [ { etiket: "Site adı", deger: "VeriAl" }, { etiket: "Fiziksel yol", deger: "C:\\inetpub\\wwwroot\\VeriAl" }, { etiket: "Tür", deger: "https" }, { etiket: "Bağlantı noktası", deger: "443" }, { etiket: "Ana bilgisayar adı", deger: "www.verial.local" }, { etiket: "SSL sertifikası", deger: "sertifika1" } ], dugmeler: ["Tamam"], vurgu: "Tamam" },
      { tip: "tarayici", adres: "⚠ https://www.verial.local", icerik: "<form>Ad.....:<input> <br>Soyad:<input> <br><input type='submit' value='Gönder'></form>" }
    ],
    adimlar: ["wwwroot içinde <b>VeriAl</b> klasörü ve kitaptaki kodla <b>index.html</b>.", "IIS → sunucu → Sunucu Sertifikaları → <b>Otomatik Olarak İmzalanan Sertifika Oluştur</b>: sertifika1.", "Web Sitesi Ekle: tür <b>https</b>, ana bilgisayar adı www.verial.local, SSL sertifikası sertifika1.", "DNS'te <b>verial.local</b> bölgesi ve <b>www</b> A kaydı.", "Tarayıcıda https://www.verial.local; uyarıda Gelişmiş → siteye devam et."],
    kitap: "s. 267–270 · 3. Uygulama" },

  { tur: "uygulama", baslik: "4. Uygulama · Dizinlere göz at",
    metin: "Belgeler klasöründeki dosyalar web sayfasında listelensin, indirilebilsin.",
    gorsel: { tip: "tarayici", adres: "http://gozat.belgeler.local", icerik: "<h2>gozat.belgeler.local - /</h2><hr><pre>18.10.2026  10:42        52 224 <a href='#'>ders_notu.docx</a>\n18.10.2026  10:43       812 004 <a href='#'>logo.png</a>\n18.10.2026  10:43        14 336 <a href='#'>notlar.xlsx</a>\n18.10.2026  10:44     3 145 728 <a href='#'>sunum.pptx</a></pre><hr>" },
    adimlar: ["wwwroot içinde <b>Belgeler</b> klasörü; içine birkaç dosya kopyala.", "Bu klasör için ana bilgisayar adı <b>gozat.belgeler.local</b> olan site oluştur.", "Siteyi seç → <b>Dizinlere Gözatma</b> → Eylemler → Etkinleştir.", "DNS'te <b>belgeler.local</b> bölgesi ve <b>gozat</b> A kaydı.", "Tarayıcıda http://gozat.belgeler.local."],
    kitap: "s. 270–272 · 4. Uygulama" },

  { tur: "test", sorular: [
    { soru: "Varsayılan HTTPS bağlantı noktası hangisidir?", secenekler: ["21", "80", "443", "8080"], dogru: 2 },
    { soru: "Yalnızca yerel ağda geçerli, otorite onayı olmayan sertifika hangisiyle oluşturulur?", secenekler: ["Sertifika İsteği Oluştur", "Etki Alanı Sertifikası Oluştur", "Otomatik Olarak İmzalanan Sertifika Oluştur", "Sertifikayı Al"], dogru: 2 },
    { soru: "HTTP neden güvensizdir?", secenekler: ["Yavaş olduğu için", "Veriyi açık yazımla gönderdiği için", "Sadece resim gönderdiği için", "Port kullanmadığı için"], dogru: 1 },
    { soru: "Dosyaların web sayfasında listelenmesi için hangi özellik etkinleştirilir?", secenekler: ["Varsayılan Belge", "Dizinlere Gözatma", "Kimlik Doğrulama", "SSL Ayarları"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Gerçek sertifikalar",
    adimlar: ["Tarayıcında https://www.meb.gov.tr aç, kilit simgesine tıkla.", "Sertifikayı kim vermiş, ne zamana kadar geçerli?", "Let's Encrypt'i araştır: neden ücretsiz sertifika veriyor?"],
    not: "Bugün internetteki sitelerin çok büyük kısmı HTTPS kullanır; tarayıcılar HTTP sitelerini “Güvenli değil” diye işaretler." }

]};
