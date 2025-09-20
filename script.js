// Helper function to render one movie
function renderMovie(movie) {
  const filmsList = document.getElementById("films");
  const movieList = document.getElementById("movie-list");

  // Add movie to menu
  const li = document.createElement("li");
  li.classList.add("film", "item");
  li.textContent = movie.title;
  filmsList.appendChild(li);

  // Calculate available tickets
  let availableTickets = movie.capacity - movie.tickets_sold;

  // Build movie card
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" width="200" />
    <h3>${movie.title}</h3>
    <p><strong>Runtime:</strong> ${movie.runtime} mins</p>
    <p><strong>Showtime:</strong> ${movie.showtime}</p>
    <p><strong>Available Tickets:</strong> 
      <span id="tickets-count-${movie.id}">${availableTickets}</span>
    </p>
    <button id="buy-ticket-btn-${movie.id}">Buy Ticket</button>
  `;
  movieList.appendChild(card);

  // Buy Ticket button logic
  const buyBtn = card.querySelector(`#buy-ticket-btn-${movie.id}`);
  const ticketsCount = card.querySelector(`#tickets-count-${movie.id}`);

  buyBtn.addEventListener("click", () => {
    if (availableTickets > 0) {
      availableTickets--;
      ticketsCount.textContent = availableTickets;

      if (availableTickets === 0) {
        buyBtn.textContent = "Sold Out";
        buyBtn.disabled = true;
      }
    }
  });
}

//  Fetch Movie 1
fetch("http://localhost:3000/films/1")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 1:", err));

// Fetch Movie 2
fetch("http://localhost:3000/films/2")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 2:", err));

// Fetch Movie 3
fetch("http://localhost:3000/films/3")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 3:", err));

// Fetch Movie 4
fetch("http://localhost:3000/films/4")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 4:", err));

//Fetch Movie 5
fetch("http://localhost:3000/films/5")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 5:", err));

// Fetch Movie 6
fetch("http://localhost:3000/films/6")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 6:", err));

//Fetch Movie 7
fetch("http://localhost:3000/films/7")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 7:", err));

//Fetch Movie 8
fetch("http://localhost:3000/films/8")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 8:", err));

//Fetch Movie 9
fetch("http://localhost:3000/films/9")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 9:", err));

//Fetch Movie 10
fetch("http://localhost:3000/films/10")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film"));
//Fetch Movie 11
fetch("http://localhost:3000/films/11")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film 11", err));
//Fetch Movie 12
fetch("http://localhost:3000/films/12")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film"));
//Fetch Movie 13
fetch("http://localhost:3000/films/13")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film"));
//Fetch Movie 14
fetch("http://localhost:3000/films/14")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film"));
//Fetch Movie 15
fetch("http://localhost:3000/films/15")
  .then((res) => res.json())
  .then((movie) => renderMovie(movie))
  .catch((err) => console.error("Error fetching film"));
