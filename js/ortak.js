// ORTAK YARDIMCILAR — tüm sayfalarda kullanılır

// Her güncellemede bu sayıyı ve HTML'lerdeki ?v= değerini artır (tarayıcı eski dosyayı kullanmasın)
const SURUM = "5";

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
