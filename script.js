const addBook = document.getElementById("add-book");
const canceBook = document.getElementById("cancel-btn");
const dialog = document.getElementById("add-book-dialog");

addBook.addEventListener("click", () => {
    dialog.showModal();
});

canceBook.addEventListener("click", () => {
    dialog.close();
});

const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addNewBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}