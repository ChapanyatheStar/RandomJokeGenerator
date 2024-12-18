document.getElementById('jokeBtn').addEventListener('click', fetchJoke);

function fetchJoke() {
  const jokeBox = document.getElementById('joke');
  
  // Fetch a random joke from an API
  fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => response.json())
    .then(data => {
      jokeBox.textContent = data.joke || "Oops! Couldn't fetch a joke.";
    })
    .catch(() => {
      jokeBox.textContent = "Something went wrong. Please try again!";
    });
}
