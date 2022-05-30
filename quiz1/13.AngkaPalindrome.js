/** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka){
    
    if(isNaN(angka)){
        return angka+' is not an number'
    }else{
        var a=angka.toString()
        const len=a.length
        
       // const a=1221
        for (let index = 0; index < (len/2); index++) {
            if(a[index]!==a[len-1-index]){
                return a+' is not palindrome'
            }else{
                return a+' is palindrome'
            }
            
        }
        
    }

}


console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome