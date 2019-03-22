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
        active_about:"",
        active_projects:"",
        active_contact:""
    })
});

// -- PORTFOLIO --
app.get('/portfolio', (req, res) => {
  res.render("portfolio", {
        title: "data science portfolio | simarpreet singh",
        active_about:"",
        active_projects:"active",
        active_contact:""
    })
});
// Redirect /projects to /portfolio
app.get('/projects', (req, res) => {
  res.redirect('/portfolio')
});

// -- ABOUT --
app.get('/about', (req, res) => {
  res.render("about", {
        title: "about & resume | simarpreet singh",
        active_about:"active",
        active_projects:"",
        active_contact:""
    })
});
// Redirect /resume to /about
app.get('/resume', (req, res) => {
  res.redirect('/about')
});

// -- CONTACT --
app.get('/contact', (req, res) => {
  res.render("contact", {
        title: "contact | simarpreet singh",
        active_about:"",
        active_projects:"",
        active_contact:"active"
    })
});

// -- BLOG --
app.get('/blog', (req, res) => {
  res.render("blog", {
        title: "blog | simarpreet singh",
        active_about:"",
        active_projects:"",
        active_contact:"",
        active_blog:"active"
    })
});


app.listen(port, ()=> console.log('simcreate server started, port ' + port));
