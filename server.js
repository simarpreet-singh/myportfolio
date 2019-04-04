const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

// -- INDEX --
app.get('/', (req, res) => {
  res.render("index", {
        title: "data science & economics | simarpreet singh ",
        active_home:"active",
        active_about:"",
        active_projects:"",
        active_contact:""
    })
});

// -- PORTFOLIO --
app.get('/portfolio', (req, res) => {
  res.redirect('/#portfolio')
});
// Redirect /projects to /portfolio
app.get('/projects', (req, res) => {
  res.redirect('/#portfolio')
});

// portfolio projects

//Digital Marketing
app.get('/portfolio/digital-marketing-analytics', (req, res) => {
  res.render("projects/digital-marketing-analytics", {
        title: "digital marketing analytics | simarpreet singh",
        active_home:"",
        active_about:"",
        active_projects:"active",
        active_contact:""
    })
});

//KNN
app.get('/portfolio/knn', (req, res) => {
  res.render("projects/knn", {
        title: "nearest neighbor algorithm | simarpreet singh",
        active_home:"",
        active_about:"",
        active_projects:"active",
        active_contact:""
    })
});

//CNN
app.get('/portfolio/ccn', (req, res) => {
  res.render("projects/ccn", {
        title: "community cell networks | simarpreet singh",
        active_home:"",
        active_about:"",
        active_projects:"active",
        active_contact:""
    })
});

//SAHF Tour
app.get('/portfolio/music', (req, res) => {
  res.render("projects/music", {
        title: "sun and her flowers tour - rupi kaur | simarpreet singh",
        active_home:"",
        active_about:"",
        active_projects:"active",
        active_contact:""
    })
});



// -- ABOUT --
app.get('/about', (req, res) => {
  res.redirect('/#about')
});
// Redirect /resume to /about
app.get('/resume', (req, res) => {
  res.redirect('/about')
});

// -- CONTACT --
app.get('/contact', (req, res) => {
  res.render("contact", {
        title: "contact | simarpreet singh",
        active_home:"",
        active_about:"",
        active_projects:"",
        active_contact:"active"
    })
});

// -- BLOG --
app.get('/blog', (req, res) => {
  res.render("blog", {
        title: "blog | simarpreet singh",
        active_home:"",
        active_about:"",
        active_projects:"",
        active_contact:"",
        active_blog:"active"
    })
});


app.listen(process.env.PORT || port, ()=> console.log('simcreate server started, port ' + port));
