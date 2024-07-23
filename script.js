const toggleDialog = document.querySelector(".dialog-toggle");
const sidebar = document.querySelector("#sidebar");
const closeBtn = document.querySelector(".close-dialog");
const addBookBtn = document.querySelector(".add-btn");
const form = document.querySelector("form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
  myLibrary.push(book);
}

function displayBook() {
  myLibrary.forEach((book) => {
    const bookList = document.querySelector(".book-list");
    const { title, author, pages } = book;
    bookList.innerHTML += `<div class="card">
              <h3>Title: ${title}</h3>
              <h3>Author: ${author}</h3>
              <h3>Number of pages: ${pages}</h3>
             </div>`;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

addBookBtn.addEventListener("click", () => {
  addBookToLibrary();
  displayBook();
});

toggleDialog.addEventListener("click", () => {
  sidebar.style.width = "250px";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.style.width = "0";
});

// const book1 = new Book("The Hobbit", "J.R.R Tolkien", 600, "Finished");
// const book2 = new Book(
//   "Lord Of The Rings",
//   "J.R.R Tolkien",
//   1200,
//   "Not read yet"
// );

// const library = [book1];

// addBookBtn.addEventListener("click", () => {
//   const bookList = document.querySelector(".book-list");
//   library.forEach((book) => {
//     const { title, author, pages, read } = book;
//     // const cardDiv = document.createElement("<div>");
//     // cardDiv.classList.add("card");
//     // bookList.appendChild(cardDiv);

//     bookList.innerHTML += `<div class="card">
//              <h3>Title: ${title}</h3>
//              <h3>Author: ${author}</h3>
//              <h3>Number of pages: ${pages}</h3>
//              <h3>Reading status: ${read}</h3>
//         </div>`;
//   });
// });
