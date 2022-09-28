// Create express router:
const router = require('express').Router()
const places = require('../models/places.js')


// Create route: GET /places/index:
router.get('/', (req, res) => {
    res.render('places/index', { places })
})


// Create route: POST places:
router.post('/', (req, res) => {
    console.log(req.body)
    if(!req.body.pic) {
        // Default image if one not provided
        req.body.pic = ''
    }
    if(!req.body.city) {
        req.body.city = 'Anytown'
    }
    if(!req.body.state) {
        req.body.state = 'USA'
    }
    // Add new place's data, found in req.body, to the places array by using the push() method
    places.push(req.body)
    res.redirect('/places')
})


// Create route: GET places/new:
router.get('/new', (req, res) => {
    res.render('places/new')
})


// Create routes - GET places/:id:



// Export express router:
module.exports = router