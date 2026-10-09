> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Uygulama v1 — 2026 Güz · Sancak

**Konu:** 01 - Web Temelleri (MDN Getting Started → *Environment setup* + *Your first website*)
**Takım:** Sancak — Getting Started Modules, 1. Grup
**Canlı site:** https://serhat-92.github.io

## Takım ve Roller

| GitHub | İsim | Rol |
|---|---|---|
| [@Sametdemirsd](https://github.com/Sametdemirsd) | Samet Demir | Tam Çeviri ve Mimari Slayt |
| [@OrkunYasarSoner460134](https://github.com/OrkunYasarSoner460134) | Orkun Yaşar Soner | Sınıf İçi Sunum (Teori) |
| [@Serhat-92](https://github.com/Serhat-92) | Yusuf Serhat Tümtürk | Uygulama (Canlı Kod) + Soru-Cevap (QA) ve Adli Bilişim |

## Ne yaptık?

MDN'nin *Your first website* modülündeki siteyi adım adım kurduk ve GitHub Pages ile yayınladık:

- **HTML** (`index.html`): başlık, resim, paragraf, liste, bağlantı ve buton.
- **CSS** (`styles/style.css`): Google Fonts (Roboto), ortalanmış kart düzeni, `max-width` ile telefona uyum.
- **JavaScript** (`scripts/main.js`):
  1. Resme tıklayınca iki resim arasında geçiş.
  2. Kullanıcının adını sorup `localStorage`'a kaydetme ve başlığa yazma. MDN'nin kodunda İptal'e basınca pencere sürekli açılıyor; biz `return` ile bu hatayı düzelttik.
- **Optimizasyon:** Resimler 4K (3840x2160) yerine 1200 piksele küçültüldü (`kali-glitch.jpg` 2,4 MB → 204 KB). Yayındaki "bazen değişmeyen resim" sorunu bu şekilde çözüldü.

## Klasör yapısı

```
v1-2026-guz-sancak/
├── README.md
├── index.html
├── styles/style.css
├── scripts/main.js
├── images/            ← kali-cubes.jpg, kali-glitch.jpg (1200x675)
└── bozuk-site/        ← Soru-Cevap için 5 "olay yeri" sahnesi
```

## Nasıl çalıştırılır?

```bash
cd v1-2026-guz-sancak
python3 -m http.server 8000
```

Tarayıcıda `http://localhost:8000/` adresini açın. VS Code kullanıyorsanız `index.html`'e sağ tıklayıp **Live Preview: Show Preview** de seçebilirsiniz.

## Bozuk site — Soru-Cevap uygulaması

`bozuk-site/` klasörü bu sitenin **5 bozuk kopyasından** oluşur. Her birine, siteyi geliştirirken **gerçekten yaşadığımız** bir hata yerleştirildi. Öğrenciler sahneyi tarayıcıda açar, **F12 geliştirici araçlarıyla** delil toplar (Elements, Console, Network) ve hatanın **nerede** ve **neden** olduğunu bulur.

| Sahne | Hata |
|---|---|
| [`1-resim-gorunmuyor/`](bozuk-site/1-resim-gorunmuyor/) | Göreli dosya yolu (`images/` eksik) |
| [`2-ekrana-dusen-not/`](bozuk-site/2-ekrana-dusen-not/) | HTML'de `/* */` yorum |
| [`3-sessiz-hatalar/`](bozuk-site/3-sessiz-hatalar/) | `rel="styleesheet"` + `padding: 0 auto` |
| [`4-tek-hata-kac-hata/`](bozuk-site/4-tek-hata-kac-hata/) | `localStorge`, `StoredName`, `MyButton` |
| [`5-bazen-calisan-resim/`](bozuk-site/5-bazen-calisan-resim/) | Kod doğru, resim 4K / 2,4 MB (Soru-Cevap'taki Soru 5) |

Ayrıntılar: [`bozuk-site/README.md`](bozuk-site/README.md) · Açmak için: `http://localhost:8000/bozuk-site/`

## İlgili dosyalar

- Çeviri (10 MDN makalesinin birebir çevirisi): [`ceviri/2026-guz-sancak.md`](../../ceviri/2026-guz-sancak.md)
- Sunum: [`sunum/2026-guz-sancak.pdf`](../../sunum/2026-guz-sancak.pdf)
- Soru-Cevap (5 soru ve cevapları): [`soru-cevap/2026-guz-sancak.md`](../../soru-cevap/2026-guz-sancak.md)
