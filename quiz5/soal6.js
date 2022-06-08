function isPalindrome(word){
    /**var ts=word.split(" ").join("").toLowerCase();
    var result='';
    for(var i = 0; i < ts.length/2; i++){
        if(ts[i] != ts[ts.length-i-1]){
          return false; 
        }
    
        
    }
    return true;
    */
    word = word.toLocaleLowerCase();
    const reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) {
      return true;
    }
    return false;
   


}

console.log(isPalindrome('kasur ini rUsak'));//true