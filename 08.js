// YAPZ · 08 · NumPy: matematik ve istatistik fonksiyonları  (Kitap s. 41–44)
var G = "gorsel/yapz/";
window.KONU = { dil: "py", slaytlar: [

  { tur: "hoca",
    ozet: "NumPy'ın gücü: döngü yazmadan bütün diziye işlem (x+5, x**2). Matematik fonksiyonları (add, power), trigonometri (radyan dönüşümü: derece*π/180) ve istatistik (max, min, sum, mean, var, std). Ortalama ve standart sapma makine öğrenmesinde veri ölçeklemenin (23. konu) temeli; burada sezgisel anlatın: std “sayılar ortalamadan ne kadar dağınık?”.",
    akis: ["Operatörler ve koşullu seçim (17. Uyg)", "Matematik ve trigonometri (18–19. Uyg)", "10 öğrencinin 3 ders notu ile istatistik (20. Uyg)"],
    hatalar: ["np.sin(30) yazıp 0.5 beklemek: NumPy radyan ister.", "tan(90°) çok büyük sayı çıkınca hata sanmak (sonsuza gider).", "axis=0 (sütun bazında, yani her ders) ile axis=1'i (satır, yani her öğrenci) karıştırmak."],
    sorular: [["1.2246468e-16 ne demek?", "Bilimsel gösterim: 0,00000000000000012. Aslında 0; bilgisayarın küçük yuvarlama hatası."], ["Varyans ile standart sapma farkı?", "Standart sapma varyansın kareköküdür; verinin kendi biriminde olduğu için yorumlaması daha kolay."]]},

  { tur: "bilgi", baslik: "Döngüsüz işlem",
    gorsel: { tip: "html", icerik: `<div style="font-family:Consolas,monospace;display:grid;gap:6px;justify-content:center">
      <div>x &nbsp;&nbsp;&nbsp;= [ 1, 2, 3, 4 ]</div><div style="color:#2f80ed">x+5 &nbsp;= [ 6, 7, 8, 9 ]</div><div style="color:#27ae60">x**2 = [ 1, 4, 9, 16 ]</div><div style="color:#eb5757">x[x>2] = [ 3, 4 ]</div></div>` },
    not: "İşlem dizinin her elemanına tek tek uygulanır." },

  { tur: "uygulama", baslik: "Operatörler",
    gorsel: { tip: "resim", yol: G + "08-u17.png" },
    adimlar: ["1–10 arası dizi.", "+5, −10, /2, *3, **2 işlemlerini dene.", "4'ten büyükleri, 7 ve altını, 5'e eşit olanı seç."],
    kitap: "s. 41–42 · 17. Uygulama" },

  { tur: "uygulama", baslik: "Matematik fonksiyonları",
    gorsel: { tip: "resim", yol: G + "08-u18.png" },
    adimlar: ["a=[10,20,30], b=[1,2,3].", "add, subtract, multiply, power ile hem sayıyla hem diziyle işlem yap."],
    kitap: "s. 42 · 18. Uygulama" },

  { tur: "uygulama", baslik: "Trigonometri",
    gorsel: { tip: "resim", yol: G + "08-u19.png" },
    adimlar: ["0, 30, 60…180 derece dizisi.", "sin, cos, tan; dereceyi radyana çevir: c*np.pi/180."],
    kitap: "s. 43 · 19. Uygulama" },

  { tur: "bilgi", baslik: "İstatistik fonksiyonları",
    gorsel: { tip: "html", icerik: `<div class="etk">
      <div><code>max() · min()</code> <span>en büyük, en küçük</span></div><div><code>sum()</code> <span>toplam</span></div>
      <div><code>mean()</code> <span>ortalama</span></div><div><code>var()</code> <span>varyans</span></div>
      <div><code>std()</code> <span>standart sapma: ortalamadan sapma</span></div><div><code>axis=0 / axis=1</code> <span>sütun bazında / satır bazında</span></div></div>` } },

  { tur: "uygulama", baslik: "10 öğrencinin notları",
    metin: "Notlar rastgele; senin sayıların farklı olur.",
    gorsel: { tip: "resim", yol: G + "08-u20.png" },
    adimlar: ["0–100 arası 10×3 rastgele not dizisi (10 öğrenci, 3 ders).", "Genel en büyük ve en küçük not.", "Her dersin toplamı, ortalaması, standart sapması (axis=0).", "Her öğrencinin ortalaması: axis=1."],
    kitap: "s. 43–44 · 20. Uygulama" },

  { tur: "test", sorular: [
    { soru: "<code>x = np.array([2,4,6])</code> → <code>x*3</code>?", secenekler: ["[2,4,6,2,4,6,2,4,6]", "[6,12,18]", "[5,7,9]", "36"], dogru: 1, kod: true },
    { soru: "np.sin() açıyı hangi birimde ister?", secenekler: ["Derece", "Radyan", "Yüzde", "Grad"], dogru: 1 },
    { soru: "10 öğrenci × 3 ders tablosunda her dersin ortalaması?", secenekler: ["x.mean()", "x.mean(axis=0)", "x.mean(axis=1)", "x.max()"], dogru: 1, kod: true },
    { soru: "Verinin ortalamadan ne kadar saptığını gösteren?", secenekler: ["sum", "std", "max", "size"], dogru: 1 }
  ]},

  { tur: "merak", baslik: "Not ortalaması ve geçme",
    kod: `notlar = np.random.randint(0,101,(10,3))
ort = notlar.mean(axis=1)
print("Geçenler:", np.sum(ort >= 50), "öğrenci")`,
    not: "True değerler 1, False değerler 0 sayılır; np.sum ile kaç tane True olduğunu sayabiliriz." }

]};
