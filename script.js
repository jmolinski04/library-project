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
  const bookList = document.querySelector(".book-list");
  bookList.innerHTML = "";
  myLibrary.forEach((book) => {
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
  console.log(myLibrary);
});

toggleDialog.addEventListener("click", () => {
  sidebar.style.width = "250px";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.style.width = "0";
});
