import exp from 'express' 
export const productApp=exp.Router()
//create product API with below operations
let products=[]
//create new product({productID,name,brand,price})
productApp.post('/products',(req,res)=>{
    //adding request to a variable
    let newProd=req.body
    //assign it to the array
    products.push(newProd)
    //responding the create 
    res.json({message:"product created"})
})
//read all products
productApp.get('/products',(req,res)=>{
    res.json({message:"all products",load:products})
})
//read all product by brand
productApp.get('/products/:brand',(req,res)=>{
    //geting the brand from end point
    let nbrand=req.params.brand
    // filtering by brands 
    let rBrand=products.find((elements)=>elements.brand==nbrand)
    if(rBrand){
    res.json({message:"this res for get products req",payload:rBrand})
    }
    else{
        res.json({message:"product not found"})
    }
   
})
//update a product
productApp.put('/products',(req,res)=>{
    //geting the body
    let Nproduct=req.body
    //finding index
    let index=products.findIndex(prodobj=>prodobj.productId==Nproduct.productId)
    // checking is it empty
  if(index==-1){
    return res.json({message:"no such product is available"})}
  //slicing the data and replacing it 
    products.splice(index,1,Nproduct)
  //responding the completion
  res.json({message:"updation completed"})
  }
)
//delete A product by id
productApp.delete('/products/:id',(req,res)=>{
  //geting the body
    let idofUrl=Number(req.params.id)
   //find index
   let index=products.findIndex((elements)=>elements.productId==idofUrl)
    // checking is it empty
  if(index==-1){
    return res.json({message:"no such product is available"})}
  //slicing the data and removing the data
  products.splice(index,1)
  //responding the completion
  res.json({message:"deletion completed "})
  })
