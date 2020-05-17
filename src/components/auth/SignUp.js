import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

let SignUp = ({ signUp, auth, authError }) => {

    let [user, setUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    let handleChange = (e) => setUser({ ...user, [e.target.id]: e.target.value })

    let handleSubmit = (e) => {
        e.preventDefault()
        signUp(user)
    }

    if (auth.uid) return <Redirect to='/' />

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className='grey-text text-darken-3'>Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth">Sign Up</button>
                </div>
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </form>

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 
