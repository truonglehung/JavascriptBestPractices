/*

https://www.tutorialsteacher.com/javascript/prototype-in-javascript

*/

function person()  {
    this.firstName= "kevin";
    this.lastName= "hung" ;
    age : 30,
    eyeColor: "brown",
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
}
