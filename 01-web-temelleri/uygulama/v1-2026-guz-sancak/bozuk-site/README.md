> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Bozuk Site — "Olay Yeri" (Soru-Cevap ve Adli Bilişim)

**Takım:** Sancak — Getting Started Modules, 1. Grup
**Hazırlayan:** Yusuf Serhat Tümtürk (Soru-Cevap ve Adli Bilişim)
**Çalışan site:** https://serhat-92.github.io

Bu klasördeki beş site, çalışan sitemizin birebir kopyasıdır. Her birine,
siteyi geliştirirken **gerçekten yaşadığımız** bir hata yerleştirildi.
Göreviniz vizedeki gibi: kodu inceleyip hatanın **nerede** ve **neden**
olduğunu bulmak.

Her sahnede yalnızca **bir** sorun (veya bir sorun ailesi) var. Sorunlar
birbirini gizlemesin diye ayrı klasörlere konuldu.

## Sahneler

| Sahne | Klasör | Belirti |
|---|---|---|
| 1 | `1-resim-gorunmuyor/` | Resim yerine bir yazı görünüyor. |
| 2 | `2-ekrana-dusen-not/` | Sayfanın en üstünde anlamsız bir yazı var. |
| 3 | `3-sessiz-hatalar/` | Yazı tipi farklı, yazılar kenara yapışık. Konsol temiz. |
| 4 | `4-tek-hata-kac-hata/` | Ad giriliyor ama başlık değişmiyor, buton çalışmıyor. |
| 5 | `5-bazen-calisan-resim/` | Resme tıklayınca değişim bazen oluyor, bazen olmuyor. |

## Nasıl açılır?

Terminalde `bozuk-site/` klasörüne girip yerel sunucuyu başlatın:

```bash
python3 -m http.server 8000
```

Tarayıcıda `http://localhost:8000/1-resim-gorunmuyor/` gibi sahne adresini açın. VS Code kullanıyorsanız sahnenin `index.html` dosyasına sağ tıklayıp
**Live Preview: Show Preview (External Browser)** de seçebilirsiniz. Tarayıcıda **F12**
ile geliştirici araçlarını açık tutun.

Soru-Cevap (5 soru ve cevapları): [`soru-cevap/2026-guz-sancak.md`](../../../soru-cevap/2026-guz-sancak.md)
