const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: false },
  { id: 3, name: "Suman", role: "student", active: true }
];

//filter
let activeUsers=users.filter((element)=>element.active==true)
console.log(activeUsers)

let adminExists = users.filter((element)=>element.role=='admin')
console.log(adminExists)

let findUser = users.find((element)=>element.id==2)
console.log(findUser)

