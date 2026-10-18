// SPROG · 01 · Blok tabanlı programlama ve mBlock: kurulum, hesap  (Kitap s. 14–17)
window.KONU = { dil: "", slaytlar: [

  { tur: "hoca",
    ozet: "Dersin aracı mBlock (Scratch 3 tabanlı, ücretsiz). Programlama = problemi adım adım, mantıklı sırayla bilgisayara anlatmak. Blok tabanlı programlamada kod yazılmaz, hazır bloklar sürükle-bırak ile birleştirilir. mBlock çevrim içi (ide.mblock.cc) ya da indirilip çevrim dışı kullanılır. 1. Uygulama: hesap oluşturma. Sıra Sizde: herkes kendi hesabını açar.",
    akis: ["Hazırlık sorusu: Kodlama öğrenmek neden önemli? Hangi blok tabanlı araçları biliyorsunuz? (Scratch, mBlock, Code.org…)", "Programlama ve blok tabanlı programlama tanımı", "Çevrim içi / çevrim dışı kullanım", "1. Uygulama: hesap oluşturma (adım adım, tahtada göster)", "Sıra Sizde: herkes kendi hesabını açsın", "Test"],
    hatalar: ["Üye olmadan yapılan çalışmalar sadece o bilgisayara kaydedilir; okul bilgisayarı dondurulmuş (Deep Freeze) ise ders bitince silinir. Herkes giriş yapmalı.", "Doğrulama kodu e-postaya gelir; öğrencilerin e-posta şifrelerini bilmesi gerekir. Bilmeyenler için ders öncesi hatırlatın.", "Yaş seçiminde 13 yaş altı seçilirse veli onayı istenebilir."],
    sorular: [["Scratch ile mBlock farkı ne?", "mBlock, Scratch 3 üzerine kurulu; bloklar aynı. Ek olarak robot/kart (Arduino vb.) programlama ve Python sekmesi var."], ["Telefonda olur mu?", "ide.mblock.cc tarayıcıda açılır ama sürükle-bırak için bilgisayar çok daha rahat."]],
    not: "Kurulum için: mblock.cc/en/download → işletim sistemini seç → indir → kur. Okul laboratuvarında çevrim içi sürüm (ide.mblock.cc) kurulumsuz çalışır." },

  { tur: "bilgi", baslik: "Programlama nedir?",
    metin: "Bir problemin çözümü için gereken işlemleri, bilgisayarın anlayacağı şekilde <b>adım adım ve mantıklı bir sırayla</b> aktarmak.",
    gorsel: { tip: "ikili",
      sol: { baslik: "Kod yazarak", gorsel: { tip: "kartlar", kartlar: [ { ust: "⌨️ print(\"Merhaba\")", alt: "Python, C#, Java…" } ] } },
      sag: { baslik: "Blok birleştirerek", gorsel: { tip: "bloklar", kod: "when flag clicked\nsay [Merhaba!]" } },
      ok: "ya da" } },

  { tur: "bilgi", baslik: "Blok tabanlı programlama",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "🧩 Sürükle-bırak", alt: "Hazır bloklar birleştirilir, kod yazılmaz" },
      { ust: "🎮 Ne yapılır?", alt: "Oyun, animasyon, etkileşimli hikâye, proje" },
      { ust: "🌐 Paylaşım", alt: "Çalışmalar çevrim içi paylaşılır, başkalarının projeleri incelenir" },
      { ust: "🐼 mBlock", alt: "Ücretsiz, Scratch 3 tabanlı blok programlama aracı" }
    ]}},

  { tur: "bilgi", baslik: "mBlock'u nerede kullanırım?",
    gorsel: { tip: "ikili",
      sol: { baslik: "🌐 Çevrim içi", gorsel: { tip: "kartlar", kartlar: [ { ust: "ide.mblock.cc", alt: "Kurulum yok, tarayıcıda açılır" } ] } },
      sag: { baslik: "💻 Çevrim dışı", gorsel: { tip: "kartlar", kartlar: [ { ust: "mblock.cc/en/download", alt: "İndir, kur, internetsiz çalış" } ] } },
      ok: "·" },
    not: "Üye olmadan yapılan çalışmalar sadece o bilgisayara kaydedilir. Projeler <b>.mblock</b> uzantılıdır." },

  { tur: "uygulama", baslik: "1. Uygulama · mBlock hesabı aç",
    gorsel: { tip: "akis", adimlar: [
      { simge: "🌐", yazi: "ide.mblock.cc" },
      { simge: "🐼", yazi: "Sağ üstte panda simgesi" },
      { simge: "📝", yazi: "Kayıt ol", alt: "e-posta, yaş, sözleşme" },
      { simge: "🔑", yazi: "Parola + Kodu alın" },
      { simge: "📧", yazi: "E-postadaki kodu yaz → Kaydol" }
    ]},
    adimlar: ["ide.mblock.cc adresine gir.", "Sağ üstteki panda simgesine tıkla, “Kayıt ol” sekmesini seç.", "E-postanı yaz, yaşına uygun düğmeye tıkla, “Kabul ediyorum ve devam” de.", "Parolanı yaz, “Kodu alın”a tıkla.", "E-postana gelen kodu “Doğrulama kodu” kutusuna yaz, “Kaydol”a tıkla."],
    kitap: "s. 15–16 · 1. Uygulama" },

  { tur: "odev", baslik: "Sıra Sizde",
    metin: "mBlock programında kişisel bir hesap oluşturarak üyelik işlemini tamamla. Hesabınla giriş yapıp boş bir proje aç, adını “ilk projem” yap ve kaydet.",
    kitap: "s. 17" },

  { tur: "test", sorular: [
    { soru: "📖 mBlock programına çevrim içi kayıt sırasında hangi bilgiye gerek duyulur?", secenekler: ["Doğum tarihi", "E-posta", "Kullanıcı adı", "Telefon numarası", "Ülke bilgisi"], dogru: 1 },
    { soru: "Blok tabanlı programlamada kodlama nasıl yapılır?", secenekler: ["Komutlar klavyeyle yazılır", "Hazır bloklar sürükle-bırak ile birleştirilir", "Sesle komut verilir", "Çizim yapılır"], dogru: 1 },
    { soru: "mBlock projelerinin dosya uzantısı nedir?", secenekler: [".sb3", ".mblock", ".py", ".exe"], dogru: 1 },
    { soru: "Üye olmadan yapılan çalışmalar nereye kaydedilir?", secenekler: ["İnternete", "Sadece o bilgisayara", "E-postaya", "Hiçbir yere"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Başkalarının projelerini incele",
    adimlar: ["mBlock'ta Örnek Programlar bölümünü aç.", "Bir oyun seç, yeşil bayrağa bas, oyna.", "Kuklalara tıklayıp kodlarına bak: hangi renk bloklar kullanılmış?"],
    not: "Kitap: “Farklı projeler incelenerek elde edilen yeni fikirler yaratıcı düşünmeyi geliştirir.”" }

]};
