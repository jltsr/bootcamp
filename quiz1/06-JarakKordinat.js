/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

 function getCordinat(x1,y1,x2,y2) {
     if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)){
         return 'input kordinat dalam angka'
     }else{
         var d
         d=Math.sqrt(Math.pow((x1-x2),2)+ Math.pow((y1-y2),2))
         return d
     }
   
}

console.log(getCordinat(3,4,-4,-5)); //11.40175425099138
console.log(getCordinat("1","2","-1","-2")); //4.47213595499958
console.log(getCordinat("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCordinat(3.2,4.5,-4.4,-5)); //12.165936051122411