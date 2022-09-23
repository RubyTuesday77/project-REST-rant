// Create express router:
const router = require('express').Router()

// Create first route:
router.get('/', (req, res) => {
    res.send('GET /places')
})

// Export express router:
module.exports = router
