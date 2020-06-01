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