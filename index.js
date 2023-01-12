const express = require('express');
const app = express();
const port = 2000;
//const router = require('./routes');
const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use('/',require('./routes'));


//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


//app.use(express.static('assets'));
app.listen(port , function(err){
    if(err){
        console.log(`error occures:${err}`);
        return;
    }
    console.log(`server up and running on port:${port}`);
});