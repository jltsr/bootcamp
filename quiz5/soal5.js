//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.


let temp=30000;
let pertambahan;
let i=0;
do{
    pertambahan=3/100*temp;
    temp=pertambahan+temp;
    i++;

}while(temp<=100000)
console.log(i+' Tahun');
  

