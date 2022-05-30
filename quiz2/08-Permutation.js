const checkPermute = function(stringOne, stringTwo) {
      let a = stringOne.split("");
      let b = stringTwo.split("");
      let c = a.sort();
      let d = b.sort();

      for (let i = 0; i < c.length; i++) {
        if (c[i] !== d[i]) {
          return false;
        }
      }
      return true;
  };
  

  console.log(checkPermute('aba', 'aab'))//true;
  console.log(checkPermute('aba', 'aaba'))//false;
  console.log(checkPermute('aba', 'aa'))//false;