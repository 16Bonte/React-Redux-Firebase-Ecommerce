import React, { useState, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { createCategory } from '../../store/actions/categoriesActions'
import { createProduct } from '../../store/actions/productsActions'

import AddProduct from './AddProduct'
import AddCategory from './AddCategory'
import ListProducts from './ListProducts'
import ListCategories from './ListCategories'

const Dashboard = ({ auth, createCategory, createProduct, prodList, cateList }) => {

    let [action, setAction] = useState({
        start: false,
        newProduct: true,
        newCategory: false,
        productsList: false,
        categoriesList: false
    })

    let handleAction = e => {
        console.log(e.target.id)
        setAction({ ...action, start: false, [e.target.id]: true })
        console.log(action)
    }

    let backToAdminStart = () => {
        setAction({
            ...action,
            newProduct: false,
            newCategory: false,
            productsList: false,
            categoriesList: false,
            start: true
        })
        console.log('yes sir')
    }

    let { start, newProduct, newCategory, productsList, categoriesList } = action

    if (auth.uid !== 'eu6rVKlmubWA5vwUlXnuMYclSmJ3') return <Redirect to='/' />


    return (
        <div>
            {start &&
                <Fragment>
                    <h4>Dashboard</h4>
                    <div className="card" id='newProduct' onClick={handleAction}>Ajouter un Produit</div>
                    <div className="card" id='newCategory' onClick={handleAction}>Ajouter une Catégorie</div>
                    <div className="card" id='productsList' onClick={handleAction}>Liste des produits</div>
                    <div className="card" id='categoriesList' onClick={handleAction}>Liste des catégories</div>
                </Fragment>
            }
            {newProduct && <AddProduct createProduct={createProduct} backToAdminStart={backToAdminStart} />}
            {newCategory && <AddCategory createCategory={createCategory} backToAdminStart={backToAdminStart} />}
            {productsList && <ListProducts prodList={prodList} />}
            {categoriesList && <ListCategories cateList={cateList}/>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        prodList: state.firestore.ordered.products,
        cateList: state.firestore.ordered.categories
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createCategory: (category) => dispatch(createCategory(category)),
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'products' },
        { collection: 'categories' }
    ])
)(Dashboard)

