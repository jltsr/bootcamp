function maxWordLength(params) {
    let t=0;
    let ts=params.split(' ');
    let maxWordLength='';
    for (let i = 0; i < ts.length; i++) {
        if(ts[i].length>t){
            maxWordLength=ts[i];
            t=ts[i].length;
        }
    }
    return maxWordLength;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp