//Producvt controller

const Product = require('../../models/products');
const Counter = require('../../models/counters');

//to get all the products below fucntion used
module.exports.fetch = async function (req, res) {
    
    await Product.find({}).then(function(d){
        
        res.json({data:{products:d}})
    })
}
//to create a new product in db below function is used
module.exports.create = async function (req, res) {
    await Counter.find({}).then((d)=>{
        if(d.length==0){
            Counter.create({
                id:'productID',
                value:1
            })
        }
    })

    await Counter.findOneAndUpdate({ id: 'productID' }, { $inc: { value: 1 } }).then(function(d){
        Product.create({
            id:d.value,
            name:req.body.name,
            quantity:req.body.quantity
        }).then(function(product){
            console.log(product)
            res.json({data:product});
        })
    })
    
    
}
//to delete a product by its id below function is used
module.exports.delete=async function(req,res){
    await Product.findOneAndDelete({id:req.params.id}).then(function(d){
        
        res.json({data:{message:'product deleted'}});
    }).catch((err)=>{console.log(`error is ${err}`)});
}
//to update a product by its id and by a specific value below function is used 
module.exports.update=async function(req,res){
    Product.findOneAndUpdate({id:req.params.id},{ $inc: { quantity: req.query.number } }).then((d)=>{
        res.json({data:{message:'product updated'}})
    })
    
}