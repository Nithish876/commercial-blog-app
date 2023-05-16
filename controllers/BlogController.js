const blogmodel = require('../database/db')
const {ObjectId} =require('mongodb')
const GetAllBlogs = async(req,res)=>{
    console.log('blogs'); 
    const blogs =await  blogmodel.find(); 
    res.status(201).json(blogs);
}
const GetBlogWithId = async(req,res)=>{
    const {id}= req.params
    const foundblog = await blogmodel.findOne({_id:new ObjectId(id)});
    res.status(201).json(foundblog);
}
const CreateBlog = async(req,res)=>{
    console.log(req.body);
    try {
        const {para,title,author} = req.body
        const img= req.body?.img
        const blogdoc = {
            img,title,author,para
        }
        const createdblog = await blogmodel.create(blogdoc);
        res.status(201).json({msg:"blog created successfully",createdblog});
    } catch (error) {
        res.status(200).json(error);
    } 
   
}
const UpdateBlog =async (req,res)=>{
     try {
        const {id} = req.params
       const data = req.body
        const foundblog = await blogmodel.updateOne({_id:new ObjectId(id)},data);
        return res.status(200).json({msg:"blog updated successfully"}) 
     } catch (error) {
        res.status(200).json(error)
     }
}
const DeleteBlog = async(req,res)=>{
    const {id} = req.params;
    await blogmodel.findOneAndDelete({_id:new ObjectId(id)})
    res.status(200).json({msg:"blog deleted succesfullty"});
}
module.exports = {
    GetAllBlogs,
    GetBlogWithId,
    CreateBlog,
    DeleteBlog,
    UpdateBlog
}