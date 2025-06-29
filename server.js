const express = require('express');
const app = express();
require('./db');

app.get('/', (req,res)=>{
    res.send("welcome to our App");
})

app.listen(6000, ()=>{
    console.log("Server listening on PORT 6000");
})