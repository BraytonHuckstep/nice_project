const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy blog data (This can later be replaced with a database like MongoDB)
let blogs = [
    { title: 'First Blog', snippet: 'This is the first blog snippet...', body: 'Content of the first blog...' },
    { title: 'Second Blog', snippet: 'This is the second blog snippet...', body: 'Content of the second blog...' }
];

// Home page that lists all blogs
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', blogs });
});

// About page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Create a new blog (GET request to show form)
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog' });
});

// Submit a new blog (POST request to add blog)
app.post('/blogs/create', (req, res) => {
    const blog = req.body;
    blogs.push(blog);  // In a real app, save this to a database
    res.redirect('/');
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
