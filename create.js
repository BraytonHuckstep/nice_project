<%- include('./partials/head.ejs') %>
<body>
    <%- include('./partials/nav.ejs') %>

    <div class="create-blog content">
        <h2>Create a New Blog</h2>
        <form action="/blogs/create" method="POST">
            <label for="title">Blog Title</label>
            <input type="text" id="title" name="title" required>

            <label for="snippet">Blog Snippet</label>
            <input type="text" id="snippet" name="snippet" required>

            <label for="body">Blog Body</label>
            <textarea id="body" name="body" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>

    <%- include('./partials/footer.ejs') %>
</body>
</html>
