//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Tasks:
    //1. Use filter() to get only inStock products
  let instock=cart.filter((element)=>element.inStock==true)
  console.log(instock)

  // 2. Use map() to create a new array with:  { name, totalPrice }
  const newArray=cart.map(item=>({ name: item.name,totalPrice: item.price * item.quantity}))
  console.log(newArray)

   // 3. Use reduce() to calculate grand total cart value
   let totalValue=cart.reduce((acc,element)=>acc+ element.price,0)
   console.log(totalValue)

   // 4. Use find() to get details of "Mouse"
   let findDetails=cart.find((element)=>element.name=='Mouse')
   console.log(findDetails)
  //  5. Use findIndex() to find the position of "Keyboard"
 let indexOfProduct=cart.findIndex((element)=>element.name=='Keyboard')
 console.log(indexOfProduct)

 

