import { addTask,getallTasks,completeTask } from "./tasks.js";

let newtask=addTask('Games','Low','2024-12-08')
console.log(newtask)

let b=addTask('Sleepingg','High','2026-12-23')
console.log(b)

let allTasks=getallTasks()
console.log(allTasks)

let completedTask=completeTask(1)
console.log(completedTask)

