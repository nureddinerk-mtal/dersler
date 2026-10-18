// YPROJ · 37 · Listele ve detay ekranı  (Kitap s. 143–147 · 24. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "MainActivity: menü (gezi_menu; dil seçimine göre English / Türkçe), Yer Ekle → KayitActivity; verileriAlTr: Firestore ‘YerKayit’ addSnapshotListener ile dinlenir, her belge GeziRehberBilgileri nesnesine çevrilip ArrayList'e eklenir; dil seçimine göre yer adları ArrayAdapter ile ListView'e; tıklanınca seçilen nesne Serializable olarak ve dilSecimi ile GeziRehberiActivity'ye gönderilir. GeziRehberiActivity: getSerializableExtra ile nesne alınır, Picasso ile görsel yüklenir, dile göre TextView'ler doldurulur; menüden dil değişimi ve Geri. Not (s. 147): kodlar bir anda yazılamaz; önce geçişler, sonra kayıt, panelde veriyi görünce liste, sonra detay.",
    akis: ["Firestore'dan dinle, listeye çevir", "ListView'e bağla", "Tıklayınca detay ekranına gönder", "Detayda göster"],
    hatalar: ["addSnapshotListener her değişimde tekrar çalışır; listeyi her seferinde temizlemezseniz kayıtlar çoğalır (kitapta yerler.clear() dinleyicinin dışında; içine alınmalı)."] },
  { tur: "adim", baslik: "Liste ve detay", hafta: "24",
    kitap: { ozet: "Firestore'daki yerleri listeledi, tıklanınca detayını gösterdi.", gorsel: { tip: "ikili",
      sol: { baslik: "Liste", gorsel: { tip: "telefon", baslik: "Gezi Takımı", sag: "⋮", satirlar: [ { liste: ["Yer 1", "Yer 2", "Yer 3"], secili: 1 } ] } },
      sag: { baslik: "Detay", gorsel: { tip: "telefon", geri: true, baslik: "Yer 2", satirlar: [ { resim: "🏞️" }, { metin: "Ülke · Şehir" }, { metin: "Tarihçe …" } ] } }, ok: "➜" }, sayfa: "s. 143–147" },
    sen: { adimlar: ["Firestore koleksiyonunu dinle; her belgeyi model nesnesine çevir.", "Listeyi ListView'e (ya da RecyclerView'e) bağla.", "Tıklanan kaydı detay ekranına gönder, orada göster.", "Menüden ekleme ekranına ve geri dönüş."] },
    teslim: { dosya: "P2-37_liste-detay", liste: ["Liste ve detay ekranlarının ekran görüntüsü"] } }
]};
