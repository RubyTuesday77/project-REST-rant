const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="images/error.jpg" alt="Not a page! Womp, womp!" />
                    <div>
                        Photo by <a href="https://unsplash.com/@sepoys">Rohit Tandon</a> on <a href="https://unsplash.com/photos/iMfG5py52LA">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
                <br />
                <a href="./">
                    <button className="btn btn-primary">REST-Rant HOME</button>
                </a>
            </main>
        </Def>
    )
}
  
module.exports = error404