import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { addFormula } from '../../store/actions/cartActions'

import Formulas from './main/Formulas'
import BottleFormulas from './main/BottleFormulas'
import SelectSize from './main/SelectSize'
import AdditionalBottles from './options/AdditionalBottles'
import AdditionalFoods from './options/AdditionalFoods'

const Shop = ({ products, cart, addFormula }) => {

    let [formulaStatus, setFormulaStatus] = useState({
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
        moreDrinkTotal: 0,
        moreFood: [],
        moreFoodTotal: 0
    })

    let { selectFormula, selectBottle, selectSize, selectMoreDrink, selectMoreFood } = formulaStatus

    let { formulaPrice, size, bottlePrice, moreDrinkTotal, moreFoodTotal } = orderContent

    let total = Math.round(1000 * (
        formulaPrice + ((size - 1) * formulaPrice * 0.7)
        + bottlePrice
        + moreDrinkTotal
        + moreFoodTotal
    )) / 1000

    useEffect(() => {
        setOrderContent({ ...orderContent, total: total })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formulaPrice, size, bottlePrice, moreDrinkTotal, moreFoodTotal])

    return (
        <Fragment>
            <h2>Total: {total} euros</h2>
            {selectFormula &&
                <Formulas
                    products={products}
                    orderContent={orderContent}
                    setFormulaStatus={setFormulaStatus}
                    setOrderContent={setOrderContent}
                />}
            {selectSize &&
                <SelectSize
                    orderContent={orderContent}
                    setFormulaStatus={setFormulaStatus}
                    setOrderContent={setOrderContent}
                />}
            {selectBottle &&
                <BottleFormulas
                    orderContent={orderContent}
                    setFormulaStatus={setFormulaStatus}
                    setOrderContent={setOrderContent}
                    products={products}
                />}
            {selectMoreDrink &&
                <AdditionalBottles
                    orderContent={orderContent}
                    setFormulaStatus={setFormulaStatus}
                    setOrderContent={setOrderContent}
                    products={products}
                />}
            {selectMoreFood &&
                <AdditionalFoods
                    orderContent={orderContent}
                    setFormulaStatus={setFormulaStatus}
                    setOrderContent={setOrderContent}
                    products={products}
                    total={total}
                    addFormula={addFormula}
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

let mapDispatchToProps = dispatch => {
    return {
        addFormula: (formula) => dispatch(addFormula(formula))
    }
}

export default compose(connect(mapStateToProp, mapDispatchToProps), firestoreConnect([
    { collection: 'products' }
]))(Shop)
