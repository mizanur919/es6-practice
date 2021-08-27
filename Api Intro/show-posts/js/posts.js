function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(j => displayPosts(j));
}
loadPosts();
function displayPosts(allPost){
    const posts = document.getElementById('posts');
    for(const post of allPost){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML =`
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        posts.appendChild(div);
    }
}