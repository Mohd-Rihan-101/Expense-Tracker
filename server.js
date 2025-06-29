const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require('./db');

dotenv.config();
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

app.get('/', (req,res)=>{
    res.send("welcome to our App");
})

app.listen(6000, ()=>{
    console.log("Server listening on PORT 6000");
})



