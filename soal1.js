const rumus = require('./rumus');

// hitung luas persegi
let sisiPersegi1 = 10;
let sisiPersegi2 = 10;
console.log(rumus.luasPersegi(sisiPersegi1, sisiPersegi2));

// hitung keliling persegi
let sisiPersegi = 10;
console.log(rumus.kelilingPersegi(sisiPersegi));

// hitung luas persegi panjang
let panjang = 10;
let lebar = 10;
console.log(rumus.luasPersegiPanjang(panjang, lebar));

// hitung keliling persegi panjang
console.log(rumus.kelilingPersegiPanjang(panjang, lebar));