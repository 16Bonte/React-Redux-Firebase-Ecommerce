import React from 'react'
import AdditionalBottle from './AdditionalBottle'
import FadeIn from 'react-fade-in'

const AdditionalBottles = ({ products, orderContent, setFormulaStatus, setOrderContent }) => {

    let next = () => setFormulaStatus({ selectMoreDrink: false, selectMoreFood: true })

    let previous = () => setFormulaStatus({ selectMoreDrink: false, selectBottle: true })

    return (
        <FadeIn>
            <h4 className='shoppingProcessTitle'>Pour Nos Tizeurs d'élites</h4>
            <h5 className='shoppingProcessTitle'>Bouteilles Supplémentaires</h5>
            {products.map((product, index) => {
                if (product.category === 'bottleChoice') {
                    console.log(product)
                    return (
                        <div className='card' key={index}>
                            <AdditionalBottle
                                index={index}
                                name={product.name}
                                price={product.detail1Quantity}
                                setOrderContent={setOrderContent}
                                orderContent={orderContent}
                            />
                        </div>
                    )
                }
                return null
            })}
            <button onClick={previous}>Précédent</button>
            <button onClick={next}>Suivant</button>

        </FadeIn>
    )
}

export default AdditionalBottles
