document.addEventListener("DOMContentLoaded", () => {
  const movieList = document.getElementById("movie-list");

  fetch("http://localhost:3000/films/1")
    .then((res) => res.json())
    .then((movie) => {
      // Calculate available tickets
      let availableTickets = movie.capacity - movie.tickets_sold;

      // Create movie card
      const card = document.createElement("div");
      card.classList.add("movie-card");
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" width="200" />
        <h3>${movie.title}</h3>
        <p><strong>Runtime:</strong> ${movie.runtime} mins</p>
        <p><strong>Showtime:</strong> ${movie.showtime}</p>
        <p><strong>Available Tickets:</strong> <span id="tickets-count">${availableTickets}</span></p>
        <button id="buy-ticket-btn">Buy Ticket</button>
      `;

      movieList.appendChild(card);

      // Handle Buy Ticket button
      const buyBtn = card.querySelector("#buy-ticket-btn");
      const ticketsCount = card.querySelector("#tickets-count");

      buyBtn.addEventListener("click", () => {
        if (availableTickets > 0) {
          availableTickets--; // decrease available tickets
          ticketsCount.textContent = availableTickets;

          // disable button if sold out
          if (availableTickets === 0) {
            buyBtn.textContent = "Sold Out";
            buyBtn.disabled = true;
          }
        }
      });
    })
    .catch((err) => {
      console.error("Error fetching film:", err);
      movieList.innerHTML = `<p style="color:red;">⚠️ Could not load movie data.</p>`;
    });
});
