//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
function segitiga1(n){
    var result='';
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            result+=i+" ";
        }
        result+="\n"
    }
    console.log(result); 
}
segitiga1(5)


// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

function segitiga2(n){
    var result1='';
    for (let i = 1; i <= n; i++) {
        for (let j = i; j > 0; j--) {
            result1+=j+" ";
        }
        result1+="\n"
    }
    console.log(result1); 
}
segitiga2(5)



// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

function segitiga3(n){
    let count = 1;
    let status = "naik";
    for (let i = 1; i <= n; i++) {
        let strNum = '';
        for (let y = 1; y <= i; y++) {
        strNum += count + " ";
        if (count === n) {
            status = "turun";
        } else if (count === 1) {
            status = "naik";
        }

        if (status === "naik") {
            count++;
        } else {
            count--;
        }
        }
        console.log(strNum);
    }
}
segitiga3(5)
console.log("\n");


// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25
function persegi(n){
  let multiply = n * 2;
  for (let i = 1; i <= n; i++) {
    let strNum = "";
    let tmpA = 0;
    let tmpB = 0;
    for (let y = 1; y <= n; y++) {
      if (y === 1) {
        strNum += i + " ";
        tmpA = i;
      } else if (y === 2) {
        strNum += 11 - i + " ";
        tmpB = 11 - i;
      } else if (y % 2 === 1) {
        strNum += tmpA + multiply + " ";
        tmpA += multiply;
      } else if (y % 2 === 0) {
        strNum += tmpB + multiply + " ";
        tmpB += multiply;
      }
    }
    console.log(strNum);
  }
}
persegi(5)
