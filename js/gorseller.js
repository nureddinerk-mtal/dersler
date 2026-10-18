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
    ${t.ad ? `<div class="vt-ad">🗄️ ${t.ad}</div>` : ""}
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

// ── WINDOWS PENCERESİ (sun) ─────────────────────────────────────────────────
// { tip:"pencere", baslik:"…", menu:["Dosya","Eylem"], sol:["Disk Yönetimi*", "Olay Görüntüleyicisi"] (yıldız = seçili),
//   satirlar:[ {baslik:"Bölüm başlığı"}, {etiket:"IP adresi", deger:"192.168.1.254"}, {radyo:"…", secili:true},
//              {kutu:"…", secili:true}, {metin:"açıklama"}, {liste:["a","b"], secili:0}, {tablo:{sutunlar:[…], satirlar:[[…]]}} ],
//   dugmeler:["Tamam","İptal"], vurgu:"Tamam" }
function pSatir(r) {
  if (r.baslik) return `<div class="pw-bb">${r.baslik}</div>`;
  if (r.etiket !== undefined) return `<div class="pw-alan"><span>${r.etiket}</span><span class="pw-kutu">${r.deger === undefined ? "" : r.deger}</span></div>`;
  if (r.radyo) return `<div class="pw-sec">${r.secili ? "◉" : "○"} ${r.radyo}</div>`;
  if (r.kutu) return `<div class="pw-sec">${r.secili ? "☑" : "☐"} ${r.kutu}</div>`;
  if (r.liste) return `<div class="pw-liste">${r.liste.map((x, i) => `<div${i === r.secili ? ' class="sec"' : ""}>${x}</div>`).join("")}</div>`;
  if (r.tablo) return tabloCiz(r.tablo);
  if (r.metin) return `<div class="pw-metin">${r.metin}</div>`;
  if (r.resim) return `<div class="pw-resim" style="--r:${r.renk || "#dfe6f1"}"><span>${r.resim}</span>${r.yazi ? `<small>${r.yazi}</small>` : ""}</div>`;
  if (r.dugme) return `<div class="pw-dsatir"><span class="pw-d${r.vurgu ? " v" : ""}">${r.dugme}</span></div>`;
  if (r.ikonlar) return `<div class="pw-ikonlar">${r.ikonlar.map((x, i) => `<span${i === r.secili ? ' class="sec"' : ""}>${x}</span>`).join("")}</div>`;
  return "";
}
GORSEL.tipler.pencere = g => `<div class="pw-ust"><span>${g.baslik || ""}</span><span class="pw-x">─ ☐ ✕</span></div>
  ${g.menu ? `<div class="pw-menu">${g.menu.map(m => `<span>${m}</span>`).join("")}</div>` : ""}
  <div class="pw-govde">${g.sol ? `<div class="pw-sol">${g.sol.map(s => s.endsWith("*") ? `<div class="sec">${s.slice(0, -1)}</div>` : `<div>${s}</div>`).join("")}</div>` : ""}
  <div class="pw-ic">${(g.satirlar || []).map(pSatir).join("")}</div></div>
  ${g.dugmeler ? `<div class="pw-alt">${g.dugmeler.map(d => `<span class="pw-d${d === g.vurgu ? " v" : ""}">${d}</span>`).join("")}</div>` : ""}`;

// ── DİSK YÖNETİMİ ŞERİDİ ────────────────────────────────────────────────────
// { tip:"disk", diskler:[{ ad:"Disk 1", boyut:"20 GB", tur:"Temel", bolumler:[{ ad:"E:", boyut:"5 GB", tur:"birincil", oran:1 }] }] }
// tur: birincil · genisletilmis · mantiksal · bos · basit · yayilmis · seritli · aynali · raid5 · sistem
const DISKRENK = { birincil: "#2f6fd6", genisletilmis: "#27ae60", mantiksal: "#2f6fd6", bos: "#222", basit: "#7a4bc2", yayilmis: "#9b6b2f", seritli: "#2aa198", aynali: "#b03a6f", raid5: "#2d9cdb", sistem: "#2f6fd6" };
const DISKAD = { birincil: "Birincil bölüm", genisletilmis: "Genişletilmiş", mantiksal: "Mantıksal sürücü", bos: "Ayrılmamış", basit: "Basit birim", yayilmis: "Yayılmış birim", seritli: "Şeritli birim", aynali: "Yansıtılmış birim", raid5: "RAID-5 birimi", sistem: "Sistem" };
GORSEL.tipler.disk = g => g.diskler.map(d => `<div class="dk-satir"><div class="dk-bas"><b>${d.ad}</b><span>${d.tur || "Temel"}</span><span>${d.boyut || ""}</span><span>${d.durum || "Çevrimiçi"}</span></div>
  <div class="dk-serit">${d.bolumler.map(b => `<div class="dk-b${b.tur === "genisletilmis" ? " dk-gen" : ""}" style="flex:${b.oran || 1};--r:${DISKRENK[b.tur] || "#2f6fd6"}">${b.ic ? `<div class="dk-serit dk-icseri">${b.ic.map(c => `<div class="dk-b" style="flex:${c.oran || 1};--r:${DISKRENK[c.tur] || "#2f6fd6"}"><b>${c.ad || ""}</b><span>${c.boyut || ""}</span><span>${DISKAD[c.tur] || ""}</span></div>`).join("")}</div>` : `<b>${b.ad || ""}</b><span>${b.boyut || ""}</span><span>${b.etiket || DISKAD[b.tur] || ""}</span>`}</div>`).join("")}</div></div>`).join("")
  + `<div class="dk-lej">${[...new Set(g.diskler.flatMap(d => d.bolumler.flatMap(b => b.ic ? [b.tur, ...b.ic.map(c => c.tur)] : [b.tur])))].map(t => `<span><i style="background:${DISKRENK[t]}"></i>${DISKAD[t]}</span>`).join("")}</div>`;

// ── TELEFON EKRANI (sos) ────────────────────────────────────────────────────
// { tip:"telefon", baslik:"Ayrıntıları ekle", geri:true, sag:"YÜKLE", satirlar:[…pencere satırları…, {resim:"🎬", yazi:"önizleme"}, {dugme:"İleri", vurgu:true}, {ikonlar:["🏠","➕","📚"], secili:1}], alt:["🏠","➕","📚"], altSecili:1 }
GORSEL.tipler.telefon = g => `<div class="tf-cerceve${g.koyu ? " koyu" : ""}"><div class="tf-durum"><span>9:41</span><span>📶 🔋</span></div>
  <div class="tf-ust">${g.geri ? "<b>‹</b>" : ""}<span>${g.baslik || ""}</span>${g.sag ? `<em>${g.sag}</em>` : ""}</div>
  <div class="tf-ekran">${(g.satirlar || []).map(pSatir).join("")}</div>
  ${g.alt ? `<div class="tf-alt">${g.alt.map((x, i) => `<span${i === g.altSecili ? ' class="sec"' : ""}>${x}</span>`).join("")}</div>` : ""}</div>`;

// ── GRAFİK (sos · veri analizi) ─────────────────────────────────────────────
// { tip:"grafik", tur, baslik, etiketler:[…], seriler:[{ad, degerler:[…], renk, tur:"cizgi"|"alan"|"sutun", sag:true}], xBaslik, yBaslik, sagBaslik }
// tur: sutun · cubuk · cizgi · alan · bilesik · pasta · halka · histogram · selale · huni · kutu · radar · dagilim · kabarcik · hisse · agacharita · gunes
//   dagilim/kabarcik: noktalar:[{x, y, r, etiket}] · hisse: mumlar:[{a, y, d, k}] (açılış, en yüksek, en düşük, kapanış)
//   agacharita/gunes: agac:[{ad, cocuklar:[{ad, deger} | {ad, cocuklar:[…]}]}]
const GRENK = ["#2f80ed", "#eb5757", "#27ae60", "#f2994a", "#9b51e0", "#2d9cdb", "#f2c94c", "#8d6e63", "#56ccf2", "#6fcf97"];
const gSay = v => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 1, notation: Math.abs(v) >= 1000000 ? "compact" : "standard" }).format(v);
function gAdim(min, max, n = 5) {
  if (min === max) { max = min + 1; }
  const ham = (max - min) / n, us = Math.pow(10, Math.floor(Math.log10(ham))), k = ham / us;
  const adim = (k <= 1 ? 1 : k <= 2 ? 2 : k <= 2.5 ? 2.5 : k <= 5 ? 5 : 10) * us;
  const a = Math.floor(min / adim) * adim, b = Math.ceil(max / adim) * adim, t = [];
  for (let v = a; v <= b + adim / 2; v += adim) t.push(+v.toFixed(10));
  return t;
}
const gYazi = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-size="${o.fs || 11}" text-anchor="${o.ta || "middle"}" fill="${o.r || "#444"}"${o.b ? ' font-weight="bold"' : ""}${o.don ? ` transform="rotate(${o.don} ${x} ${y})"` : ""}>${s}</text>`;
const gLejant = (adlar, renkler, W, y) => { let x = 10, h = ""; adlar.forEach((a, i) => { h += `<rect x="${x}" y="${y - 9}" width="10" height="10" rx="2" fill="${renkler[i]}"/>` + gYazi(x + 14, y, a, { ta: "start", fs: 11 }); x += 24 + a.length * 6.2; }); return h; };
function gEksenli(g) {
  const W = 560, H = 320, L = 58, R = g.seriler.some(s => s.sag) ? 58 : 16, T = 18, B = g.xBaslik ? 58 : 44;
  const pw = W - L - R, ph = H - T - B, et = g.etiketler || [], n = et.length;
  const sol = g.seriler.filter(s => !s.sag), sag = g.seriler.filter(s => s.sag);
  const ext = ss => { const v = ss.flatMap(s => s.degerler); return [Math.min(0, ...v), Math.max(...v)]; };
  const tS = gAdim(...ext(sol)), tR = sag.length ? gAdim(...ext(sag)) : null;
  const yS = v => T + ph - (v - tS[0]) / (tS.at(-1) - tS[0]) * ph, yR = v => T + ph - (v - tR[0]) / (tR.at(-1) - tR[0]) * ph;
  const bw = pw / n, xm = i => L + bw * (i + .5);
  let h = tS.map(t => `<line x1="${L}" x2="${L + pw}" y1="${yS(t)}" y2="${yS(t)}" stroke="#e3e3e3"/>` + gYazi(L - 6, yS(t) + 4, gSay(t), { ta: "end", fs: 10 })).join("");
  if (tR) h += tR.map(t => gYazi(L + pw + 6, yR(t) + 4, gSay(t), { ta: "start", fs: 10 })).join("");
  const sutunlar = g.seriler.filter(s => (s.tur || g.tur) === "sutun" || g.tur === "histogram"), sw = (g.tur === "histogram" ? bw : bw * .7) / Math.max(1, sutunlar.length);
  g.seriler.forEach((s, si) => {
    const renk = s.renk || GRENK[si], y = s.sag ? yR : yS, tur = g.tur === "histogram" ? "sutun" : (s.tur || g.tur);
    if (tur === "sutun") { const k = sutunlar.indexOf(s); s.degerler.forEach((v, i) => { const x0 = g.tur === "histogram" ? L + bw * i : xm(i) - bw * .35 + k * sw; h += `<rect x="${x0}" y="${y(v)}" width="${sw - (g.tur === "histogram" ? 1 : 2)}" height="${y(0) - y(v)}" fill="${renk}"/>`; if (g.degerYaz) h += gYazi(x0 + sw / 2, y(v) - 4, gSay(v), { fs: 9 }); }); }
    else {
      const pts = s.degerler.map((v, i) => `${xm(i)},${y(v)}`).join(" ");
      if (tur === "alan") h += `<polygon points="${xm(0)},${y(0)} ${pts} ${xm(n - 1)},${y(0)}" fill="${renk}" fill-opacity=".45" stroke="${renk}"/>`;
      else h += `<polyline points="${pts}" fill="none" stroke="${renk}" stroke-width="2.5"/>` + s.degerler.map((v, i) => `<circle cx="${xm(i)}" cy="${y(v)}" r="3.5" fill="${renk}"/>`).join("");
    }
  });
  h += `<line x1="${L}" x2="${L + pw}" y1="${yS(tS[0])}" y2="${yS(tS[0])}" stroke="#888"/>`;
  h += et.map((e, i) => gYazi(xm(i), T + ph + 15, e, { fs: n > 8 ? 9 : 10.5 })).join("");
  if (g.xBaslik) h += gYazi(L + pw / 2, T + ph + 32, g.xBaslik, { fs: 11, b: true });
  if (g.yBaslik) h += gYazi(14, T + ph / 2, g.yBaslik, { fs: 11, b: true, don: -90 });
  if (g.sagBaslik) h += gYazi(W - 8, T + ph / 2, g.sagBaslik, { fs: 11, b: true, don: 90 });
  if (g.seriler.length > 1 || g.lejant) h += gLejant(g.seriler.map(s => s.ad), g.seriler.map((s, i) => s.renk || GRENK[i]), W, H - 6);
  return [W, H, h];
}
function gCubuk(g) {
  const s = g.seriler[0], et = g.etiketler, n = et.length, W = 560, H = 40 + n * 40, L = 70, R = 70, pw = W - L - R;
  const t = gAdim(0, Math.max(...s.degerler)), x = v => L + v / t.at(-1) * pw;
  let h = t.map(v => `<line x1="${x(v)}" x2="${x(v)}" y1="10" y2="${H - 26}" stroke="#e3e3e3"/>` + gYazi(x(v), H - 10, gSay(v), { fs: 10 })).join("");
  s.degerler.forEach((v, i) => { const y = 16 + i * 40; h += `<rect x="${L}" y="${y}" width="${x(v) - L}" height="26" fill="${(g.renkler || GRENK)[i % 10]}"/>` + gYazi(L - 6, y + 17, et[i], { ta: "end" }) + gYazi(x(v) + 4, y + 17, gSay(v), { ta: "start", fs: 10 }); });
  return [W, H, h];
}
const gAltLejant = (adlar, renkler, W, y0) => { const k = 2, sw = W / k; return adlar.map((a, i) => { const x = 20 + (i % k) * sw, y = y0 + Math.floor(i / k) * 22; return `<rect x="${x}" y="${y - 11}" width="13" height="13" rx="2" fill="${renkler[i]}"/>` + gYazi(x + 19, y, a, { ta: "start", fs: 13 }); }).join(""); };
const gAltH = (n, y0) => y0 + Math.ceil(n / 2) * 22;
function gPasta(g) {
  const v = g.seriler[0].degerler, top = v.reduce((a, b) => a + b, 0), et = g.etiketler || [], W = 420, cx = 210, cy = 135, r = 120, ri = g.tur === "halka" ? 62 : 0, H = gAltH(et.length, 288);
  let a = -Math.PI / 2, h = "";
  v.forEach((d, i) => {
    const b = a + d / top * Math.PI * 2, buyuk = b - a > Math.PI ? 1 : 0, p = (rr, t) => `${cx + rr * Math.cos(t)},${cy + rr * Math.sin(t)}`;
    const yol = ri ? `M${p(r, a)} A${r},${r} 0 ${buyuk} 1 ${p(r, b)} L${p(ri, b)} A${ri},${ri} 0 ${buyuk} 0 ${p(ri, a)}Z` : `M${cx},${cy} L${p(r, a)} A${r},${r} 0 ${buyuk} 1 ${p(r, b)}Z`;
    h += `<path d="${d / top > .9999 ? `M${cx - r},${cy} a${r},${r} 0 1 0 ${2 * r},0 a${r},${r} 0 1 0 ${-2 * r},0` : yol}" fill="${GRENK[i % 10]}" stroke="#fff" stroke-width="1.5"/>`;
    const orta = (a + b) / 2, yuz = d / top * 100;
    if (yuz >= 4) h += gYazi(cx + (ri ? (r + ri) / 2 : r * .62) * Math.cos(orta), cy + (ri ? (r + ri) / 2 : r * .62) * Math.sin(orta) + 4, `%${gSay(yuz)}`, { fs: 11, r: "#fff", b: true });
    a = b;
  });
  h += gAltLejant(et.map((e, i) => `${e} · ${gSay(v[i])}`), et.map((_, i) => GRENK[i % 10]), W, 288);
  return [W, H, h];
}
function gSelale(g) {
  const v = g.seriler[0].degerler, et = [...g.etiketler, g.toplamAd || "Toplam"], W = 560, H = 320, L = 58, T = 18, B = 50, pw = W - L - 16, ph = H - T - B;
  let k = 0; const bas = [], son = []; v.forEach(d => { bas.push(k); k += d; son.push(k); }); bas.push(0); son.push(k);
  const t = gAdim(Math.min(0, ...son), Math.max(...bas, ...son)), y = d => T + ph - (d - t[0]) / (t.at(-1) - t[0]) * ph, bw = pw / et.length;
  let h = t.map(d => `<line x1="${L}" x2="${L + pw}" y1="${y(d)}" y2="${y(d)}" stroke="#e3e3e3"/>` + gYazi(L - 6, y(d) + 4, gSay(d), { ta: "end", fs: 10 })).join("");
  et.forEach((e, i) => { const a = bas[i], b = son[i], top = i === et.length - 1, renk = top ? "#7f8c8d" : (b >= a ? "#2f80ed" : "#eb5757"), x = L + bw * i + bw * .15;
    h += `<rect x="${x}" y="${y(Math.max(a, b))}" width="${bw * .7}" height="${Math.abs(y(a) - y(b))}" fill="${renk}"/>` + gYazi(x + bw * .35, y(Math.max(a, b)) - 4, (top ? "" : (b >= a ? "+" : "")) + gSay(top ? b : b - a), { fs: 10 }) + gYazi(x + bw * .35, T + ph + 16, e, { fs: 10 });
    if (i < et.length - 1) h += `<line x1="${x + bw * .7}" x2="${x + bw}" y1="${y(b)}" y2="${y(b)}" stroke="#999" stroke-dasharray="3 2"/>`; });
  return [W, H, h];
}
function gHuni(g) {
  const v = g.seriler[0].degerler, et = g.etiketler, mx = Math.max(...v), W = 560, H = 30 + v.length * 52, cx = 280;
  return [W, H, v.map((d, i) => { const w = Math.max(40, d / mx * 420), y = 14 + i * 52; return `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="42" rx="4" fill="${GRENK[i % 10]}"/>` + gYazi(cx, y + 18, et[i], { r: "#fff", b: true, fs: 12 }) + gYazi(cx, y + 34, gSay(d), { r: "#fff", fs: 11 }); }).join("")];
}
function gKutu(g) {
  const W = 560, H = 320, L = 50, T = 18, B = 50, pw = W - L - 16, ph = H - T - B, n = g.seriler.length, bw = pw / n;
  const yuzde = (s, p) => { const i = (s.length - 1) * p, a = Math.floor(i); return s[a] + (s[Math.ceil(i)] - s[a]) * (i - a); };
  const t = gAdim(Math.min(0, ...g.seriler.flatMap(s => s.degerler)), Math.max(...g.seriler.flatMap(s => s.degerler))), y = d => T + ph - (d - t[0]) / (t.at(-1) - t[0]) * ph;
  let h = t.map(d => `<line x1="${L}" x2="${L + pw}" y1="${y(d)}" y2="${y(d)}" stroke="#e3e3e3"/>` + gYazi(L - 6, y(d) + 4, gSay(d), { ta: "end", fs: 10 })).join("");
  g.seriler.forEach((s, i) => { const d = [...s.degerler].sort((a, b) => a - b), q1 = yuzde(d, .25), md = yuzde(d, .5), q3 = yuzde(d, .75), ort = d.reduce((a, b) => a + b, 0) / d.length, cx = L + bw * (i + .5), w = bw * .4, r = s.renk || GRENK[i];
    h += `<line x1="${cx}" x2="${cx}" y1="${y(d[0])}" y2="${y(q1)}" stroke="#555"/><line x1="${cx}" x2="${cx}" y1="${y(q3)}" y2="${y(d.at(-1))}" stroke="#555"/>`
      + `<line x1="${cx - w / 3}" x2="${cx + w / 3}" y1="${y(d[0])}" y2="${y(d[0])}" stroke="#555"/><line x1="${cx - w / 3}" x2="${cx + w / 3}" y1="${y(d.at(-1))}" y2="${y(d.at(-1))}" stroke="#555"/>`
      + `<rect x="${cx - w / 2}" y="${y(q3)}" width="${w}" height="${y(q1) - y(q3)}" fill="${r}" fill-opacity=".55" stroke="${r}"/>`
      + `<line x1="${cx - w / 2}" x2="${cx + w / 2}" y1="${y(md)}" y2="${y(md)}" stroke="#222" stroke-width="2"/>` + gYazi(cx, y(ort) + 4, "✕", { fs: 12, b: true, r: "#222" }) + gYazi(cx, T + ph + 16, s.ad); });
  return [W, H, h];
}
function gRadar(g) {
  const et = g.etiketler, n = et.length, W = 420, H = gAltH(g.seriler.length, 330), cx = 210, cy = 160, r = 115, mx = g.max || Math.max(...g.seriler.flatMap(s => s.degerler)), mn = g.min || 0;
  const p = (i, v) => { const t = -Math.PI / 2 + i * 2 * Math.PI / n, rr = (v - mn) / (mx - mn) * r; return [cx + rr * Math.cos(t), cy + rr * Math.sin(t)]; };
  let h = "";
  for (let k = 1; k <= 4; k++) h += `<polygon points="${et.map((_, i) => p(i, mn + (mx - mn) * k / 4).join(",")).join(" ")}" fill="none" stroke="#ddd"/>` + gYazi(cx + 3, cy - r * k / 4 + 3, gSay(mn + (mx - mn) * k / 4), { ta: "start", fs: 9, r: "#999" });
  et.forEach((e, i) => { const [x, y] = p(i, mx), [lx, ly] = p(i, mx + (mx - mn) * .16); h += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#ddd"/>` + gYazi(lx, ly + 4, e, { fs: 12 }); });
  g.seriler.forEach((s, si) => { const c = s.renk || GRENK[si]; h += `<polygon points="${s.degerler.map((v, i) => p(i, v).join(",")).join(" ")}" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/>`; });
  h += gAltLejant(g.seriler.map(s => s.ad), g.seriler.map((s, i) => s.renk || GRENK[i]), W, 330);
  return [W, H, h];
}
function gNokta(g) {
  const W = 560, H = 320, L = 58, T = 18, B = 58, pw = W - L - 20, ph = H - T - B, nk = g.noktalar;
  const tx = gAdim(Math.min(...nk.map(p => p.x)), Math.max(...nk.map(p => p.x))), ty = gAdim(Math.min(0, ...nk.map(p => p.y)), Math.max(...nk.map(p => p.y)));
  const pad = g.tur === "kabarcik" ? 38 : 8, x = v => L + pad + (v - tx[0]) / (tx.at(-1) - tx[0]) * (pw - 2 * pad), y = v => T + ph - (v - ty[0]) / (ty.at(-1) - ty[0]) * ph, rm = Math.max(...nk.map(p => p.r || 1));
  let h = ty.map(t => `<line x1="${L}" x2="${L + pw}" y1="${y(t)}" y2="${y(t)}" stroke="#e3e3e3"/>` + gYazi(L - 6, y(t) + 4, gSay(t), { ta: "end", fs: 10 })).join("")
    + tx.map(t => `<line x1="${x(t)}" x2="${x(t)}" y1="${T}" y2="${T + ph}" stroke="#f0f0f0"/>` + gYazi(x(t), T + ph + 15, g.xYil ? String(t) : gSay(t), { fs: 10 })).join("");
  nk.forEach((p, i) => { const rr = g.tur === "kabarcik" ? 6 + Math.sqrt((p.r || 0) / rm) * 28 : 5; h += `<circle cx="${x(p.x)}" cy="${y(p.y)}" r="${rr}" fill="${GRENK[g.tur === "kabarcik" ? i % 10 : 0]}" fill-opacity="${g.tur === "kabarcik" ? .55 : .9}" stroke="#fff"/>`; if (p.etiket) h += gYazi(x(p.x), y(p.y) + 4, p.etiket, { fs: 9.5, b: true }); });
  if (g.xBaslik) h += gYazi(L + pw / 2, T + ph + 34, g.xBaslik, { fs: 11, b: true });
  if (g.yBaslik) h += gYazi(14, T + ph / 2, g.yBaslik, { fs: 11, b: true, don: -90 });
  return [W, H, h];
}
function gHisse(g) {
  const m = g.mumlar, et = g.etiketler, W = 560, H = 300, L = 50, T = 18, B = 40, pw = W - L - 16, ph = H - T - B;
  const t = gAdim(Math.min(...m.map(c => c.d)), Math.max(...m.map(c => c.y))), y = v => T + ph - (v - t[0]) / (t.at(-1) - t[0]) * ph, bw = pw / m.length;
  let h = t.map(v => `<line x1="${L}" x2="${L + pw}" y1="${y(v)}" y2="${y(v)}" stroke="#e3e3e3"/>` + gYazi(L - 6, y(v) + 4, gSay(v), { ta: "end", fs: 10 })).join("");
  m.forEach((c, i) => { const cx = L + bw * (i + .5), r = c.k >= c.a ? "#27ae60" : "#eb5757"; h += `<line x1="${cx}" x2="${cx}" y1="${y(c.y)}" y2="${y(c.d)}" stroke="${r}"/><rect x="${cx - bw * .25}" y="${y(Math.max(c.a, c.k))}" width="${bw * .5}" height="${Math.max(1, Math.abs(y(c.a) - y(c.k)))}" fill="${r}"/>` + gYazi(cx, T + ph + 15, et[i], { fs: 10 }); });
  return [W, H, h];
}
const gToplam = d => d.cocuklar ? d.cocuklar.reduce((a, c) => a + gToplam(c), 0) : d.deger;
function gAgac(g) {
  const W = 560, H = 320; let h = "";
  const bol = (dugumler, x, y, w, hh, yatay, renk, d) => {
    const top = dugumler.reduce((a, c) => a + gToplam(c), 0); let o = 0;
    dugumler.forEach((c, i) => { const p = gToplam(c) / top, r = renk || GRENK[i % 10];
      const [cx, cy, cw, ch] = yatay ? [x + o * w, y, w * p, hh] : [x, y + o * hh, w, hh * p]; o += p;
      if (c.cocuklar) { if (d === 0) h += gYazi(cx + 4, cy + 13, c.ad, { ta: "start", fs: 11, b: true, r: "#222" }); bol(c.cocuklar, cx, cy + (d === 0 ? 18 : 0), cw, ch - (d === 0 ? 18 : 0), !yatay, r, d + 1); }
      else h += `<rect x="${cx + 1}" y="${cy + 1}" width="${Math.max(0, cw - 2)}" height="${Math.max(0, ch - 2)}" fill="${r}" fill-opacity="${.55 + (i % 3) * .15}"/>` + gYazi(cx + cw / 2, cy + ch / 2, c.ad, { fs: 10.5, r: "#fff", b: true }) + gYazi(cx + cw / 2, cy + ch / 2 + 14, gSay(c.deger), { fs: 10, r: "#fff" });
    });
  };
  bol(g.agac, 0, 0, W, H, true, null, 0);
  return [W, H, h];
}
function gGunes(g) {
  const W = 420, cx = 210, kalin = 46; let h = "";
  const derin = d => d.cocuklar ? 1 + Math.max(...d.cocuklar.map(derin)) : 0, D = Math.max(...g.agac.map(derin)) + 1, cy = 22 + D * kalin + 4, y0 = cy * 2 + 16;
  const dilim = (r1, r2, a, b, renk) => { const p = (r, t) => `${cx + r * Math.cos(t)},${cy + r * Math.sin(t)}`, bk = b - a > Math.PI ? 1 : 0; return `<path d="M${p(r2, a)} A${r2},${r2} 0 ${bk} 1 ${p(r2, b)} L${p(r1, b)} A${r1},${r1} 0 ${bk} 0 ${p(r1, a)}Z" fill="${renk}" stroke="#fff" stroke-width="1.5"/>`; };
  const ciz = (dugumler, a0, a1, k, renk) => { const top = dugumler.reduce((s, c) => s + gToplam(c), 0); let a = a0;
    dugumler.forEach((c, i) => { const b = a + (a1 - a0) * gToplam(c) / top, r = renk || GRENK[i % 10], r1 = 22 + k * kalin, r2 = r1 + kalin - 2;
      h += dilim(r1, r2, a, b, r).replace('fill="', `fill-opacity="${1 - k * .22}" fill="`);
      if (b - a > .22) h += gYazi(cx + (r1 + r2) / 2 * Math.cos((a + b) / 2), cy + (r1 + r2) / 2 * Math.sin((a + b) / 2) + 4, c.ad, { fs: 11, r: "#fff", b: true });
      if (c.cocuklar) ciz(c.cocuklar, a, b, k + 1, r); a = b; }); };
  ciz(g.agac, -Math.PI / 2, Math.PI * 1.5, 0, null);
  h += gAltLejant(g.agac.map(c => `${c.ad} · ${gSay(gToplam(c))}`), g.agac.map((_, i) => GRENK[i % 10]), W, y0);
  return [W, gAltH(g.agac.length, y0), h];
}
GORSEL.tipler.grafik = g => {
  const f = { cubuk: gCubuk, pasta: gPasta, halka: gPasta, selale: gSelale, huni: gHuni, kutu: gKutu, radar: gRadar, dagilim: gNokta, kabarcik: gNokta, hisse: gHisse, agacharita: gAgac, gunes: gGunes }[g.tur] || gEksenli;
  const [W, H, ic] = f(g);
  return `${g.baslik ? `<div class="gr-baslik">${g.baslik}</div>` : ""}<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${g.baslik || g.tur}" font-family="Arial, sans-serif">${ic}</svg>${g.kaynak ? `<div class="gr-kaynak">Kaynak: ${g.kaynak}</div>` : ""}`;
};
