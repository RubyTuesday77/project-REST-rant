// Create express router:
const router = require('express').Router()
const places = require('../models/places.js')



// INDEX:
// Create route: GET places/index:
router.get('/', (req, res) => {
    res.render('places/index', { places })
})



// CREATE
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



// NEW
// Create NEW route: GET places/new:
router.get('/new', (req, res) => {
    res.render('places/new')
})



//SHOW
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



// EDIT
// Create EDIT route: GET places/:id/edit:
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', { place: places[id], id }) //
    }
})


// UPDATE
// Create UPDATE route: PUT places/:id:
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        // Make sure data in req.body is valid
        if(!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'  // Default image if one not provided
        }
        if(!req.body.city) {
            req.body.city = 'Anytown'
        }
        if(!req.body.state) {
            req.body.state = 'USA'
        }
        places[id] = req.body  // Save new data in places[id]
        res.redirect(`/places/${id}`)
    }
})


// DELETE
// Create DELETE route: DELETE places/:id:
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})


// Create route: POST places/:id/comment:



// Create route: DELETE places/:id/comment/commentId:



// Export express router:
module.exports = router