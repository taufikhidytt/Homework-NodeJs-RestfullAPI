const rumus = require('./node_modules/rumus');

// hitung luas persegi
let sisiPersegi1 = 10;
let sisiPersegi2 = 20;
console.log("Luas Persegi: " + rumus.hitungLuas(sisiPersegi1, sisiPersegi2));

// hitung keliling persegi
let sisiPersegi = 30;
console.log("Keliling Persegi: " + rumus.kelilingPersegi(sisiPersegi));

// hitung luas persegi panjang
let panjang = 40;
let lebar = 50;
console.log("Luas Persegi Panjang: " + rumus.hitungLuas(panjang, lebar));

// hitung keliling persegi panjang
console.log("Keliling Persegi Panjang: " + rumus.kelilingPersegiPanjang(panjang, lebar));