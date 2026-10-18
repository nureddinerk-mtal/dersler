// ORTAK YARDIMCILAR — tüm sayfalarda kullanılır

// Her güncellemede bu sayıyı ve HTML'lerdeki ?v= değerini artır (tarayıcı eski dosyayı kullanmasın)
const SURUM = "13";

// Adres çubuğundaki ?d=wtug&k=01 gibi değerleri okur
function param(ad) {
  return new URLSearchParams(location.search).get(ad);
}

// Bir veri dosyasını (veri/....js) sonradan yükler
function yukle(yol) {
  return new Promise((tamam, hata) => {
    const s = document.createElement("script");
    s.src = yol + "?v=" + SURUM;
    s.onload = tamam;
    s.onerror = () => hata(new Error("Dosya bulunamadı: " + yol));
    document.head.appendChild(s);
  });
}

// Ders koduna göre DERSLER tablosundan dersi bulur
function dersBul(kod) {
  return (window.DERSLER || []).find(d => d.kod === kod);
}

// Konuları birimlerden çıkarıp tek sıralı liste yapar
function konuListesi() {
  const liste = [];
  (window.KONULAR?.birimler || []).forEach(b =>
    b.konular.forEach(k => liste.push({ ...k, birim: b.ad }))
  );
  return liste;
}

// Metni HTML olarak güvenli yazdırmak için
function kacis(t) {
  return String(t ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// Hata/boş durum kutusu
function uyari(alan, mesaj) {
  alan.innerHTML = `<div class="uyari">${mesaj}<br><a href="index.html">← Anasayfa</a></div>`;
}

// ÖĞRETMEN MODU — adresin sonuna ?hoca yazınca açılır.
// Sekme açık kaldıkça sayfadan sayfaya geçerken açık kalır, sekme kapanınca kendiliğinden kapanır.
// Açıkken "hoca" türündeki slaytlar (öğretmen notları) görünür.
const HOCA = (() => {
  const adreste = new URLSearchParams(location.search).has("hoca");
  try {
    if (adreste) sessionStorage.setItem("hoca", "1");
    return sessionStorage.getItem("hoca") === "1";
  } catch (e) { return adreste; }
})();

// Öğretmen modu açıkken sağ üstte işaret; tıklayınca mod kapanır
function hocaIsareti() {
  if (!HOCA || document.getElementById("hoca-isaret")) return;
  const b = document.createElement("button");
  b.id = "hoca-isaret";
  b.title = "Öğretmen modu açık. Kapatmak için tıkla.";
  b.textContent = "🧑‍🏫";
  b.onclick = () => {
    try { sessionStorage.removeItem("hoca"); } catch (e) {}
    const u = new URL(location.href);
    u.searchParams.delete("hoca");
    if (u.toString() === location.href) location.reload(); else location.replace(u.toString());
  };
  document.body.appendChild(b);
}
if (document.body) hocaIsareti(); else document.addEventListener("DOMContentLoaded", hocaIsareti);
