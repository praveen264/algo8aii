const express=require('express');
const router=express.Router();
const Product=require('../models/product');
router.get('/', async(req,res)=>{
  try {
      const product=await Product.find();
      res.json(product)
  } catch (error) {
      res.send('Error');
  }
});

router.post('/',async(req,res)=>{
   const product=new Product({
       productname: req.body.productname,
       productprice:req.body.productprice
      
   })
   try{
     const a1=await product.save();  
     res.json(a1);
   }
   catch(err)
   {
       res.send(err);
   }
});

router.get('/:id', async(req,res) => {
  try{
         const product = await Product.findById(req.params.id)
         res.json(product)
  }catch(err){
      res.send('Error ' + err)
  }
})

router.patch('/:id',async(req,res)=> {
  try{
      const product = await Product.findById(req.params.id) 
      product.productname= req.body.productname,
      product.productprice= req.body.productprice

      const a1 = await product.save()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})

router.delete('/:id',async(req,res)=> {
  try{
      const product = await Product.findById(req.params.id) 
    
      const a1 = await product.remove()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})
module.exports=router;