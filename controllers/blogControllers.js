const Blog =require('../models/blogs');

const all_blogs = (req,res) => {
    Blog.find().sort({ createdAt : -1})
    .then((result) => {
        res.render('blogs/index', {title : 'All Blogs', blogs : result})
    })
}

const blog_create = (req,res) => {
    const blogs = new Blog(req.body)

    blogs.save()
    .then ((result) => {
        res.redirect('/')
    })
    .catch((err) => {
        console.log(err)
    })
}

const blog_details = (req,res) => {
    const id = req.params.id;

    Blog.findById(id)
    .then((result) => {
        res.render('blogs/details' , {blog : result, title : "Blog Details"})
    })
    .catch((err) => {
        res.status(400).render('404' ,{ title : '404'})
    })
}

const blog_delete = (req,res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect : '/blogs'});
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = {
    all_blogs,
    blog_create,
    blog_details,
    blog_delete
}