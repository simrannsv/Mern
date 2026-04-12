const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Tasks:
  //  1. filter() students who passed (marks ≥ 40)
  let passMark=students.filter((element)=>element.marks>=40)
  console.log(passMark)
  //  2. map() to add a grade field
             // ≥90 → A
           //   ≥75 → B
           //   ≥60 → C
           //   else → D

    let grade=students.map((student)=>{
      if(student.marks >=90)
      {
        return 'A'
      }
      else if(student.marks >=75)
      {
        return 'B'
      }
      else if (student.marks >=60)
      {
        return 'C'
      }
      else{
        return 'D'
      }
    },0)
    console.log(grade)

   //3. reduce() to calculate average marks
let totalMarks=students.reduce((acc,element)=>acc+element.marks,0)
let avgMarks=totalMarks/students.length
console.log(avgMarks)
  // 4. find() the student who scored 92
  let findStudent=students.find((element)=>element.marks=92)
  console.log(findStudent)
  // 5. findIndex() of student "Kiran"
let indexOfStudent=students.findIndex((element)=>element.name=='Kiran')
console.log(indexOfStudent)


