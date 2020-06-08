let initState = {
    products: [
        {
            hour: "17h - 17h45",
            day: "Samedi 6 juin",
            formula: {
                name: "Planche Mixte",
                detail1Name: "Grammes de Compté",
                detail1Quantity: "300",
                detail2Name: "Grammes de Stratiacella",
                detail2Quantity: "200",
            },
            formulaPrice: 28,
            size: 1.5,
            bottle: "Mami le Prinard",
            bottlePrice: 0,
            moreDrink: [
                {name: "Mami le Prinard", quantity: 1, price: 10}
            ],
            moreDrinkTotal: 10,
            moreFood: [
                {name: "Stratiacella (200 grammes)", quantity: 2, price: 3}
            ],
            moreFoodTotal: 6,
            zip: "Lyon 4",
            total: 53.8
        }
    ],
    shift: 'tamere',
    prodNumber: 1,
    total: 53.8
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
        default:
            return state
    }
}

export default cartReducer
