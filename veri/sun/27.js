// SUN · 27 · Sunucu performansını artırma ve izleme  (Kitap s. 336–349)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "7. birim. Sunucular üstün donanımlıdır ama kaynakları hizmetler (ve sanal sunucular) arasında iyi paylaştırılmalı. 7.1.1 Performansı artırma: masaüstü sürümünde görsel efektler performansı düşürür. Bilgisayar → Özellikler → Gelişmiş sistem ayarları → <b>Gelişmiş</b> sekmesi → Performans Ayarlar → Görsel Efektler: En iyi görünüm / <b>En iyi performans</b> / Özel (ve bilgisayarın seçmesine izin ver). SS1: üçünü dene. 7.1.2 İzleme araçları: Görev Yöneticisi, Performans İzleyicisi, Kaynak İzleyicisi, Olay Görüntüleyicisi (Araçlar menüsü). Görev Yöneticisi (Ctrl+Alt+Del ya da ara): İşlemler (uygulamalar, kaynak yüzdeleri; sağ tık Görevi sonlandır, Dosya konumunu aç), Performans (CPU, Bellek, Ethernet grafikleri), Kullanıcılar, Ayrıntılar (öncelik belirle), Hizmetler (durdur/başlat). SS2: Paint ve Hesap Makinesi'nin dosya konumunu aç, sonlandır. Performans İzleyicisi: sistem özeti, sayaçlar (Ctrl+N ile ekle), grafik türü (satır, histogram çubuğu, rapor; Ctrl+G), dondur (Ctrl+F). SS3: işlemci sayaçlarının tümünü ekle, satır ve sütunda incele. Kaynak İzleyicisi: Genel Bakış, CPU, Bellek, Disk, Ağ sekmeleri; işlem kutucuğu işaretlenerek o uygulamanın grafiği. SS4: Paint ve Hesap Makinesi'nin CPU, bellek, disk kullanımı. Olay Görüntüleyicisi: uyarı, hata, bilgi; Windows Günlükleri → Uygulama, Güvenlik, Kur, Sistem, İletilen Olaylar. SS5: her kategoriden 10 olay incele.",
    akis: ["Hazırlık: Sunucu performansı ne demek?", "Görsel efektler ve performans (SS1)", "Dört izleme aracı", "Görev Yöneticisi (SS2)", "Performans İzleyicisi (SS3)", "Kaynak İzleyicisi (SS4)", "Olay Görüntüleyicisi (SS5)", "Test"],
    hatalar: ["Sanal makine çok yavaşsa öğrenciler “En iyi performans” ayarının farkını hemen görür; bu birimi VMware'e az RAM verilmiş makinede yapmak öğreticidir.", "Görev Yöneticisi ilk açılışta “Daha az ayrıntı” görünümünde açılabilir; sekmeler için “Daha fazla ayrıntı”.", "Kitap Performans İzleyicisi'nde “sütun grafik” diyor; pencerede adı “Histogram çubuğu”.", "Windows Server 2019'da Paint ve Hesap Makinesi Desktop Experience sürümünde vardır (mspaint, calc).", "Olay Görüntüleyicisi'nde Güvenlik günlüğünü görmek için yönetici olmak gerekir."],
    sorular: [["Bir program sunucuyu kilitlerse?", "Görev Yöneticisi → İşlemler → programa sağ tık → Görevi sonlandır."], ["Olay Görüntüleyicisi ne zaman işe yarar?", "Bir hizmet çalışmıyorsa ya da sunucu kendiliğinden yeniden başladıysa nedenini hata kayıtlarında bulursun."]],
    not: "Birim testi 9. soru simgeli olduğu için, 6. soru ise kitapta 5. soruyla aynı şıklarla basıldığı için teste alınmadı." },

  { tur: "bilgi", baslik: "Görsel efektler",
    gorsel: { tip: "pencere", baslik: "Performans Seçenekleri", menu: ["Görsel Efektler", "Gelişmiş", "Veri Yürütme Engellemesi"], satirlar: [
      { radyo: "Bilgisayarım için en iyi olanı Windows seçsin" }, { radyo: "En iyi görünüm için ayarla" }, { radyo: "En iyi performans için ayarla", secili: true }, { radyo: "Özel:" },
      { kutu: "Pencerelerin altında gölge göster" }, { kutu: "Simge yerine küçük resim göster" }, { kutu: "Ekran yazı tipi kenarlarını düzelt" }
    ], dugmeler: ["Tamam", "İptal", "Uygula"], vurgu: "Tamam" },
    metin: "Bilgisayar → Özellikler → Gelişmiş sistem ayarları → <b>Gelişmiş</b> → Performans: Ayarlar." },

  { tur: "odev", baslik: "1. Sıra Sizde · Görünüm mü performans mı?",
    metin: "Performans ayarını sırasıyla “En iyi görünüm için ayarla”, “En iyi performans için ayarla” ve “Özel” yap. Sunucudaki değişimleri yaz.",
    kitap: "s. 337" },

  { tur: "bilgi", baslik: "İzleme araçları",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📋 Görev Yöneticisi", alt: "çalışan uygulamalar, kaynak yüzdeleri" },
      { ust: "📈 Performans İzleyicisi", alt: "sayaçlar, grafik ve raporlar" },
      { ust: "🔬 Kaynak İzleyicisi", alt: "uygulama bazında CPU, bellek, disk, ağ" },
      { ust: "📒 Olay Görüntüleyicisi", alt: "uyarı, hata, bilgi kayıtları" }
    ]},
    metin: "Sunucu Yöneticisi → <b>Araçlar</b> menüsünde." },

  { tur: "bilgi", baslik: "Görev Yöneticisi",
    gorsel: { tip: "pencere", baslik: "Görev Yöneticisi", menu: ["İşlemler", "Performans", "Kullanıcılar", "Ayrıntılar", "Hizmetler"], satirlar: [
      { tablo: { sutunlar: ["Ad", "CPU", "Bellek"], satirlar: [["Paint", "%0,4", "18,2 MB"], ["Hesap Makinesi", "%0", "12,6 MB"], ["Sunucu Yöneticisi", "%1,2", "96,4 MB"]] } },
      { metin: "Sağ tık: Görevi sonlandır · Dosya konumunu aç · Özellikler" }
    ], dugmeler: ["Görevi sonlandır"], vurgu: "Görevi sonlandır" },
    metin: "Açmak: Ctrl+Alt+Delete ya da aramaya “Görev Yöneticisi”. <b>Performans</b> sekmesi: CPU, Bellek, Ethernet grafikleri." },

  { tur: "odev", baslik: "2. Sıra Sizde · Sonlandır",
    metin: "Paint ve Hesap Makinesi'ni aç. Görev Yöneticisi'nden önce her birinin <b>dosya konumunu aç</b>, sonra ikisini de <b>sonlandır</b>.",
    kitap: "s. 341" },

  { tur: "bilgi", baslik: "Performans İzleyicisi",
    gorsel: { tip: "ikili",
      sol: { baslik: "Sayaç ekle (Ctrl+N)", gorsel: { tip: "pencere", baslik: "Sayaç Ekle", satirlar: [ { liste: ["İşlemci", "  % İşlemci Zamanı", "  % Kullanıcı Zamanı", "Bellek", "Fiziksel Disk"], secili: 1 } ], dugmeler: ["Ekle >>", "Tamam"], vurgu: "Ekle >>" } },
      sag: { baslik: "Grafik", gorsel: { tip: "html", icerik: `<svg viewBox="0 0 260 130" style="max-width:280px;width:100%;background:#fff;border:1px solid #c9d2e3"><g stroke="#e3e6ee">${[20,45,70,95].map(y => `<line x1="0" y1="${y}" x2="260" y2="${y}"/>`).join("")}</g><polyline points="0,100 20,96 40,90 60,40 80,55 100,98 120,92 140,60 160,30 180,80 200,95 220,70 240,88 260,90" fill="none" stroke="#c0392b" stroke-width="2"/><polyline points="0,110 40,108 80,105 120,104 160,100 200,101 260,99" fill="none" stroke="#2f80ed" stroke-width="2"/></svg>` } },
      ok: "➜" },
    metin: "Grafik türü (Ctrl+G): <b>satır</b>, <b>histogram çubuğu</b> (sütun), <b>rapor</b>. Ctrl+F: akışı dondurur." },

  { tur: "odev", baslik: "3. Sıra Sizde · İşlemci sayaçları",
    metin: "Performans İzleyicisi'ne işlemciyle ilgili <b>tüm</b> sayaçları ekle. Değişimleri satır ve sütun grafiğinde ayrı ayrı incele.",
    kitap: "s. 345" },

  { tur: "bilgi", baslik: "Kaynak İzleyicisi ve Olay Görüntüleyicisi",
    gorsel: { tip: "ikili",
      sol: { baslik: "🔬 Kaynak İzleyicisi", gorsel: { tip: "kartlar", kartlar: [ { ust: "Genel Bakış · CPU · Bellek · Disk · Ağ", alt: "işlemi işaretle → yalnızca onun grafiği" } ] } },
      sag: { baslik: "📒 Olay Görüntüleyicisi", gorsel: { tip: "tablo", sutunlar: ["Düzey", "Kaynak", "Olay"], satirlar: [["ℹ️ Bilgi", "Service Control Manager", "7036"], ["⚠️ Uyarı", "DNS Client Events", "1014"], ["⛔ Hata", "DCOM", "10016"]] } },
      ok: "·" },
    metin: "Olay günlükleri: <b>Uygulama, Güvenlik, Kur, Sistem, İletilen Olaylar</b>; düzeyler: bilgi, uyarı, hata." },

  { tur: "odev", baslik: "4–5. Sıra Sizde · Kaynaklar ve olaylar",
    metin: "<b>4.</b> Paint ve Hesap Makinesi'nin CPU, Bellek ve Disk kullanım grafiklerini Kaynak İzleyicisi'nde incele. <b>5.</b> Olay Görüntüleyicisi'nde Uygulama, Güvenlik ve Sistem günlüklerinden her kategori için 10 mesaj incele.",
    kitap: "s. 348–349" },

  { tur: "test", sorular: [
    { soru: "📖 Sistem Özellikleri'nde performans ayarları hangi sekmededir?", secenekler: ["Bilgisayar Adı", "Donanım", "Gelişmiş", "Genel", "Uzak"], dogru: 2 },
    { soru: "📖 I) En iyi görünüm II) En iyi performans III) Özel. Hangileri performans seçeneklerindendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "📖 Hangisi sunucu üzerinde gelen performans izleme araçlarından değildir?", secenekler: ["Görev Yöneticisi", "Görev Zamanlayıcısı", "Kaynak İzleyicisi", "Olay Görüntüleyici", "Performans İzleyicisi"], dogru: 1 },
    { soru: "📖 I) CPU II) Bellek III) Ethernet. Hangileri Görev Yöneticisi Performans sekmesindeki grafiklerdendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "📖 Hangisi Görev Yöneticisi sekmelerinden biri değildir?", secenekler: ["Ayrıntılar", "Hizmetler", "İşlemler", "Kullanıcılar", "Uzak"], dogru: 4 },
    { soru: "📖 Hangisi Performans İzleyicisi sistem özeti verilerinden biri değildir?", secenekler: ["Ağ Arabirimi", "Bellek", "Fiziksel Disk", "İşlemci Bilgileri", "Önbellek"], dogru: 4 },
    { soru: "📖 I) Satır II) Sütun III) Pasta. Hangileri Performans İzleyicisi grafik çeşitlerindendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 1 },
    { soru: "📖 Hangisi Kaynak İzleyicisi sekmelerinden biri değildir?", secenekler: ["Bellek", "CPU", "Disk", "Genel Bakış", "İşlemler"], dogru: 4 }
  ]},

  { tur: "merak", baslik: "Sunucuyu zorla",
    adimlar: ["PowerShell'de: <code>while($true){}</code> yazıp çalıştır (bir çekirdeği %100 yapar).", "Görev Yöneticisi → Performans: CPU grafiği ne oldu?", "PowerShell penceresini Görev Yöneticisi'nden sonlandır."],
    not: "Yöneticiler sunucunun sınırlarını görmek için bilerek yük bindirir: buna yük testi (stress test) denir." }

]};
