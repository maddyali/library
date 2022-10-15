const title = document.querySelector("#title");
const author = document.querySelector("#author");
const readStatus = document.querySelector("#status");
const form = document.querySelector("#form");
const tableBody = document.querySelector("#tableBody");

const DEFAULT_DATA = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    readStatus: "Read",
  },
  {
    title: "The Compound Effect",
    author: "Darren Hardy",
    readStatus: "Not Read",
  },
];

// Storage for book objects
let library = DEFAULT_DATA;

// Class to make new books
class Book {
  constructor(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
  }
  info() {
    return `${this.title} by ${this.author}, ${this.readStatus} `;
  }
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
  tableBody.innerHTML = "";
  library.forEach((book, index) => {
    const row = tableBody.insertRow(-1);
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><button class="btn statusBtn" type="button" data-bookId="${index}">${book.readStatus}</button></td>
    <td><button class="btn deleteBtn" type="button"
    data-bookId="${index}">Delete</button></td> `;
  });
}
renderBook();

tableBody.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    const currentTitle =
      e.target.parentNode.parentNode.childNodes[1].textContent;
    const currentBookId = e.target.attributes[2].nodeValue;
    console.log(currentBookId);
    if (confirm(`Sure you want to delete? ${currentTitle}`)) {
      deleteBook(currentBookId);
    }
  }
  if (e.target.classList.contains("statusBtn")) {
    const currentBookId = e.target.attributes[2].nodeValue;
    changeStatus(currentBookId);
  }
  renderBook();
});

function deleteBook(bookId) {
  library.splice(bookId, 1);
}

function changeStatus(bookId) {
  if (library[bookId].readStatus === "Read")
    library[bookId].readStatus = "Not read";
  else library[bookId].readStatus = "Read";
}
