const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="images/food-drinks.jpg" alt="Food and Drinks" />
                    <div>
                        Photo by <a href="https://unsplash.com/@covertnine">Tim Toomey</a> on <a href="https://unsplash.com/photos/STqHLqMne3k">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home