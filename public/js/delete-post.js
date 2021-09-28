async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        book_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
  document.querySelector('.delete-post-btn2').addEventListener('click', deleteFormHandler);