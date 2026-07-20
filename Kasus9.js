const produk = ["Laptop", "Mouse", "Keyboard", "Monitor", "Flashdisk"];
const harga = [7000000, 150000, 350000, 1800000, 120000];

for (let i = 0; i < produk.length; i++) {
    let kategori = harga[i] > 1000000 ? "Produk Mahal" : "Produk Murah";
    
    console.log(`${produk[i]} - Rp${harga[i]}`);
    console.log(`Kategori: ${kategori}`);
    console.log("");
}