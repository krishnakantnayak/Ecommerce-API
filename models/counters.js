//Schema model for ID generation for products
const mongoose=require('mongoose');

const counterSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        default:'productId'
    },
    value:{
        type:Number,
        required:true,
        default:0
    }
});

const Counter=mongoose.model('Counter',counterSchema);
module.exports=Counter;