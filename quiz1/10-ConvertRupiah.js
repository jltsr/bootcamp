/**
 * Convert rupiah to other currency
 */

 function convertToRupiah(money,type){
    var rupiah='',angka;
    if(type===''){
        return 'no match type currency'
    }else if(type==='yen'){
        angka=money*130.12;
    }else if(type==='usd'){
        angka=money*14382.5;
    }else if(type==='euro'){
        angka=money*16000;
    }
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return money+' '+type+' = Rp.'+rupiah.split('',rupiah.length-1).reverse().join('');
}


console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency