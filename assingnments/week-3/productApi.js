//create product

import exp from 'express'
import { productModel } from '../models/productModel.js'
import { verifyToken } from '../middlewares/verifyToken.js';
export const productApp=exp.Router()



productApp.get('/auth',verifyToken,(req,res)=>
{
    
    res.json({ message: "All products", payload: product })
})














productApp.post('/products',async(req,res)=>{
     const newProduct=req.body
     //to create is nothing but to insert
    const product=new productModel(newProduct)
    //to check the conditions
    const result= await  product.save()
    console.log(result)
    res.status(201).json({message:"user created"});
});


productApp.get('/products',async(req,res)=>{
//to read all users is nothing but find() method
let prodList=await productModel.find()
res.json({message:"All products",payload:prodList})

});

// to read user by ID
productApp.get("/products/:id",async(req,res)=>{
 const pid=req.params.id
 const prodfound=await productModel.findOne({_id:pid})
 if(!prodfound)
 {
    res.status(400).json({message:"Product not found"})
 }
 res.status(200).json({message:"Product found",payload:prodfound})

});

// to delete product by id
productApp.delete("/products/:id",async(req,res)=>{
    const delprod=req.body
    const delid=req.params.id
   // const delprod=req.body
    const deletedprod=await productModel.findByIdAndDelete({_id:delid})
    if(!deletedprod)
    {
        res.status(404).json({message:"ProductID invalid"})
    }
    res.status(200).json({message:"Product deleted",payload:delprod})
});

// to update product by id
productApp.put('/products/:id',async(req,res)=>{
    const modifiedprod=req.body;
        const uid=req.params.id;
        //find users by id
        const updatedprod = await productModel.findByIdAndUpdate(uid,{$set:{...modifiedprod}},{new: true,runValidators:true},);
        res.status(200).json({message:"User modified",payload:updatedprod})

});

