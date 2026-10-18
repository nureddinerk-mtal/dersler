// SUN · 22 · Yazdırma sunucusu  (Kitap s. 272–285)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "5.2: Yazıcıların yerel ve uzak ağlardaki kullanıcılarca kullanılması için yazdırma sunucusu. Rol: Rol ekle → <b>Print and Document Services</b>; Özellikler: <b>Internet Printing Client</b>; Rol hizmetleri: Print Server, Internet Printing, LPD Service (farklı işletim sistemleri için). Yönetim: Araçlar → <b>Yazdırma Yönetimi</b> → Yazıcılar; paylaşmak: yazıcı Özellikler → Paylaşım → Bu yazıcıyı paylaştır. İstemciden: klasör adres çubuğuna \\\\sunucu adı ya da IP → yazıcıya sağ tık Bağlan; ya da Denetim Masası → Aygıtlar ve Yazıcılar → Yazıcı Ekle (sunucu IP'si + Gözat; ağ yazıcısı için TCP/IP). 5. Uygulama: rol kur, Yazdırma Yönetimi, paylaş, istemciden bağlan. 6. Uygulama: AD'de Kampus/A_Binasi, kullanici1-2; A_Binasi'ne YazicilarGPO; Kullanıcı Yapılandırması → İlkeler → Windows Ayarları → <b>Dağıtılmış Yazıcılar</b> → sağ tık Yazıcı Dağıt → Gözat → paylaşılan yazıcı → Ekle; kullanici1 ile girişte yazıcı kendiliğinden gelir. 7. Uygulama (internet yazıcısı): Internet Printing kurulu olmalı (IIS → Default Web Site → Printers); http://localhost/printers; DNS kampus.local'a <b>yazici</b> A kaydı (192.168.1.254); istemcide http://yazici.kampus.local/printers → yetkili kullanıcıyla giriş → yazıcı Özellikler'den ağ adını öğren → Yazıcı Ekle → Paylaşılan yazıcıyı adıyla seç → ağ adını yaz. Birim testi: 1C 2A 3B 4B 5D 6A 7C 8B 9E 10D.",
    akis: ["Yazdırma sunucusu nedir?", "Rol kurulumu ve hizmetler", "Yazdırma Yönetimi ve paylaşım", "5. Uygulama: istemciden bağlan", "6. Uygulama: GPO ile yazıcı dağıtımı", "7. Uygulama: internet yazıcısı", "Birim testi"],
    hatalar: ["Laboratuvarda gerçek yazıcı yoksa: Yazıcı Ekle → “Yazıcım listede yok” → el ile yerel yazıcı → FILE: bağlantı noktası → herhangi bir sürücü (örn. Microsoft → Microsoft Print to PDF ya da Generic / Text Only). Kitap da bunu öneriyor.", "Kitapta rol hizmeti “LDP Service” yazılmış; doğrusu <b>LPD Service</b> (Line Printer Daemon).", "Kitap rol adını hem “Print and Documents Services” hem “Print and Document Services” yazıyor; doğrusu Print and Document Services.", "Internet Printing, IIS'i de kurar; 20. konuda IIS kurulduysa sorun yok.", "Yazdırma sürücüsü istemciye otomatik inmezse “Bu yazıcıya güveniyor musunuz?” uyarısı çıkar; Point and Print kısıtlamaları nedeniyle yönetici yetkisi isteyebilir (Windows güncellemelerinden sonra sık görülür)."],
    sorular: [["Neden yazdırma sunucusu?", "Yazıcılar tek yerden yönetilir; sürücü, kuyruk, izinler merkezdedir. Kullanıcılar yazıcıyı kendileri kurmak zorunda kalmaz."], ["GPO ile dağıtım ne kazandırır?", "Binadaki her kullanıcı oturum açınca o binanın yazıcısı kendiliğinden eklenir."]],
    not: "Birim testi 9. soru (http://yzc.site.com/printers) ve 10. soru (Paylaşılan yazıcıyı adıyla seç) 7. Uygulamadan." },

  { tur: "bilgi", baslik: "Yazdırma sunucusu rolü",
    gorsel: { tip: "pencere", baslik: "Rol ve Özellik Ekleme Sihirbazı", sol: ["Sunucu Rolleri", "Özellikler", "Print and Document Services", "Rol Hizmetleri*", "Onay"], satirlar: [
      { baslik: "Rol hizmetlerini seçin" }, { kutu: "Print Server", secili: true }, { kutu: "Distributed Scan Server" }, { kutu: "Internet Printing", secili: true }, { kutu: "LPD Service", secili: true }
    ], dugmeler: ["< Önceki", "İleri >", "Yükle"], vurgu: "İleri >" },
    metin: "Rol: <b>Print and Document Services</b>. Özellik: <b>Internet Printing Client</b>. Yönetim: Araçlar → <b>Yazdırma Yönetimi</b>." },

  { tur: "uygulama", baslik: "5. Uygulama · Yazıcıyı paylaş, bağlan",
    metin: "Sunucudaki bir yazıcıyı istemciden kullan.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Sunucu", gorsel: { tip: "pencere", baslik: "Yazıcı Özellikleri", menu: ["Genel", "Paylaşım", "Bağlantı Noktaları"], satirlar: [ { kutu: "Bu yazıcıyı paylaştır", secili: true }, { etiket: "Paylaşım adı", deger: "Yazici1" } ], dugmeler: ["Tamam"], vurgu: "Tamam" } },
      sag: { baslik: "İstemci", gorsel: { tip: "pencere", baslik: "\\\\192.168.1.254", satirlar: [ { liste: ["📁 Test", "🖨️ Yazici1  → sağ tık · Bağlan"], secili: 1 } ] } },
      ok: "➜" },
    adimlar: ["Sunucuya <b>Print and Document Services</b> rolünü kur.", "Yazdırma Yönetimi'ni aç, yazıcıları gör (yazıcı yoksa ekle).", "Yazıcı Özellikleri → Paylaşım → <b>Bu yazıcıyı paylaştır</b>.", "İstemcide adres çubuğuna \\\\192.168.1.254 yaz, yazıcıya sağ tık → <b>Bağlan</b>."],
    kitap: "s. 273–276 · 5. Uygulama" },

  { tur: "uygulama", baslik: "6. Uygulama · Yazıcıyı GPO ile dağıt",
    metin: "A_Binasi'ndeki kullanıcılar oturum açınca yazıcı kendiliğinden eklensin.",
    gorsel: { tip: "pencere", baslik: "Grup İlkesi Yönetimi Düzenleyicisi · YazicilarGPO", sol: ["Kullanıcı Yapılandırması", "İlkeler", "Windows Ayarları", "Dağıtılmış Yazıcılar*"], satirlar: [ { tablo: { sutunlar: ["Ad", "Bağlantı Türü"], satirlar: [["\\\\SUNUCU19\\Yazici1", "Kullanıcılar"]] } } ] },
    adimlar: ["AD'de Kampus → A_Binasi OU'su; içinde kullanici1, kullanici2.", "A_Binasi'ne <b>YazicilarGPO</b> oluştur → Düzenle.", "Kullanıcı Yapılandırması → İlkeler → Windows Ayarları → <b>Dağıtılmış Yazıcılar</b>.", "Sağ tık → Yazıcı Dağıt → Gözat → paylaşılan yazıcıyı seç → Ekle → Tamam.", "İstemcide kullanici1 ile oturum aç; Aygıtlar ve Yazıcılar'da yazıcı var mı?"],
    kitap: "s. 277–279 · 6. Uygulama" },

  { tur: "uygulama", baslik: "7. Uygulama · İnternet yazıcısı",
    metin: "Yazıcıya <b>yazici.kampus.local</b> adıyla web üzerinden ulaş ve istemciye ağ adıyla ekle.",
    gorsel: { tip: "tarayici", adres: "http://yazici.kampus.local/printers", icerik: "<h3 style='font-family:Segoe UI,Arial;color:#0b5cad'>Tüm Yazıcılar · sunucu19</h3><table border='1' cellpadding='4' style='border-collapse:collapse;font-family:Segoe UI,Arial;font-size:13px'><tr><th>Ad</th><th>Durum</th><th>Konum</th><th>İşler</th></tr><tr><td><a href='#'>Yazici1</a></td><td>Hazır</td><td></td><td>0</td></tr></table>" },
    adimlar: ["DNS'te kampus.local bölgesine <b>yazici</b> A kaydı ekle (192.168.1.254).", "İstemci tarayıcısında http://yazici.kampus.local/printers aç; yetkili bir kullanıcıyla giriş yap.", "Yazıcıyı seç → Özellikler: ağ adını (Network Name) not et.", "Denetim Masası → Aygıtlar ve Yazıcılar → Yazıcı Ekle → <b>Paylaşılan yazıcıyı adıyla seç</b> → ağ adını yaz.", "Yazıcı listede mi?"],
    kitap: "s. 279–282 · 7. Uygulama" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 İçeriği kullanıcılarla etkileşimli değişen web sitesi türü hangisidir?", secenekler: ["Grafik arayüzlü", "Güvenilir", "Dinamik içerikli", "Komut arayüzü", "Statik içerikli"], dogru: 2 },
    { soru: "📖 IIS kurulduğunda kendiliğinden oluşan web sitesi hangisidir?", secenekler: ["Default Web Site", "Default FTP Site", "My Web Site", "Our Web Site", "Web Site"], dogru: 0 },
    { soru: "📖 Hangi uzantı statik içerikli web sitesi olarak kullanılabilir?", secenekler: ["asp", "html", "jpg", "php", "txt"], dogru: 1 },
    { soru: "📖 Site çağrıldığında öncelikli çalışacak dosyanın ayarı hangisidir?", secenekler: ["Kimlik Doğrulama", "Varsayılan Belge", "Dizinlere Gözatma", "SSL Ayarları", "Günlük"], dogru: 1 },
    { soru: "📖 Ana bilgisayar adı yoksa siteye erişmek için ne yazılır?", secenekler: ["Site adı", "Fiziksel yol", "Tür", "IP ve bağlantı noktası numarası", "Site kodları"], dogru: 3 },
    { soru: "📖 Web sitelerinin ayarlarını yapmak için geçerli seçenek hangisidir?", secenekler: ["Bağlamalar", "Düzen", "Ayarları Sına", "Farklı Bağlan", "Varsayılan Belge"], dogru: 0 },
    { soru: "📖 Varsayılan HTTP bağlantı noktası numarası hangisidir?", secenekler: ["25", "53", "80", "110", "443"], dogru: 2 },
    { soru: "📖 Windows sunucuları için web yayınlama uygulaması hangisidir?", secenekler: ["DNS", "IIS", "Internet Explorer", "Network Policy", "Remote Services"], dogru: 1 },
    { soru: "📖 İstemci “Bilgisayar1”, yazdırma sunucusunun ana bilgisayar adı “yzc.site.com” ise paylaşılan yazıcılara internetten hangi adresle ulaşılır?", secenekler: ["http://localhost/printers", "http://127.0.0.1/printers", "http://Bilgisayar1/printers", "http://printers/bilgisayar1", "http://yzc.site.com/printers"], dogru: 4 },
    { soru: "📖 İstemciden yazdırma sunucusundaki bir yazıcıyı eklemek için Yazıcı Ekle'de hangi seçenek seçilir?", secenekler: ["Bluetooth, kablosuz veya ağda bulunabilir yazıcı ekle", "Konuma veya özelliğe göre dizinde bir yazıcı bul", "Otomatik yazıcı ekle", "Paylaşılan yazıcıyı adıyla seç", "TCP/IP adresi veya ana bilgisayar adı kullanarak yazıcı ekle"], dogru: 3 }
  ]},

  { tur: "merak", baslik: "Yazdırma kuyruğu",
    adimlar: ["Yazıcı FILE: bağlantı noktasındaysa istemciden birkaç sayfa yazdır.", "Sunucuda Yazdırma Yönetimi → yazıcı → Kuyruğu Aç: işler görünüyor mu?", "Bir işi duraklat, iptal et."],
    not: "Okullarda “yazıcı çalışmıyor” sorunlarının çoğu takılı kalan bir iş yüzünden olur; kuyruğu temizlemek çözer." }

]};
