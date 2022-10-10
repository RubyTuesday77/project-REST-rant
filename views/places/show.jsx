const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if(data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{ c.rant ? 'Rant!' : 'Rave!' }</h2>
                    <h4>{ c.content }</h4>
                    <h3>
                        <stong>- { c.author }</stong>
                    </h3>
                    <h4>Rating: { c.stars }</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={ data.place.pic } alt={ data.place.name } />
                        <h2>Located in { data.place.city }, { data.place.state }</h2>
                    </div>
                    <div className="col-sm-6">
                        <h1>{ data.place.name }</h1>
                        <section>
                            <h2>Ratings</h2>
                            <h4>No ratings yet...</h4>
                        </section>
                        <section>
                            <h2>Description</h2>
                            <h4>{ data.place.showEstablished() }</h4>
                            <h4>Serving { data.place.cuisines }</h4>
                        </section>
                        <div class="d-flex justify-content-center">
                            <a href={ `/places/${data.id}/edit` } className="btn btn-warning">Edit</a>
                            <form method="POST" action={ `/places/${data.id}?_method=DELETE` }>
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <section>
                            <h2>Comments</h2>
                            { comments }
                        </section>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show