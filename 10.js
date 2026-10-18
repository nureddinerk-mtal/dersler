// YAPZ · 10 · Pandas: concat, merge, join  (Kitap s. 49–52)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "Üç birleştirme yolu: concat (tabloları alt alta / yan yana ekle), merge (ortak sütuna göre eşleştir, SQL JOIN gibi), join (indekse göre eşleştir). how parametresi: inner (sadece eşleşenler), left (soldakilerin hepsi), right, outer (hepsi). Eşleşmeyen hücrelere NaN (boş) gelir; bunu 22. konuda (eksik veri) temizleyeceğiz.",
    akis: ["concat ve ignore_index (25. Uyg)", "merge ve how (26. Uyg)", "join ve how (27. Uyg)"],
    hatalar: ["concat sonrası indekslerin tekrar etmesini (0,1,2,3,0,1,2,3) fark etmemek → ignore_index=True.", "merge'de on= sütununu yazmamak.", "NaN'ı hata sanmak: eşleşme yok demektir."],
    sorular: [["NaN ne demek?", "Not a Number: o hücrede veri yok."], ["merge ile join farkı?", "merge genelde ortak bir sütuna, join indekse göre birleştirir."]]},

  { tur: "bilgi", baslik: "Üç birleştirme yolu",
    gorsel: { tip: "kartlar", kartlar: [
      { ust: "📚 concat", alt: "Alt alta ya da yan yana ekle" },
      { ust: "🔗 merge", alt: "Ortak sütuna göre eşleştir" },
      { ust: "🧷 join", alt: "İndekse göre eşleştir" }
    ]},
    kod: `pd.concat([df1, df2], ignore_index=True)
pd.merge(sol, sag, on="anahtar", how="left")
df1.join(df2, how="outer")` },

  { tur: "bilgi", baslik: "how: kimleri alalım?",
    gorsel: { tip: "html", icerik: `<div style="display:flex;gap:18px;justify-content:center;flex-wrap:wrap;text-align:center;font-size:.85rem;font-weight:600">
      ${[["inner","sadece ikisinde olanlar","0 0 0 0 / 50% 50%",""],["left","soldakilerin hepsi","",""],["right","sağdakilerin hepsi","",""],["outer","hepsi","",""]].map((h,i)=>`<div><svg width="84" height="54"><circle cx="30" cy="27" r="22" fill="${i==1||i==3?'#9b51e0':'#eee'}" stroke="#555"/><circle cx="54" cy="27" r="22" fill="${i==2||i==3?'#9b51e0':'#eee'}" stroke="#555" fill-opacity=".85"/><path d="M42 9 A22 22 0 0 1 42 45 A22 22 0 0 1 42 9" fill="#9b51e0"/></svg><br>${h[0]}<br><small style="font-weight:400">${h[1]}</small></div>`).join("")}</div>` } },

  { tur: "uygulama", baslik: "concat",
    metin: "Sayılar rastgele.",
    gorsel: { tip: "resim", yol: G + "10-u25.png" },
    adimlar: ["1–20 ve 20–40 arası iki 4×3 rastgele dizi → x, y, z sütunlu iki DataFrame.", "concat ile birleştir; ignore_index=True ile indeksleri düzelt.", "df2'nin son sütununu “a” yap, tekrar birleştir: NaN'lar nereden geldi?", "join=\"inner\" ile sadece ortak sütunları al."],
    kitap: "s. 50 · 25. Uygulama" },

  { tur: "uygulama", baslik: "merge",
    gorsel: { tip: "resim", yol: G + "10-u26.png" },
    adimlar: ["sol (anahtar, X, Y) ve sag (anahtar, Z, T) tablolarını kur.", "anahtar sütunu üzerinden merge.", "sag'da A3'ü A4 yap, tekrar merge: hangi satır kayboldu?", "how=\"left\" ve how=\"right\" ile dene."],
    kitap: "s. 51 · 26. Uygulama" },

  { tur: "uygulama", baslik: "join",
    gorsel: { tip: "resim", yol: G + "10-u27.png" },
    adimlar: ["İndeksleri K0, K1, K2 olan df1 ve K0, K2, K3 olan df2.", "df1.join(df2).", "how=\"outer\" ve how=\"inner\" ile karşılaştır."],
    kitap: "s. 51–52 · 27. Uygulama" },

  { tur: "test", sorular: [
    { soru: "İki tabloyu ortak “OgrNo” sütununa göre birleştirmek için?", secenekler: ["pd.concat", "pd.merge(..., on=\"OgrNo\")", "df.head()", "df.drop()"], dogru: 1 },
    { soru: "Sadece iki tabloda da olan kayıtları getiren how?", secenekler: ["left", "right", "inner", "outer"], dogru: 2 },
    { soru: "concat sonrası indeksleri 0'dan baştan numaralandıran?", secenekler: ["ignore_index=True", "axis=1", "how='outer'", "on='index'"], dogru: 0, kod: true },
    { soru: "Birleştirmede eşleşmeyen hücrelere ne yazılır?", secenekler: ["0", "NaN", "None yazısı", "Hata verir"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Yan yana concat",
    kod: `pd.concat([df1, df2], axis=1)`,
    not: "07'deki axis mantığı burada da geçerli: axis=1 tabloları yan yana ekler." }

]};
