// SUN · 06 · Dinamik disk birimleri: basit, dağıtılmış, şeritli, yansıtılmış, RAID-5  (Kitap s. 59–91)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.2.7.2: Dinamik disk, diskleri birlikte kullanarak hız ve güvenlik sağlar; RAID kartlarının işini yazılımla yapar (RAID 0, 1, 5). Önce Disk Yönetimi'nde diske sağ tık → Dinamik Diske Dönüştür → diskleri seç → Tamam → Evet. Basit birim: temeldeki gibi ama birincil/genişletilmiş ayrımı yok; birime sağ tık → Birimi Küçült / Genişlet / Sil. SS1: 20 GB dinamik disk: E, G, H, I 2,93 GB (3000 MB), J önce küçültülüp sonra genişletilmiş 8,28 GB. Dağıtılmış (spanned): farklı disklerdeki farklı boyutlu alanları tek sürücü yapar, en az 2 en çok 32 disk, hata koruması yok (3477+5477+10477 = 19431 MB). SS2. Şeritli (striped, RAID 0): en az 2 disk, veriler parçalanarak yazılır, en hızlısı, koruma yok, her diskten eşit alan (3×5477 = 16431 MB). SS3. Yansıtılmış (mirrored, RAID 1): 2 disk birbirinin kopyası, kapasite tek disk kadar (5477 MB); disk bozulunca “Başarısız” → Yansıtmayı Kaldır → yeni disk → Yansıtma Ekle. SS4. RAID-5: en az 3 disk, veri + eşlik (parity), kapasite n−1 disk (2×5477 = 10954 MB); bozulunca “Sorunlu Boşluk” → yeni disk, dinamiğe çevir → Birimi Onar. SS5.",
    akis: ["Dinamik diske dönüştürme", "Basit birim; küçült, genişlet (SS1)", "Dört birim türü: kartlarla karşılaştır", "Dağıtılmış (SS2)", "Şeritli (SS3)", "Yansıtılmış ve onarım (SS4)", "RAID-5 ve onarım (SS5)", "Test"],
    hatalar: ["VMware'de bu konu için sanal makineye <b>üç adet 20 GB</b> disk ekleyin (sanal makine kapalıyken). Diskler “Store as a single file” olursa yönetmesi kolay.", "Dinamiğe çevrilmeyen diskte Dağıtılmış/Şeritli/Yansıtılmış/RAID-5 seçenekleri soluk görünür.", "Disk arızasını göstermek için: sanal makineyi kapatıp VMware ayarlarından bir diski kaldırın, açın: yansıtılmışta “Başarısız”, RAID-5'te “Sorunlu Boşluk” görünür. Sonra yeni disk ekleyip onarın.", "Windows Server'ın yazılımsal RAID'i (dinamik disk) Microsoft tarafından eski yöntem sayılıyor; yerini “Depolama Alanları” (Storage Spaces) aldı. Mantığı öğretmek için kitaptaki yol uygun.", "Kitapta Görsel numaralarında atlamalar var (Görsel 100 → 1.100)."],
    sorular: [["Şeritli birim neden hızlı?", "Veri üç parçaya bölünür ve üç diske aynı anda yazılır: üç kişinin birlikte taşıması gibi."], ["RAID-5 neden 3 diskten 2 disk kapasite veriyor?", "Bir disk kadar alan eşlik (parity) bilgisine gider. Bu bilgiyle bozulan diskin verisi hesaplanıp geri getirilir."], ["Yansıtılmış birim yedek yerine geçer mi?", "Hayır. Yanlışlıkla silinen dosya iki diskten de silinir. Disk arızasına karşı korur, yedekleme ayrıca gerekir."]],
    not: "Birim testi 8. soru (en hızlı birim: şeritli) ve 9. soru (3×20 GB RAID-5 = 40 GB) bu konudan." },

  { tur: "bilgi", baslik: "Dinamik diske dönüştür",
    gorsel: { tip: "akis", adimlar: [ { simge: "🗂️", yazi: "Disk Yönetimi" }, { simge: "🖱️", yazi: "Diske sağ tık", alt: "Dinamik Diske Dönüştür" }, { simge: "☑️", yazi: "Diskleri seç → Tamam" }, { simge: "⚠️", yazi: "Uyarı → Evet" } ] },
    metin: "RAID yapıları (dağıtılmış, şeritli, yansıtılmış, RAID-5) yalnızca <b>dinamik</b> disklerde kurulur." },

  { tur: "bilgi", baslik: "Basit birim: küçült, genişlet",
    metin: "Dinamik diskte basit birim temeldeki gibi oluşturulur ama birincil/genişletilmiş ayrımı yoktur. Birime sağ tık: <b>Birimi Küçült</b>, <b>Birimi Genişlet</b>, <b>Birimi Sil</b>.",
    gorsel: { tip: "disk", diskler: [ { ad: "Disk 1", tur: "Dinamik", boyut: "20 GB", bolumler: [
      { ad: "E:", boyut: "2,93 GB", tur: "basit" }, { ad: "G:", boyut: "2,93 GB", tur: "basit" }, { ad: "H:", boyut: "2,93 GB", tur: "basit" }, { ad: "I:", boyut: "2,93 GB", tur: "basit" }, { ad: "J:", boyut: "8,28 GB", tur: "basit", oran: 2.8 } ] } ] },
    not: "Kitaptaki örnek: J önce 3000 MB küçültülüp 5,35 GB'a iniyor, sonra 3000 MB genişletilip 8,28 GB'a çıkıyor (Görsel 1.82)." },

  { tur: "bilgi", baslik: "Dört birim türü",
    gorsel: { tip: "tablo", sutunlar: ["Birim", "Disk", "Kapasite (3 × 20 GB)", "Hız", "Koruma"], satirlar: [
      ["Dağıtılmış (Spanned)", "2–32", "alanların toplamı", "normal", "❌"],
      ["Şeritli (Striped) · RAID 0", "en az 2", "toplam (eşit alan)", "⚡ en hızlı", "❌"],
      ["Yansıtılmış (Mirrored) · RAID 1", "2", "bir disk kadar", "normal", "✅ kopya"],
      ["RAID-5", "en az 3", "n − 1 disk (40 GB)", "hızlı", "✅ eşlik (parity)"]] } },

  { tur: "bilgi", baslik: "Dağıtılmış ve şeritli",
    gorsel: [
      { tip: "disk", diskler: [
        { ad: "Disk 1", tur: "Dinamik", boyut: "20 GB", bolumler: [ { ad: "E:", boyut: "3477 MB", tur: "yayilmis", oran: 1 }, { tur: "bos", oran: 4.7 } ] },
        { ad: "Disk 2", tur: "Dinamik", boyut: "20 GB", bolumler: [ { ad: "E:", boyut: "5477 MB", tur: "yayilmis", oran: 1.6 }, { tur: "bos", oran: 4.1 } ] },
        { ad: "Disk 3", tur: "Dinamik", boyut: "20 GB", bolumler: [ { ad: "E:", boyut: "10477 MB", tur: "yayilmis", oran: 3 }, { tur: "bos", oran: 2.7 } ] } ] }
    ],
    metin: "<b>Dağıtılmış</b>: farklı boyutlu alanlar tek sürücü (E: 19431 MB). <b>Şeritli</b>: her diskten <b>eşit</b> alan, veri parçalanarak aynı anda yazılır." },

  { tur: "bilgi", baslik: "Yansıtılmış ve RAID-5",
    gorsel: { tip: "ikili",
      sol: { baslik: "Yansıtılmış · RAID 1", gorsel: { tip: "disk", diskler: [ { ad: "Disk 1", tur: "Dinamik", bolumler: [ { ad: "E:", boyut: "5477 MB", tur: "aynali" }, { tur: "bos", oran: 2.7 } ] }, { ad: "Disk 2", tur: "Dinamik", bolumler: [ { ad: "E:", boyut: "5477 MB", tur: "aynali" }, { tur: "bos", oran: 2.7 } ] } ] } },
      sag: { baslik: "RAID-5", gorsel: { tip: "disk", diskler: [1, 2, 3].map(n => ({ ad: "Disk " + n, tur: "Dinamik", bolumler: [ { ad: "E:", boyut: "5477 MB", tur: "raid5" }, { tur: "bos", oran: 2.7 } ] })) } },
      ok: "·" },
    metin: "Yansıtılmış: iki disk birbirinin <b>kopyası</b> (E: 5477 MB). RAID-5: veri + <b>eşlik</b> bilgisi; bir disk bozulsa da veri kurtarılır (E: 10954 MB)." },

  { tur: "bilgi", baslik: "Disk bozulursa",
    gorsel: { tip: "tablo", sutunlar: ["Birim", "Durum yazısı", "Onarım"], satirlar: [
      ["Yansıtılmış", "Başarısız", "Yansıtmayı Kaldır → yeni disk → Yansıtma Ekle"],
      ["RAID-5", "Sorunlu Boşluk", "yeni disk → dinamiğe çevir → Birimi Onar"],
      ["Dağıtılmış / Şeritli", "—", "onarım yok: veri kaybolur"]] } },

  { tur: "odev", baslik: "Sıra Sizde 1–5 · Birimleri kur",
    metin: "Her biri ayrı ödev: sanal makineye diskleri ekle ve kitaptaki birimleri oluştur.",
    gorsel: { tip: "tablo", sutunlar: ["", "Disk", "Oluştur"], satirlar: [
      ["1", "1 × 20 GB", "Basit birimler (E, G, H, I, J), küçült ve genişlet"],
      ["2", "3 × 20 GB", "Dağıtılmış birim (3477 + 5477 + 10477 MB)"],
      ["3", "3 × 20 GB", "Şeritli birim (3 × 5477 MB)"],
      ["4", "2 × 20 GB", "Yansıtılmış birim (5477 MB)"],
      ["5", "3 × 20 GB", "RAID-5 birimi (3 × 5477 MB)"]] },
    kitap: "s. 65, 71, 76, 84, 90" },

  { tur: "test", sorular: [
    { soru: "📖 Dinamik disk birimlerinden veri okuma-yazma hızı en yüksek olan hangisidir?", secenekler: ["Şeritli Birim", "Basit Birim", "Dağıtılmış Birim", "Yansıtılmış Birim", "Temel Birim"], dogru: 0 },
    { soru: "📖 Üç adet 20 GB dinamik diskle oluşturulan RAID-5 birimin kapasitesi kaç GB'tır?", secenekler: ["10", "20", "30", "40", "60"], dogru: 3 },
    { soru: "İki diskin birbirinin kopyası olduğu birim hangisidir?", secenekler: ["Dağıtılmış", "Şeritli", "Yansıtılmış", "Basit"], dogru: 2 },
    { soru: "RAID-5 için en az kaç disk gerekir?", secenekler: ["1", "2", "3", "4"], dogru: 2 },
    { soru: "Disklerden biri bozulunca verilerin tamamen kaybolduğu birim hangisidir?", secenekler: ["Yansıtılmış", "RAID-5", "Şeritli", "Hiçbiri"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "RAID 10",
    metin: "Hem hız hem güvenlik isteyen sunucularda <b>RAID 10</b> (1+0) kullanılır: diskler önce çift çift yansıtılır, sonra şeritlenir. 4 × 1 TB diskle RAID 10'un kapasitesi kaç TB olur? RAID-5 ile karşılaştır.",
    not: "Cevap: 2 TB (yarısı kopya). RAID-5 ile 3 TB olurdu ama RAID 10 daha hızlı ve onarımı daha çabuktur." }

]};
