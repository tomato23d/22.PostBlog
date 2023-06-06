
let date = new Date();
async function postBlog(event) {
    event.preventDefault();

    const post = {
    title: document.getElementById("title").value.trim(),
    text:  document.getElementById("text").value.trim(),
    date_created: date.toLocaleString(),
    };

    console.log(post);

    const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(post)})

        //console.log(response);

      document.location.replace('/');
 
}

document.getElementById("the-form").addEventListener("submit", postBlog);
document.getElementById("submit-btn").addEventListener("click", postBlog);