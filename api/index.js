'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3001;


mongoose.connect('mongodb://127.0.0.1:27017/watlabs',(err,res)=>{
     if (err) {
            console.error('Error connecting DB!!!');
            throw err;
        }else{
            app.listen(port,function(){
                console.log('Database connected: OK');
                console.log('API Server: OK running on http://localhost:'+port); 
            });
        }
});




    