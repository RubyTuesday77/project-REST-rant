// Create express router:
const router = require('express').Router()
// const places = require('../models/places.js') - replaced with db variable
const db = require('../models')


// INDEX:
// Create route: GET /places:
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})



// CREATE:
// Create route: POST /places:
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    /*
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
    */
})



// NEW
// Create NEW route: GET /places/new:
router.get('/new', (req, res) => {
    res.render('places/new')
})



//SHOW
// Create SHOW route: GET /places/:id:
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    /*
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
    */
})



// EDIT
// Create EDIT route: GET /places/:id/edit:
router.get('/:id/edit', (req, res) => {
    /*
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
    */
    res.send('GET /places/:id/edit stub')
})



// UPDATE
// Create UPDATE route: PUT /places/:id:
router.put('/:id', (req, res) => {
    /*
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
    */
    res.send('PUT /places/:id stub')
})



// DELETE
// Create DELETE route: DELETE /places/:id:
router.delete('/:id', (req, res) => {
    /*
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
    */
    res.send('DELETE /places/:id stub')
})



// Create route: POST /places/:id/rant:
router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})



// Create route: DELETE /places/:id/rant/rantId:
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})



// Export express router:
module.exports = router