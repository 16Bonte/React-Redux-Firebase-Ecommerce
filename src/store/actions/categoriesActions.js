export let createCategory = (category) => {
    return (dispatch, getState, {getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection('categories').add({
            ...category
        }).then(() =>{
            dispatch({type: 'CREATE_CATEGORY', payload: category})
        }).catch((err) => {
            dispatch({type: 'CREATE_CATEGORY_ERROR', payload: err})
        })
    }
}