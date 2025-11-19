// Global variables
const fullName = "Reshma"; //string
console.log(fullName);
let age = 29; //number
console.log(age);
const hasHobbies = true; //boolean
console.log(hasHobbies);
age = 30;
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
