import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = ({ auth, profile }) => {

    let links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

    return (
        <Fragment>
            {auth.isLoaded &&
                <nav className="nav-wrapper black">
                    <div className="container">
                        <Link to='/' className='brand-logo'>LesSlipsDeMonPère</Link>
                        {links}
                    </div>
                </nav>
            }
        </Fragment>
    )
}

let mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
