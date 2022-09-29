const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <img src={ `/places/${data.place.pic}` } alt={ data.place.name } />
                <div>
                    <h4>Rating</h4>
                    <p>No Ratings</p>
                </div>
                <div>
                    <h4>Comments</h4>
                    <p>No Comments</p>
                </div>
                <a href={ `/places/${data.id}/edit` } className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={ `/places/${data.id}?_method=DELETE` }>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show
