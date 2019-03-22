const experss = require('express')
const app = experss()
const books = require('./db')
const bodyParser = require('body-parser')

app.listen(3000, () => {
    console.log('Start server at port 3000')
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.json(
        {
            "message" : "Hello"
        }
    )
})

app.get('/books', (req, res) => {
    res.json(books)
})

app.get('/books/:id', (req, res) => {
    res.json(books.find(book => book.id === req.params.id))
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
})

