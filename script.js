const addBookBtn = document.querySelector(".btn-add");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book1 = new Book("The Hobbit", "J.R.R Tolkien", 600, "Finished");
const book2 = new Book(
  "Lord Of The Rings",
  "J.R.R Tolkien",
  1200,
  "Not read yet"
);

const library = [book1];

addBookBtn.addEventListener("click", () => {
  const bookList = document.querySelector(".book-list");
  library.forEach((book) => {
    const { title, author, pages, read } = book;
    // const cardDiv = document.createElement("<div>");
    // cardDiv.classList.add("card");
    // bookList.appendChild(cardDiv);

    bookList.innerHTML += `<div class="card">
             <h3>Title: ${title}</h3>
             <h3>Author: ${author}</h3>
             <h3>Number of pages: ${pages}</h3>
             <h3>Reading status: ${read}</h3>
        </div>`;
  });
});
