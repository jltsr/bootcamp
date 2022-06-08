//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9

function soal3(n){
    for (let i = 1; i <= n; i++) {
        var result='';
    for (let j = 0; j < i; j++) {
        result+=i+j+" ";
    }
    console.log(result); 
    }
}
soal3(5);
    
 