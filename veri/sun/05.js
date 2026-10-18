// SUN · 05 · Disk yapılandırması: temel disk ve bölümler  (Kitap s. 51–58)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "1.2.7: Sunucuda iki disk yapısı: Temel Disk (Basic) ve Dinamik Disk (Dynamic). Yeni takılan disk temeldir, sonradan dinamiğe çevrilebilir. Temel disk: en fazla 3 birincil (primary) + 1 genişletilmiş (extended) bölüm; genişletilmiş bölüm en fazla 32 mantıksal sürücüye (logical drive) ayrılır. Disk Yönetimi: Sunucu Yöneticisi → Araçlar → Bilgisayar Yönetimi → Disk Yönetimi. Yeni disk önce başlatılır (MBR ya da GPT; açılan pencerede ya da sağ tık → Diski başlat). Sonra ayrılmamış alana sağ tık → Yeni Basit Birim → boyut (MB) → sürücü harfi (ya da boş NTFS klasörüne bağla, ya da harf atama) → biçimlendir (NTFS) ya da “Bu birimi biçimlendirme” (RAW kalır) → Son. 6. Uygulama: 20 GB diske 5 GB'lık 3 birincil bölüm, kalan 5 GB genişletilmiş bölümde 2 mantıksal sürücü.",
    akis: ["Temel ve dinamik disk", "Bölüm kuralı: 3 birincil + 1 genişletilmiş (32 mantıksal)", "VMware'de yeni disk ekleme", "Disk Yönetimi ve diski başlatma", "Yeni Basit Birim sihirbazı", "6. Uygulama", "Test"],
    hatalar: ["<b>VMware'de disk ekleme</b>: sanal makine kapalıyken VM → Settings → Add → Hard Disk → SCSI → Create a new virtual disk → 20 GB (Store as a single file) → Finish. Sunucu açıldığında Disk Yönetimi yeni diski görür.", "Diski <b>GPT</b> başlatırsanız birincil/genişletilmiş ayrımı olmaz (128 bölüm). Bu uygulamada <b>MBR</b> seçilmeli.", "Windows'un Disk Yönetimi'nde MBR diske 4. bölüm oluşturulurken genişletilmiş bölüm ve içindeki mantıksal sürücü <b>kendiliğinden</b> açılır; ayrı bir “genişletilmiş bölüm oluştur” komutu yoktur.", "Kitap “Extanted Partition” yazıyor: doğrusu Extended.", "Biçimlendirilmeyen bölüm RAW görünür ve Bilgisayarım'da açılmaz."],
    sorular: [["MBR ile GPT farkı?", "MBR eski yöntem: en fazla 4 ana bölüm ve 2 TB disk. GPT yeni: 128 bölüm, çok büyük diskler."], ["Neden diski bölüyoruz?", "Sistem dosyalarıyla kullanıcı verilerini ayırmak, birini biçimlendirirken diğerini korumak için."]],
    not: "5000 MB yaklaşık 4,88 GB görünür (1 GB = 1024 MB). Öğrenciler “5 GB yazdım, 4,88 çıktı” diye sorabilir." },

  { tur: "bilgi", baslik: "İki disk yapısı",
    gorsel: { tip: "ikili",
      sol: { baslik: "Temel Disk (Basic)", gorsel: { tip: "kartlar", kartlar: [ { ust: "Yeni disk böyle gelir" }, { ust: "Kısıtlı özellikler" }, { ust: "İşletim sistemi bunda kurulu" } ] } },
      sag: { baslik: "Dinamik Disk (Dynamic)", gorsel: { tip: "kartlar", kartlar: [ { ust: "Diskleri birlikte kullanır" }, { ust: "Hız ve veri güvenliği" }, { ust: "RAID 0, 1, 5" } ] } },
      ok: "➜" } },

  { tur: "bilgi", baslik: "Temel diskte bölümler",
    gorsel: { tip: "disk", diskler: [ { ad: "Disk 1", boyut: "20 GB", bolumler: [
      { ad: "E:", tur: "birincil" }, { ad: "F:", tur: "birincil" }, { ad: "G:", tur: "birincil" },
      { tur: "genisletilmis", ic: [ { ad: "H:", tur: "mantiksal" }, { ad: "I:", tur: "mantiksal" } ] } ] } ] },
    metin: "En fazla <b>3 birincil + 1 genişletilmiş</b> bölüm. Genişletilmiş bölüm en fazla <b>32 mantıksal sürücüye</b> ayrılır." },

  { tur: "bilgi", baslik: "Yeni Basit Birim Sihirbazı",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🗂️", yazi: "Araçlar → Bilgisayar Yönetimi", alt: "→ Disk Yönetimi" },
      { simge: "🔌", yazi: "Diski başlat", alt: "MBR / GPT" },
      { simge: "🖱️", yazi: "Ayrılmamış alana sağ tık", alt: "Yeni Basit Birim" },
      { simge: "📏", yazi: "Boyut (MB)" },
      { simge: "🔤", yazi: "Sürücü harfi" },
      { simge: "🧹", yazi: "Biçimlendir: NTFS" },
      { simge: "✅", yazi: "Son" }
    ]},
    not: "Biçimlendirilmeyen bölüm <b>RAW</b> kalır, kullanılamaz." },

  { tur: "uygulama", baslik: "6. Uygulama · Diski böl",
    metin: "Sunucuya <b>20 GB</b> disk ekle: 5 GB'lık <b>3 birincil</b> bölüm, kalan 5 GB'ta <b>2 mantıksal</b> sürücü olsun.",
    gorsel: { tip: "disk", diskler: [
      { ad: "Disk 0", boyut: "60 GB", bolumler: [ { ad: "C:", boyut: "59,5 GB NTFS", tur: "sistem", oran: 3 } ] },
      { ad: "Disk 1", boyut: "20 GB", bolumler: [
        { ad: "E:", boyut: "4,88 GB NTFS", tur: "birincil" }, { ad: "F:", boyut: "4,88 GB NTFS", tur: "birincil" }, { ad: "G:", boyut: "4,88 GB NTFS", tur: "birincil" },
        { tur: "genisletilmis", ic: [ { ad: "H:", boyut: "2,44 GB", tur: "mantiksal" }, { ad: "I:", boyut: "2,44 GB", tur: "mantiksal" } ] } ] } ] },
    adimlar: ["Sanal makineye 20 GB disk ekle.", "Sunucu Yöneticisi → Araçlar → Bilgisayar Yönetimi → Disk Yönetimi.", "Diski <b>MBR</b> olarak başlat.", "Ayrılmamış alana sağ tık → Yeni Basit Birim → 5000 MB → harf ata → NTFS biçimlendir → Son.", "Aynısını iki kez daha yap (3 birincil).", "Kalan alanı iki mantıksal sürücüye ayır.", "Hepsini biçimlendir."],
    kitap: "s. 51–58 · 6. Uygulama" },

  { tur: "test", sorular: [
    { soru: "Temel diskte en fazla kaç birincil bölüm olabilir (genişletilmiş bölüm varken)?", secenekler: ["1", "2", "3", "32"], dogru: 2 },
    { soru: "Genişletilmiş bölüm en fazla kaç mantıksal sürücüye ayrılabilir?", secenekler: ["4", "16", "32", "128"], dogru: 2 },
    { soru: "Yeni takılan disk varsayılan olarak hangi yapıdadır?", secenekler: ["Dinamik", "Temel", "RAID-5", "Yansıtılmış"], dogru: 1 },
    { soru: "Biçimlendirilmemiş bölümün dosya sistemi nasıl görünür?", secenekler: ["NTFS", "FAT32", "RAW", "exFAT"], dogru: 2 }
  ]},

  { tur: "merak", baslik: "diskpart",
    adimlar: ["Komut İstemi'ni yönetici olarak aç, <code>diskpart</code> yaz.", "<code>list disk</code> → diskleri gör. <code>select disk 1</code> → <code>list partition</code>.", "Hiçbir şeyi silmeden <code>exit</code> ile çık."],
    not: "diskpart aynı işleri komutla yapar ama dikkat: <code>clean</code> komutu diski bir anda siler." }

]};
