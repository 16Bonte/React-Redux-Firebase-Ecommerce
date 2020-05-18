let categoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case ('CREATE_CATEGORY'):  
        console.log(action.payload)          
            return state
        case ('CREATE_PRODUCT_ERROR'):
            console.log(action.payload)
            return state
        default: 
            return state
    }
}

export default categoriesReducer
