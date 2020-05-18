export let createProduct = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection('products').add({
            ...product
        }).then(() => {
            dispatch({type: 'CREATE_PRODUCT', product})
        }).catch((err) => {
            dispatch({type: 'CREATE_PRODUCT_ERROR', err})
        })
    }
}