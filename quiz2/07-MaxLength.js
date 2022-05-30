function maxWordLength(params) {
    var t=0;
    var ts=params.split(' ');
    for (let i = 0; i < ts.length; i++) {
        if(ts[i].length>t){
            params=ts[i];
            t=ts[i].length;
        }
    }
    return params;

}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp