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
GORSEL.tipler.resim = g => `<img src="${g.yol}" alt="${g.alt || ""}">`;

// Serbest HTML / SVG
GORSEL.tipler.html = g => g.icerik;
