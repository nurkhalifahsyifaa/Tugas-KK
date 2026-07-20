for (let i = 0; i < dataPelanggan.length; i++) {
    tampilkanLaporan(
        dataPelanggan[i].nama, 
        dataPelanggan[i].umur, 
        dataPelanggan[i].harga
    );
}
    return jumlah;
}

function tampilkanLaporan(nama, umur, harga) {
    const nama = kehadiranPelanggan(nama, "Adit");
    const umur = kehadiranPelanggan(umur, "20");
    const harga = kehadiranPelanggan(harga, "35.000");

    let status = "Baik";
    if (diskon >= 30.000) {
        status = "Selamat! Anda mendapatkan diskon.";
    } else if (tidakDiskon <= 30.000) {
        status = "Belanja lagi agar mendapat diskon";
    }

    console.log(`Nama     : ${nama}`);
    console.log(`Umur     : ${umur}`);
    console.log(`Harga    : ${harga.join(', ')}`);
    console.log();
}

const dataPelanggan = [
    {
        nama: "Budi",
        umur: 20
        harga: [12.700], [17.500]
    },
    {
        nama: "Koti",
        umur: 37
        harga: [37.800], [42.500]
    },
];

for (let i = 0; i < dataPelanggan.length; i++) {
    tampilkanLaporan(dataPelanggan[i].nama, dataPelanggan[i].harga);
}

function hitungTotalBelanja(daftarHarga) {
    let total = 0;
    for (let i = 0; i < daftarHarga.length; i++) {
        total += daftarHarga[i]; // Menjumlahkan setiap harga barang
    }
    return total;
}


function tampilkanLaporan(nama, umur, daftarHarga) {
    // Hitung total belanjaan menggunakan fungsi di atas
    const totalHarga = hitungTotalBelanja(daftarHarga);

    // KONDISI: Cek apakah total belanja >= 30.000 untuk dapat diskon
    let status = "";
    if (totalHarga >= 30000) {
        status = "Selamat! Anda mendapatkan diskon.";
    } else {
        status = "Belanja lagi agar mendapat diskon.";
    }

    // Output Laporan
    console.log(`Nama        : ${nama}`);
    console.log(`Umur        : ${umur} tahun`);
    console.log(`Daftar Item : Rp${daftarHarga.join(', Rp')}`);
    console.log(`Total Harga : Rp${totalHarga.toLocaleString()}`);
    console.log(`Status      : ${status}`);
    console.log("------------------------------------------");
}

// 3. Data Pelanggan (Nama, Umur, dan Array Harga Belanjaan)
const dataPelanggan = [
    {
        nama: "Budi",
        umur: 20,
        harga: [15000, 20000] // Total = 35.000 (Dapat Diskon)
    },
    {
        nama: "Adit",
        umur: 22,
        harga: [10000, 12000] // Total = 22.000 (Belum Diskon)
    }
];