let initState = {
    products: [],
    prodNumber: 0,
    total: 0
}

let cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ('ADD_TO_CART'):
            return {
                ...state,
                products: [...state.products, action.payload],
                prodNumber: state.prodNumber + 1,
                total: state.total + action.payload.total
            }
        default:
            return state
    }
}

export default cartReducer
