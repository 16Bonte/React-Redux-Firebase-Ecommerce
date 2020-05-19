import React from 'react'

const CategorySummary = ({ cate }) => {

    return (
        <div className="collection-item">
            <h5>Nom de la Catégorie: {cate.name}</h5>
            <p>Description Courte: {cate.shortDescription}</p>
            <p>Description Longue: {cate.longDescription}</p>
            <br/>
            <button className="btn black z-depth">Éditer</button>
        </div>
    )
}

export default CategorySummary
