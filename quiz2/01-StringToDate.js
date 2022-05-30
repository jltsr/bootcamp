/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    var [month, day, year]=s.split('/');
    if(isNaN(month) || isNaN(day) || isNaN(year)){
        return s+ 'bad format date';
    }else{
        var x=new Date(s);
        return x;
    }

}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date