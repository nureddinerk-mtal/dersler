// SPROG · 14 · Simülasyon aracıyla akıllı ev  (Kitap s. 91–101)
var EV = (pencere, isi) => `<svg viewBox="0 0 440 210" style="max-width:500px;width:100%;background:#f4f8fc;border:2px solid #c9d2e3;border-radius:10px" font-family="Segoe UI, Arial" font-size="12">
  <rect x="180" y="20" width="80" height="44" rx="8" fill="#5b6c8f"/><text x="220" y="40" text-anchor="middle" fill="#fff" font-weight="700">Home</text><text x="220" y="55" text-anchor="middle" fill="#fff">Gateway</text>
  <path d="M150,30 a90,90 0 0 1 140,0" fill="none" stroke="#2d9cdb" stroke-dasharray="4 4"/><path d="M135,20 a110,110 0 0 1 170,0" fill="none" stroke="#2d9cdb" stroke-dasharray="4 4"/>
  <rect x="40" y="110" width="44" height="78" rx="8" fill="#222"/><rect x="45" y="118" width="34" height="56" fill="#9fd3ff"/><text x="62" y="202" text-anchor="middle">Akıllı telefon</text>
  <line x1="84" y1="140" x2="180" y2="60" stroke="#2d9cdb" stroke-dasharray="5 4"/>
  ${isi === undefined ? `
  <rect x="300" y="100" width="90" height="80" fill="#e8d6b8" stroke="#8a6d3b" stroke-width="3"/>
  ${pencere ? `<rect x="305" y="105" width="80" height="70" fill="#dff3ff"/><polygon points="305,105 320,112 320,168 305,175" fill="#9fb3c8" stroke="#8a6d3b"/><polygon points="385,105 370,112 370,168 385,175" fill="#9fb3c8" stroke="#8a6d3b"/>` : `<rect x="305" y="105" width="80" height="70" fill="#9fb3c8"/><line x1="345" y1="105" x2="345" y2="175" stroke="#8a6d3b" stroke-width="3"/>`}
  <text x="345" y="200" text-anchor="middle">Pencere: ${pencere ? "açık" : "kapalı"}</text>
  <line x1="300" y1="130" x2="260" y2="60" stroke="#2d9cdb" stroke-dasharray="5 4"/>` : `
  <rect x="300" y="88" width="64" height="40" rx="6" fill="#fff" stroke="#888"/><text x="332" y="113" text-anchor="middle" font-size="16" font-weight="700" fill="${isi < 20 ? "#2f80ed" : isi > 22 ? "#eb5757" : "#27ae60"}">${isi}°C</text><text x="332" y="80" text-anchor="middle">Isı monitörü</text>
  <rect x="380" y="150" width="50" height="36" rx="5" fill="${isi < 20 ? "#f2994a" : "#ccc"}"/><text x="405" y="173" text-anchor="middle">🔥</text><text x="405" y="202" text-anchor="middle">Isıtıcı</text>
  <rect x="300" y="150" width="60" height="28" rx="5" fill="${isi > 22 ? "#56ccf2" : "#ccc"}"/><text x="330" y="169" text-anchor="middle">❄️</text><text x="330" y="202" text-anchor="middle">Klima</text>
  <rect x="200" y="140" width="56" height="44" rx="6" fill="#fff" stroke="#555"/><text x="228" y="166" text-anchor="middle">20–22</text><text x="228" y="202" text-anchor="middle">Termostat</text>
  <line x1="256" y1="160" x2="300" y2="164" stroke="#2d9cdb" stroke-width="2"/><path d="M256,176 C320,196 360,196 380,170" fill="none" stroke="#2d9cdb" stroke-width="2"/>`}
</svg>`;
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "2.5: Simülasyon aracıyla (Packet Tracer) ağ simülasyonunun yanında akıllı ev, fabrika, şehir de tasarlanabilir; fiziksel IoT aygıtı almadan sıfır bütçeyle. 12. Uygulama: telefonla açılıp kapanan pencere. Bileşenler (Tablo 2.1): Home Gateway (Network Devices → Wireless), Smart Device ve Window (End Devices). Telefon: gateway'in SSID'si girilir. Pencere: ağ bağdaştırıcısı kablosuza çevrilir, IoT Server = Home Gateway. Telefon → Desktop → IoT Monitor: gateway'in IPv4 adresiyle giriş → pencereyi aç/kapat. 13. Uygulama: otomatik ısıtma-soğutma (Tablo 2.2): Home Gateway, Smart Device, Temperature Monitor, AC, Thermostat (End Devices), Furnace (Home). Hepsi kablosuz + IoT Server ayarı. IoT Custom Cable: Furnace D0 → Thermostat D1, AC D0 → Thermostat D2. IoT Monitor'da termostat 20 ve 22 → Set. Sıra Sizde: 10 ve 30.",
    akis: ["Akıllı ev: neden simülasyon?", "12. Uygulama: telefonla pencere", "Kablosuz bağlantı (SSID) ve IoT sunucusu", "IoT Monitor ile giriş", "13. Uygulama: otomatik ısıtma-soğutma", "Sıra Sizde: 10 / 30", "Birim testi"],
    hatalar: ["Kitap ev ağ geçidini “Network Devices → Wireless Devices” altında gösteriyor; PT 8.x'te de orada (Home Gateway, HomeGateway-PT).", "Pencerede (Window) kablosuz kart yoksa: Advanced → I/O Config → Network Adapter'ı “PT-IOT-NM-1W” (kablosuz) yap.", "IoT Server: Settings → IoT Server → <b>Home Gateway</b> seçilmeli; “Remote Server” değil.", "IoT Monitor giriş adresi: gateway'in IPv4'ü (genelde 192.168.25.1). Kullanıcı adı / parola PT varsayılanı: <b>admin / admin</b>.", "Bağlantılar kurulur kurulmaz görünmezse Realtime modda birkaç saniye bekleyin ya da Fast Forward Time'a basın.", "Isı yavaş değişir; sonucu çabuk görmek için alt çubuktaki Fast Forward Time düğmesine birkaç kez basın."],
    sorular: [["Akıllı telefon neden kablosuz bağlanıyor?", "Gerçek evde de telefon evin Wi-Fi ağına bağlanır; gateway ev modemidir."], ["Termostat ısıtıcıyı nasıl çalıştırıyor?", "IoT özel kablosuyla doğrudan bağlı; ayarlanan aralığın altında D1'e (ısıtıcı), üstünde D2'ye (klima) sinyal gönderir."]],
    not: "Birim ölçme soruları bu konunun testinde (📖). Cevap anahtarı: 1C 2C 3E 4E 5C." },

  { tur: "bilgi", baslik: "Simülasyonla akıllı ev",
    metin: "Fiziksel IoT aygıtı almak bütçe ister. Simülasyon aracıyla <b>sıfır bütçeyle</b>, gerçeğe yakın akıllı ev, fabrika, şehir tasarlanır.",
    gorsel: { tip: "kartlar", kartlar: [ { ust: "🏠 Akıllı ev" }, { ust: "🏭 Akıllı fabrika" }, { ust: "🏙️ Akıllı şehir" } ] } },

  { tur: "uygulama", baslik: "12. Uygulama · Telefonla pencere",
    metin: "Akıllı telefondan pencereyi açıp kapat.",
    gorsel: [
      { tip: "tablo", ad: "Tablo 2.1 · Bileşenler", sutunlar: ["Bileşen", "Kategori"], satirlar: [["Home Gateway (ev ağ geçidi)", "Network Devices → Wireless Devices"], ["Smart Device (akıllı telefon)", "End Devices"], ["Window (pencere)", "End Devices"]] },
      { tip: "ikili", sol: { baslik: "Kapalı", gorsel: { tip: "html", icerik: EV(false) } }, sag: { baslik: "IoT Monitor → aç", gorsel: { tip: "html", icerik: EV(true) } }, ok: "➜" }
    ],
    adimlar: ["Üç bileşeni çalışma alanına ekle.", "Gateway'e tıkla, kablosuz ağ adını (SSID) öğren. Telefonda Config → Wireless'a bu SSID'yi yaz.", "Pencereyi kablosuz bağdaştırıcıyla gateway'e bağla.", "Pencere → Settings: IoT Server olarak Home Gateway'i seç.", "Gateway'in IPv4 adresini kopyala. Telefon → Desktop → IoT Monitor: adresi yaz, oturum aç.", "Listeden pencereyi aç, kapat."],
    kitap: "s. 91–96 · 12. Uygulama" },

  { tur: "uygulama", baslik: "13. Uygulama · Otomatik ısıtma-soğutma",
    metin: "Isı 20 °C'nin altına düşünce ısıtıcı, 22 °C'nin üstüne çıkınca klima kendiliğinden çalışsın. Telefondan izlenip ayarlanabilsin.",
    gorsel: [
      { tip: "tablo", ad: "Tablo 2.2 · Bileşenler", sutunlar: ["Bileşen", "Kategori"], satirlar: [["Home Gateway", "Network Devices → Wireless"], ["Smart Device", "End Devices"], ["Temperature Monitor (ısı monitörü)", "End Devices"], ["Air Conditioner (klima)", "End Devices"], ["Thermostat (termostat)", "End Devices"], ["Furnace (ısıtıcı)", "Home"]] },
      { tip: "ikili", sol: { baslik: "Soğuk", gorsel: { tip: "html", icerik: EV(false, 18) } }, sag: { baslik: "Sıcak", gorsel: { tip: "html", icerik: EV(false, 24) } }, ok: "·" }
    ],
    adimlar: ["Altı bileşeni ekle.", "Isı monitörü, klima, termostat ve ısıtıcıyı kablosuz olarak gateway'e bağla; telefonu da kablosuz ağa bağla.", "Dört bileşenin her birinde IoT Server = Home Gateway.", "IoT Custom Cable: ısıtıcının D0'ı → termostatın D1'i; klimanın D0'ı → termostatın D2'si.", "Telefon → Desktop → IoT Monitor ile gateway'e gir.", "Termostatı aç, en düşük 20, en yüksek 22 yazıp Set'e bas.", "Isı monitörünü izle: kim ne zaman çalışıyor?"],
    kitap: "s. 97–100 · 13. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · 10 ve 30 derece",
    metin: "13. Uygulamadaki evi; ısı <b>10 °C</b>'nin altına düşünce ısıtıcıyı, <b>30 °C</b>'nin üstüne çıkınca klimayı çalıştıracak şekilde ayarla.",
    kitap: "s. 100" },

  { tur: "test", baslik: "Birim testi", sorular: [
    { soru: "📖 2020 yılında internete bağlı cihaz sayısı yaklaşık kaçtır?", secenekler: ["300 bin", "30 milyon", "30 milyar", "300 milyar", "3 trilyon"], dogru: 2 },
    { soru: "📖 Hangi eleman elektrik akımını tek yönde geçirir?", secenekler: ["Bobin", "Direnç", "Diyot", "Kapasitör", "Mikroçip"], dogru: 2 },
    { soru: "📖 Hangisi simülasyon aracı penceresinin ana bölümlerinden biri değildir?", secenekler: ["Alt aygıt kategorisi", "Ana aygıt kategorisi", "Bileşenler", "Çalışma alanı", "Kod penceresi"], dogru: 4 },
    { soru: "📖 Simülasyon aracı bileşenlerinden olan LED hangi renk ışık verir?", secenekler: ["Kırmızı", "Mavi", "Sarı", "Turuncu", "Yeşil"], dogru: 4 },
    { soru: "📖 Hangi bileşen simülasyon aracında IoT sunucu olarak görev yapar?", secenekler: ["Air Conditioner (klima)", "Furnace (ısıtıcı)", "Home Gateway (ev ağ geçidi)", "Smartphone (akıllı telefon)", "Thermostat (termostat)"], dogru: 2 },
    { soru: "Telefonun ev ağına bağlanması için girilen kablosuz ağ adına ne denir?", secenekler: ["IP", "SSID", "MAC", "URL"], dogru: 1 },
    { soru: "13. Uygulamada ısıtıcı termostatın hangi ucuna bağlanır?", secenekler: ["D0", "D1", "D2", "A0"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Hareketle yanan lamba",
    adimlar: ["Evine bir Motion Detector (hareket algılayıcı) ve bir Light (lamba) ekle, ikisini de gateway'e bağla, IoT Server ayarla.", "Telefon → IoT Monitor → Conditions → Add: “Motion Detector On ise Light On”, ikinci kural: “Off ise Light Off”.", "Alt tuşuna basılıyken fareyi algılayıcının üzerinde gezdir: lamba yanıyor mu?"],
    not: "IoT Monitor'daki Conditions (koşullar) bölümü kod yazmadan kural kurmayı sağlar: “eğer … ise …”." }

]};
