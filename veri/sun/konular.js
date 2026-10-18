// SUNUCU İŞLETİM SİSTEMLERİ (11D) — KONULAR TABLOSU
// Kaynak: MEB "Sunucu İşletim Sistemleri 11" ders materyali + 2026-27 yıllık plan
// Her konu: no, baslik, kitap (sayfa), hazir (içerik dosyası var mı), ek (kitap dışı konu)
// İçerik dosyası: veri/sun/<no>.js · Yeni konu: listeye satır ekle, içerik yazılınca hazir: true yap.
window.KONULAR = {
  birimler: [
    { ad: "Sunucu İşletim Sistemleri Kurulumu", simge: "💿", konular: [
      { no: "01", baslik: "Sunucu, istemci ve sunucu işletim sistemi seçimi",   kitap: "s. 18–20",   hazir: true },
      { no: "02", baslik: "Windows Server 2019 kurulumu",                        kitap: "s. 20–28",   hazir: true },
      { no: "03", baslik: "Türkçe dil paketi, Ayarlar ve Denetim Masası",       kitap: "s. 28–36",   hazir: true },
      { no: "04", baslik: "Sunucu Yöneticisi: ad, IP, rol ekleme ve kaldırma",  kitap: "s. 36–51",   hazir: true },
      { no: "05", baslik: "Disk yapılandırması: temel disk ve bölümler",        kitap: "s. 51–58",   hazir: true },
      { no: "06", baslik: "Dinamik disk birimleri ve RAID",                     kitap: "s. 59–91",   hazir: true },
      { no: "07", baslik: "Yedekleme, geri yükleme, zamanlama",                 kitap: "s. 91–113",  hazir: true }
    ]},
    { ad: "Sanallaştırma", simge: "🧊", konular: [
      { no: "08", baslik: "Sanal sunucu yönetimi ve Hyper-V kurulumu",          kitap: "s. 116–128", hazir: true },
      { no: "09", baslik: "Sanal anahtar, sanal makine eylemleri ve ayarları",  kitap: "s. 128–143", hazir: true },
      { no: "10", baslik: "Hyper-V'de sunucu kurma, ağ ve taşıma",              kitap: "s. 143–157", hazir: true }
    ]},
    { ad: "Sunucu Ağ Mimarisi", simge: "🌐", konular: [
      { no: "11", baslik: "Dosya ve klasör güvenliği",                          kitap: "s. 160–165", hazir: true },
      { no: "12", baslik: "Klasör ve yazıcı paylaşımı",                         kitap: "s. 165–170", hazir: true },
      { no: "13", baslik: "Güvenlik duvarı",                                    kitap: "s. 170–179", hazir: true },
      { no: "14", baslik: "DHCP",                                               kitap: "s. 179–192", hazir: true },
      { no: "15", baslik: "DNS 1: rol, ileri arama bölgesi, kayıtlar",          kitap: "s. 192–205", hazir: true },
      { no: "16", baslik: "DNS 2: ikincil bölge, geriye doğru arama, ileticiler", kitap: "s. 205–215", hazir: true }
    ]},
    { ad: "Active Directory", simge: "🗂️", konular: [
      { no: "17", baslik: "Active Directory kurulumu ve etki alanına katılma",  kitap: "s. 218–228", hazir: true },
      { no: "18", baslik: "Kullanıcı, grup, bilgisayar ve OU",                  kitap: "s. 228–238", hazir: true },
      { no: "19", baslik: "Grup ilkeleri",                                      kitap: "s. 238–253", hazir: true }
    ]},
    { ad: "Sunucu Rolleri", simge: "🧰", konular: [
      { no: "20", baslik: "Web sunucusu (IIS) kurulumu ve yapılandırması",      kitap: "s. 256–266", hazir: true },
      { no: "21", baslik: "HTTPS ve dizine göz atma",                           kitap: "s. 266–272", hazir: true },
      { no: "22", baslik: "Yazdırma sunucusu",                                  kitap: "s. 272–285", hazir: true }
    ]},
    { ad: "Sunucu Hizmetleri", simge: "🛎️", konular: [
      { no: "23", baslik: "Dosya hizmetleri: kota, dosya filtreleme, rapor",    kitap: "s. 288–298", hazir: true },
      { no: "24", baslik: "Dağıtılmış dosya sistemi (DFS)",                     kitap: "s. 298–311", hazir: true },
      { no: "25", baslik: "Uzak masaüstü hizmetleri",                           kitap: "s. 311–318", hazir: true },
      { no: "26", baslik: "Dağıtım hizmetleri (WDS)",                           kitap: "s. 318–333", hazir: true }
    ]},
    { ad: "Sunucu Performansını İzleme", simge: "📈", konular: [
      { no: "27", baslik: "Sunucu performansını artırma ve izleme",             kitap: "s. 336–349", hazir: true },
      { no: "28", baslik: "Sunucu güncelleştirme",                              kitap: "s. 349–355", hazir: true }
    ]}
  ]
};
