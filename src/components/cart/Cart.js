import React, { useEffect } from 'react'
import CartItems from './CartItems'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const Cart = ({cart}) => {

    useEffect(() => {
        console.log(cart)
    })

    return (
        <div>
            <h3>Pannier</h3>
            <CartItems
            products={cart.products}
            />
            <h2>Total: {cart.total}</h2>
        </div>
    )
}

let mapStateToProp = (state) => {
    return {
        cart: state.cart
    }
}




export default compose(connect(mapStateToProp), firestoreConnect([
    { collection: 'users' }
]))(Cart)
