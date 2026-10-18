// SUN · 01 · Sunucu, istemci ve sunucu işletim sistemi seçimi  (Kitap s. 18–20)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1. birim girişi. İşletim sistemi: donanımı ve çevre birimlerini yöneten sistem yazılımı. Sunucu (server): ağdaki ortak kaynakların paylaşımı, denetimi ve kontrolü için yetkilendirilmiş özel bilgisayar. İstemci (client): sunucudan hizmet isteyen cihaz (bilgisayar, tablet, telefon, saat, TV). Sunucu işletim sistemi: istemcilerle sunucu hizmetleri arasında veri alışverişi yapan, kaynakları paylaştıran ve denetleyen işletim sistemi. Temel hizmetler: web, mail, FTP, disk yönetimi ve yedekleme, yazdırma, kullanıcı izinleri ve profil, DHCP, DNS. Aileler: Unix (IBM AIX, HP-UX, FreeBSD, Xenix, IRIX, Oracle Solaris), Linux (Ubuntu, Red Hat, SuSE, Debian, CentOS, Slackware), Windows (Server 2012/2016/2019), Mac (OS X Server, macOS Server). 2019 en az gereksinim: 1,4 GHz 64 bit işlemci; 512 MB RAM (Desktop Experience için 2 GB); en az 32 GB disk.",
    akis: ["Hazırlık: Sunucu ve istemci size ne ifade ediyor?", "Sunucu – istemci şeması (okul ağı örneği: e-Okul, MEB sunucuları)", "Sunucu hizmetleri kartları", "İşletim sistemi aileleri", "2019 gereksinim tablosu", "Ödev: kendi bilgisayarın yeter mi?", "Test"],
    hatalar: ["Sunucuyu “büyük bilgisayar” sanmak: sunucu bir görevdir; sıradan bir bilgisayar da sunucu yazılımıyla sunucu olabilir.", "“İstemci sunucusu” diye bir hizmet yok (birim testi 1. soru bunun üzerine).", "Kitap Windows Server 2019 anlatıyor; güncel sürüm 2022/2025. Menüler büyük ölçüde aynı. Laboratuvarda VMware ile 2019 değerlendirme (Evaluation, 180 gün) ISO'su kullanılabilir.", "Linux sunucularının da çok yaygın olduğunu (web sunucularının çoğu) belirtin; kitap Windows üzerinden ilerliyor."],
    sorular: [["Telefonum istemci mi?", "Evet. Instagram'ı açtığında telefonun Instagram sunucularından hizmet ister."], ["Neden Desktop Experience daha çok RAM istiyor?", "Masaüstü, pencereler ve grafik arayüz ek bellek kullanır. Server Core sadece komut satırıdır."]],
    not: "Bu dersin bütün uygulamaları VMware'de kurulu Windows Server 2019 sanal makinesinde yapılır. Laboratuvar bilgisayarının en az 8 GB RAM'i olmalı; sanal makineye 2–4 GB RAM verin." },

  { tur: "bilgi", baslik: "Sunucu ve istemci",
    gorsel: { tip: "html", icerik: `<svg viewBox="0 0 440 200" style="max-width:500px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="13" text-anchor="middle">
      <rect x="180" y="20" width="80" height="110" rx="6" fill="#2d9cdb"/>${[0,1,2,3].map(i => `<rect x="190" y="${32 + i * 24}" width="60" height="14" rx="3" fill="#cfe9f8"/><circle cx="242" cy="${39 + i * 24}" r="3" fill="#27ae60"/>`).join("")}<text x="220" y="150" font-weight="700">Sunucu</text>
      ${[["💻", 50, 60], ["📱", 50, 150], ["🖥️", 390, 60], ["⌚", 390, 150]].map(([e, x, y]) => `<text x="${x}" y="${y}" font-size="34">${e}</text><line x1="${x < 200 ? x + 25 : x - 25}" y1="${y - 10}" x2="${x < 200 ? 180 : 260}" y2="75" stroke="#2d9cdb" stroke-width="2" stroke-dasharray="5 4"/>`).join("")}
      <text x="50" y="185">istemciler</text><text x="390" y="185">istemciler</text>
    </svg>` },
    metin: "<b>Sunucu</b>: ağdaki ortak kaynakları paylaştıran, denetleyen özel bilgisayar. <b>İstemci</b>: sunucudan hizmet isteyen cihaz." },

  { tur: "bilgi", baslik: "Sunucu işletim sistemi ne sunar?",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🌐 Web sunucusu" }, { ust: "✉️ Mail sunucusu" }, { ust: "📁 FTP sunucusu" }, { ust: "💾 Disk yönetimi, yedekleme" },
      { ust: "🖨️ Yazdırma sunucusu" }, { ust: "👤 Kullanıcı izinleri, profil" }, { ust: "🔢 DHCP sunucusu", alt: "otomatik IP" }, { ust: "📖 DNS sunucusu", alt: "ad → IP" }
    ]},
    not: "Bir sunucu bunların hepsini ya da işletmenin ihtiyacına göre birkaçını barındırabilir." },

  { tur: "bilgi", baslik: "Sunucu işletim sistemi aileleri",
    gorsel: { tip: "tablo", sutunlar: ["Aile", "Örnekler"], satirlar: [
      ["Unix", "IBM AIX, HP-UX, FreeBSD, Xenix, IRIX, Oracle Solaris"],
      ["Linux", "Ubuntu, Red Hat, SuSE, Debian, CentOS, Slackware"],
      ["Windows", "Windows Server 2012, 2016, 2019"],
      ["Mac", "OS X Server, macOS Server"]] } },

  { tur: "bilgi", baslik: "2019 sürümü en az gereksinimler",
    gorsel: { tip: "tablo", ad: "Tablo 1.1", sutunlar: ["Donanım", "En az", "Tavsiye"], satirlar: [
      ["İşlemci", "1,4 GHz 64 bit", "2 GHz (yüksek performans 3 GHz+)"],
      ["Bellek", "512 MB (Desktop Experience: 2 GB)", "—"],
      ["Disk", "32 GB", "Core 10 GB · Desktop 40 GB"],
      ["Diğer", "DVD okuyucu ya da USB bellek", ""]] },
    not: "<b>Desktop Experience</b>: masaüstü ekranlı kurulum. <b>Server Core</b>: sadece komut satırı." },

  { tur: "odev", baslik: "Ödev · Hangi sunucu?",
    metin: "Okulunda ya da evinde kullandığın üç internet hizmetini yaz (örn. e-Okul, YouTube). Her biri için arka planda hangi sunucu hizmetlerinin (web, DNS, mail…) çalıştığını tahmin et.",
    kitap: "s. 18–19" },

  { tur: "test", sorular: [
    { soru: "📖 Hangisi sunucu işletim sistemlerinin sağladığı hizmetlerden biri değildir?", secenekler: ["DHCP sunucusu", "DNS sunucusu", "İstemci sunucusu", "Web sunucusu", "Yazdırma sunucusu"], dogru: 2 },
    { soru: "Sunucudan hizmet isteyen cihaza ne denir?", secenekler: ["Sunucu", "İstemci", "Anahtar", "Yönlendirici"], dogru: 1 },
    { soru: "Hangisi Linux tabanlı bir sunucu işletim sistemidir?", secenekler: ["IBM AIX", "Ubuntu Server", "Windows Server 2019", "macOS Server"], dogru: 1 },
    { soru: "Windows Server 2019'u masaüstü ekranıyla kurmak için en az kaç GB RAM gerekir?", secenekler: ["512 MB", "1 GB", "2 GB", "8 GB"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "Sunucular nerede?",
    metin: "Büyük şirketlerin sunucuları <b>veri merkezlerinde</b> binlerce dolap (rack) içinde durur. Türkiye'de de birçok veri merkezi var. Bir veri merkezinin enerji ve soğutma ihtiyacını araştır: neden çoğu soğuk ülkelerde kuruluyor?",
    not: "Sunucular kesintisiz çalışmalıdır; bu yüzden yedek elektrik (UPS, jeneratör) ve yedek soğutma bulunur." }

]};
