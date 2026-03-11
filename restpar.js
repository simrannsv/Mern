//Rest parameter
//here those '...' is not a spread operator herre since its being used as a function parameter hence its called rest paramter
function findSum (...a)
{
    console.log(a)
}

findSum(10,20,30)

//write a function that recievs any number of arguments and returns thier sum

const findSums=(...numbers)=>{
  return  numbers.reduce((acc,element)=>acc+element)
}
let result=findSums(10,20,30)
console.log(result)
