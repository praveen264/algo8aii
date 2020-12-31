const express=require('express');
const router=express.Router();
const Payment=require('../models/payment');
router.get('/', async(req,res)=>{
  try {
      const payment=await Payment.find();
      res.json(payment)
  } catch (error) {
      res.send('Error');
  }
});

router.post('/',async(req,res)=>{
   const payment=new Payment({
       paymentdetails:req.body.paymentdetails,
       paymentstatus:req.body.paymentstatus
      
   })
   try{
     const a1=await payment.save();  
     res.json(a1);
   }
   catch(err)
   {
       res.send(err);
   }
});

router.get('/:id', async(req,res) => {
  try{
         const payment = await Payment.findById(req.params.id)
         res.json(payment)
  }catch(err){
      res.send('Error ' + err)
  }
})

router.patch('/:id',async(req,res)=> {
  try{
      const payment = await Payment.findById(req.params.id) 
      payment.paymentdetails=req.body.paymentdetails,
      payment.paymentstatus= req.body.paymentstatus

      const a1 = await payment.save()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})

router.delete('/:id',async(req,res)=> {
  try{
      const payment = await Payment.findById(req.params.id) 
    
      const a1 = await payment.remove()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})
module.exports=router;