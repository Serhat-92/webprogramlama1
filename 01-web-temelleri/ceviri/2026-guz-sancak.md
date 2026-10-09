> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Çeviri: MDN — Getting Started (Başlarken), 1. Grup

**Konu:** 01 - Web Temelleri → *Environment setup* (Ortam kurulumu) + *Your first website* (İlk web siteniz)
**Takım:** Sancak — 2026 Güz (Çeviri sorumlusu: Samet Demir)
**Kaynak:** [MDN Web Docs — Learn web development → Getting started](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started)
**Lisans:** MDN içeriği [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/) lisanslıdır, © Mozilla Contributors. Bu belge, MDN sayfalarının birebir Türkçe çevirisidir.

> **Çeviri hakkında:** Her sayfa, MDN'deki orijinal sayfanın tüm bölümleri, notları, kod örnekleri ve **resimleri** ile birlikte birebir çevrilmiştir. Kod örnekleri değiştirilmemiştir. Resimler, MDN'nin kaynak deposundan ([mdn/content](https://github.com/mdn/content), commit `225dfb4`) gösterilmektedir. Teknik terimlerin İngilizcesi ilk geçtikleri yerde parantez içinde verilmiştir.

## İçindekiler

- **Modül 1: Ortam Kurulumu (Environment setup)**
  - 1\. Temel Yazılımları Kurmak (Installing basic software)
  - 2\. Web'de Gezinmek (Browsing the web)
  - 3\. Kod Düzenleyiciler (Code editors)
  - 4\. Dosyalarla Çalışmak (Dealing with files)
  - 5\. Komut Satırı Hızlandırılmış Kursu (Command line crash course)
- **Modül 2: İlk Web Siteniz (Your first website)**
  - 6\. Web Siteniz Nasıl Görünecek? (What will your website look like?)
  - 7\. HTML: İçeriği Oluşturmak (HTML: Creating the content)
  - 8\. CSS: İçeriği Biçimlendirmek (CSS: Styling the content)
  - 9\. JavaScript: Etkileşim Eklemek (JavaScript: Adding interactivity)
  - 10\. Web Sitenizi Yayınlamak (Publishing your website)

---

# Modül 1: Ortam Kurulumu (Environment setup)

**Kaynak:** [Environment setup](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup)

_Ortam kurulumu_ modülünde, basit web geliştirme yapmak için hangi araçlara ihtiyacınız olduğunu ve bunları nasıl düzgün bir şekilde kuracağınızı gösteriyor; ayrıca dosya sistemleri (file systems) ve komut satırı (command line) gibi ortamınızın önemli yönlerini anlamanıza yardımcı oluyoruz.

## Ön koşullar

Bu modül, temel bilgisayar kullanımının ötesinde önceden herhangi bir teknik bilgiye sahip olduğunuzu varsaymaz. Şunları yapabiliyor olmalısınız:

- Bilgisayarınızda oturum açmak ve onu internete bağlamak.
- Klavye ve fare (veya diğer işaretleme aygıtları) gibi temel sistem kontrollerini kullanmak.
- Uygulama yüklemek.

Bu tür temel konularda bilgilerinizi tazelemeniz gerekiyorsa, kullandığınız işletim sistemine bağlı olarak aşağıdaki kaynakları öneririz:

- [Windows yardım ve öğrenme](https://support.microsoft.com/en-us/windows/), Microsoft (2024)
- [macOS Kullanma Kılavuzu](https://support.apple.com/guide/mac-help/welcome/mac), Apple (2024)
- [Resmi Ubuntu belgeleri](https://help.ubuntu.com/), ubuntu.com (2024)

## Eğitimler

- **[Yazılım kurmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)**: Bu makalede, basit web geliştirme yapmak için hangi araçlara ihtiyacınız olduğunu ve bunları nasıl düzgün bir şekilde kuracağınızı gösteriyoruz. Şimdilik sizi, bir metin düzenleyici (text editor) ve bazı modern web tarayıcıları da dahil olmak üzere en temel araçlarla donatacağız.
- **[Web'de gezinmek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)**: Bu makale, tarayıcıları kullanma konusunda biraz daha derine iniyor; bir web tarayıcısının nasıl çalıştığına, etkileşimde bulunacağınız yaygın öğelerden bazıları arasındaki farka ve nasıl bilgi arayacağınıza bakıyor.
- **[Kod düzenleyiciler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors)**: Bu makalede kod düzenleyicilere (code editors) daha ayrıntılı bakıyor ve sizin için neler yapabilecekleri hakkında bir fikir veriyoruz.
- **[Dosyalarla çalışmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)**: Bu makale, web siteniz için mantıklı bir dosya yapısı kurabilmeniz amacıyla dosya sistemleriyle ilgili farkında olmanız gereken bazı konuları ele alıyor.
- **[Komut satırına hızlı giriş](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)**: Bu makale; terminale, ona girmeniz gereken temel komutlara, komutları birbirine nasıl zincirleyeceğinize ve kendi komut satırı arayüzü (command-line interface, CLI) araçlarınızı nasıl ekleyeceğinize dair bir giriş sunuyor.

---

## 1. Temel Yazılımları Kurmak (Installing basic software)

**Kaynak:** [Installing basic software](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)

Bu makalede, basit web geliştirme yapmak için hangi yazılımlara ihtiyacınız olduğunu ve şimdi neleri kurmanız gerektiğini ele alıyoruz; bunlar arasında bir kod düzenleyici (code editor) ve bazı modern web tarayıcıları (browser) da var.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine (operating system, OS) temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Başlamak için hangi yazılımlara ihtiyacınız olduğunu anlamak.</li>
          <li>Bir kod düzenleyici, bazı modern tarayıcılar ve yerel bir test sunucusu kurmak.</li>
          <li>Diğer yaygın uygulama türleri için seçenekleri keşfetmek.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Kod düzenleyiciler

İyi bir kod düzenleyici, her geliştiricinin bilgisayarında bulunması gereken en önemli şeylerden biridir. Kod düzenleyiciler, kodunuzu yazdığınız yer olmalarının yanı sıra, başka pek çok işlevi de sunar. Serinin ilerleyen bölümlerinde kod düzenleyicilere ayrı bir makale ayırdık.

Şimdilik [Visual Studio Code](https://code.visualstudio.com/) kurmanızı öneririz; çünkü farklı platformlarda kullanılabilir, harika bir özellik setine ve desteğe sahiptir ve çoğunlukla bizim kullandığımız düzenleyicidir. Bu makalenin geri kalanını takip edebilmek için onu şimdi kurmalısınız.

### Modern web tarayıcıları

Modern web tarayıcılarına erişiminizin olması web geliştirme için çok önemlidir; böylece web sitelerinizi veya uygulamalarınızı, ziyaretçilerinizin onlara erişmek için kullandığı tarayıcılarda test edebilirsiniz. Ayrıca web tarayıcılarınızı güncel tutmanız gerekir; böylece en yeni web teknolojilerini desteklerler ve en son güvenlik düzeltmeleri uygulanmış olur.

Karşılaşacağınız en yaygın tarayıcılar şunlardır:

- Masaüstü tarayıcılar:
  - [Chromium](<https://en.wikipedia.org/wiki/Chromium_(web_browser)>) tabanlı: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - [Gecko](<https://en.wikipedia.org/wiki/Gecko_(software)>) tabanlı: [Mozilla Firefox](https://www.firefox.com/en-US/).
  - [WebKit](https://en.wikipedia.org/wiki/WebKit) tabanlı: [Apple Safari](https://www.apple.com/safari/).
- Mobil/alternatif cihaz tarayıcıları:
  - Chromium tabanlı (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko tabanlı (Android): [Mozilla Firefox](https://www.firefox.com/en-US/download/android/).
  - WebKit tabanlı (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Yukarıda listelenen Android tarayıcılarının çoğunun iOS sürümleri de vardır; ancak Apple'ın App Store kuralları nedeniyle bunların hepsi geçmişte arka planda Apple'ın WebKit motoruyla çalışıyordu. Bu yazının yazıldığı sırada, düzenleyici değişiklikler nedeniyle tarayıcılar, iOS tarayıcılarının kendi işleme motorlarına (rendering engine) dayalı sürümlerini oluşturmaya başlıyor. Bkz. [Apple sonunda Chrome ve Firefox'un tam sürümlerinin iPhone'da çalışmasına izin veriyor](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Modern tarayıcıların çoğu güncellemeleri otomatik olarak yükleme eğilimindedir ve değişiklikleri yeniden başlatıldıklarında uygular. Güncellemeleri genellikle tarayıcının "About" ("Hakkında") sayfasından kontrol edebilirsiniz. Bu sayfa, farklı tarayıcılarda ve işletim sistemlerinde biraz farklı yerlerde bulunur, örneğin:

- Firefox: macOS'ta _Firefox_ > _About Firefox_ ("Firefox Hakkında") altında, Windows'ta ise menü simgesi > _Help_ ("Yardım") > _About Firefox_ ("Firefox Hakkında") altında bulunur.
- Chrome: macOS'ta _Chrome_ > _About Google Chrome_ ("Google Chrome Hakkında") altında, Windows'ta ise menü simgesi > _Help_ ("Yardım") > _About Google Chrome_ ("Google Chrome Hakkında") altında bulunur.

#### Hangi tarayıcılar kurulmalı

Şimdilik, kodunuzu test etmek için birkaç masaüstü ve mobil/alternatif cihaz tarayıcısı kurmalısınız. En az iki farklı işleme motoruna (örneğin Chromium ve Gecko) dayalı tarayıcılar kurun; böylece yalnızca aynı işleme motoruna dayalı birden fazla tarayıcıda test yapmış olmazsınız. Bu önemlidir, çünkü kodunuz yalnızca tek bir işleme motorunu etkileyen hatalar içerebilir.

WebKit tabanlı tarayıcılar Windows, Linux ve Android işletim sistemleri için mevcut değildir. Kodunuzu üç ana işleme motorunun hepsinde test etmek istiyorsanız ve bilgisayarınız Windows tabanlıysa, macOS veya iOS tabanlı bir test cihazına erişim sağlamanız ya da sanal makine veya test platformu gibi yazılım tabanlı bir çözüm kullanmanız gerekir. Ancak bu aşamada kapsamlı testler konusunda endişelenmenize gerek yok — kodunuzu farklı işleme motorlarında test etmeniz gerektiğinin farkına varmanız ve biraz pratik yapmanız şimdilik yeterlidir.

Test stratejilerine [Test etme](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing) modülümüzde daha ayrıntılı olarak bakacaksınız.

### Yerel web sunucuları

Normalde, bir web sitesini yüklemek için tarayıcıya bir web adresi yazdığınızda, tarayıcınızın o siteyi oluşturmak için bir araya getirdiği dosyalar, dünyanın başka bir yerindeki bir sunucu bilgisayarda barındırılan uzak bir web sunucusundan (web server) getirilir. Bunun nasıl çalıştığı hakkında serinin bir sonraki makalesinde daha fazlasını öğreneceksiniz.

Bir web sitesini yerel olarak (kendi bilgisayarınızda) oluştururken, test etmek için ana HTML index dosyasını çoğu zaman doğrudan bir tarayıcıda açabilirsiniz. Ancak bazı örneklerin başarıyla çalışabilmesi için yerel olarak kurulmuş bir web sunucusu üzerinden çalıştırılması gerekir.

#### Yerel bir web sunucusu kurmak

Yerel bir sunucuyu kullanılabilir hale getirmek için bulduğumuz en kolay seçeneklerden biri, bir kod düzenleyici eklentisi (extension) kullanmaktır — bu şekilde sunucu doğrudan kod düzenleyicinizin içinde kullanılabilir olur. Visual Studio Code içinde şunları yapın:

1. _View_ > _Extensions_ ("Görünüm > Eklentiler") menü seçeneğini kullanarak _Extensions_ ("Eklentiler") panelini açın.
2. Bu panelin üst kısmındaki "Search..." ("Ara...") kutusuna "live preview" yazın. En üstteki arama sonucu, Microsoft tarafından oluşturulan [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) eklentisi olmalıdır.
3. Eklenti hakkında, nasıl kullanılacağı da dahil olmak üzere bilgi içeren bir sayfa açmak için o seçeneğe tıklayın.
4. Eklentiyi kurmak için _Install_ ("Yükle") düğmesine basın.
5. Artık düzenleyicide bir HTML dosyası üzerinde çalışırken, canlı örneği ayrı bir sekmede açmak için "Show Preview" ("Önizlemeyi Göster") düğmesine tıklayabiliyor olmalısınız.

Yukarıdaki seçenek basittir ama pek esnek değildir. İleride, örnekleri sahip olduğunuz herhangi bir tarayıcıda yüklemek için kullanılabilecek daha esnek bir yerel sunucu seçeneğine sahip olmak isteyebilirsiniz. Diğer seçenekler (ve yerel sunucuların neden gerekli olduğuna dair daha fazla arka plan bilgisi) için [Yerel bir test sunucusu nasıl kurulur?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) sayfasına bakın.

### Grafik düzenleyiciler

Web geliştiricilerinin, oluşturdukları web sitelerinde kullanmak üzere görsel dosyaları düzenlemeleri sıklıkla gerekir. Bu çoğu zaman grafik varlıklar (assets) tasarlamak/oluşturmak anlamına gelebilir; ancak aynı şekilde grafikler çoğu zaman bir grafik tasarımcı (bu bir ekip arkadaşı veya üçüncü bir taraf olabilir) tarafından sağlanır ve bu durumda web geliştiricisinden aldığı dosyaları kırpması veya yeniden boyutlandırması istenebilir.

MDN'deki öğrenme makalelerinin hiçbiri kendi grafiklerinizi oluşturmanızı gerektirmez; ancak bunlardan birkaçı, sağladığımız dosyalar üzerinde düzenleme yapmanızı gerektirebilir.

Öğrenme yolculuğunuzda ileride ihtiyaç duyana kadar bir grafik düzenleyici kurmamanızı öneririz. Gerçekten değer katacağını düşünmüyorsanız, kesinlikle pahalı bir ticari ürüne para harcamayın.

Şimdilik muhtemelen yeterli olacak pek çok ücretsiz yazılım aracı ve çevrimiçi hizmet vardır, örneğin:

- macOS, [Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac) ("Önizleme") adlı bir araçla birlikte gelir. Bu araç esas olarak görselleri ve PDF'leri görüntülemek için kullanılır, ancak görselleri düzenlemek için yeniden boyutlandırma, döndürme, kırpma, not ekleme ve farklı dosya türleri arasında dönüştürme dahil gerçekten çok kullanışlı bazı özelliklere de sahiptir.
- Windows'un yerleşik [Fotoğraflar uygulaması (Photos app)](https://support.microsoft.com/en-us/windows/apps/photos/manage-photos-and-videos-with-microsoft-photos-app) da benzer pek çok özellikle birlikte gelir.
- [tinypng](https://tinypng.com/) web sitesi, PNG, JPEG ve daha fazla formatı sıkıştırmanıza olanak tanıyan ücretsiz bir hizmet sunar. Bu, bir web sitesinde kullanılacak varlıkları hazırlarken yapmanız gereken çok yaygın bir iştir.

Ticari ürünler açısından, [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) özellikle fotoğraf düzenleme alanında uzun süredir sektör standardı olmuştur; [Sketch](https://www.sketch.com/) gibi programlar ise simge ve kullanıcı arayüzü (UI) çalışmaları için daha uygundur. Ayrıca [Figma](https://www.figma.com/), [The Affinity Suite](https://www.affinity.studio/) ve [Canva](https://www.canva.com/) gibi popüler yeni oyuncular da vardır.

Yukarıdaki uygulamaların çoğunun keşfetmeye değer deneme sürümleri veya ücretsiz modları vardır. Ayrıca [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) ve [Paint.NET](https://paint.net/) gibi beğenilen bazı ücretsiz uygulamalar da mevcuttur.

### Sürüm kontrol araçları

**Sürüm kontrol (version control)** araçları, geliştiriciler tarafından sunuculardaki dosyaları yönetmek, bir proje üzerinde bir ekiple iş birliği yapmak, kod ve varlıkları paylaşmak ve düzenleme çakışmalarından kaçınmak için kullanılır. Şu anda [Git](https://git-scm.com/), [GitHub](https://github.com/) veya [GitLab](https://about.gitlab.com/) gibi barındırma (hosting) hizmetleriyle birlikte en popüler sürüm kontrol sistemidir.

Sürüm kontrol araçları web geliştirme ekipleri için vazgeçilmez olsa da şu anda onlar hakkında endişelenmenize gerek yok. Temel (Core) modüller serimizin sonlarına doğru [Sürüm kontrolü](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Version_control) konusuna ayrılmış bir modülümüz var.

### Site yayınlama uygulamaları

Bir web sitesini veya uygulamayı geliştirmeyi bitirdikten sonra (yerel bilgisayarınızda ya da belki bir geliştirme sunucusunda), kullanıcılarınızın onunla ilişkili web adresini yazıp web'de görüntüleyebilmesi için onu uzak bir web sunucusuna koymak isteyeceksiniz!

Bunu yapmanın çeşitli yolları vardır: barındırma satın alıp bir [SFTP uygulaması](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp) kullanmaktan, [GitHub Pages](https://pages.github.com/) veya [Netlify](https://www.netlify.com/) gibi bir hizmet kullanmaya, hatta [CodePen](https://codepen.io/) veya [JSFiddle](https://jsfiddle.net/) gibi bir şey kullanarak başkalarıyla paylaşmak için hızlı bir demo hazırlamaya kadar.

Böyle bir seçenek listesi göz korkutucu görünebilir, ama endişelenmeyin — şu anda web sitesi yayınlama hakkında hiçbir şey bilmenize gerek yok. Bu konuya kursun ilerleyen bölümlerinde pek çok kez bakacağız. Bu konuda çok yakında, [İlk web siteniz](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) modülümüzde pratik deneyim kazanacaksınız.

---

## 2. Web'de Gezinmek (Browsing the web)

**Kaynak:** [Browsing the web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)

Modülün bu noktasında, bilgisayarınızda veya erişebildiğiniz diğer cihazlarda birden fazla modern web tarayıcısı (browser) kurulu olmalıdır. Bu makale, tarayıcıları kullanma konusunda daha derine iniyor; bir web tarayıcısının nasıl çalıştığına, etkileşimde bulunacağınız gündelik şeylerden bazıları arasındaki farka ve nasıl bilgi arayacağınıza bakıyor.

> [!NOTE]
> Cihazlarınızla birlikte gelen varsayılan tarayıcılar dışında hiç tarayıcı kurmadıysanız, başka tarayıcılar da kurun. Daha fazla bilgi için [Modern web tarayıcıları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#modern_web_browsers) bölümüne bakın.

Her bilgi alanında olduğu gibi, web de pek çok jargon ve teknik terimle birlikte gelir. Endişelenmeyin: Hepsini en baştan üzerinize yığıp sizi bunaltmayacağız (merak ediyorsanız [sözlüğe](https://developer.mozilla.org/en-US/docs/Glossary) göz atabilirsiniz). Ancak bu ifadeleri sürekli duyacağınız için en başından anlamanız gereken bazı temel terimler vardır. Aşağıda bazı önemli terimleri tanıtıyoruz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Web tarayıcısı, web sitesi ve arama motoru arasındaki fark.</li>
          <li>Bir web tarayıcısının temel düzeyde nasıl çalıştığı.</li>
          <li>Bilgi aramak.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Web sayfası, web sitesi, web sunucusu ve arama motoru arasındaki fark

Web ile ilgili çeşitli kavramları açıklayarak başlayacağız: web sayfaları (web pages), web siteleri (websites), web sunucuları (web servers) ve arama motorları (search engines). Bu terimler web'e yeni başlayanlar tarafından sıklıkla karıştırılır veya yanlış kullanılır. Her birinin ne anlama geldiğini bildiğinizden emin olalım! Bazı tanımlarla başlayalım:

- **Web sayfası**: Bir web [tarayıcısında](https://developer.mozilla.org/en-US/docs/Glossary/browser) görüntülenebilen bir belge. Bunlara sıklıkla yalnızca "sayfa" da denir. Bu tür belgeler [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) dilinde yazılır (bu dile ileride daha ayrıntılı bakacağız).
- **Web sitesi**: Tek bir kaynakta bir araya getirilmiş ve birbirine bağlantılarla (links) bağlanmış web sayfalarından oluşan bir koleksiyon. Sıklıkla "site" olarak adlandırılır.
- **Web sunucusu**: İnternet üzerinde bir web sitesini barındıran (hosting) bir bilgisayar.
- **Web hizmeti (web service)**: Bir işlevi yerine getirmek veya veri sağlamak için İnternet üzerinden gelen isteklere yanıt veren bir yazılım. Bir web hizmeti genellikle bir web sunucusu tarafından desteklenir ve kullanıcıların etkileşimde bulunabileceği web sayfaları sunabilir. Pek çok web sitesi aynı zamanda bir web hizmetidir; ancak bazı web siteleri (MDN gibi) yalnızca statik içerikten oluşur. Web hizmetlerine örnek olarak görselleri yeniden boyutlandıran, hava durumu raporu sunan veya kullanıcı girişini yöneten bir şey verilebilir.
- **Arama motoru**: Google, Bing, Yahoo veya DuckDuckGo gibi, başka web sayfalarını bulmanıza yardımcı olan bir web hizmeti. Arama motorlarına normalde bir web tarayıcısı aracılığıyla (örneğin Firefox, Chrome vb. tarayıcıların adres çubuğunda (address bar) doğrudan arama motoru aramaları yapabilirsiniz) veya bir web sayfası aracılığıyla (örneğin [bing.com](https://www.bing.com/) veya [duckduckgo.com](https://duckduckgo.com/)) erişilir.

Bir benzetmeye bakalım — halk kütüphanesi. Bir kütüphaneyi ziyaret ettiğinizde genellikle şunları yaparsınız:

1. Bir arama dizini (katalog) bulur ve istediğiniz kitabın adını ararsınız.
2. Kitabın katalog numarasını not alırsınız.
3. Kitabın bulunduğu bölüme gider, doğru katalog numarasını bulur ve kitabı alırsınız.

Şimdi halk kütüphanesini web ile karşılaştıralım:

- Kütüphane bir web sunucusu gibidir. Birkaç bölümü vardır; bu da birden fazla web sitesini barındıran bir web sunucusuna benzer.
- Kütüphanedeki farklı bölümler (fen, matematik, tarih vb.) web siteleri gibidir. Her bölüm benzersiz bir web sitesi gibidir (iki bölüm aynı kitapları içermez).
- Her bölümdeki kitaplar web sayfaları gibidir. Bir web sitesinde birkaç web sayfası olabilir; örneğin Fen bölümünde (web sitesi) ısı, ses, termodinamik, insan biyolojisi vb. konularda kitaplar bulunur.
- Arama dizini, arama motoru gibidir. Her kitabın kütüphanede, katalog numarasıyla belirtilen kendine özgü bir konumu vardır (iki kitap aynı yerde tutulamaz).

Şimdi her bir terime biraz daha ayrıntılı bakmak için zaman ayıralım.

#### Web sayfası

Bir **web sayfası**, bir tarayıcı tarafından görüntülenebilen basit bir belgedir. Bir web sayfası, aşağıdakiler gibi çeşitli farklı türde kaynakları içine yerleştirebilir (embed):

- _Stil bilgisi_ — sayfanın görünümünü ve hissini kontrol eder.
- _Betikler (scripts)_ — sayfaya etkileşim katar.
- _Medya_ — görseller, sesler ve videolar.

> [!NOTE]
> Tarayıcılar [PDF](https://developer.mozilla.org/en-US/docs/Glossary/PDF) dosyaları gibi başka belgeleri ve görseller veya videolar gibi başka kaynakları da görüntüleyebilir; ancak **web sayfası** terimi özellikle HTML belgelerini ifade eder.

Tüm web sayfalarının her biri benzersiz bir konumda (web adresi, [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL) olarak da adlandırılır) bulunabilir. Bir sayfaya erişmek için tarayıcınızın adres çubuğuna adresini yazmanız yeterlidir:

![Tarayıcı adres çubuğundaki bir web sayfası adresi örneği](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/browsing_the_web/web-page.jpg)

Yukarıda söylediklerimizi aklınızda tutarak şimdi en sevdiğiniz web sitelerinden birini bir tarayıcıda yüklemeyi deneyin. Web adresini kendiniz mi yazdınız, yoksa bir arama motoru kullanarak mı buldunuz?

#### Web sitesi

Bir _web sitesi_, benzersiz bir [alan adını (domain name)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) paylaşan, birbirine bağlantılı web sayfalarından (ve bunlarla ilişkili kaynaklardan) oluşan bir koleksiyondur. Belirli bir web sitesinin her web sayfası, kullanıcının web sitesinin bir sayfasından diğerine geçmesini sağlayan açık bağlantılar sunar — bunlar çoğu zaman metnin tıklanabilir kısımları biçimindedir.

En sevdiğiniz web sitesini bir tarayıcıda yüklediğinizde, genellikle önce web sitesinin ana web sayfası, yani _ana sayfası_ (homepage) görüntülenir (günlük dilde "home" olarak da anılır):

![Tarayıcı adres çubuğundaki bir web sitesi alan adı örneği](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/browsing_the_web/web-site.jpg)

En sevdiğiniz web sitesindeki bazı farklı sayfalara bakmak için bazı menü öğelerine veya bağlantılara tıklamayı deneyin. Sayfalar arasında geçiş yaptıkça görüntülenen web adresinin nasıl değiştiğine dikkat edin.

> [!NOTE]
> Bir [_tek sayfalık uygulama (single-page app)_](https://developer.mozilla.org/en-US/docs/Glossary/SPA) da mümkündür: gerektiğinde yeni içerikle dinamik olarak güncellenen tek bir web sayfasından oluşan bir web sitesi. Bu durumda, farklı sayfalar görüntülenirken web adresi değişmeyebilir.

#### Web sunucusu

Bir _web sunucusu_, bir veya daha fazla _web sitesini_ barındıran bir bilgisayardır. "Barındırmak", tüm _web sayfalarının_ ve bunlarla ilişkili dosyaların o bilgisayarda bulunması anlamına gelir. _Web sunucusu_, bir kullanıcı barındırdığı bir web sayfasını yüklemeye çalıştığında, o web sayfasının dosyalarını kullanıcının tarayıcısına gönderir.

_Web sitelerini_ ve _web sunucularını_ birbirine karıştırmayın. Örneğin birinin "Web sitem yanıt vermiyor" dediğini duyarsanız, bu muhtemelen _web sunucusunun_ yanıt vermediği ve bu nedenle _web sitesinin_ kullanılamadığı anlamına gelir.

Daha da önemlisi, bir web sunucusu birden fazla web sitesini barındırabildiğinden, _web sunucusu_ terimi artık bir web sitesini belirtmek için kullanılmaz, çünkü bu karışıklığa yol açabilir. Biri "Web sunucum yanıt vermiyor" diyorsa, bu, web sunucusunda barındırılan birden fazla web sitesinin veya uygulamanın kullanılamadığı anlamına gelebilir.

#### Arama motoru

İnsanların arama motorlarını web siteleriyle karıştırması yaygındır. Arama motoru, kullanıcıların ilgilendikleri web sayfalarını ve ayrıca görseller, videolar veya haber makaleleri gibi belirli içerik türlerini bulmalarına yardımcı olan özel bir web hizmeti türüdür.

Arama motorlarının hepsinin, altta yatan web hizmetine erişmek için kullanılabilecek kendi web siteleri olma eğilimindedir. Pek çok arama motoru vardır: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) ve daha pek çoğu. Bazıları geneldir, bazıları ise belirli konular etrafında uzmanlaşmıştır.

Web'e yeni başlayanların çoğu arama motorlarını ve tarayıcıları birbirine karıştırır. Bunu netleştirelim:

- Bir _tarayıcı_, web sayfalarını getiren ve görüntüleyen bir yazılımdır.
- Bir _arama motoru_, insanların diğer web sitelerinde bulunan web sayfalarını bulmasına yardımcı olan bir web hizmetidir (ve genellikle bir web sitesidir).

Karışıklık şundan kaynaklanır: Biri bir tarayıcıyı ilk kez başlattığında, tarayıcı çoğu zaman bir arama motorunun web sitesi ana sayfasını veya o arama motorunu kullanarak bir terimi aramalarına olanak tanıyan bir arama kutusunu görüntüler. Çoğu tarayıcı ayrıca kullanıcılarının arama terimlerini doğrudan tarayıcı adres çubuğuna yazarak bir arama motorunu kullanmasına da izin verir.

Bunların hepsi mantıklıdır, çünkü insanların bir tarayıcıyla ilk yapmak istediği şey genellikle görüntülenecek bir web sayfası bulmaktır. Yazılımı (tarayıcı) hizmetle (arama motoru) karıştırmayın.

İşte varsayılan başlangıç sayfası olarak bir Google arama kutusu gösteren bir Firefox örneği:

![Varsayılan olarak özel bir Google sayfası görüntüleyen Firefox Nightly örneği](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/browsing_the_web/search-engine.jpg)

İlgilendiğiniz bir konu hakkında bilgi bulmak için bir arama motorunu şu yollarla kullanmayı deneyin:

1. Bir arama motorunun ana sayfasına gidip bir arama terimi girerek.
2. Tarayıcının adres çubuğuna bir arama terimi girerek.

### Web nasıl çalışır: temel bilgiler

Dünyanın pek çok yerinde web, gündelik hayatımız için çatal bıçak, bisiklet ve araba ya da diş fırçası kadar vazgeçilmez bir araç haline gelmiştir. Bu size gerçekçi gelmiyorsa, her gün ne sıklıkla bir web sitesi veya cep telefonu uygulaması kullandığınızı bir düşünün! İçeriğe veya hizmetlere erişmek için bir web tarayıcısına web adresi yazmıyor olsanız bile, kullandığınız uygulamanın size sunacağı verileri almak için perde arkasında büyük olasılıkla web teknolojisini kullanıyor olması muhtemeldir.

Web'e eriştiğinizde, ilk etkileşiminiz (örneğin bir tarayıcıya bir web adresi (URL) yazıp <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basmak) ile eyleminizin sonucunun size sunulması (örneğin web sitesinin web tarayıcınızda görünmesi) arasında epey çok şey olur:

1. Web tarayıcısı, erişmek istediğiniz kaynağı (örneğin bir web sayfası, bazı veriler ya da bir görsel veya video) depolandığı web sunucusundan ister. Bu tür istekler (ve bunların sonucunda gelen yanıtlar), ne olması gerektiğini tanımlamak için fiillerden (örneğin **GET**) oluşan bir dil kullanan [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP) (Hypertext Transfer Protocol – Köprü Metni Aktarım Protokolü) adlı bir teknoloji kullanılarak yapılır.
2. İstek başarılı olursa, web sunucusu istenen kaynağı içeren bir HTTP yanıtını web tarayıcısına geri gönderir.
3. Bazı durumlarda, istenen kaynak daha sonra daha fazla HTTP isteği başlatır ve bu da daha fazla yanıtla sonuçlanır. Örneğin:
   1. Bir web sitesi yüklendiğinde, başlangıçta sitenin ana sayfasının ana index HTML dosyası istenir.
   2. Bu dosya tarayıcı tarafından alındığında, tarayıcı onu ayrıştırmaya (parse) başlar ve muhtemelen daha fazla istek yapılmasını gerektiren talimatlar bulur. Yukarıda tartışıldığı gibi, bunlar görseller, stil bilgileri, betikler vb. gibi sayfaya yerleştirilecek dosyalar için olabilir.
4. Tüm kaynaklar istendiğinde, web tarayıcısı sonucu kullanıcıya göstermeden önce bunları gerektiği şekilde ayrıştırır ve işler (render).

Web'in nasıl çalıştığına dair bu açıklama oldukça basitleştirilmiştir, ancak bu noktada gerçekten bilmeniz gereken her şey budur. Web sayfalarının bir web tarayıcısı tarafından nasıl istendiğine ve işlendiğine dair daha ayrıntılı bir anlatımı, biraz daha ileride [Web standartları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards) modülümüzde bulacaksınız.

### Bilgi aramak

Bir web geliştiricisi olarak, hatırlayamadığınız sözdiziminden belirli sorunlara yönelik çözümlere kadar bilgi aramaya çok zaman harcayacaksınız. Bu nedenle web'de etkili bir şekilde arama yapmayı öğrenmek iyi bir fikirdir.

Öğrendiğiniz konuda uzmanlaşmış bir web sitesi biliyorsanız, oradan başlamak çoğu zaman iyi bir fikirdir.

Örneğin, belirli bir web teknolojisi özelliği hakkında genel bilgi arıyorsanız, özelliğin adını MDN arama kutusuna yazmalısınız. Örneğin arama kutusuna `box model`, `fetch()` veya `video element` yazmayı deneyin ve neler çıktığını görün. İhtiyacınız olan bilgiyi bulamazsanız, aramanızı genişletin — arama teriminizi bir arama motorunda deneyin.

`how to print out the fibonacci sequence with JavaScript` (JavaScript ile fibonacci dizisi nasıl yazdırılır) veya `how to calculate whether a number is a prime number with JavaScript` (JavaScript ile bir sayının asal sayı olup olmadığı nasıl hesaplanır) gibi belirli bir soruna çözüm arıyorsanız, programlama sorunlarını yanıtlamaya adanmış bir topluluk olan [Stack Overflow](https://stackoverflow.com/) gibi bir web sitesinde arama yapmak iyi bir fikirdir. Yine, belirli bir site size yararlı bir yanıt vermezse genel bir arama motoru kullanmayı deneyin.

Devam etmeden önce, öğrenmek istediğiniz kendi konularınızdan bazılarını aramayı deneyin. Neyin en iyi sonuç verdiğini görmek için daha belirli ve daha az belirli aramalar ile farklı ilgili terimler kullanmayı deneyin. Denenecek başka şeyler için [Arama ipuçlarımıza](#search_tips) bakın.

#### Yapay zekâ kullanmak

Yapay zekâ (AI) tarafından oluşturulan arama sonuçları, bilgi edinmenin çok popüler bir yoludur. Temelde süper güçlere sahip bir arama sağlarlar: Sonuçları tek, kolayca sindirilebilir bir yanıtta derlemeden önce arka planda çok sayıda arama yaparlar. Yaygın seçenekler [ChatGPT](https://chatgpt.com/), [Google Gemini](https://gemini.google.com/app) ve [Microsoft Copilot](https://copilot.microsoft.com/)'tur; bunlara ya doğrudan sohbet biçiminde ya da yapay zekâ destekli uygulama içi yardım veya otomasyon sistemleri aracılığıyla erişilir.

Kod yazmayı öğrenirken yapay zekâ sohbet istemleri (prompts) çeşitli şekillerde faydalı olabilir:

- Yukarıdaki örnekler gibi geleneksel aramalar yapmak.
- Bir kod bloğundaki hataları (bugs) bulmak. Kodunuz çalışmadığı için hayal kırıklığına uğruyorsanız, kodunuzu bir yapay zekâ sohbet istemine, önüne `Where is the mistake in this code?` (Bu koddaki hata nerede?) gibi bir soru ekleyerek yapıştırabilirsiniz.
- Belirli bir kod bloğunun optimize edilmiş bir sürümünü oluşturmak. Bu, çalışan bir kod bloğu yazdığınızda ancak bunun nasıl daha verimli ya da daha fazla kullanım durumunu çözen daha sağlam bir şekilde yapılabileceğini öğrenmek istediğinizde yararlı olabilir.
- Bir şeyin nasıl yapılacağı konusunda tavsiye vermek. Örneğin, bir kod bloğundaki hatanın yalnızca nerede olduğunu bilmek değil, onu ayıklamak (debug) için hangi stratejiyi kullanmanız gerektiği konusunda tavsiye almak istiyorsanız.

Birkaç yapay zekâ aracını kullanarak bazı aramalar yapmayı deneyin.

#### Uyarıcı bir hikâye

Yapay zekâ o kadar çok şey yapabilir ki neden kod yazmayı öğrenmeniz gerektiğini merak etmeye başlayabilirsiniz.

Ama durun! Şu nokta önemlidir: **Neyi yapmaya çalıştığınızı üst düzeyde, kodun ne yaptığını ve her bir kod parçasının nerede kullanılması gerektiğini yine de anlamanız gerekir**. Anlamazsanız, gerçek dünyadaki sorunları çözmeye çalışırken pek işe yaramazsınız. Bu, yine de kod yazmayı öğrenmeniz gerektiği anlamına gelir. Yapay zekâ, yanıtları daha hızlı bulmanıza yardımcı olan gerçekten kullanışlı bir araç olabilir; ancak size sorulan her soruyu bir yapay zekâ istemine yazarsanız, hiçbir şeyin nasıl çalıştığını anlamazsınız.

Buna ek olarak:

- Yapay zekâ araçları yanıtlarını kendinden emin, otoriter bir ses tonuyla sunar, ancak bu yanıtlar çoğu zaman yanıltıcı ya da düpedüz yanlış olabilir. Yaptıkları hataların bazıları çok ince olabilir. Kendilerine ait doğuştan bir zekâları yoktur — temelde gelişmiş örüntü eşleştirme araçlarıdır. Yapay zekâ araçları yanıtlarını dışarıdaki başka kaynaklardan derler; bu yüzden doğru bilgilerin yanı sıra yanlış bilgileri de toplayıp yutarlar. İki doğru kaynak bile birleştirilerek yanlış bir yanıt oluşturulabilir.
- Daha yeni bilgiler mevcut olmayabilir ya da yanıtlar daha eski ve daha yaygın belgelere doğru çarpık olabilir; bu nedenle "JS'de X nasıl yapılır" sorusu size güncelliğini yitirmiş yönlendirmeler verebilir.

Sonuç olarak, size verdikleri yanıtları kontrol etmeye dikkat etmeli ve her şeye sorgulamadan güvenmemelisiniz.

**Öğrenirken, ister yapay zekâ ister geleneksel bir arama motoru kullanıyor olun, bir yanıt aramadan önce sorunu kendiniz çözmeye çalışmaya zaman ayırın. Bu sizi daha iyi bir geliştirici yapacaktır.**

#### Arama ipuçları

- Yukarıdaki örneklerde gösterildiği gibi, kullandığınız dili arama terimine eklemelisiniz. Yalnızca `how to print out the fibonacci sequence` yazsaydınız, büyük olasılıkla Python, C++, Java, Ruby veya diğer dillerde birkaç çözümle karşılaşırdınız — JavaScript öğrenmeye çalışırken pek de yararlı değil!
- Yararlı bir yanıt bulduğunuzda, daha sonra yeniden bulabilmek için onu yer imlerine (bookmark) ekleyin veya bir yere bir kopyasını alın. Aynı sorunla kaç kez karşılaştığınıza şaşıracaksınız.
- Kodunuz belirli bir hata mesajı döndürüyorsa, hatayı bir arama motoruna veya yapay zekâ istemine girmeyi deneyin. Muhtemelen başka insanlar geçmişte aynı hatayla uğraşmış ve çözümlerini herkese açık bir yerde kaydetmiştir.
- Mümkünse, MDN ve [Stack Overflow](https://stackoverflow.com/) gibi önerilen sitelere bağlı kalın.
- Arama motorlarında, yalnızca düz bir arama terimi yazmaktan daha iyi sonuçlar verecek pek çok gelişmiş arama tekniği kullanabilirsiniz. `ant fish cheese` gibi düz bir arama terimi yazmak, bu kelimelerin herhangi bir kombinasyonunu içeren sonuçları döndürür. Ancak çoğu arama motoru aşağıdaki sözdizimi kalıplarının çeşitlemelerini destekler:
  - `"ant fish cheese"` yazmak (tırnak işaretleriyle birlikte), yalnızca bu tam ifadeyi içeren sonuçları döndürür.
  - `ant cheese -fish`, `ant` ve/veya `cheese` içeren ancak `fish` içermeyen sonuçları döndürür.
  - `ant OR cheese`, yalnızca terimlerden birini veya diğerini içeren, ikisini birden içermeyen sonuçları döndürür. Testlerimize göre bu yalnızca Google'da etkili bir şekilde çalışıyor gibi görünüyordu.
  - `intitle:cheese`, yalnızca sayfanın ana başlığında "cheese" geçen sonuçları döndürür.

  > [!NOTE]
  > Çeşitli arama motorlarında kullanabileceğiniz başka pek çok teknik vardır. Başka hangilerini bulabileceğinizi görmeye çalışın — bazı yararlı kaynaklar şunlardır: [Google aramalarını daraltma](https://support.google.com/websearch/answer/2466433?hl=en), [DuckDuckGo Search'te gelişmiş sözdizimi nasıl kullanılır](https://duckduckgo.com/duckduckgo-help-pages/results/syntax) ve [Microsoft: Gelişmiş arama seçenekleri](https://support.microsoft.com/en-us/bing/advanced-search-options).

---

## 3. Kod Düzenleyiciler (Code editors)

**Kaynak:** [Code editors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors)

Daha önce size bir kod düzenleyici (code editor) kurmanızı söylemiştik, çünkü bu öğrenme yolunu tamamlamak için buna ihtiyacınız olacak. Bu makalede kod düzenleyicileri daha ayrıntılı olarak inceliyor ve sizin için neler yapabilecekleri hakkında bir fikir veriyoruz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Hangi kod düzenleyicilerin mevcut olduğu ve hangisinin amaçlarınıza uygun olduğu.</li>
          <li>Temel bir kod düzenleyicinin neler yapabildiği.</li>
          <li>Kod düzenleyici eklentilerinin (extension) neler yapabildiği ve bir eklentinin nasıl kurulacağı.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Hangi kod düzenleyiciler mevcut?

Kod yazmaya başlamadan önce, Microsoft Word gibi bir programda metin belgeleri üzerinde çalışma deneyiminiz olmuş olabilir. Kodla da bu aynı programlarda çalışıp çalışamayacağınızı merak ediyor olabilirsiniz. Ne yazık ki cevap "pek sayılmaz":

- Microsoft Word gibi programlar **ikili dosya (binary file)** düzenleyicileridir; bu programların dosyaları, yalnızca o programların anlayabildiği metin dışı bir biçim içerir. Web sitesi kaynak kodu ise düz metin olarak saklanır.
- Word düz metin dosyalarını _açıp düzenleyebilir_, ancak bunu pek iyi yapmaz. Kodla çalışmak için tasarlanmış bir özellik setine sahip değildir — mektup ve rapor gibi belgeler yazmak içindir. Düz metni temiz bir şekilde işlemek ve çıktı olarak vermek, ayrıca kodla çalışmak için tasarlanmış bir programa ihtiyacınız var.

Büyük olasılıkla bilgisayarınızda zaten bir düz metin düzenleyici vardır. Varsayılan olarak Windows [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) ile, macOS ise [TextEdit](https://en.wikipedia.org/wiki/TextEdit) ile birlikte gelir. Linux dağıtımları farklılık gösterir; Ubuntu 22.04 LTS sürümü varsayılan olarak [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor) ile gelir. İşletim sisteminin varsayılan düz metin düzenleyicileri iş görebilir, ancak bunların özellik seti de sınırlıdır.

[Visual Studio Code](https://code.visualstudio.com/) (çoklu platform, ücretsiz), [Sublime Text](https://www.sublimetext.com/) (çoklu platform, ücretli) veya [Notepad++](https://notepad-plus-plus.org/) (Windows, ücretsiz) gibi tam donanımlı bir kod düzenleyiciyle çok daha iyi durumda olursunuz.

Çoğunlukla kullandığımız düzenleyici olduğu için Visual Studio Code'u (VS Code) öneririz. VS Code (veya başka bir kod düzenleyici) henüz kurulu değilse, [devam etmeden önce kurmalısınız](https://code.visualstudio.com/).

> [!NOTE]
> [NetBeans](https://netbeans.apache.org/front/main/index.html) (çoklu platform, ücretsiz) ve [WebStorm](https://www.jetbrains.com/webstorm/) (çoklu platform, ücretli) gibi Tümleşik Geliştirme Ortamları (Integrated Development Environments, IDE'ler) basit kod düzenleyicilerden daha fazla özelliğe sahiptir, ancak öğrenme yolculuğunuzun bu aşamasında ihtiyacınız olandan daha karmaşık olma eğilimindedir.

### Temel kod düzenleyici işlevleri

Bu bölümde, kod düzenleyicilerde bulacağınız en önemli işlevlerden bazılarına bakacak ve bunların kodlama çalışmalarınızda size nasıl yardımcı olabileceğini açıklayacağız.

> [!NOTE]
> Aşağıdaki bölümler, bir kod düzenleyicinin yapabileceklerinin yalnızca yüzeyine değinmektedir. Daha eksiksiz bir özellik listesi için [Visual Studio Code belgelerine](https://code.visualstudio.com/docs) bakın (farklı bir düzenleyici kullanıyorsanız, seçtiğiniz kod düzenleyicinin belgelerini web'de arayın).

> [!NOTE]
> Yalnızca klavye kullanan biriyseniz, VS Code'un güçlü bir klavye kısayolları setine sahip olduğunu bilmelisiniz. VS Code'un [Varsayılan klavye kısayolları başvurusuna (Default keyboard shortcuts reference)](https://code.visualstudio.com/docs/reference/default-keybindings) bakın.

#### Dosyaları açma ve düzenleme

Bu bariz bir nokta gibi görünebilir, ancak bir kod düzenleyici kurmak, geliştirme çalışmalarınız boyunca kullanmak isteyebileceğiniz tüm kod dosyalarını açacak tek bir uygulamaya sahip olmanızı sağladığı için faydalıdır. Bilgisayarınızda bir dosyaya çift tıklayıp onun rastgele, alakasız bir uygulamada açılmasından ya da işletim sisteminizin o dosyayı tanımadığını söylemesinden daha sinir bozucu bir şey yoktur.

Bunların hepsi VS Code kurulurken otomatik olarak gerçekleşmelidir, ancak belirli dosya türleriyle hâlâ sorun yaşıyorsanız, bunları elle o uygulama üzerinden açılacak şekilde ayarlayabilirsiniz. Bu işlem işletim sisteminize göre değişebilir; bu yüzden nasıl yapıldığını öğrenmek için en sevdiğiniz arama motoruna (search engine) gidin ve "choose what application opens a file type &lt;OS-adı-ve-numarası>" ("bir dosya türünü hangi uygulamanın açacağını seçme &lt;işletim-sistemi-adı-ve-numarası>") şeklinde arama yapın — örneğin Windows 11 kullanıyorsanız "choose what application opens a file type windows 11".

Dosya ve klasörleri açma ve düzenleme hakkında çok daha fazla bilgiyi bir sonraki makalemizde bulabilirsiniz.

#### Sözdizimi vurgulama

VS Code gibi kod düzenleyiciler sözdizimi vurgulama (syntax highlighting) sağlar — yani tanınan kod yapılarının farklı bölümleri farklı renklerde gösterilir. Bu, kodun tamamını tek bir renkte göstermeye kıyasla okunmasını çok daha kolay hâle getirir. Örnek olarak aşağıdaki JavaScript fonksiyonunu (function) kullanalım:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

Şimdilik bu kodun ne yaptığını anlamanız gerekmiyor, ancak sözdizimi vurgulamanın nasıl göründüğünü yukarıda zaten görebilirsiniz. Evet, MDN'de de sözdizimi vurgulama sağlıyoruz!

VS Code'da bir alıştırma deneyelim:

1. Yukarıdaki kod örneğini panonuza kopyalayın (MDN kod bloklarının sağ üst köşesinde, bunu yapmak için basabileceğiniz bir kopyalama simgesi vardır).
2. VS Code'u açın ve _File_ > _New File..._ ("Dosya > Yeni Dosya...") seçeneğini seçerek yeni bir dosya oluşturun.
3. Yeni dosyanın içinde _Select a language_ ("Bir dil seçin") metnine tıklayın, ardından açılan açılır menüden _JavaScript_'i seçin.
4. VS Code'un JavaScript sözdizimi vurgulamasının nasıl göründüğünü görmek için kodu yeni dosyaya yapıştırın.

VS Code başka sözdizimi özellikleri de sağlar. Örneğin:

- `function` anahtar sözcüğünden kapanış süslü parantezine (`}`) kadar aşağı doğru uzanan ince dikey bir çizgi göreceksiniz — bu çizgiler koddaki farklı [girinti (indentation)](https://en.wikipedia.org/wiki/Indentation_style) düzeylerini işaretlemek için kullanılır ve blokların nerede başlayıp nerede bittiğini belirlemeyi kolaylaştırır.
- Ayrıca yanıp sönen metin imlecini açılış veya kapanış süslü parantezinin (`{` veya `}`) üzerine getirmeyi deneyin — ikisinin de vurgulandığını göreceksiniz. Bu da blokların başlangıcını ve sonunu belirlemeye yardımcı olur ve çok sayıda iç içe blok içeren daha karmaşık bir yapınız olduğunda eksik bir karakterin nerede olduğunu bulmaya çalışırken kullanışlıdır. Bu vurgulama, normal parantezler (`(` ve `)`) ve köşeli parantezler (`[` ve `]`) gibi diğer sınırlayıcılarla da çalışır.

#### Kod tamamlama/öneri

Bir kod düzenleyiciye kod yazarken, düzenleyici çoğu zaman bir sonraki adımda ne yazmanız gerektiğini önerebilir ve sizin yerinize bazı kalıp kodları (boilerplate) doldurabilir (kalıp kod, her zaman aynı olacak standart kod anlamına gelir).

Bunu şimdi VS Code'da deneyin:

1. Önceki bölümde oluşturduğunuz JavaScript dosyasına geri dönün.
2. Dosyanın en altına gidin ve yeni bir satırda olduğunuzdan emin olmak için birkaç kez <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basın.
3. "function" yazmaya başlayın — metninizin sağında bir liste hâlinde seçenekler görünmelidir.
4. Sağında _Function Statement_ ("Fonksiyon Deyimi") yazan _function_ seçeneğini seçin. Sizin için aşağıdaki kodu dolduracaktır:

   ```js-nolint
   function name(params) {

   }
   ```

5. Fonksiyonun içine, iki süslü parantez arasındaki boş satıra tıklayın. "document" yazmaya başlayın; size yine bir seçenekler listesi sunulacaktır. İlkini seçin. Bu, [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) nesnesine bir başvurudur (yine, şimdilik bunun ne anlama geldiği konusunda endişelenmeyin).
6. `document`'in hemen ardından bir nokta (`.`) yazın — yine bir seçenekler listesi alacaksınız; bu kez liste `document` nesnesinde kullanılabilen tüm özellikleri (property) ve metotları içerir!

Şimdilik bu kadarı yeterli. Devam edelim.

#### Hata ayıklama yardımı

Kod düzenleyiciler kodunuzdaki tüm sorunları otomatik olarak düzeltemez, ancak yazım hatalarını ve diğer basit hataları bulmanıza kesinlikle yardımcı olabilirler. Birkaç örneğe bakalım.

1. JavaScript dosyanıza geri dönün ve şu anda içinde bulunan tüm kodu silin. Yerine aşağıdakini koyun:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. Yukarıdaki kod listesinin sağındaki küçük çarpı simgesi, MDN'nin hatalı bir kod örneğini belirtme yoludur ve bu tamamen yerindedir — yukarıdaki kodda üç hata var! Hataları nasıl vurguladığını fark edip edemeyeceğinizi görmek için VS Code'un vurgulamasına bir göz atın, ardından birlikte üzerinden geçip bunları düzelteceğiz.
3. İlk hata, aynı değişkene (variable) atıfta bulunmak için ilk satırda `name`, ikinci satırda ise `Name` kullanmış olmamızdır. Bu bir sorundur, çünkü JavaScript büyük/küçük harfe duyarlıdır ve bu nedenle bunları iki farklı ad olarak kabul eder. VS Code bunu iki farklı şekilde vurgulamıştır — değerin (value) bildirildiğini ancak hiç kullanılmadığını belirtmek için `name`'i koyu griye boyayarak (bu genellikle bir yerde yazım hatası yaptığınızın iyi bir göstergesidir) ve kodu nasıl iyileştirebileceğinize dair bir önerisi olduğunu belirtmek için `Name`'in altına üç nokta koyarak (bu durumda `name` yazmak isteyip istemediğinizi sorarak). Bu hatayı düzeltmek için `Name`'i `name` olarak değiştirin.
   > [!NOTE]
   > Daha fazla bilgi almak için fare imleciyle belirtilen vurguların her birinin üzerine gelebilirsiniz.
4. İkinci hata altıncı satırdadır; burada `"Chris` yazıyoruz. JavaScript'te bir metin parçası (**dize (string)** olarak bilinir) iki tırnak işareti arasına alınmalıdır, ancak ikincisi eksiktir. VS Code bunu, hatanın ilk fark edildiği yerdeki metnin altını (bu, hatanın gerçekte bulunduğu yer olmayabilir) Microsoft Word'de yazım hatalarını vurgulamak için kullanılana çok benzeyen dalgalı kırmızı bir çizgiyle çizerek vurgulamıştır. Bunu düzeltmek için `"Chris`'i `"Chris"` olarak güncelleyin.
5. Son satırda, önceki hatayı düzelttikten sonra bile sonuna yakın küçük bir dalgalı kırmızı alt çizgi kalır. Bunun nedeni üçüncü hatadır — JavaScript'te bir açılış parantezinin her zaman ona eşlik eden bir kapanış parantezine ihtiyacı vardır. Bunu `(helloChris`'i `(helloChris)` olarak güncelleyerek düzeltin.

#### Arama ve değiştirme

Kayda değer her kod düzenleyicinin sağlam bir arama ve değiştirme işlevi vardır. Bu, örneğin belirli bir fonksiyonda bir hata oluştuğunu fark ettiğinizde ve onu kodunuzda bulmak istediğinizde ya da bir değişkenin adını değiştirmeye karar verdiğinizde ve ona başvuran tüm yerlerde değiştirildiğinden emin olmanız gerektiğinde kullanışlıdır.

Daha önce bilgisayar kullandıysanız arama ve değiştirme kavramı size oldukça tanıdık gelecektir, ancak eksiksiz olması için hızlıca inceleyelim:

1. VS Code'da JavaScript dosyanıza geri dönün ve menüden _Edit_ > _Find_ ("Düzenle > Bul") seçeneğini seçerek bul ve değiştir panelini bulma modunda açın.
2. _Find_ ("Bul") kutusuna `createGreeting` yazın — her iki örneğin de vurgulandığını göreceksiniz ve paneldeki yukarı ve aşağı oklarla bunlar arasında geçiş yapabilirsiniz. O anda etkin olarak vurgulanan örnek daha parlak bir vurguya sahiptir.
3. Şimdi menüden _Edit_ > _Replace_ ("Düzenle > Değiştir") seçeneğini seçerek veya _Find_ kutusunun solundaki oka tıklayarak bul ve değiştir panelini değiştirme modunda açın.
4. Artık görünür olması gereken _Replace_ ("Değiştir") kutusuna `sayHello` yazın.
5. Artık _Replace_ kutusunun sağındaki iki düğmeyi kullanarak koddaki tüm `createGreeting` örneklerini `sayHello` ile değiştirebilirsiniz. Soldaki düğme, bir tıklamayla arama dizesinin bir sonraki örneğine gider ve ikinci bir tıklamayla onu değiştirir. Sağdaki düğme ise tek bir tıklamayla tüm örnekleri değiştirir.

VS Code'un birçok güçlü bulma ve değiştirme özelliği vardır — bkz. [Find and replace (Bul ve değiştir)](https://code.visualstudio.com/docs/editing/codebasics#_find-and-replace).

### Kod düzenleyicinizi eklentilerle geliştirme

Çoğu kod düzenleyicide, programa varsayılan olarak bulunmayan işlevler eklemenize olanak tanıyan bir eklenti (extension) veya eklenti (plugin) sistemi bulunur. Bunlar çeşitli görevleri yerine getirebilir, örneğin:

- Varsayılan olarak desteklenmeyen diller için kod tamamlama, lint denetimi (linting) veya hata ayıklama (debugging) işlevlerini etkinleştirmek ya da desteklenen diller için ek işlevler sağlamak.
- Sürüm kontrol araçları veya yerel test sunucuları gibi diğer araçların işlevlerini doğrudan kod düzenleyicinin içinden kullanmanıza olanak tanımak.
- Ek kullanıcı arayüzü veya kod vurgulama temaları/renk şemaları sağlamak.
- Gereksinimleri karşılamak için kod parçacıkları (code snippet) önermek. Bunlar statik şablonlardan veya yapay zekâ (AI) araçları aracılığıyla oluşturulabilir. Kod parçacıkları oluşturmak için yapay zekâ kullanmak, arama sonuçları oluşturmak için onu kullanmanın sahip olduğu avantaj ve dikkat edilmesi gereken noktaların birçoğuna sahiptir (daha fazla bilgi için [Bilgi arama > Yapay zekâ kullanma (Searching for information > Using AI)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) bölümüne bakın).

#### VS Code eklentilerini keşfetme

VS Code eklentileri, VS Code'daki Extensions Marketplace ("Eklenti Pazaryeri") paneli üzerinden yönetilir; bu panele _View_ > _Extensions_ ("Görünüm > Eklentiler") menüsünden erişilir. Şimdi onu inceleyelim.

1. Extensions Marketplace panelini açın.
2. Panelin üst kısmındaki _Search..._ ("Ara...") kutusuna, hangi JavaScript ile ilgili eklentilerin mevcut olduğunu görmek için "JavaScript" yazın. Ne tür işler yaptıklarını görmek için görünen arama sonuçlarından birkaçına tıklamayı deneyin. Şimdilik hiçbirini kurmayın.
3. Bunun yerine, anlaşılması kolay olan ve bu modül setinde üzerinde çalışacağınız hemen hemen her kod dosyası için faydalı olacak bir eklenti kuralım. _Search..._ kutusuna "Prettier" yazın ve _Prettier - code formatter_ sonucuna tıklayın. [Prettier](https://prettier.io/) eklentisi kurulduğunda, her dosya kaydettiğinizde kodunuzu biçimlendirmek için kullanılabilir ve sonuç olarak kodunuzun okunmasını çok daha kolay hâle getirir.
4. _Extension_ ("Eklenti") sekmesindeki _Install_ ("Kur") düğmesine tıklayın. Kurulum bittiğinde sekmeyi kapatın.
5. Prettier'ın çalışması için birkaç ayarı güncellemeniz gerekir. VS Code Settings ("Ayarlar") sekmesini açın (macOS'ta _Code_ > _Settings..._ > _Settings_, Windows'ta _File_ > _Preferences_ > _Settings_ ("Dosya > Tercihler > Ayarlar")).
6. Üstteki _Search settings_ ("Ayarlarda ara") kutusuna, ayarlar listesini filtrelemek ve yalnızca "formatter" içerenleri göstermek için "formatter" yazın.
7. _Editor: Default Formatter_ ("Düzenleyici: Varsayılan Biçimlendirici") seçeneğini bulun ve ilgili açılır menüden _Prettier - Code formatter_ seçeneğini seçin.
8. _Editor: Format On Save_ ("Düzenleyici: Kaydederken Biçimlendir") seçeneğini bulun ve onay kutusuna tıklayarak etkinleştirin.
9. _Settings_ sekmesini kapatın.

Kurulumun hepsi bu kadar; şimdi Prettier'ı iş başında görelim.

1. JavaScript dosyanızın sekmesine geri dönün ve dosyayı kaydedin (_File_ > _Save_ ("Dosya > Kaydet")). Prettier'ın çalışması için dosyanın kaydedilmesi gerekir. Dosyaya `test.js` adını verin. Nereye kaydettiğiniz pek önemli değil.
2. Mevcut içeriği aşağıdaki kodla değiştirin:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Dosyayı tekrar kaydedin; bu noktada Prettier kodu şu şekilde güzelce yeniden biçimlendirmelidir:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

---

## 4. Dosyalarla Çalışmak (Dealing with files)

**Kaynak:** [Dealing with files](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)

Bir web sitesi (website) birçok dosyadan oluşur: metin içeriği, kod, stil sayfaları, medya içeriği vb. Bir web sitesi oluştururken bu dosyaları yerel bilgisayarınızda mantıklı bir yapı içinde bir araya getirmeniz, birbirleriyle iletişim kurabildiklerinden emin olmanız ve sonunda dünyanın görmesi için bir sunucuya yerleştirmeden önce tüm içeriğinizin doğru göründüğünü sağlamanız gerekir. Bu makale, bilgisayarınızın dosya gezgini kullanıcı arayüzünü (user interface, UI) nasıl kullanacağınızı ve bir web sitesi için mantıklı bir dosya yapısını nasıl kuracağınızı açıklar.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine (operating system, OS) ve bir web sitesi oluşturmak için kullanacağınız temel yazılımlara temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Dosya ve klasörler üzerinde işlem yapmak.</li>
          <li>Adlandırmada en iyi uygulamalar.</li>
          <li>Standart web sitesi klasör yapısı.</li>
          <li>Dosya yollarını kullanmak</li>
          <li>Dosya uzantılarıyla çalışmak.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Dosya ve klasörler üzerinde işlem yapmak

Bilgisayarınızda bulunan dosya (file) ve klasörleri (folder) oluşturmanın ve düzenlemenin birçok farklı yolu vardır. Bunu, bilgisayarınızın komut satırı (command line)/terminali üzerinden bir dizi metin komutu kullanarak yapabilirsiniz; bu konuda bir sonraki makalede daha fazlasını öğreneceksiniz. Ancak birçok kişi dosya sistemlerini görsel olarak öğrenmeye başlamayı daha kolay bulur; burada ele alacağımız konu da budur. Modern işletim sistemleri, dosya ve klasörler üzerinde gerektiği gibi işlem yapmak için kullanabileceğiniz sağlam bir dosya sistemi kullanıcı arayüzüne sahiptir.

Örneğin macOS'ta Finder programı bulunur:

![Tipik bir Ana klasörün (Home) içeriğini gösteren macOS Finder uygulaması](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/dealing_with_files/finder.png)

Windows'ta ise File Explorer bulunur:

![Tipik bir Ana klasörün (Home) içeriğini gösteren Windows File Explorer uygulaması](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/dealing_with_files/file-explorer.png)

> [!NOTE]
> Bu kılavuz Windows 11 ve macOS 15 kullanılarak yazılmıştır. Farklı bir işletim sistemi sürümü ya da tamamen farklı bir işletim sistemi kullanıyor olabilirsiniz; bu durumda deneyiminiz farklılık gösterecektir. Web'de temel işletim sistemi kullanımı hakkında pek çok kılavuz vardır — kendi işletim sisteminize ilişkin bilgileri web'de aramanızı öneririz.

#### Temel yapı

Çoğu modern işletim sisteminde, sistemde bulunan her kullanıcı hesabı için bir klasör içeren bir `Users` klasörü bulunur; bu klasörler kullanıcının _Home_ (Ana) klasörü olarak da bilinir. Bu klasör, bulunmasını kolaylaştırmak için genellikle bir ev simgesiyle gösterilir. _Home_ klasörü de, sırası geldiğinde, özellikle o kullanıcıyla ilgili _Documents_ (Belgeler), _Music_ (Müzik) vb. gibi diğer önemli standart klasörleri (ve dosyaları) içerir. Bilgisayarınızda başka pek çok dosya ve klasör de vardır, ancak şimdilik bunlar için endişelenmeyin.

O anda oturum açmış olan kullanıcı, varsayılan olarak yalnızca kendi _Home_ klasörüne erişebilir.

Çalışmanızla ilgili proje dosyalarını _Home_ klasörünüzün içinde bir yerde, belki de _Documents_ içinde oluşturmalısınız. Web sayfası dosyalarından sıklıkla _belge (document)_ olarak bahsedildiği için bu mantıklıdır.

> [!WARNING]
> Sisteminizin başka yerlerinde (örneğin işletim sistemini veya önemli uygulamaları kontrol eden alanlarda) dosya oluşturmaya ve düzenlemeye başlarsanız, bir şeyleri bozabilirsiniz. Ne yaptığınızı bilene kadar dosya oluşturma ve düzenleme işlemlerini _Home_ klasörünüzün içinde yapın.

#### Klasör oluşturma

Tüm web projelerimizi saklamak için yeni bir klasör oluşturalım.

1. Dosya sistemi kullanıcı arayüzünüzde _Home_ klasörünüze tıklayın, ardından _Documents_ klasörünüze çift tıklayın.
2. Bu konumda `web-projects` adında yeni bir klasör oluşturun:
   1. Windows'ta bu işlem, File Explorer penceresinde _New_ ("Yeni") düğmesini seçip _Folder_ ("Klasör") seçeneğini seçerek (veya <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> tuşlarına basarak), beliren yeni klasör simgesinin adı olarak `web-projects` yazarak ve <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basarak yapılabilir.
   2. macOS'ta bu işlem, Finder menüsünde _File_ > _New Folder_ ("Dosya > Yeni Klasör") seçeneğini seçerek (veya <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> tuşlarına basarak) yapılabilir — _untitled folder_ ("adsız klasör") adında yeni bir klasörün belirdiğini göreceksiniz. Düzenlemeye başlamak için klasör adına tıklayın, `web-projects` yazın ve <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basın.

Bir yazım hatası yaparsanız, düzeltmek için klasör adını düzenleyebilirsiniz (bu, dosyalarda da işe yarar):

- Windows'ta klasöre sağ tıklayın, menüden _Rename_ ("Yeniden adlandır") seçeneğini seçin, ardından adı düzenleyin. Bazı Windows sürümlerinde başlangıçta basitleştirilmiş bir menü görüntülenir — sağ tıklamanız, ardından _Show more options_ ("Daha fazla seçenek göster") seçeneğini, ardından da _Rename_ seçeneğini seçmeniz gerekebilir!
- macOS'ta düzenlemek için klasör adına tıklayın/adı seçin.

#### VS Code'da bir proje klasörü açma ve dosya oluşturma

Metin dosyalarını işletim sisteminin dosya sistemi kullanıcı arayüzünde oluşturabilseniz de, bunları kod düzenleyicinizin (code editor) içinde oluşturmak genellikle daha kolay ve daha az hataya açıktır. Hatta VS Code'un, web projeleriniz için ihtiyaç duyduğunuz tüm klasör ve dosyaları oluşturmanıza olanak tanıyan kendi dosya gezgini vardır.

Peki o hâlde neden size işletim sisteminin dosya sistemi kullanıcı arayüzünü kullanarak bir klasör oluşturma zahmetine soktuk? Çünkü VS Code'un başlangıçta en üst düzeydeki bir klasöre yönlendirilmesi gerekir!

İşletim sisteminizin dosya sisteminin nasıl yapılandırıldığını biraz anlamak da faydalıdır. Bu, ileride daha karmaşık araçlar kullanmaya başladıkça daha da işe yarar hâle gelecektir.

Şimdi `web-projects` klasörümüzü VS Code'da açalım:

1. VS Code'u açın.
2. Menüden _File_ > _Open Folder..._ ("Dosya > Klasör Aç...") seçeneğini seçin.
   > [!NOTE]
   > Klavye kullanıcısıysanız, Windows'ta <kbd>Ctrl</kbd> tuşunu basılı tutup <kbd>K</kbd> ve ardından <kbd>O</kbd> tuşlarına basarak _Open Folder_ ("Klasör Aç") komutunu çalıştırabilirsiniz. Bir macOS kullanıcısı için bunu yapmanın en kolay yolu, <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> ile _Command Palette_'i ("Komut Paleti") açmak, komut listesini filtrelemek için "Open Folder" yazmak, imleç tuşlarını kullanarak _File: Open Folder_ seçeneğine inmek ve ardından <kbd>Enter</kbd> tuşuna basmaktır.
3. İşletim sisteminin dosya sistemi kullanıcı arayüzünün küçük bir sürümü görünecektir. Bunu kullanarak `web-projects` klasörünüzü bulun, seçin ve ardından _Select Folder_ ("Klasör Seç") düğmesine basın.
4. Karşınıza _Do you trust the authors of the files in this folder?_ ("Bu klasördeki dosyaların yazarlarına güveniyor musunuz?") başlıklı bir iletişim kutusu çıkacaktır. Ne hakkında olduğunu anlamak için bunu dikkatlice okuyun. Şu anda bu klasörde dosya oluşturacak tek kişi sizsiniz, bu yüzden _Yes, I trust the authors_ ("Evet, yazarlara güveniyorum") seçeneğine tıklayabilirsiniz.

Aşağıda gösterildiği gibi, `web-projects` klasörünüzün VS Code'un _EXPLORER_ ("GEZGİN") bölmesinde açıldığını görmelisiniz:

![web-projects adlı boş bir klasörü gösteren VS Code Explorer paneli](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/dealing_with_files/vs-code-explorer.png)

> [!WARNING]
> Yine, sisteminizde herhangi bir soruna yol açmamak için şimdilik yalnızca _Home_ klasörünüzün içindeki kendi dosyalarınızı düzenlemeye özen gösterin.

##### VS Code'da klavyeyle gezinme üzerine bir not

VS Code, hiçbir şekilde kusursuz olmasa da, kapsamlı bir klavye kısayolları setine sahiptir. Bu makale boyunca mümkün olduğunca faydalı olanları eklemeye çalıştık, ancak daha kapsamlı listeleri VS Code'un [Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/configure/keybindings) ("Klavye Kısayolları Başvurusu") sayfasında bulabilirsiniz.

Genel olarak, VS Code'da klavyeyle gezinmek istiyorsanız, kullanıcı arayüzünün farklı alanları arasında hareket etmek için <kbd>Tab</kbd> tuşuna basabilirsiniz (<kbd>Shift</kbd> + <kbd>Tab</kbd> sizi önceki sekme odak konumuna götürür). Bir sekme odak konumunda birden fazla düğme varsa, bunlar arasında geçiş yapmak için imleç tuşlarını kullanabilirsiniz.

Şu anda bir dosyayı düzenliyorsanız, tab tuşu kullanıcı arayüzünde gezinmez — dosyaya sekme karakterleri ekler. Düzenlemekte olduğunuz dosyadan çıkıp _EXPLORER_ bölmesine geçmek için macOS'ta <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>, Windows'ta ise <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> tuşlarına basabilirsiniz.

Dosya düzenleyici bölmesine geri dönmek ve farklı sekmelerde (tab) açık olan farklı dosyalar arasında geçiş yapmaya başlamak için <kbd>Ctrl</kbd> tuşunu basılı tutun ve açık sekmeler listesinde yukarı ve aşağı hareket etmek için <kbd>Tab</kbd> ve <kbd>Shift</kbd> + <kbd>Tab</kbd> tuşlarını kullanın (hem macOS'ta hem de Windows'ta). Düzenlemek istediğiniz dosyayı vurguladıktan sonra, o sekmeye geçmek için tuşları bırakın.

##### Dosya oluşturma

Buradan, _EXPLORER_ bölmesinin üst kısmındaki ilgili düğmeleri kullanarak yeni dosya ve klasörler oluşturabilirsiniz.

1. _New File..._ ("Yeni Dosya...") simgesine tıklayarak (veya <kbd>Tab</kbd> ile ona gelip <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basarak) yeni bir dosya oluşturun.
2. Görünen metin giriş kutusuna dosya adı olarak "index.html" girin ve <kbd>Enter</kbd>/<kbd>Return</kbd> tuşuna basın.

> [!NOTE]
> Dosya ve klasör oluşturmak için _Welcome_ ("Hoş Geldiniz") sekmesinin üst kısmındaki düğmeleri kullanmayın, çünkü bunlar biraz farklı çalışır. Aslında ihtiyacınız olmadığı için _Welcome_ sekmesini kapatabilirsiniz. Bunu sekmenin sağ tarafındaki "x" işaretine tıklayarak veya macOS'ta <kbd>Cmd</kbd> + <kbd>W</kbd> (Windows'ta <kbd>Ctrl</kbd> + <kbd>W</kbd>) tuşlarına basarak yapabilirsiniz.

Bu noktada işletim sisteminizin dosya sistemi kullanıcı arayüzüne geri dönün, `web-projects` klasörünüze çift tıklayarak içine girin; `index.html` dosyanızı orada da görmelisiniz. VS Code, kendine ait garip bir dosya sistemi değil, altta yatan işletim sistemi dosya sistemini kullanmaktadır.

#### index.html dosyasını kendi alt klasörüne taşıma

Klasörlerin içinde başka klasörler (_alt klasörler (sub-folders)_ olarak adlandırılır) istediğiniz kadar derin düzeyde oluşturabilirsiniz. Ayrıca dosyaları (ve klasörleri) başka bir klasörün üzerine sürükleyip bırakarak o klasörün içine taşıyabilirsiniz.

Bunu inceleyelim ve bu süreçte `index.html` dosyamızı kendi alt klasörünün içine taşıyalım. Onun ana `web-projects` klasörünün içinde durmasını pek istemiyoruz.

1. VS Code _EXPLORER_ bölmesinin _New Folder..._ ("Yeni Klasör...") düğmesini kullanarak `web-projects` içinde yeni bir klasör oluşturun.
2. Klasöre `test-site` adını verin.
3. Artık `index.html` dosyasını sürükleyip `test-site` klasörünün üzerine bırakarak dosyayı klasörün içine taşıyabilmelisiniz.
   > [!NOTE]
   > Klavye kullanıcısıysanız, bunu şu adımları izleyerek yapabilirsiniz:
   >
   > 1. Odak çerçevesini `index.html` dosyasının üzerine getirmek için yukarı ve aşağı ok tuşlarını kullanın.
   > 2. Dosyayı taşımak üzere seçmek için macOS'ta <kbd>Cmd</kbd> + <kbd>X</kbd> (Windows'ta <kbd>Ctrl</kbd> + <kbd>X</kbd>) tuşlarına basın.
   > 3. Odak çerçevesini klasörün üzerine getirmek için ok tuşlarını kullanın.
   > 4. Dosyayı o klasörün içine taşımak için macOS'ta <kbd>Cmd</kbd> + <kbd>V</kbd> (Windows'ta <kbd>Ctrl</kbd> + <kbd>V</kbd>) tuşlarına basın.

İşletim sisteminin dosya sistemi kullanıcı arayüzlerini ve VS Code'u kullanma hakkında ekleyebileceğimiz çok daha fazla şey var, ancak yerimiz sınırlı olduğu için şimdilik burada bırakacağız. Bu, başlamanız için size yeterli bilgiyi verdi; dosya ve klasörlerle başka işlerin nasıl yapılacağına dair bilgileri web'de aramanızı öneririz.

Şimdi web sitesi yapısına dair kısa bir tartışmaya geçelim.

### Bir web sitesi nasıl bir yapıya sahip olmalıdır?

Web siteleri üzerinde yerel olarak (bilgisayarınızda) çalışırken, her sitenin ilgili tüm dosyalarını tek bir klasörde tutmalısınız. Buna karşılık, tüm web sitesi klasörlerinizi de hepsini kolayca bulabilmeniz için merkezi bir klasörde tutmalısınız.

Makalenin önceki bölümlerinde, tüm web sitesi projelerinizi saklamak için `web-projects` adında merkezi bir klasör oluşturmanızı söylemiştik. Ayrıca içinde boş bir `index.html` dosyası bulunan `test-site` adında bir alt klasör oluşturmanızı da sağlamıştık.

Tipik bir web sitesi yapısını göstermek için `test-site` içine birkaç öğe daha ekleyelim; bir sonraki modülde, bunun içinde eksiksiz bir web sitesi örneği oluşturmanızı sağlayacağız. Herhangi bir web sitesi projesinin içereceği en yaygın şeyler, bir index HTML dosyası ile resimleri, stil dosyalarını ve betik (script) dosyalarını içerecek klasörlerdir:

1. **`index.html`**: Bu dosya genellikle ana sayfa içeriğinizi, yani insanların sitenize ilk girdiklerinde gördükleri metin ve resimleri içerir.
2. **`images` klasörü**: Bu klasör, sitenizde kullandığınız tüm resimleri içerir.
3. **`styles` klasörü**: Bu klasör, içeriğinize stil vermek için kullanılan CSS kodunu içerir (örneğin metin ve arka plan renklerini ayarlamak).
4. **`scripts` klasörü**: Bu klasör, sitenize etkileşimli işlevsellik eklemek için kullanılan tüm JavaScript kodunu içerir (örneğin düğmelere tıklandığında ne olacağını tanımlamak).

`test-site` içinde zaten bir `index.html` dosyanız olmalı. Şimdi bunun içinde `images`, `styles` ve `scripts` klasörlerini oluşturun.

### Dosya adları

Bir dosya adı genellikle iki bölümden oluşur — **ad** ve **uzantı**. Yukarıda oluşturduğumuz dosyayı ele alalım — `index.html`:

- Bu durumda ad `index`'tir. Dosya adları genellikle istediğiniz karakterleri içerebilir, ancak farklı bilgisayar sistemlerinin kullanılabilecek karakterler konusunda çeşitli kısıtlamaları olacaktır. En azından başlangıçta sayılar ve harflerle sınırlı kalmak daha iyidir. Ayrıca sistemler belirli adlara veya adların belirli bölümlerine özel anlamlar yükleyebilir — daha önce de söylediğimiz gibi, `index` dosyaları genellikle bir web sitesinin ana sayfa dosyası olarak tanınır.
- Dosya uzantısı (file extension), uğraştığımız dosyanın türünü belirtir ve bilgisayar sistemleri tarafından dosyada ne tür bir içerik bekleyebileceğini, dosyayı açmak için hangi programı kullanması gerektiğini vb. belirlemek için kullanılır. Bu durumda uzantı `.html`'dir; bu, dosyanın düz metin ve daha spesifik olarak HTML kodu içermesi gerektiği anlamına gelir. Uzantı sayesinde bilgisayarınız, dosyayı açmaya çalıştığınızda onu varsayılan metin düzenleyicinizle açması gerektiğini bilir; şimdiye kadar tüm talimatlarımızı izlediyseniz bu düzenleyici VS Code olmalıdır.

Her durumda geçerli olmasa da, çoğu dosyanın düzgün şekilde işlenebilmesi için bir uzantıya ihtiyacı vardır. Dosya uzantısını kaldırmak veya değiştirmek büyük olasılıkla hatalara yol açar; bu nedenle ne yaptığınızı gerçekten bilmiyorsanız uzantıyı değiştirmemelisiniz.

> [!NOTE]
> Bir dosya adında birden fazla nokta kullanmak mümkündür; örneğin `my.cats.html`. Bu gibi durumlarda son noktanın dosya uzantısının başlangıcı olduğu varsayılır.

Windows bilgisayarlarda bazı dosyaların uzantılarını görmekte sorun yaşayabilirsiniz, çünkü Windows'ta varsayılan olarak açık olan **Hide extensions for known file types** ("Bilinen dosya türleri için uzantıları gizle") adlı bir seçenek vardır. Bunu File Explorer'a gidip **Folder options…** ("Klasör seçenekleri…") seçeneğini seçerek, **Hide extensions for known file types** onay kutusundaki işareti kaldırarak ve ardından **OK** ("Tamam") düğmesine tıklayarak kapatabilirsiniz. Kendi Windows sürümünüzü kapsayan daha spesifik bilgiler için web'de arama yapabilirsiniz.

#### Dosya adlandırmada en iyi uygulamalar

Bu kursu takip ederken, klasör ve dosyaları her zaman tamamen küçük harflerle ve boşluk kullanmadan adlandırmanızı istediğimizi fark edeceksiniz. Bu tavsiyeyi göz ardı etmenin sorun yarattığı pek çok durum vardır — daha yaygın olanlardan bazıları şunlardır:

1. Çoğu web sunucusu da dahil olmak üzere birçok bilgisayar sistemi büyük/küçük harfe duyarlıdır. Örneğin, web sitenizde `test-site/images/MyImage.jpg` konumuna bir resim koyar ve ardından farklı bir dosyada bu resme `test-site/images/myimage.jpg` ile başvurmaya çalışırsanız, bu çalışmayabilir.
2. Komut satırında komut çalıştırdığınızda, adında boşluk bulunan dosya adlarının etrafına tırnak işareti koymanız gerekir; aksi takdirde bunlar iki ayrı öğe olarak yorumlanır.
3. Bazı programlama dilleri (örneğin Python), belirli durumlarda (örneğin bu dosyalar içe aktarılacak modüllerse) dosya adlarındaki boşluklarla iyi çalışmaz.
4. Dosya adları genellikle web adreslerine/URL'lere karşılık gelir. Örneğin sunucunuzun kök klasöründe <code>my&nbsp;file.html</code> adında bir dosyanız varsa, bu dosyaya genellikle `https://example.com/my%20file.html` gibi bir URL'den erişilebilir. Web sunucuları genellikle dosya adlarındaki boşlukları `%20` ile değiştirir (çünkü URL'ler [yüzde kodlamalıdır (percent-encoded)](https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding)); bu da bazı sistemler dosya adlarının ve URL'lerin birebir eşleştiğini varsayıyorsa, bu sistemlerde fark edilmesi güç hatalara yol açabilir.

Birçok geliştirici boşluk yerine kısa çizgi (`-`) gibi bir ayırıcı karakter kullanır — örneğin <code>my&nbsp;file.html</code> yerine `my-file.html`. Bu iyi bir uygulamadır.

En azından ne yaptığınızı bilene kadar, klasör ve dosya adlarınızı küçük harflerle, boşluk kullanmadan ve sözcükleri kısa çizgilerle ayırarak yazma alışkanlığı edinmeniz en iyisidir. Böylece ileride daha az sorunla karşılaşırsınız.

> [!NOTE]
> Dosya adları ve URL'ler için daha fazla en iyi uygulamayı [URL structure best practices for Google](https://developers.google.com/search/docs/crawling-indexing/url-structure) ("Google için URL yapısı en iyi uygulamaları") sayfasında bulabilirsiniz.

### Dosya yolları

Bir dosyaya başka bir dosyadan başvurmak için bir dosya yolu (path) sağlamanız gerekir — bu temelde bir güzergâhtır; böylece bir dosya diğerinin nerede olduğunu bilir. Örneğin, bir resim içeren bir web sayfası (web page) oluştururken, web sayfası kodunuzun görüntülemek istediğiniz resmin konumunu belirten bir dosya yolu içermesi gerekir.

Bunun temel bir örneği üzerinden ilerleyelim. Şimdilik tüm bunların ne anlama geldiğini anlamayabilirsiniz, ama bu sorun değil.

1. Web'de beğendiğiniz bir resmi arayın (örneğin [Google Images](https://www.google.com/imghp) gibi bir hizmet kullanarak) ve indirin. Alternatif olarak, bu örnekte kullanmak için bizim [Firefox simgesi resmimizi](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) de alabilirsiniz.
2. Resmi _images_ klasörünüzün içine koyun.
3. Resim dosyasının adının kısa ve basit olduğundan ve içinde boşluk bulunmadığından emin olun. Örneğin `firefox-icon.png` iyidir, `cat.jpg` de iyidir, ancak `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` iyi değildir. Ayrıca dosya uzantısını koruduğunuzdan da emin olun.

Şimdi `index.html` dosyasına, resim dosyasının yerini bulup onu görüntülemesini sağlayacak içerik ekleyeceğiz.

1. `index.html` dosyanızı VS Code'da açın ve aşağıdaki içeriği dosyaya tam olarak gösterildiği gibi ekleyin. Bu HTML'dir, yani web sayfası içeriğini tanımlamak ve yapılandırmak için kullandığımız dildir. Çok yakında bu konuda çok daha fazlasını öğreneceksiniz!

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>My test page</title>
     </head>
     <body>
       <img src="" alt="My test image" />
     </body>
   </html>
   ```

2. `<img src="" alt="My test image">` satırı, sayfaya bir resim ekleyen HTML kodudur. HTML'e resmin nerede olduğunu söylememiz gerekiyor. Resim, `index.html` ile aynı klasörde bulunan _images_ klasörünün içindedir. Dosya yapısında `index.html`'den resmimize doğru inmek için ihtiyaç duyacağımız dosya yolu `images/your-image-filename`'dır ("images/resim-dosyanızın-adı"). Örneğin resminizin adı `firefox-icon.png` olsaydı, dosya yolu `images/firefox-icon.png` olurdu.
3. Dosya yolunu HTML kodunuzda `src=""` ifadesinin çift tırnak işaretlerinin arasına ekleyin.
4. HTML dosyanızı kaydedin, ardından web tarayıcınızda (browser) yükleyin. Bunu, HTML dosyasına <kbd>Ctrl</kbd> ile tıklayarak/sağ tıklayarak, ardından _Open With_ ("Birlikte Aç") seçeneğini seçip açılan alt menüden bir web tarayıcısı seçerek yapabilirsiniz. Ayrıca dosya sistemi kullanıcı arayüzünüzü ve bir web tarayıcısı penceresini aynı ekranda açıp HTML dosyasını sürükleyerek web tarayıcısı penceresinin üzerine bırakabilirsiniz.

Resminizi görüntüleyen temel bir web sayfası görmelisiniz!

![Yalnızca Firefox logosunu (dünyayı saran alevli bir tilki) gösteren temel web sitemizin ekran görüntüsü](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/dealing_with_files/website-screenshot.png)

#### Dosya yolları için genel kurallar

- Çağıran HTML dosyasıyla aynı klasörde bulunan bir hedef dosyaya bağlantı vermek için yalnızca dosya adını kullanın; örneğin `my-image.jpg`.
- Bir alt klasördeki dosyaya başvurmak için yolun önüne klasör adını ve ardından bir eğik çizgi (forward slash) yazın; örneğin `subfolder/my-image.jpg`.
- Çağıran HTML dosyasının **bir üstündeki** klasörde bulunan bir hedef dosyaya bağlantı vermek için iki nokta yazın. Örneğin, `index.html` dosyası `test-site`'ın bir alt klasörünün içinde ve `my-image.jpg` dosyası da `test-site`'ın içinde olsaydı, `my-image.jpg` dosyasına `index.html`'den `../my-image.jpg` kullanarak başvurabilirdiniz.
- Bunları istediğiniz kadar birleştirebilirsiniz; örneğin `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Windows dosya sistemi eğik çizgi yerine ters eğik çizgi (backslash) kullanma eğilimindedir; örneğin `C:\Windows`. Bu, HTML'de önemli değildir — web sitenizi Windows üzerinde geliştiriyor olsanız bile kodunuzda yine de (normal) eğik çizgi kullanmalısınız.

---

## 5. Komut Satırı Hızlandırılmış Kursu (Command line crash course)

**Kaynak:** [Command line crash course](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)

Geliştirme sürecinizde terminalde bazı komutlar çalıştırmanız kaçınılmaz olarak gerekecektir (ya da "komut satırında" (command line) — bunlar fiilen aynı şeydir). Bu makale terminale, ona girmeniz gereken temel komutlara, komutları birbirine nasıl zincirleyeceğinize ve kendi komut satırı arayüzü (command-line interface, CLI) araçlarınızı nasıl ekleyeceğinize dair bir giriş sunar.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine, bir web sitesi oluşturmak için kullanacağınız temel yazılımlara ve dosya sistemlerine temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Komut satırının ne olduğu ve onunla neler yapabileceğiniz.</li>
          <li>Farklı sistemlerde komut satırına nasıl erişileceğini anlamak.</li>
          <li>Temel klavye kısayollarını bilmek (örneğin önceki komutlara erişmek için yukarı ok, otomatik tamamlama için tab).</li>
          <li>Temel komutları bilmek (örneğin <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Komut seçenekleri/bayrakları (options/flags).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Terminale hoş geldiniz

Terminal, metin tabanlı programları çalıştırmaya yarayan bir metin arayüzüdür. Web geliştirme için herhangi bir araç kullanıyorsanız, seçtiğiniz araçları kullanmak için komut satırını açıp bazı komutlar çalıştırmanız neredeyse kesindir (bu tür araçlardan sıklıkla **CLI araçları** — komut satırı arayüzü araçları — olarak bahsedildiğini görürsünüz).

Pek çok araç, komut satırına komutlar yazılarak kullanılabilir; bunların birçoğu sisteminizde önceden yüklü gelir, çok sayıda başkası da paket kayıt depolarından (package registries) yüklenebilir.
Paket kayıt depoları uygulama mağazalarına benzer, ancak (çoğunlukla) komut satırı tabanlı araçlar ve yazılımlar içindir.
Bu bölümün ilerleyen kısımlarında bazı araçların nasıl yükleneceğini göreceğiz ve bir sonraki bölümde paket kayıt depoları hakkında daha fazla şey öğreneceğiz.

Komut satırına yöneltilen en büyük eleştirilerden biri, kullanıcı deneyimi açısından son derece yetersiz olmasıdır.
Komut satırını ilk kez görmek göz korkutucu bir deneyim olabilir: boş bir ekran ve yanıp sönen bir imleç; ne yapılacağına dair ortada pek az yardım vardır.

Görünüşte hiç de davetkâr değiller, ama onlarla yapabileceğiniz çok şey var ve size söz veriyoruz: biraz rehberlik ve pratikle onları kullanmak kolaylaşacak!
İşte bu yüzden bu bölümü sunuyoruz — görünüşte bu pek de dostça olmayan ortamda işe başlamanıza yardımcı olmak için.

#### Terminal nereden geldi?

Terminalin kökeni 1950'li-60'lı yıllara uzanır ve ilk hâli bugün kullandığımız şeye gerçekten hiç benzemez (buna şükretmeliyiz). Tarihçesinin bir kısmını Wikipedia'nın [Bilgisayar Terminali (Computer Terminal)](https://en.wikipedia.org/wiki/Computer_terminal) maddesinde okuyabilirsiniz.

O zamandan beri terminal, tüm işletim sistemlerinin sabit bir özelliği olarak kalmıştır — masaüstü makinelerden buluttaki bir köşeye yerleştirilmiş sunuculara, Raspberry PI Zero gibi mikrobilgisayarlara ve hatta cep telefonlarına kadar. Bilgisayarın alttaki dosya sistemine ve düşük seviyeli özelliklerine doğrudan erişim sağlar ve bu nedenle, ne yaptığınızı biliyorsanız, karmaşık görevleri hızla gerçekleştirmek için inanılmaz derecede kullanışlıdır.

Otomasyon için de kullanışlıdır — örneğin yüzlerce dosyanın adını anında güncelleyecek bir komut yazmak için; diyelim ki "ch01-xxxx.png"den "ch02-xxxx.png"ye. Dosya adlarını Finder ya da Explorer grafik arayüz (GUI) uygulamanızı kullanarak güncelleseydiniz, bu çok uzun zamanınızı alırdı.

Her neyse, terminal yakın zamanda hiçbir yere gitmiyor.

#### Terminal neye benzer?

Aşağıda, sizi bir terminale ulaştırabilecek mevcut programların farklı türlerinden bazılarını görebilirsiniz.

Sonraki resimler Windows'ta mevcut olan komut istemlerini (command prompts) gösteriyor — "cmd" programından "powershell"e kadar iyi bir seçenek yelpazesi vardır; bunlar başlat menüsünden program adı yazılarak çalıştırılabilir.

![Sade bir Windows cmd komut satırı penceresi ve bir Windows PowerShell penceresi](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/command_line/win-terminals.png)

Aşağıda da macOS terminal uygulamasını görebilirsiniz.

![Temel, sade bir macOS terminali](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/command_line/mac-terminal.png)

#### Terminale nasıl erişilir?

Günümüzde birçok geliştirici Unix tabanlı araçlar kullanıyor (örneğin terminal ve onun aracılığıyla erişebileceğiniz araçlar). Bugün web'de bulunan birçok eğitim ve araç Unix tabanlı sistemleri destekler (ve ne yazık ki öyle varsayar), ama endişelenmeyin — bunlar çoğu sistemde mevcuttur. Bu bölümde, seçtiğiniz sistemde terminale nasıl erişeceğinize bakacağız.

##### Linux/Unix

Yukarıda ima edildiği gibi, Linux/Unix sistemlerinde varsayılan olarak bir terminal bulunur ve Uygulamalarınız (Applications) arasında listelenir.

##### macOS

macOS'ta, grafik kullanıcı arayüzünün altında yer alan Darwin adlı bir sistem vardır. Darwin, terminali ve düşük seviyeli araçlara erişimi sağlayan Unix benzeri bir sistemdir. macOS Darwin çoğunlukla Unix ile eşdeğerdir; bu makaleyi işlerken bizi herhangi bir endişeye sokmayacak kadar kesinlikle yeterlidir.

Terminal, macOS'ta `Applications/Utilities/Terminal` konumunda bulunur.

##### Windows

Diğer bazı programlama araçlarında olduğu gibi, Windows'ta terminali (ya da komut satırını) kullanmak geleneksel olarak diğer işletim sistemlerindeki kadar basit veya kolay olmamıştır. Ancak durum giderek iyileşiyor.

Windows'un uzun zamandır `cmd` ("komut istemi" (the command prompt)) adlı kendi terminal benzeri programı vardır, ancak bu program Unix komutlarıyla eşdeğer değildir ve eski tarz Windows DOS istemine denktir.

Windows'ta terminal deneyimi sağlamak için daha iyi programlar mevcuttur; örneğin PowerShell ([yükleyicileri bulmak için buraya bakın](https://github.com/PowerShell/PowerShell)) ve Git Bash ([git for Windows](https://gitforwindows.org/) araç setinin bir parçası olarak gelir).

Bununla birlikte, günümüzde Windows için en iyi seçenek Windows Subsystem for Linux'tur (WSL) — Linux işletim sistemlerini doğrudan Windows 10'un içinden çalıştırmaya yarayan bir uyumluluk katmanıdır; sanal makineye ihtiyaç duymadan doğrudan Windows üzerinde "gerçek bir terminal" çalıştırmanıza olanak tanır.

Bu, Windows mağazasından doğrudan ve ücretsiz olarak yüklenebilir. İhtiyacınız olan tüm belgeleri [Windows Subsystem for Linux Belgeleri (Windows Subsystem for Linux Documentation)](https://learn.microsoft.com/en-us/windows/wsl/) içinde bulabilirsiniz.

![Windows Subsystem for Linux belgelerinin bir ekran görüntüsü](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/command_line/wsl.png)

Windows'ta hangi seçeneği tercih edeceğiniz konusunda, WSL'yi yüklemeyi denemenizi şiddetle öneririz. Varsayılan komut istemiyle (`cmd`) devam edebilirsiniz ve birçok araç sorunsuz çalışacaktır, ancak Unix araçlarıyla daha iyi bir eşdeğerliğe sahip olursanız her şeyi daha kolay bulacaksınız.

##### Ara not: komut satırı ile terminal arasındaki fark nedir?

Genellikle bu iki terimin birbirinin yerine kullanıldığını görürsünüz. Teknik olarak terminal, bir kabuğu (shell) başlatan ve ona bağlanan bir yazılımdır. Kabuk, sizin oturumunuz ve oturum ortamınızdır (istem (prompt) ve kısayollar gibi şeylerin özelleştirilebildiği yer). Komut satırı ise komutları girdiğiniz ve imlecin yanıp söndüğü satırın kendisidir.

#### Terminali kullanmak zorunda mısınız?

Komut satırından erişilebilen çok zengin bir araç yelpazesi olsa da, [Visual Studio Code](https://code.visualstudio.com/) gibi araçlar kullanıyorsanız, terminali doğrudan kullanmanıza gerek kalmadan terminal komutlarını kullanmak için aracı olarak kullanılabilecek çok sayıda eklenti de vardır. Ancak yapmak istediğiniz her şey için bir kod düzenleyici (code editor) eklentisi bulamazsınız — eninde sonunda terminalle biraz deneyim kazanmanız gerekecek.

### Temel yerleşik terminal komutları

Bu kadar laf yeter — hadi bazı terminal komutlarına bakmaya başlayalım! Kutudan çıktığı hâliyle, komut satırının yapabileceği şeylerden yalnızca birkaçı ve her durumda ilgili araçların adları şunlardır:

- Bilgisayarınızın dosya sisteminde gezinmek ve oluşturma, kopyalama, yeniden adlandırma ve silme gibi temel düzey görevleri yapmak:
  - Dizin (klasör) yapınızda dolaşmak: `cd`
  - Dizin oluşturmak: `mkdir`
  - Dosya oluşturmak (ve üst verilerini (metadata) değiştirmek): `touch`
  - Dosya veya dizin kopyalamak: `cp`
  - Dosya veya dizin taşımak: `mv`
  - Dosya veya dizin silmek: `rm`

- Belirli URL'lerde bulunan dosyaları indirmek: `curl`
- Daha büyük metin gövdelerinin içinde metin parçaları aramak: `grep`
- Bir dosyanın içeriğini sayfa sayfa görüntülemek: `less`, `cat`
- Metin akışlarını işlemek ve dönüştürmek (örneğin bir HTML dosyasındaki tüm `<div>` örneklerini `<article>` olarak değiştirmek): `awk`, `tr`, `sed`

> [!NOTE]
> Web'de komut satırına çok daha derinlemesine giren bir dizi iyi eğitim vardır — bu yalnızca kısa bir giriştir!

İlerleyelim ve bu araçlardan birkaçını komut satırında kullanmaya bakalım. Daha ileri gitmeden önce terminal programınızı açın!

#### Komut satırında gezinme

Komut satırını ziyaret ettiğinizde, "bir şey yapmak" için kaçınılmaz olarak belirli bir dizine gitmeniz gerekecektir. Tüm işletim sistemleri (varsayılan bir kurulum varsayılarak) terminal programlarını _ana dizininizde (Home)_ başlatır ve büyük olasılıkla oradan farklı bir yere geçmek isteyeceksiniz.

> [!NOTE]
> "Dizin" (directory), önceki makalede "klasör" (folder) dediğimiz şeyin teknik terimidir. Bir kullanıcı arayüzü (UI) içinde dosya yapısına bakarken "klasör" terimi daha anlamlıdır, çünkü kullanılan simgeler eski tarz fiziksel saklama klasörlerine benzer. Ancak "dizin" teriminin de sıkça kullanıldığını duyarsınız, özellikle de komut satırını kullanarak dosyaları işlemekten bahsederken. İnce farklar vardır, ama iki terim temelde aynı anlama gelir.

`cd` komutu dizin değiştirmenizi (Change Directory) sağlar. Teknik olarak cd bir program değil, yerleşik (built-in) bir komuttur. Bu, işletim sisteminizin onu kutudan çıktığı hâliyle sağladığı ve ayrıca onu yanlışlıkla silemeyeceğiniz anlamına gelir — çok şükür! Bir komutun yerleşik olup olmadığı konusunda çok fazla endişelenmenize gerek yok, ancak yerleşik komutların tüm Unix tabanlı sistemlerde bulunduğunu aklınızda tutun.

1. Dizini değiştirmek için terminalinize `cd` yazın, ardından geçmek istediğiniz dizini yazın. Dizinin ana dizininizin içinde olduğunu varsayarsak, `cd Desktop` kullanabilirsiniz (aşağıdaki ekran görüntülerine bakın).

   ![cd Desktop komutunun çeşitli Windows terminallerinde çalıştırılmasının sonuçları - terminalin konumu masaüstüne geçer](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/command_line/win-terminals-cd.png)

2. Bunu sisteminizin terminaline yazmayı deneyin:

   ```bash
   cd Desktop
   ```

3. Bir önceki dizine geri çıkmak için iki nokta kullanabilirsiniz. Şimdi şunu yazın:

   ```bash
   cd ..
   ```

> [!NOTE]
> Çok kullanışlı bir terminal kısayolu, var olduğunu bildiğiniz adları baştan sona yazmak zorunda kalmak yerine otomatik tamamlamak için <kbd>tab</kbd> tuşunu kullanmaktır. Örneğin, yukarıdaki iki komutu yazdıktan sonra `cd D` yazıp <kbd>tab</kbd> tuşuna basmayı deneyin — geçerli dizinde mevcut olması koşuluyla `Desktop` dizin adını sizin için otomatik tamamlaması gerekir. İlerlerken bunu aklınızda tutun.

Gitmek istediğiniz dizin iç içe ve derinlerdeyse, ona ulaşmak için yolu (path) bilmeniz gerekir. Dosya sisteminizin yapısına daha aşina oldukça bu genellikle kolaylaşır, ancak yoldan emin değilseniz, genellikle `ls` komutunu (aşağıya bakın) kullanarak ve bir dizinin şu anda bulunduğunuz yere göre nerede olduğunu görmek için Explorer/Finder pencerenizde etrafa tıklayarak bunu bulabilirsiniz.

Örneğin, _Desktop_ üzerinde bulunan `project` adlı bir dizinin içindeki `src` adlı bir dizine gitmek isteseydiniz, _ana dizininizden (Home)_ oraya ulaşmak için şu üç komutu yazabilirdiniz:

```bash
cd Desktop
cd project
cd src
```

Ancak bu bir zaman kaybıdır — bunun yerine, yoldaki farklı öğeleri eğik çizgilerle (forward slash) ayırarak tek bir komut yazabilirsiniz; tıpkı CSS, HTML veya JavaScript kodunda resimlere ya da diğer kaynaklara giden yolları belirtirken yaptığınız gibi:

```bash
cd Desktop/project/src
```

Yolunuzun başına bir eğik çizgi eklemenin yolu mutlak (absolute) hâle getirdiğine dikkat edin; örneğin `/Users/your-user-name/Desktop`. Yukarıda yaptığımız gibi baştaki eğik çizgiyi atlamak ise yolu, şu anki çalışma dizininize göre göreli (relative) yapar. Bu, web tarayıcınızdaki URL'lerde göreceğinizle tamamen aynıdır. Baştaki eğik çizgi "web sitesinin kökünde" anlamına gelirken, eğik çizgiyi atlamak "URL, şu anki sayfama göre görelidir" anlamına gelir.

> [!NOTE]
> Windows'ta eğik çizgi yerine ters eğik çizgi (backslash) kullanırsınız, örneğin `cd Desktop\project\src` — bu gerçekten çok tuhaf görünebilir, ama nedenini merak ediyorsanız, Microsoft'un Baş Mühendislerinden (Principal engineers) birinin yaptığı bir açıklamanın yer aldığı [bu YouTube klibini izleyin](https://www.youtube.com/watch?v=5T3IJfBfBmI).

#### Dizin içeriğini listeleme

Bir diğer yerleşik Unix komutu da `ls`'dir (list'in, yani "listele"nin kısaltması); o anda içinde bulunduğunuz dizinin içeriğini listeler. Varsayılan Windows komut istemini (`cmd`) kullanıyorsanız bunun çalışmayacağını unutmayın — oradaki karşılığı `dir`'dir.

Şimdi bunu terminalinizde çalıştırmayı deneyin:

```bash
ls
```

Bu size şu anki çalışma dizininizdeki dosyaların ve dizinlerin bir listesini verir, ancak bilgiler gerçekten çok temeldir — yalnızca mevcut her öğenin adını alırsınız; bir dosya mı yoksa dizin mi olduğunu ya da başka herhangi bir şeyi öğrenemezsiniz. Neyse ki komutun kullanımında yapılacak küçük bir değişiklik size çok daha fazla bilgi verebilir.

#### Komut seçeneklerine giriş

Çoğu terminal komutunun seçenekleri (options) vardır — bunlar bir komutun sonuna eklediğiniz ve onun biraz farklı bir şekilde davranmasını sağlayan değiştiricilerdir. Bunlar genellikle komut adından sonra bir boşluk, ardından bir tire ve ardından bir veya daha fazla harften oluşur.

Örneğin, şunu bir deneyin ve ne elde ettiğinize bakın:

```bash
ls -l
```

`ls` örneğinde, `-l` (_tire el_) seçeneği size her satırda bir dosya ya da dizin bulunan ve çok daha fazla bilginin gösterildiği bir liste verir. Dizinler, satırların en sol tarafındaki "d" harfine bakılarak tanınabilir. `cd` ile içine girebileceğimiz öğeler bunlardır.

Aşağıda, üstte "sade" (vanilla) bir macOS terminali ve altta canlı görünmesi için bazı ekstra simgeler ve renklerle özelleştirilmiş bir terminalin yer aldığı bir ekran görüntüsü var — ikisi de `ls -l` çalıştırmanın sonuçlarını gösteriyor:

![Sade bir macOS terminali ve daha renkli, özelleştirilmiş bir macOS terminali; ls -l komutunu çalıştırmanın sonucu olan bir dosya listesini gösteriyor](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/command_line/mac-terminals-ls.png)

> [!NOTE]
> Her komutun tam olarak hangi seçeneklere sahip olduğunu öğrenmek için onun [man sayfasına (man page)](https://en.wikipedia.org/wiki/Man_page) bakabilirsiniz. Bu, `man` komutunu ve ardından bakmak istediğiniz komutun adını yazarak yapılır, örneğin `man ls`. Bu, man sayfasını terminalin varsayılan metin dosyası görüntüleyicisinde açar (örneğin benim terminalimde [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>)) ve ardından sayfada ok tuşlarını veya benzer bir mekanizmayı kullanarak gezinebilmeniz gerekir. Man sayfası tüm seçenekleri çok ayrıntılı bir şekilde listeler; bu başlangıçta biraz göz korkutucu olabilir, ama en azından ihtiyaç duyarsanız orada olduğunu bilirsiniz. Man sayfasına bakmayı bitirdiğinizde, metin görüntüleyicinizin çıkış komutunu kullanarak ondan çıkmanız gerekir (`less`'te "q"; açıkça belli değilse bulmak için web'de arama yapmanız gerekebilir).

> [!NOTE]
> Bir komutu aynı anda birden fazla seçenekle çalıştırmak için genellikle hepsini tire karakterinden sonra tek bir dize hâlinde yazabilirsiniz; örneğin `ls -lah` veya `ls -ltrh`. Bu ekstra seçeneklerin ne işe yaradığını anlamak için `ls` man sayfasına bakmayı deneyin!

Artık iki temel komutu ele aldığımıza göre, dizininizde biraz kurcalayın ve bir yerden diğerine gezinebiliyor musunuz bir bakın.

#### Oluşturma, kopyalama, taşıma, silme

Terminalle çalışırken muhtemelen oldukça sık kullanacağınız bir dizi başka temel yardımcı komut daha vardır. Bunlar oldukça basittir, bu yüzden hepsini önceki iki komut kadar ayrıntılı açıklamayacağız.

Yanlışlıkla önemli bir şeyi silmemek için bir yerde oluşturduğunuz bir test dizininde, aşağıdaki örnek komutları rehber olarak kullanarak onlarla biraz oynayın:

- `mkdir` — bulunduğunuz geçerli dizinin içinde, komut adından sonra verdiğiniz adla yeni bir dizin oluşturur. Örneğin, `mkdir my-awesome-website` komutu `my-awesome-website` adlı yeni bir dizin oluşturur.
- `rmdir` — adı verilen dizini siler, ancak yalnızca boşsa. Örneğin, `rmdir my-awesome-website` yukarıda oluşturduğumuz dizini siler. Boş olmayan bir dizini silmek (ve içerdiği her şeyi de silmek) istiyorsanız bunun yerine `rm -r` kullanabilirsiniz (aşağıya bakın), ancak bu tehlikelidir. Dizinin içinde daha sonra ihtiyaç duyabileceğiniz hiçbir şey olmadığından emin olun, çünkü sonsuza kadar yok olacaktır.
- `touch` — geçerli dizinin içinde yeni, boş bir dosya oluşturur. Örneğin, `touch mdn-example.md` komutu `mdn-example.md` adlı yeni, boş bir dosya oluşturur.
- `mv` — bir dosyayı belirtilen ilk dosya konumundan belirtilen ikinci dosya konumuna taşır; örneğin `mv mdn-example.md mdn-example.txt` (konumlar dosya yolları olarak yazılır). Bu komut, geçerli dizindeki `mdn-example.md` adlı bir dosyayı geçerli dizindeki `mdn-example.txt` adlı bir dosyaya taşır. Teknik olarak dosya taşınmaktadır, ancak pratik açıdan bu komut aslında dosyayı yeniden adlandırmaktadır.
- `cp` — kullanımı `mv`'ye benzer; `cp`, belirtilen ilk konumdaki dosyanın bir kopyasını belirtilen ikinci konumda oluşturur. Örneğin, `cp mdn-example.txt mdn-example.txt.bak` komutu `mdn-example.txt` dosyasının `mdn-example.txt.bak` adlı bir kopyasını oluşturur (dilerseniz elbette başka bir ad da verebilirsiniz).
- `rm` — belirtilen dosyayı siler. Örneğin, `rm mdn-example.txt` komutu `mdn-example.txt` adlı tek bir dosyayı siler. Bu silme işleminin kalıcı olduğunu ve masaüstü kullanıcı arayüzünüzde bulunabilecek geri dönüşüm kutusu aracılığıyla geri alınamayacağını unutmayın.

> [!NOTE]
> Birçok terminal komutu, yıldız işaretlerini "herhangi bir karakter dizisi" anlamına gelen "joker karakter" (wild card) olarak kullanmanıza izin verir. Bu, belirtilen kalıpla eşleşen, potansiyel olarak çok sayıdaki dosya üzerinde aynı anda bir işlem çalıştırmanıza olanak tanır. Örnek olarak, `rm mdn-*` komutu `mdn-` ile başlayan tüm dosyaları siler. `rm mdn-*.bak` ise `mdn-` ile başlayıp `.bak` ile biten tüm dosyaları siler.

### Terminal — zararlı mı sayılmalı?

Buna daha önce değinmiştik, ama açık olmak gerekirse — terminalle dikkatli olmanız gerekir. Basit komutlar çok fazla tehlike taşımaz, ancak daha karmaşık komutlar oluşturmaya başladıkça, komutun ne yapacağını dikkatlice düşünmeniz ve onları nihayet hedeflenen dizinde çalıştırmadan önce denemeye çalışmanız gerekir.

Diyelim ki bir dizinde 1000 metin dosyanız var ve hepsinin üzerinden geçip yalnızca dosya adında belirli bir alt dize (substring) bulunanları silmek istiyorsunuz. Dikkatli olmazsanız önemli bir şeyi silebilir ve bu süreçte emeğinizin büyük bir kısmını kaybedebilirsiniz.
Edinilmesi gereken iyi bir alışkanlık, terminal komutunuzu bir metin düzenleyicinin içine yazmak, nasıl görünmesi gerektiğini düşündüğünüzü kurgulamak ve ardından dizininizin bir yedek kopyasını alıp test etmek için komutu önce onun üzerinde çalıştırmayı denemektir.

Terminal komutlarını kendi makinenizde denemek konusunda kendinizi rahat hissetmiyorsanız, kendi makinenizi bozma riskine girmeden komut girmeyi pratik edebileceğiniz güvenli ortamlar sunan, çevrim içi barındırılan terminaller mevcuttur:

- Öğrenme ortağımız [Scrimba](https://scrimba.com/home?via=mdn), öğrenme ortamında komut girmek için bir terminal sunar. Bunu iş başında görmek için harika bir yer, onların [Komut Satırı Temelleri (Command Line Basics)](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> kursudur; bu kurs aynı zamanda terminal aracılığıyla dosya ağacında gezinmeye ve dosyalarla dizinleri işlemeye dair eğlenceli, etkileşimli bir giriş de sunar.
- sandbox.bio üzerindeki [Komut Satırı Oyun Alanı (Command-line playground)](https://sandbox.bio/playgrounds/terminal), komut satırı arayüzlerine ve Bash gibi yaygın kabuklara aşina olabilmeniz için terminal komutlarını denemek açısından harika bir yerdir.

Belirli terminal komutlarına hızlı bir genel bakış elde etmek için harika bir kaynak [tldr.sh](https://tldr.sh/)'dir. Bu, MDN'ye benzeyen ama terminal komutlarına özgü, topluluk tarafından yürütülen bir belgelendirme hizmetidir.

Bir sonraki bölümde işi bir kademe (aslında birkaç kademe) yukarı taşıyalım ve terminalin normal masaüstü kullanıcı arayüzüne göre nasıl gerçekten avantajlı olabileceğini görmek için komut satırında araçları birbirine nasıl bağlayabileceğimize bakalım.

### Komutları borularla (pipes) birbirine bağlama

Terminal, komutları `|` (boru, pipe) simgesini kullanarak birbirine zincirlemeye başladığınızda gerçek gücünü gösterir. Bunun ne anlama geldiğine dair çok kısa bir örneğe bakalım.

Geçerli dizinin içeriğini çıktı olarak veren `ls` komutuna zaten bakmıştık:

```bash
ls
```

Peki ya geçerli dizinin içindeki dosya ve dizinlerin sayısını hızlıca saymak istersek? `ls` bunu tek başına yapamaz.

`wc` adlı başka bir Unix aracı daha vardır. Bu araç, kendisine girdi olarak verilen her şeyin kelime, satır, karakter veya bayt sayısını sayar. Bu bir metin dosyası olabilir — aşağıdaki örnek `myfile.txt` dosyasındaki satır sayısını çıktı olarak verir:

```bash
wc -l myfile.txt
```

Ancak kendisine **boruyla aktarılan** (piped) herhangi bir çıktının satır sayısını da sayabilir. Örneğin, aşağıdaki komut `ls` komutunun çıktı olarak verdiği satırların sayısını sayar (tek başına çalıştırılsaydı normalde terminale yazdıracağı şey) ve onun yerine bu sayıyı terminale çıktı olarak verir:

```bash
ls | wc -l
```

`ls` her dosyayı veya dizini kendi satırına yazdırdığından, bu bize fiilen bir dizin ve dosya sayısı verir.

Peki burada neler oluyor? (Unix) komut satırı araçlarının genel bir felsefesi, metni terminale yazdırmalarıdır (buna "standart çıktıya yazdırma" veya `STDOUT` da denir). Pek çok komut ayrıca akış hâlindeki girdiden (stream input) içerik okuyabilir ("standart girdi" veya `STDIN` olarak bilinir).

Boru operatörü bu girdileri ve çıktıları birbirine _bağlayabilir_; böylece ihtiyaçlarımıza uygun, giderek daha karmaşık işlemler oluşturmamıza olanak tanır — bir komutun çıktısı bir sonraki komutun girdisi olabilir. Bu örnekte `ls` normalde çıktısını `STDOUT`'a yazdırırdı, ancak bunun yerine `ls`'in çıktısı boruyla `wc`'ye aktarılıyor; `wc` de bu çıktıyı girdi olarak alıp içerdiği satır sayısını sayıyor ve onun yerine bu sayıyı `STDOUT`'a yazdırıyor.

### Biraz daha karmaşık bir örnek

Biraz daha karmaşık bir şeyin üzerinden geçelim.

1. Önce MDN'nin "fetch" sayfasının içeriğini, `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch` adresinden, `curl` komutunu (URL'lerden içerik istemek için kullanılabilir) kullanarak getirmeye çalışacağız. Şimdi deneyin:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

   Bir çıktı almayacaksınız, çünkü sayfa yeniden yönlendirilmiştir ([/Web/API/fetch](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) adresine). `curl`'e yönlendirmeleri takip etmesini `-L` bayrağını (flag) kullanarak açıkça söylememiz gerekir.

2. Ayrıca `curl`'ün `-I` bayrağını kullanarak `developer.mozilla.org`'un döndürdüğü başlıklara (headers) da bakalım ve `curl`'ün çıktısını boruyla `grep`'e aktararak gönderdiği tüm konum (location) yönlendirmelerini terminale yazdıralım (`grep`'ten "location" kelimesini içeren tüm satırları döndürmesini isteyeceğiz). Aşağıdakini çalıştırmayı deneyin (son sayfaya ulaşmadan önce yalnızca bir yönlendirme olduğunu göreceksiniz):

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

   Çıktınız aşağı yukarı şöyle görünmelidir (`curl` önce bazı indirme sayaçları ve benzeri şeyler çıktı olarak verecektir):

   ```bash
   location: /en-US/docs/Web/API/Window/fetch
   ```

3. Biraz yapmacık olsa da, bu sonucu biraz daha ileri götürüp `location:` satırının içeriğini dönüştürebilir, her birinin başına temel kaynağı (base origin) ekleyerek tam URL'lerin yazdırılmasını sağlayabiliriz. Bunun için işin içine `awk`'ı katacağız (JavaScript, Ruby veya Python'a benzer bir programlama dilidir, sadece çok daha eskidir!). Bunu çalıştırmayı deneyin:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

Son çıktınız aşağı yukarı şöyle görünmelidir:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Bu komutları birleştirerek, `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` URL'sini istediğimizde Mozilla sunucusunun üzerinden yönlendirme yaptığı tam URL'leri gösterecek şekilde çıktıyı özelleştirmiş olduk.
Sisteminizi tanımak önümüzdeki yıllarda faydalı olacaktır — bu tek işlevli araçların nasıl çalıştığını ve niş sorunları çözmek için araç setinizin bir parçası nasıl hâline gelebileceklerini öğrenin.

### Güçlendiriciler (powerups) ekleme

Artık sisteminizle birlikte gelen yerleşik komutlardan bazılarına göz attığımıza göre, üçüncü taraf bir CLI aracını nasıl yükleyip kullanabileceğimize bakalım.

Ön uç (front-end) web geliştirme için yüklenebilir araçlardan oluşan devasa ekosistem şu anda çoğunlukla, Node.js ile yakın bir şekilde birlikte çalışan, özel mülkiyete ait bir paket barındırma (hosting) hizmeti olan [npm](https://www.npmjs.com/) içinde yer almaktadır.
Bu durum yavaş yavaş genişliyor — zaman geçtikçe daha fazla paket sağlayıcısı görmeyi bekleyebilirsiniz.

[Node.js'i yüklemek](https://nodejs.org/en/), npm komut satırı aracını da (ve npx adlı, npm merkezli tamamlayıcı bir aracı) yükler; bu da ek komut satırı araçlarını yüklemek için bir kapı sunar. Node.js ve npm tüm sistemlerde aynı şekilde çalışır: macOS, Windows ve Linux.

Şimdi yukarıdaki URL'ye gidip işletim sisteminize uygun bir Node.js yükleyicisini indirip çalıştırarak sisteminize npm'i yükleyin. Sorulursa, npm'i kurulumun bir parçası olarak dahil ettiğinizden emin olun.

![Windows'taki Node.js yükleyicisi; npm'i dahil etme seçeneğini gösteriyor](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/environment_setup/command_line/npm-install-option.png)

Burada örnek olarak yine [Prettier](https://prettier.io/)'ı kullanacağız. [Kod düzenleyiciler (Code editors)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) makalemizde onu bir VS Code eklentisi olarak nasıl yükleyeceğinizi göstermiştik. Burada ise onu bir komut satırı aracı olarak nasıl yükleyeceğinizi göstereceğiz.

> [!NOTE]
> Prettier, yalnızca "birkaç seçeneği" olan, kendi görüşleri net (opinionated) bir kod biçimlendiricidir. Daha az seçenek genellikle daha basit anlamına gelir. Araçların karmaşıklık açısından bazen nasıl kontrolden çıkabildiği düşünüldüğünde, "birkaç seçenek" çok cazip olabilir.

#### CLI araçlarımızı nereye yüklemeli?

Prettier'ı yüklemeye dalmadan önce yanıtlanması gereken bir soru var — "onu nereye yüklemeliyiz?"

`npm` ile araçları global olarak — böylece her yerden erişebiliriz — ya da yerel olarak, geçerli proje dizinine yükleme seçeneğimiz vardır.

Her iki yolun da artıları ve eksileri vardır — ve global yüklemenin artı ve eksilerine dair aşağıdaki listeler eksiksiz olmaktan çok uzaktır.

**Global yüklemenin artıları:**

- Terminalinizde her yerden erişilebilir
- Yalnızca bir kez yüklenir
- Daha az disk alanı kullanır
- Her zaman aynı sürümdür
- Diğer herhangi bir Unix komutu gibi hissettirir

**Global yüklemenin eksileri:**

- Projenizin kod tabanıyla uyumlu olmayabilir
- Ekibinizdeki diğer geliştiricilerin bu araçlara erişimi olmaz; örneğin kod tabanını git gibi bir araç üzerinden paylaşıyorsanız.
- Bir önceki maddeyle bağlantılı olarak, proje kodunun yeniden üretilmesini zorlaştırır (araçlarınızı yerel olarak yüklerseniz, bağımlılıklar (dependencies) olarak ayarlanabilir ve <code>npm install</code> ile yüklenebilirler).

_Eksiler_ listesi daha kısa olsa da, global yüklemenin olumsuz etkisi potansiyel olarak faydalarından çok daha büyüktür.
Burada yerel olarak yükleyeceğiz, ancak göreli riskleri anladıktan sonra global olarak yüklemekte özgürsünüz.

#### Prettier'ı yükleme

Prettier, ön uç geliştiricileri için, JavaScript tabanlı dillere odaklanan ve HTML, CSS, SCSS, JSON ve daha fazlası için destek ekleyen, kendi görüşleri net bir kod biçimlendirme aracıdır.

Prettier şunları yapabilir:

- Tüm kod dosyalarınızda stili elle tutarlı hâle getirmenin bilişsel yükünden sizi kurtarır; Prettier bunu sizin için otomatik olarak yapabilir.
- Web geliştirmeye yeni başlayanların kodlarını en iyi uygulamalara (best practice) uygun şekilde biçimlendirmelerine yardımcı olur.
- Herhangi bir işletim sistemine ve hatta doğrudan proje araçlarının bir parçası olarak yüklenebilir; böylece kodunuz üzerinde çalışan iş arkadaşlarınızın ve arkadaşlarınızın sizin kullandığınız kod stilini kullanmasını sağlar.
- Kaydetme sırasında, siz yazarken ya da hatta kodunuzu yayınlamadan önce çalışacak şekilde yapılandırılabilir (modülün ilerleyen kısımlarında göreceğimiz ek araçlarla).

Bu makale için, [Prettier yükleme kılavuzunda (Prettier installation guide)](https://prettier.io/docs/install.html) önerildiği gibi Prettier'ı yerel olarak yükleyeceğiz.

1. Node'u yükledikten sonra terminali açın ve Prettier'ı yüklemek için aşağıdaki komutu çalıştırın (`--save-dev`'in ne işe yaradığını bir sonraki makalede açıklayacağız):

   ```bash
   npm install --save-dev prettier
   ```

2. Artık dosyayı [npx](https://docs.npmjs.com/cli/commands/npx/) aracını kullanarak yerel olarak çalıştırabilirsiniz. Komutu, diğer birçok komutta olduğu gibi, hiçbir argüman vermeden çalıştırmak kullanım ve yardım bilgilerini sunacaktır. Şimdi bunu deneyin:

   ```bash
   npx prettier
   ```

Çıktınız aşağı yukarı şöyle görünmelidir:

```bash
Usage: prettier [options] [file/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

…
```

Uzun olsa bile, kullanım bilgilerine en azından göz gezdirmeye her zaman değer.
Aracın nasıl kullanılmak üzere tasarlandığını daha iyi anlamanıza yardımcı olacaktır.

> [!NOTE]
> Prettier'ı önce yerel olarak yüklemediyseniz, `npx prettier` komutunu çalıştırmak Prettier'ın en son sürümünü _yalnızca o komut için_ tek seferde indirip çalıştıracaktır.
> Bu kulağa harika gelse de, Prettier'ın yeni sürümleri çıktıyı biraz değiştirebilir.
> Onu yerel olarak yüklemek istersiniz; böylece değiştirmeye hazır olana kadar biçimlendirme için kullandığınız Prettier sürümünü sabitlemiş olursunuz.

#### Prettier ile oynama

Nasıl çalıştığını görebilmeniz için Prettier ile kısaca biraz oynayalım.

1. Her şeyden önce, dosya sisteminizde kolayca bulabileceğiniz bir yerde yeni bir dizin oluşturun. Belki `Desktop`'unuzda `prettier-test` adlı bir dizin.

2. Şimdi aşağıdaki kodu test dizininizin içinde `index.js` adlı yeni bir dosyaya kaydedin:

   ```js-nolint
   const myObj = {
   a:1,b:{c:2}}
   function printMe(obj){console.log(obj.b.c)}
   printMe(myObj)
   ```

3. Kodumuzun düzenlenmesi gerekip gerekmediğini yalnızca kontrol etmek için Prettier'ı bir kod tabanı üzerinde çalıştırabiliriz. `cd` ile dizininize girin ve şu komutu çalıştırmayı deneyin:

   ```bash
   npx prettier --check index.js
   ```

   Şuna benzer bir çıktı almalısınız:

   ```bash
   Checking formatting...
   index.js
   Code style issues found in the above file(s). Forgot to run Prettier?
   ```

4. Demek ki düzeltilebilecek bazı kod stili sorunları var. Sorun değil. `prettier` komutuna `--write` seçeneğini eklemek bunları düzeltecek ve bizim gerçekten işe yarar kod yazmaya odaklanmamızı sağlayacaktır. Şimdi komutun bu sürümünü çalıştırmayı deneyin:

   ```bash
   npx prettier --write index.js
   ```

   Şuna benzer bir çıktı alacaksınız:

   ```bash
   Checking formatting...
   index.js
   Code style issues fixed in the above file(s).
   ```

   Ama daha da önemlisi, JavaScript dosyanıza geri bakarsanız şuna benzer bir biçimde yeniden biçimlendirildiğini göreceksiniz:

   ```js
   const myObj = {
     a: 1,
     b: { c: 2 },
   };
   function printMe(obj) {
     console.log(obj.b.c);
   }
   printMe(myObj);
   ```

İş akışınıza (ya da seçtiğiniz iş akışına) bağlı olarak bunu sürecinizin otomatik bir parçası hâline getirebilirsiniz. Otomasyon, araçların gerçekten üstün olduğu alandır; bizim kişisel tercihimiz, herhangi bir şey yapılandırmaya gerek kalmadan "kendiliğinden gerçekleşen" türden bir otomasyondur.

Prettier ile otomasyon sağlamanın birkaç yolu vardır ve bunlar bu makalenin kapsamı dışında olsa da, çevrim içi olarak yardımcı olacak bazı mükemmel kaynaklar vardır (bazılarına bağlantı verilmiştir). Prettier'ı şu durumlarda çağırabilirsiniz:

- Kodunuzu bir git deposuna commit etmeden önce, [Husky](https://github.com/typicode/husky) kullanarak.
- Kod düzenleyicinizde "kaydet"e her bastığınızda; bu ister [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), ister [Sublime Text](https://packagecontrol.io/packages/JsPrettier) olsun.
- [GitHub Actions](https://github.com/features/actions) gibi araçlar kullanılarak yapılan [sürekli entegrasyon (continuous integration)](https://developer.mozilla.org/en-US/docs/Glossary/Continuous_integration) denetimlerinin bir parçası olarak.

Bizim kişisel tercihimiz ikincisidir — örneğin VS Code kullanırken, kaydet'e her bastığımızda Prettier devreye girer ve yapması gereken tüm biçimlendirmeyi düzenler. Prettier'ı farklı şekillerde kullanmak hakkında çok daha fazla bilgiyi [Prettier belgelerinde (Prettier docs)](https://prettier.io/docs/) bulabilirsiniz.

### Oynamak için diğer araçlar

Birkaç araçla daha oynamak isterseniz, işte denemesi eğlenceli olan araçlardan oluşan kısa bir liste:

- [`bat`](https://github.com/sharkdp/bat) — "Daha hoş" bir `cat` (`cat`, dosyaların içeriğini yazdırmak için kullanılır).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — Komut satırında `ping`, ama görselleştirilmiş hâli (`ping`, bir sunucunun yanıt verip vermediğini kontrol etmek için kullanışlı bir araçtır).
- [`htop`](https://htop.dev/) — Bir süreç görüntüleyici (process viewer); bir şey CPU fanınızın jet motoru gibi davranmasına neden olduğunda ve suçlu programı tespit etmek istediğinizde kullanışlıdır.
- [`tldr`](https://tldr.sh/#installation) — bu bölümün başlarında bahsedilmişti, ancak bir komut satırı aracı olarak da mevcuttur.

Yukarıdaki önerilerden bazılarının, Prettier'da yaptığımız gibi npm kullanılarak yüklenmesi gerekebileceğini unutmayın.

### Özet

Bu, bizi terminal/komut satırına yönelik giriş turumuzun ve Ortam kurulumu (Environment setup) modülünün sonuna getiriyor. Sırada, web geliştirmenin nasıl bir şey olduğu hakkında fikir edinebilmeniz için sizi ilk basit web sitenizi oluşturmaya başlatacağız.

---

# Modül 2: İlk Web Siteniz (Your first website)

**Kaynak:** [Your first website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

Bu modül, web geliştirmenin pratik yönleriyle sizi tanıştırır. Basit bir web sayfası oluşturmak için gerekli varlıkları (assets) toplayacak ve kodu yazacak, ardından onu tüm dünyanın görebilmesi için yayınlayacaksınız.

Profesyonel bir web sitesi oluşturmak çok emek ister; bu yüzden web geliştirmede yeniyseniz küçükten başlamanızı öneririz. Hemen yeni bir Facebook inşa etmeyeceksiniz, ancak kendi basit web sitenizi çevrim içi hâle getirmek zor değildir; biz de işe buradan başlayacağız.

## Ön Koşullar

Bu modül, web teknolojileri hakkında önceden herhangi bir bilgi sahibi olduğunuzu varsaymaz; ancak dosya sistemini kullanmak ve web'de gezinmek de dahil olmak üzere işletim sisteminizi rahatça kullanabiliyor olmanız gerekir. Bilgisayarınızda bir kod düzenleyici (code editor) ve birden fazla web tarayıcısı (browser) kurulu olmalıdır.

Durum böyle değilse, önce [Ortam kurulumu (Environment setup)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup) modülünü baştan sona çalışmanızı öneririz.

## Eğitimler

- **[Web siteniz nasıl görünecek?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)**: Web sitenizin kodunu yazmaya başlamadan önce onu planlamalısınız. Hangi bilgileri sergiliyorsunuz? Hangi yazı tiplerini ve renkleri kullanıyorsunuz? Burada, sitenizin içeriğini ve tasarımını planlamak için izleyebileceğiniz basit bir yöntemin ana hatlarını çizeceğiz.

- **[İçeriği oluşturmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)**: HTML (**H**yper**T**ext **M**arkup **L**anguage — Hiper Metin İşaretleme Dili), bir web sayfasını ve içeriğini yapılandırmak için kullanılan koddur. Örneğin içerik, bir dizi paragraf, madde işaretli bir liste ya da resimler ve veri tabloları kullanılarak yapılandırılabilir. Bu makale, HTML ve işlevleri hakkında temel bir anlayış kazandırır ve ilk web siteniz için temel içeriği nasıl oluşturacağınızı gösterir.

- **[İçeriği biçimlendirmek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)**: CSS (Cascading Style Sheets — Basamaklı Stil Sayfaları), web içeriğine stil veren koddur. _İçeriği biçimlendirmek_, başlamak için ihtiyaç duyduğunuz şeyleri adım adım anlatır. Şu gibi sorulara yanıt vereceğiz: Metni nasıl kırmızı yaparım? İçeriğin (web sayfası) yerleşimi içinde belirli bir konumda görüntülenmesini nasıl sağlarım? Web sayfamı arka plan resimleri ve renklerle nasıl süslerim?

- **[Etkileşim eklemek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)**: JavaScript, web sitelerine etkileşim katan bir programlama dilidir. Bu etkileşim; oyunlarda, butonlara basıldığında ya da formlara veri girildiğinde verilen tepkilerin davranışında, dinamik biçimlendirmede, animasyonda vb. kendini gösterir. Bu makale, JavaScript'e başlamanıza yardımcı olur ve nelerin mümkün olduğuna dair anlayışınızı geliştirir.

- **[Web sitenizi yayınlamak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)**: Web sitenizi oluşturan kodu yazmayı ve dosyaları düzenlemeyi bitirdiğinizde, insanların onu bulabilmesi için hepsini çevrim içi hâle getirmeniz gerekir. Bu makale, örnek web sitenizi az bir çabayla nasıl çevrim içi yayına alacağınızı açıklar.

## Ayrıca Bakınız

- **[The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>**: [Scrimba'nın](https://scrimba.com/?via=mdn) _Frontend Developer Career Path_ (Ön Yüz Geliştirici Kariyer Yolu) kursu, eğlenceli etkileşimli dersler ve alıştırmalar, bilgili eğitmenler ve destekleyici bir toplulukla, yetkin bir ön yüz (front-end) web geliştiricisi olmak için bilmeniz gereken her şeyi öğretir. Sıfırdan başlayıp ilk ön yüz işinize kavuşun! Kurs bileşenlerinin birçoğu, bağımsız ücretsiz sürümler olarak da mevcuttur.

---

## 6. Web Siteniz Nasıl Görünecek? (What will your website look like?)

**Kaynak:** [What will your website look like?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)

_Web siteniz nasıl görünecek?_ makalesi, kod yazmaya başlamadan önce web siteniz için yapmanız gereken planlama ve tasarım çalışmalarını ele alır; "Web sitem hangi bilgileri sunuyor?", "Hangi yazı tiplerini ve renkleri istiyorum?" ve "Sitem ne işe yarıyor?" gibi sorular da bunlara dahildir.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine, web sitesi oluşturmak için kullanacağınız temel yazılımlara ve dosya sistemlerine temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Basit bir web sitesi planlamak.</li>
          <li>Temel bir tasarım süreci kullanmak.</li>
          <li>Varlıkları (assets) toplamak.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Her Şeyden Önce: Planlama

Herhangi bir şey yapmadan önce bazı fikirlere ihtiyacınız var. Web siteniz gerçekte ne yapmalı? Bir web sitesi temelde her şeyi yapabilir, ancak ilk denemenizde işleri basit tutmalısınız. Bir başlık, bir resim ve birkaç paragraf içeren basit bir web sayfası oluşturarak başlayacağız.

Başlamak için şu soruları yanıtlamanız gerekecek:

1. **Web siteniz ne hakkında?** Köpekleri mi, New York'u mu yoksa Pac-Man'i mi seviyorsunuz?
2. **Konuyla ilgili hangi bilgileri sunuyorsunuz?** Bir başlık ve birkaç paragraf yazın ve sayfanızda göstermek istediğiniz bir resim düşünün.
3. **Web siteniz,** basit ve genel hatlarıyla **nasıl görünüyor?** Arka plan rengi ne? Ne tür bir yazı tipi uygun: resmî, çizgi film tarzı, kalın ve göz alıcı, sade?

> [!NOTE]
> Karmaşık projeler; renkler, yazı tipleri, sayfadaki öğeler arasındaki boşluklar, uygun yazım üslubu gibi tüm ayrıntılara inen detaylı yönergelere ihtiyaç duyar. Buna bazen tasarım kılavuzu (design guide), tasarım sistemi (design system) ya da marka kitabı (brand book) denir; bir örneğini [Firefox Acorn Design System](https://acorn.firefox.com/latest) sayfasında görebilirsiniz.

### Tasarımınızın Taslağını Çizmek

Ardından kâğıt kalemi alın ve sitenizin kabaca nasıl görünmesini istediğinizi çizin. İlk basit web sayfanız için çizilecek pek bir şey yok, ancak bunu yapmayı şimdiden alışkanlık hâline getirmelisiniz. Gerçekten çok yardımcı olur — Van Gogh olmanıza gerek yok!

![Bir web sitesinin kâğıt üzerindeki kaba çizimi ve taslağı](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/what_will_your_website_look_like/website-drawing-scan.png)

> [!NOTE]
> Gerçek ve karmaşık web sitelerinde bile tasarım ekipleri genellikle kâğıt üzerinde kaba taslaklarla başlar ve daha sonra bir grafik düzenleyici ya da web teknolojileri kullanarak dijital maketler (mockup) oluşturur.
>
> Web ekipleri genellikle hem bir [grafik tasarımcı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#graphic_designer) hem de bir [kullanıcı deneyimi (UX) tasarımcısı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes#user_experience_ux_designer) içerir. Grafik tasarımcılar web sitesinin görsellerini bir araya getirir. UX tasarımcılarının ise kullanıcıların web sitesini nasıl deneyimleyeceği ve onunla nasıl etkileşime gireceğiyle ilgilenen, biraz daha soyut bir rolü vardır.

Bu noktada, sonunda web sayfanızda yer alacak içeriği bir araya getirmeye başlamak iyi olur. Daha önce yazdığınız paragraflar ve başlık hâlâ elinizde olmalı. Bunları yakınınızda tutun.

### Bir Tema Rengi Seçmek

Sayfanız için bir arka plan rengi seçelim.

1. [Renk Seçici'ye (Color Picker)](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Color_format_converter) gidin ve beğendiğiniz bir renk bulun.
2. Bir renk seçtiğinizde `#660066` gibi altı karakterli tuhaf bir kod göreceksiniz. Buna _hex kodu_ (hexadecimal, yani onaltılık kelimesinin kısaltması) denir ve renginizi temsil eder. Şimdilik bu kodu güvenli bir yere not edin.

![MDN Docs web sitesindeki renk biçimi dönüştürücü aracı](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/what_will_your_website_look_like/color_format_converter.jpg)

### Bir Resim Seçmek

Şimdi sitenizde gösterecek bir resim bulma zamanı.

1. [Google Görseller'e (Google Images)](https://www.google.com/imghp) gidin.
2. Google Görseller'dekiler de dahil olmak üzere web'deki resimlerin çoğunun telif hakkıyla korunduğunu unutmayın. Telif hakkını ihlal etme olasılığınızı azaltmak için Google'ın lisans filtresini kullanabilirsiniz. _Tools_ ("Araçlar") butonuna, ardından altında beliren _Usage rights_ ("Kullanım hakları") seçeneğine tıklayın. _Creative Commons licenses_ ("Creative Commons lisansları") seçeneğini seçmelisiniz.

   ![Google Görseller'de Creative Commons lisanslı resimleri getirmek için filtrelenmiş arama sonuçları](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/what_will_your_website_look_like/updated-google-images-licensing.png)

3. Uygun bir resim arayın.
4. İstediğiniz resmi bulduğunuzda, büyütülmüş hâlini görmek için resme tıklayın.
5. Resme sağ tıklayın (Mac'te <kbd>Ctrl</kbd> + tıklama), _Save Image As…_ ("Resmi Farklı Kaydet…") seçeneğini seçin ve resminizi kaydetmek için güvenli bir yer seçin.

   ![Google Görseller'de bir arama terimi için arama sonuçları](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/what_will_your_website_look_like/updated-google-images.png)

### Bir Yazı Tipi Seçmek

Arial, Times New Roman veya Courier New gibi, çoğu bilgisayar sisteminde genellikle bulunan, [web güvenli yazı tipleri (web safe fonts)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts) adı verilen bir yazı tipi kümesi vardır. Web sitenizde bu yazı tiplerinden birini kullanırsanız, tarayıcı kullanıcının bilgisayarında mevcut olan yazı tipi dosyasını yükler.

Ancak cihazlarda genellikle bulunmayan başka yazı tiplerini kullanmak istiyorsanız, tarayıcının bunları gerektiğinde indirebilmesi için ya onları web sitenizin dosyalarıyla birlikte eklemeniz ya da yazı tipi dosyalarına üçüncü taraf bir yazı tipi hizmeti üzerinden başvurmanız gerekir. [Google Fonts](https://fonts.google.com/), pek çok yazı tipine erişim sağlayan bu tür hizmetlerden biridir.

Web siteniz için bir yazı tipi seçmek üzere Google Fonts'u kullanalım:

1. [Google Fonts](https://fonts.google.com/) sitesine gidin.
2. Beğendiğiniz bir yazı tipi bulana kadar yazı tipi listesinde aşağı kaydırın. Bulmakta zorlanıyorsanız, aramanızı daraltmak için diğer sütunda bulunan filtreleri kullanabilirsiniz.
3. Seçtiğiniz yazı tipine tıklayın, ardından sonraki sayfada "Get font" ("Yazı tipini al") butonuna tıklayın.
4. Sonraki sayfada "Get embed code" ("Gömme kodunu al") seçeneğine tıklayın.
5. Verilen iki kod bloğunun ikisini de kopyalayın ve daha sonra kullanmak üzere güvenli bir yere kaydedin.

> [!NOTE]
> Resimlerde olduğu gibi, pek çok yazı tipi lisanslarla korunur; bu da onları ticari web sitelerinde her zaman serbestçe kullanamayacağınız anlamına gelir. Öğrenme örnekleri üzerinde çalışırken şimdilik sorun yaşamazsınız, ancak gerçek web siteleri için yazı tipi seçerken bunu aklınızda bulundurun.

---

## 7. HTML: İçeriği Oluşturmak (HTML: Creating the content)

**Kaynak:** [HTML: Creating the content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)

HTML (**H**yper**T**ext **M**arkup **L**anguage — Hiper Metin İşaretleme Dili), bir web sayfasını ve içeriğini yapılandırmak için kullanılan koddur. Bu makale, HTML ve işlevselliği hakkında temel bir anlayış kazandırır ve ilk web siteniz için temel içeriği nasıl oluşturacağınızı gösterir.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine, web sitesi oluşturmak için kullanacağınız temel yazılımlara ve dosya sistemlerine temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>HTML'in amacı ve işlevi.</li>
          <li>HTML sözdiziminin temel parçaları — açılış ve kapanış etiketleri, öğeler, öznitelikler, head, body.</li>
          <li>Paragraflar, başlıklar, resimler, listeler ve bağlantılar dahil olmak üzere yaygın HTML öğeleri.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Peki HTML Nedir?

HTML, metin içeriğini sarmalamak (ya da kuşatmak) ve böylece onun yapısını tanımlamak ve belirli bir şekilde davranmasını sağlamak için kullanılan bir dizi **[öğeden (element)](https://developer.mozilla.org/en-US/docs/Glossary/Element)** oluşan bir _işaretleme dilidir_ (markup language).

Bir örneğe bakalım — aşağıdaki içerik hiçbir şekilde yapılandırılmadığı için, bir web sayfasında görüntülendiğinde tamamı aynı satırda gösterilecektir:

```plain
Instructions for life:
Eat
Sleep
Repeat
```

Bu içeriği aşağıdaki HTML öğeleriyle sarmalarsak, o tek satırı bir paragrafa ([`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p)) ve üç madde işaretine ([`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li)) dönüştürebiliriz:

```html
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Bu HTML, bir web tarayıcısında şu şekilde görüntülenir:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

HTML'in metni yapılandırmanın yanı sıra pek çok başka kullanımı da vardır — metinleri veya resimleri başka web sayfalarına bağlantı hâline getirmek, resim veya video gömmek, veri tabloları oluşturmak vb.

> [!NOTE]
> Scrimba'nın [HTML tags](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) ("HTML etiketleri") <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> dersi, başlıklar da dahil olmak üzere HTML temelleriyle pratik yapma imkânı sunan etkileşimli bir derstir.

### İlk HTML Belgenizi Oluşturmak

Tek tek öğelerin bir HTML sayfası oluşturmak için nasıl bir araya getirildiğine bakalım. Bu bölümde temel bir HTML dosyası oluşturacak ve nelerden oluştuğuna göz atacaksınız.

1. `web-projects` klasörünüzün içinde `first-website` adında yeni bir klasör daha oluşturun.
2. `first-website` içinde `index.html` adında yeni bir dosya oluşturun ve aşağıdaki kodu dosyaya tam olarak gösterildiği gibi ekleyin:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="" alt="My test image" />
  </body>
</html>
```

Burada şunlar bulunuyor:

- `<!doctype html>`: [Doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype), zorunlu bir giriş bildirimidir. Çok eski zamanlarda, HTML henüz yeniyken (1991/92 civarı), doctype'ların, HTML sayfasının iyi HTML sayılması için uyması gereken bir kurallar kümesine bağlantı işlevi görmesi amaçlanıyordu; bu da otomatik hata denetimi ve başka yararlı şeyler anlamına gelebilirdi. Ancak günümüzde pek bir işe yaramazlar ve temelde yalnızca belgenizin doğru davranmasını sağlamak için gereklidirler. Şimdilik bilmeniz gereken tek şey bu.
- `<html></html>`: [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html) öğesi, sayfanın tamamındaki tüm içeriği sarmalar ve bazen **kök öğe** (root element) olarak da bilinir. Ayrıca belgenin birincil dilini belirleyen `lang` [özniteliğini (attribute)](https://developer.mozilla.org/en-US/docs/Glossary/Attribute) de içerir.
- `<head></head>`: [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head) öğesi, HTML sayfasına eklemek istediğiniz ancak sayfanızı görüntüleyenlere gösterdiğiniz içerik _olmayan_ her şey için bir kap görevi görür. Bunlara arama sonuçlarında görünmesini istediğiniz [anahtar kelimeler](https://developer.mozilla.org/en-US/docs/Glossary/Keyword) ve sayfa açıklaması, içeriği biçimlendirmek için [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS), karakter kümesi bildirimleri ve daha fazlası dahildir.
- `<meta charset="utf-8">`: Bu öğe, belgenizin kullanması gereken karakter kümesini, yazılı dillerin büyük çoğunluğundaki karakterlerin çoğunu içeren [UTF-8](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8) olarak ayarlar. Esasen artık belgeye koyabileceğiniz her türlü metin içeriğini işleyebilir. Bunu ayarlamamak için hiçbir neden yoktur ve ileride bazı sorunların önüne geçmenize yardımcı olabilir.
- `<meta name="viewport" content="width=device-width">`: Bu [viewport öğesi](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts#mobile_viewports), sayfanın tarayıcının görüntü alanı (viewport) genişliğinde işlenmesini sağlar; böylece mobil tarayıcıların sayfaları görüntü alanından daha geniş işleyip ardından küçültmesini önler.
- `<title></title>`: [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title) öğesi sayfanızın başlığını belirler; bu, sayfanın yüklendiği tarayıcı sekmesinde (tab) görünen başlıktır. Ayrıca sayfayı yer imlerine (bookmark)/sık kullanılanlara eklediğinizde sayfayı tanımlamak için de kullanılır.
- `<body></body>`: [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body) öğesi, web kullanıcıları sayfanızı ziyaret ettiğinde onlara göstermek istediğiniz _tüm_ içeriği barındırır; bu metin, resim, video, oyun, çalınabilir ses parçaları ya da başka herhangi bir şey olabilir. Şu anda yalnızca tek bir `<img>` öğesi içeriyor, ancak daha sonra daha fazla içerik ekleyeceğiz.

> [!NOTE]
> Çoğu HTML öğesi bir **açılış etiketi** (opening tag; örneğin `<body>`), onu izleyen öğe içeriği ve ardından gelen bir **kapanış etiketinden** (closing tag; örneğin `</body>`) oluşur. Bazı HTML öğelerinin ayrıca öğe hakkında ek ayarlar veya bilgiler içeren **öznitelikleri** de vardır — örneğin kod örneğimizdeki `charset`, `name` ve `src` özniteliklerine bakın.

### Resim Gömmek

Dikkatimizi [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) öğesine çevirelim:

```html
<img src="" alt="My test image" />
```

Bu öğe, bir resmi sayfamıza, öğenin bulunduğu konumda gömer. Bunu, gömmek istediğimiz resim dosyasının yolunu (path) içeren `src` (source — kaynak) özniteliği aracılığıyla yapar.

Ayrıca bir `alt` (alternative — alternatif) özniteliği de ekledik. [`alt` özniteliğinde](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#authoring_meaningful_alternate_descriptions), muhtemelen aşağıdaki nedenlerden dolayı resmi göremeyen kullanıcılar için açıklayıcı bir metin belirtirsiniz:

1. Görme engelli olabilirler. Ciddi görme bozukluğu olan kullanıcılar, alt metni kendilerine sesli okutmak için genellikle ekran okuyucu (screen reader) adı verilen araçlar kullanır.
2. Bir şeyler ters gitmiş ve resmin görüntülenmemesine neden olmuş olabilir. `src` özniteliği bir resme giden geçerli bir yol içermiyorsa, onun yerine alt metin görüntülenir:

   ![Şu sözcükler: my test image](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/creating_the_content/alt-text-example.png)

Yazdığınız alt metin, okuyucuya resmin neyi aktardığı hakkında iyi bir fikir edinmesine yetecek kadar bilgi sağlamalıdır. Bu örnekte, mevcut "My test image" metnimiz iyi değildir, çünkü resim hakkında açıklayıcı bir bilgi aktarmaz. Firefox logomuz için çok daha iyi bir alternatif "Firefox logosu: Dünya'yı saran alevli bir tilki." olurdu.

> [!NOTE]
> `<img>` gibi öğelerin içeriği veya kapanış etiketi yoktur ve bu nedenle bunlara **boş** (empty) ya da **[boş öğe (void element)](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)** denir. Bazen tek etiketlerinin sonunda bir **sondaki eğik çizgi** (trailing slash) ile yazılırlar (`<img />`), ancak bu isteğe bağlıdır.

Şimdi resminizi görüntüleyelim.

1. `first-website` klasörünün içinde `images` adında yeni bir klasör oluşturun ve önceki örnekte seçtiğiniz resmi bu klasörün içine koyun.
2. `<img>` etiketinin `src` özniteliğinin değerine resminizin yolunu girin. Resim, `index.html` dosyanızla aynı dizinde bulunan `images` adlı bir klasörün içindedir; bu nedenle yol, `images/` artı resminizin adı olacaktır. Örneğin resminizin adı `firefox-icon.png` ise, `src` özniteliğiniz şöyle görünür: `src="images/firefox-icon.png"`.
3. `alt` özniteliğinin değerini — `My test image` — resminizi daha iyi tanımlayan bir metinle değiştirin.
4. `index.html` dosyanızı bir web tarayıcısında açın. Resminizin görüntülendiğini görmelisiniz. Görmüyorsanız, `<img>` öğenizi bizim kodumuzla karşılaştırın; tırnak işaretleri gibi sözdiziminin herhangi bir parçasının eksik olmadığından emin olun. Resim dosyası adının doğru olduğundan emin olun.

Resim çok büyükse ve bu yüzden ekrana sığmıyorsa endişelenmeyin. Bu sorunu bir sonraki makalede düzelteceğiz.

> [!NOTE]
> Resimler için `alt` özniteliğini çeşitli durumlarda kullanma hakkında daha fazla bilgiyi [erişilebilir multimedya eğitimimizde](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia) ve [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) ("Bir alt Karar Ağacı") sayfasında bulabilirsiniz.

### Metni İşaretlemek

Bu bölümde, metni işaretlemek için kullanacağınız bazı temel HTML öğeleri ele alınacaktır.

> [!NOTE]
> Scrimba'nın [The basics of semantic HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn) ("Anlamsal HTML'in temelleri") <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> dersi, HTML'in özellikle _anlamsal_ (semantic) yönünün neden önemli olduğunu vurgulayarak yararlı bir açıklamasını sunan etkileşimli bir derstir.

#### Başlıklar

Başlık öğeleri, içeriğinizin belirli bölümlerinin başlık — ya da alt başlık — olduğunu belirtmenize olanak tanır. Bir kitabın ana başlığı, bölüm başlıkları ve alt başlıkları olduğu gibi, bir HTML belgesinde de bunlar olabilir. HTML'de 6 başlık düzeyi vardır: [`<h1>–<h6>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements); ancak genellikle en fazla 3 ila 4 tanesini kullanırsınız:

```html
<!-- 4 heading levels: -->
<h1>My main title</h1>
<h2>My top level heading</h2>
<h3>My subheading</h3>
<h4>My sub-subheading</h4>
```

> [!NOTE]
> HTML'de `<!--` ile `-->` arasındaki her şey bir **HTML yorum satırıdır** (comment). Tarayıcı, kodu işlerken yorum satırlarını yok sayar. Başka bir deyişle, bunlar sayfada görünmez — yalnızca kodda görünür. HTML yorum satırları, kodunuz veya mantığınız hakkında not eklemenin bir yoludur; bu notlar aynı kod üzerinde çalışan başkaları için ya da 6 ay sonra koda geri döndüğünüzde ne yaptığınızı hatırlayamayan sizin için yararlı olabilir.

Sayfa başlığınızı HTML sayfasına, [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) öğenizin hemen üstüne, `<h1> ... </h1>` etiketleri içine sarmalanmış olarak ekleyin. Dosyayı kaydedin ve etkisini görmek için bir tarayıcıda görüntüleyin.

#### Paragraflar

Paragraf [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) öğeleri metin paragraflarını barındırmak içindir; normal metin içeriğini işaretlerken bunları sıklıkla kullanacaksınız:

```html
<p>This is a single paragraph</p>
```

Önceki makaledeki örnek metninizi bir ya da birkaç paragraf içine ekleyin ve bunları doğrudan [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) öğenizin altına yerleştirin. Kaydedin ve sayfanıza bir tarayıcıda bakın.

#### Listeler

Web içeriğinin büyük bir kısmı listelerden oluşur ve HTML'de bunlar için özel öğeler vardır. Listeleri işaretlemek her zaman en az 2 öğeden oluşur. En yaygın liste türleri sıralı ve sırasız listelerdir:

1. **Sırasız listeler** (unordered lists), alışveriş listesi gibi, öğelerin sırasının önemli olmadığı listeler içindir. Bunlar bir [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) öğesi içine sarmalanır.
2. **Sıralı listeler** (ordered lists), bir yemek tarifindeki pişirme talimatları listesi gibi, öğelerin sırasının önemli olduğu listeler içindir. Bunlar bir [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol) öğesi içine sarmalanır.

Listelerin içindeki her bir öğe, bir [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) (list item — liste öğesi) öğesinin içine konur.

Örneğin, aşağıdaki paragraf parçasının bir kısmını listeye dönüştürmek isteseydik:

```html
<p>
  At Mozilla, we're a global community of technologists, thinkers, and builders
  working together…
</p>
```

İşaretlemeyi şu şekilde değiştirebilirdik:

```html
<p>At Mozilla, we're a global community of</p>

<ul>
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together…</p>
```

Örnek sayfanıza sıralı ya da sırasız bir liste eklemeyi deneyin ve sonucu bir tarayıcıda görüntüleyin.

### Bağlantı Oluşturmak

Bağlantılar (links) çok önemlidir — web'i web yapan onlardır! Bir bağlantı eklemek için, "anchor" ("çapa") kelimesinin kısaltması olan "a" ile adlandırılan bir [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) öğesi kullanmamız gerekir. Paragrafınızdaki bir metni bağlantıya dönüştürmek için şu adımları izleyin:

1. Bir metin seçin. Biz "Mozilla Manifesto" ("Mozilla Manifestosu") metnini seçtik.
2. Metni aşağıda gösterildiği gibi bir [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) öğesi içine sarmalayın:

   ```html
   <a>Mozilla Manifesto</a>
   ```

3. [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) öğesine aşağıda gösterildiği gibi bir `href` özniteliği verin:

   ```html
   <a href="">Mozilla Manifesto</a>
   ```

4. Bu özniteliğin değerini, bağlantının yönlendirmesini istediğiniz web adresiyle doldurun:

   ```html
   <a href="https://www.mozilla.org/en-US/about/manifesto/">
     Mozilla Manifesto
   </a>
   ```

Web adresinin başındaki, _protokol_ (protocol) adı verilen `https://` veya `http://` kısmını atlarsanız beklenmedik sonuçlarla karşılaşabilirsiniz. Bir bağlantı oluşturduktan sonra, sizi gitmek istediğiniz yere yönlendirdiğinden emin olmak için ona tıklayın.

> [!NOTE]
> `href` ilk bakışta bir öznitelik adı için oldukça anlaşılmaz bir seçim gibi görünebilir. _**h**ypertext **ref**erence_ (hiper metin referansı) ifadesinin kısaltmasıdır.

Henüz eklemediyseniz şimdi sayfanıza bir bağlantı ekleyin.

### Sonuç

Bu makaledeki tüm talimatları izlediyseniz, sonunda aşağıdakine benzeyen bir sayfa elde etmelisiniz ([buradan görüntüleyebilirsiniz](https://mdn.github.io/beginner-html-site/) de):

![Bir Firefox logosu, "Mozilla is cool" yazan bir başlık ve iki paragraf dolgu metni gösteren bir web sayfası ekran görüntüsü](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/creating_the_content/finished-test-page-small.png)

Takılırsanız, çalışmanızı her zaman GitHub'daki [tamamlanmış örnek kodumuzla](https://github.com/mdn/beginner-html-site/blob/main/index.html) karşılaştırabilirsiniz.

Burada HTML'in gerçekten yalnızca yüzeyine dokunduk. Kursun ilerleyen bölümlerinde, [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) ("HTML ile içeriği yapılandırmak") Temel (Core) modülümüzde çok daha fazlasını öğreneceksiniz.

### Ayrıca Bakınız

- **[Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>**: [Scrimba'nın](https://scrimba.com?via=mdn) _Learn HTML and CSS_ ("HTML ve CSS Öğrenin") kursu, bilgili eğitmenlerin sunduğu eğlenceli etkileşimli dersler ve alıştırmalarla, beş harika proje oluşturup yayınlayarak size HTML ve CSS'i öğretir.

---

## 8. CSS: İçeriği Biçimlendirmek (CSS: Styling the content)

**Kaynak:** [CSS: Styling the content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)

CSS (Cascading Style Sheets — Basamaklı Stil Sayfaları), web içeriğini biçimlendiren koddur. Bu makale size CSS'i temel düzeyde anlamanız için — nasıl çalıştığını ve bir önceki makalede oluşturduğunuz içerik yapısının görünümünü ve hissini nasıl iyileştirebileceğinizi — adım adım yol gösteriyor.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine, web sitesi oluşturmak için kullanacağınız temel yazılımlara ve dosya sistemlerine temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>CSS'in amacı ve işlevi.</li>
          <li>CSS sözdiziminin temel parçaları — kural kümeleri (rulesets), seçiciler (selectors), bildirimler (declarations), özellikler (properties), özellik değerleri (property values).</li>
          <li>Kutu modeli (box model), renkleri ve yazı tiplerini değiştirme ve HTML öğelerini konumlandırma dahil olmak üzere yaygın CSS işlevleri.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### CSS nedir?

HTML gibi CSS de bir programlama dili değildir. Bir işaretleme dili (markup language) de değildir. **CSS bir stil sayfası dilidir (style sheet language).** CSS, HTML öğelerini (elements) biçimlendirmek için kullanılır: biçimlendirmek istediğiniz öğeleri seçer ve bu öğelerin nasıl görüneceğini tanımlayan stil özelliklerine değerler atarsınız.

[İçeriği oluşturmak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) makalesindeki temel HTML örneğine yeniden göz atalım:

```html
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Bu kod tek başına şöyle görüntülenir:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Karışıma biraz CSS eklersek HTML'in görünümünü değiştirebiliriz. Aşağıdaki kod parçası [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) öğesini seçer ve ona farklı bir [yazı tipi](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-family) ile kırmızı bir metin rengi ([`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)) verir. Ardından tüm [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) öğelerini seçer ve her birine yeşilimsi sarı bir arka plan rengi ([`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)), 1 piksellik düz siyah bir kenarlık ([`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border)) ve 5 piksellik bir [alt dış boşluk (bottom margin)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/margin-bottom) verir:

```css
p {
  font-family: sans-serif;
  color: red;
}

li {
  background-color: greenyellow;
  border: 1px solid black;
  margin-bottom: 5px;
}
```

CSS, HTML'e uygulandığında örnek artık şöyle görüntülenir:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Gördüğünüz gibi, yalnızca biraz CSS ile sade görünümlü bir listenin görünümünü değiştirebildik.

CSS'in, arka plan resimleri ve renk geçişleri (gradients) belirlemekten tipografiyi ve kaydırma davranışını kontrol etmeye, animasyonlar eklemekten tüm web sayfası düzenlerini oluşturmaya kadar daha birçok işlevi vardır.

### CSS'i HTML'inize uygulamak

CSS kullanırken doğru yapmanız gereken ilk şey, CSS'inizin HTML'inize başarıyla uygulandığından emin olmaktır. Bu bölümde `first-website` klasörünüze bir CSS **stil sayfası (stylesheet)** ekleyecek ve onu sayfanıza uygulayacağız.

1. `first-website` klasörünüzün içinde `styles` adında yeni bir klasör daha oluşturun.
2. Bir metin düzenleyici (text editor) kullanarak aşağıdaki CSS'i yeni bir dosyaya yapıştırın; bu kod `<p>` öğelerinize kırmızı bir metin rengi verecektir. Stil sayfanızın HTML'inize doğru şekilde uygulanıp uygulanmadığını test etmek için bunun gibi bir şeyle başlamak faydalıdır.

   ```css
   p {
     color: red;
   }
   ```

3. Dosyayı `styles` klasörüne `style.css` dosya adıyla kaydedin.
4. `index.html` dosyanızı açın. Aşağıdaki satırı HTML head bölümünün içine ([`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head) ve `</head>` etiketleri arasına) yapıştırın:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. `index.html` dosyasını kaydedin ve tarayıcınızda yükleyin. Şuna benzer bir şey görmelisiniz:

![Bir Mozilla logosu ve birkaç paragraf. Paragraf metni CSS'imiz tarafından kırmızı renkte biçimlendirilmiş.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/styling_the_content/website-screenshot-styled.png)

Paragraf metniniz kırmızıysa tebrikler! CSS'iniz çalışıyor. Değilse, yukarıdaki adımları gözden geçirin ve her birini doğru şekilde uygulayıp uygulamadığınızı dikkatlice kontrol edin.

### CSS sözdiziminin temelleri

Önceki CSS örneğinde `p`'ye **seçici (selector)** denir — biçimlendirilecek öğe(ler)i seçer. Özellikle, `p` HTML'deki tüm paragrafları seçer. Süslü parantezlerin (`{ }`) içindeki satıra **bildirim (declaration)** denir – belirli bir özellik için bir değer atar. Bu örnekte **özellik (property)**, paragrafların metin rengini kontrol eden `color`'dır; atanan **özellik değeri (property value)** ise `red`'dir.

Yapının tamamına **kural kümesi (ruleset)** denir. (_Kural kümesi_ terimi çoğu zaman kısaca _kural_ (_rule_) olarak da anılır.)

Bu kez birden fazla bildirim içeren başka bir kural kümesine bakalım:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

Bir kural kümesi içinde, bir bildirimi bir sonrakinden ayırmak için noktalı virgül (`;`) kullanmanız gerekir. Her bildirimin içinde ise özelliği ve değerini birbirinden ayırmak için iki nokta üst üste (`:`) kullanmanız gerekir.

Birden fazla öğeyi seçmek için tek bir kurala, virgülle ayrılmış birden fazla seçici de ekleyebilirsiniz. Örneğin:

```css
p,
.my-class,
#my-id {
  color: red;
}
```

Bu CSS kuralına, belirli bir HTML öğesini seçen bir **öğe** (veya **tür** (**type**)) seçicisi ekledik. Ayrıca bu eğitimin geri kalanıyla ilgili olmayan iki farklı seçici türü daha ekledik. Bunların ne işe yaradığını merak ediyorsanız [Temel seçiciler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) rehberimize göz atın.

> [!NOTE]
> Scrimba'nın [İlk CSS satırlarınızı yazın! (Write your first lines of CSS!)](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> dersi, CSS sözdizimine faydalı ve etkileşimli bir giriş sunar.

### Metni iyileştirmek

Örneğimize dönelim ve metnin görünümünü iyileştirmek için CSS kullanalım. Sayfa için yeni bir yazı tipi belirleyecek ve farklı öğeler için bazı metin ayarlarını değiştireceğiz.

1. Önce, daha önce kaydettiğiniz [Google Fonts çıktısını](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_font) bulun. Henüz bir yazı tipi seçmediyseniz bağlantıyı izleyin ve şimdi seçin.
2. [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) öğelerini `index.html` dosyanızın [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head) bölümüne, kapanış `</head>` etiketinin hemen önüne ekleyin. Şuna benzer görünmelidirler:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Bu kod, sayfanızı Google Fonts hizmeti tarafından barındırılan ve seçtiğiniz yazı tipini yükleyen bir stil sayfasına bağlar.

3. Ardından `style.css` dosyanıza gidin ve mevcut kuralı silin. Artık paragraflarımızın kırmızı olmasını istemiyoruz.
4. Aşağıdaki satırları `style.css` dosyasına ekleyin:

   ```css
   html {
     /* px means "pixels". The base font size is now 10 pixels high */
     font-size: 10px;
     /* Replace PLACEHOLDER with the font-family property value you got from Google Fonts */
     font-family: PLACEHOLDER;
   }
   ```

   > [!NOTE]
   > CSS'te `/*` ile `*/` arasındaki her şey bir **CSS yorum satırıdır (CSS comment)** ve tarayıcı tarafından yok sayılır. CSS yorum satırları, web sayfanızın nasıl görüntülendiğini etkilemeden kodunuz veya mantığınız hakkında faydalı notlar eklemenizin bir yoludur.

5. `font-family` yer tutucu satırını, Google Fonts kodunuzdaki `font-family` satırıyla değiştirin, örneğin:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   `font-family` özelliği, HTML'inize uygulamak istediğiniz yazı tipini (veya tiplerini) belirler. Bu kural, sayfanın tamamı için genel bir temel yazı tipi ve yazı tipi boyutu tanımlar. [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html) öğesinin içindeki tüm öğeler aynı `font-size` ve `font-family` değerlerini miras alır.

6. Şimdi [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) ve [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p) öğelerimize bazı yazı tipi ve metin stilleri atayalım. Her öğe için yeni [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) değerleri belirleyeceğiz. Ayrıca başlığı [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align) kullanarak ortalayacak, gövde içeriğini daha okunabilir hâle getirmek için de paragrafların ve liste öğelerinin [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) ve [`letter-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing) değerlerini artıracağız.

   ```css
   h1 {
     font-size: 60px;
     text-align: center;
   }

   p,
   li {
     font-size: 16px;
     line-height: 2;
     letter-spacing: 1px;
   }
   ```

7. Kodunuzu kaydedin ve HTML'inizi bir tarayıcıda yükleyin (daha önceden açıksa sayfayı yenileyin). Üzerinde çalıştığınız sayfa şuna benzer görünmelidir:

   ![Bir Mozilla logosu ve birkaç paragraf. Sans-serif bir yazı tipi ayarlanmış; yazı tipi boyutları, satır yüksekliği ve harf aralığı düzenlenmiş ve sayfanın ana başlığı ortalanmış](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/styling_the_content/website-screenshot-font-small.png)

   > [!NOTE]
   > Başlığınız ve gövde metniniz için beğendiğiniz yazı tipi boyutlarını elde edene kadar `px` değerlerini ayarlamayı deneyin.

### CSS tamamen kutularla ilgilidir

CSS'i daha çok kullandıkça fark edeceğiniz bir şey, büyük bölümünün kutularla ilgili olduğudur. Bir sayfadaki HTML öğelerinin çoğu, başka kutuların üzerinde (veya yanında) duran kutular olarak düşünülebilir. Bu kutular için boyut, renk, konum vb. değerler belirleyebilirsiniz. Buna [**kutu modeli (box model)**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model) denir.

![İç içe yerleştirilmiş üç kutu. Dıştan içe doğru margin (dış boşluk), border (kenarlık) ve padding (iç boşluk) olarak etiketlenmişler](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/styling_the_content/box-model.png)

Sayfanızda yer kaplayan her kutunun şu gibi özellikleri vardır:

- [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) (iç boşluk): İçeriğin etrafındaki boşluk. Önceki örnekte bu, paragraf metninin etrafındaki boşluktur.
- [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) (kenarlık): İç boşluğun hemen dışındaki düz çizgi.
- [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) (dış boşluk): Kenarlığın dışındaki boşluk.

Bu bölümde, bazılarını daha önce gördüğünüz şu özellikleri de kullanıyoruz:

- [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width): Bir öğenin genişliği.
- [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color): Bir öğenin içeriğinin ve iç boşluğunun arkasındaki renk.
- [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color): Bir öğenin içeriğinin (genellikle metnin) rengi.
- [`text-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow): Bir öğenin içindeki metne uygulanan gölge (drop shadow).
- [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display): Bir öğenin görüntüleme modu (temelde öğenin web sayfasında nasıl göründüğünü veya yerleştirildiğini ifade eder).

Aşağıdaki bölümlerin her birinde:

1. Verilen CSS kodunu `style.css` dosyanızın en altına ekleyin.
2. Dosyayı kaydedin ve CSS'in HTML'in görüntülenmesini nasıl etkilediğini görmek için tarayıcınızı yenileyin.
3. CSS'in nasıl çalıştığını anlamanıza yardımcı olması için verilen açıklamayı okuyun.
4. Kendinizi maceraperest hissediyorsanız, sayfanızı daha da özelleştirmek için özellik değerlerini değiştirerek denemeler yapın.

### Sayfa rengini değiştirmek

Şunu ekleyin:

```css
html {
  background-color: #00539f;
}
```

Bu kural, sayfanın tamamı için bir arka plan rengi belirler. Renk kodunu, [Web siteniz nasıl görünecek?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choosing_a_theme_color) makalesinde seçtiğiniz renkle değiştirin.

### Gövdeyi (body) biçimlendirmek

Ardından şu kuralı ekleyin:

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Yukarıdaki kod, [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body) öğesinin birkaç özelliği için yeni değerler belirler. Bunları satır satır inceleyelim:

- `width: 600px;`: Bu, gövdenin her zaman 600 piksel genişliğinde olmasını zorunlu kılar.
- `margin: 0 auto;`: `margin` veya `padding` gibi bir özelliğe iki değer verdiğinizde, ilk değer öğenin üst _ve_ alt kenarını etkiler (bu örnekte `0` olarak ayarlanır); ikinci değer ise sol _ve_ sağ kenarı etkiler. `auto`, kullanılabilir yatay alanı sol ve sağ arasında eşit olarak paylaştıran özel bir değerdir.
- `background-color: #FF9500;`: Bu, öğenin arka plan rengini belirler. Projemiz, [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html) öğesi için kullanılan koyu maviyle kontrast oluşturması amacıyla `<body>` arka plan rengi olarak kırmızımsı bir turuncu kullanır.
- `padding: 0 20px 20px 20px;`: Bu, iç boşluk için dört değer belirler. Amaç, içeriğin etrafına biraz boşluk koymaktır. Bu örnekte gövdenin üstünde iç boşluk yoktur; sağda, altta ve solda ise 20 piksel vardır. Değerler sırasıyla üst, sağ, alt ve sol iç boşluğu belirler.
- `border: 5px solid black;`: Bu, kenarlığın genişliği, stili ve rengi için değerler belirler. Bu örnekte, gövdenin tüm kenarlarını çevreleyen 5 piksel genişliğinde düz siyah bir kenarlıktır.

#### Kısaltma özellikleri üzerine bir not

Birden çok özelliği tek seferde ayarlayan CSS özellik değerlerine **kısaltma özellikleri (shorthand properties)** denir. Örneğin `padding: 0 20px 20px 20px`, aşağıdaki dört özelliğe eşdeğerdir:

```css
padding-top: 0;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
```

> [!NOTE]
> Scrimba'nın [Margin/padding kısaltması (Margin/padding shorthand)](https://scrimba.com/frontend-path-c0j/~0g?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> dersi, margin ve padding kısaltmalarının kullanımını uygulamalı olarak adım adım anlatan etkileşimli bir derstir.

### Sayfanın ana başlığını konumlandırmak ve biçimlendirmek

Şimdi şunu ekleyin:

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Gövdenin üst kısmında çirkin bir boşluk olduğunu fark etmiş olabilirsiniz. Bunun nedeni, tarayıcıların `<h1>` öğesine varsayılan biçimlendirme uygulamasıdır. Bu kötü bir fikir gibi görünebilir, ancak amaç biçimlendirilmemiş sayfalar için temel bir okunabilirlik sağlamaktır. Boşluğu ortadan kaldırmak için `margin: 0;` ayarıyla tarayıcının varsayılan biçimlendirmesinin üzerine yazıyoruz.

Ardından başlığın üst ve alt iç boşluğunu 20 piksel olarak ayarlıyor ve başlık metninin rengini HTML arka plan rengiyle aynı yapıyoruz.

Son olarak `text-shadow`, öğenin metin içeriğine bir gölge uygular:

- İlk piksel değeri, gölgenin metne göre **yatay kaymasını (horizontal offset)** belirler: gölgenin yana doğru ne kadar kayacağını.
- İkinci piksel değeri, gölgenin metne göre **dikey kaymasını (vertical offset)** belirler: gölgenin aşağı doğru ne kadar kayacağını.
- Üçüncü piksel değeri, gölgenin **bulanıklık yarıçapını (blur radius)** belirler. Daha büyük bir değer, daha bulanık görünen bir gölge oluşturur.
- Dördüncü değer, gölgenin temel rengini belirler.

### Resmi ortalamak

Son olarak şu kuralı ekleyin:

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Ardından, daha iyi görünmesi için resmi ortalıyoruz. Gövde için kullandığımız `margin: 0 auto` hilesinin aynısını kullanabiliriz, ancak CSS'in çalışması için ek bir ayar gerektiren farklılıklar vardır.

[`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body) öğesi bir **blok (block)** öğedir; yani sayfada yer kaplar ve dış boşluk, iç boşluk ve diğer kutu özelliklerini kabul edebilir. Öte yandan [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) (resim) öğeleri **satır içi (inline)** öğelerdir: varsayılan olarak dış boşluk değerlerini blok öğelerin kabul ettiği şekilde kabul etmezler. Otomatik dış boşluk hilesinin bu resim üzerinde çalışması için, `display: block;` kullanarak ona blok düzeyinde bir davranış kazandırmamız gerekir.

Son olarak, resim gövdede belirlenen `width` değerinden (600 piksel) büyükse `600px` ile sınırlanmasını ve daha fazla genişlememesini sağlamak için [`max-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width) özelliğini `100%` olarak ayarlıyoruz.

> [!NOTE]
> `display: block;` ifadesini ve blok öğe ile satır içi öğe arasındaki farkları ya da `max-width: 100%;` ifadesini tam olarak anlamadıysanız çok endişelenmeyin. CSS çalışmanıza devam ettikçe bunlar daha anlamlı hâle gelecektir.

### Sonuç

Bu makaledeki tüm talimatları izlediyseniz, buna benzer görünen bir sayfanız olmalıdır:

![Ortalanmış bir Mozilla logosu, bir başlık ve paragraflar. Sayfa artık güzelce biçimlendirilmiş görünüyor: sayfanın tamamında mavi bir arka plan, ortalanmış ana içerik şeridinde ise turuncu bir arka plan var.](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/styling_the_content/website-screenshot-final.png)

[Bizim sürümümüzü buradan görüntüleyebilirsiniz](https://mdn.github.io/beginner-html-site-styled/). Takılırsanız, çalışmanızı her zaman [GitHub'daki tamamlanmış örnek kodumuzla](https://github.com/mdn/beginner-html-site-styled/blob/main/styles/style.css) karşılaştırabilirsiniz.

Bu makalede CSS'in yalnızca yüzeyine dokunduk. Kursun ilerleyen bölümlerinde, [CSS biçimlendirme temelleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) adlı Çekirdek (Core) modülümüzde çok daha fazlasını öğreneceksiniz.

### Ayrıca bakınız

- **[HTML ve CSS Öğrenin (Learn HTML and CSS)](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba** <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>: [Scrimba'nın](https://scrimba.com?via=mdn) _Learn HTML and CSS_ kursu, bilgili eğitmenlerin sunduğu eğlenceli etkileşimli dersler ve görevlerle, beş harika proje oluşturup yayınlayarak size HTML ve CSS öğretir.

---

## 9. JavaScript: Etkileşim Eklemek (JavaScript: Adding interactivity)

**Kaynak:** [JavaScript: Adding interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)

JavaScript, web sitelerine etkileşim kazandıran bir programlama dilidir. Onu neredeyse her şeyi kontrol etmek için kullanabilirsiniz — form verisi doğrulama, düğme işlevleri, oyun mantığı, dinamik biçimlendirme, animasyon güncellemeleri ve çok daha fazlası. Bu makale JavaScript'e başlamanızı sağlıyor ve ilk web sitenize bazı eğlenceli özellikler eklerken size adım adım yol gösteriyor.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine, web sitesi oluşturmak için kullanacağınız temel yazılımlara ve dosya sistemlerine temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>JavaScript'in amacı ve işlevi.</li>
          <li>Değişkenler (variables), operatörler (operators), koşullu ifadeler (conditionals), fonksiyonlar (functions) ve olaylar (events) gibi JavaScript dilinin temel kavramlarına ilişkin temel bir anlayış.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### JavaScript nedir?

[JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) tam teşekküllü bir programlama dilidir — diğer programlama dillerinde görmüş olabileceğiniz (ya da en azından duymuş olabileceğiniz) **değişkenler**, **döngüler (loops)** ve **fonksiyonlar** gibi tüm klasik programlama özelliklerini içerir.

JavaScript, web sayfalarında kullanıldığında (başka yerlerde de kullanılabilse de) genellikle şu şekilde çalışır:

- Sayılar gibi bir veya daha fazla değere ya da sayfadaki öğelere (elements) başvurular (references) alır.
- Bu değerlerle bir şey yapar; örneğin sayıları birbirine ekler.
- Daha sonra başka bir şey yapmak için kullanılabilecek bir sonuç döndürür. Örneğin, bu sayıların toplamını sayfada görüntülemek isteyebilirsiniz.

Bir örneğe bakalım. Son birkaç makalede gördüğümüz temel listenin aynısını kullanacağız:

```html
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Ayrıca, uygulandığı her öğeyi biçimlendirerek ona yeşil metin rengi ve üstü çizili bir görünümle tamamlanmış bir görev görüntüsü veren `.done` adında bir CSS sınıfı (class) tanımlayacağız. Bir sonraki adımda bu sınıfı JavaScript kullanarak `<li>` öğelerimize uygulayacağız.

```css
.done {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

Şimdi JavaScript'e geçelim. Burada önce `<li>` öğelerine olan başvuruları `listItems` adlı bir değişkende (variable) saklıyoruz. Ardından, bir liste öğesinde `done` sınıfı yoksa onu ekleyen, varsa kaldıran `toggleDone()` adlı bir fonksiyon (function) tanımlıyoruz. Son olarak liste öğeleri üzerinde (`forEach()` kullanarak) döngü kuruyor ve her liste öğesine (`addEventListener()` kullanarak) bir olay dinleyici (event listener) ekliyoruz; böylece öğeye tıklandığında `done` sınıfı açılıp kapanır (toggle) ve daha önce tanımladığımız CSS uygulanır.

```js
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
```

Yukarıdaki JavaScript'i şu anda anlamıyorsanız endişelenmeyin. JavaScript'e alışmak, HTML ve CSS'e alışmaktan daha zordur, ancak kursun ilerleyen bölümlerinde her şey daha net hâle gelecektir.

Bu örnek bir web tarayıcısında şöyle görüntülenir:

> *(MDN sayfasında bu noktada yukarıdaki kodun canlı çıktısı gösterilir.)*

Liste öğelerine birkaç kez tıklamayı deneyin ve bunun sonucunda "done" stillerinin nasıl açılıp kapandığına dikkat edin. 11 satırlık JavaScript için hiç de fena değil.

### Adım adım bir "Hello world!" örneği

JavaScript yazmaya başlamanız için, örnek web sitenize bir _Hello world!_ ("Merhaba dünya!") örneği eklerken size adım adım yol göstereceğiz. ([_Hello world!_](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program), standart tanıtım niteliğindeki programlama örneğidir.)

> [!WARNING]
> Kursumuzun geri kalanını takip etmediyseniz, [bu örnek kodu indirin](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/main) ve başlangıç noktası olarak kullanın.

1. `first-website` klasörünüzün ya da az önce indirdiğiniz örnek klasörün içinde `scripts` adında yeni bir klasör oluşturun.
2. `scripts` klasörünün içinde `main.js` adında yeni bir metin belgesi oluşturun ve kaydedin.
3. `index.html` dosyanıza gidin ve bu kodu, kapanış `</head>` etiketinin hemen önüne, yeni bir satıra girin:

   ```html
   <script async src="scripts/main.js"></script>
   ```

   Bu, CSS için kullanılan [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) öğesiyle aynı işi yapar – JavaScript'i sayfaya uygular, böylece JavaScript HTML'i (CSS ve sayfadaki diğer her şeyle birlikte) etkileyebilir.

4. Bu kodu `scripts/main.js` dosyanıza ekleyin:

   ```js
   // Store a reference to the <h1> in a variable
   const myHeading = document.querySelector("h1");
   // Update the text content of the <h1>
   myHeading.textContent = "Hello world!";
   ```

5. HTML ve JavaScript dosyalarının kaydedildiğinden emin olun, ardından `index.html` dosyasını tarayıcınızda yükleyin. Şuna benzer bir şey görmelisiniz:

![Bir Firefox logosunun üzerinde "hello world" başlığı](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/adding_interactivity/hello-world.png)

Bu örneğin nasıl çalıştığını adım adım inceleyelim.

Başlık metnini `Hello world!` olarak değiştirmek için JavaScript kullandık. Başlığa bir başvuru aldık ve onu `myHeading` adlı bir değişkende (bir değeri saklayan bir kap) sakladık. Bu, öğelere CSS uygulama şeklinize benzer – önce bir CSS seçicisi (selector) kullanarak etkilemek istediğiniz öğeleri seçer, ardından bu öğeler için istediğiniz stilleri tanımlarsınız. Her iki durumda da bir öğeye bir şey yapmak istediğinizde önce onu seçmeniz gerekir.

Bunun ardından, `myHeading` değişkeninin `textContent` özelliğinin (property) (`<h1>` öğesinin metin içeriğini temsil eder) değerini _Hello world!_ olarak ayarladık.

`//` ile başlayan satırlar JavaScript yorum satırlarıdır (comments). HTML ve CSS yorum satırlarında olduğu gibi tarayıcı bunları yok sayar; böylece kodunuzun nasıl çalıştığını açıklamaya yardımcı olacak notlar eklemeniz için bir yol sunar.

Devam edelim ve örnek sitemize bazı yeni özellikler ekleyelim.

> [!WARNING]
> Daha ileri gitmeden önce "Hello world!" kodunu `main.js` dosyanızdan silin. Silmezseniz mevcut kod, eklemek üzere olduğunuz yeni kodla çakışacaktır.

### Resim değiştirici eklemek

Bu bölümde, iki resim arasında dönüşümlü olarak geçiş yapmak için JavaScript ve [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) özelliklerini kullanacaksınız. Bu değişiklik, kullanıcı görüntülenen resme tıkladığında gerçekleşecek.

1. Örnek sitenizde yer alacak başka bir resim seçin. İdeal olarak bu resim, daha önce eklediğiniz resimle aynı boyutta ya da ona mümkün olduğunca yakın olmalıdır.
2. Bu resmi `images` klasörünüze kaydedin.
3. Aşağıdaki JavaScript kodunu `main.js` dosyanıza ekleyin; `firefox2.png` yerine ikinci resminizin adını, `firefox-icon.png`'nin geçtiği her iki yere de ilk resminizin adını yazdığınızdan emin olun.

   ```js
   const myImage = document.querySelector("img");

   myImage.addEventListener("click", () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   });
   ```

4. Tüm dosyaları kaydedin ve `index.html` dosyasını tarayıcıda yükleyin. Artık resme tıkladığınızda diğer resme dönüşmelidir.

Bu kodda, [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) öğenize bir başvuruyu `myImage` değişkeninde sakladınız. Ardından ona bir `click` olay işleyici (event handler) fonksiyonu atadınız. `<img>` öğesine her tıklandığında fonksiyon şunları yapar:

- Resmin `src` özniteliğinin (attribute) değerini alır.
- `src` değerinin orijinal resmin yoluna (path) eşit olup olmadığını kontrol etmek için bir koşullu ifade (`if...else` yapısı) kullanır:
  - Eşitse, kod `src` değerini ikinci resmin yolu ile değiştirir ve böylece diğer resmin `<img>` öğesinin içine yüklenmesini sağlar.
  - Eşit değilse (yani resim zaten değiştirilmişse), `src` değeri orijinal resmin yoluna geri döner.

> [!NOTE]
> Bu bölüm birkaç önemli terimi tanıtıyor. Temel kavramlar şunlardır:
>
> - [API](https://developer.mozilla.org/en-US/docs/Glossary/API): Bir geliştiricinin bir programlama ortamıyla etkileşim kurmasını sağlayan bir özellikler kümesi. Web API'leri (yukarıda kullandığımız DOM API özellikleri gibi) JavaScript dilinin üzerine inşa edilmiştir ve tarayıcının ve görüntülediği web sayfalarının çeşitli bölümlerini değiştirmenize olanak tanır.
> - [Olaylar (Events)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events): Tarayıcıda gerçekleşen şeyler. Web sitelerini etkileşimli hâle getirmenin anahtarıdırlar. **Olay işleyici fonksiyonları (event handler functions)** kullanarak olaylara yanıt olarak kod çalıştırabilirsiniz – bunlar, bir olay meydana geldiğinde çalışan kod bloklarıdır. En yaygın örnek, bir kullanıcı bir şeye tıkladığında tarayıcı tarafından tetiklenen [click olayıdır](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).
> - [Fonksiyonlar (Functions)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions): Yeniden kullanmak istediğiniz kodu paketlemenin bir yolu. Kodunuzu bir fonksiyonun içinde bir kez tanımlayıp istediğiniz kadar çalıştırabilirsiniz; bu da aynı kodu tekrar tekrar yazmaktan kaçınmanıza yardımcı olur. Buradaki örneğimizde, kullanıcı resme her tıkladığında çalışan bir `click` olay işleyici fonksiyonu tanımladık.
> - [Koşullu ifadeler (Conditionals)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals): Bir ifadenin `true` mu yoksa `false` mu döndürdüğünü test etmek ve her sonuca yanıt olarak farklı kod çalıştırmak için kullanılan kod yapıları. Koşullu ifadelerin çok yaygın bir biçimi `if...else` deyimidir.

### Kişiselleştirilmiş bir karşılama mesajı eklemek

Şimdi, kullanıcı siteyi ilk kez ziyaret ettiğinde sayfa başlığını kişiselleştirilmiş bir karşılama mesajı gösterecek şekilde değiştirelim. Bu karşılama mesajı [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) kullanılarak tarayıcıda saklanacak; böylece kullanıcı siteden ayrılıp daha sonra geri dönerse kişiselleştirilmiş verileri hâlâ orada olacak. Ayrıca kullanıcının mesajı değiştirebilmesi için bir yol da ekleyeceğiz.

1. `index.html` dosyasında, kapanış `</body>` etiketinin hemen önüne şu satırı ekleyin:

   ```html
   <button>Change user</button>
   ```

2. `main.js` dosyasında, aşağıdaki kodu dosyanın en altına, tam olarak yazıldığı gibi yerleştirin. Bu kod yeni düğmeye ve başlığa başvurular oluşturur ve her birini değişkenlerde saklar:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Kişiselleştirilmiş selamlamayı ayarlamak için aşağıdaki fonksiyonu ekleyin. Bu fonksiyon henüz hiçbir şey yapmayacak; onu daha sonra çağıracağız.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   `setUserName()` fonksiyonu bir [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) fonksiyonu içerir; bu fonksiyon kullanıcıdan veri girmesini ister ve kullanıcı _OK_ ("Tamam") düğmesine tıkladıktan sonra veriyi bir değişkende saklar. Bu örnekte kullanıcıdan bir ad girmesini istiyor ve bunu `myName` içinde saklıyoruz.<br /><br />

   Ardından kod, tarayıcıda veri saklamamıza ve daha sonra geri almamıza olanak tanıyan [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)'yi kullanır. `"name"` adında bir veri öğesi oluşturup saklamak ve değerini, kullanıcının girdisini içeren `myName` değişkenine ayarlamak için [`localStorage.setItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) fonksiyonunu kullanırız.<br /><br />

   Son olarak, başlığın `textContent` değerini kullanıcının saklanan adını içeren bir dizeye (string) ayarlarız.

4. Fonksiyon bildiriminden (function declaration) sonra aşağıdaki koşullu bloğu ekleyin. Bu bizim _başlatma kodumuzdur (initialization code)_ — programı başlatmak için sayfa ilk yüklendiğinde çalışır:

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Bu bloğun ilk satırı, `name` veri öğesinin `localStorage` içinde henüz saklanmış _olmadığını_ kontrol etmek için olumsuzlama operatörünü (`!` karakteriyle gösterilen mantıksal DEĞİL (logical NOT)) kullanır. Saklanmamışsa, onu oluşturmak için `setUserName()` fonksiyonu çalışır. Varsa (yani kullanıcı önceki bir ziyaretinde bir kullanıcı adı belirlemişse), saklanan adı [`localStorage.getItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) kullanarak alır ve başlığın `textContent` değerini bir dize artı kullanıcının adı olarak ayarlarız – tıpkı `setUserName()` içinde yaptığımız gibi.

5. Düğmeye bir `click` olay işleyici fonksiyonu ekleyin. Düğmeye tıklandığında `setUserName()` çalışır. Bu, kullanıcının isterse farklı bir ad saklamasına olanak tanır.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

6. Tüm dosyaları kaydedin ve `index.html` dosyasını tarayıcıda yükleyin. Hemen adınızı girmeniz istenmelidir. Bunu yaptıktan sonra adınız, kişiselleştirilmiş selamlamanın bir parçası olarak `<h1>` içinde görünecektir. Sayfayı yeniden yükledikten sonra bile kişiselleştirmenin nasıl korunduğuna dikkat edin. Yeni bir ad girmek için "Change user" ("Kullanıcıyı değiştir") düğmesine tıklayabilirsiniz.

> [!NOTE]
> [Operatör (operator)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math) terimi, bir veya daha fazla değer üzerinde bir işlem gerçekleştiren bir JavaScript dili karakterini ifade eder. Örnekler arasında `+` (değerleri toplar), `-` (bir değeri diğerinden çıkarır) ve `!` (bir değeri olumsuzlar — daha önce gördüğünüz gibi) bulunur.

### Kullanıcı adı null mı?

Örneği çalıştırıp adınızı girmenizi isteyen iletişim kutusunu (dialog box) gördüğünüzde _Cancel_ ("İptal") düğmesine basmayı deneyin. Sonuçta _Mozilla is cool, null_ yazan bir başlık elde etmelisiniz. Bunun nedeni, istemi iptal ettiğinizde değerin [`null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) olarak ayarlanmasıdır. JavaScript'te _null_, bir değerin yokluğunu temsil eden özel bir değerdir.

Ayrıca bir ad girmeden _OK_ düğmesine tıklamayı da deneyin. `myName` değişkenini boş bir dizeye ayarlamış olduğunuz için _Mozilla is cool,_ yazan bir başlık elde etmelisiniz.

Bu sorunlardan kaçınmak için, kullanıcının boş bir ad girmediğini kontrol eden başka bir koşullu ifade ekleyebilirsiniz. `setUserName()` fonksiyonunuzu şu şekilde güncelleyin:

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

İnsan diliyle bunun anlamı şudur: `myName` değişkeninin bir değeri yoksa, `setUserName()` fonksiyonunu baştan yeniden çalıştır. Bir değeri varsa (yukarıdaki ifade doğru değilse), değeri `localStorage` içinde sakla ve onu başlığın metni olarak ayarla.

### Sonuç

Bu makaledeki tüm talimatları izlediyseniz, aşağıdaki resimdekine benzer görünen bir sayfa elde etmelisiniz. [Bizim sürümümüzü de görüntüleyebilirsiniz](https://mdn.github.io/beginner-html-site-scripted/).

![Öğeler oluşturulduktan sonra HTML sayfasının son görünümü: bir başlık, büyük ve ortalanmış bir logo, içerik ve bir düğme](https://raw.githubusercontent.com/mdn/content/225dfb473cdb3c25a827e91cd3eea7d8e755073c/files/en-us/learn_web_development/getting_started/your_first_website/adding_interactivity/website-screen-scripted.png)

Takılırsanız, çalışmanızı [GitHub'daki tamamlanmış örnek kodumuzla](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) karşılaştırabilirsiniz.

Bu makalede JavaScript'in gerçekten yalnızca yüzeyine dokunduk. Kursun ilerleyen bölümlerinde, [JavaScript ile dinamik betik yazımı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) adlı Çekirdek (Core) modülümüzde çok daha fazlasını öğreneceksiniz.

### Ayrıca bakınız

- **[Scrimba: JavaScript Öğrenin (Learn JavaScript)](https://scrimba.com/learn-javascript-c0v?via=mdn)** <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>: [Scrimba'nın](https://scrimba.com?via=mdn) _Learn JavaScript_ kursu, 140'tan fazla etkileşimli kodlama görevini çözdürerek ve aralarında bir oyun, bir tarayıcı eklentisi (extension) ve hatta bir mobil uygulamanın da bulunduğu projeler oluşturtarak size JavaScript öğretir. Scrimba, bilgili eğitmenlerin sunduğu eğlenceli etkileşimli dersler içerir.
- **[JavaScript Öğrenin (Learn JavaScript)](https://learnjavascript.online/)**: Bu, web geliştiricisi olmayı hedefleyenler için mükemmel bir kaynak! Otomatik bir değerlendirme sisteminin rehberliğinde, kısa dersler ve etkileşimli testlerle JavaScript'i etkileşimli bir ortamda öğrenin. İlk 40 ders ücretsizdir. Kursun tamamı, küçük bir tek seferlik ödemeyle sunulmaktadır.

---

## 10. Web Sitenizi Yayınlamak (Publishing your website)

**Kaynak:** [Publishing your website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)

Web sitenizi oluşturan kodu yazmayı ve dosyaları düzenlemeyi bitirdiğinizde, insanların onu bulabilmesi için hepsini çevrim içi hâle getirmeniz gerekir. Bu makale, örnek web sitenizi az bir çabayla nasıl çevrim içi yayına alacağınızı açıklar.

> [!NOTE]
> Bu makaleyi takip edebilmek için yerel bilgisayarınızda bir örnek web sitesinin bulunması gerekir. Bu site en azından geçerli bir `index.html` dosyası içermelidir. Henüz yapmadıysanız, [Web siteniz nasıl görünecek?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) makalesinden başlayarak bu modüldeki önceki makaleleri çalışıp bir tane oluşturmanızı öneririz.

<table>
  <tbody>
    <tr>
      <th scope="row">Ön koşullar:</th>
      <td>
        Bilgisayarınızın işletim sistemine, web sitesi oluşturmak için kullanacağınız temel yazılımlara ve dosya sistemlerine temel düzeyde aşinalık.
      </td>
    </tr>
    <tr>
      <th scope="row">Öğrenme çıktıları:</th>
      <td>
        <ul>
          <li>Bir web sitesini yayınlamayla ilgili temel araçlar ve kavramlar — barındırma (hosting), alan adları, FTP programları.</li>
          <li>Hangi alternatif barındırma seçeneklerinin mevcut olduğu, örneğin Google App Engine, GitHub ve CodePen.</li>
          <li>GitHub Pages kullanarak bir web sitesi yayınlamak.</li>
          <li>Barındırma, nasıl satın alınacağı ve bir web sitesinin nasıl çevrim içi hâle getirileceği.</li>
          <li>Bir alan adının nasıl kaydettirileceği.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Seçenekler Nelerdir?

Bir web sitesini yayınlamak karmaşık bir konudur, çünkü bunu yapmanın pek çok yolu vardır. Bu makale olası tüm yöntemleri belgelemeye çalışmaz. Bunun yerine, yeni başlayanlar için pratik olan üç yaklaşımın avantajlarını ve dezavantajlarını açıklar. Ardından birçok okuyucu için hemen işe yarayabilecek bir yöntemi adım adım anlatır.

#### Barındırma ve Alan Adı Edinmek

İçerik ve web sitesi görünümü üzerinde daha fazla denetime sahip olmak için çoğu profesyonel/işletme, web barındırma (web hosting) ve bir alan adı (domain name) satın almayı tercih eder:

- Web barındırma, bir barındırma şirketinin [web sunucusunda (web server)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) kiralanan dosya alanıdır. Web sitesi dosyalarını web sunucusuna koyarsınız. Web sunucusu, web sitesi içeriğini web sitesi ziyaretçilerine sunar.
- [Alan adı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), insanların web sitenizi bulduğu benzersiz web adresidir; örneğin `https://www.mozilla.org` veya `https://www.bbc.co.uk`. Alan adınızı bir **alan adı kayıt kuruluşundan** (domain registrar) istediğiniz kadar yıl için kiralayabilirsiniz.

Web barındırmanızı _ve_ alan adınızı aynı şirketten alırsanız, bunlar genellikle birbirleriyle iletişim kuracak şekilde otomatik olarak yapılandırılır. Ancak bunları ayrı şirketlerden alırsanız ya da barındırmanızı farklı bir şirkete taşımak isterseniz, alan adını doğru sunucuya yönlendirmek için biraz ayar yapmanız gerekir. Bu, insanların o web adresine gittiklerinde web sitenizi görmeleri içindir. Bu işlem genellikle alan adı kayıt kuruluşunuzun web sitesine giriş yaparak ve alan adınızın [ad sunucularını (nameservers)](https://kinsta.com/blog/what-is-a-nameserver/) barındırma şirketinizin sağladığı ad sunucularına ayarlayarak yapılır.

Şirketler, dosyaları web sunucularına aktarmak için çeşitli mekanizmalar kullanır. Birçoğu birden fazla seçenek sunar; tipik seçenekler şunlardır:

- Bir sürükle-bırak arayüzü (bunun bir örneğini ileride [GitHub aracılığıyla yayınlamak](#publishing_via_github) bölümünde göreceksiniz).
- Bir [Dosya Aktarım Protokolü (File Transfer Protocol — FTP)](https://developer.mozilla.org/en-US/docs/Glossary/FTP) programı. FTP programları büyük farklılıklar gösterir, ancak genellikle barındırma şirketinizin sağladığı bilgileri (tipik olarak kullanıcı adı, parola, ana bilgisayar adı) kullanarak web sunucunuza bağlanmanız gerekir. Ardından program, yerel dosyalarınızı ve web sunucusunun dosyalarını iki pencerede gösterir ve dosyaları iki yönlü aktarmanız için bir yol sunar.
- Web sitesinin kaynak kodunu bir GitHub deposunda (repo) (aşağıya bakın) tutmak ve barındırma şirketine, kaynağı alabilmesi, gerekirse derleyebilmesi ve yayınlayabilmesi için erişim izni vermek.
- Bazı şirketler, dosyalarınızı aktarmak için kullanmanız üzere [komut satırı (command line) araçları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) sağlar.

##### Barındırma ve Alan Adı Bulmak İçin İpuçları

- MDN, belirli ticari barındırma şirketlerinin veya alan adı kayıt kuruluşlarının tanıtımını yapmaz. Barındırma şirketleri ve kayıt kuruluşları bulmak için "web hosting" ve "domain names" ifadelerini aratmanız yeterlidir. Tüm kayıt kuruluşlarında, istediğiniz alan adının müsait olup olmadığını kontrol etmenize olanak tanıyan bir özellik bulunur.
- Evinizin veya ofisinizin [internet servis sağlayıcısı](https://developer.mozilla.org/en-US/docs/Glossary/ISP) (internet service provider — ISP), küçük bir web sitesi için sınırlı bir barındırma hizmeti sunabilir. Sunulan özellikler sınırlı olacaktır, ancak ilk denemeleriniz için mükemmel olabilir.
- Ayrıca [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) ve [WordPress](https://wordpress.com/) gibi ücretsiz hizmetler de mevcuttur. Bu tür hizmetlerin kapsamı sınırlı olabilir, ancak ilk denemeler için yeterince iyidirler.

#### Çevrim İçi Bir Araç Kullanmak

Bazı araçlar web sitenizi çevrim içi yayınlamanıza olanak tanır:

- [GitHub](https://github.com/) bir "sosyal kodlama" sitesidir. Kod depolarını [Git](https://git-scm.com/) **sürüm kontrol sisteminde** (version control system) saklanmak üzere yüklemenize olanak tanır. Ardından kod projeleri üzerinde iş birliği yapabilirsiniz; sistem varsayılan olarak açık kaynaklıdır, yani dünyadaki herkes GitHub'daki kodunuzu bulabilir, kullanabilir, ondan öğrenebilir ve onu geliştirebilir. GitHub'ın, web sitesi kodunu web'de canlı olarak yayınlamanıza olanak tanıyan, [GitHub Pages](https://pages.github.com/) adlı çok kullanışlı bir özelliği vardır.
- [Netlify](https://www.netlify.com/), statik web siteleri için doğrudan GitHub deponuzdan barındırma sağlayan bir web barındırma platformudur. Ayrıca dağıtım önizlemesi (deployment preview), sunucusuz fonksiyonlar (serverless functions) ve form işleme gibi bir dizi ek özellik de sunar.
- [Fly.io](https://fly.io/), uygulamaları ve veritabanlarını kullanıcılarınıza yakın konumlarda yayınlamanıza (deploy) olanak tanıyan bir platformdur. Arka uç (backend) hizmetleri gerektiren bir web uygulamanız varsa bu daha uygundur.

Bu seçenekler genellikle ücretsizdir ve sınırlı bir özellik kümesine sahiptir.

#### CodePen Gibi Web Tabanlı Bir IDE Kullanmak

Bir web sitesi geliştirme ortamını taklit eden ve HTML, CSS ve JavaScript yazmanıza olanak tanıyan, yazdığınız kodun ardından işlenip bir çıktı panelinde görüntülendiği çeşitli web uygulamaları vardır. Genel olarak bu araçların kullanımı kolaydır; öğrenmek için harikadır, kod paylaşmak için iyidir (örneğin, farklı bir ofisteki iş arkadaşlarınızla bir tekniği paylaşmak ya da onlardan hata ayıklama yardımı istemek isterseniz) ve (temel özellikler için) ücretsizdir. İşlenmiş sayfanızı benzersiz bir web adresinde barındırırlar. Ancak özellikleri sınırlıdır ve bu uygulamalar çoğu zaman varlıklar (resimler gibi) için barındırma alanı sağlamaz.

Hangisinin sizin için en iyi sonucu verdiğini bulmak için bu örneklerden bazılarını kurcalamayı deneyin:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_MDN öğrenme ortağı_](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

### GitHub Aracılığıyla Yayınlamak

Şimdi sitenizi GitHub Pages aracılığıyla nasıl yayınlayacağınızı inceleyelim.

1. Her şeyden önce, [GitHub'a kaydolun](https://github.com/) ve e-posta adresinizi doğrulayın.
2. Ardından, dosyaları saklamak için [bir depo (repository) oluşturmanız](https://github.com/new) gerekir. Bu sayfada:
   1. _Repository name_ ("Depo adı") kutusuna _kullaniciadi_.github.io yazın; burada _kullaniciadi_ sizin kullanıcı adınızdır. Örneğin arkadaşımız Bob Smith _bobsmith.github.io_ yazardı.
   2. Sayfanın altındaki _Create repository_ ("Depo oluştur") butonuna tıklayın.
3. Sonraki sayfada _uploading an existing file_ ("mevcut bir dosyayı yüklemek") bağlantısını bulun ve ona tıklayın. Bu sizi dosya yükleme sayfasına götürmelidir.
4. Bu noktada, dosyaları GitHub deposuna yüklemek için yerel dosya sisteminizden web sayfasının üzerine sürükleyip bırakabiliyor olmalısınız. Bunu yapmak için:
   1. Bilgisayarınızda bir File Explorer/Finder penceresi açın.
   2. Dosya gezgini _ve_ web tarayıcısı pencerelerini görebildiğinizden emin olun — bunları ekranınızda yan yana konumlandırın.
   3. Dosya gezgini penceresinde örnek web sitenizi içeren klasöre gidin.
      > [!NOTE]
      > Klasörünüzde bir `index.html` dosyası bulunduğundan emin olun.
   4. Örnek web sitenizin tüm dosyalarını seçin (örneğin <kbd>Ctrl</kbd> + <kbd>A</kbd> klavye kısayolunu ya da macOS'te <kbd>Cmd</kbd> + <kbd>A</kbd> kısayolunu kullanarak).
   5. Dosyaları dosya gezgininizden GitHub sayfasındaki "Drag files here to add them to your repository" ("Dosyaları deponuza eklemek için buraya sürükleyin") bölümünün üzerine sürükleyin.
   6. Bölümün kenarlığı (border) ve metni, bırakmanın mümkün olduğunu belirtmek için değişir. Bu noktada dosyaları bırakın.
   7. Sayfanın altındaki _Commit changes_ ("Değişiklikleri commit et") butonuna tıklayın.
5. Web sitenizi çevrim içi görmek için tarayıcınızda _kullaniciadi_.github.io adresine gidin. Örneğin _chrisdavidmills_ kullanıcı adı için [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/) adresine gidin.

   > [!NOTE]
   > Web sitenizin yayına girmesi birkaç dakika sürebilir. Web siteniz hemen görüntülenmezse birkaç dakika bekleyip tekrar deneyin.

Daha fazla bilgi edinmek için [GitHub Pages Yardım](https://docs.github.com/en/pages/getting-started-with-github-pages) sayfasına bakın.

### Daha Fazla Okuma

- [Web sunucusu nedir?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Alan adlarını anlamak](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Web'de bir şey yapmanın maliyeti nedir?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website) ("Bir Web Sitesini Yayınlayın"): Codecademy'den, konuyu biraz daha ileri götüren ve bazı ek teknikler gösteren güzel bir eğitim.
