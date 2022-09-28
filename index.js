// Get environment variables:
require('dotenv').config()

// Require needed node modules:
const express = require('express')

// Initialize app by calling function returned by the express module:
const app = express()

// Code added ?????
// app.set('views', __dirname + '/views')

// Add JSX code that defines the view engine (needs to be above routes):
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Add code to declare static folder:
app.use(express.static('public'))

// Add body parser tool:
app.use(express.urlencoded({ extended: true }))

// Import router from file in controllers folder:
app.use('/places', require('./controllers/places'))

// Create the home page route:
app.get('/', (req, res) => {
    res.render('home')
})

// Create a 404 route (needs to be last route or will override page):
app.get('*', (req, res) => {
    res.render('error404')
})

// Call app.listen() to keep server open:
app.listen(process.env.PORT)
