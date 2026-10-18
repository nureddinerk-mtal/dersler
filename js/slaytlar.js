// SLAYT TÜRLERİ — konu dosyasındaki her slaytın "tur" alanına göre çizilir
// Yeni tür eklemek için: SLAYT.turler.yeniTur = { etiket, ciz: s => "<html>" };
window.SLAYT = {
  turler: {},
  ciz(s) {
    const t = this.turler[s.tur];
    if (!t) return `<div class="uyari">Bilinmeyen slayt türü: ${kacis(s.tur)}</div>`;
    return `<div class="etiket e-${s.tur}">${t.etiket}</div>` + t.ciz(s);
  }
};

const metin = s => s.metin ? `<p class="metin">${s.metin}</p>` : "";
const not = s => s.not ? `<div class="not">💡 ${s.not}</div>` : "";
const resimMi = m => /\.(png|jpe?g|gif|svg|webp)$/i.test(m);
const malzeme = s => s.malzeme ? `<div class="malzeme">${s.malzeme.every(resimMi) ? "🖼️ Resimler" : "📥 Dosyalar"}: ${s.malzeme.map(m => `<a href="gorsel/malzeme/${m}" download>${resimMi(m) ? `<img src="gorsel/malzeme/${m}" alt="">` : "📄 "}${m}</a>`).join("")}</div>` : "";

// Kodu renklendirerek gösterir (HTML etiketleri, özellikler, yorumlar)
function kodRenk(kod) {
  // Python (konu dosyasında dil: "py"): anahtar kelime → metin → # yorum
  if (window.KOD_DIL === "py") {
    return kacis(kod)
      .replace(/\b(import|from|as|def|return|if|elif|else|for|while|in|not|and|or|is|None|True|False|class|with|lambda|try|except|print|range|len)\b/g, '<b class="k-etiket">$1</b>')
      .replace(/(&quot;[^\n]*?&quot;|'[^'\n]*')/g, '<b class="k-deger">$1</b>')
      .replace(/(^|\s)(#[^\n]*)/gm, '$1<i class="k-yorum">$2</i>');
  }
  if (!/^\s*</.test(kod)) {
    // önce anahtar kelimeler, sonra metinler, en son yorumlar (eklenen etiketler bozulmasın)
    return kacis(kod)
      .replace(/\b(var|function|return|if|else|for|while|do|switch|case|break|default|public|private|protected|override|class|interface|new|using|namespace|int|string|void|bool|true|false|null|async|await)\b/g, '<b class="k-etiket">$1</b>')
      .replace(/(&quot;[^\n]*?&quot;|'[^'\n]*')/g, '<b class="k-deger">$1</b>')
      .replace(/(^|[^:])(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, '$1<i class="k-yorum">$2</i>');
  }
  return kacis(kod)
    .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<i class="k-yorum">$1</i>')
    .replace(/(&lt;\/?)([a-zA-Z0-9!]+)/g, '$1<b class="k-etiket">$2</b>')
    .replace(/ ([a-zA-Z-]+)=(&quot;.*?&quot;)/g, ' <b class="k-ozellik">$1</b>=<b class="k-deger">$2</b>');
}

// 📒 BİLGİ: kısa not + görsel
SLAYT.turler.bilgi = { etiket: "📒 Not al", ciz: s => `
  <h2>${s.baslik}</h2>${metin(s)}${s.kod ? `<pre class="kod">${kodRenk(s.kod)}</pre>` : ""}${GORSEL.ciz(s.gorsel)}${not(s)}` };

// 👀 ÖRNEK: kod + (varsa) sonucu
SLAYT.turler.ornek = { etiket: "👀 Örnek", ciz: s => `
  <h2>${s.baslik}</h2>${metin(s)}
  <div class="yanyana">
    <pre class="kod">${kodRenk(s.kod || "")}</pre>
    ${s.sonuc ? `<div class="sonuc"><div class="s-baslik">Tarayıcıda</div>${GORSEL.ciz(s.sonuc)}</div>` : ""}
  </div>${not(s)}` };

// 🛠️ UYGULAMA: sadece hedef görsel + kısa görev. Kodu öğrenci kendisi yazar.
SLAYT.turler.uygulama = { etiket: "🛠️ Uygulama", ciz: s => `
  <h2>${s.baslik}</h2>${metin(s)}
  ${s.gorsel ? `<div class="hedef"><div class="s-baslik">🎯 Bunu oluştur</div>${GORSEL.ciz(s.gorsel)}</div>` : ""}
  ${s.adimlar ? `<ol class="adimlar">${s.adimlar.map(a => `<li>${a}</li>`).join("")}</ol>` : ""}
  ${malzeme(s)}
  ${s.kitap ? `<div class="kitap">📖 Takılırsan: kitap ${s.kitap}</div>` : ""}` };

// 🏠 ÖDEV: kitaptaki "Sıra Sizde"
SLAYT.turler.odev = { etiket: "🏠 Sıra Sizde · Ödev", ciz: s => `
  <h2>${s.baslik}</h2>${metin(s)}${GORSEL.ciz(s.gorsel)}${malzeme(s)}
  ${s.kitap ? `<div class="kitap">📖 Kitap ${s.kitap}</div>` : ""}` };

// 🔎 MERAKLISINA: hızlı bitirenler için, atlanabilir ek görev
SLAYT.turler.merak = { etiket: "🔎 Meraklısına · İstersen atla", ciz: s => `
  <h2>${s.baslik}</h2>${metin(s)}
  ${s.adimlar ? `<ol class="adimlar">${s.adimlar.map(a => `<li>${a}</li>`).join("")}</ol>` : ""}
  ${s.kod ? `<pre class="kod">${kodRenk(s.kod)}</pre>` : ""}
  ${GORSEL.ciz(s.gorsel)}${malzeme(s)}${not(s)}` };

// 🧭 PROJE ADIMI (yproj): kitap ne yaptı → sen kendi projende yap → teslim → hoca onayı
// { tur:"adim", baslik, hafta:"3", kitap:{ ozet, metin, gorsel, sayfa }, sen:{ metin, gorsel, adimlar:[…] }, teslim:{ dosya, liste:[…] }, onay:true }
SLAYT.turler.adim = { etiket: "🧭 Proje adımı", ciz: s => `
  <h2>${s.baslik}</h2>${s.hafta ? `<span class="rozet">🗓️ Yıllık plan: ${s.hafta}. hafta</span>` : ""}
  ${s.kitap ? `<details class="ad-kitap"><summary>📖 Kitap ne yaptı? <span>${s.kitap.ozet || ""}</span></summary>${s.kitap.metin ? `<p class="metin">${s.kitap.metin}</p>` : ""}${GORSEL.ciz(s.kitap.gorsel)}${s.kitap.sayfa ? `<div class="kitap">📖 Kitap ${s.kitap.sayfa}</div>` : ""}</details>` : ""}
  ${s.sen ? `<div class="ad-sen"><div class="s-baslik">🎯 Sen kendi projende</div>${s.sen.metin ? `<p class="metin">${s.sen.metin}</p>` : ""}${GORSEL.ciz(s.sen.gorsel)}${s.sen.adimlar ? `<ol class="adimlar">${s.sen.adimlar.map(a => `<li>${a}</li>`).join("")}</ol>` : ""}</div>` : ""}
  ${s.teslim ? `<div class="ad-teslim"><div class="s-baslik">📤 Teslim · ${window.KONULAR && KONULAR.teslimLink ? `<a href="${KONULAR.teslimLink}" target="_blank" rel="noopener">Drive klasörüne yükle ↗</a>` : "Drive klasörüne yükle"}</div>${s.teslim.dosya ? `<code>AdSoyad_${s.teslim.dosya}</code>` : ""}${s.teslim.liste ? `<ul>${s.teslim.liste.map(x => `<li>☐ ${x}</li>`).join("")}</ul>` : ""}</div>` : ""}
  ${s.onay ? `<div class="ad-onay">🧑‍🏫 ${s.onay === true ? "Hocana göster. Onay almadan sonraki aşamaya geçme." : s.onay}</div>` : ""}${not(s)}` };

// ✅ TEST: tıkla, doğru mu gör (hiçbir şey kaydedilmez)
SLAYT.turler.test = { etiket: "✅ Kendini dene", ciz: s => `
  <h2>${s.baslik || "Kendini dene"}</h2>
  ${s.sorular.map((q, i) => `
    <div class="soru" data-dogru="${q.dogru}">
      <div class="s-metin">${i + 1}. ${q.soru}</div>
      <div class="secenekler">
        ${q.secenekler.map((c, j) => `<button class="secenek" data-i="${j}">${q.kod ? `<code>${kacis(c)}</code>` : c}</button>`).join("")}
      </div>
    </div>`).join("")}` };

// 🧑‍🏫 ÖĞRETMEN NOTU: sadece ?hoca ile açılan öğretmen modunda görünür
// { tur:"hoca", ozet, akis:[...], hatalar:[...], sorular:[["soru","cevap"],...], kod, not }
const hListe = (baslik, l) => l && l.length ? `<div class="h-bolum"><h3>${baslik}</h3><ul>${l.map(x => `<li>${x}</li>`).join("")}</ul></div>` : "";
SLAYT.turler.hoca = { etiket: "🧑‍🏫 Öğretmen notu · Öğrenciler görmez", ciz: s => `
  <h2>${s.baslik || "Bu konuda ne anlatıyoruz?"}</h2>
  ${s.ozet ? `<p class="metin">${s.ozet}</p>` : ""}
  ${hListe("⏱️ Ders akışı", s.akis)}
  ${hListe("⚠️ Sık yapılan hatalar", s.hatalar)}
  ${s.sorular ? `<div class="h-bolum"><h3>🙋 Öğrenci sorarsa</h3>${s.sorular.map(q => `<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join("")}</div>` : ""}
  ${s.kod ? `<div class="h-bolum"><details><summary>💻 Kod (çözüm) · açmak için tıkla</summary><pre class="kod">${kodRenk(s.kod)}</pre></details></div>` : ""}${s.bloklar ? `<div class="h-bolum"><details><summary>🧩 Bloklar (çözüm) · açmak için tıkla</summary>${GORSEL.ciz({ tip: "bloklar", kod: s.bloklar })}</details></div>` : ""}${s.olaylar ? `<div class="h-bolum"><details><summary>🎮 Olaylar (çözüm) · açmak için tıkla</summary>${s.olaylar.map(o => `<p><b>${o.baslik || ""}</b></p>` + GORSEL.ciz({ tip: "olaylar", sekme: o.sekme, satirlar: o.satirlar })).join("")}</details></div>` : ""}${not(s)}` };

// Test seçeneklerine tıklama
document.addEventListener("click", e => {
  const b = e.target.closest(".secenek");
  if (!b) return;
  const soru = b.closest(".soru");
  if (soru.classList.contains("cevaplandi")) return;
  soru.classList.add("cevaplandi");
  const dogru = soru.dataset.dogru;
  soru.querySelectorAll(".secenek").forEach(x => {
    if (x.dataset.i === dogru) x.classList.add("dogru");
  });
  if (b.dataset.i !== dogru) b.classList.add("yanlis");
});
