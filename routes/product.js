//product router file
const express=require('express');
const router=express.Router();
const product_Controller=require('../controllers/v1/product_Controller');

//route to get all products
router.get('/',product_Controller.fetch);

//route to create a product
router.post('/create',product_Controller.create);

//route to delete a products
router.delete('/::id',product_Controller.delete);

//route to update a product
router.use('/::id',function(req,res,next){
    next();
},product_Controller.update);

module.exports=router;