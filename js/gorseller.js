// GÖRSEL ÇİZİCİLER — slaytlardaki "gorsel" alanını resme çevirir
// Yeni görsel tipi eklemek için: GORSEL.tipler.yeniTip = g => "<html>";
window.GORSEL = {
  tipler: {},
  ciz(g) {
    if (!g) return "";
    if (Array.isArray(g)) return g.map(x => this.ciz(x)).join("");
    const f = this.tipler[g.tip];
    return f ? `<div class="gorsel g-${g.tip}">${f(g)}</div>` : "";
  }
};

const R = ["#2f80ed", "#27ae60", "#f2994a", "#9b51e0", "#eb5757", "#2d9cdb", "#f2c94c"];
const BS4 = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">';

// Oklu akış: A → B → C
GORSEL.tipler.akis = g => g.adimlar.map((a, i) => `
  <div class="a-grup">${i ? `<span class="ok">➜</span>` : ""}
  <div class="adim" style="--r:${a.renk || R[i % R.length]}">
    <div class="a-simge">${a.simge || ""}</div>
    <div class="a-yazi">${a.yazi}</div>
    ${a.alt ? `<div class="a-alt">${a.alt}</div>` : ""}
  </div></div>`).join("");

// Renkli kartlar ızgarası
GORSEL.tipler.kartlar = g => g.kartlar.map((k, i) => `
  <div class="kart" style="--r:${k.renk || R[i % R.length]}">
    <div class="k-ust">${k.ust}</div>
    <div class="k-alt">${k.alt || ""}</div>
  </div>`).join("");

// Bir ifadeyi parçalara ayırıp altına etiket yazar (örn. alan adı)
GORSEL.tipler.parcala = g => g.parcalar.map((p, i) => `
  ${i && g.ayrac ? `<span class="ayrac">${g.ayrac}</span>` : ""}
  <div class="parca" style="--r:${p.renk || R[i % R.length]}">
    <div class="p-yazi">${p.yazi}</div>
    <div class="p-etiket">${p.etiket || ""}</div>
  </div>`).join("");

// Resim dosyası (uygulama hedefleri, ekran görüntüleri)
GORSEL.tipler.resim = g => `<img src="${g.yol}" alt="${g.alt || ""}">${g.yazi ? `<div class="r-yazi">${g.yazi}</div>` : ""}`;

// Serbest HTML / SVG
GORSEL.tipler.html = g => g.icerik;

// Tarayıcı penceresi: içerik ayrı bir çerçevede çizilir (sitenin stiline karışmaz)
// { tip:"tarayici", adres, icerik, bs:true (Bootstrap 4 ekle) }
GORSEL.tipler.tarayici = g => {
  const belge = `<!doctype html><html><head><meta charset="utf-8">${g.bs ? BS4 : ""}<base href="${location.href}">
    <style>body{margin:8px 12px;font-family:'Times New Roman',serif}</style></head><body>${g.icerik}</body></html>`;
  return `<div class="t-cubuk"><span class="t-nokta">●●●</span><div class="t-adres">${g.adres || "sayfa.html"}</div></div>
    <iframe class="t-cerceve" srcdoc="${kacis(belge)}" onload="try{this.style.height=this.contentDocument.documentElement.scrollHeight+'px'}catch(e){}"></iframe>`;
};

// Yan yana iki görsel (önce / sonra karşılaştırması)
GORSEL.tipler.ikili = g => `
  <div class="i-kutu"><div class="i-baslik">${g.sol.baslik}</div>${GORSEL.ciz(g.sol.gorsel)}</div>
  <div class="i-ok">${g.ok || "➜"}</div>
  <div class="i-kutu"><div class="i-baslik">${g.sag.baslik}</div>${GORSEL.ciz(g.sag.gorsel)}</div>`;

// Çok sayfalı site: ana sayfa solda, hangi butonun hangi sayfayı açtığı oklarla
// { tip:"sayfalar", ana:{resim, ad}, dallar:[{buton, resim, ad}] }
GORSEL.tipler.sayfalar = g => `
  <figure class="s-ana"><img src="${g.ana.resim}" alt=""><figcaption>${g.ana.ad}</figcaption></figure>
  <div class="s-dallar">${g.dallar.map(d => `
    <div class="s-dal">
      <div class="s-ok"><span class="s-buton">${d.buton}</span><span class="s-cizgi">➜</span></div>
      <figure><img src="${d.resim}" alt=""><figcaption>${d.ad}</figcaption></figure>
    </div>`).join("")}
  </div>`;

// İç içe kutular (belge yapısı, sayfa iskeleti, klasör yapısı)
// { tip:"agac", kok:{ad, renk, alt, cocuklar:[...], yan:true (çocukları yan yana diz)} }
function agacCiz(n, i = 0) {
  const r = n.renk || R[i % R.length];
  return `<div class="ag-dugum" style="--r:${r}">
    <div class="ag-ad">${n.ad}${n.alt ? `<span class="ag-alt">${n.alt}</span>` : ""}</div>
    ${n.cocuklar ? `<div class="ag-cocuk ${n.yan ? "yan" : ""}">${n.cocuklar.map((c, j) => agacCiz(c, i + j + 1)).join("")}</div>` : ""}
  </div>`;
}
GORSEL.tipler.agac = g => agacCiz(g.kok);

// Terminal: komut ve çıktısı { tip:"terminal", satirlar:["> komut", "çıktı"] }
GORSEL.tipler.terminal = g => `<div class="tr-ust">● ● ● ${g.baslik || "Terminal"}</div><pre>${g.satirlar.map(s =>
  s.startsWith(">") ? `<b>${kacis(s)}</b>` : kacis(s)).join("\n")}</pre>`;

// API isteği ve cevabı (Postman benzeri) { tip:"istek", metot:"GET", adres, govde, cevap }
GORSEL.tipler.istek = g => `
  <div class="is-satir"><span class="is-metot m-${g.metot}">${g.metot}</span><span class="is-adres">${g.adres}</span></div>
  ${g.govde ? `<div class="is-etiket">Gönderilen</div><pre class="is-kutu">${kacis(g.govde)}</pre>` : ""}
  <div class="is-etiket">Cevap</div><pre class="is-kutu cevap">${kacis(g.cevap)}</pre>`;

// Veri tabanı tablosu: { tip:"tablo", ad, sutunlar:[], satirlar:[[...]], anahtar:"Id", yabanci:"KitapTurId" }
function tabloCiz(t) {
  return `<div class="vt">
    <div class="vt-ad">🗄️ ${t.ad}</div>
    <table><thead><tr>${t.sutunlar.map(s => `<th>${s === t.anahtar ? "🔑 " : ""}${[].concat(t.yabanci || []).includes(s) ? "🔗 " : ""}${s}</th>`).join("")}</tr></thead>
    <tbody>${(t.satirlar || []).map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>
  </div>`;
}
GORSEL.tipler.tablo = g => tabloCiz(g);

// İlişkili tablolar: { tip:"tablolar", tablolar:[...], iliski:"1 ⟷ ∞" veya her ara için dizi }
GORSEL.tipler.tablolar = g => g.tablolar.map((t, i) =>
  (i ? `<div class="vt-ok"><span>${(Array.isArray(g.iliski) ? g.iliski[i - 1] : g.iliski) || ""}</span>⟷</div>` : "") + tabloCiz(t)).join("");
