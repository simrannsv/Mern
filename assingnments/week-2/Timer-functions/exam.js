//Exam portal simulator:
        //After 2 seconds → show: “Evaluating answers…”
        //After 4 seconds → show: “Result: Pass”
console.log("Exam submitted sucessfully")
setTimeout(()=>
{
    console.log("Evaluating answers....")

},2000);

setTimeout(()=>
{
    console.log("Result: Pass")

},4000);

