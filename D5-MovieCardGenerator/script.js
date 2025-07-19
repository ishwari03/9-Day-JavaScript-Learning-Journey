const container = document.getElementById("movieContainer");
const movies = [
  {
    title: "The Notebook",
    rating: 9.0,
    genre: "Romance",
    poster: "notebook.jpg"
  },
  {
    title: "Inception",
    rating: 8.8,
    genre: "Sci-Fi",
    poster: "inception.jpg"
  },
  {
    title: "The Conjuring",
    rating: 7.5,
    genre: "Horror",
    poster: "conjuring.jpg"
  },
  {
    title: "Interstellar",
    rating: 9.0,
    genre: "Sci-Fi",
    poster: "interstellar.jpg"
  },
  {
    title: "Tenet",
    rating: 7.8,
    genre: "Action",
    poster: "tenet.jpg"
  },
  {
    title: "Your Name",
    rating: 8.4,
    genre: "Animation",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png"
  }
];

// const card = document.createElement("div");
// card.innerText = movie.title;
// container.appendChild(card);

for (let movie of movies){
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h2");
    title.innerText = movie.title;
    title.style.color = "white";
    const poster = document.createElement("img");
    poster.src = movie.poster;

    const rating = document.createElement("p");
    rating.innerText = "⭐ Rating: " + movie.rating;
    rating.style.color = " #f5c518";
    const genre = document.createElement("p");
    genre.innerText = "🎭 Genre: " + movie.genre;
    genre.style.color = "#aaaaaa";
    card.appendChild(title);
  card.appendChild(poster);
  card.appendChild(rating);
  card.appendChild(genre);
  container.appendChild(card);
}