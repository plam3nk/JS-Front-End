function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const baseUrl = 'http://localhost:3030/jsonstore/blog/';
    const postsSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let allPosts = {};

    loadPostsBtn.addEventListener('click', async () => {
        postsSelect.innerHTML = '';

        const response = await fetch(baseUrl + 'posts');
        allPosts = await response.json();

        for (const [postId, postObj] of Object.entries(allPosts)) {
            const option = document.createElement('option');
            option.value = postId;
            option.textContent = postObj.title;

            postsSelect.appendChild(option)
        }
    })

    viewBtn.addEventListener('click', async () => {

        postBody.innerHTML = '';
        postComments.innerHTML = '';

        const postId = postsSelect.value;

        postBody.textContent = allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title;

        const response = await fetch(baseUrl + 'comments');
        const allComments = await response.json()

        const filteredComments = Object.values(allComments).filter(e => e.postId === postId);

        filteredComments.forEach(comment => {
            const listItem = document.createElement('li');
            listItem.textContent = comment.text;
            listItem.id = comment.id;

            postComments.appendChild(listItem)
        })

    })
}

attachEvents();