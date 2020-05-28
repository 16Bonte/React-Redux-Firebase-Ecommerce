import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const Planche = ({ prod, setFormulaStatus, setOrderContent, orderContent }) => {

    let { name, image, shortDescription, id, price } = prod

    useEffect(() => {
        setOrderContent({
            ...orderContent,
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
            <ScrollAnimation delay={500} animateIn="animate__zoomInDown">
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
            </ScrollAnimation>
        </div>
    

    )
}

export default Planche
