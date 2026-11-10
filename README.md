# OUR ÉTOILE — Dashboard Data Mahasiswa & Akademik

Aplikasi dashboard admin CRUD data mahasiswa menggunakan React 19, Vite, Bootstrap 5, CSS responsif, dan jQuery untuk efek transisi tabel.

## Fitur
- Ringkasan jumlah mahasiswa Aktif, Tidak Aktif, dan Cuti.
- Tabel NIM, nama, program studi, IPK, dan status.
- Pencarian berdasarkan NIM, nama, atau program studi.
- Filter status mahasiswa.
- Tambah, edit data/nilai, dan hapus mahasiswa.
- Validasi kolom wajib, rentang IPK 0.00–4.00, dan NIM duplikat.
- Export hasil tabel yang sedang ditampilkan ke CSV.
- Data contoh disimpan sementara di React State (tanpa backend/database).
- Layout responsif desktop, tablet, dan mobile.

## Pemetaan enam materi responsi

1. **HTML Dasar & Semantik** — `main`/`header`/`aside`/`section`/`footer`, tabel, form, label, input, select, button, serta dialog modal dengan atribut aksesibilitas.
2. **CSS Styling & Responsive** — tema warna Our Étoile, layout dashboard, hover/focus, animasi modal, dan media query di `src/styles.css`.
3. **Bootstrap CSS** — Bootstrap 5 diimpor pada `src/main.jsx`; contoh class yang digunakan: `container-fluid`, `row`, `col-12`, `col-md-4`, `card`, `navbar`, `btn`, `table`, `table-responsive`, `shadow-sm`, `rounded-4`, `align-middle`, dan `text-end`.
4. **JavaScript Dasar** — variabel, array of objects pada `src/data.js`, function, `map`, `filter`, `some`, operator, dan kondisi `if/else` pada `src/App.jsx`.
5. **DOM JavaScript & jQuery** — jQuery diimpor dan dipakai untuk efek `hide()`/`fadeIn()` pada wrapper tabel; React tetap mengelola isi tabel.
6. **React JS (React 19)** — komponen, props, `useState`, `useEffect`, `useMemo`, dan CRUD reaktif.

## Cara menjalankan
Pastikan Node.js dan npm sudah terpasang.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal.

Untuk mengecek build produksi:

```bash
npm run build
npm run preview
```

## Struktur folder

```text
dashboard-mahasiswa-akademik/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── app.css
    ├── styles.css
    ├── data.js
    ├── main.jsx
    └── components/
        ├── Navbar.jsx
        ├── Sidebar.jsx
        ├── StatCard.jsx
        ├── StudentModal.jsx
        └── StudentTable.jsx
```

Catatan: data akan kembali ke data contoh saat halaman di-refresh karena penyimpanan menggunakan state/array lokal tanpa database backend.
