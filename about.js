<%- include('./partials/head.ejs') %>
<body>
    <%- include('./partials/nav.ejs') %>

    <div class="not-found content">
        <h1>Oops, page not found :)</h1>
    </div>

    <%- include('./partials/footer.ejs') %>
</body>
</html><%- include('./partials/head.ejs') %>
<body>
    <%- include('./partials/nav.ejs') %>

    <div class="not-found content">
        <h1>Oops, page not found!</h1>
        <p>The page you are looking for does not exist.</p>
    </div>

    <%- include('./partials/footer.ejs') %>
</body>
</html><%- include('./partials/head.ejs') %>
<body>
    <%- include('./partials/nav.ejs') %>

    <div class="about content">
        <h1>About</h1>
        <p>This is a simple blog application showcasing the power of EJS templates and Node.js.</p>
    </div>

    <%- include('./partials/footer.ejs') %>
</body>
</html>const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Sample blog data (This can later be replaced with a database like MongoDB)
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
});<%- include('./partials/head.ejs') %>
<body>
    <%- include('./partials/nav.ejs') %>

    <div class="create content">
        <h1>Create a New Blog</h1>
        <form action="/blogs/create" method="POST">
            <label for="title">Title:</label>
            <input type="text" name="title" id="title" required>

            <label for="snippet">Snippet:</label>
            <textarea name="snippet" id="snippet" required></textarea>

            <label for="body">Body:</label>
            <textarea name="body" id="body" required></textarea>

            <button type="submit">Create Blog</button>
        </form>
    </div>

    <%- include('./partials/footer.ejs') %>
</body>
</html><footer>
    <p>&copy; 2023 Blog App</p>
</footer><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
    <link rel="stylesheet" href="/stylesheets/style.css">
</head><%- include('./partials/head.ejs') %>
<body>
    <%- include('./partials/nav.ejs') %>

    <div class="content">
        <h1>Welcome to the Blog</h1>
        <ul class="blog-list">
            <% blogs.forEach(blog => { %>
                <li>
                    <h2><%= blog.title %></h2>
                    <p><%= blog.snippet %></p>
                    <a href="#">Read More</a> 
                </li>
            <% }); %>
        </ul>
        <a href="/blogs/create" class="btn">Create New Blog</a>
    </div>

    <%- include('./partials/footer.ejs') %>
</body>
</html><nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</nav>body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

.content {
    width: 80%;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.blog-list li {
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
}

.btn {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

nav {
    background-color: #333;
    color: #fff;
    padding: 10px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav li {
    display: inline-block;
    margin-right: 20px;
}

nav a {
    color: #fff;
    text-decoration: none;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: #fff;
}{
  "name": "blog-app",
  "version": "1.0.0",
  "description": "Simple blog application",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.20.2",
    "ejs": "^3.1.9",
    "express": "^4.18.2"
  }
}// ... other code in app.js ...

// Home Page (List of Blogs)
app.get('/', (req, res) => {
    res.render('index', { title: 'Ninja Blog', blogs });
});

// About Page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Ninja Blog' });
});

// Create a New Blog (GET request to show form)
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog Post' });
});

// ... other code in app.js ...
