import React from 'react'
import AdditionalBottle from './AdditionalBottle'

const AdditionalBottles = ({ products, orderContent, setOrderingStatus, setOrderContent }) => {

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

export default AdditionalBottles
