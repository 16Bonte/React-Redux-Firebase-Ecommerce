import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Planche from './Planche'

const Shop = ({ products }) => {



    return (
        <Fragment>
            <h2>Achète Stp</h2>
            <div className="row">
                {products && products.map(prod => {
                    if (prod.category === "Nos planches apéro accompagné d'une quille de qualité") {
                        return (
                            <Planche key={prod.id} prod={prod} />
                        )
                    }
                    return null
                })}
            </div>
        </Fragment>
    )
}

let mapStateToProp = (state) => {
    return {
        products: state.firestore.ordered.products
    }
}

export default compose(connect(mapStateToProp), firestoreConnect([
    { collection: 'products' }
]))(Shop)
