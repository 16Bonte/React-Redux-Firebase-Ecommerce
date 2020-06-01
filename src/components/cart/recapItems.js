import React from 'react'
import RecapItem from './RecapItem'

const CartItems = ({ products, total, setCartStatus, auth }) => {

    return (
        <div>
            {products.map((item, i) => {
                if (item) {
                    return <RecapItem key={i} item={item} />
                }
                return null
            })}
            <h2>Total: {total.toFixed(2)} €</h2>
        </div>
    )
}

export default CartItems
