import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = ({signOut, profile, fadeLinks}) => {

    return (
        <Fragment>
            <li className={fadeLinks}><NavLink to='/'>Accueil</NavLink></li>
            <li className={fadeLinks}><NavLink to='/boutique'>Nos Produits</NavLink></li>
            <li className={fadeLinks}><NavLink to='/a-propos'>À Propos</NavLink></li>
            <li onClick={signOut}>Déconnexion</li>
            <li>
                <NavLink to='/' className='btn btn-floating white black-text lighten-1'>
                    {profile.initials}
                </NavLink>
            </li>
        </Fragment>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks) 
