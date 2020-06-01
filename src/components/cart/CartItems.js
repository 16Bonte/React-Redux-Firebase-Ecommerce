import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const CartItems = ({ products, total, setCartStatus, auth, removeFormula, shift }) => {

    let goPersonalInfos = () => {setCartStatus({ init: false, addressInfo: true })}


    return (
        <div>
            <h3>Pannier</h3>
            <h4>Livraison le {shift.day} à {shift.hour}</h4>
            {products.map((item, i) => {
                if (item) {
                   return <CartItem key={i} index={i} item={item} removeFormula={removeFormula} />
                }
                return null
            })}
            <h2>Total: {total.toFixed(2)} €</h2>
            {auth.uid ?
                <button onClick={goPersonalInfos}>Infos Livraisons</button>
                :
                <Fragment>
                    <button onClick={goPersonalInfos}>Continuer sans compte</button>
                    <button><Link to='/signin'>Se Connecter</Link> </button>
                    <button><Link to='/signup'>Créer un compte</Link> </button>
                </Fragment>
            }
        </div>
    )
}

export default CartItems
