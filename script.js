const title = document.querySelector("#title");
const author = document.querySelector("#author");
const readStatus = document.querySelector("#status");
const form = document.querySelector("#form");
const tableBody = document.querySelector("#tableBody");

// Storage for book objects
let library = [];

// Constructor to make new books
function Book(title, author, readStatus) {
  this.title = title;
  this.author = author;
  this.readStatus = readStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.readStatus} `;
  };
}

// Take user input & store books in library
form.addEventListener("submit", (e) => {
  // Stop form from submitting
  e.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  if (title.value === "" || author.value === "") return;
  const newBook = new Book(title.value, author.value, readStatus.value);
  library.push(newBook);
  console.log(library);
}
