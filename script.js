function fetchPosts() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch data from API
    fetch(apiUrl)
        .then(response => response.json()) // Parse JSON response
        .then(data => displayPosts(data))   // Handle the data
        .catch(error => console.error('Error fetching data:', error));
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear existing content

    posts.slice(0, 10).forEach(post => {  // Limit to 10 posts for simplicity
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}
