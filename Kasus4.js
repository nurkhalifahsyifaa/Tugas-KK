class Data {
    jumlahBarang;
    nama;

    constructor(jumlah, nama) {
        this.jumlahBarang = jumlah;
        this.nama = nama;
    }
    cekStatus() {
        if (this.jumlahBarang > 0) {
            return "Tersedia";
        } else {
            return "Habis di Gudang";
        }
    }

    tampilkanData() {
        console.log(`Nama Barang   : ${this.nama}`);
        console.log(`Jumlah Barang : ${this.jumlahBarang}`);
        console.log(`Status Barang : ${this.cekStatus()}`);
    }

    getJumlahBarang() {
        return this.jumlahBarang;
    }
}

class DataBarang extends Data {
    constructor(jumlah, nama) {
        super(jumlah, nama);
    }
}

const Barang1 = new DataBarang(10, "Anggur");
const Barang2 = new DataBarang(0, "Kaset CD");

Barang1.tampilkanData();
console.log("");
Barang2.tampilkanData();
console.log("");

const totalStok = Barang1.getJumlahBarang() + Barang2.getJumlahBarang();
console.log(`Total Stok Barang : ${totalStok}`);