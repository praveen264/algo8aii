const mongoose=require('mongoose');



const alienSchema=new mongoose.Schema({
    productname:{
        type:String,
        required:true,
        unique:true
    },
    quantity:{
        type:String,
        required:true,
        unique:true
       
    },
    price:{
        type:String,
        required:true
       
    }
});


module.exports=mongoose.model('Cart',alienSchema);