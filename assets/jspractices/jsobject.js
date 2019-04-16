
/* define object */

var person = {
    firstName:"kevin",
    lastName: "hung" ,
    age : 30,
    eyeColor: "brown",
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
}
/* access element */
var nameperson = person["firstName"] + " " + person["lastName"];
console.log(nameperson);
console.log(person.fullName())  //=> return value of function
console.log(person.fullName)   //=>return  definion of method : 

/* change element ,add new element*/
person.age = 50 ;
console.log("age after change: " + person.age);

person.nationality = "Viet Nam" ;
console.log("add new element: " + person.nationality);

