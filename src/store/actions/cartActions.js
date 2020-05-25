export let addFormula = (formula) => {
    return (dispatch, getState) => {
            dispatch({type: 'ADD_TO_CART', payload: formula})
    }
}