//soal 7
function countingValleys(s) {
	//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
	//jika total nilai akhir adalah 0 dan U maka = +1 
    const ts=s.split('');
    let len =ts.length;
    let countValley=0;
    let sealevel =0
    let level = sealevel;
    let temp=0;
    for (let i = 0; i < len; i++) {
        s[i]==='U' ? level++ : level--;
        if(level === sealevel && temp<sealevel){
            countValley++
        }
        temp=level;
    }
    if(level<sealevel) countValley++;
    return countValley;
}
console.log(countingValleys('UDDDUDUU'));//1