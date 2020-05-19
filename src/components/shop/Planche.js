import React from 'react'

const Planche = ({ prod }) => {

    let { name, image, shortDescription, id, price } = prod

    let selectMenu = e => {
        console.log(e.target.id)
    }

    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                    <span className="card-title">{name}</span>
                    <button onClick={selectMenu}  className="btn-floating halfway-fab waves-effect waves-light red">
                        <i id={id} className="material-icons test">add</i>
                    </button>
                </div>
                <div className="card-content">
                    <p>{shortDescription}</p>
                    <h5>{price} €</h5>
                </div>
            </div>
        </div>
    )
}

export default Planche
