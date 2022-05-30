function isPalindrome(word){
   
        const len=word.length
        
       // const a=1221
        for (let index = 0; index < (len/2); index++) {
            if(word[index]!==word[len-1-index]){
                return false
            }else{
                return true
            }
            
        }


}

console.log(isPalindrome('kasur ini rUsak'));//true