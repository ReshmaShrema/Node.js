// Global variables
var fullName = "Reshma"; //string
console.log(fullName);
var age = 29; //number
console.log(age);
var hasHobbies = true; //boolean
console.log(hasHobbies);
// node play.js

//function definition , pure function
function summarizeUser(username, userAge, userHasHobbies) {
  // local variable and argument  -> username, userAge, userHasHobbies
  return (
    "Name is " +
    username +
    " age is " +
    userAge +
    " and the user has hobbie " +
    userHasHobbies
  );
}
// function calling
console.log(summarizeUser(fullName, age, hasHobbies));
