//spread operator is used to create a shallow copy of an array or object.

let user={
    name:"Ravi",
    city:"Hyderabad"
};

let userCopy={...user,age:24}
console.log(user)
console.log(userCopy)

// here we have created a shallow copy of the user object using the spread operator. We also added a new property age to the copied object. 
// When we change the city in the original user object, it does not affect the city in the copied userCopy object. 
//if there were nested objects within user, changes to those nested objects would affect both user and userCopy since they would reference the same nested objects.

