//spread operator is used to create a shallow copy of an array or object.
//  It allows you to create a new array or object by copying the elements or properties of an existing array or object. 
// The spread operator is denoted by three dots (...)

let fruits=["apple","banana"]
let fruitsCopy=[...fruits]
fruits.push("orange")
console.log(fruits)
console.log(fruitsCopy)

//here we used spread operator as their are no nested objects/arrays
