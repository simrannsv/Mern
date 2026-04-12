const employees = [
  
{ eno: 101, name: "Ravi", marks: [78, 82, 91],

 },
 
 { eno: 102, name: "Bhanu", marks: [65, 70, 68],

  },
  
  { eno: 103, name: "Sneha", marks: [88, 92, 95], 

  }, { eno: 104, name: "Kiran", marks: [55, 60, 58], }, 
  { eno: 105, name: "Anitha", marks: [90, 85, 87],

   }, ];

// 1. Insert at 2nd position
let newEmp = { eno: 106, name: "Arjun", marks: [80, 75, 88] };
employees.splice(1, 0, newEmp);

// 2. Remove Kiran properly
console.log("Before removing Kiran :",employees)
let index = employees.findIndex(emp => emp.name === "Kiran");
employees.splice(index, 1);
console.log("After removing Kiran :",employees)

// 3. Update Sneha's last mark
let sneha = employees.find(emp => emp.name === "Sneha");
sneha.marks[2] = 75;

console.log(employees);