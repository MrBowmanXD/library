const addBook = document.querySelector('.addBook');
const bookForm = document.querySelector('.bookForm');
const submitBtn = document.querySelector('.submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const flexContainer = document.querySelector('.flex-container');
let myLibrary = [];
let counter = 1;

function Book(title, author, pages, read, counter) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.counter = counter;
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
  let newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.value,
    counter++
  );
  myLibrary.push(newBook);

  loopBooks();
  formToggler();
  addCheckBoxChecker();
  removeBook();
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
    div.classList.add(`counter${book.counter}Remove`);
    div.innerHTML += `<p class="bold">Title</p><p>${book.title}</p>
  <p class="bold">Author</p><p>${book.author}</p>
  <p class="bold">Pages</p><p>${parseInt(book.pages)}</p>
  <p class="bold readMaybe">Read</p><input class="checkbox" type="checkbox"><p class="userRead">${
    book.read
  }</p>
  <button class="remove counter${book.counter}">Remove</button>`;

    flexContainer.appendChild(div);
  });
}

function removeBook() {
  myLibrary.forEach((book) => {
    const selectedBook = document.querySelector(`.counter${book.counter}`);
    const removedBook = document.querySelector(`.counter${book.counter}Remove`);
    selectedBook.addEventListener('click', () => {
      removedBook.classList.add('hidden');
      book.removed = true;
    });
    if (book.removed) {
      flexContainer.removeChild(removedBook);
    }
  });
}

function addCheckBoxChecker() {
  myLibrary.forEach((book) => {
    const checkbox = document.querySelector('.checkbox');
    const userRead = document.querySelector('.userRead');
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        userRead.textContent = 'Yes i read it';
      } else {
        userRead.textContent = 'Not read yet';
      }
    });
  });
}
