export let createProduct = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection('products').add({
            ...product
        }).then(() => {
            alert('Succeed')
        }).catch((err) => {
            alert(err)
        })
    }
}

export let updateProduct = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection('products').doc(product.id).set({
            ...product
        }).then(() => {
            alert('Succeed')
        }).catch((err) => {
            alert(err)
        })
    }
}

export let deleteProduct = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection('products').doc(product.id).delete()
        .then(() => {
            alert('Succeed')
        }).catch((err) => {
            alert(err)
        })
    }
}

// export let updateProduct = (product) => {
//     return (dispatch, getState, {getFirebase, getFirestore}) => {
//         let firestore = getFirestore()
        
//         firestore.collection('products').doc(product.id).set({
//             ...product
//         }).then(() => {
//             alert('Succeed')
//         }).catch((err) => {
//             alert(err)
//         })
//     }
// }