import React, { useState } from 'react'
import AdditionalFood from './AdditionalFood'
import FadeIn from 'react-fade-in'
import { Redirect } from 'react-router-dom'

const AdditionalFoods = ({ products, orderContent, setFormulaStatus, setOrderContent, addFormula }) => {

    let [goToCart, setGoToCart] = useState(false)

    let previous = () => setFormulaStatus({ selectMoreFood: false, selectMoreDrink: true })

    let addToCart = () => {
        addFormula(orderContent)
        // setFormulaStatus({ selectMoreFood: false, selectFormula: true })
        setGoToCart(true)
    }

    if (goToCart) return <Redirect to='/pannier' />

    return (
        <FadeIn>
            {products.map((product, index) => {
                if (product.category === 'addFood') {
                    return (
                        <div className='card' key={index}>
                            <AdditionalFood
                                index={index}
                                name={product.name}
                                price={product.price}
                                setOrderContent={setOrderContent}
                                orderContent={orderContent}
                            />
                        </div>
                    )
                }
                return null
            })}
            <button onClick={previous}>Next</button>
            <button onClick={addToCart}>Ajouter ma formule au pannier</button>

        </FadeIn>
    )
}

export default AdditionalFoods
