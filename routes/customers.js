const express=require('express');
const router=express.Router();
const Customer=require('../models/customer');
router.get('/', async(req,res)=>{
  try {
      const customer=await Customer.find();
      res.json(customer)
  } catch (error) {
      res.send('Error');
  }
});

router.post('/',async(req,res)=>{
   const customer=new Customer({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       confirmpassword: req.body.confirmpassword,
       phoneno: req.body.phoneno,
       address: req.body.address
   })
   try{
     const a1=await customer.save();  
     res.json(a1);
   }
   catch(err)
   {
       res.send(err);
   }
});

router.get('/:id', async(req,res) => {
  try{
         const customer = await Customer.findById(req.params.id)
         res.json(customer)
  }catch(err){
      res.send('Error ' + err)
  }
})


router.post('/customer_login', async(req,res) => {
  try{
         const customer = await Customer.find({
          email: req.body.email,
          password: req.body.password
         })
        
          res.send((customer))
        
      
  }catch(err){
      res.send('Error ' + err)
  }
})

router.patch('/:id',async(req,res)=> {
  try{
      const customer = await Customer.findById(req.params.id) 
       customer.name=req.body.name,
       customer.email= req.body.email,
       customer.password= req.body.password,
       customer.confirmpassword= req.body.confirmpassword,
       customer.phoneno= req.body.phoneno,
       customer.address=req.body.address

      const a1 = await customer.save()
      res.json(a1)   
  }catch(err){
      res.send('Error')
  }

})

router.delete('/:id',async(req,res)=> {
  try{
      const customer = await Customer.findById(req.params.id) 
    
      const a1 = await customer.remove()
      res.send("Deleted")   
  }catch(err){
      res.send('Error')
  }

})
module.exports=router;