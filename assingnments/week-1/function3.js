//Write a function that recieves an array and search element as arguments and returns the index of the elment found.It should return not found if the element is not present in the array

function searchElement(marks,target)
{
    for(let index=0;index<marks.length;index++)
    {
        if(marks[index]==target)
        {
            return index
        }
        
    }
    return "not found"
}

let result=searchElement([10,20,30,40],70)
console.log(result)
