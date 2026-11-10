# Dashboard Data Mahasiswa & Akademik

Aplikasi Dashboard Data Mahasiswa & Akademik merupakan aplikasi berbasis web yang dibuat menggunakan React JS dan Bootstrap. Aplikasi ini digunakan untuk mengelola data mahasiswa secara sederhana melalui fitur CRUD (Create, Read, Update, Delete).

## 1. Fitur Aplikasi

- Menampilkan data mahasiswa.
- Menambahkan data mahasiswa.
- Mengedit data mahasiswa.
- Menghapus data mahasiswa.
- Mencari dan memfilter data mahasiswa.
- Menampilkan statistik mahasiswa berdasarkan status Aktif, Tidak Aktif, dan Cuti.
- Menampilkan data akademik mahasiswa, termasuk IPK.
- Tampilan responsif untuk berbagai ukuran layar.

## 2. Teknologi yang Digunakan

- React JS 19
- Vite
- JavaScript
- Bootstrap 5
- CSS
- jQuery

## 3. Struktur Folder

```text
dashboard-mahasiswa-akademik/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Navbar.jsx
│   │   ├── StatCard.jsx
│   │   ├── StudentTable.jsx
│   │   └── StudentModal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── data.js
│   ├── styles.css
│   └── app.css
├── index.html
├── package.json
└── README.md
```

## 4. Persyaratan

Sebelum menjalankan aplikasi, pastikan perangkat sudah memiliki:

- Node.js dan NPM.
- Visual Studio Code atau editor kode lainnya.
- Browser seperti Google Chrome.

## 5. Cara Menjalankan Proyek

**Langkah 1 – Buka folder proyek**

Buka folder `dashboard-mahasiswa-akademik` menggunakan Visual Studio Code.

**Langkah 2 – Buka terminal**

Pilih menu Terminal → New Terminal.

**Langkah 3 – Instal dependensi**

Jalankan perintah berikut:

```bash
npm install
```

Tunggu sampai proses instalasi selesai.

**Langkah 4 – Jalankan aplikasi**

Ketik perintah:

```bash
npm run dev
```

**Langkah 5 – Buka aplikasi**

Setelah server berhasil dijalankan, terminal akan menampilkan alamat lokal, biasanya:

```text
http://localhost:5174/
```

Salin alamat tersebut dan buka melalui browser.

## 6. Cara Menggunakan Aplikasi

1. Buka halaman Dashboard Akademik.
2. Lihat ringkasan jumlah mahasiswa berdasarkan status.
3. Gunakan kolom pencarian atau filter untuk menemukan data mahasiswa.
4. Klik tombol tambah untuk memasukkan data mahasiswa baru.
5. Klik tombol edit untuk memperbarui data mahasiswa.
6. Klik tombol hapus untuk menghapus data mahasiswa.

## 7. Penyimpanan Data

Data mahasiswa dikelola menggunakan React State (`useState`). Aplikasi ini belum menggunakan database atau backend. Oleh karena itu, perubahan data hanya tersimpan selama aplikasi berjalan dan akan kembali ke data awal ketika halaman dimuat ulang.

---

**Project:** Dashboard Data Mahasiswa & Akademik  
**Framework:** React JS 19  
**Build Tool:** Vite
