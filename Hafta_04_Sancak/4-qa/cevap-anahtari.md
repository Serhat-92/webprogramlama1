# Soru-Cevap (QA) ve Adli Bilişim — Cevap Anahtarı

**Ders:** Web Programlama I · **Takım:** Getting Started Modules — 1. Grup
**Hazırlayan:** Serhat (QA ve Adli Bilişim)
**Soru dosyası:** [`sorular.md`](sorular.md)

> Her cevapta: **Cevap** → **Kanıt / canlı gösterim** → **İpuçları** (sınıf takılırsa sırayla verilir) → **Düzeltme** → **Akılda kalacak cümle**.
>
> 🔴 = Bu hata, sitemiz geliştirilirken **gerçekten yaşandı**.

---

## Genel kural: Kim bağırır, kim susar?

| Dil | Hatayla karşılaşınca ne yapar? |
|---|---|
| **HTML** | **Susar.** Hata vermez, kendi yorumunu yapar (etiketleri yerinden oynatır, kendiliğinden kapatır). |
| **CSS** | **Susar.** Anlamadığı satırı tamamen yok sayar. |
| **JavaScript** | **Bağırır ve durur.** Konsola kırmızı hata yazar, dosyanın geri kalanını çalıştırmaz. |

Soruların çoğu bu tablonun bir satırına dayanıyor.

---

## BÖLÜM A — Environment setup

### Cevap 1 — Görünmeyen uzantı

**Cevap:** Dosyanın gerçek adı **`index.html.txt`**.

- Not Defteri, "Kayıt türü" **Metin Belgeleri (*.txt)** seçiliyken dosyanın sonuna gizlice `.txt` ekler.
- Windows Dosya Gezgini varsayılan olarak **bilinen dosya uzantılarını gizler.** `.txt` gizlendiği için ad `index.html` gibi görünür.
- Bilgisayar dosyayı metin belgesi sandığı için Not Defteri açılır.
- GitHub Pages `index.html` arar, `index.html.txt` onun için farklı bir dosyadır, bu yüzden **404** verir.

**Kanıt:** Terminalde `dir` (Windows) veya `ls` (Linux/Mac) gerçek adı gösterir: `index.html.txt`.

**İpuçları:**
1. Dosya Gezgini size dosyanın **tam** adını gösteriyor mu?
2. Bilgisayar hangi programla açacağına neye bakarak karar verir?

**Düzeltme:**
- Dosya Gezgini → Görünüm → **"Dosya adı uzantıları"** kutusunu işaretle.
- Not Defteri'nde kaydederken "Kayıt türü" → **Tüm Dosyalar**.
- Ya da baştan VS Code kullan.

**Akılda kalacak cümle:** *"Gözünün gördüğü ad ile dosyanın gerçek adı aynı olmayabilir. Terminal yalan söylemez."*

---

### Cevap 2 — "İki tarayıcıda test ettim"

**Cevap:** **Hayır, karşılamıyor.** Chrome ve Edge farklı markalar ama **aynı motoru** kullanıyor.

Tarayıcının görünen yüzü farklı olabilir, ama sayfayı çizen **motor** asıl önemli olan:

| Motor | Kullanan tarayıcılar |
|---|---|
| **Blink** (Chromium) | Chrome, Edge, Opera, Brave, Vivaldi, Samsung Internet |
| **Gecko** | Firefox |
| **WebKit** | Safari (iPhone'da Chrome bile çoğunlukla WebKit kullanır) |

Chrome ve Edge'de test etmek, aynı arabanın iki farklı renkteki modelini test etmek gibi: motor aynı. Bir motorun hatası diğerinde çıkmayabilir, bu yüzden MDN **farklı motorlar** üzerinde test etmeyi söylüyor.

**Kanıt:** Bizim projemizde **Firefox (Gecko)** ve **Chromium (Blink)** kullandık. Örneğin "Slow 3G" hız ayarı Chromium'da var, Firefox'ta menünün adları farklı. Araçlar bile motora göre değişiyor.

**İpuçları:**
1. Edge'in "Hakkında" sayfasında hangi kelime geçiyor? (*Chromium*)
2. Bir tarayıcının dış görünüşü ile sayfayı çizen kısmı aynı şey mi?

**Doğru test:** En az bir **Blink** (Chrome/Edge) ve bir **Gecko** (Firefox). Mümkünse bir de **WebKit** (Safari / iPhone).

**Akılda kalacak cümle:** *"Tarayıcı sayısı değil, motor sayısı önemli."*

---

### Cevap 3 — Resim neden görünmüyor? 🔴

**Cevap:** `src` **göreli (relative) bir yoldur** ve `index.html` dosyasının durduğu klasöre göre çözülür.

- `src="kali-cubes.jpg"` → "`index.html`'in **yanında** `kali-cubes.jpg` ara." Orada yok.
- Resim `images/` klasörünün **içinde**.
- Tarayıcı dosyayı bulamayınca yedek olarak `alt` metnini gösterir.

**Kanıt:**
- `alt` yazısının görünmesi, `<img>` etiketinin **çalıştığını**, sadece dosyanın bulunamadığını gösterir.
- F12 → **Ağ (Network)**: `kali-cubes.jpg` isteği kırmızı, durum **404**.

**İpuçları:**
1. `alt` yazısının görünmesi ne anlama gelir?
2. Tarayıcı `src`'deki yolu nereden başlayarak arar?
3. "Kalemi masada ara" ile "Masadaki çekmecenin içinde ara" aynı tarif mi?

**Düzeltme:**
```html
<img src="images/kali-cubes.jpg" alt="Kali Linux logosu ve küpler" />
```

**Bonus bağlantılar:**
- `file` komutu uzantıya değil, dosyanın **içeriğine** bakar (Command line makalesi).
- Linux'ta büyük/küçük harf önemlidir: `Images/` ≠ `images/`. GitHub Pages da Linux sunucuda çalışır. Windows'ta çalışan bir site yayında bozulabilir.
- `.jpg` ≠ `.jpeg`: bilgisayar için iki farklı dosya adı.

**Akılda kalacak cümle:** *"`alt` görünüyorsa etiket sağlam, yol yanlış."*

---

## BÖLÜM B — Your first website: HTML

### Cevap 4 — Bu satır neden şart? (Quirks Mode)

**Cevap:**

**1. Başlık neden büyüdü?**
- `font-size: 20;` **hatalı** bir CSS, çünkü birim (`px`) yok.
- Doctype yokken tarayıcı **Quirks Mode**'dadır. Bu modda 1990'ların tarayıcılarının alışkanlıklarını taklit eder ve "herhalde piksel demek istedi" diyip 20px uygular. Başlık küçük görünür.
- Doctype eklenince tarayıcı **Standards Mode**'a geçer. Burada birimsiz değer **geçersizdir** ve satır **yok sayılır**. Başlık tarayıcının varsayılan `h1` boyutuna (yaklaşık 32px) döner ve büyür.

**2. Doctype neden şart?**
- 1990'larda tarayıcılar CSS'i kendi bildikleri gibi, standart dışı uyguluyordu. Standartlar gelince eski siteleri bozmamak için tarayıcılar iki mod geliştirdi:
  - Doctype **varsa** → Standards Mode (güncel kurallar)
  - Doctype **yoksa** → Quirks Mode (eski hataları taklit eden uyumluluk modu)
- Doctype bir **anahtardır**. Doctype'sız sayfa hatalı kodu **gizler**: bugün "çalışıyor" görünen hatalı kod, biri doctype eklediği gün "kendiliğinden" bozulur.

**Kanıt / canlı gösterim:**
- Firefox konsolu: *"This page is in Quirks Mode. Page layout may be impacted. For Standards Mode use `<!DOCTYPE html>`"*
- Konsola yaz: `document.compatMode`
  - `"BackCompat"` → Quirks Mode
  - `"CSS1Compat"` → Standards Mode

**İpuçları:**
1. Konsolda hangi uyarı var?
2. `font-size: 20` ne birimi? Piksel mi, santim mi, yüzde mi?
3. Windows'taki "uyumluluk modunda çalıştır" seçeneğini düşünün.

**Düzeltme:**
```html
<!doctype html>
```
```css
h1 { font-size: 20px; }
```

**Not:** `<!doctype html>` ile `<!DOCTYPE html>` aynıdır, bu satırda büyük/küçük harf fark etmez.

**Akılda kalacak cümle:** *"Doctype'sız sayfa hatalarını saklar. Doctype onları ortaya çıkarır."*

---

### Cevap 5 — Bozuk Türkçe harfler

**Cevap:**

**1. Harfler neden böyle bozuluyor?**
- Bilgisayar harfleri **sayı (bayt)** olarak saklar. Hangi sayının hangi harf olduğunu söyleyen tabloya **karakter kodlaması** denir.
- UTF-8'de `ş` harfi **iki bayttır** (`C5 9F`).
- `charset` yazılmamışsa tarayıcı kodlamayı **tahmin etmek** zorunda kalır. Yanlış tahminde, örneğin eski Batı Avrupa tablosu Windows-1252'de, her bayt **ayrı bir harf** sanılır:
  - `C5` → `Å`, `9F` → `Ÿ` → **`ş` yerine `ÅŸ`**
  - `İ` (`C4 B0`) → **`Ä°`**

**2. Neden bazı bilgisayarlarda bozuluyor, bazılarında değil?**
- Kodlama sadece HTML'de değil, sunucunun gönderdiği **HTTP başlığında** da bildirilebilir. GitHub Pages sayfayı `Content-Type: text/html; charset=utf-8` başlığıyla gönderir, bu yüzden yayındaki sitede genelde sorun çıkmaz.
- Dosya yerelden açıldığında ya da başlık göndermeyen bir sunucudan geldiğinde karar **tarayıcının tahminine** kalır. Tahmin tarayıcıya, ayarlara ve dile göre değişir.

**Kanıt:** Firefox konsolu, charset yoksa *"The character encoding of the HTML document was not declared..."* uyarısı verir.

**İpuçları:**
1. Bilgisayar `ş` harfini nasıl saklar?
2. Bir harf neden **iki** tuhaf karaktere dönüşüyor?
3. Yayındaki site ile yerel dosya arasında ne fark var?

**Düzeltme:** `<head>`'in **ilk satırı** olarak:
```html
<meta charset="utf-8" />
```
Tarayıcı bu bilgiyi sayfanın ilk 1024 baytında arar, bu yüzden en üstte olmalı.

**Akılda kalacak cümle:** *"Bir harf iki çöp karaktere dönüşüyorsa charset eksiktir."*

---

### Cevap 6 — Yanlış yerdeki başlık

**Cevap:** Tarayıcı **hoşgörülü** olduğu için hiçbir şey bozulmamış gibi görünüyor, ama kod **geçersiz HTML**.

- Tarayıcı `<body>` içinde `<title>` görünce hata vermez. `document.title` sayfadaki **ilk** `<title>` etiketini kullanır, nerede olursa olsun. Bu yüzden sekmede başlık görünür.
- Tarayıcının kendi stil kuralları `<title>` etiketini zaten gizler (`display: none`), bu yüzden sayfada da görünmez.
- Ama `<head>`, sayfa **hakkındaki** bilgilerin (metadata) yeridir. `<title>` sayfanın içeriği değil, kimlik kartıdır: sekmede, yer imlerinde ve Google arama sonuçlarında kullanılır.
- Arama motorları, sosyal medya önizlemeleri ve ekran okuyucular tarayıcı kadar hoşgörülü olmak **zorunda değil**. Standart yer `<head>`'dir.

**Kanıt:** Kodu [validator.w3.org](https://validator.w3.org) denetleyicisine yapıştır: `<body>` içindeki `<title>` için **hata** verir.

**İpuçları:**
1. Hata vermemesi, kodun doğru olduğu anlamına mı gelir?
2. Başlığı tarayıcı dışında kim okur?
3. Mektup benzetmesi: adres zarfın üstüne mi yazılır, mektubun içine mi?

**Düzeltme:** `<title>` etiketini `<head>` içine taşı.

**Akılda kalacak cümle:** *"Çalışması doğru olduğunu göstermez. HTML hatayı affeder, validator affetmez."*

---

### Cevap 7 — Ekrana düşen not 🔴

**Cevap:** `/* ... */` **CSS ve JavaScript'in** yorum işaretidir. **HTML bunu tanımaz** ve düz yazı sanar.

Tarayıcının yaptığı:
1. `<head>` içinde **yazı** görür. Kafada yazı olmaz.
2. Hata vermek yerine `<head>`'i **kendiliğinden kapatır**, `<body>`'yi **kendiliğinden açar**.
3. Notu `<body>`'ye, yani **ekrana** basar.
4. Sonraki asıl `</head>` ve `<body>` etiketlerini yok sayar.

**Kanıt:** F12 → **Denetçi**: not yazısı `<head>` içinde değil, **`<body>` içinde** görünür.

**İpuçları:**
1. Bu yorum işaretini daha önce hangi dosyada gördünüz?
2. `<head>` içinde ekranda görünen bir şey olabilir mi?

**Düzeltme:**
```html
<!-- defer: JavaScript dosyasının, HTML belgesi tamamen okunduktan
     sonra çalıştırılmasını sağlar. -->
```

**Yorum işaretleri tablosu:**

| Dil | Yorum |
|---|---|
| HTML | `<!-- ... -->` |
| CSS | `/* ... */` |
| JavaScript | `// ...` veya `/* ... */` |

**Kardeş hatalar (aynı mekanizma):** 🔴
- `-->>` → fazladan `>` ekranın en üstünde görünür.
- Yorumu etiketin **içine** yazmak (`<link ... <!-- not --> />`) → etiket erken kapanır, `/>` ekrana düşer.

**İpucu:** VS Code'da `Ctrl+/` dosya türüne göre **doğru** yorum işaretini kendisi koyar.

**Akılda kalacak cümle:** *"Sayfanın en üstünde anlamsız bir yazı varsa, `<head>`'de etiket dışında kalmış bir karakter vardır."*

---

### Cevap 8 — Sessiz hatalar 🔴

**Cevap:**

**a) `rel="styleesheet"`:** Yazım hatası (fazladan bir `e`). Tarayıcı `styleesheet` diye bir ilişki tanımaz, linki **sessizce yok sayar** ve dosyayı stil olarak yüklemez. Roboto fontu gelmez, CSS'teki yedek `sans-serif` kullanılır.

**b) `padding: 0 auto;`:** `auto` değeri **`margin` için geçerlidir** (dıştaki boş alanı sağa ve sola eşit paylaştırır). `padding` için **geçersizdir**: iç boşluk paylaştırılacak bir alan değil, net bir kalınlıktır. Tarayıcı geçersiz satırın **tamamını** yok sayar ve padding 0 kalır.

**Ortak nokta:** İkisinde de tarayıcı **hata vermiyor, anlamadığı şeyi görmezden geliyor.** HTML ve CSS "sessiz" dillerdir.

**Kanıt:**
- **a)** F12 → Ağ: Google Fonts isteği hiç yapılmamış ya da stil olarak kullanılmamış.
- **b)** F12 → Denetçi → `<body>` seç → Kurallar panelinde `padding: 0 auto;` satırının **üstü çizili** ve yanında **⚠️ uyarı ikonu** var.

**İpuçları:**
1. Konsolda hata yoksa, kod doğru mu demektir?
2. "Ortalamak" için `auto` hangi özellikte işe yarıyordu?
3. `stylesheet` kelimesini harf harf okuyun.

**Düzeltme:**
```html
rel="stylesheet"
```
```css
padding: 0 20px 20px 20px;
```

**Akılda kalacak cümle:** *"Konsolun temiz olması kodun doğru olduğunu göstermez. HTML ve CSS hata vermez, sessizce yok sayar."*

---

## BÖLÜM C — Your first website: CSS

### Cevap 9 — Telefonda taşan sayfa

**Cevap:** `width: 600px` → "**Her zaman** tam 600 piksel ol." Telefon ekranı yaklaşık 375 piksel olsa bile kart 600 pikselde kalır ve ekrandan **taşar**.

**Tek kelimelik düzeltme:**
```css
body {
  max-width: 600px;
  margin: 0 auto;
}
```
`max-width` → "**En fazla** 600 piksel ol. Ekran daha darsa ekrana uy."

**Kanıt / canlı gösterim:** F12 → `Ctrl+Shift+M` (Duyarlı Tasarım Modu) → telefon seç. `width` ile yatay kaydırma çubuğu çıkar, `max-width` ile çıkmaz.

**İpuçları:**
1. 375 piksellik ekrana 600 piksellik kutu sığar mı?
2. "Tam olarak" ile "en fazla" arasındaki fark ne?

**Kural:**
- **Sabit** birimle (`px`) genişlik veriyorsan → `max-width`
- **Yüzdeyle** "kabı doldur" diyorsan → `width: 100%` (yüzde zaten kaba göre daralır)

**Bağlantı:** Hoca dönem sonu jürisinde tam olarak bunu test edecek: *"Sayfayı daralt, bozuldu mu?"*

**Akılda kalacak cümle:** *"`width` söz verir, `max-width` sınır koyar."*

---

### Cevap 10 — Sadece bazı yerlere tıklayınca çalışan resim 🔴

**Cevap:**

**1. Sorun nerede?**
Kod doğru, sorun **kutu modelinde**.
- `addEventListener("click", ...)` dinleyiciyi **`<img>` elementinin kutusuna** bağlar. Sadece o kutunun içine yapılan tıklamalar sayılır.
- İki resmin **en-boy oranı farklıysa**, resim değiştiğinde kutunun boyutu da değişir.
- Eski resmin kapladığı ama yeni resmin kaplamadığı bir yere tıklamak, aslında kartın arka planına (`<body>`) tıklamaktır. Orada dinleyici yok, bu yüzden hiçbir şey olmaz.
- MDN makalesinin *"benzer boyutta iki resim kullanın"* demesinin sebebi bu.

**Adli bilişim yöntemi (eleme):** Tablodaki dört kontrol, şüphelileri tek tek eledi: dosya ✅, JS ✅, konsol ✅, `src` ✅. Hepsi temiz çıkınca sebep koddan değil, **görünüşten** (CSS) geliyor.

**Kanıt:** F12 → Denetçi → `<img>` satırının üzerine gel. Tarayıcı kutuyu **mavi** renkle boyar. Resmi değiştir ve tekrar bak: kutunun boyutu değişiyor.

**Düzeltme:** Kutuyu resimden bağımsız sabitle:
```css
img {
  display: block;
  width: 100%;          /* her zaman kartın tam genişliği */
  aspect-ratio: 16 / 9; /* yükseklik hep genişliğin 9/16'sı */
  object-fit: cover;    /* resmi esnetmeden kutuyu doldur, taşanı kırp */
  margin: 0 auto;
  cursor: pointer;      /* el işareti: "buraya tıklanır" */
}
```
`max-width: 100%` yetmez: sadece üst sınır koyar, karttan **küçük** bir resmi büyütmez. Kutu yine değişir.

**2. Bonus: `favicon.ico 404`**
Tarayıcılar, sekmedeki küçük ikonu göstermek için **her sitede otomatik olarak** `/favicon.ico` dosyasını ister. Dosya yoksa 404 alır. **Zararsızdır**, sadece sekmede ikon görünmez.

**İpuçları:**
1. Tıklama tam olarak neye bağlandı: resme mi, sayfaya mı?
2. F12 ile `<img>` kutusunu görün ve iki resimde karşılaştırın.

**Akılda kalacak cümle:** *"Tıklama, gördüğün resme değil, elementin kutusuna bağlanır."*

---

## BÖLÜM D — Your first website: JavaScript

### Cevap 11 — Resim var ama JS bulamıyor

**Cevap:**

**1. JS resmi neden bulamadı?**
Tarayıcı HTML'i **yukarıdan aşağıya** okur. `defer` olmayan bir `<script>` görünce okumayı **durdurur**, JS'i indirir ve **hemen** çalıştırır.
- Script `<head>` içinde. O anda tarayıcı `<body>`'yi **henüz okumadı**.
- `querySelector("img")` → resim henüz yok → **`null`** döner.
- `null.addEventListener(...)` → **TypeError**.

Resim **sonradan** ekrana geliyor. JS çalıştığı anda yoktu.

**2. `async` kesin çözer mi?**
**Hayır.** `async` → "dosya indirildiği **anda** çalış." Dosya erken inerse HTML yine yarım okunmuş olabilir. Bazen çalışır, bazen çalışmaz. En kötü hata türü budur.

**3. Kesin çözüm:**
```html
<script defer src="scripts/main.js"></script>
```
`defer` → "HTML'in **tamamı** okunduktan **sonra** çalış." Başlık, resim ve buton hazır olur.
(Alternatif: `<script>` etiketini `</body>`'nin hemen üstüne koymak.)

**Kanıt:** Kendi sitemizde `defer` kelimesini silip yenile: konsolda hata çıkar. Geri ekle: hata kaybolur.
- Firefox: `Uncaught TypeError: myImage is null`
- Chrome: `Cannot read properties of null (reading 'addEventListener')`

**İpuçları:**
1. Tarayıcı HTML'i hangi sırayla okur?
2. Script çalıştığı anda `<body>` okunmuş muydu?
3. `null` ne demek? Daha önce `querySelector("video")` ile ne almıştık?

**Not:** MDN makalesi `async` kullanıyor, biz bilinçli olarak `defer` seçtik.

**Akılda kalacak cümle:** *"JS, henüz okunmamış bir şeyi bulamaz. `defer` = önce sayfa, sonra kod."*

---

### Cevap 12 — Konsolda tek hata, kodda kaç hata? 🔴

**Cevap:**

**1. Toplam 3 hata var:**

| Satır | Yazılan | Olması gereken | Sorun |
|---|---|---|---|
| `setUserName` içinde | `localStorge` | `localStorage` | Eksik `a` |
| `else` içinde | `${StoredName}` | `${storedName}` | Büyük `S` |
| En son | `MyButton` | `myButton` | Büyük `M` |

JavaScript **büyük/küçük harfe duyarlıdır**: `myButton` ile `MyButton` iki ayrı isimdir.

**2. Konsol neden sadece birini gösteriyor?**
- **JS ilk hatada durur.** Ad girilince `setUserName` çalışır, `localStorge` satırında çöker: `ReferenceError: localStorge is not defined`. Dosyanın geri kalanı **hiç çalışmaz**, bu yüzden `MyButton` satırına sıra gelmez ve onun hatası görünmez.
- **`StoredName` iki kez gizli:** O satır sadece localStorage'da kayıtlı bir isim **varken** çalışır. Ama `localStorge` hatası yüzünden isim **hiç kaydedilemiyor**, bu yüzden o satıra hiç sıra gelmiyor.

**Kanıt / canlı gösterim:** Hataları **tek tek** düzelt ve her seferinde yenile:
1. `localStorge` düzeltilir → konsolda bu sefer `MyButton is not defined` çıkar.
2. `MyButton` düzeltilir → `F5` → isim kayıtlı olduğu için `else` çalışır → `StoredName is not defined` çıkar.
3. `StoredName` düzeltilir → konsol temiz.

**İpuçları:**
1. JS bir hatayla karşılaşınca devam eder mi, durur mu?
2. `const myButton` ile tanımlanan kutu `MyButton` adıyla çağrılabilir mi?
3. `else` kısmı hangi durumda çalışır? O durum şu an hiç oluşabiliyor mu?

**Akılda kalacak cümle:** *"Bir hatayı düzeltmek, arkasında saklanan hatayı ortaya çıkarabilir. HTML ve CSS susar, JS bağırır ama sadece ilk hatayı söyler."*

---

### Cevap 13 — İptal tuzağı

**Cevap:** Kullanıcı **sayfadan kurtulamaz.**

Kafada adım adım çalıştırma:
1. `prompt` açılır, kullanıcı **İptal**'e basar → `myName = null`.
2. `!null` → `true` → `if` kısmı çalışır → `setUserName()` **kendini tekrar çağırır**.
3. Pencere yeniden açılır → İptal → 1. adıma dön...

Pencere **sonsuza kadar** açılmaya devam eder. Kullanıcı bir ad yazmadan çıkamaz.

**Daha kötüsü (bonus):** Tarayıcı bir süre sonra *"Bu sayfanın başka iletişim kutusu açmasını engelle"* seçeneği sunabilir. Seçilirse `prompt` artık pencere açmadan **anında `null`** döner. Fonksiyon kendini saniyede binlerce kez çağırır ve sayfa çöker:
- Chrome: `RangeError: Maximum call stack size exceeded`
- Firefox: `InternalError: too much recursion`

**Düzeltme (bizim kodumuz):**
```js
if (!myName) {
  return; // İptal veya boş → hiçbir şey değiştirmeden çık
}
```

**İpuçları:**
1. İptal'e basınca `prompt` ne döndürür?
2. `!null` doğru mu, yanlış mı?
3. Fonksiyon kendini çağırırsa ne olur? Bu ne zaman durur?

**Not:** Bu, MDN'nin orijinal kodundaki bir kusur. Biz bilinçli olarak `return` kullandık.

**Akılda kalacak cümle:** *"Kendini çağıran bir fonksiyonun bir çıkış kapısı olmalı."*

---

## Hızlı başvuru tablosu

| # | Konu | Makale | Zorluk | Gerçekten yaşandı | Kilit kavram |
|---|---|---|---|---|---|
| 1 | Görünmeyen uzantı | Dealing with files | ⭐ | | Dosya uzantısı gizleme |
| 2 | Tarayıcı motorları | Installing software | ⭐ | | Blink / Gecko / WebKit |
| 3 | Resim görünmüyor | Dealing with files | ⭐ | 🔴 | Göreli yol |
| 4 | Doctype / Quirks Mode | Creating the content | ⭐⭐⭐ | | Uyumluluk modu |
| 5 | Bozuk Türkçe harfler | Creating the content | ⭐⭐ | | Karakter kodlaması |
| 6 | `<title>` yanlış yerde | Creating the content | ⭐⭐ | | Hoşgörü ≠ doğruluk |
| 7 | Ekrana düşen not | Creating the content | ⭐⭐ | 🔴 | Yorum söz dizimi |
| 8 | Sessiz hatalar | Creating / Styling | ⭐⭐ | 🔴 | HTML/CSS hata vermez |
| 9 | Telefonda taşan sayfa | Styling the content | ⭐⭐ | | `width` / `max-width` |
| 10 | Tıklanabilir alan | Styling / Interactivity | ⭐⭐⭐ | 🔴 | Kutu modeli |
| 11 | JS resmi bulamıyor | Adding interactivity | ⭐⭐⭐ | | `defer` / sayfa okuma sırası |
| 12 | Tek hata, kaç hata? | Adding interactivity | ⭐⭐⭐ | 🔴 | JS ilk hatada durur |
| 13 | İptal tuzağı | Adding interactivity | ⭐⭐ | | Sonsuz özyineleme |
