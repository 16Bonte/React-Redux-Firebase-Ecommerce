import React from 'react'
import AdditionalBottle from './AdditionalBottle'

const AdditionalBottles = ({ products, orderContent, setFormulaStatus, setOrderContent }) => {
   
    let next = () => setFormulaStatus({ selectMoreDrink: false, selectMoreFood: true })

    let previous = () => setFormulaStatus({selectMoreDrink: false, selectBottle: true})

    return (
        <div>
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

        </div>
    )
}

export default AdditionalBottles
