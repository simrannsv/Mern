//validate task title
function validateTitle(title)
{
   if(!title)
   {
    return 'Enter title'
   }
   else if (title.length <3)
   {
    return 'Enter a valid title'
   }
   return true
}

//validate prioriy
function validatePriority(priority)
{
    if(priority=='low'|| priority=='medium'|| priority=='high'){
        return true
    }
    return 'Enter a valid priority'
}
//validate future date

function validateDueDate(date)
{
    let dueDate=new Date(date)
    let today=new Date()
    if(today > dueDate)
    {
        return 'Invalid Date'
    }
   return true
}


export {validateTitle,validatePriority,validateDueDate}

