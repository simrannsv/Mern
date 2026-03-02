let grades=[90,78,65,98]
let smallest=grades[0]
for(let index=0;index<grades.length;index++)
{
    if(grades[index]<smallest)
    {
        smallest=grades[index]
    }
}
console.log(`Smallest   is ${smallest}`)

