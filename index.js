const express = require('express')
const mongoose = require('mongoose')
const router = require('./Routes/Route')
const app = express()
const bp = require('body-parser')
app.use(bp.urlencoded({ extended: false }));
const cors = require('cors');
const connectdb = require('./database/DBconnection')
app.use(cors());
app.use(express.json())
app.use("/api/blogs", router);
PORT = process.env.PORT || 8001
app.use('/',(req,res)=>{
    res.status(200).json({msg:"welcome to blog api",author:"nithish"})
})
connectdb()
.then(()=>{
    console.log('connected to db');
    app.listen(PORT, () => {
        console.log('server is listening on port ' + PORT);
    })
    
})



