const daftarMasyarakat = ["Dea", "Via", "Lutfi", "Rusdi", "Musril", "Joni"]
const Umur= ["8", "13", "17", "20", "25", "11"];

for (let i = 0; i < Umur.length; i++) {
   let status = "";
   if (Number(Umur[i]) >= 17) {
        status = "Boleh Masuk";
    } else {
        status = "Tidak Boleh Masuk";
    }
console.log(`Nama   : ${daftarMasyarakat[i]}`);
    console.log(`Status : ${status}`);
    console.log("");
}