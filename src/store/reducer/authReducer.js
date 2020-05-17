let initState = {
    authError: null
}

let authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            console.log('success signup')
            return {
                ...state,
                authError: null,
            }
        case 'SIGNUP_ERROR':
            console.log('err')
            return {
                ...state,
                authError: action.err.message
            }
        case 'LOGIN_ERROR':
            console.log('err')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout')
            return state
        default: {
            return state
        }
    }
}

export default authReducer