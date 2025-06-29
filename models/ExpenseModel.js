const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    type : {
        type : String,
        enum : ["income", "expense"],
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        require : true
    },
    
})