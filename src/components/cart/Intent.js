import React from 'react'
import RecapInfos from './RecapInfos'
import RecapItems from './recapItems'
import { fetchFromAPI } from '../../helpers';


const Payment = ({ products, total, setCartStatus, auth, cart, userInfo, shift, setPaymentIntent }) => {


    const createPaymentIntent = async (event) => {

        // Clamp amount to Stripe min/max
        // const validAmonut = Math.min(Math.max(amount, 50), 9999999);
        // setAmount(validAmonut);
        // 
        let myTotal = total * 100
        if ((myTotal > 50) || (myTotal < 9999999)) {
            const pi = await fetchFromAPI('payments', { body: { amount: total * 100 } });
            setPaymentIntent(pi);
            setCartStatus({ intent: false, payment: true })
        } else {
            alert('Prix trop élevé / bas')
        }

    };



    return (
        <div>
            <h4>Recupitualtif:</h4>
            <RecapInfos
                products={products}
                userInfo={userInfo}
                shift={shift}
            />
            <h5>Produits:</h5>
            <RecapItems
                products={products}
                total={total}
                setCartStatus={setCartStatus}
                auth={auth}
            />
            <button onClick={createPaymentIntent}>Payer {total}</button>
        </div>
    )
}

export default Payment