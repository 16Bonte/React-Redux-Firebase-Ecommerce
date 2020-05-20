import React, { Fragment } from 'react'
import CategorySummary from './CategorySummary'


const CateProducts = ({ cateList, backToAdminStart, deleteCategory, updateCategory }) => {

    return (
        <Fragment>
            <br/>
            <button onClick={backToAdminStart} className="btn black z-depth">Retour</button>
            <br/>
            <br/>
            <ul className="collection row">
                {cateList && cateList.map(cate => {
                    console.log(cate)
                    return (
                        <CategorySummary key={cate.id} cate={cate} deleteCategory={deleteCategory} updateCategory={updateCategory} />
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default CateProducts
