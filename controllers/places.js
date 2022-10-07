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
    if(!req.body.pic) {
        req.body.pic = 'http://placekitten.com/350/350'
    }
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if(err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for(var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
                res.render('places/new', { message })
            }
            else {
            res.render('error404')
            }
        })
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
        .then((place) => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})



// EDIT
// Create EDIT route: GET /places/:id/edit:
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})



// UPDATE
// Create UPDATE route: PUT /places/:id:
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})



// DELETE
// Create DELETE route: DELETE /places/:id:
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
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