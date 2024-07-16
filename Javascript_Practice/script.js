console.log('Hello');
//var updated, redeclared

//var, let, const
// var a = 'Hi';
// var a = 'Hello';
// var b = 9;
// console.log(a);
// console.log(a);
// console.log(b);



var ab = 'scope';
console.log(ab);
console.log(window.ab);



//let
//cant be reclared, can be updated
  
let c = 'Hello World';
c = 'init';
console.log(c);
console.log(window.c);  //undefined


//const
//cant redeclare, cant update


const k = 'variable';
const l = 'declare';
console.log(k);
console.log(window.k); //undefined



