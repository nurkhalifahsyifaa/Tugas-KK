class Siswa {
    nama;
    status;

    #nilai;

    constructor(nama, nilai) {
        this.nama = nama;
        this.#nilai = nilai;
        this.status = this.cekKelulusan();

    }

    tampilkanData() {
        console.log(`Nama       : ${this.nama}`);
        console.log(`Nilai      : ${this.#nilai}`);
        console.log(`Status     : ${this.status}`);
    }

    getNilai() {
        return this.#nilai;
    }

    setNilai(nilaiBaru) {
        this.#nilai = nilaiBaru;
        this.status = this.cekKelulusan();
    }
}

class SiswaTelkom extends Siswa {
    constructor(nama, nilai, status) {
        super(nama, nilai, status);
    }

cekKelulusan() {
    if (this.getNilai () >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}
    }
const siswa1 = new SiswaTelkom("andi", 90);
siswa1.tampilkanData();
const siswa1 = new SiswaTelkom("syifaa", 75);
siswa1.tampilkanData();
const siswa1 = new SiswaTelkom("cika", 60);
siswa1.tampilkanData();
const siswa1 = new SiswaTelkom("ira", 45);
siswa1.tampilkanData();
const siswa1 = new SiswaTelkom("sila", 88);
siswa1.tampilkanData();