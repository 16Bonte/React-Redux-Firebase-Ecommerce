import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = ({signOut, profile}) => {

    return (
        <ul className="right">
            <li><NavLink to='/'>Accueil</NavLink></li>
            <li><NavLink to='/boutique'>Nos Produits</NavLink></li>
            <li><NavLink to='/a-propos'>À Propos</NavLink></li>
            <li onClick={signOut}>Déconnexion</li>
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
