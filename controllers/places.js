// Create express router:
const router = require('express').Router()
const places = require('../models/places.js')


// Create route: GET places/index:
router.get('/', (req, res) => {
    res.render('places/index', { places })
})


// Create route: POST places:
router.post('/', (req, res) => {
    console.log(req.body)
    if(!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'  // Default image if one not provided
    }
    if(!req.body.city) {
        req.body.city = 'Anytown'
    }
    if(!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)  // Add new place's data, found in req.body, to the places array by using the push() method
    res.redirect('/places')
})


// Create NEW route: GET places/new:
router.get('/new', (req, res) => {
    res.render('places/new')
})


// Create SHOW route: GET places/:id:
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
})


// Create DELETE route: DELETE places/:id:
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})


// Create EDIT route: GET places/:id/edit:
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) [
        res.render('error404')
    ]
    else {
        res.render('places/edit', { place: places[id] })
    }
})


// Export express router:
module.exports = router