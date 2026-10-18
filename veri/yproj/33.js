// YPROJ · 33 · Gradle ve AndroidManifest  (Kitap s. 130–131 · 22. hafta)
window.KONU = { dil: "", slaytlar: [
  { tur: "hoca",
    ozet: "Proje düzeyi build.gradle: google-services classpath, android plugin sürümleri, depolar (google, mavenCentral). Modül düzeyi: com.google.gms.google-services eklentisi, compileSdk / minSdk / targetSdk, <b>viewBinding true</b>, bağımlılıklar: appcompat, material, constraintlayout, navigation, Firebase BoM, analytics, auth, storage, firestore ve görseli adresten indirmek için Picasso. AndroidManifest: READ_EXTERNAL_STORAGE izni; LogoActivity intent-filter (MAIN, LAUNCHER) ile ilk açılan activity.",
    akis: ["Proje ve modül gradle", "viewBinding", "Manifest: izin ve ilk activity"],
    hatalar: ["Android 13+ cihazlarda READ_EXTERNAL_STORAGE yerine READ_MEDIA_IMAGES izni ya da Photo Picker kullanılır; kitap eski izni gösteriyor.", "Kitaptaki sabit sürüm numaraları yerine Android Studio'nun önerdiği güncel sürümleri kullanın."] },
  { tur: "adim", baslik: "Gradle ve Manifest", hafta: "22",
    kitap: { ozet: "Firebase ve Picasso bağımlılıklarını ekledi, ilk activity'yi LogoActivity yaptı.", gorsel: { tip: "kartlar", kartlar: [ { ust: "viewBinding true" }, { ust: "Firebase: auth, firestore, storage" }, { ust: "Picasso", alt: "adresten görsel" }, { ust: "Manifest: izin + LAUNCHER" } ] }, sayfa: "s. 130–131" },
    sen: { adimlar: ["Modül gradle'da viewBinding'i aç, gerekli bağımlılıkları ekle, Sync.", "Manifest'e gereken izinleri ekle.", "Açılış activity'ni MAIN / LAUNCHER yap.", "Uygulamayı çalıştır: açılış ekranı ilk geliyor mu?"] },
    teslim: { dosya: "P2-33_gradle-manifest", liste: ["Sync hatasız.", "Uygulama açılış ekranıyla başlıyor."] } }
]};
