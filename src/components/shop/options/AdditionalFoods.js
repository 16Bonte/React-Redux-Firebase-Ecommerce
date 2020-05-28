import React from 'react'
import AdditionalFood from './AdditionalFood'

const AdditionalFoods = ({ products, orderContent, setFormulaStatus, setOrderContent, total, addFormula }) => {

    let previous = () => setFormulaStatus({ selectMoreFood: false, selectMoreDrink: true })

    let addToCart = () => {
        addFormula(orderContent)        
        setFormulaStatus({ selectMoreFood: false, selectFormula: true })
    }

    return (
        <div>
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

        </div>
    )
}

export default AdditionalFoods
