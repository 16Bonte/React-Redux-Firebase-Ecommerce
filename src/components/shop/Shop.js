import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { setShift } from '../../store/actions/cartActions'
import { addFormula } from '../../store/actions/cartActions'

import Recap from './Recap'

import DayHour from './details/DayHour'
import Formulas from './main/Formulas'
import BottleFormulas from './main/BottleFormulas'
import SelectSize from './main/SelectSize'
import AdditionalBottles from './options/AdditionalBottles'
import AdditionalFoods from './options/AdditionalFoods'
import Zip from './details/Zip'

const Shop = ({ products, cart, addFormula, setShift }) => {

    let [formulaStatus, setFormulaStatus] = useState({
        selectShift: true,
        selectZip: false,
        selectFormula: false,
        selectSize: false,
        selectBottle: false,
        selectMoreDrink: false,
        selectMoreFood: false
    })

    let [orderContent, setOrderContent] = useState({
        hour: '',
        day: '',
        formatedDay: '',
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

    let { selectShift, selectZip, selectFormula, selectBottle, selectSize, selectMoreDrink, selectMoreFood } = formulaStatus

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
            {selectShift &&
                <DayHour
                    products={products}
                    orderContent={orderContent}
                    setOrderContent={setOrderContent}
                    setFormulaStatus={setFormulaStatus}
                    setShift={setShift}
                />}
            <div className='shopContainer'>
                {selectZip &&
                    <Zip
                        products={products}
                        orderContent={orderContent}
                        setFormulaStatus={setFormulaStatus}
                        setOrderContent={setOrderContent}
                    />}
                {selectFormula &&
                    <Formulas
                        products={products}
                        orderContent={orderContent}
                        setFormulaStatus={setFormulaStatus}
                        setOrderContent={setOrderContent}
                        cart={cart}
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
                        addFormula={addFormula}
                    />}
                {(!selectShift) &&
                    <Recap
                        orderContent={orderContent}
                        total={total}
                    />
                }
            </div>
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
        addFormula: (formula) => dispatch(addFormula(formula)),
        setShift: (shift) => dispatch(setShift(shift))
    }
}

export default compose(connect(mapStateToProp, mapDispatchToProps), firestoreConnect([
    { collection: 'products' }
]))(Shop)
