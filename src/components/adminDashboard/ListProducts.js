import React, { Fragment } from 'react'
import ProductSummary from './ProductSummary'


const ListProducts = ({ prodList, backToAdminStart, updateProduct, deleteProduct }) => {

    return (
        <Fragment>
            <br/>
            <button onClick={backToAdminStart} className="btn black z-depth">Retour</button>
            <br/>
            <br/>
            <ul className="collection row">
                {prodList && prodList.map(prod => {
                    console.log(prod.id)
                    return (
                        <ProductSummary key={prod.id} prod={prod} updateProduct={updateProduct} deleteProduct={deleteProduct} />
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default ListProducts
