const dataPelanggan = [
    { nama: "Budi", umur: 20, harga: [12000, 17500] }, 
    { nama: "Boti", umur: 37, harga: [37800, 42500] }
];
for (let i = 0; i < dataPelanggan.length; i++) {
    let totalHarga = 0;
    for (let j = 0; j < dataPelanggan[i].harga.length; j++) {
        totalHarga += dataPelanggan[i].harga[j]; 
    }
    let status = "";
    if (totalHarga >= 30000) {
        status = "Selamat! Anda mendapatkan diskon.";
    } else {
        status = "Belanja lagi agar mendapat diskon.";
    }
    console.log(`Nama        : ${dataPelanggan[i].nama}`);
    console.log(`Umur        : ${dataPelanggan[i].umur}tahun`);
    console.log(`Total Harga : Rp${totalHarga.toLocaleString()}`);
    console.log(`Status      : ${status}`);
    console.log("");
}