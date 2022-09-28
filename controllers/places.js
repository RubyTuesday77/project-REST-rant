// Create express router:
const router = require('express').Router()

// Create route: GET /places/index:
router.get('/', (req, res) => {
    let places = [
        {
            name: 'Irish Pub',
            city: 'Raleigh',
            state: 'NC',
            cuisines: 'Irish, Pub fare',
            pic: 'images/irish-pub.jpg'
        },
        {
            name: 'Coffee Shop',
            city: 'Raleigh',
            state: 'NC',
            cuisines: 'Coffee, Bakery',
            pic: 'images/coffee-shop.jpg'
        }
    ]
    res.render('places/index', {places})
})


// Create route: POST places:
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

// Create route: GET places/new:
router.get('/new', (req, res) => {
    res.render('places/new')
})


// Create routes - GET places/:id:



// Export express router:
module.exports = router