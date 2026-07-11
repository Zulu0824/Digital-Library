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

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

const content = document.querySelector(".main-content");
const template = document.querySelector(".card-template");

function bookCard() {
    content.innerHTML = "";
    myLibrary.forEach((book) => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector(".card-box");

        card.dataset.id = book.id;
        card.querySelector(".card-title").textContent = book.title;
        card.querySelector(".card-author").textContent = `by ${book.author}`;
        card.querySelector(".card-pages").textContent = `${book.pages} Pages`;

        const readIt = card.querySelector(".card-read");
        readIt.textContent = book.read ? "Read" : "Not Read";
        readIt.classList.toggle("unread", !book.read);

        const togglebtn = card.querySelector(".read-btn");
        togglebtn.textContent = book.read ? "Unread" : "Read";
        togglebtn.classList.toggle("read", book.read);

        content.appendChild(clone);
    });
}

addBookToLibrary("The Invisible Man", "H.G. Wells", 208, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);

bookCard();

const form = document.getElementById("add-book-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("book_title").value;
    const author = document.getElementById("book_author").value;
    const pages = document.getElementById("book_pages").value;
    const read = document.getElementById("read_check").checked;

    addBookToLibrary(title, author, pages, read);
    bookCard();

    form.reset();
    dialog.close();
});