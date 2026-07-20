const daftarSiswa = ["Dea", "Via", "Lutfi", "Rusdi", "Musril", "Joni"]
const Hadir= [true, false, true, true, false, true];

let totalHadir = 0;
let totalTidakHadir = 0;

for (let i = 0; i < Hadir.length; i++) {
   let status = "";
   if (Hadir[i] === true) {
        status = "Hadir";
        totalHadir++;
    } else {
        status = "Tidak Hadir";
        totalTidakHadir++;
    }
console.log(`Nama   : ${daftarSiswa[i]}`);
    console.log(`Status : ${status}`);
    console.log("");
}

console.log(`Jumlah Siswa Hadir       : ${totalHadir} orang`);
console.log(`Jumlah Siswa Tidak Hadir : ${totalTidakHadir} orang`);