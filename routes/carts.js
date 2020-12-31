const express=require('express');
const router=express.Router();
const Cart=require('../models/cart');
router.get('/', async(req,res)=>{
  try {
      const cart=await Cart.find();
      res.json(cart)
  } catch (error) {
      res.send('Error');
  }
});

router.post('/',async(req,res)=>{
   const cart=new Cart({
       productname: req.body.productname,
       quantity: req.body.quantity,
       price: req.body.price
   })
   try{
     const a1=await cart.save();  
     res.json(a1);
   }
   catch(err)
   {
       res.send(err);
   }
});

router.get('/:id', async(req,res) => {
  try{
         const cart = await Cart.findById(req.params.id)
         res.json(cart)
  }catch(err){
      res.send('Error ' + err)
  }
})



router.patch('/:id',async(req,res)=> {
  try{
      const cart = await Cart.findById(req.params.id) 
       cart.productname=req.body.productname,
       cart.quantity= req.body.quantity,
       cart.price= req.body.price


      const a1 = await cart.save()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})

router.delete('/:id',async(req,res)=> {
  try{
      const cart = await Cart.findById(req.params.id) 
    
      const a1 = await cart.remove()
      res.send("Deleted")   
  }catch(err){
      res.send('Error')
  }

})
module.exports=router;