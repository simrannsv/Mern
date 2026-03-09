import { validateTitle,validatePriority,validateDueDate } from "./validator.js";

const tasks=[]

function addTask(title,priority,dueDate)
{
    if(!validateTitle() || !validatePriority()|| !validateDueDate())
    {
        return "Not valid"
    }
    tasks.push({title,priority,dueDate})
    return tasks[tasks.length - 1]
}

function getallTasks()
{
    return tasks
}

function completeTask(taskId) {
    let task = tasks.find((t, index) => index === taskId)  // find by index
    if(task) {
        task.completed = true   // mark it
        console.log(`${taskId} marked as complete`)
        return task             
    }
    return "Task not found"
}

export {addTask,getallTasks,completeTask}
