import React from 'react'
import BottleFormula from './BottleFormula'

const BottleFormulas = ({ products, orderContent, setFormulaStatus, setOrderContent }) => {

    let previous = () => setFormulaStatus({selectBottle: false, selectSize: true})

    return (
        <div>
            {products.map((product, i) => {
                if (product.category === 'bottleChoice') {
                    return (
                        <div className='card' key={i}>
                            <BottleFormula
                                name={product.name}
                                price={product.price}
                                setOrderContent={setOrderContent}
                                orderContent={orderContent}
                                setFormulaStatus={setFormulaStatus}
                            />
                        </div>
                    )
                }
                return null
            })}
            <button onClick={previous}>Précédent</button>
        </div>
    ) 
}

export default BottleFormulas
