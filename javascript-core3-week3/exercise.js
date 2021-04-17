// 1.
function one() {
  var a = 10;
}
one();
console.log(a); // what is the value of a 
// Answer: undefied error(scoped to the function)

// 2.
function two() {
  let b = 10;
  let b = 20;
}
two();
console.log(b); // what is the value of b and why
//  Answer: undefined - variable can only be declared once.

// 3.
let c;
function three() {
  c = 25;
}
three();
console.log(c); // what is the value of c and why
//  glabal scope

// 4.
function four() {
  d = 25;
}
four();
console.log(d); // what is the value of d and why
// don't need the var let const

// 5.
let e;
function five() {
  const greeting = "Hello";

  function greet() {
    let name = "Eddie";
    e = `${greeting} ${name}`;
  }
  greet();
}
five();
console.log(e); // what is the value of e and why
// Hello Eddie - baby can see out of function to greet and is declared globally.

// 6.
function six() {
  if (true) {
    let f = 50;
  }
  console.log(f); // what is the value of f and why
}
//  undefined: f is scoped to the If function.
six();