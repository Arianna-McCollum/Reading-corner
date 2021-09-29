async function deletePost(event) {
  event.preventDefault();
  console.log("click");

  const id = event.target.id;

  console.log(id);
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
console.log(elements);

// adding the event listener by looping
elements.forEach((element) => {
  element.addEventListener("click", deletePost);
});
