// WTUG — KONULAR TABLOSU
// Her konu: no, baslik, kitap (sayfa), hazir (içerik dosyası var mı)
// İçerik dosyası: veri/wtug/<no>.js   (örn. veri/wtug/01.js)
// Yeni konu: listeye satır ekle. İçerik yazılınca hazir: true yap.
window.KONULAR = {
  birimler: [
    { ad: "Temel Kavramlar", simge: "🧭", konular: [
      { no: "01", baslik: "Web dünyası: sayfa, site, alan adı, hosting", kitap: "s. 18–20", hazir: true },
      { no: "02", baslik: "Web yazılımcısı rolleri",                     kitap: "s. 20–22" },
      { no: "03", baslik: "HTML, CSS, editörler ve ilk sayfam",          kitap: "s. 22–23" }
    ]},
    { ad: "HTML5", simge: "🧱", konular: [
      { no: "04", baslik: "Belge yapısı",                                 kitap: "s. 42–54" },
      { no: "05", baslik: "Başlıklar: h1–h6",                             kitap: "s. 55–57" },
      { no: "06", baslik: "Paragraf ve metin biçimlendirme",              kitap: "s. 57–62, 69" },
      { no: "07", baslik: "Listeler",                                     kitap: "s. 63–65" },
      { no: "08", baslik: "Tablolar",                                     kitap: "s. 66–67" },
      { no: "09", baslik: "Hücre birleştirme: colspan, rowspan",          kitap: "s. 67–69" },
      { no: "10", baslik: "Kutular: div ve span",                         kitap: "s. 70–71" },
      { no: "11", baslik: "Sayfa iskeleti: header, nav, section…",        kitap: "s. 54, 72–76" },
      { no: "12", baslik: "Resimler",                                     kitap: "s. 77–78" },
      { no: "13", baslik: "Video ve ses",                                 kitap: "s. 79–84" },
      { no: "14", baslik: "Bağlantılar",                                  kitap: "s. 85–89" },
      { no: "15", baslik: "Sayfa içi ve sayfalar arası bağlantı",         kitap: "s. 87–89" },
      { no: "16", baslik: "Özel bağlantılar: resim, e-posta, dosya",      kitap: "s. 89–90" },
      { no: "17", baslik: "Formlar: form, input, button",                 kitap: "s. 91–94" },
      { no: "18", baslik: "Seçim listesi, textarea, meter, progress",     kitap: "s. 95–98" },
      { no: "19", baslik: "Veri giriş özellikleri",                       kitap: "s. 98–101" }
    ]},
    { ad: "Tasarım İlkeleri", simge: "🎨", konular: [
      { no: "20", baslik: "İyi site nasıl olur: içerik, tasarım, renk",   kitap: "s. 26–33" },
      { no: "21", baslik: "Kullanılabilirlik ve uyumluluk",               kitap: "s. 34–39" }
    ]},
    { ad: "CSS", simge: "🖌️", konular: [
      { no: "22", baslik: "CSS ekleme yöntemleri",                        kitap: "s. 104–108" },
      { no: "23", baslik: "Seçiciler 1: etiket, id, class, çoklu",        kitap: "s. 109–117" },
      { no: "24", baslik: "Seçiciler 2: çocuk, torun, sözde",             kitap: "s. 118–123" },
      { no: "25", baslik: "Kutu modeli",                                  kitap: "s. 124–127" },
      { no: "26", baslik: "Görünüm ve konum",                             kitap: "s. 127–136" },
      { no: "27", baslik: "Renk ve tipografi",                            kitap: "s. 137–141" },
      { no: "28", baslik: "Duyarlı tasarım: medya sorgusu",               kitap: "s. 142–145" }
    ]},
    { ad: "Bootstrap", simge: "🅱️", konular: [
      { no: "29", baslik: "Kurulum, konteyner, renk, grid",               kitap: "s. 146–150" },
      { no: "30", baslik: "Tipografi, tablo, uyarı, buton, badge",        kitap: "s. 151–156" },
      { no: "31", baslik: "Kart, menü, form, slider, modal, ikon",        kitap: "s. 156–163" }
    ]},
    { ad: "JavaScript", simge: "⚡", konular: [
      { no: "32", baslik: "JavaScript'e giriş ve seçiciler",              kitap: "s. 166–168" },
      { no: "33", baslik: "Değişkenler, veri tipleri, operatörler",       kitap: "s. 169–172" },
      { no: "34", baslik: "Olaylar ve fonksiyonlar",                      kitap: "s. 173–179" },
      { no: "35", baslik: "Karar yapıları: if, switch",                   kitap: "s. 180–184" },
      { no: "36", baslik: "Diziler",                                      kitap: "s. 185–187" },
      { no: "37", baslik: "Döngüler",                                     kitap: "s. 188–192" },
      { no: "38", baslik: "Zamanlayıcılar ve jQuery",                     kitap: "s. 193–199" }
    ]},
    { ad: "Arka Uç (.NET)", simge: "⚙️", konular: [
      { no: "39", baslik: ".NET Core ve kurulum",                         kitap: "s. 202–207" },
      { no: "40", baslik: "MVC: model, controller, view",                 kitap: "s. 207–221" },
      { no: "41", baslik: "Razor Pages",                                  kitap: "s. 222–225" },
      { no: "42", baslik: "Klasör yapısı ve ara katman",                  kitap: "s. 226–235" },
      { no: "43", baslik: "Yönlendirme (routing)",                        kitap: "s. 235–242" },
      { no: "44", baslik: "Form işlemleri: GET, POST, dosya",             kitap: "s. 242–250" },
      { no: "45", baslik: "Doğrulama ve Tag Helper",                      kitap: "s. 251–263" },
      { no: "46", baslik: "NuGet, EF Core, DbContext, migration",         kitap: "s. 263–273" },
      { no: "47", baslik: "Veri ekle, listele, güncelle, sil",            kitap: "s. 274–283" },
      { no: "48", baslik: "Tablolar arası ilişkiler",                     kitap: "s. 284–292" },
      { no: "49", baslik: "Yayınlama ve web servisler",                   kitap: "s. 293–313" }
    ]}
  ]
};
