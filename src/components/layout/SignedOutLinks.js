import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Accueil</NavLink></li>
            <li><NavLink to='/boutique'>Nos Produits</NavLink></li>
            <li><NavLink to='/a-propos'>À Propos</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks
