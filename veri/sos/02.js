// SOS · 02 · E-ticaret türleri ve e-ticaretin çalışması  (Kitap s. 28–33)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.2: E-ticaret kullanıcıları: bankalar, sigorta, kamu, perakende, gıda, giyim, eğitim, turizm, emlak, ikinci el siteleri vb. Ürünün niteliğine göre: <b>Doğrudan</b> (ödeme ve teslim çevrimiçi: yazılım, müzik, film, oyun, çevrimiçi kurs, görüntülü muayene) / <b>Dolaylı</b> (sipariş ve ödeme çevrimiçi, teslim kargo-kurye: kitap, koltuk yıkama). Taraflara göre: <b>B2B</b> (şirketler arası, toptancı-mağaza), <b>B2C</b> (şirket-tüketici, markaların kendi siteleri), <b>C2C</b> (tüketiciler arası, ikinci el, el yapımı; site aracılık eder), <b>B2G</b> (işletme-kamu, ihaleler, ekap.kik.gov.tr, DMO), <b>C2G</b> (kişi-kamu: vergi, ceza, harç; gib.gov.tr; bazı kaynaklar ticaret saymaz). Sıra Sizde: başka modeller. 1.1.4 Çalışma: alıcı (site → ara → sepet → ödeme → kargo) ve arka plan (ödeme, lojistik, güvenlik, üretim, tedarik, banka, sunucu, ISS entegre); satıcı (kendi sitesi + sanal POS + kargo anlaşması ya da platform üyeliği + yönetim paneli + platformun kargo anlaşmaları).",
    akis: ["Kim e-ticaret yapar?", "Doğrudan / dolaylı", "B2B, B2C, C2C, B2G, C2G", "Sıra Sizde: başka modeller", "Alıcı gözüyle", "Satıcı gözüyle", "Test"],
    hatalar: ["Öğrenciler B2G ile C2G'yi karıştırır: “Şirket mi ödüyor, kişi mi?” sorusunu sordurun.", "Sıra Sizde için beklenen cevaplar: C2B (kişiden işletmeye), G2C, G2B, B2E (işletmeden çalışana), D2C gibi."],
    sorular: [["Pazar yerinde ikinci el telefon satmak hangi tür?", "C2C. Alıcı da satıcı da tüketici; site aracılık eder."], ["Netflix aboneliği doğrudan mı dolaylı mı?", "Doğrudan: hem ödeme hem teslim çevrimiçi."]] },

  { tur: "bilgi", baslik: "Kim e-ticaret yapar?",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🏦 Bankalar" }, { ust: "🛡️ Sigorta" }, { ust: "🏛️ Kamu kurumları" }, { ust: "🛒 Zincir marketler" }, { ust: "👕 Hazır giyim" }, { ust: "🎓 Eğitim" }, { ust: "🏨 Turizm" }, { ust: "🏠 Emlak" }, { ust: "♻️ İkinci el siteleri" } ] },
    metin: "Bugün ticari faaliyet gösteren bütün sektörler bir şekilde e-ticareti kullanır." },

  { tur: "bilgi", baslik: "Ürünün niteliğine göre",
    gorsel: { tip: "ikili",
      sol: { baslik: "⚡ Doğrudan", gorsel: { tip: "akis", adimlar: [ { simge: "💳", yazi: "Çevrimiçi ödeme" }, { simge: "⬇️", yazi: "Çevrimiçi teslim", alt: "yazılım, müzik, film, oyun, kurs, görüntülü muayene" } ] } },
      sag: { baslik: "📦 Dolaylı", gorsel: { tip: "akis", adimlar: [ { simge: "💳", yazi: "Çevrimiçi sipariş, ödeme" }, { simge: "🚚", yazi: "Posta, kargo, kurye", alt: "kitap, koltuk yıkama hizmeti" } ] } },
      ok: "·" } },

  { tur: "bilgi", baslik: "Taraflara göre",
    gorsel: { tip: "tablo", sutunlar: ["Model", "Kimden → kime", "Örnek"], satirlar: [
      ["<b>B2B</b>", "🏢 işletme → 🏢 işletme", "toptancının mağazalara toplu satışı"],
      ["<b>B2C</b>", "🏢 işletme → 🧑 tüketici", "markanın kendi sitesinden satış"],
      ["<b>C2C</b>", "🧑 tüketici → 🧑 tüketici", "ikinci el eşya, el yapımı ürün"],
      ["<b>B2G</b>", "🏢 işletme → 🏛️ kamu", "çevrimiçi ihaleler (ekap.kik.gov.tr)"],
      ["<b>C2G</b>", "🧑 kişi → 🏛️ kamu", "vergi, ceza, harç ödemesi (gib.gov.tr)"]] } },

  { tur: "odev", baslik: "Sıra Sizde · Başka modeller",
    metin: "B2B, B2C, C2C, B2G ve C2G dışında hangi taraflar arasında e-ticaret olabilir? Araştır, arkadaşlarınla paylaş.",
    kitap: "s. 31" },

  { tur: "bilgi", baslik: "Alıcı gözüyle",
    gorsel: { tip: "akis", adimlar: [ { simge: "🌐", yazi: "Siteye gir" }, { simge: "🔍", yazi: "Ürünü ara" }, { simge: "🛒", yazi: "Sepete ekle" }, { simge: "💳", yazi: "Öde" }, { simge: "🚚", yazi: "Kargo bekle" } ] },
    metin: "Arka planda ödeme, lojistik, güvenlik, üretim, tedarik, banka, sunucu ve internet servis sağlayıcısı <b>birlikte</b> çalışır." },

  { tur: "bilgi", baslik: "Satıcı gözüyle",
    gorsel: { tip: "ikili",
      sol: { baslik: "Kendi sitesi", gorsel: { tip: "akis", adimlar: [ { simge: "🛠️", yazi: "Siteyi kur" }, { simge: "🏦", yazi: "Bankadan sanal POS" }, { simge: "🖼️", yazi: "Ürünleri ekle" }, { simge: "🤝", yazi: "Kargo anlaşması" } ] } },
      sag: { baslik: "Hazır platform", gorsel: { tip: "akis", adimlar: [ { simge: "📝", yazi: "Üye ol" }, { simge: "🖼️", yazi: "Yönetim panelinden ürün ekle" }, { simge: "🚚", yazi: "Platformun kargosu" } ] } },
      ok: "·" },
    metin: "Sonrası: müşteri taleplerini izle, ürünleri güncelle, kampanya yap, sosyal medyada tanıt." },

  { tur: "test", sorular: [
    { soru: "Çevrimiçi satın alınan bir oyunun hemen indirilmesi hangi e-ticaret türüdür?", secenekler: ["Dolaylı", "B2G", "Doğrudan", "C2G"], dogru: 2 },
    { soru: "Bir tüketicinin kullandığı bisikleti başka bir tüketiciye satması hangi modeldir?", secenekler: ["B2B", "B2C", "B2G", "C2C"], dogru: 3 },
    { soru: "Bir şirketin kamu kurumunun açtığı çevrimiçi ihaleye katılması hangi modeldir?", secenekler: ["B2G", "C2G", "C2C", "B2C"], dogru: 0 },
    { soru: "Kendi sitesinden satış yapan satıcı ödeme almak için bankadan ne almalıdır?", secenekler: ["Alan adı", "Kargo anlaşması", "Sanal POS", "Yönetim paneli"], dogru: 2 },
    { soru: "Trafik cezasının internetten ödenmesi hangi modele örnektir?", secenekler: ["B2B", "C2G", "B2C", "C2C"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Ters yön: C2B",
    metin: "Bir fotoğrafçı çektiği fotoğrafı bir şirkete satarsa ya da bir kullanıcı ürün yorumu karşılığında para alırsa satıcı kişidir, alıcı işletmedir. Buna <b>C2B</b> denir. Çevrende C2B örneği var mı?" }

]};
