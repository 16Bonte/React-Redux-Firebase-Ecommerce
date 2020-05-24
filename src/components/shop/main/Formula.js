import React from 'react'

const Planche = ({ prod, setOrderingStatus, setOrderContent, orderContent }) => {

    let { name, image, shortDescription, id, price } = prod

    let selectMenu = e => {
        setOrderContent({ ...orderContent, formula: prod, formulaPrice: parseInt(price) })
        setOrderingStatus({ selectFormula: false, selectSize: true })
    }

    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={name} />
                    <span className="card-title">{name}</span>
                    <button onClick={selectMenu} className="btn-floating halfway-fab waves-effect waves-light red">
                        <i id={id} className="material-icons">add</i>
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
