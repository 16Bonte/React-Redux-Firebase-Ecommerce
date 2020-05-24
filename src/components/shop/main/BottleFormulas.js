import React from 'react'
import BottleFormula from './BottleFormula'

const BottleFormulas = ({ products, orderContent, setOrderingStatus, setOrderContent }) => {

    return (
        <div>
            {products.map((product, i) => {
                if (product.category === 'bottleChoice') {
                    return (
                        <div className='card' key={i}>
                            <BottleFormula
                                name={product.name}
                                price={product.price}
                                setOrderingStatus={setOrderingStatus}
                                setOrderContent={setOrderContent}
                                orderContent={orderContent}
                            />
                        </div>
                    )
                }
            })}
        </div>
    ) 
}

export default BottleFormulas
