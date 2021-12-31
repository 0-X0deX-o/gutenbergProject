let library = [];
let baseUrl = 'https://www.gutenburg.org/'
let basePicUrl = "./icons/"
const picUrlSuffixes = ["kingjohncover.jpg", "richardiiicover.jpg", "genryivcover.jpg", "henryivpicover.jpg", "henryvcover.jpg", "henryvipicover.jpg", "henryvipiicover.jpg", "henryvipiiicover.jpg", "henryviiiicover.jpg", "pilgrimsprogresscover.jpg", "warandpeacecover.jpg", "whitenightscover.jpg"]

//create a function to dynamically create the html for the library
//  create a div for each title in the library

//Book constructor function
function Book(title, author, url, pages, pubDate) {
    this.title = title;
    this.author = author;
    this.url = url;
    this.pages = pages;
    this.pubDate = pubDate;
    this.daysToRead = (pages/300).toFixed(2);
    this.read = false;
}

//add twelve random titles from my reading list
const kingJohn = new Book('King John', 'William Shakespeare', '/cache/epub/1110/pg1110.html', 320, 1597)
const richardIII = new Book('Richard III', 'William Shakespeare', '/cache/epub/1103/pg1103.html', 168, 1593)
const henryIVPI = new Book('Henry IV Part I', 'William Shakespeare', '/cache/epub/1780/pg1780.html', 336, 1598)
const henryIVPII = new Book('Henry IV Part II', 'William Shakespeare', '/cache/epub/1782/pg1782.html', 273, 1598)
const henryV = new Book('Henry V', 'William Shakespeare', '/cache/epub/2253/pg2253.html', 416, 1599)
const henryVIPI = new Book('Henry VI Part I', 'William Shakespeare', '/cache/epub/1765/pg1765.html', 304, 1592)
const henryVIPII = new Book('Henry VI Part II', 'William Shakespeare', '/cache/epub/2255/pg2255.html ', 491, 1592)
const henryVIPIII = new Book('Henry VI Part III', 'William Shakespeare', '/cache/epub/2256/pg2256.html', 384, 1592)
const henryVIII = new Book('Henry VIII', 'William Shakespeare', '/cache/epub/1136/pg1136.html', 352, 1611)
const pilrimsProgress = new Book('Pilgrim\'s Progress', 'John Bunyan', '/files/131/131-h/131-h.htm', 324, 1678)
const warAndPeace = new Book('War and Peace', 'Leo Tolstoy', '/files/2600/2600-h/2600-h.htm', 1140, 1899)
const whiteNights = new Book('White Night\'s', 'Fydor Dostoyevsky', '/files/36034/36034-h/36034-h.htm', 82, 1848)

//create a function to add the titles to the library array
const addToLibrary = function(bookArray) {
    for (let i = 0; i < bookArray.length; i++) {
        library.push(bookArray[i])
    }
}

//add the titles to the library array
addToLibrary([kingJohn, richardIII, henryIVPI, henryIVPII, henryV, henryVIPI, henryVIPII, henryVIPIII, henryVIII, pilrimsProgress, warAndPeace, whiteNights]);

//--------------------------------------------------------------------------------------------------------------------------------------//

//add a description of each book to the cards

//capture a github request to define parameter sytax
//search bar fles on the main landing page

//create arrays of authors and titles attributed to their names
//get AJAX to pull the docs down
//create a timer where the timer is displayed in the tab

//create a new tab icon for gutenberg