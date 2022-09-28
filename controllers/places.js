// Create express router:
const router = require('express').Router()

// Create route - GET /places:
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

// Create route - GET /new:
router.get('/new', (req, res) => {
    res.render('places/new')
  })

// Export express router:
module.exports = router