import React, { useState } from 'react'
import CartItems from './CartItems'
import PersonalInfos from './PersonalInfos'
import Payment from './Payment'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { upDateInfos } from '../../store/actions/authActions'
import { removeFormula } from '../../store/actions/cartActions'


const Cart = ({ cart, users, auth, upDateInfos, removeFormula }) => {

    let [cartStatus, setCartStatus] = useState({
        init: true,
        personalInfos: false,
        payment: false
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

    if (cart.total === 0) return <h1>Pannier vide</h1>


    return (
        <div>
            {cartStatus.init &&
                <CartItems
                    shift={cart.shift}
                    products={cart.products}
                    total={cart.total}
                    setCartStatus={setCartStatus}
                    auth={auth}
                    removeFormula={removeFormula}
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
                    shift={cart.shift}
                />
            }
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
        removeFormula: (index) => dispatch(removeFormula(index))
    }
}

export default compose(connect(mapStateToProp, mapDispatchToProps), firestoreConnect([
    { collection: 'users' }
]))(Cart)
