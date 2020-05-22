import authReducer from './authReducer'
import projectReducer from './projectReducer'
// import productsReducer from '../save/productsReducer'
// import categoriesReducer from './categoriesReducer'
import cartReducer from './cartReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

let rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    cart: cartReducer
    // products: productsReducer,
    // categories: categoriesReducer
})

export default rootReducer
