import React from 'react'
import CartItem from './CartItem'

const CartItems = ({products}) => {
    return (
        <div>
            {products.map((item, i) => <CartItem key={i} item={item}/>)}
        </div>
    )
}

export default CartItems
