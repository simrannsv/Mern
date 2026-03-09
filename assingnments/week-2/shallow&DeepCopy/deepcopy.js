//Deep copy


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
//here only the orginal object got changed not the copy that means reference is created at two different onjects which is 