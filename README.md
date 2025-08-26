# Portal Administrasi Desa Rawarengas Gemilang

## 🚀 Cara Setup

1. **Upload ke GitHub Pages**
   - Push semua file ini ke repo GitHub → aktifkan Pages.

2. **Buat Firebase Project**
   - Buka https://console.firebase.google.com/
   - Buat Project → Tambah Web App → salin konfigurasi ke `assets/firebase-config.js`.

3. **Aktifkan Authentication**
   - Authentication → Sign-in method → Email/Link (passwordless).

4. **Aktifkan Firestore**
   - Mode Production.
   - Buat koleksi `penduduk`.
   - Tambahkan dokumen dengan field:
     - `nik` (string)
     - `nama` (string)
     - `email` (string)
     - `aktif` (boolean)

5. **Security Rules**
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /penduduk/{userId} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

6. **Login**
   - Buka `portal.html` → masukkan email → cek inbox → klik link login.
   - Jika email ada di koleksi `penduduk` → status **Warga Terdaftar**.
   - Jika tidak → status **Tamu Domisili**.

## 🆓 Gratis
- GitHub Pages: hosting gratis.
- Firebase Spark Plan: gratis (10.000 login/bulan, 50.000 dokumen/bulan).
