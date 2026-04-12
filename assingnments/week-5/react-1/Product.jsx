function Product(props)
{
    const {productObj}=props
 return (<div className="shadow-xl border rounded-sm p-6">
         <h1 className = "text-2xl" > {productObj.title}</h1> 
         <p className="font-bold">{productObj.price}</p> 
         <p className="font-mono">{productObj.description}</p>
    </div>)
}
          
export default Product;                                                                                                                                                                                                                                                                                                                                                                  