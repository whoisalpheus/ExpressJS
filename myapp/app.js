const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Static files direction...

app.use('/static', express.static(path.join(__dirname, 'public')))

// Routes

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})