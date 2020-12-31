const mongoose=require('mongoose');



const alienSchema=new mongoose.Schema({
    paymentdetails:{
        type:String,
        required:true
    },
    paymentstatus:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model('Payment',alienSchema);