//creating http server
import exp from 'express' //we are not specifing the path as it was default import 
 const app=exp() //app is name used to specially indetify express application
                 //this express application contains the http server
import {userApp} from "./APIs/user.js"
import {prodApp} from "./Backend-1/product.js"
//use body parse middleware
app.use(exp.json())//it is extracting the request body..if we dont use this it will give undefined error8
//to call the function we use 'use'
//app.use(middleware2)
//app.use(middleware1)
app.use('/user-api',userApp)//forward the request to userAPi if path starts with /user-api
app.use('/prod-api',prodApp)

//set a port number
const port=3030
app.listen(port,()=>console.log(`server listening to ${port}...`))//it is used to assign port number to http server

//custom midleware
function middleware1(req,res,next)
{
    res.json({message:"this res from middleware1"})
    //console.log('middleware1 executed')
    next()
}
function middleware2(req,res,next)
{
     //res.json({message:"this res from middleware2"})
     console.log('middleware2 executed')
     next()
}