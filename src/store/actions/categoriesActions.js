export let createCategory = (category) => {
    return (dispatch, getState, {getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection('categories').add({
            ...category
        }).then(() =>{
            alert('Succeed')
        }).catch((err) => {
            alert(err)
        })
    }
}

export let updateCategory = (category) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection('categories').doc(category.id).set({
            ...category
        }).then(() => {
            alert('Succeed')
        }).catch((err) => {
            alert(err)
        })
    }
}

export let deleteCategory = (category) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection('categories').doc(category.id).delete()
        .then(() => {
            alert('Succeed')
        }).catch((err) => {
            alert(err)
        })
    }
}