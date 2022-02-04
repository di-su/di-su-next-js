// Object constructor https://www.theodinproject.com/courses/javascript/lessons/objects-and-object-constructors


// var database = firebase.database();

let myLibrary = [];

// // this a() function doesn't work (trying to default values in firebase DB)
// function a() {
//   var i = 0;
//   do {
//     let defaultBooks = new Book(`title`+i+``, `author`+i+``, `pages`+i+``, `not read`)    
//     // console.log([defaultBooks])
//     firebase.database().ref('/books').push(defaultBooks) 
//     i++ 
//   } while (i < 4)

//   // console.log("sd")
  
// }
// a()


function toggleReadStatus(index) {
  if (myLibrary[index].read === "read") {
    myLibrary[index].read = "not read"
  } else {
    myLibrary[index].read = "read"
  }
  displayBooks()
}

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  // this.info = function() {
  //   return `${title + " by " + author + ", " + pages + ", " + this.read}`
  // }
}

Book.prototype.read = "not read"

function defaultBooks() {
  var i = 0;
  do {
    let defaultBooks = new Book(`title`+i+``, `author`+i+``, `pages`+i+``, `not read`)
    myLibrary.push(defaultBooks)
    i++ 
  } while (i < 4)
}

function clearTable() {
  book = document.getElementById('books-table')
  book.innerHTML = `<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Read</th><th>Delete</th></tr>`;
}

function displayBooks() {
  clearTable();
  var i = 0;
  do {
    book = document.getElementById('books-table').insertRow();
    book.setAttribute('data-index', [i])
    book.innerHTML = 
    `
    <td>`+myLibrary[i].title+`</td>
    <td>`+myLibrary[i].author+`</td>
    <td>`+myLibrary[i].pages+`</td>
    <td>`+myLibrary[i].read+`</td>
    <td><button onclick="toggleReadStatus(`+[i]+`)">read</button></td>
    <td><button onclick="deleteBook(`+[i]+`)">delete</button></td>
    `;
    i++
  } while (i < myLibrary.length)
}

function deleteBook(index) {
  if (index > -1) {
    myLibrary.splice(index, 1);
  }
  displayBooks()
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value
  let author = document.querySelector("#author").value
  let pages = document.querySelector("#pages").value
  let read = document.querySelector("#read").value

  // function does not accept prototype value
  let newBook = new Book(title, author, pages)
  
  // prototype value is set here
  newBook.read = read

  myLibrary.push(newBook)
  displayBooks()
}

defaultBooks()
displayBooks()