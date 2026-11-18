
/* ==================================
   SATHORIK - MAIN JAVASCRIPT
================================== */

"use strict";

// Elemen status aplikasi
const statusElement = document.getElementById("status");

// Tombol akses pengguna
const loginButtons = document.querySelectorAll(".login-card");

// Informasi akses
const accessMessages = {
  creator: "Akses Creator dipilih. Login khusus pembuat akan disiapkan.",
  merchant: "Akses Pedagang dipilih. Login warung akan disiapkan.",
  customer: "Akses Pembeli dipilih. Halaman belanja akan disiapkan."
};

// Fungsi respons tombol
function selectAccess(role) {

  if (!Object.prototype.hasOwnProperty.call(accessMessages, role)) {
    statusElement.textContent = "Pilihan akses tidak valid.";
    return;
  }

  statusElement.textContent = accessMessages[role];

  console.log("SATHORIK: Akses dipilih:", role);
}

// Mengaktifkan semua tombol
loginButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const selectedRole = button.dataset.role;

    selectAccess(selectedRole);

  });

});

// Pesan awal aplikasi
console.log("SATHORIK berhasil dimuat.");
console.log("Pemeriksaan JavaScript selesai.");
