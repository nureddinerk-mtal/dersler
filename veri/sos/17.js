// SOS · 17 · Veri toplama, veri kaynakları ve veri kümesi dosyaları  (Kitap s. 132–136)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.3: <b>Doğrudan ölçme</b>: özellik kendi cinsinden birimle ölçülür (ağırlık-birim ağırlık, uzunluk-birim uzunluk) → ratio. <b>Dolaylı ölçme</b>: başka bir araçla (sınavlar) → interval. Yöntemler: gözlem, deney (bağımlı değişken: zekâ; bağımsız: beslenme, sosyal çevre), anket, görüşme. Kaynaklar: <b>birincil</b> (araştırmacı doğrudan toplar: termometreyle günlük ölçüm) / <b>ikincil</b> (başkasının topladığı: Meteoroloji'nin sitesinden sıcaklık). Veri kümesi (data set): yapılandırılmış, yarı yapılandırılmış ya da yapılandırılmamış veri dosyası; en sık <b>CSV</b> (virgül/noktalı virgülle ayrılmış), <b>JSON</b> (isim/değer çiftleri), <b>XML</b> (iç içe etiketler, ağaç). Kitap üç biçimde de 2016–2020 doğum sayılarını veriyor. 1. Uygulama (2 ders saati): arkadaşlarının ad, soyad, telefon, e-posta, adres listesi → çevrimiçi editörle CSV/JSON/XML → indir → çevrimiçi araçla başka biçime çevir.",
    akis: ["Doğrudan / dolaylı ölçme", "4 veri toplama yöntemi", "Birincil / ikincil kaynak", "Veri kümesi: CSV, JSON, XML", "1. Uygulama", "Test"],
    hatalar: ["<b>1. Uygulama gerçek telefon, e-posta ve adres bilgisi topluyor ve bunları çevrimiçi sitelere yüklettiriyor: kişisel veri (KVKK) riski.</b> Öğrencilere <b>uydurma</b> kişi bilgileri kullandırın; çevrimiçi editör yerine Not Defteri / VS Code ya da Excel'in “farklı kaydet → CSV” özelliği yeterli.", "Kitap CSV'yi “Comma-Separated Variables” diye açıyor; yaygın açılımı <b>Comma-Separated Values</b>.", "Türkçe Excel CSV'yi noktalı virgülle kaydeder (ondalık ayırıcı virgül olduğu için); kitap örneği de noktalı virgüllü.", "11E'deki Web Tabanlı Uygulama dersinden JSON'u bilen öğrenci yok (11D); JSON'u “etiket: değer” kartları gibi anlatın."],
    sorular: [["Sınav puanı neden dolaylı ölçme?", "Bilgi doğrudan ölçülemez; sınav aracılığıyla ölçülür."], ["Bir web sitesinden indirdiğim tablo hangi kaynak?", "İkincil; başkası toplamış."]] },

  { tur: "bilgi", baslik: "Ölçme ve yöntemler",
    gorsel: { tip: "ikili",
      sol: { baslik: "📏 Ölçme", gorsel: { tip: "kartlar", kartlar: [ { ust: "Doğrudan", alt: "kendi birimiyle: ağırlık, uzunluk → ratio" }, { ust: "Dolaylı", alt: "başka araçla: sınav → interval" } ] } },
      sag: { baslik: "🧰 Yöntemler", gorsel: { tip: "kartlar", kartlar: [ { ust: "👀 Gözlem" }, { ust: "🧪 Deney" }, { ust: "📝 Anket" }, { ust: "🎤 Görüşme" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Veri kaynakları",
    gorsel: { tip: "ikili",
      sol: { baslik: "1️⃣ Birincil", gorsel: { tip: "akis", adimlar: [ { simge: "🌡️", yazi: "Termometreyle her gün ölç" }, { simge: "📝", yazi: "Listeye yaz" } ] } },
      sag: { baslik: "2️⃣ İkincil", gorsel: { tip: "akis", adimlar: [ { simge: "🌐", yazi: "Meteoroloji'nin sitesi" }, { simge: "⬇️", yazi: "Hazır veriyi al" } ] } },
      ok: "≠" },
    metin: "Birincil: veriyi <b>sen</b> toplarsın. İkincil: <b>başkası</b> toplamıştır." },

  { tur: "bilgi", baslik: "Aynı veri, üç dosya",
    gorsel: [
      { tip: "terminal", baslik: "dogum.csv", satirlar: ["Yil; Doğum Sayısı", "2016; 1315423", "2017; 1298451", "…"] },
      { tip: "terminal", baslik: "dogum.json", satirlar: ["[", "  { \"Yil\": 2016, \"DogumSayisi\": 1315423 },", "  { \"Yil\": 2017, \"DogumSayisi\": 1298451 },", "  …", "]"] },
      { tip: "terminal", baslik: "dogum.xml", satirlar: ["<root>", "  <row><Yil>2016</Yil><DogumSayisi>1315423</DogumSayisi></row>", "  <row><Yil>2017</Yil><DogumSayisi>1298451</DogumSayisi></row>", "  …", "</root>"] } ],
    metin: "<b>CSV</b>: ayraçla ayrılmış satırlar · <b>JSON</b>: isim/değer çiftleri · <b>XML</b>: iç içe etiketler." },

  { tur: "uygulama", baslik: "1. Uygulama · Veri kümesi dosyası",
    metin: "Bir iletişim listesini CSV, JSON ya da XML olarak kaydet, sonra başka bir biçime çevir.",
    gorsel: { tip: "ikili",
      sol: { baslik: "liste.csv", gorsel: { tip: "terminal", baslik: "liste.csv", satirlar: ["Ad;Soyad;Telefon;Eposta;Adres", "…;…;…;…;…"] } },
      sag: { baslik: "liste.json", gorsel: { tip: "terminal", baslik: "liste.json", satirlar: ["[", "  { \"Ad\": \"…\", \"Soyad\": \"…\", … }", "]"] } },
      ok: "➜" },
    adimlar: ["Ad, soyad, telefon, e-posta ve adres sütunlu bir liste yap (bilgiler uydurma olsun).", "Bir dosya türü seç: CSV, JSON ya da XML.", "Bir editörde veriyi o biçimde yaz.", "Dosyayı bilgisayarına kaydet.", "Bir dönüştürme aracıyla başka bir biçime çevir, onu da kaydet."],
    kitap: "s. 134–135 · 1. Uygulama" },

  { tur: "test", sorular: [
    { soru: "Mezura ile öğrencilerin boyunu ölçmek hangi ölçmedir?", secenekler: ["Nitel", "Dolaylı", "İkincil", "Doğrudan"], dogru: 3 },
    { soru: "TÜİK sitesinden nüfus verisini almak hangi kaynaktır?", secenekler: ["İkincil", "Birincil", "Deney", "Gözlem"], dogru: 0 },
    { soru: "İsim/değer çiftleri üzerine kurulu veri dosyası hangisidir?", secenekler: ["CSV", "XML", "JSON", "TXT"], dogru: 2 },
    { soru: "Verinin iç içe etiketlerle ağaç yapısında tutulduğu dosya hangisidir?", secenekler: ["CSV", "XML", "JSON", "PNG"], dogru: 1 },
    { soru: "Bireylerin bir konudaki duygu ve düşüncelerini sorular yardımıyla toplayan yöntem hangisidir?", secenekler: ["Deney", "Anket", "Gözlem", "Doğrudan ölçme"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Açık veri",
    metin: "Birçok kurum veri kümelerini herkesin kullanması için CSV ya da JSON olarak yayımlar (açık veri). İstanbul Büyükşehir Belediyesinin açık veri portalında hangi veri kümeleri var? Birini indir, açıp sütunlarına bak." }

]};
