import React, { useState } from 'react'
import AdditionalFood from './AdditionalFood'
import FadeIn from 'react-fade-in'
import { Redirect } from 'react-router-dom'

const AdditionalFoods = ({ products, orderContent, setFormulaStatus, setOrderContent, addFormula }) => {

    let [goToCart, setGoToCart] = useState(false)

    let previous = () => setFormulaStatus({ selectMoreFood: false, selectMoreDrink: true })

    let addToCart = (e) => {
        // format additional food and drinks - we use index to add or remove some so it makes undifined arrays - not ok with firebase
        let myFormula = orderContent
        let myAdditionalBottles = []
        let myAdditionalFoods = []
        orderContent.moreDrink.forEach(drink => {
            if (drink) myAdditionalBottles.push(drink)
        })
        orderContent.moreFood.forEach(food => {
            if (food) myAdditionalFoods.push(food)
        })
        myFormula.moreDrink = myAdditionalBottles
        myFormula.moreFood = myAdditionalFoods
        addFormula(myFormula)
        if (e.target.name === 'goToCart') {
            setGoToCart(true)
        } else if (e.target.name === 'addAnotherFormula') {
            setFormulaStatus({ selectMoreFood: false, selectFormula: true })
        }
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
            <button onClick={previous}>Précédent</button>
            <button name='goToCart' onClick={addToCart}>Aller au pannier</button>
            <button name='addAnotherFormula' onClick={addToCart}>Ajouter un autre produit</button>

        </FadeIn>
    )
}

export default AdditionalFoods
