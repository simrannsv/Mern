import exp from 'express'
export const prodApp = exp.Router()

let product = []

// Read all products
prodApp.get('/prod', (req, res) => {
    res.json({ message: "All products", payload: product }) // ✅ was 'prod' (undefined)
})

// Create new product
prodApp.post('/prod', (req, res) => {
    const newProd = req.body
    product.push(newProd)
    res.json({ message: "New product created" })
})

// Read product by brand
prodApp.get('/prod/:brand', (req, res) => {
    let prodBrand = req.params.brand
    let findBrand = product.find(prodObj => prodObj.brand == prodBrand) // ✅ was 'prod.find'
    if (findBrand === undefined) {
        return res.json({ message: "No product by brand" }) // ✅ added 'return'
    }
    res.json({ message: "Product found", payload: findBrand }) // ✅ return matched item, not all
})

// Delete a product by ID
prodApp.delete('/prod/:prodId', (req, res) => {
    let delId = Number(req.params.prodId)
    let delIndex = product.findIndex(prodObj => prodObj.prodId === delId) // ✅ renamed for clarity
    if (delIndex === -1) { // ✅ was checking 'prod===undefined' (wrong variable & wrong check)
        return res.json({ message: "ID not found" }) // ✅ added 'return'
    }
    product.splice(delIndex, 1)
    res.json({ message: "Product deleted" }) // ✅ fixed misleading message
})

//update a product
prodApp.put('/prod',(req,res)=>
{
    let modifiedProd=req.body
    //get index of existing user in users arrays
    let index=product.findIndex(userObj=>userObj.id===modifiedProd.id)
    //update user with index
    //if user not found
    if(index===-1)
    {
        return res.json({message :"User not found "})
    }
    //updte user with index
    product.splice(index,1,modifiedProd)
    //send res
    return res.json({message:"User updated"})
})