let initState = {
    products: [],
    shift: '',
    prodNumber: 0,
    total: 0
}
 
let cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ('SET_SHIFT'):
            return {
                ...state,
                shift: action.payload
            }
        case ('ADD_TO_CART'):
            return {
                ...state,
                products: [...state.products, action.payload],
                prodNumber: state.prodNumber + 1,
                total: state.total + action.payload.total
            }
        case ('REMOVE_FROM_CART'):
            let prodPrice = state.products[action.payload].total
            let prods = state.products
            delete prods[action.payload]
            return {
                ...state,
                products: prods,
                prodNumber: state.prodNumber - 1,
                total: state.total - prodPrice
            }
        case ('EMPTY_CART'):
            return {
                ...state,
                products: [],
                prodNumber: 0,
                total: 0
            }
        default:
            return state
    }
}

export default cartReducer
