for (let i = 0; i < dataPelanggan.length; i++) {
    tampilkanLaporan(
        dataPelanggan[i].nama, 
        dataPelanggan[i].umur, 
        dataPelanggan[i].harga
    );
}
    return jumlah;
}

function tampilkanLaporan(nama, umur, daftarHarga) {
    const totalHarga = hitungTotalBelanja(daftarHarga);

    let status = "";
    if (totalHarga >= 30000) {
        status = "Selamat! Anda mendapatkan diskon.";
    } else {
        status = "Belanja lagi agar mendapat diskon";
    }

    console.log(`Nama        : ${nama}`);
    console.log(`Umur        : ${umur} tahun`);
    console.log(`Total Harga : Rp${totalHarga.toLocaleString()}`);
}

const dataPelanggan = [
    {
        nama: "Budi",
        umur: 20,
        harga: [12000], [17500]
    },
    {
        nama: "Koti",
        umur: 37,
        harga: [37800], [42500]
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

    const totalHarga = hitungTotalBelanja(daftarHarga);

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

