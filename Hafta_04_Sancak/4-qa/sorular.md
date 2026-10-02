> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Soru-Cevap (QA) ve Adli Bilişim — Soru Havuzu

**Ders:** Web Programlama I
**Konu:** MDN Getting Started → *Environment setup* + *Your first website*
**Takım:** Sancak — Getting Started Modules, 1. Grup
**Hazırlayan:** Serhat (QA ve Adli Bilişim)
**Canlı site:** https://serhat-92.github.io

> **Nasıl çalışıyoruz?** Her soruda ya bir **belirti** (ekranda görülen sorun) ya da **kasıtlı hatalı bir kod** var. Göreviniz, vizedeki gibi kodu kafanızda çalıştırıp (*mental execution*) **hatanın nerede ve neden** olduğunu bulmak. "Ne olur?" değil, **"neden olur?"** sorusuna cevap arıyoruz.
>
> Zorluk: ⭐ kolay · ⭐⭐ orta · ⭐⭐⭐ zor

---

## BÖLÜM A — Environment setup

### Soru 1 — Görünmeyen uzantı ⭐
*(Dealing with files · Installing software)*

Bir arkadaşınız Windows'ta Not Defteri ile `index.html` adlı bir dosya oluşturuyor. Dosya Gezgini'nde adı **`index.html`** olarak görünüyor. Ama:

- Dosyaya çift tıklayınca tarayıcı yerine **Not Defteri** açılıyor.
- Dosyayı GitHub Pages'e yükleyince site **404** hatası veriyor.

**Dosyanın gerçek adı ne olabilir? Bu neden oluyor?**

---

### Soru 2 — "İki tarayıcıda test ettim" ⭐
*(Installing software · Browsing the web)*

Bir öğrenci sitesini **Google Chrome** ve **Microsoft Edge**'de açıyor, ikisinde de sorun yok. Raporuna *"Sitemi iki farklı tarayıcıda test ettim"* yazıyor.

**Bu test MDN'nin önerdiği "en az iki farklı tarayıcıda test" şartını karşılıyor mu? Neden?**

---

### Soru 3 — Resim neden görünmüyor? ⭐
*(Dealing with files · Command line · Creating the content)*

Klasör yapısı:

```
first-website/
├── index.html
└── images/
    └── kali-cubes.jpg
```

Terminal çıktısı:

```
$ file images/*
images/kali-cubes.jpg: JPEG image data, JFIF standard 1.01, ... 3840x2160
```

`index.html` içindeki satır:

```html
<img src="kali-cubes.jpg" alt="Kali Linux logosu ve küpler" />
```

Dosya klasörde duruyor, `file` komutu sağlam bir JPEG olduğunu söylüyor. Ama sayfada resim yerine sadece **"Kali Linux logosu ve küpler"** yazısı görünüyor.

**Neden?**

---

## BÖLÜM B — Your first website: HTML

### Soru 4 — Bu satır neden şart? ⭐⭐⭐
*(Creating the content)*

Bir geliştirici `index.html` dosyasının ilk satırını (`<!doctype html>`) siliyor. Sayfa **neredeyse aynı** görünüyor. CSS dosyasında da şu kural var:

```css
h1 {
  font-size: 20;
}
```

Doctype yokken başlık **küçük** görünüyor. Geliştirici `<!doctype html>` satırını geri ekleyince başlık **kendiliğinden büyüyor**, oysa CSS'e hiç dokunmadı.

1. **Başlık neden büyüdü?**
2. **Sayfa doctype olmadan da çalışıyorsa, bu satır neden şart?**

İpucu almak isteyen: F12 → Konsol'a bakın.

---

### Soru 5 — Bozuk Türkçe harfler ⭐⭐
*(Creating the content)*

`<meta charset="utf-8" />` satırı silinmiş. Bazı bilgisayarlarda başlık şöyle görünüyor:

```
HoÅŸ geldiniz          (olması gereken: Hoş geldiniz)
Ä°lk Web Sitem         (olması gereken: İlk Web Sitem)
```

Bazı bilgisayarlarda ise her şey düzgün.

1. **Harfler neden bu şekilde bozuluyor?**
2. **Neden bazı bilgisayarlarda bozuluyor, bazılarında bozulmuyor?**

---

### Soru 6 — Yanlış yerdeki başlık ⭐⭐
*(Creating the content)*

```html
<head>
  <meta charset="utf-8" />
</head>
<body>
  <title>İlk Web Sitem</title>
  <h1>Merhaba</h1>
</body>
```

`<title>` etiketi `<body>` içine taşınmış. Sayfayı açınca sekmede yine **"İlk Web Sitem"** yazıyor, sayfanın içinde de görünmüyor. Hiçbir şey bozulmamış gibi.

**O zaman `<title>` neden `<head>` içinde olmak zorunda?**

---

### Soru 7 — Ekrana düşen not ⭐⭐
*(Creating the content)*

```html
<head>
  ...
  <script defer src="scripts/main.js"></script>
  /* defer: JavaScript dosyasının HTML belgesi tamamen
  yüklendikten sonra çalıştırılmasını sağlar. */
</head>
```

Geliştirici koduna bir not düşmüş. Sayfa çökmedi, konsol temiz. Ama **notun kendisi sayfanın en üstünde yazı olarak görünüyor.**

**Neden? Doğrusu ne olmalıydı?**

---

### Soru 8 — Sessiz hatalar ⭐⭐
*(Creating the content · Styling the content)*

Aynı sitede iki ayrı sorun var. Ne konsolda hata var, ne sayfa çöküyor.

**a) HTML:**

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
  rel="styleesheet"
/>
```

Sayfa açılıyor ama yazılar **Roboto** fontuyla değil, sıradan bir fontla görünüyor.

**b) CSS:**

```css
body {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 auto;
}
```

Kartın içindeki yazılar sağ ve sol çerçeveye **yapışık** görünüyor.

**İki sorunun sebebi ne? İkisinin ortak noktası ne? Tarayıcı neden hata vermedi?**

---

## BÖLÜM C — Your first website: CSS

### Soru 9 — Telefonda taşan sayfa ⭐⭐
*(Styling the content)*

```css
body {
  width: 600px;
  margin: 0 auto;
}
```

Site bilgisayarda kusursuz görünüyor. Telefonda (veya F12 → `Ctrl+Shift+M` ile daraltınca) sayfa ekrana sığmıyor, **yana doğru kaydırma çubuğu** çıkıyor.

**Neden? Tek kelime değiştirerek nasıl düzeltirsiniz?**

---

### Soru 10 — Bazen çalışan, bazen çalışmayan resim ⭐⭐⭐
*(Adding interactivity · Publishing)*

Yayındaki sitede resme tıklayınca ikinci resim gelmesi gerekiyor. Ama geçiş **bazen oluyor, bazen olmuyor.** Birkaç kez üst üste tıklayınca bazen değişiyor, bazen eski resimde kalıyor. Bilgisayarda (yerel dosyada) ise her tıklamada sorunsuz çalışıyor.

Şunlar kontrol edildi:

| Kontrol | Sonuç |
|---|---|
| İkinci resim dosyası sunucuda var mı? | ✅ Adres doğrudan açılıyor |
| Sunucudaki JS dosyası güncel mi? | ✅ |
| Konsolda JS hatası var mı? | ✅ Sadece `favicon.ico 404` |
| HTML'deki `src`, JS'in aradığı yazıyla aynı mı? | ✅ Aynı |

Terminal çıktısı:

```
$ ls -lh images/
-rw-r--r-- 1 ... 442K kali-cubes.jpg
-rw-r--r-- 1 ... 2,4M kali-glitch.jpg

$ file images/*
images/kali-cubes.jpg:  JPEG image data, ... 3840x2160
images/kali-glitch.jpg: JPEG image data, ... 3840x2160
```

1. **Kod tamamen doğruysa sorun nerede? Neden yerelde çalışıp yayında "bazen" çalışmıyor?**
2. **Bonus:** Sitede `favicon.ico` diye bir dosya hiç kullanılmıyor. Konsol neden onun için 404 hatası veriyor?

---

## BÖLÜM D — Your first website: JavaScript

### Soru 11 — Resim var ama JS bulamıyor ⭐⭐⭐
*(Adding interactivity)*

```html
<head>
  ...
  <script src="scripts/main.js"></script>
</head>
<body>
  <h1>İlk Web Sitem</h1>
  <img src="images/kali-cubes.jpg" alt="..." />
</body>
```

```js
// scripts/main.js — ilk satırlar
const myImage = document.querySelector("img");
myImage.addEventListener("click", () => { /* ... */ });
```

Konsolda şu hata çıkıyor:

```
Uncaught TypeError: myImage is null
```

Oysa sayfada resim **açıkça görünüyor!**

1. **JS resmi neden bulamadı?**
2. **`async` eklemek sorunu kesin çözer mi?**
3. **Kesin çözüm ne?**

---

### Soru 12 — Konsolda tek hata, kodda kaç hata? ⭐⭐⭐
*(Adding interactivity)*

```js
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Lütfen adınızı giriniz:");
  if (!myName) {
    return;
  }
  localStorge.setItem("name", myName);
  myHeading.textContent = `Hoş geldiniz, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hoş geldiniz, ${StoredName}`;
}

MyButton.addEventListener("click", () => {
  setUserName();
});
```

Kullanıcı adını giriyor. Başlık değişmiyor, buton da çalışmıyor. Konsolda **sadece bir** hata var.

1. **Kodda toplam kaç hata var? Hepsini bulun.**
2. **Konsol neden sadece birini gösteriyor?**

---

### Soru 13 — İptal tuzağı ⭐⭐
*(Adding interactivity)*

MDN'deki orijinal kod:

```js
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
```

Kullanıcı adını yazmak istemiyor ve pencerede **İptal**'e basıyor.

**Ne olur? Kodu kafanızda adım adım çalıştırın. Nasıl düzeltirsiniz?**
