import React, { useEffect } from 'react'

const Planche = ({ prod, setFormulaStatus, setOrderContent, orderContent }) => {

    let { name, image, shortDescription, id, price } = prod

    useEffect(() => {
        setOrderContent({
            formula: '',
            formulaPrice: 0,
            size: 1,
            bottle: '',
            bottlePrice: 0,
            moreDrink: [],
            moreDrinkTotal: 0,
            moreFood: [],
            moreFoodTotal: 0
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let selectMenu = e => {
        setOrderContent({ ...orderContent, formula: prod, formulaPrice: parseInt(price) })
        setFormulaStatus({ selectFormula: false, selectSize: true })
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
