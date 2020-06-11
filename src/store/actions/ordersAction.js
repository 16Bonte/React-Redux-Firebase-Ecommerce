export let updateOrderStatus = (order) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let firestore = getFirestore()

        firestore.collection(`orders`).doc(order.id).set({
            ...order
        }).then(() => {
            alert('Succeed')
        }).catch((err) => {
            alert(err)
        })
    }
}