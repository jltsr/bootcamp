/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if(isNaN(start) && isNaN(end)){
        return start+' or bca harus dalam angka '+end
    }else{
        var x,y
        if(start<end){
            x=(end-start)
            y=Math.ceil((x*100)/start)
            return 'Total kenaikan income '+y+'%'
        }else{
            x=(start-end)
            y=Math.ceil((x*100)/start)
            return 'Total penurunan income -'+y+'%'
        }
    }
    
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%