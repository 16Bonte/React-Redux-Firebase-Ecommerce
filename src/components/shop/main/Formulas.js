import React from 'react'
import Product from './Formula'

let Main = ({ products, setOrderingStatus, setOrderContent, orderContent }) => {


    return (
        <div className="row">
            {products && products.map(prod => {
                if (prod.category === "Nos planches apéro accompagné d'une quille de qualité") {
                    return (
                        <Product 
                        key={prod.id} prod={prod} 
                        setOrderingStatus={setOrderingStatus}
                        setOrderContent={setOrderContent}
                        orderContent={orderContent}
                        />
                    )
                }
                return null
            })}
        </div>
    )
}

export default Main
