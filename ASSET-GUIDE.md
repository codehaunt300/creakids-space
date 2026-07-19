# PANDUAN ASSET CREAKIDS SPACE

## Struktur folder

```text
assets/
├── css/
│   └── style.css
├── js/
│   ├── content-data.js
│   └── main.js
├── images/
│   ├── logo/
│   │   └── creakids-logo.png
│   ├── hero/
│   │   ├── home-hero.jpg
│   │   ├── books-hero.jpg
│   │   ├── video-hero.jpg
│   │   ├── readaloud-hero.jpg
│   │   ├── games-hero.jpg
│   │   ├── songs-hero.jpg
│   │   └── about-hero.jpg
│   ├── books/
│   │   └── book-01.jpg ... book-16.jpg
│   ├── games/
│   │   └── game-01.jpg ... game-16.jpg
│   └── posters/
│       ├── animasi/animasi-01.jpg ... animasi-12.jpg
│       ├── readaloud/readaloud-01.jpg ... readaloud-14.jpg
│       └── lagu/lagu-01.jpg ... lagu-13.jpg
└── downloads/
    └── book-01.pdf ... book-16.pdf
```

## Ukuran desain yang direkomendasikan

| Asset | Ukuran file yang disarankan | Rasio |
|---|---:|---:|
| Logo utama | 600 × 180 px | 10:3 |
| Hero/banner halaman | 1600 × 900 px | 16:9 |
| Cover buku | 800 × 1000 px | 4:5 |
| Poster / thumbnail video | 1280 × 720 px | 16:9 |
| Preview game | 1000 × 1000 px | 1:1 |

### Catatan desain
- Gunakan JPG kualitas 75–85% untuk ukuran file yang ringan.
- Gunakan PNG untuk logo/transparansi.
- Simpan teks penting minimal 5% dari tepi gambar agar tidak terpotong.
- Untuk YouTube, thumbnail 1280×720 adalah ukuran yang paling aman.
- Untuk buku, desain 800×1000 px menjaga cover tetap tajam namun tidak terlalu berat.

## Cara mengganti gambar

Contoh:
1. Siapkan cover buku baru.
2. Rename menjadi `book-01.jpg`.
3. Timpa file `assets/images/books/book-01.jpg`.
4. Refresh browser.

Tidak perlu mengubah HTML.

Hal yang sama berlaku untuk:
- `game-01.jpg` sampai `game-16.jpg`
- poster video jika link YouTube belum diisi
- gambar hero

## Cara memasukkan link YouTube

Buka:

`assets/js/content-data.js`

Contoh:

```js
{
  title: "Dina Suka Donat",
  poster: "assets/images/posters/animasi/animasi-01.jpg",
  youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
}
```

Kamu juga bisa mengisi:

```js
youtube: "https://youtu.be/XXXXXXXXXXX"
```

atau:

```js
youtube: "XXXXXXXXXXX"
```

Website akan otomatis membuat YouTube embed.

## Cara memasukkan link website game

Di `assets/js/content-data.js`:

```js
{
  title: "Susun Benda",
  image: "assets/images/games/game-01.jpg",
  url: "https://alamat-website-game.com"
}
```

## Download buku

Tombol download sudah terhubung ke:

`assets/downloads/book-01.pdf` sampai `book-16.pdf`

Cukup ganti PDF dummy dengan PDF buku asli dan pertahankan nama filenya.


## Update v1.1.3
- Asset preview game sekarang menggunakan rasio 4:3.
- Ukuran rekomendasi: 1200 × 900 px.
- `game-01.jpg` sampai `game-16.jpg` sudah dibuat ulang dengan ukuran tersebut.
