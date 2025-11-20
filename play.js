// Global variables
const fullName = "Reshma"; //string
console.log(fullName);
let age = 29; //number
console.log(age);
const hasHobbies = true; //boolean
console.log(hasHobbies);
age = 30;
// node play.js

//function definition , pure function, anonymous function
const summarizeUser = function (username, userAge, userHasHobbies) {
  // local variable and argument  -> username, userAge, userHasHobbies
  return (
    "Name is " +
    username +
    " age is " +
    userAge +
    " and the user has hobbie " +
    userHasHobbies
  );
};
// function calling
console.log(summarizeUser(fullName, age, hasHobbies));

// object
const person = {
  name: "Reshma",
  age: 29,
  greet() {
    console.log("Hi My name is ", this.name);
  },
};

person.greet();

// array
const items = ["item1", 2, true, [1, 2, 3], { name: "Reshma", age: 29 }];
// iteration
for (let item of items) {
  console.log(`items-${item}`);
}

console.log(
  items.map((item) => {
    return `items-${item}`;
  })
);

console.log(items.map((item) => `items-${item}`));
