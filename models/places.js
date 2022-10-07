const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

/* to be replaced with the schema above
module.exports = [
    {
        name: 'Irish Pub',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Irish, Pub fare',
        pic: '/images/irish-pub.jpg'
    },
    {
        name: 'Coffee Shop',
        city: 'Raleigh',
        state: 'NC',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-shop.jpg'
    }
]
*/