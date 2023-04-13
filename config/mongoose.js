const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/products_db');

const db=mongoose.connection;

db.on('error',console.error.bind('Error connecting to db'));

db.once('open',function(){
    console.log('db connected');
})

module.exports=db;