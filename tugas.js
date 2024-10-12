//PERCABANGAN
function htgkalori(aktivitas,waktu) {
    let kalori = 0;

    if (aktivitas==="lari") {
        kalori=(60/5)*waktu;
    }else if(aktivitas==="push-up") {
        kalori=(200/30)*waktu;
    }else if(aktivitas==="plank") {
        kalori=5*waktu;
    }else{
        console.log("aktivitas tidak dikenali");
        return 0;
    }
    return kalori;
}

let totalkalori = 0;

let aktivitas1 = "lari";
let waktu1 = 10;

let aktivitas2 = "push-up";
let waktu2 = 15;

let aktivitas3 = "plank";
let waktu3 = 5;

totalkalori +=htgkalori(aktivitas1,waktu);
totalkalori +=htgkalori(aktivitas2,waktu);
totalkalori +=htgkalori(aktivitas3,waktu);

console.log('total kalori yang terbakar:${total kalori}kalori');

console.log('============================');


//perulangan
function palindrome(num) {
    let number= num.toString();
    let nilai= '';

    for (let i = number.lenght - 1;i >= 0; i--){
        nilai +=number[i];
    }
    return number === nilai;
}

function findPalindrome(input){
    for(let num = input + 1;; num++){
        if (palindrome(num)) {
            return num;
        }
    }
}

console.log(findPalindrome(9));
console.log(findPalindrome(100));
console.log(findPalindrome(200));
console.log(findPalindrome(1000));
console.log(findPalindrome(2345));

console.log('===================================');


//array
//a
console.log('A');
var siswa =[
    {nama: "A", nilai:90},
    {nama: "B", nilai:80},
    {nama: "C", nilai:75},
    {nama: "D", nilai:60},
    {nama: "E", nilai:50},
];

var totalNilai = 0;
for (var i = 0; i<siswa.lenght; i++){
    totalNilai +=siswa[i].nilai;
}
var Ratarata = totalNilai/siswa.lenght;
console.log("Rata-rata nilai siswa:"+ Ratarata);

var siswaLulus= [];
for (var i=0; i<siswa,lenght; i++){
    if (siswa[i].nilai> 80) {
        siswaLulus.push(siswa[i].nama);
    }
}
console.log("Siswa yang lulus" +siswaLulus.join(","));

var siswaTerbaik= [0];
for (var i =1; i<siswa.lenght; i++){
    if (siswa[i].nilai > siswaTerbaik.nilai) {
        siswaTerbaik= siswa[i];
    }
}
console.log("siswa dengan nilai terbesar: " + siswaTerbaik.nama + "(" + siswaTerbaik.nilai +")");

console.log('B');
var mahasiswa = [
    "rahma",
    "bella",
    "alya",
    "zilah",
    "lala",   
];

console.log("Mahasiswa yang diawali dengan huruf 'A'");
for (var i = 0;1< mahasiswa.length; i++){
    if (mahasiswa[i].charAt(0)==='A') {
        console.log(mahasiswa[i]);

    }
}

var namaPanjang = mahasiswa[0];
for (var i=1; i< mahasiswa.length; i++){
    if (mahasiswa[i].length > namaPanjang.length){
        namaPanjang = mahasiswa[i];
    }
}
console.log("Mahasiswa dengan nama paling panjang: "+namaPanjang);

var namaPendek = mahasiswa[0];
for (var i=1; i<mahasiswa.length;i++) {
    if (mahasiswa[i].lenght < namaPendek.length){
        namaPendek=mahasiswa[i];
    }    
}
    (var i=1; i< mahasiswa.length;i++) {
    if (mahasiswa[i].length < namaPendek.length) {
        namaPendek=mahasiswa[i];
    }
}
console.log('C');
function isCheck(rajaPos,bentengPos) {
    var rajaX = rajaPos[0];
    var rajaY = rajaPos[1];
    var bantengX = bentengPos[0];
    var bantengY = bentengPos[1];

    if (rajaX === bantengX || rajaY === bentengY ) {
        return true;
    }
    return false;
}

var rajaPos=[4,4];
var bentengPos=[4,7];

if (isCheck(rajaPos, bantengPos));
console.log("Raja dalam posisi chek oleh benteng!");

    console.log("Raja tidak dalam posisi check");
