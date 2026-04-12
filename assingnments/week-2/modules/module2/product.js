// Product database (simulated)
 export const products = [
                 { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
                 { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
                 { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
                 { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
                  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
                    ];


export function getProductById(id) {
            // Find and return product by ID
    let findProduct=products.find((element)=>element.id==id)  
     return(findProduct)    
                          }

export function getAllProducts()
 {
  let allProducts=products
  return(allProducts)
                        }

 export function getProductsByCategory(category) 
 {
  // Filter products by category
  let productCategory=products.filter((element)=>element.category==category)
  
  return(productCategory)
  
                          }

 export function searchProducts(query) {
                            // Search products by name (case-insensitive)

   let searchProduct=products.find((product)=>product.name==query)
   if(!searchProduct)
    {
      return("Query Not found")
    } 
    return(searchProduct)                      
                          }

  export function checkStock(productId, quantity) {
                            // Check if product has enough stock

                            // Return true/false
  let product=products.find((element)=>element.id==productId)
  if(!product)
  {
   // console.log(`Product with ${productId} not found`)
    return false
  }
  if(product.stock <quantity)
  {
   // console.log(`${product.name} doesnt have enough stock`)
    return false
  }
  //console.log(`${product.name} has enough stock`)
  return true
}
 export function reduceStock(productId, quantity) {
                            // Reduce product stock after purchase
 let product=products.find((element)=>element.id==productId)
  if(!product)
  {
   // console.log(`Product with ${productId} not found`)
    return false
  }
if(!(products[productId-1].stock <= quantity))
{
  return("Reduced stock : ",products[productId-1].stock-quantity)
}
else{

return("No enough stock")
}

 }


//getProductById(1)
//getAllProducts()
//getProductsByCategory('electronics')
//searchProducts('Laptop')
//searchProducts('laptop') //Query Not found (Case-sensitive)
 //let x=checkStock(1,30)
 //console.log(x)
//reduceStock(1,5)
//reduceStock(1,15)





