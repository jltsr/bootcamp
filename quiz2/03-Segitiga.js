/** buat segitiga  */ 

console.log('output 1\n');

for (let i = 4; i > 0; i--) {
    let result='';
    for (let j = 1; j<i+1; j++) {
        result+=j+' '
    }
    console.log(result+='\n')
} 
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

console.log('output 2\n');

for (let i = 5; i > 0; i--) {
    let result='';
    for (let j = i; j>0; j--) {
        result+=j+' '
    }
    console.log(result+='\n')
    

}  

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  