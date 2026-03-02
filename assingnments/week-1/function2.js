//Write a function that recieves an array as an argument and return their sum

function sum(marks)
{
    let sum=0
    for(let index=0;index<marks.length;index++)
{
    sum+=marks[index]
}
return sum
}
let result=sum([10,20,30,40,50])
console.log(result)