export let setShift = (shift) => {
    return (dispatch, getState) => {
        dispatch({type: 'SET_SHIFT', payload: shift})
    }
}

export let addFormula = (formula) => {
    return (dispatch, getState) => {
        dispatch({ type: 'ADD_TO_CART', payload: formula })
    }
}

export let removeFormula = (index) => {
    return (dispatch, getState) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: index})
    }
}

export let addToPastOrders = (data) => {
    return (dispatch, getState, {getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection(`users/${data.userId}/orders`).add({
            ...data.myOrder
        }).then(() =>{
            console.log('added to user')
        }).catch((err) => {
            alert(err)
        })

        firestore.collection(`orders`).add({
            ...data.myOrder
        }).then(() =>{
            console.log('added to orders')
        }).catch((err) => {
            alert(err)
        })

        dispatch({type: 'EMPTY_CART'})

    }
}
