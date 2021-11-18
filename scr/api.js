const router = require('express').Router();
const dataBook = require('./dataCenter');



router.post('/books', (req, res) => {
    const books = dataBook.saveBooks(
        dataBook.books = req.body);
});

router.put('/books/:id', (req, res) => {

});

router.delete('/books/:id', (req, res) => {
    const deleteBook = dataBook.deleteBook(req.params.id)
    res.send(dataCenter.books)
});

module.exports = router;