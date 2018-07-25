const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('Could not connect to database:', err)
    } else {
        console.log('Connected to the database: ' + config.db)
    }
});

app.use(express.static(__dirname + '/client/dist/client'))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080,()=>{
    console.log('Listening on Port 8080');
})