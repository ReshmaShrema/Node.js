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

const arrayLength = items.push(1);
// coppy
const copiedArray = items.slice();
const copiedBySpread = [...items]; //spread operator
const coppyedObje = { ...person };

// rest operator in  funcion parameter
const toArrayWithoutDestructure = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};

console.log(toArrayWithoutDestructure(1, 2, 3, 4, 5, 6));

const toArrayWithDestructure = (...argz) => {
  return argz;
};

console.log(toArrayWithDestructure(1, 2, 3, 4, 5, 6));

// rest operator in destructuring
const { name } = person;
const { name: userName } = person; //assigning to new variable
console.log(name, userName);

// with destructuring
const printNameWithoutDestructuring = (personData) => {
  console.log(personData.name);
};
printNameWithoutDestructuring(person);
// with destructuring
const printName = ({ name }) => {
  console.log(name);
};

printName(person);
