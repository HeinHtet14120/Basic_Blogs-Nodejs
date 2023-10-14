const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express();

//connect to MongoDb
const dbURI = 'mongodb+srv://user1:test123@cluster0.9f5r2sb.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
  .then((result) => {console.log('Connected')})
  .catch((err) => console.log(err))

app.listen(3000);
//middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'))

//register view engine
app.set('view engine', 'ejs')

//listen for request

app.use(blogRoutes)

app.get('/create', (req,res) => {
    res.render('blogs/create',{title : 'New Blog'})
});

app.get('/about', (req,res) => {
    res.render('about',{title : 'About'})
})

app.get('/about-us', (req,res) => {
    res.redirect('/about');
})

app.use((req,res) => {
    res.status(404).render('404',{title : '404'})
})


