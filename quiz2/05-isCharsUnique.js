function isCharsUnique(string){
    const arr = string.split("");
    const ar = arr.sort();
    for (let i = 0; i < ar.length; i++) {
        if(ar[i] === ar[i+1]){
            return false;
        }
        return true;
    }
    
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false