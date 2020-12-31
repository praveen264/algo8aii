const mongoose=require('mongoose');



const alienSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
       
    },
    email:{
        type:String,
        required:true,
        unique:true
       
    },
    password:{
        type:String,
        required:true,
        unique:true
       
    },
    confirmpassword:{
        type:String,
        required:true,
        unique:true
      
    },
    phoneno:{
        type:String,
        required:true,
        unique:true
      
    },
    address:{
        type:String,
        required:true
       
    }
});


module.exports=mongoose.model('Customer',alienSchema);