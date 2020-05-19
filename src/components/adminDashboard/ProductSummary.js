import React from 'react'

const ProductSummary = ({ prod }) => {

    return (
        <div className="collection-item">
            <h5>Nom du produit: {prod.name}</h5>
            <p>Description Courte: {prod.shortDescription}</p>
            <p>Description Longue: {prod.longDescription}</p>
            <h6>Prix: {prod.price} Euros</h6>
            <img src={prod.image} alt="productImage"/>
            <br/>
            <button className="btn black z-depth">Éditer</button>
        </div>
    )
}

export default ProductSummary
