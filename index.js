//set up express framework
const express = require('express');
const app = express();
const port = 2000;

//set up database
const db = require('./config/mongoose');

//use router access
app.use(express.urlencoded());
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

//to set up static folder
app.use(express.static('assets'));

app.listen(port , function(err){
    if(err){
        console.log(`error occures:${err}`);
        return;
    }
    console.log(`server up and running on port:${port}`);
});