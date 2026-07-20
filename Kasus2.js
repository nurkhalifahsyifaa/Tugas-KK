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
    constructor(nama, nilai) {
        super(nama, nilai);
    }
    cekKelulusan() {
    if (this.getNilai () >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}
    }
const daftarSiswa = [
    new SiswaTelkom("andi", 90),
    new SiswaTelkom("syifaa", 75),
    new SiswaTelkom("cika", 60),
    new SiswaTelkom("ira", 45),
    new SiswaTelkom("sila", 88)
];

let jumlahTidakLulus = 0;
let jumlahLulus = 0;

for (let i = 0; i < daftarSiswa.length; i++) {
    daftarSiswa[i].tampilkanData();
    console.log(""); 
    
    if (daftarSiswa[i].status === "Tidak Lulus") {
        jumlahTidakLulus++;
    } else {
        jumlahLulus++;
    }
}
console.log(`Jumlah Siswa Tidak Lulus : ${jumlahTidakLulus} orang`);
console.log(`Jumlah Siswa Lulus       : ${jumlahLulus} orang`);