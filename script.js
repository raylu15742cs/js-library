//creates the library and stores the books
let bookcounter = 0;
let myLibrary = [];



class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages
    }
}
const addbooktime = document.getElementById("addbook");
addbooktime.addEventListener("click", function(){
    addBookToLibrary();
});
// adds book to library
function addBookToLibrary() {
  var title = prompt("Title?");
  var author = prompt("Author? ");
  var pages = prompt("Pages?");
  let bookcounter =  new Book(title,author,pages);
  myLibrary.push(bookcounter);
  bookcounter++;
  loopThroughLibrary();
}
// loops through the library
function loopThroughLibrary() {
    var resetcards = document.getElementById("libraries");
    resetcards.parentNode.removeChild(resetcards);
    const newDiv = document.createElement("div")
    newDiv.id='libraries';
    document.getElementById("cards").append(newDiv);
    let counter = 0
    while (myLibrary.length > counter){
        createEachCard(counter);
        counter++
    }
    addevents();
    removeevents();
}

// creates the cards
function createEachCard(counter){
    let countertitle = myLibrary[counter].title
    let counterauthor = myLibrary[counter].author
    let counterpages = myLibrary[counter].pages
    const indcard = document.createElement("div")
    indcard.className ='individualcards'
    indcard.id = counter;
    const textinside = document.createElement("p")
    textinside.innerHTML = `<strong>Title :</strong>  "${countertitle}" <br><br> <strong> Author :</strong> ${counterauthor} <br><br> <strong> Pages :</strong> ${counterpages} <br><br> <button class="status">Read</button> <br> <button class="remove">Remove</button>`;
    indcard.append(textinside)
    document.getElementById('libraries').append(indcard)
}

function addevents() {
    let boxes = document.querySelectorAll(".status");
    boxes.forEach(box=> {
        box.addEventListener("click", function(){
            if (box.innerHTML == "Read"){
                box.innerHTML = "Not Read"
                box.style.backgroundColor ="salmon"
            } else {
                box.innerHTML = "Read";
                box.style.backgroundColor ="lightgreen";
            }
        })
    })
}
function removeevents() {
    let removers = document.querySelectorAll(".remove");
    removers.forEach(remover => {
        remover.addEventListener("click", function() {
            remover.parentNode.parentNode.remove()
            clearLibrary();
        })
    })
}
function clearLibrary() {
    let clearlibrarycounter = 0
    while( myLibrary.length > clearlibrarycounter ) {
        var a = document.getElementById(clearlibrarycounter)
        if(a) {
        } else {
            myLibrary.splice(clearlibrarycounter,1);
        }
        clearlibrarycounter++ 
    }
}