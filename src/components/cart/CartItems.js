import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { fetchFromAPI } from '../../helpers';


const CartItems = ({ products, total, setCartStatus, auth, removeFormula, shift, setPaymentIntent }) => {

    //Create payment intent and go to next section
    let goPersonalInfos = async (event) => {
        let myTotal = total * 100
        if ((myTotal > 50) || (myTotal < 9999999)) {
            const pi = await fetchFromAPI('payments', { body: { amount: total * 100 } });
            setPaymentIntent(pi);
            setCartStatus({ intent: false, payment: true })
        } else {
            alert('Prix trop élevé / bas')
        }
        setCartStatus({ init: false, addressInfo: true })

    }


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
                <button onClick={goPersonalInfos}>Valider la Commande</button>
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
