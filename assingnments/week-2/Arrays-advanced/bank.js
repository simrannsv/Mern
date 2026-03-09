//Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//Tasks:
  //  1. filter() all credit transactions
  let creditrans=transactions.filter((types)=>types.type=="credit")
  console.log(creditrans)
  //  2. map() to extract only transaction amounts
  let transAmt=transactions.map((element)=>element.amount)
  console.log(transAmt)

 //   3. reduce() to calculate final account balance
 let totalBalance=transactions.reduce((acc,element)=>acc+element.amount,0)
 console.log(totalBalance)
 //   4. find() the first debit transaction
 let debitTrans=transactions.find((element)=>element.type=="debit")
 console.log(debitTrans)
 //   5. findIndex() of transaction with amount 10000
 let findAmt=transactions.findIndex((element)=>element.amount==10000)
 console.log(findAmt)
 