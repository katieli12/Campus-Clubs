

    function createPost() {
        var title = document.getElementById('postTitle').value;
        var content = document.getElementById('postContent').value;

        var postElement = document.createElement('div');
        postElement.className = 'post';

        var titleElement = document.createElement('h2');
        titleElement.textContent = title;

        var contentElement = document.createElement('p');
        contentElement.textContent = content;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);

        var postsContainer = document.getElementById('posts');
        postsContainer.appendChild(postElement);

        document.getElementById('postTitle').value = '';
        document.getElementById('postContent').value = '';

        document.getElementById('textt').textContent = "";
        document.getElementById('texttt').textContent = "TestUser";

        var x = document.getElementById('section3');
        var y = document.getElementById('section2');
        x.style.display = 'none';
        y.style.display = 'block';
    }

    function showf() {
        var x = document.getElementById('section3');
        var y = document.getElementById('section2');
        x.style.display = 'block';
        y.style.display = 'none'; 
    }