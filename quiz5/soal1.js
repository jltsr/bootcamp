//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas

const angka = [12,24,36,48,60]

function showNumber(angka){
    var result=''
    for (let i = 0; i < angka.length; i++) {
        if(i==angka.length-1){
            result+=angka[i];
        }else{
            result+=angka[i]+", "
        }
    }
    return result;
}

console.log(showNumber(angka));