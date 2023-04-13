//main router of API 
const express=require('express');
const router=express.Router();
const default_Controller=require('../controllers/v1/default_controller');

router.get('/',default_Controller.default);

//all product requests will routed to below router
router.use('/products',require('./product.js'));



module.exports=router;