// SPROG · 06 · Programı geliştirme, kalemle çizim  (Kitap s. 38–41)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Var olan bir program verilen ölçütlere göre geliştirilir: yeni kukla, ses, senaryo. 8. Uygulama: Gökyüzü dünyasına sürekli bubbles sesi, tıklanınca ses, sekip dolaşan cin (Jinee) kuklası. 9. Uygulama: Kalem eklentisi ile boşluk tuşuna basınca kare çizen kalem (kılık merkezi ayarı!). Sıra Sizde: k ile yeşil 3 kalınlıkta kare, u ile üçgen.",
    akis: ["Programı geliştirme ne demek?", "8. Uygulama (7. konudaki projeyi açarak)", "Kalem eklentisi nasıl eklenir?", "9. Uygulama: kare", "Kare için dönüş açısı neden 90? Üçgen için kaç? (dış açı = 360 / kenar)", "Sıra Sizde (ödev)", "Test"],
    hatalar: ["Kalem eklentisini eklemeden kalem bloklarını aramak: Kod sekmesinin altındaki eklenti (+) simgesinden Kalem seçilmeli.", "Kılık merkezi kalemin ucuna ayarlanmazsa çizgi kalemin ortasından çıkar.", "Üçgen için 60 derece dönmek: iç açı 60 ama dönülmesi gereken dış açı 120'dir.", "Tümünü sil bloğunu koymayınca her çalıştırmada eski çizimler kalır."],
    sorular: [["Beşgen nasıl çizilir?", "5 defa tekrarla: 100 adım git, 72 derece dön (360 / 5)."], ["Kalem rengi nasıl değişir?", "Kalem bloklarından “kalem rengini … yap”."]],
    bloklar: `when flag clicked
erase all

when [space v] key pressed
pen down
go to x: (0) y: (0)
point in direction (90)
repeat (4)
move (100) steps
turn cw (90) degrees
end
pen up` },

  { tur: "uygulama", baslik: "8. Uygulama · Gökyüzü dünyasını geliştir",
    metin: "5. konudaki “Gökyüzü dünyası” projesini aç ve ölçütlere göre geliştir.",
    gorsel: { tip: "sahne", proje: "Gökyüzü dünyası", dekor: "gok", suslar: [ { e: "🫧", x: -190, y: 140, boy: 30 }, { e: "🫧", x: 180, y: -140, boy: 26 } ], kuklalar: [ { e: "🦜", x: -140, y: 60, boy: 46 }, { e: "🐦", x: 120, y: 20, boy: 44, balon: "Cik cik!" }, { e: "🐤", x: -40, y: -60, boy: 40 }, { e: "🧞", x: 110, y: -110, boy: 70 } ], yazi: "🔊 sürekli bubbles sesi" },
    adimlar: ["a) Program çalıştıkça gökyüzünde sürekli bubbles sesi çalsın.", "b) Kuşa her tıklandığında mesajın ardından ses çalsın.", "c) Cin (Jinee) kuklası ekle; kuşlar gibi dolaşıp kenara gelince seksin."],
    kitap: "s. 38–39 · 8. Uygulama" },

  { tur: "bilgi", baslik: "Kalem eklentisi",
    gorsel: { tip: "akis", adimlar: [
      { simge: "➕", yazi: "Kod sekmesinin altı", alt: "eklenti simgesi" },
      { simge: "🖊️", yazi: "Kalem'i seç" },
      { simge: "🟩", yazi: "Kalem blokları gelir", alt: "bastır, kaldır, renk, kalınlık, tümünü sil" }
    ]},
    not: "Kalem kuklasının <b>kılık merkezini</b> ucuna ayarla (Kostümler sekmesi), yoksa çizgi ortadan çıkar." },

  { tur: "uygulama", baslik: "9. Uygulama · Kare çizen kalem",
    metin: "Boşluk tuşuna basılınca (0,0)'dan başlayıp kare çizsin. Yeşil bayrakta eski çizim silinsin.",
    gorsel: { tip: "sahne", proje: "geometrik şekiller", tus: "boşluk", dekor: "beyaz", cizim: [ { noktalar: [[0,0],[100,0],[100,-100],[0,-100],[0,0]], renk: "#2f80ed", kalinlik: 3 } ], kuklalar: [ { e: "✏️", x: 12, y: 12, boy: 34 } ] },
    adimlar: ["Pencil kuklasını ekle, kılık merkezini kalemin ucuna ayarla.", "Kalem eklentisini ekle.", "Boşluk tuşuna basılınca → kalemi bastır → x:0 y:0 git → 4 defa tekrarla (100 adım git, 90 derece dön).", "Projeyi “geometrik şekiller” adıyla kaydet.", "Yeşil bayrak tıklandığında → tümünü sil."],
    kitap: "s. 40–41 · 9. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde · Şekilleri geliştir",
    metin: "“geometrik şekiller” programını geliştir: a) Kare “k” tuşuyla çizilsin. b) Kalem rengi yeşil olsun. c) Kalınlık 3 olsun. ç) “u” tuşuna basınca üçgen çizilsin.",
    gorsel: { tip: "sahne", tus: "k · u", dekor: "beyaz", cizim: [ { noktalar: [[-150,40],[-50,40],[-50,-60],[-150,-60],[-150,40]], renk: "#27ae60", kalinlik: 3 }, { noktalar: [[40,-60],[160,-60],[100,44],[40,-60]], renk: "#27ae60", kalinlik: 3 } ] },
    kitap: "s. 41" },

  { tur: "test", sorular: [
    { soru: "Kare çizmek için döngü kaç kez tekrarlanmalı?", secenekler: ["3", "4", "5", "360"], dogru: 1 },
    { soru: "Eşkenar üçgen çizerken kalem her köşede kaç derece dönmeli?", secenekler: ["60", "90", "120", "180"], dogru: 2 },
    { soru: "Kalem bloklarını kullanabilmek için ne yapılmalı?", secenekler: ["Yeni kukla eklenmeli", "Kalem eklentisi eklenmeli", "Dekor değiştirilmeli", "Python sekmesi açılmalı"], dogru: 1 },
    { soru: "Önceki çizimleri sahneden temizleyen blok?", secenekler: ["kalemi kaldır", "tümünü sil", "gizlen", "kostümü değiştir"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Çiçek desen",
    gorsel: { tip: "bloklar", kod: "when [c v] key pressed\nerase all\npen down\nrepeat (36)\nrepeat (4)\nmove (80) steps\nturn cw (90) degrees\nend\nturn cw (10) degrees\nend" },
    not: "Kareyi 36 kez, her seferinde 10 derece dönerek çiz. İçteki döngüye iç içe döngü denir." }

]};
