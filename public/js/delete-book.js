async function deleteBook(event) {
    event.preventDefault();
  
    const id = event.target.id;
    
    const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        id
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
  

  // creates array with all delete buttons
const buttons = document.querySelectorAll('.delete-post-btn2');

// adding the event listener by looping through buttons
buttons.forEach(button => {
   button.addEventListener('click', deleteBook);
});
