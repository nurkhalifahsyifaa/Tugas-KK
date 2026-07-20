const skor = [100, 450, 800, 150, 900];
for (let i = 0; i < skor.length; i++) {
    let nilaiskor = skor[i];
    let rank = "";
    
    if (nilaiskor >= 800) {
        rank = "Mythic";
    } else if (nilaiskor >= 500) {
        rank = "Legend";
    } else if (nilaiskor >= 300) {
        rank = "Epic";
    } else {
        rank = "Warrior";
    }
    console.log(`Player ${i + 1} : ${nilaiskor} -> ${rank}`);
}