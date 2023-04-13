const express=require('express');
const app=express();
const port=8000;
const bodyParser = require('body-parser');
const mongoose=require('./config/mongoose.js');

//adding body parser for getting json requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//adding routers
app.use('/',require('./routes/index.js'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in listening ${err}`);
    }
    console.log(`app listening at port ${port}`);
})