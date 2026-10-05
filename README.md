# 🚀 Web Programlama I — Sistem Mimarları Operasyon Merkezi

SCÜ Şarkışla UBYO | Bilişim Sistemleri ve Teknolojileri Bölümü

Bu depo, Web Programlama I dersinin resmi **"Çevik (Agile) Operasyon Merkezi"**dir. Dönem boyunca tüm çeviriler, sunumlar, uygulama kodları ve soru-cevap dokümanları bu depo üzerinden, açık kaynak (open-source) sektör standartlarına uygun olarak yönetilecektir.

> **📌 Kısa Özet:** Fork'la → Kendi kopyanda çalış → PR aç → Denetimden geç → Merge. Detaylar aşağıda.

---

## 📂 Depo Yapısı

Depo **konu bazlı** klasörlerden oluşur. Her konu klasöründe **4 içerik türü** bulunur:

```
web-programlama1/
│
├── README.md                        ← bu dosya
│
├── 01-web-temelleri/                ← KONU 1
│   ├── ceviri/
│   │   ├── 2026-guz-kodbucuk.md
│   │   └── 2027-guz-yenitakim.md
│   ├── sunum/
│   │   ├── 2026-guz-kodbucuk.pdf
│   │   └── 2027-guz-yenitakim.pdf
│   ├── uygulama/
│   │   ├── v1-2026-kodbucuk/
│   │   │   ├── main.js
│   │   │   └── README.md
│   │   └── v2-2027-yenitakim/
│   │       ├── main.js
│   │       └── README.md
│   └── soru-cevap/
│       ├── 2026-guz-kodbucuk.md
│       └── 2027-guz-yenitakim.md
│
├── 02-dom/                          ← KONU 2
│   └── (aynı yapı)
│
├── 03-ileri-js/                     ← KONU 3
├── ...
└── 14-threejs/                      ← KONU 14
```

**3 Katmanlı Yapı:**

| Katman | Ne? | Örnek |
|---|---|---|
| **1. Konu** | Müfredat başlığı (sabit) | `01-web-temelleri/` |
| **2. İçerik Türü** | Çeviri / Sunum / Uygulama / Soru-Cevap | `ceviri/` |
| **3. Versiyon** | Yıl + Takım Adı | `2026-guz-kodbucuk.md` |

---

## 📝 Dosya İsimlendirme Kuralları

### Çeviri, Sunum, Soru-Cevap için:

```
YIL-DONEM-TAKIMADI.uzanti
```

**Örnekler:**
- `2026-guz-kodbucuk.md`
- `2027-guz-yenitakim.pdf`
- `2028-guz-alfakubernetes.md`

### Uygulama için:

```
vVERSIYON-YIL-DONEM-TAKIMADI/
```

**Örnekler:**
- `v1-2026-kodbucuk/`
- `v2-2027-yenitakim/`

> ⚠️ **Neden yıl + takım adı?** Çünkü aynı konu her yıl farklı takımlar tarafından işlenir. Yıl ve takım adı olmadan dosyalar karışır.

---

## 🔄 İş Akışı: Görevler Sisteme Nasıl Yüklenir?

Sektördeki gerçek yazılım ekipleri nasıl çalışıyorsa, biz de öyle çalışacağız. Bu depoya **doğrudan dosya yükleme (Push) yetkiniz yoktur.** Görevlerinizi "Fork & Pull Request" akışıyla teslim edersiniz.

### Adım 1: Projeyi Kopyalayın (Fork)

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın.
2. "Create Fork" diyerek bu deponun kopyasını kendi GitHub profilinizde oluşturun.

### Adım 2: Kendi Kopyanızda Çalışın

1. Kendi profilinizdeki kopyaya gidin.
2. Bilgisayarınıza indirin (`git clone`) veya doğrudan GitHub arayüzünden dosya ekleyin.
3. **Doğru klasöre gidin** ve dosyanızı ekleyin.

**📁 Nereye Koyacağım? (Karar Ağacı)**

```
Hangi konuyu işliyorum?
  → 01-web-temelleri/ (veya 02-dom/, 03-ileri-js/...)

Hangi tür dosya hazırlıyorum?
  → Çeviri ise: ceviri/
  → Sunum ise: sunum/
  → Uygulama ise: uygulama/
  → Soru-cevap ise: soru-cevap/

Dosya ismim ne olacak?
  → YIL-DONEM-TAKIMADI.md (örn: 2026-guz-kodbucuk.md)
```

### Adım 3: Katkı Talebi (Pull Request) Gönderin

1. Kendi fork'unuzda işinizi bitirin (**Commit & Push**).
2. Kendi deponuzun ana sayfasına gelin.
3. **"Contribute"** → **"Open Pull Request"** seçin.
4. **Hedef:** `mesutpolatgil/web-programlama1` → `main` dalı
5. **PR Başlığı:** `Hafta XX - [Takım Adı] Teslimi`
   - Örnek: `Hafta 03 - KodBucuk Teslimi`
6. **Açıklama:** Kısaca ne yaptığınızı yazın (3-5 satır).

### Adım 4: Denetim (Code Review)

1. PR açtığınızda **QA takımına** bildirim gider.
2. QA takımı 48 saat içinde PR'ınızı inceler.
3. Eksik veya hatalı yerler varsa **PR üzerinden yorum** yapılır.
4. Gerekli düzeltmeleri yaptıktan sonra tekrar push edin.
5. **Hoca veya asistan** nihai onayı verir ve PR merge edilir.

> ⚠️ **3 tur düzeltmeden sonra hâlâ eksikse** PR reddedilir ve takım o hafta **0 alır.**

---

## 💬 Commit Mesajı Formatı

```
hafta-XX: [TakımAdı] kısa açıklama
```

**Örnekler:**
```
hafta-03: KodBucuk ceviri eklendi
hafta-03: KodBucuk slayt guncellendi
hafta-03: KodBucuk uygulama kodlari eklendi
```

> ❌ **Kabul edilmeyen:** `asdf`, `update`, `değişiklik`, `final`, `son hali`

---

## ✅ PR Öncesi Kontrol Listesi

PR açmadan önce şunları kontrol edin:

- [ ] Doğru konu klasöründe miyim? (`01-web-temelleri/` gibi)
- [ ] Doğru içerik türünde miyim? (`ceviri/`, `sunum/`, `uygulama/`, `soru-cevap/`)
- [ ] Dosya ismi doğru formatta mı? (`2026-guz-takimadi.md`)
- [ ] Uygulama klasöründe `README.md` var mı?
- [ ] Çeviri dosyasının başında **yasal uyarı** var mı?
- [ ] Commit mesajı standart formatta mı?
- [ ] PR başlığı formatı doğru mu?
- [ ] Başka takımın dosyasına **dokunmadım**, değil mi?

---

## 📎 Örnek Teslim

**Senaryo:** 3. hafta, "KodBucuk" takımı, "İleri JS" konusu.

**Ekleyeceği dosyalar:**

```
03-ileri-js/
  ├── ceviri/
  │   └── 2026-guz-kodbucuk.md
  ├── sunum/
  │   └── 2026-guz-kodbucuk.pdf
  ├── uygulama/
  │   └── v1-2026-kodbucuk/
  │       ├── main.js
  │       └── README.md
  └── soru-cevap/
      └── 2026-guz-kodbucuk.md
```

**Commit mesajları:**
```
hafta-03: KodBucuk ceviri eklendi
hafta-03: KodBucuk slayt eklendi
hafta-03: KodBucuk uygulama kodlari eklendi
```

**PR başlığı:**
```
Hafta 03 - KodBucuk Teslimi
```

---

## 📅 Teslim Kuralları

| Kural | Detay |
|---|---|
| **Deadline** | Sunumdan önceki **Cuma 23:59** |
| **Geç Teslim** | 24 saat içinde %20 kırılır, sonrası kabul edilmez |
| **PR Hedefi** | `main` dalı |
| **PR Başlığı** | `Hafta XX - [Takım Adı] Teslimi` |
| **Commit Formatı** | `hafta-XX: TakimAdi ne-yaptim` |

---

## 📜 Yasal Uyarı ve Telif

Bu depo altındaki içerikler **eğitim amacıyla** hazırlanmaktadır.

Öğrenci takımları tarafından hazırlanan **tüm çeviri dosyalarının en üstünde** şu ibare yer almak zorundadır:

> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

**Yasal uyarı olmayan çeviri PR'ları reddedilir.**

---

## 🎯 İlk Göreviniz

1. **Takım kurun** (3-4 kişi, sınıf temsilcisi koordine eder).
2. **Konu seçin** (14 modülden biri).
3. **GitHub Issues** sekmesinde, sınıf temsilcisinin açtığı *"Dönem İçi Konu Dağılım Listesi"* başlığı altına **yorum olarak** yazın.
4. İlk sunumunuzdan önceki **Cuma 23:59**'a kadar ilk PR'ınızı açın.

---

## 📞 İletişim

- **Teknik sorular:** GitHub Discussions (WhatsApp değil!)
- **Acil durumlar:** [Hoca/Asistan e-posta]
- **PR incelemesi:** QA takımı + hoca

---

Tüm takımlara mühendislik simülasyonunda başarılar dilerim.
**Kodunuz bug'sız, render'ınız pürüzsüz olsun!**
