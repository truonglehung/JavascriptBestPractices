/* 
    var : function scoped  

    let : block scoped

    const : constant 
*/
/* Scoped */
var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10
//ex2 : for loop 
for (let i = 0; i < 5; i++) {
    console.log(i); //i is visible thus is logged in the console as 0,1,2,....,5
}
console.log(i); //throws an error as "i is not defined" because i is not visible

for (var i = 0; i < 5; i++) {
    console.log(i); //i is visible thus is logged in the console as 0,1,2,....,5
}
console.log(i); //i is visible here too. thus is logged as 5.

/* access by global window object */
var varA = "i am a Var variable";
let letA = "i am let variable";

console.log(window.varA); //i am a Var variable
console.log(window.letA); //undefined

/* Redeclaration */
var aValue = 10;
console.log("now: " + aValue); //10
var aValue = 20;
console.log("after redeclare: " + aValue); //20

let bValue = 11;
console.log("now: " + bValue); //10
// let bValue = 21;
// console.log("after redeclare: " + bValue); //Uncaught SyntaxError: Identifier 'bValue' has already been declared
bValue = 21;
console.log("after redeclare: " + bValue);

/* FUNCTION */
function aSampleFunction() {
    let letVariable = "Hey! What's up? I am let variable.";
    var varVariable = "Hey! How are you? I am var variable.";
    console.log(letVariable); //Hey! What's up? I am let variable.
    console.log(varVariable); //Hey! How are you? I am var variable.
}
setTimeout(aSampleFunction,3000);

/* const  */

const conValue =  "i am const value";
conValue = "new const ";
console.log("const value: " + conValue); //ncaught TypeError: Assignment to constant variable.
