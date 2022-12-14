const db = require('../models')

// To use await, we need an async function:
async function seed() {
    let place = await db.Place.findOne({ name: 'Irish Pub' }) // set place variable, in this case H-Thai-ML
    // Create fake sample comments:
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })
    // Add this comment to the place's comment array:
    place.comments.push(comment.id)
    // Save place with added comment:
    await place.save()
    // Exit the program:
    process.exit()
}

seed()