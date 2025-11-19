// say-my-name.js
const args = process.argv; // array of command-line arguments

// args[0] = 'node' path
// args[1] = script path
// args[2] = first custom argument

const name = args[2];
if (!name) {
  console.log("Please provide your name. Usage: node say-my-name.js <name>");
} else {
  console.log(`Hello, ${name}! Welcome to Node.js.`);
}
