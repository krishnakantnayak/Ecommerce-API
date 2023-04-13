//product Schema 
const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    }, name:{
        type:String,
        required:true
    }, quantity:{
        type:Number,
        required:true
    }
})

const Product=mongoose.model('Product',productSchema);
module.exports=Product;