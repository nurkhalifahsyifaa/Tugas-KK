const daftarSiswa = ["Dea", "Via", "Lutfi", "Rusdi", "Musril", "Joni"]
const Nilai= [80, 95, 70, 88, 100, 65];

let NilaiTertinggi = Nilai [0];
let NilaiTerendah = Nilai [0];

for (let i = 0; i < Nilai.length; i++) {
    if (Nilai[i] > NilaiTertinggi) {
        NilaiTertinggi = Nilai[i];
    }
    if (Nilai[i] < NilaiTerendah) {
        NilaiTerendah = Nilai[i];
    }
    
    console.log(`Nama   : ${daftarSiswa[i]}`);
    console.log(`Nilai : ${Nilai[i]}`);
    console.log("");
}
console.log(`Nilai Tertinggi   : ${NilaiTertinggi}`);
console.log(`Nilai Terendah    : ${NilaiTerendah}`);