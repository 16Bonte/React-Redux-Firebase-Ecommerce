import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = ({signOut, profile}) => {

    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li onClick={signOut}>Log Out</li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>
                    {profile.initials}
                </NavLink>
            </li>
        </ul>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks) 
