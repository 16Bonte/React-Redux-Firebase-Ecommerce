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
                {name: "Mami le Prinard", quantity: 1, price: 0}
            ],
            moreDrinkTotal: 10,
            moreFood: [
                {name: "Stratiacella (200 grammes)", quantity: 2, price: 3}
            ],
            moreFoodTotal: 6,
            zip: "Lyon 4"
        }
    ],
    prodNumber: 1,
    total: 53.8
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
