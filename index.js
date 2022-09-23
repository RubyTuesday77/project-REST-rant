// Get environment variables:
require('dotenv').config()

// Require needed node modules:
const express = require('express')

// Initialize app by calling function returned by the express module:
const app = express()

// Declare routes that can be accessed on app:
// Create the home page route:
app.get('/', (req, res) => {
    res.send('Hello world!')
})


// Create a 404 route:
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


// Call app.listen() to keep server open:
app.listen(process.env.PORT)
