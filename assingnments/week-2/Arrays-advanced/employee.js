
//Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
   // 1. filter() employees from IT department
let dept=employees.filter((element)=>element.department='IT')
console.log(dept)
   // 2. map() to add:
           // netSalary = salary + 10% bonus
let netSal=employees.map((element)=>element.salary+5000)//assuming bonus=5000
console.log(netSal)
 //   3. reduce() to calculate total salary payout
 let totalSal=employees.reduce((acc,element)=>acc + element.salary,0)
 console.log(totalSal)
  //  4. find() employee with salary 30000
  let findEmployee=employees.find((element)=>element.salary==30000)
  console.log(findEmployee)
  //  5. findIndex() of employee "Neha"
  let indexOfEmployee=employees.findIndex((element)=>element.name=="Neha")
  console.log(indexOfEmployee)



