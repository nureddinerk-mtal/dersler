// SUN · 13 · Güvenlik duvarı  (Kitap s. 170–179)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "3.2: Güvenlik duvarı, kurallar listesine göre gelen ve giden ağ trafiğini denetleyen yazılım; ayrı bir cihazda ya da işletim sisteminde olabilir; IP, uygulama, veri içeriğine göre denetler. 3.2.1 Standart: Denetim Masası → Güvenlik Duvarı (Windows Defender Güvenlik Duvarı). Profiller: <b>Özel ağlar</b> (ev, küçük iş yeri; kişiler bilinir) ve <b>Konuk veya ortak ağlar</b> (kimin olduğu bilinmeyen, riskli). Yeni ağa katılınca sorulur; “Hayır” = Ortak. Değiştirmek: Ayarlar → Ağ ve İnternet → Ethernet. “Bir uygulamaya izin ver” listesi; “Etkinleştir veya devre dışı bırak” (✓ / ✗), “gelen tüm bağlantıları engelle”, “engellediğinde bana bildir”. Kapatmak önerilmez. 3.2.2 Gelişmiş: Gelen Kurallar / Giden Kurallar; sütunlar Profil, Etkin, Eylem; kural özellikleri. Eylemler → Yeni Kural → Yeni Gelen Kuralı Sihirbazı (Program / Bağlantı noktası…). 4. Uygulama: calc.exe için Program kuralı, Bağlantıya izin ver, Ortak profil, ad “hesap makinesi”. 5. Uygulama: istemci 192.168.1.2, sunucu 192.168.1.254; sunucuda “Dosya ve Yazıcı Paylaşımı (Yankı İsteği – ICMPv4 Gelen)” kuralını kapat → istemciden ping başarısız; aç → başarılı.",
    akis: ["Güvenlik duvarı nedir?", "Özel ve ortak ağ profilleri", "Standart ayarlar: uygulamaya izin ver, aç/kapat", "Gelişmiş ayarlar: gelen ve giden kurallar", "4. Uygulama: hesap makinesi kuralı", "5. Uygulama: ping kuralı (en öğretici)", "Test"],
    hatalar: ["5. Uygulamada istemciyle sunucu aynı LAN Segment'te olmalı (12. konu).", "Kitap “Yankı İsteği-ICMPv4 Gelen” diyor; Türkçe arayüzde “Dosya ve Yazıcı Paylaşımı (Yankı İsteği - ICMPv4-Gelen)” adlı birkaç kural vardır (her profil için ayrı). Ağ profiline uyan kural (genelde Ortak ya da Özel) değiştirilmeli; emin değilseniz hepsini birlikte seçip etkinleştirin/devre dışı bırakın.", "Hesap makinesi Windows Server 2019'da C:\\Windows\\System32\\calc.exe'dir; bu kural sadece örnek, hesap makinesi ağ kullanmaz.", "Öğrenciler güvenlik duvarını tümden kapatıp “ping oldu” der: amaç kapatmak değil, tek bir kuralı yönetmek."],
    sorular: [["Gelen ve giden kural farkı?", "Gelen: dışarıdan bilgisayara gelen trafik. Giden: bilgisayardan dışarı giden trafik. Windows varsayılan olarak gelenleri engeller, gidenlere izin verir."], ["Okul ağında hangi profil seçilmeli?", "Kimin bağlı olduğu bilinmeyen ağlar için Konuk veya ortak ağlar (birim testi 5. soru)."]],
    not: "ping ICMP protokolünü kullanır; birçok sunucu güvenlik için ping'e yanıt vermez." },

  { tur: "bilgi", baslik: "Güvenlik duvarı",
    gorsel: { tip: "akis", adimlar: [ { simge: "🌐", yazi: "Ağ trafiği" }, { simge: "🧱", yazi: "Güvenlik duvarı", alt: "kurallar listesi" }, { simge: "✅", yazi: "izin", renk: "#27ae60" }, { simge: "⛔", yazi: "engel", renk: "#eb5757" } ] },
    metin: "Gelen ve giden ağ trafiğini <b>kurallara</b> göre denetleyen yazılım: IP adresi, uygulama türü, veri içeriği." },

  { tur: "bilgi", baslik: "İki profil",
    gorsel: { tip: "ikili",
      sol: { baslik: "🏠 Özel ağlar", gorsel: { tip: "kartlar", kartlar: [ { ust: "Ev, küçük iş yeri", alt: "ağdaki kişiler bilinir, risk düşük" } ] } },
      sag: { baslik: "☕ Konuk veya ortak ağlar", gorsel: { tip: "kartlar", kartlar: [ { ust: "Kafe, havalimanı, büyük ağ", alt: "kişiler bilinmez, risk yüksek" } ] } },
      ok: "·" },
    metin: "Yeni bir ağa katılınca profil sorulur. Değiştirmek için: Ayarlar → Ağ ve İnternet → Ethernet." },

  { tur: "bilgi", baslik: "Standart ayarlar",
    gorsel: { tip: "pencere", baslik: "Windows Defender Güvenlik Duvarı", sol: ["Denetim Masası Giriş", "Bir uygulamaya izin ver*", "Bildirim ayarlarını değiştir", "Etkinleştir veya devre dışı bırak", "Varsayılanları geri yükle", "Gelişmiş ayarlar"], satirlar: [
      { baslik: "✔ Özel ağlar · Bağlı değil" }, { baslik: "✔ Konuk veya ortak ağlar · Bağlı" },
      { etiket: "Güvenlik duvarı durumu", deger: "Açık" }, { etiket: "Gelen bağlantılar", deger: "İzin verilenler hariç engelle" }
    ] } },

  { tur: "bilgi", baslik: "Gelişmiş ayarlar",
    gorsel: { tip: "pencere", baslik: "Gelişmiş Güvenlik Özellikli Windows Defender Güvenlik Duvarı", sol: ["Gelen Kurallar*", "Giden Kurallar", "Bağlantı Güvenlik Kuralları", "İzleme"], satirlar: [
      { tablo: { sutunlar: ["Ad", "Profil", "Etkin", "Eylem"], satirlar: [["Dosya ve Yazıcı Paylaşımı (Yankı İsteği - ICMPv4-Gelen)", "Özel, Ortak", "Hayır", "İzin ver"], ["Uzak Masaüstü - Kullanıcı Modu (TCP-Gelen)", "Tümü", "Evet", "İzin ver"], ["hesap makinesi", "Ortak", "Evet", "İzin ver"]] } }
    ] },
    metin: "Gelen ve giden kurallar; her kuralın <b>Profil</b>, <b>Etkin</b>, <b>Eylem</b> bilgisi. Yeni kural: Eylemler → <b>Yeni Kural</b>." },

  { tur: "uygulama", baslik: "4. Uygulama · Yeni gelen kuralı",
    metin: "calc.exe için <b>Ortak</b> profilde gelen bağlantıya izin veren “<b>hesap makinesi</b>” kuralını oluştur.",
    gorsel: { tip: "akis", adimlar: [ { simge: "➕", yazi: "Yeni Kural" }, { simge: "📦", yazi: "Program" }, { simge: "📂", yazi: "Bu programın yolu", alt: "System32\\calc.exe" }, { simge: "✅", yazi: "Bağlantıya izin ver" }, { simge: "☕", yazi: "Profil: Ortak" }, { simge: "🏷️", yazi: "Ad: hesap makinesi" } ] },
    adimlar: ["Gelişmiş ayarlar → Gelen Kurallar → Yeni Kural.", "Program → Gözat → C:\\Windows\\System32\\calc.exe.", "Bağlantıya izin ver.", "Yalnızca <b>Ortak</b> profil.", "Ad: hesap makinesi → Son.", "Kural Gelen Kurallar listesinde mi?"],
    kitap: "s. 174–177 · 4. Uygulama" },

  { tur: "uygulama", baslik: "5. Uygulama · Ping'i engelle, aç",
    metin: "Sunucuda yankı isteği kuralını kapatınca istemcinin ping'i <b>başarısız</b>, açınca <b>başarılı</b> olsun.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Kural kapalı", gorsel: { tip: "terminal", baslik: "İstemci · cmd", satirlar: ["> ping 192.168.1.254", "İstek zaman aşımına uğradı.", "İstek zaman aşımına uğradı.", "Gönderilen = 4, Alınan = 0, Kayıp = 4"] } },
      sag: { baslik: "Kural açık", gorsel: { tip: "terminal", baslik: "İstemci · cmd", satirlar: ["> ping 192.168.1.254", "192.168.1.254 yanıtı: bayt=32 süre<1ms", "...", "Gönderilen = 4, Alınan = 4, Kayıp = 0"] } },
      ok: "➜" },
    adimlar: ["İkinci bir (istemci) sanal makine hazırla.", "Sunucu 192.168.1.254, istemci 192.168.1.2, maske 255.255.255.0.", "Sunucuda Gelen Kurallar → “Dosya ve Yazıcı Paylaşımı (Yankı İsteği - ICMPv4-Gelen)” → Özellikler → Etkin işaretini kaldır.", "İstemcide <code>ping 192.168.1.254</code>.", "Kuralı yeniden etkinleştir, ping'i tekrarla."],
    kitap: "s. 177–178 · 5. Uygulama" },

  { tur: "test", sorular: [
    { soru: "📖 Yeni bir ağda yabancı cihazlar varsa hangi standart güvenlik duvarı profili seçilmelidir?", secenekler: ["Güvenli ağlar", "Güvensiz ağlar", "Konuk veya ortak ağlar", "Özel ağlar", "Standart ağlar"], dogru: 2 },
    { soru: "Dışarıdan bilgisayara gelen trafiği denetleyen kurallar nerede listelenir?", secenekler: ["Giden Kurallar", "Gelen Kurallar", "İzleme", "Ağ Bağlantıları"], dogru: 1 },
    { soru: "Ping isteklerine izin veren kural hangisidir?", secenekler: ["Uzak Masaüstü (TCP-Gelen)", "Dosya ve Yazıcı Paylaşımı (Yankı İsteği - ICMPv4-Gelen)", "hesap makinesi", "DNS (UDP-Gelen)"], dogru: 1 },
    { soru: "Güvenlik duvarının tümüyle kapatılması için ne söylenebilir?", secenekler: ["Önerilir", "Önerilmez", "Zorunludur", "Ping için gereklidir"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Kural komutla",
    adimlar: ["PowerShell (Yönetici): <code>Get-NetFirewallRule -DisplayName \"*ICMPv4*\" | Select DisplayName, Enabled</code>", "<code>Enable-NetFirewallRule -DisplayName \"Dosya ve Yazıcı Paylaşımı (Yankı İsteği - ICMPv4-Gelen)\"</code>"],
    not: "Kural adları işletim sisteminin diline göre değişir; İngilizce sistemde “File and Printer Sharing (Echo Request - ICMPv4-In)”." }

]};
