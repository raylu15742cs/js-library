//creates the library and stores the books
let bookcounter = 0;
let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const addbooktime = document.getElementById("addbook");
addbooktime.addEventListener("click", function(){
    addBookToLibrary();
});

function addBookToLibrary() {
  // do stuff here
  var title = prompt("What is your name?");
  var author = prompt("What is your favorite number? ");
  var pages = prompt("What is your name?");
  var read = prompt("What is your favorite number? ");
  let bookcounter =  new Book(title,author,pages,read);
  myLibrary.push(bookcounter);
  bookcounter++;
}