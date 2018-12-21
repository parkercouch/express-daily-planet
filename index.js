// REQUIRES
const express = require('express');
const layouts = require('express-ejs-layouts');
const parser = require('body-parser');

// CONSTANTS
const PORT = 3000;
const app = express();

// VIEW ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(layouts);
app.use(express.static(__dirname + '/static'));
app.use(parser.urlencoded({ extended: false }));

// ------ ROUTES ------- //

// MAIN SITE ROUTES //
// Show homepage
app.get('/', (req, res) => {
  res.render('site/home');
});

// Show about page
app.get('/about', (req, res) => {
  res.render('site/about');
});

// Show contact page
app.get('/contact', (req, res) => {
  res.render('site/contact');
});

// ARTICLES ROUTES //
// Show list of articles
app.get('/articles', (req, res) => {
  res.render('articles/index');
});

// Show form to add new article
app.get('/articles/new', (req, res) => {
  res.render('articles/new');
});

// Add article to db
app.post('/articles', (req, res) => {
  res.redirect('/articles');
});

// Show individual article
app.get('/articles:id', (req, res) => {
  res.render('articles/show');
});


// Renders results page
// app.post('/', getWeatherData);


// Listen on PORT 3000
app.listen(PORT, () => {
  console.log('Listening on 3000');
});
