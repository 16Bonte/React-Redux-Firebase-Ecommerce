import React, {useState} from 'react'
import circles from './circles.svg'

const Nav = () => {

    let [open, setOpen] = useState('') 
    let [fadeLinks, setFadeLinks] = useState('') 

    let handleHamberger = e => {
        if (open === '') {
            setOpen('open')
            setFadeLinks('fade')
        } else {
            setOpen('')
        }
    }

    return (
        <div>
            <div>
                <div className='hamburger' onClick={handleHamberger}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className={`nav-links ${open}` }>
                    <li className={fadeLinks}><a href="#">About</a></li>
                    <li className={fadeLinks}><a href="#">Contact</a></li>
                    <li className={fadeLinks}><a href="#">Projects</a></li>
                </ul>
            </div>
            <section className="landing">
                <img src={circles} alt="dots" />
                <h1>Dots</h1>
            </section>
        </div>
    )
}

export default Nav
