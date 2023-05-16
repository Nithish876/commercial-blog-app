const express = require('express')
const { GetAllBlogs,CreateBlog, UpdateBlog ,DeleteBlog, GetBlogWithId} = require('../controllers/BlogController')
const router = express.Router()

router.get('/',GetAllBlogs).post('/',CreateBlog)
router
.put('/:id',UpdateBlog)
.delete('/:id',DeleteBlog)
.get('/:id',GetBlogWithId)
module.exports = router
