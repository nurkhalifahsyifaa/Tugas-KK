const dataPelanggan = [
    {
        nama: "Budi",
        harga: [7500, 5700]
    },
    {
        nama: "Siti",
        harga: [9600, 15000]
    },
];
const menu = [1000, 25000, 18000, 12000, 50000];

for (let i = 0; i < dataPelanggan.length; i++) {
    let nama = dataPelanggan[i].nama;
    let daftarHarga = dataPelanggan[i].harga;
    let totalHarga = 0;
    for (let j = 0; j < daftarHarga.length; j++) {
        totalHarga += daftarHarga[j];
    }

    if (totalHarga >= 20000) {
        status = "Menu Premium";
    } else {
        status = "Menu Reguler";
    }
    console.log(`Nama        : ${nama}`);
    console.log(`Total Harga : Rp${totalHarga}`);
    console.log(`Status      : ${status}`);
    console.log("");
}
