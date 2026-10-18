// SOS · 01 · Ticaret, e-ticaret, avantaj ve dezavantajlar  (Kitap s. 18–28)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.1 Ticaret: kazanç sağlamak amacıyla mal veya hizmet alım satımı. Takas → para → kervanlar → denizcilik → sanayi devrimi ve lojistik → internet. Sıra Sizde: geleneksel ve elektronik ticaret farkları. 1. Uygulama (1 ders saati): ikili gruplar, güneş gözlüğü; sanal ya da gerçek mağaza seç, karşılaştır, kararı ve teslim aşamalarını not et, Tablo 1.1 gibi evet/hayır kontrol tablosu yap. E-ticaret: kazanç amacıyla elektronik ortamda mal/hizmet alım satımı; Türkiye, DTÖ, OECD, AB tanımları. 2. Uygulama (2 ders saati): 2–10 kişilik gruplar, ayakkabı satıcısı (semt pazarı / cadde mağazası / çevrimiçi pazar yeri), en çok 10 dakikalık canlandırma. Avantajlar ve dezavantajlar müşteri / satıcı açısından. 3. Uygulama (1 ders saati): üçlü gruplar, zor müşteriye dükkândan ve sanal mağazadan aromatik yağ satma, sonunda avantaj-dezavantaj listesi.",
    akis: ["Hazırlık soruları (reklam, iade)", "Ticaretin yolculuğu", "Sıra Sizde: geleneksel ve e-ticaret farkları", "1. Uygulama: güneş gözlüğü", "E-ticaret tanımları", "2. Uygulama: canlandırma", "Avantajlar / dezavantajlar", "3. Uygulama: aromatik yağ", "Test"],
    hatalar: ["Kitapta başlık numaraları karışık (1.2'den sonra 1.1.4, 1.3'ten sonra 1.1.5 gelir); öğrencilere sayfa numarasıyla yönlendirin.", "3. Uygulamanın değerlendirme formu 1. Uygulamadan kopyalanmış (mağaza araştırması ölçütleri); ölçütleri satış canlandırmasına göre siz uyarlayın.", "1. Uygulamada gerçekten satın alma yapılmaz; öğrenciler alışveriş sürecini araştırıp varsayımla tamamlar.", "2. Uygulama 2 ders saati sürer; ilk saat metin ve prova, ikinci saat canlandırma olarak bölün."],
    sorular: [["E-ticaret sadece bilişimcilerin işi mi?", "Hayır. Kitabın vurgusu: asıl iş ticaret; bilişim aracıdır. Pastacı, ressam, otel de e-ticaret yapabilir."], ["Kapıda ödeme neden hâlâ var?", "Kredi kartı kullanmayan ya da çevrimiçi ödemeye güvenmeyen müşteriler için."]],
    not: "Hazırlık sorusu 2 (iade reddedilirse ne yaparsınız?) 08. konudaki tüketici hakları için iyi bir giriş." },

  { tur: "bilgi", baslik: "Ticaretin yolculuğu",
    gorsel: { tip: "akis", adimlar: [ { simge: "🔄", yazi: "Takas" }, { simge: "🪙", yazi: "Para" }, { simge: "🐫", yazi: "Kervanlar" }, { simge: "⛵", yazi: "Denizcilik" }, { simge: "🏭", yazi: "Sanayi, lojistik" }, { simge: "🌐", yazi: "İnternet", alt: "e-ticaret" } ] },
    metin: "<b>Ticaret:</b> kazanç sağlamak amacıyla yapılan mal veya hizmet alım satımı." },

  { tur: "odev", baslik: "Sıra Sizde · İki ticaret",
    metin: "Geleneksel ticaretle elektronik ticaret arasında ne gibi farklar var? Araştır, sınıfta paylaş.",
    kitap: "s. 19" },

  { tur: "uygulama", baslik: "1. Uygulama · Güneş gözlüğü alıyorum",
    metin: "Mağaza seçiminden teslim almaya kadar alışveriş deneyimini tabloya dök.",
    gorsel: { tip: "tablo", sutunlar: ["Alışveriş sürecinde karşılaşılan deneyimler", "Evet", "Hayır"], satirlar: [
      ["Uygun mağazayı bulmak zor oldu mu?", "✕", ""],
      ["Araştırma yapmak çok zaman aldı mı?", "", "✕"],
      ["…", "", ""]] },
    adimlar: ["İkili grup kur; sanal mı gerçek mağaza mı, karar ver.", "Güneş gözlüğünün satıldığı mağazaları bul ve karşılaştır; ölçütlerini not et.", "Mağazaya karar ver, nedenlerini yaz.", "Ödeme ve teslim alma aşamalarını not et.", "Deneyimlerini Tablo 1.1 gibi tabloya dök, sınıfta yorumla."],
    kitap: "s. 19–21 · 1. Uygulama" },

  { tur: "bilgi", baslik: "E-ticaret",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🇹🇷 Türkiye", alt: "fiziki olarak karşı karşıya gelmeden elektronik ortamda yapılan her türlü ticari faaliyet" },
      { ust: "🌍 DTÖ", alt: "mal ve hizmetlerin üretim, reklam, satış ve dağıtımının telekomünikasyon ağları üzerinden yapılması" },
      { ust: "📊 OECD", alt: "sayısallaştırılmış metin, ses ve görüntünün işlenip iletilmesine dayanan ticari faaliyetler" },
      { ust: "🇪🇺 AB", alt: "metin, ses ve video içeren faaliyetlerin elektronik ortamda yapılması" } ] },
    metin: "Kazanç amacıyla <b>elektronik ortamda</b> yapılan mal veya hizmet alım satımı. Farkı: ticaret elektronik ortamda olur." },

  { tur: "uygulama", baslik: "2. Uygulama · Ayakkabı satıyorum",
    metin: "Grubunla bir ortam seç, en çok 10 dakikalık satış canlandırması yap.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🧺 Semt pazarı", alt: "tezgâh sahibi" }, { ust: "🏬 İşlek cadde", alt: "mağaza sahibi" }, { ust: "🛒 Çevrimiçi pazar yeri", alt: "sanal mağazası olan girişimci" } ] },
    adimlar: ["2–10 kişilik grup kur, yukarıdaki satıcılardan birini seç.", "Ürün tanıtımı, reklam ve kampanyaları içeren canlandırma metnini yaz.", "En çok iki satıcı seç; diğerleri farklı müşteri tiplerini oynasın.", "Prova et, sınıfta canlandır.", "Sonra sınıfla değerlendir: hangi ortamda satmak daha zordu?"],
    kitap: "s. 23–24 · 2. Uygulama" },

  { tur: "bilgi", baslik: "Avantajlar",
    gorsel: { tip: "ikili",
      sol: { baslik: "🧑 Müşteri", gorsel: { tip: "kartlar", kartlar: [ { ust: "📍 Bulunduğu yerden alışveriş" }, { ust: "🚌 Ulaşım ve zaman kaybı yok" }, { ust: "⚖️ Fiyat, kalite karşılaştırma" }, { ust: "💬 Diğer müşterilerin yorumları" }, { ust: "💸 Daha ucuz bulma" } ] } },
      sag: { baslik: "🏪 Satıcı", gorsel: { tip: "kartlar", kartlar: [ { ust: "🕒 7/24 açık mağaza" }, { ust: "📉 Kira, elektrik, personel gideri az" }, { ust: "🌍 Tüm dünyadan müşteri" }, { ust: "📣 Ucuz ve etkili tanıtım" }, { ust: "🏠 Evden ticaret" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Dezavantajlar",
    gorsel: { tip: "ikili",
      sol: { baslik: "🧑 Müşteri", gorsel: { tip: "kartlar", kartlar: [ { ust: "✋ Ürüne dokunamaz, deneyemez" }, { ust: "📦 Kargo bekler" }, { ust: "↩️ İade zor ve uzun" }, { ust: "🔓 Kişisel bilgi çalınma riski" }, { ust: "❌ Defolu, farklı ürün gelebilir" } ] } },
      sag: { baslik: "🏪 Satıcı", gorsel: { tip: "kartlar", kartlar: [ { ust: "🗣️ Yüz yüze ikna yok" }, { ust: "↩️ İade oranı yüksek" }, { ust: "🥊 Rekabet çok" }, { ust: "⚖️ Farklı ülke yasaları" }, { ust: "💰 Platform komisyonları" } ] } },
      ok: "·" } },

  { tur: "uygulama", baslik: "3. Uygulama · Zor müşteri",
    metin: "Aynı aromatik yağı dükkânda ve sanal mağazada sat; sonunda listeyi çıkar.",
    gorsel: { tip: "tablo", sutunlar: ["", "🏪 Dükkân", "🛒 Sanal mağaza"], satirlar: [
      ["Avantajlar", "…", "…"],
      ["Dezavantajlar", "…", "…"],
      ["En çok zorlayan durum", "…", "…"]] },
    adimlar: ["Üçlü grup kur: bir zor müşteri, bir dükkân satıcısı, bir sanal mağaza satıcısı.", "5–10 dakika hazırlan.", "Müşteri önce dükkândan, sonra sanal mağazadan almaya çalışsın; sorular ve itirazlar not edilsin.", "Hangi ortamda satmak kolaydı, tartış.", "Avantaj-dezavantaj listesini oluştur, sınıfla paylaş."],
    kitap: "s. 26–28 · 3. Uygulama" },

  { tur: "test", sorular: [
    { soru: "Ticaretin temel amacı nedir?", secenekler: ["Takas yapmak", "Kazanç sağlamak", "Reklam vermek", "Kargo göndermek"], dogru: 1 },
    { soru: "E-ticareti geleneksel ticaretten ayıran temel fark nedir?", secenekler: ["Para kullanılmaması", "Vergi olmaması", "Sadece hizmet satılması", "Ticari faaliyetin elektronik ortamda gerçekleşmesi"], dogru: 3 },
    { soru: "Hangisi e-ticaretin satıcı açısından avantajıdır?", secenekler: ["7/24 açık mağaza", "Kargo beklemek", "Ürüne dokunamamak", "Yüksek iade oranı"], dogru: 0 },
    { soru: "Hangisi e-ticaretin müşteri açısından dezavantajıdır?", secenekler: ["Fiyat karşılaştırabilmek", "Yorumları okuyabilmek", "Ürünü deneyememek", "Bulunduğu yerden alışveriş"], dogru: 2 },
    { soru: "Platform üzerinden satış yapan satıcının karşılaştığı ek gider hangisidir?", secenekler: ["Dükkân kirası", "Komisyon", "Tabela", "Vitrin"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "İlk çevrimiçi satış",
    metin: "1994'te ABD'de NetMarket adlı site, bir müzik CD'sini şifreli bağlantıyla kredi kartıyla sattı. Bu, güvenli ödemeli ilk çevrimiçi alışverişlerden biri sayılır. Bugün evinde en son internetten ne alındı? Aynı ürün 1994'te nasıl alınırdı?" }

]};
