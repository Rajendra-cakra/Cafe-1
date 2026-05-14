

/* ═══════════════════════════════════════════════════════════════
   FILE: menu.js
   FUNGSI: Mengatur pergantian tab di section menu
   
   Cara kerja:
   1. Saat halaman selesai dimuat (DOMContentLoaded), script ini
      mencari semua tombol tab dan semua panel konten
   2. Saat salah satu tombol diklik, script akan:
      a. Menghapus class "active" dari semua tombol dan panel
      b. Menambahkan class "active" ke tombol yang diklik
      c. Menambahkan class "active" ke panel yang sesuai
         (dicocokkan via atribut data-target di tombol)
═══════════════════════════════════════════════════════════════ */
 
/* Tunggu sampai seluruh HTML selesai dimuat sebelum menjalankan JS.
   Ini penting agar elemen-elemen HTML sudah ada saat kita cari. */
document.addEventListener('DOMContentLoaded', function () {
 
    /* ── Ambil semua tombol tab ──
       querySelectorAll mengembalikan NodeList (mirip array)
       dari semua elemen yang cocok dengan selector ".mn-tab-btn" */
    const tabButtons = document.querySelectorAll('.mn-tab-btn');
 
    /* ── Ambil semua panel konten ──
       Setiap panel punya ID yang cocok dengan data-target tombol */
    const tabPanels = document.querySelectorAll('.mn-panel');
 
    /* ── Pasang event listener di setiap tombol tab ──
       forEach memungkinkan kita iterasi setiap tombol */
    tabButtons.forEach(function (button) {
 
        button.addEventListener('click', function () {
 
            /* ── Langkah 1: Reset semua tombol ──
               Hapus class "active" dari SEMUA tombol tab */
            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
 
            /* ── Langkah 2: Reset semua panel ──
               Hapus class "active" dari SEMUA panel konten
               (efeknya: semua panel tersembunyi via CSS display:none) */
            tabPanels.forEach(function (panel) {
                panel.classList.remove('active');
            });
 
            /* ── Langkah 3: Aktifkan tombol yang diklik ──
               "this" merujuk ke tombol yang baru saja diklik */
            this.classList.add('active');
 
            /* ── Langkah 4: Ambil target panel dari atribut HTML ──
               Setiap tombol punya atribut: data-target="mn-bestseller" (misalnya)
               getAttribute membaca nilai atribut tersebut */
            const targetId = this.getAttribute('data-target');
 
            /* ── Langkah 5: Temukan panel yang sesuai dan aktifkan ──
               getElementById mencari elemen berdasarkan ID-nya
               Lalu tambahkan class "active" agar panel terlihat */
            const targetPanel = document.getElementById(targetId);
 
            /* Cek keamanan: pastikan panel ditemukan sebelum diaktifkan */
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
 
            /* ── Bonus: Scroll halus ke section menu ──
               Saat tab diklik, tampilan langsung fokus ke menu
               Ini berguna kalau pengguna sedang scroll jauh ke bawah */
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                /* scrollIntoView dengan behavior smooth artinya
                   scroll animasi (tidak langsung loncat) */
                menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
 
        }); /* akhir addEventListener */
 
    }); /* akhir forEach tombol */
 
}); /* akhir DOMContentLoaded */
 
 
/* ═══════════════════════════════════════════════════════════════
   PENJELASAN SINGKAT ALUR KERJA:
 
   HTML:  <button class="mn-tab-btn active" data-target="mn-bestseller">
   CSS:   .mn-tab-btn.active  → garis bawah & teks terang
          .mn-panel           → display: none  (tersembunyi)
          .mn-panel.active    → display: block (terlihat + animasi fadeIn)
   JS:    Saat klik → hapus semua "active" → tambah "active" ke
          tombol yang diklik + panel yang sesuai (via data-target)
 
   Jadi 3 file ini bekerja bersama:
   - index.html  → STRUKTUR (kerangka halaman)
   - cek.css     → TAMPILAN (warna, ukuran, animasi)
   - menu.js     → LOGIKA   (pergantian tab saat diklik)
═══════════════════════════════════════════════════════════════ */
        const burger = document.getElementById('burger');
        const drawer = document.getElementById('drawer');
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            drawer.classList.toggle('open');
        });
        function closeDrawer() {
            burger.classList.remove('open');
            drawer.classList.remove('open');
        }