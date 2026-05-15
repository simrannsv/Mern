//Deep copy

//In deep copy, a new object is created and all the properties of the original object are copied to the new object.
const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

let orderCopy=structuredClone(order)
order.customer.address.city = "Chennai"  
console.log(order)
console.log(orderCopy)
//here we have created a deep copy of the order object using structuredClone().
//When we change the city in the original order object, it does not affect the city in the copied orderCopy object
