import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Formulas from './main/Formulas'
import BottleFormulas from './main/BottleFormulas'
import SelectSize from './main/SelectSize'
import AdditionalBottles from './options/AdditionalBottles'
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
        formulaPrice: 0,
        size: 1,
        bottle: '',
        bottlePrice: 0,
        moreDrink: [],
        moreFood: [],
    })

    let { selectFormula, selectBottle, selectSize, selectMoreDrink, selectMoreFood } = orderingStatus

    let { formulaPrice, size, foodQuantity, bottlePrice, moreFood } = orderContent

    let total = Math.round(1000 * (formulaPrice + ((size - 1) * formulaPrice * 0.7) + bottlePrice )) / 1000

    let log = () => {
        console.log(orderContent)
    }

    return (
        <Fragment>
            <h2 onClick={log}>Total: {total} euros</h2>
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
                <BottleFormulas
                    orderContent={orderContent}
                    setOrderingStatus={setOrderingStatus}
                    setOrderContent={setOrderContent}
                    products={products}
                />}
            {selectMoreDrink &&
                <AdditionalBottles
                    orderContent={orderContent}
                    setOrderingStatus={setOrderingStatus}
                    setOrderContent={setOrderContent}
                    products={products}
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
