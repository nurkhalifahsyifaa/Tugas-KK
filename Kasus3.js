function tampilkanLaporan(nama) {
    let status = "";
    if (nama.startsWith("F") || nama.startsWith("f")) {
        status = "Hero Assassin/Tank Favorit";
    } else {
        status = "Hero Biasa.";
    }
    console.log(`Nama        : ${nama}`);
    console.log(`Status      : ${status}`);
    console.log("");
}
const dataHero = [
    {
        nama: "Layla",
    },
    {
        nama: "Ling",
    },
    {
        nama: "Fanny",
    },
    {
        nama: "Franco",
    },
    {
        nama: "Miya",
    },
    {
        nama: "Eudora",
    },
];

for (let i = 0; i < dataHero.length; i++) {
    tampilkanLaporan(dataHero[i].nama);
}