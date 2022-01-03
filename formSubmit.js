//this will be the action that is performed when I hit the submit button to add a new book

// library = []

// function Book(title, author, url, pages, pubDate) {
//     this.title = title;
//     this.author = author;
//     this.url = url;
//     this.pages = pages;
//     this.pubDate = pubDate;
//     this.daysToRead = (pages/300).toFixed(2);
//     this.read = false;
// }

const subBtn = document.getElementById("book-add-button");

// let addToForm = function () {
	const formTitle = document.getElementById("title").value;
	const formAuthor = document.getElementById("author").value;
	const formUrl = document.getElementById("url").value;
	const formPages = document.getElementById("numPages").value;
    const formPubDate = document.getElementById("pubYear").value;
    // const varName = new Book(formTitle, formAuthor, formUrl, formPages, formPubDate);
    // library.push(varName);
// };

// subBtn.addEventListener("submit", addToForm);

//Discourses on the First Decade of Titus Livius by Niccolò Machiavelli
//Niccolo Machiavelli
// https://www.gutenberg.org/files/10827/10827-h/10827-h.htm
// 561
// 531



//create a dynamic variable from the form input

//misc. notes

//learn keyframes
//web.dev
//dev.to
//platform.sh
//mediapipe
//aha! develop
//arrow functions
// https://study.com/academy/lesson/updating-html-form-elements-in-javascript-explanation-examples.html#lesson