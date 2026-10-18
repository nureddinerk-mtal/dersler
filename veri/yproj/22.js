// YPROJ · 22 · Kurulum dosyası ve veri tabanını taşıma  (Kitap s. 99–100 · 12. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "Kabul testinden sonra yayın: ‘Microsoft Visual Studio Installer Projects’ eklentisi → Add > New Project > Setup Project → ayarlar → Build; Debug klasöründe kurulum dosyaları. Başka bilgisayara kurulum için veri tabanı Workbench'te <b>Data Export</b> ile .sql olarak yedeklenir, hedefte <b>Data Import/Restore</b>; kurulum klasöründeki <i>Uygulama.exe.config</i> bağlantı ayarı güncellenir.",
    akis: ["Setup Project", "Data Export / Import", "exe.config bağlantı ayarı", "Başka bilgisayarda dene"],
    hatalar: ["Installer Projects eklentisi Visual Studio'ya ayrıca kurulur (Extensions).", "Hedef bilgisayarda MySQL ve .NET Framework yoksa uygulama açılmaz: sistem gereksinimleri (07)."] },
  { tur: "adim", baslik: "Kurulum dosyası", hafta: "12",
    kitap: { ozet: "Setup projesiyle kurulum dosyası, Data Export ile veri tabanı yedeği yaptı.", gorsel: { tip: "akis", adimlar: [ { simge: "🧩", yazi: "Installer Projects eklentisi" }, { simge: "➕", yazi: "Setup Project" }, { simge: "🔨", yazi: "Build" }, { simge: "💾", yazi: "Data Export (.sql)" }, { simge: "💻", yazi: "Hedefte Import + exe.config" } ] }, sayfa: "s. 99–100" },
    sen: { adimlar: ["Projene Setup Project ekle, Build al.", "Veri tabanını Data Export ile .sql olarak yedekle.", "Başka bir bilgisayara kur, veri tabanını içe aktar, exe.config'i düzenle.", "Uygulama orada çalışıyor mu?"] },
    teslim: { dosya: "P1-22_kurulum", liste: ["Ürünü kurulum dosyası hâline getirdim.", "Veri tabanının .sql yedeğini yükledim.", "Başka bilgisayarda çalıştığının ekran görüntüsü"] } }
]};
