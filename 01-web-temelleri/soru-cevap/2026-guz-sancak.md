> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Soru-Cevap: 01 - Web Temelleri — 2026 Güz · Sancak

**Konu:** MDN Getting Started → *Environment setup* + *Your first website*
**Takım:** Sancak — Getting Started Modules, 1. Grup
**Hazırlayan:** Yusuf Serhat Tümtürk (@Serhat-92) — Soru-Cevap (QA) ve Adli Bilişim

Bu dosya iki bölümden oluşur: önce **5 soru**, ardından **cevaplar**. Soruları cevaplara bakmadan çözmeye çalışın.

---

## Bölüm 1: Sorular

### Soru 1 — Tarayıcı, arama motoru, web sitesi

*İlgili makale: Browsing the web*

Ali bilgisayarında **Firefox**'u açıyor. Adres çubuğuna `mdn html` yazıp Enter'a basıyor. **Google**'ın arama sonuçları açılıyor. Sonuçlardan birine tıklıyor ve şu adresteki sayfa açılıyor:

```
https://developer.mozilla.org/en-US/docs/Web/HTML
```

**a)** Aşağıdakilerin her biri hangi kavrama karşılık gelir? Seçenekler: **tarayıcı · arama motoru · web sitesi · web sayfası · web sunucusu**

1. Firefox
2. Google
3. `developer.mozilla.org` (tüm MDN)
4. `https://developer.mozilla.org/en-US/docs/Web/HTML` adresindeki belge
5. MDN'nin sayfalarını İnternet'te barındıran ve Ali'ye gönderen bilgisayar

**b)** Ali, *"Benim tarayıcım Google"* diyor. Bu cümle doğru mu? Doğrusunu yazınız ve bu karışıklığın neden sık yaşandığını açıklayınız.

**c)** Ali adres çubuğuna bir web adresi değil `mdn html` yazdı. Buna rağmen neden Google'ın sonuçları açıldı?

---

### Soru 2 — `<head>` ile `<body>`

*İlgili makale: HTML: Creating the content*

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>Ayşe'nin Sitesi</title>
    <link href="styles/style.css" rel="stylesheet" />
  </head>
  <body>
    <h1>Hoş geldiniz</h1>
    <p>Bu benim ilk web sitem.</p>
    <img src="images/kedi.jpg" alt="Kedi resmi" />
  </body>
</html>
```

**a)** Sayfa açıldığında tarayıcı penceresinin **içinde** hangi içerikler görünür? `<head>` içindeki satırlardan herhangi biri sayfada görünür mü?

**b)** *"Ayşe'nin Sitesi"* yazısı nerede görünür?

**c)** Bir öğrenci `<h1>Hoş geldiniz</h1>` satırını `<head>` içine, `<link ... />` satırını da `<body>` içine taşıyor. Bu doğru mu? Her iki satırın ait olduğu yeri gerekçesiyle yazınız.

---

### Soru 3 — HTML, CSS ve JavaScript'in görevleri

*İlgili makaleler: HTML: Creating the content · CSS: Styling the content · JavaScript: Adding interactivity*

Sitemiz üç dosyadan oluşur:

```
first-website/
├── index.html
├── styles/style.css
└── scripts/main.js
```

Siteye şu 4 değişiklik yapılmak isteniyor:

1. Başlıkta "Hoş geldiniz" yerine **"Merhaba"** yazsın.
2. Başlığın rengi **mavi** olsun.
3. Resme **tıklayınca** başka bir resim gelsin.
4. Sayfa **telefon ekranına sığsın**, yana taşmasın.

**a)** Her değişiklik hangi dosyada yapılır?

**b)** HTML, CSS ve JavaScript'in görevini birer cümleyle yazınız.

**c)** Sitemizde başlık, kullanıcının girdiği ada göre değişiyor: *"Hoş geldiniz, Ayşe"*. Bu yazı neden doğrudan `index.html` dosyasına yazılamaz da JavaScript ile yazılır?

---

### Soru 4 — Kutu modeli ve telefona uyum

*İlgili makale: CSS: Styling the content*

Sitemizin `body` kuralı şöyledir (`box-sizing` varsayılan değerindedir: `content-box`):

```css
body {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
  border: 5px solid rgb(181, 8, 8);
}
```

**a)** Tarayıcı penceresinin içerik genişliği **1000 px** iken `body` kutusunun kenarlık dahil toplam genişliği kaç pikseldir? Sol ve sağ dış boşluk (margin) kaçar piksel olur? İşlemle gösteriniz.

**b)** Aynı sayfa genişliği **400 px** olan bir telefonda açılıyor. `body`'nin içerik alanı kaç piksel olur? Yatay kaydırma çubuğu çıkar mı?

**c)** `max-width: 600px;` yerine `width: 600px;` yazılsaydı 400 px'lik telefonda ne olurdu?

---

### Soru 5 — Kod doğru, site yine de "bazen" bozuk

*İlgili makaleler: Command line crash course · JavaScript: Adding interactivity · Publishing your website*

Sitemizde resme tıklayınca iki resim arasında geçiş yapılır:

```js
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/kali-cubes.jpg") {
    myImage.setAttribute("src", "images/kali-glitch.jpg");
  } else {
    myImage.setAttribute("src", "images/kali-cubes.jpg");
  }
});
```

Site bilgisayarda (yerel dosya olarak) sorunsuz çalışıyor. GitHub Pages'te yayınlandıktan sonra ise geçiş **bazen oluyor, bazen olmuyor**; kullanıcı arka arkaya tıkladığında resim çoğu zaman eski hâlinde kalıyor. Konsolda hata yoktur, iki resim dosyası da sunucuda mevcuttur. Terminal çıktısı:

```
$ ls -lh images/
-rw-r--r-- 1 yusuf yusuf 442K kali-cubes.jpg
-rw-r--r-- 1 yusuf yusuf 2,4M kali-glitch.jpg

$ file images/*
images/kali-cubes.jpg:  JPEG image data, ... 3840x2160
images/kali-glitch.jpg: JPEG image data, ... 3840x2160
```

Resim sayfada en fazla yaklaşık **600 px** genişliğinde gösterilmektedir.

**a)** Kod doğruysa sorunun sebebi nedir? Neden yerelde çalışıp yayında "bazen" çalışmıyor?

**b)** Kullanıcı resim yüklenmeden ikinci kez tıklarsa koda göre ne olur?

**c)** Sorunu nasıl çözersiniz? Sebebin bu olduğunu tarayıcıda hangi araçla kanıtlarsınız?

---

## Bölüm 2: Cevaplar

### Cevap 1 — Tarayıcı, arama motoru, web sitesi

**a)**
1. Firefox → **tarayıcı**
2. Google → **arama motoru**
3. `developer.mozilla.org` → **web sitesi** (aynı alan adını paylaşan, birbirine bağlı sayfaların tamamı)
4. `.../docs/Web/HTML` adresindeki belge → **web sayfası** (sitenin içindeki tek bir HTML belgesi)
5. MDN'yi barındıran bilgisayar → **web sunucusu**

**b)**
Cümle **yanlıştır**. Google bir **arama motorudur**, yani başka sayfaları bulmaya yardım eden bir web hizmetidir. Tarayıcı ise sayfaları açıp gösteren programdır. Doğrusu: *"Benim tarayıcım Firefox, arama motorum Google."*
Karışıklığın sebebi: tarayıcılar ilk açıldığında genellikle bir arama motorunun sayfasını gösterir ve adres çubuğuna yazılan kelimeleri arama motoruna gönderir. Kullanıcı arama motorunu tarayıcının kendisi sanar.

**c)**
Tarayıcı, adres çubuğuna yazılan şeyin bir **web adresi olmadığını** anlayınca onu bir **arama terimi** kabul eder ve **varsayılan arama motoruna** (burada Google) gönderir. Varsayılan arama motoru tarayıcının ayarlarından değiştirilebilir.

---

### Cevap 2 — `<head>` ile `<body>`

**a)**
Sayfanın içinde yalnızca **`<body>`** içindekiler görünür: **"Hoş geldiniz"** başlığı, **"Bu benim ilk web sitem."** paragrafı ve **kedi resmi**.
`<head>` içindekiler sayfada **görünmez**. `<head>`, sayfa hakkında bilgiler taşır: karakter kodlaması (`<meta charset>`), sayfa başlığı (`<title>`) ve CSS bağlantısı (`<link>`).

**b)**
Sayfanın içinde değil, **tarayıcının sekmesinde** görünür. Sayfa yer imlerine eklendiğinde de bu ad kullanılır.

**c)**
**Doğru değildir.**
- `<h1>` ekranda görünmesi gereken bir **içeriktir**, bu yüzden **`<body>`** içinde olmalıdır.
- `<link>` sayfada görünmez; tarayıcıya "bu sayfanın stil dosyası şudur" bilgisini verir. Sayfa hakkında bilgi olduğu için **`<head>`** içinde olmalıdır.

**Kural:** `<head>` = sayfa **hakkında** bilgi (görünmez) · `<body>` = sayfanın **içeriği** (görünür).

---

### Cevap 3 — HTML, CSS ve JavaScript'in görevleri

**a)**
1. Başlık yazısı → **`index.html`** (`<h1>Merhaba</h1>`: sayfanın içeriği)
2. Başlığın rengi → **`styles/style.css`** (`h1 { color: blue; }`: görünüm)
3. Tıklayınca resmin değişmesi → **`scripts/main.js`** (`addEventListener("click", ...)`: davranış)
4. Telefon ekranına sığma → **`styles/style.css`** (`max-width`: görünüm/yerleşim)

**b)**
- **HTML:** Sayfanın **içeriğini ve iskeletini** oluşturur (başlık, paragraf, resim, buton…).
- **CSS:** Sayfanın **görünümünü** belirler (renk, yazı tipi, boyut, yerleşim).
- **JavaScript:** Sayfaya **davranış** ve etkileşim kazandırır (tıklayınca, yazınca, sayfa açılınca bir şey olması).

*(Benzetme: HTML evin duvarları, CSS boyası ve dekorasyonu, JavaScript elektriği ve düğmeleri.)*

**c)**
HTML **sabittir**: dosyaya ne yazılırsa herkese aynı şekilde gösterilir. Kullanıcının adı ise dosya yazılırken **bilinmez**; sayfa açıldıktan sonra kullanıcıdan `prompt()` ile alınır. Sayfa açıldıktan **sonra** içeriği değiştirmek JavaScript'in işidir: `myHeading.textContent = ...` satırı başlığın yazısını o anda değiştirir.

---

### Cevap 4 — Kutu modeli ve telefona uyum

**a)**
`content-box` modelinde `width`/`max-width` yalnızca **içerik** alanını belirler; iç boşluk ve kenarlık **üstüne eklenir**.
Toplam genişlik = 600 (içerik) + 20 + 20 (padding) + 5 + 5 (border) = **650 px**
`margin: 0 auto` kalan boşluğu iki yana eşit paylaştırır: (1000 − 650) / 2 = **175 px** sol, **175 px** sağ.

**b)**
`max-width` bir **üst sınırdır**, kutuyu zorla 600 px yapmaz. Ekran dar olduğunda kutu ekrana sığacak kadar daralır: 400 − 20 − 20 − 5 − 5 = **350 px** içerik alanı. Yatay kaydırma çubuğu **çıkmaz**.

**c)**
`width: 600px` kesin bir genişliktir: kutu ekrandan bağımsız olarak 650 px yer kaplar. 400 px'lik ekrana sığmaz, **250 px** taşar ve **yatay kaydırma çubuğu** çıkar. `width` "şu kadar ol" der, `max-width` "en fazla şu kadar ol" der. Telefona uyum için `max-width` kullanılır.

**Kanıt:** F12 → Elements → `body` seçilince sağdaki kutu modeli şeması (margin / border / padding / içerik) bu değerleri gösterir. `Ctrl+Shift+M` ile telefon görünümünde denenebilir.

---

### Cevap 5 — Kod doğru, site yine de "bazen" bozuk

**a)**
Sorun kodda değil, **ortamdadır: dosya boyutu ve ağ gecikmesi.**
`kali-glitch.jpg` **2,4 MB** ve **3840x2160 (4K)** boyutundadır; ekranda ise yaklaşık 600 px gösterilmektedir. JS `src`'yi tıklama **anında** değiştirir, ancak tarayıcı yeni resmi ağdan **indirene kadar ekranda eski resim kalır**. Kullanıcı "değişmedi" sanır.
Yerelde dosya diskten anında okunur, beklenecek bir ağ yoktur; bu yüzden sorun görünmez.

**b)** İkinci tıklamada `src` artık `images/kali-glitch.jpg` olduğu için `else` dalı çalışır ve `src` **geri** `images/kali-cubes.jpg` yapılır. İkinci tıklama birinciyi **geri alır**; ekranda hiçbir şey değişmemiş gibi görünür. Kod her tıklamada doğru çalışmaktadır.

**c)**
- **Çözüm:** Resimleri gösterildikleri boyuta küçültmek. Örneğin yüksek çözünürlüklü ekranlar için 600 px'in iki katı olan 1200 px:
  ```bash
  magick images/kali-glitch.jpg -resize 1200x -quality 85 images/kali-glitch.jpg
  ```
  Sitemizde bu işlemle `kali-glitch.jpg` **2,4 MB → 204 KB** (yaklaşık 12 kat küçük) oldu ve sorun ortadan kalktı.
- **Kanıt:** F12 → **Network** paneli: resme tıklayınca `kali-glitch.jpg` satırında boyut (2,4 MB) ve indirme süresi görünür. **Disable cache** işaretlenip hız **Slow 3G** seçildiğinde resim saniyelerce gelmez ve sorun açıkça görülür. Küçültülmüş resimle aynı ölçüm tekrarlanarak önce/sonra farkı gösterilir.

**Adli bilişim yöntemi (eleme):** Dosya sunucuda var ✅ → JS güncel ✅ → konsol temiz ✅ → `src` doğru ✅. Kodla ilgili tüm şüpheliler elendiğinde sebep **ortamda** aranır. Delil terminal çıktısındaki **2,4M** değeridir.

**Canlı sahne:** [`bozuk-site/5-bazen-calisan-resim/`](../uygulama/v1-2026-guz-sancak/bozuk-site/5-bazen-calisan-resim/) (Bu sahnede resimler bilerek orijinal 4K boyutunda bırakılmıştır.)
