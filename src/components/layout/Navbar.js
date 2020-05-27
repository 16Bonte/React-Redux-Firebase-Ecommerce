import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.svg'

const Navbar = ({ auth, profile, cart }) => {

    let [open, setOpen] = useState('')
    let [fadeLinks, setFadeLinks] = useState('')

    let handleHamburger = e => {
        if (open === '') {
            setOpen('open')
            setFadeLinks('fade')
        } else {
            setOpen('')
        }
    }

    return (
        <Fragment>
            {auth.isLoaded &&
                <nav>
                    <div className='hamburger' onClick={handleHamburger}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <ul className={`nav-links ${open}`} onClick={handleHamburger}>
                        <li className={fadeLinks}><NavLink to='/'>Accueil</NavLink></li>
                        <li className={fadeLinks}><NavLink to='/boutique'>Nos Produits</NavLink></li>
                        <img className='logo' src={logo} alt="logo"/>
                        <li className={fadeLinks}><NavLink to='/a-propos'>À Propos</NavLink></li>
                        {auth.uid ?
                            <li className={fadeLinks}><NavLink to='/mon-compte'>Mon Compte
                            <span className='right'>{cart.prodNumber}</span>
                            <i className="material-icons right">shopping_cart</i></NavLink></li>
                            :
                            <li className={fadeLinks}><NavLink to='/sign-in'>José</NavLink></li>
                        }
                    </ul>
                </nav>
            }
        </Fragment>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Navbar)
