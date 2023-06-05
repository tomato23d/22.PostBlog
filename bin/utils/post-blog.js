//const postBlog = async (event) =>
/// finsish this utility


document.getElementById("the-form").addEventListener("click", (e) => {
    e.preventDefault();
    const post = {
    title: document.getElementById("title").value.trim(),
    text:  document.getElementById("text").value.trim(),
    };
    
    fetch('/', {
method: 'POST',
headers: {'Content-Type': 'application/json',},
body: JSON.stringify(post)})
.then((res) => res.json())
.then((data) => {console.log('Successful POST Review request:', data);
  return data;
})
.catch((error) => {console.error('Error in POST request:', error);
});
});


module.exports = postBlog;
