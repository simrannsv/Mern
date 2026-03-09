import { getProductById,checkStock,products } from "./product.js";
const cart=[]
export function addToCart(productId, quantity) {
                            // 1. Get product details
let productDetails=getProductById(productId)
console.log(productDetails)
                            // 2. Check stock availability
let stockAvail=checkStock(productId,quantity)
console.log(stockAvail)
                            // 3. Check if product already in cart
const existingItem=cart.find((item)=>item.id==productId)
//    - If yes, update quantity
if(existingItem)
{
existingItem.quantity+=quantity
return(`Sucess: Updated ${productId} quantity to ${existingItem.quantity}`)
}
 //    - If no, add new item
 else{
    cart.push({
        id: productDetails.id,       
      name: productDetails.name,   
      price: productDetails.price, 
      quantity: quantity,  
    });
    return(`Sucess: Added ${productDetails.name}to cart`)
 }
}
let x=addToCart(1,15)   
console.log(x)  
let y=addToCart(1,15)
console.log(y)

export function removeFromCart(productId) {
                            // Remove product from cart
if(!productId)
{
  console.log(`${productId}not yet added to cart`)
}
else{
  cart.splice()
}
                          }
removeFromCart(1)