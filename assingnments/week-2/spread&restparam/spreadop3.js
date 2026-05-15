//  Write a function that takes any number of arguments and returns their sum using the rest parameter syntax.

function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

// Examples
console.log(sum(1, 2, 3));          // 6
console.log(sum(10, 20, 30, 40));   // 100
console.log(sum(5));                // 5
console.log(sum());                 // 0
