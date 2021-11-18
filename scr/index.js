const express = require('express');
const bodyParser = require('body-parser');
const dataBook = require('./dataCenter')
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ // Parse incoming request bodies in a middleware before your handlers, available under the req.body property
    extend: true
}));

app.get('/books', (req, res) => {
    res.send(dataBook.getBooks())
});

app.get('/books/:id', (req, res) => {
    res.send(dataBook.getBook(req.params.id))
});

app.post('/books', (req, res) => {
    const body = req.body
    const postBook = dataBook.saveBook({
        id: dataBook.sequenceID(),
        title: body.title,
        authors: body.authors,
        isbn: body.isbn,
        pageCount: body.pageCount,
        shortDescription: body.shortDescription,
        language: body.language,
        publishingCompany: body.publishingCompany,
        publicationDate: body.publicationDate
    });
    res.send(`The book \"${JSON.stringify(postBook)}\" has been saved`);
});

app.put('/books/:id', (req, res) => {
    const body = req.body
    const putBook = dataBook.saveBook({
        title: body.title,
        authors: body.authors,
        isbn: body.isbn,
        pageCount: body.pageCount,
        shortDescription: body.shortDescription,
        language: body.language,
        publishingCompany: body.publishingCompany,
        publicationDate: body.publicationDate,
        id: req.params.id
    })
    res.send(`The book \"${JSON.stringify(putBook)}\" has been saved`)
});

app.delete('/books/:id', (req, res) => {
    const infoBook = dataBook.deleteBooks(req.params.id);
    res.send(infoBook)
});

app.listen(port, () => {
    console.log(`The server is running on ${port}.`);
});

