// SUN · 10 · Hyper-V'de sunucu kurma, ağ ve taşıma  (Kitap s. 143–157)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.5.4: Ayarlar yapıldıktan sonra ISO sanal DVD'ye bağlanır. Sanal makine fiziksel gibi çalışır: güç düğmesi = Başlat; ekranı görmek için ayrıca Bağlan (başlatmadan bağlanılırsa “gücü kapalı” uyarısı). Kurulum fiziksel bilgisayardaki gibidir (02. konu). Bağlantı penceresi eylemleri (Tablo 2.3): Ctrl+Alt+Delete, Başlat, Gücü Kapat (fişi çekmek gibi, güvensiz), Kapat (güvenli), Kaydet (hazırda beklet), Duraklat, Sıfırla, Denetim Noktası, Geri Al. SS3: 40 GB, 2048 MB, 2. Nesil makineye 2019 kur. 1.5.5: Birden çok sanal sunucu; internete bağlamak için dış sanal anahtar; DHCP'den IP alır; IP'yi öğrenmek: Ayarlar → Ağ ve İnternet → Ağ özelliklerinizi görüntüleyin. Kitapta SanalSunucu1: 192.168.1.20, SanalSunucu2: 192.168.1.26, ana makine 192.168.1.21. <b>ping</b>: 4 paket gönderir; Gönderilen / Alınan / Kayıp. SS4: iki sanal sunucu, internete bağla, birbirine ping. 1.5.6 Taşıma: dosyaları kopyalamak yetmez; sağ tık → <b>Ver</b> → konum → Dışarı Aktar; istenirse Sil; diğer Hyper-V'de Eylemler → <b>Sanal Makineyi Al</b> → klasör → makine → içeri aktarma türü (üç seçenek) → Son. SS5: dışa aktar, sil, geri al. Birim testi: anahtar 1C 2A 3E 4C 5A 6D 7B 8E (7. soru simgeli olduğundan teste alınmadı).",
    akis: ["ISO bağla, Başlat ve Bağlan farkı", "Bağlantı penceresi eylemleri", "Sıra Sizde 3: sanal sunucu kurulumu (uzun sürer)", "İki sanal sunucu, IP ve ping", "Sıra Sizde 4", "Ver ve Sanal Makineyi Al", "Sıra Sizde 5", "Birim testi"],
    hatalar: ["İç içe sanallaştırmada içteki kurulum yavaştır; Sıra Sizde 3'ü iki ders saatine yayın ya da kurulumu teneffüse denk getirin.", "Windows'ta güvenlik duvarı ping'i (ICMP) varsayılan olarak engeller: ping “İstek zaman aşımına uğradı” verirse 13. konudaki gibi güvenlik duvarında “Dosya ve Yazıcı Paylaşımı (Yankı İsteği – ICMPv4-In)” kuralını etkinleştirin.", "Hyper-V'de Ctrl+Alt+Delete için bağlantı penceresindeki simge ya da <b>Ctrl+Alt+End</b> kullanılır; VMware'in içinde Hyper-V olduğu için iki katman var, öğrenciler karıştırır.", "Gücü Kapat güvensizdir; dosya bozulabilir. Normal kapatma için Kapat.", "Kitap ping çıktısında İngilizce “Send/Received/Lost” diyor; Türkçe Windows'ta Gönderilen/Alınan/Kayıp yazar."],
    sorular: [["Kaydet ile Kapat farkı?", "Kaydet makinenin o anki hâlini (açık pencereler dâhil) kaydedip durdurur; tekrar başlayınca kaldığı yerden devam eder. Kapat işletim sistemini düzgünce kapatır."], ["Neden dosyaları kopyalamak yetmiyor?", "Sanal makinenin yapılandırması Hyper-V'ye kayıtlıdır. Ver komutu disk, ayar ve denetim noktalarını birlikte, alınabilir biçimde paketler."]],
    not: "Ağ bağlantısını test ederken öğrencilere <code>ipconfig</code> komutunu da gösterin; kitap IP'yi Ayarlar penceresinden buluyor." },

  { tur: "bilgi", baslik: "Başlat ve Bağlan",
    gorsel: { tip: "ikili",
      sol: { baslik: "▶ Başlat", gorsel: { tip: "kartlar", kartlar: [ { ust: "Güç düğmesine basmak gibi", alt: "makine açılır, ekran görünmez" } ] } },
      sag: { baslik: "🖥️ Bağlan", gorsel: { tip: "kartlar", kartlar: [ { ust: "Monitörü açmak gibi", alt: "sanal makinenin ekranını gösterir" } ] } },
      ok: "+" },
    metin: "Sanal makineye ISO bağlanıp başlatılınca kurulum fiziksel bilgisayardaki gibidir." },

  { tur: "bilgi", baslik: "Bağlantı penceresi eylemleri",
    gorsel: { tip: "tablo", ad: "Tablo 2.3", sutunlar: ["Eylem", "Ne yapar?"], satirlar: [
      ["Ctrl+Alt+Delete", "sanal makinede oturum açma tuşları"], ["Başlat", "makineyi açar"], ["Gücü Kapat", "fişi çekmek gibi, güvensiz"],
      ["Kapat", "işletim sistemini güvenli kapatır"], ["Kaydet", "durumu kaydedip kapatır (hazırda beklet)"], ["Duraklat", "kısa süre durdurur"],
      ["Sıfırla", "yeniden başlatır"], ["Denetim Noktası / Geri Al", "durumu kaydet / önceki duruma dön"]] } },

  { tur: "odev", baslik: "3. Sıra Sizde · Sanal sunucu kur",
    metin: "40 GB diskli, 2048 MB RAM'li, 2. Nesil bir sanal makine oluştur, üzerine Windows Server 2019 kur.",
    kitap: "s. 146" },

  { tur: "bilgi", baslik: "Sanal sunucular arasında ağ",
    gorsel: [
      { tip: "html", icerik: `<svg viewBox="0 0 420 150" style="max-width:480px;width:100%;background:#fff;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="12" text-anchor="middle">
        <rect x="160" y="10" width="100" height="34" rx="6" fill="#fde9c9" stroke="#e0a800"/><text x="210" y="32" font-weight="700">Dış sanal anahtar</text>
        ${[["SanalSunucu1", "192.168.1.20", 60], ["Ana makine", "192.168.1.21", 210], ["SanalSunucu2", "192.168.1.26", 360]].map(([a, ip, x]) => `<line x1="${x}" y1="90" x2="210" y2="44" stroke="#2d9cdb" stroke-width="2"/><rect x="${x - 60}" y="90" width="120" height="46" rx="6" fill="#e3f0fb" stroke="#2d9cdb"/><text x="${x}" y="110" font-weight="700">${a}</text><text x="${x}" y="127">${ip}</text>`).join("")}
      </svg>` },
      { tip: "terminal", baslik: "SanalSunucu2 · Komut İstemi", satirlar: [ "C:\\> ping 192.168.1.20", "192.168.1.20 yanıtı: bayt=32 süre<1ms TTL=128", "...", "Paketler: Gönderilen = 4, Alınan = 4, Kayıp = 0 (%0 kayıp)" ] }
    ],
    metin: "<b>ping</b> komutu karşıya 4 paket yollar: <b>Gönderilen</b>, <b>Alınan</b>, <b>Kayıp</b> sayıları ağın durumunu gösterir." },

  { tur: "odev", baslik: "4. Sıra Sizde · İki sunucu, ping",
    metin: "Hyper-V'de iki sanal sunucu kur, dış sanal anahtarla internete bağla. IP adreslerini öğren, sunucular arasında <b>ping</b> at.",
    kitap: "s. 150" },

  { tur: "bilgi", baslik: "Sanal makineyi taşımak",
    gorsel: { tip: "ikili",
      sol: { baslik: "Eski sunucu", gorsel: { tip: "akis", adimlar: [ { simge: "🖱️", yazi: "Sağ tık → Ver" }, { simge: "📂", yazi: "Konum → Dışarı Aktar" }, { simge: "🗑️", yazi: "(İstenirse) Sil" } ] } },
      sag: { baslik: "Yeni sunucu", gorsel: { tip: "akis", adimlar: [ { simge: "📥", yazi: "Eylemler → Sanal Makineyi Al" }, { simge: "📂", yazi: "Klasörü seç" }, { simge: "✅", yazi: "Aktarma türü → Son" } ] } },
      ok: "➜" },
    metin: "Sanal makine dosyalarını kopyalamak taşımak için <b>yetmez</b>; Ver ve Sanal Makineyi Al kullanılır." },

  { tur: "odev", baslik: "5. Sıra Sizde · Dışa aktar, geri al",
    metin: "Bir sanal makineyi dışa aktar, Hyper-V'den sil, dışa aktardığın dosyaları yeniden içeri al.",
    kitap: "s. 155" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 Hyper-V kurulduktan sonra sanal işletim sistemleri hangi katman üzerinde çalışır?", secenekler: ["Ana işletim sistemi", "Donanım", "Hipervizör", "Sanallaştırma", "Uygulama"], dogru: 2 },
    { soru: "📖 1. Nesilde olup 2. Nesilde olmayan bileşen hangisidir?", secenekler: ["Disket sürücüsü", "Bellek", "DVD sürücüsü", "Güvenlik", "İşlemci"], dogru: 0 },
    { soru: "📖 I) Sabit Sürücü II) DVD Sürücü III) Paylaşılan Sürücü. Hangileri SCSI Denetleyicisi türlerindendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "📖 Sanal makine ekranını görüntülemeyi sağlayan eylem hangisidir?", secenekler: ["Başlat", "Görünüm", "Bağlan", "Yenile", "Ver"], dogru: 2 },
    { soru: "📖 İşlemci sayısı ve bellek miktarını değiştirmeyi sağlayan eylem hangisidir?", secenekler: ["Ayarlar", "Bağlan", "Başlat", "Denetim Noktası", "Yenile"], dogru: 0 },
    { soru: "📖 Önyükleme cihazlarının sırasını seçmek için kullanılan ayar hangisidir?", secenekler: ["Güvenlik", "Önyükleme", "Otomatik başlatma", "Üretici Yazılımı", "Denetim Noktası"], dogru: 3 },
    { soru: "📖 I) Dış II) İç III) Özel. Hangileri sanal anahtar çeşitlerindendir?", secenekler: ["Yalnız I", "I, II", "I, III", "II, III", "I, II, III"], dogru: 4 },
    { soru: "Sanal makineyi güvenli biçimde kapatan eylem hangisidir?", secenekler: ["Gücü Kapat", "Kapat", "Duraklat", "Sıfırla"], dogru: 1 },
    { soru: "Sanal makineyi başka bir Hyper-V'ye taşımak için önce hangi eylem kullanılır?", secenekler: ["Ver", "Sil", "Yenile", "Bağlan"], dogru: 0 }
  ]},

  { tur: "merak", baslik: "PowerShell ile sanal makine",
    adimlar: ["PowerShell (Yönetici) aç: <code>Get-VM</code> yaz, sanal makineleri listele.", "<code>Start-VM -Name SanalSunucu1</code> ile başlat.", "<code>Get-VMSwitch</code> ile sanal anahtarları gör."],
    not: "Yüzlerce sanal makine yöneten veri merkezlerinde bu işler hep komutla ve betiklerle yapılır." }

]};
