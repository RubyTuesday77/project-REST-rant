const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h2>{ data.place.name }</h2>
                <img src={ data.place.pic } alt={ data.place.name } />
                <h3>Location: { data.place.city }, { data.place.state }</h3>
                <h4>Cuisines: { data.place.cuisines }</h4>
                <section>
                    <h2>Ratings</h2>
                    <p>No ratings yet...</p>
                </section>
                <section>
                    <h2>Comments</h2>
                    <p>No comments yet...</p>
                </section>
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
