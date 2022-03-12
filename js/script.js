const addBook = document.querySelector('.addBook');
const bookForm = document.querySelector('.bookForm');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary() {}

const harryPotter = new Book('Harry Potter', 'Woman', 698, 'not read yet');

addBook.addEventListener('click', () => {
  bookForm.classList.toggle('hidden');
});
