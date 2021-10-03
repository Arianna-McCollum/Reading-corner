async function deletePost(event) {
  event.preventDefault();

  const id = event.target.id;

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

// creates array with all post delete buttons
const elements = document.querySelectorAll(".delete-post-btn");

// adding the event listener by looping
elements.forEach((element) => {
  element.addEventListener("click", deletePost);
});
