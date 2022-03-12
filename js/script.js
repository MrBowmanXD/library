const addBook = document.querySelector('.addBook');
const bookForm = document.querySelector('.bookForm');
const submitBtn = document.querySelector('.submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const flexContainer = document.querySelector('.flex-container');
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

// const harryPotter = new Book('Harry Potter', 'Woman', 698, 'not read yet');

addBook.addEventListener('click', () => {
  formToggler();
  removeFlexChild();
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);

  loopBooks();
  formToggler();
});

function formToggler() {
  bookForm.classList.toggle('hidden');
}

function removeFlexChild() {
  const flexChildren = document.querySelectorAll('.flex-child');
  let flexChildrenArray = [...flexChildren];

  flexChildrenArray.forEach((child) => {
    flexContainer.removeChild(child);
  });
}

function loopBooks() {
  myLibrary.forEach((book) => {
    const div = document.createElement('div');
    div.classList.add('flex-child');
    div.innerHTML += `<p class="bold">Title</p><p>${book.title}</p>
  <p class="bold">Author</p><p>${book.author}</p>
  <p class="bold">Pages</p><p>${parseInt(book.pages)}</p>
  <p class="bold">Read</p><p>${book.read}</p>`;

    flexContainer.appendChild(div);
  });
}
