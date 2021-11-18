const shortid = require('shortid')

const sequenceID = () => shortid.generate();

const books = {}

const saveBook = (book) => {
    if (!books.id) books.id = sequenceID(); // If there isn't chosen id, it must be added to the corresponding id
    books[book.id] = book;
    return book;
};

const getBook = id => books[id] || {};

const getBooks = () => Object.values(books);

const deleteBooks = (id) => {
    const book = books[id];
    delete books[id];
    return book;
};

module.exports = {
    saveBook,
    getBook,
    getBooks,
    sequenceID,
    deleteBooks
};