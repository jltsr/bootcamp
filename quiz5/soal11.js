//soal 11
let animalsE=[];
function startsWithE(animal) {
    animal.forEach(element => {
        if(element[0]==='e' || element[0]==='E'){
            animalsE.push(element);
        }
    });


}
const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog',
    'eel', 'rabbit', 'goose', 'earwig'];

startsWithE(animals);

console.log(animalsE); // ["elephant", "emu", "eel", "earwig"]