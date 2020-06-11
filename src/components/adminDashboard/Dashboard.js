import React, { useState, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { createCategory, updateCategory, deleteCategory } from '../../store/actions/categoriesActions'
import { createProduct, updateProduct, deleteProduct } from '../../store/actions/productsActions'

import AddProduct from './products/AddProduct'
import AddCategory from './categories/AddCategory'
import ListProducts from './products/ListProducts'
import ListCategories from './categories/ListCategories'
import OrderList from './orders/OrderList'

const Dashboard = (state) => {

    let {
        auth,
        createCategory,
        createProduct,
        prodList,
        cateList,
        updateProduct,
        deleteProduct,
        updateCategory,
        deleteCategory,
        orders
    } = state

    let [action, setAction] = useState({
        start: true,
        newProduct: false,
        newCategory: false,
        productsList: false,
        categoriesList: false,
        orderList: false
    })

    let handleAction = e => setAction({ ...action, start: false, [e.target.id]: true })

    let backToAdminStart = () => {
        setAction({
            ...action,
            newProduct: false,
            newCategory: false,
            productsList: false,
            categoriesList: false,
            start: true
        })
    }

    let { start, newProduct, newCategory, productsList, categoriesList, orderList } = action

    if (auth.uid !== process.env.REACT_APP_ADMIN) return <Redirect to='/' />


    return (
        <div>
            {start &&
                <Fragment>
                    <h4>Dashboard</h4><br />
                    <div className="collection">
                        <div className="collection-item homeDashLi" id='newProduct' onClick={handleAction}>Ajouter un Produit</div>
                        <div className="collection-item homeDashLi" id='newCategory' onClick={handleAction}>Ajouter une Catégorie</div>
                        <div className="collection-item homeDashLi" id='productsList' onClick={handleAction}>Liste des produits</div>
                        <div className="collection-item homeDashLi" id='categoriesList' onClick={handleAction}>Liste des catégories</div>
                        <div className="collection-item homeDashLi" id='orderList' onClick={handleAction}>Liste des commandes</div>
                    </div>
                </Fragment>
            }
            {newProduct &&
                <AddProduct
                    createProduct={createProduct}
                    cateList={cateList}
                    backToAdminStart={backToAdminStart}
                />}

            {newCategory &&
                <AddCategory
                    createCategory={createCategory}
                    backToAdminStart={backToAdminStart}
                />}

            {productsList &&
                <ListProducts
                    prodList={prodList}
                    updateProduct={updateProduct}
                    deleteProduct={deleteProduct}
                    backToAdminStart={backToAdminStart}
                />}

            {categoriesList &&
                <ListCategories
                    cateList={cateList}
                    updateCategory={updateCategory}
                    deleteCategory={deleteCategory}
                    backToAdminStart={backToAdminStart}
                />}
            {orderList &&
                <OrderList
                    orders={orders}
                    prodList={prodList}
                />
            }

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        prodList: state.firestore.ordered.products,
        cateList: state.firestore.ordered.categories,
        orders: state.firestore.ordered.orders
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        createCategory: (category) => dispatch(createCategory(category)),
        createProduct: (product) => dispatch(createProduct(product)),
        updateProduct: (product) => dispatch(updateProduct(product)),
        deleteProduct: (product) => dispatch(deleteProduct(product)),
        updateCategory: (category) => dispatch(updateCategory(category)),
        deleteCategory: (category) => dispatch(deleteCategory(category))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'products' },
        { collection: 'categories' },
        { collection: 'orders' }
    ])
)(Dashboard)

