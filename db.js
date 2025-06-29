const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/expenceDb")
.then(()=>{
    console.log("Database connect Successfully!");
}).catch((err)=>{
    console.log(err);
})