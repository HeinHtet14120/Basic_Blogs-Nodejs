
const express = require('express')
const blogControllers = require('../controllers/blogControllers')


const router = express.Router();

router.get('/', (req,res) => {
    res.redirect('/blogs')
}) 

router.get('/blogs' , blogControllers.all_blogs )

router.post('/blogs' , blogControllers.blog_create)

router.get('/blogs/:id' , blogControllers.blog_details)

router.delete('/blogs/:id' , blogControllers.blog_delete)

module.exports = router;