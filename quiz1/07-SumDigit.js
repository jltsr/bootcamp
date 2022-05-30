/**
 * input 4 digit integer lalu hitung jumlahnya
 */

 function sumDigit(n){
     if(isNaN(n)){
         return 'a123 is not number, try again...'
     }else if(n>=10000){
         return '12345 harus lebih kecil dari 10000'
     }else{
        let sum = 0;
        while (n) {
            digit = n % 10;
            sum += digit;
            n = (n - digit) / 10;
        }
        return sum
     }
   
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...