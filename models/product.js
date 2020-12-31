const mongoose=require('mongoose');



const alienSchema=new mongoose.Schema({
    productname:{
        type:String,
        required:true,
        unique:true
    },
    productprice:{
        type:String,
        required:true,
        unique:true
       
    }
});


module.exports=mongoose.model('Product',alienSchema);