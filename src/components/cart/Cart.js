import React, { useState } from 'react'
import CartItems from './CartItems'
import PersonalInfos from './PersonalInfos'
import Payment from './Payment'
import PaymentFailed from './PaymentFailed'
import PaymentSucceeded from './PaymentSucceeded'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { upDateInfos } from '../../store/actions/authActions'
import { removeFormula } from '../../store/actions/cartActions'
import { addToPastOrders } from '../../store/actions/cartActions'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

let stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

const Cart = ({ cart, users, auth, upDateInfos, removeFormula, addToPastOrders }) => {

    let [cartStatus, setCartStatus] = useState({
        init: true,
        personalInfos: false,
        intent: false,
        payment: false,
        paymentFailed: false,
        paymentSucceeded: false
    })

    let [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        moreInfo: '',
        zip: '',
        phone: ''
    })

    let [paymentIntent, setPaymentIntent] = useState()

    if (cart.total === 0) return <h1>Pannier vide</h1>


    return (
        <div>
            <Elements stripe={stripePromise} >
                {cartStatus.init &&
                    <CartItems
                        shift={cart.shift}
                        products={cart.products}
                        total={cart.total}
                        setCartStatus={setCartStatus}
                        auth={auth}
                        removeFormula={removeFormula}
                        setPaymentIntent={setPaymentIntent}
                    />
                }
                {cartStatus.addressInfo &&
                    <PersonalInfos
                        auth={auth}
                        users={users}
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        setCartStatus={setCartStatus}
                        upDateInfos={upDateInfos}
                    />
                }
                {cartStatus.payment &&
                    <Payment
                        userInfo={userInfo}
                        products={cart.products}
                        total={cart.total}
                        auth={auth}
                        cart={cart}
                        shift={cart.shift}
                        paymentIntent={paymentIntent}
                        setPaymentIntent={setPaymentIntent}
                        addToPastOrders={addToPastOrders}
                        setCartStatus={setCartStatus}
                    />
                }
                {cartStatus.paymentFailed &&
                    <PaymentFailed
                        setCartStatus={setCartStatus}
                    />
                }
                {cartStatus.paymentSucceeded &&
                    <PaymentSucceeded
                        cart={cart}
                    />
                }
            </Elements>
        </div>
    )
}

let mapStateToProp = (state) => {
    return {
        cart: state.cart,
        users: state.firestore.ordered.users,
        auth: state.firebase.auth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        upDateInfos: (userInfos) => dispatch(upDateInfos(userInfos)),
        removeFormula: (index) => dispatch(removeFormula(index)),
        addToPastOrders: (order) => dispatch(addToPastOrders(order))
    }
}

export default compose(connect(mapStateToProp, mapDispatchToProps), firestoreConnect([
    { collection: 'users' }
]))(Cart)
