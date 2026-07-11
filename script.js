const addBook = document.getElementById("add-book");
const canceBook = document.getElementById("cancel-btn");
const dialog = document.getElementById("add-book-dialog");

addBook.addEventListener("click", () => {
    dialog.showModal();
});

canceBook.addEventListener("click", () => {
    dialog.close();
})