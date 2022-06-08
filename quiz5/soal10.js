const animal = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];
// Find where the 'walrus' item is

// Join the portion before 'walrus' to the portion after 'walrus'

// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']
function animalsSliced(animal, find){
    /** 
    var result='';
    for (let i = 0; i < animal.length; i++) {
        if(animal[i] === find){

        }else{
            result+=animal[i]+','
        }
        
    }
    var a=result.split(',');
    a.splice(5)
    return a;
    */
   let x;
   for (let i = 0; i < animal.length; i++) {
       if(animal[i]==find){
           x=i;
       }
       
   }
   animal.splice(x,1)
   return animal;

}

console.log(animalsSliced(animal, 'walrus'));