/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


 function getPeriodTimes(seconds) {
     if(isNaN(seconds)){
         return seconds+' is not number'
     }else{
         var day,hour,minute,second;

         day = Math.floor(seconds / (3600*24))
         hour =Math.floor((seconds%(3600*24))/3600)
         minute =Math.floor(((seconds%(3600*24))%3600)/60)
         second =Math.floor(((seconds%(3600*24))%3600)%60)

         return day+' hari '+hour+' jam '+minute+' menit '+second+' detik'
     }
    
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik
