const title = document.querySelector("#title");
const author = document.querySelector("#author");
const readStatus = document.querySelector("#status");
const form = document.querySelector("#form");
const tableBody = document.querySelector("#tableBody");

// Storage for book objects
let library = [
  {
    title: "Ex title",
    author: "Ex author",
    readStatus: "Read",
  },
];

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
  renderBook();
  console.log(library);
}

// Add a table row with data: book, author, read btn, delete btn.
function renderBook() {
  const row = tableBody.insertRow();
  library.forEach((book, index) => {
    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td><button class="btn" id="statusBtn" type="button">${book.readStatus}</button></td>
  <td><button class="btn deleteBtn" id="deleteBtn" type="button"
  data-bookId="${index}">Delete</button></td> `;
  });
}
