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

// ── BLOK TABANLI PROGRAMLAMA (sprog) ────────────────────────────────────────
// Sahne: blok tabanlı programın sahnesi (x: -240…240, y: -180…180)
// { tip:"sahne", motor:"gd" (oyun motoru ön izlemesi), proje, dekor:"gok|deniz|cim|oda|uzay|kar|tiyatro|beyaz|<css renk>", izgara:true,
//   suslar:[{e,x,y,boy}], kuklalar:[{e,x,y,boy,balon,dusunce,ters,ad}], hareket:[{x1,y1,x2,y2}],
//   cizim:[{noktalar:[[x,y]...], renk, kalinlik}], sor:{soru,cevap}, degiskenler:[["Skor",5]], tus, yazi }
const DEKOR = {
  gok: ["#8fd3ff", "#e6f7ff"], deniz: ["#1e88c9", "#7fd0f5"], cim: ["#bfe8ff", "#e9f8ff", "#7cc96b"],
  oda: ["#f6e7cf", "#f6e7cf", "#c99a6b"], uzay: ["#0b1033", "#2a2f6b"], kar: ["#9fb7d6", "#e8f0fa", "#ffffff"],
  tiyatro: ["#4a1730", "#7a2850", "#5b3a22"], beyaz: ["#ffffff", "#ffffff"]
};
GORSEL.tipler.sahne = g => {
  const d = DEKOR[g.dekor || "beyaz"] || [g.dekor, g.dekor];
  const Y = y => -y, k = [];
  const gid = "dk" + String(d[0] + d[1]).replace(/[^a-z0-9]/gi, "");
  k.push(`<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${d[0]}"/><stop offset="1" stop-color="${d[1]}"/></linearGradient>
    <marker id="okb" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#333"/></marker></defs>`);
  k.push(`<rect x="-240" y="-180" width="480" height="360" fill="url(#${gid})"/>`);
  if (d[2]) k.push(`<rect x="-240" y="90" width="480" height="90" fill="${d[2]}"/>`);
  if (g.izgara) {
    for (let x = -200; x <= 200; x += 40) k.push(`<line x1="${x}" y1="-180" x2="${x}" y2="180" stroke="#0002"/>`);
    for (let y = -160; y <= 160; y += 40) k.push(`<line x1="-240" y1="${y}" x2="240" y2="${y}" stroke="#0002"/>`);
    k.push(`<line x1="-240" y1="0" x2="240" y2="0" stroke="#0007" stroke-width="1.5"/><line x1="0" y1="-180" x2="0" y2="180" stroke="#0007" stroke-width="1.5"/>`);
    [["240","232","-6","end"],["-240","-236","-6","start"]].forEach(([t,x,y,a]) => k.push(`<text x="${x}" y="${y}" font-size="12" text-anchor="${a}" fill="#333">x:${t}</text>`));
    k.push(`<text x="6" y="-168" font-size="12" fill="#333">y:180</text><text x="6" y="174" font-size="12" fill="#333">y:-180</text>`);
  }
  (g.suslar || []).forEach(s => k.push(`<text x="${s.x}" y="${Y(s.y)}" font-size="${s.boy || 40}" text-anchor="middle" dominant-baseline="central">${s.e}</text>`));
  (g.cizim || []).forEach(c => k.push(`<polyline points="${c.noktalar.map(p => p[0] + "," + Y(p[1])).join(" ")}" fill="none" stroke="${c.renk || "#2f80ed"}" stroke-width="${c.kalinlik || 3}" stroke-linejoin="round"/>`));
  (g.hareket || []).forEach(h => k.push(`<line x1="${h.x1}" y1="${Y(h.y1)}" x2="${h.x2}" y2="${Y(h.y2)}" stroke="#333" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#okb)"/>`));
  (g.kuklalar || []).forEach(s => {
    const b = s.boy || 56, x = s.x || 0, y = Y(s.y || 0);
    k.push(`<text x="${x}" y="${y}" font-size="${b}" text-anchor="middle" dominant-baseline="central"${s.ters ? ` transform="translate(${2 * x},0) scale(-1,1)"` : ""}>${s.e}</text>`);
    if (s.ad) k.push(`<text x="${x}" y="${y + b / 2 + 12}" font-size="12" text-anchor="middle" fill="#333" font-weight="700">${s.ad}</text>`);
    if (s.balon || s.dusunce) {
      const m = s.balon || s.dusunce, w = Math.max(40, m.length * 8.2 + 20), bx = Math.min(x + b / 3, 236 - w), by = y - b / 2 - 40;
      k.push(`<rect x="${bx}" y="${by}" width="${w}" height="30" rx="12" fill="#fff" stroke="#999" stroke-width="1.5"/>`);
      k.push(s.balon ? `<path d="M${bx + 14},${by + 29} l-4,12 l14,-12" fill="#fff" stroke="#999" stroke-width="1.5"/><rect x="${bx + 10}" y="${by + 26}" width="20" height="5" fill="#fff"/>`
        : `<circle cx="${bx + 10}" cy="${by + 38}" r="4" fill="#fff" stroke="#999"/><circle cx="${bx + 4}" cy="${by + 46}" r="2.5" fill="#fff" stroke="#999"/>`);
      k.push(`<text x="${bx + w / 2}" y="${by + 20}" font-size="14" text-anchor="middle" fill="#222">${kacis(m)}</text>`);
    }
  });
  (g.degiskenler || []).forEach(([a, v], i) => {
    const w = a.length * 7.5 + String(v).length * 8 + 30;
    k.push(`<rect x="-234" y="${-174 + i * 26}" width="${w}" height="22" rx="4" fill="#e6f0ff" stroke="#aac"/><text x="-228" y="${-158 + i * 26}" font-size="12" font-weight="700" fill="#444">${kacis(a)}</text>
      <rect x="${-234 + a.length * 7.5 + 10}" y="${-171 + i * 26}" width="${String(v).length * 8 + 14}" height="16" rx="8" fill="#ff8c1a"/><text x="${-234 + a.length * 7.5 + 17 + String(v).length * 4}" y="${-159 + i * 26}" font-size="12" text-anchor="middle" fill="#fff">${kacis(String(v))}</text>`);
  });
  if (g.sor) k.push(`<rect x="-228" y="104" width="456" height="66" rx="8" fill="#fff" stroke="#bbb"/><text x="-216" y="126" font-size="14" fill="#333">${kacis(g.sor.soru || "")}</text>
    <rect x="-216" y="136" width="400" height="24" rx="12" fill="#fff" stroke="#4c97ff" stroke-width="2"/><text x="-204" y="153" font-size="13" fill="#222">${kacis(g.sor.cevap || "")}</text>
    <circle cx="200" cy="148" r="11" fill="#4c97ff"/><text x="200" y="153" font-size="13" text-anchor="middle" fill="#fff">✓</text>`);
  return `<div class="sh-ust"><span>${g.motor === "gd" ? "▶ Ön izleme" : "🏁 ⏹"}</span><span>${kacis(g.proje || "")}</span>${g.tus ? `<span class="sh-tus">⌨️ ${kacis(g.tus)}</span>` : ""}</div>
    <svg viewBox="-240 -180 480 360" class="sh-svg" font-family="Segoe UI, Arial, sans-serif">${k.join("")}</svg>${g.yazi ? `<div class="r-yazi">${g.yazi}</div>` : ""}`;
};

// Kod blokları: scratchblocks ile çizilir (İngilizce yazılır, Türkçe gösterilir)
// { tip:"bloklar", kod:`when flag clicked\nsay [Merhaba!]` }
let sbYuk = null;
function sbYukle() {
  if (sbYuk) return sbYuk;
  const ekle = s => new Promise((ok, red) => { const e = document.createElement("script"); e.src = s; e.onload = ok; e.onerror = red; document.head.appendChild(e); });
  const k = "js/vendor/";
  return sbYuk = ekle(k + "scratchblocks.min.js").then(() => ekle(k + "scratchblocks-tr.js"));
}
function sbCiz() {
  const bek = document.querySelectorAll(".sb-bekle");
  if (!bek.length) return;
  sbYukle().then(() => bek.forEach(el => {
    if (!el.classList.contains("sb-bekle")) return;
    el.classList.remove("sb-bekle");
    try {
      const doc = scratchblocks.parse(el.textContent, { languages: ["en"] });
      doc.scripts.forEach(sc => sc.blocks.forEach(b => { if (typeof b.translate !== "function") b.translate = () => {}; }));
      doc.translate(scratchblocks.allLanguages.tr);
      el.textContent = "";
      el.appendChild(scratchblocks.render(doc, { style: "scratch3", scale: 0.75 }));
    } catch (e) { el.classList.add("sb-hata"); }
  })).catch(() => bek.forEach(el => el.classList.add("sb-hata")));
}
new MutationObserver(sbCiz).observe(document.documentElement, { childList: true, subtree: true });
GORSEL.tipler.bloklar = g => `<div class="sb-bekle">${kacis(g.kod)}</div>`;

// ── OYUN MOTORU (GDevelop) OLAY SAYFASI ─────────────────────────────────────
// { tip:"olaylar", sekme:"New scene (Events)", satirlar:[
//     { kosul:["Left key is pressed"], eylem:["Delete Oyuncu1"], alt:[ ...aynı yapı... ] },
//     { yorum:"Açıklama" } ] }
// Koşul boşsa "(koşul yok · her karede)" yazılır.
function olaySatir(r, d) {
  if (r.yorum) return `<div class="ol-yorum" style="margin-left:${d * 22}px">💬 ${r.yorum}</div>`;
  const kos = (r.kosul && r.kosul.length) ? r.kosul.map(x => `<div class="ol-k">${x}</div>`).join("") : `<div class="ol-k ol-bos">(koşul yok · her karede çalışır)</div>`;
  const eyl = (r.eylem || []).map(x => `<div class="ol-e">${x}</div>`).join("");
  return `<div class="ol-satir" style="margin-left:${d * 22}px"><div class="ol-kosul">${kos}</div><div class="ol-eylem">${eyl}</div></div>`
    + (r.alt || []).map(a => olaySatir(a, d + 1)).join("");
}
GORSEL.tipler.olaylar = g => `<div class="ol-ust">${g.sekme || "New scene (Events)"}</div>
  <div class="ol-baslik"><span>Koşullar</span><span>Eylemler</span></div>${g.satirlar.map(r => olaySatir(r, 0)).join("")}`;
