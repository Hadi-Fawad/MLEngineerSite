const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up layouts
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/books', (req, res) => {
  res.render('books', { title: 'Books' });
});

app.get('/photos', (req, res) => {
  res.render('photos', { title: 'Photos' });
});

app.get('/research', (req, res) => {
  res.render('research', { title: 'Research' });
});

app.get('/work', (req, res) => {
  res.render('work', { title: 'Work' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});