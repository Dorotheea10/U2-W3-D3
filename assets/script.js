document.addEventListener("DOMContentLoaded", function () {
  // Effettua una chiamata HTTP di tipo GET all'endpoint
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => {
      // Popola la pagina con i dati ottenuti
      displayBooks(data);
    })
    .catch((error) => console.error("Errore durante il recupero dei libri:", error));

  function displayBooks(books) {
    const bookListContainer = document.getElementById("bookList");

    books.forEach((book) => {
      const card = createBookCard(book);
      bookListContainer.appendChild(card);
    });
  }

  function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "col-md-3 mb-4";

    card.innerHTML = `
            <div class="card">
                <img src="${book.img}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Prezzo: ${book.price}$</p>
                    <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
                </div>
            </div>
        `;

    return card;
  }

  function removeCard(button) {
    const card = button.closest(".card");
    card.style.display = "none";
  }
});
