const mongoose  = require("mongoose");

const connectdb  =()=> mongoose.connect('mongodb+srv://nithish876876:Nithish876@blogcluster.mflngdk.mongodb.net/?retryWrites=true&w=majority')
 
module.exports = connectdb

