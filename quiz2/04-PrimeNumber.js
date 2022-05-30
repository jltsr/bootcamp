
function showPrimeNumber(n){
    
    let prime = "";
    let count = 0;

    for (let i = 2; i < n; i++) {
        if(isPrime(i)) {
            prime = count % 5  === 0 ? prime + "\n" + i: prime + "\t" + i;
            count++;
        }
    }
    return prime;

}

function isPrime(n){
    if (n <= 1){
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0)
        return false;
    }

    return true;



}

console.log(showPrimeNumber(100));
/**
2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97
 */