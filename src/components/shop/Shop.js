import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Formulas from './main/Formulas'
import BottleFormula from './main/BottleFormula'
import SelectSize from './main/SelectSize'
import AdditionalBottle from './options/AdditionalBottle'
import AdditionalFood from './options/AdditionalFood'

const Shop = ({ products, cart }) => {

    let [orderingStatus, setOrderingStatus] = useState({
        selectFormula: true,
        selectSize: false,
        selectBottle: false,
        selectMoreDrink: false,
        selectMoreFood: false
    })

    let [orderContent, setOrderContent] = useState({
        formula: '',
        quantity: 1,
        size: '',
        bottle: '',
        moreDrink: '',
        moreFood: ''
    })

    let { selectFormula, selectBottle, selectSize, selectMoreDrink, selectMoreFood } = orderingStatus

    let log = () => {
        console.log(orderContent)
    }

    return (
        <Fragment>
            <h2 onClick={log}>Achète Stp</h2>
            {selectFormula && 
            <Formulas 
            products={products} 
            orderContent={orderContent}
            setOrderingStatus={setOrderingStatus} 
            setOrderContent={setOrderContent}
            />}
            {selectSize && 
            <SelectSize 
            orderContent={orderContent}
            setOrderingStatus={setOrderingStatus}
            setOrderContent={setOrderContent}
            />}
            {selectBottle && 
            <BottleFormula 
            setOrderingStatus={setOrderingStatus}
            setOrderContent={setOrderContent}
            />}
            {selectMoreDrink && 
            <AdditionalBottle 
            setOrderingStatus={setOrderingStatus}
            setOrderContent={setOrderContent}
            />}
            {selectMoreFood && 
            <AdditionalFood 
            setOrderingStatus={setOrderingStatus}
            setOrderContent={setOrderContent}
            />}
        </Fragment>
    )
}

let mapStateToProp = (state) => {
    return {
        products: state.firestore.ordered.products,
        cart: state.cart
    }
}

export default compose(connect(mapStateToProp), firestoreConnect([
    { collection: 'products' }
]))(Shop)
