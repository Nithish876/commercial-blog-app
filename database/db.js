const mongoose = require('mongoose')

const BlogSchema =new mongoose.Schema({
    img:{
        type:String
    },
    title:{
    type:String,
    required:true
    },
    author:{
        type:String,
        required:true
    },
    para:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


blogmodel = mongoose.model('blogs',BlogSchema);

module.exports = blogmodel;