/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
    var x,y,z,emp1,emp2,emp3
    x=gaji1*taxGaji(gaji1)
    y=gaji2*taxGaji(gaji2)
    z=gaji3*taxGaji(gaji3)
    emp1=gaji1+x
    emp2=gaji2+y
    emp3=gaji3+z
    var total
    total= emp1+emp2+emp3
    return 'Total gaji yang harus dibayar :'+  
    '\nEmp1 : Rp.'+gaji1 + ' Pajak('+(taxGaji(gaji1)*100)+'%))=Rp.'+emp1+
    '\nEmp2 : Rp.'+gaji2 + ' Pajak('+(taxGaji(gaji2)*100)+'%))=Rp.'+emp2+
    '\nEmp3 : Rp.'+gaji3 + ' Pajak('+(taxGaji(gaji3)*100)+'%))=Rp.'+emp3+
    '\nTotal : Rp.'+total;


}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */