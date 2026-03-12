import exp from 'express' 
import {connect} from 'mongoose'
 const app=exp()
import { userApp } from './Apis/userApi.js'
import { productApp } from './Apis/productApi.js'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'

config()

 const port=process.env.PORT || 4040
//add body parser
app.use(exp.json())
//adding cookie parser middleware
app.use(cookieParser())


 app.use("/user-api",userApp)
 app.use("/product-api",productApp)
//connect to Db server
//it is the default connection of mongodb
//asyncc and await 
async function connectDB() {
    try{
        await connect(process.env.DB_URL);
        console.log("DB connection sucessful")
        app.listen(port,()=>console.log(`server listening to ${port}...`))
    }
    catch(err)
    {
        console.log("err in Db connection:",err)
    }
}
connectDB()
//error handling middleware
app.use((err,req,res,next)=>{

    if(err.name==="ValidationError")
    {
      return res.status(400).json({message:"error occured",error:err.message})
    }
    if(err.name==="CastError")
    {
         return res.status(404).json({message:"error occured",error:err.message})
    }
 return res.status(500).json({message:"error occured",error:"Server Error"})
})
