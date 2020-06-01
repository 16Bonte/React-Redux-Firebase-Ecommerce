import React from 'react'
import RecapInfos from './RecapInfos'
import RecapItems from './recapItems'


const Payment = ({ products, total, setCartStatus, auth, cart, userInfo, shift }) => {

    let online = () => {

    }

    let cash = () => {
        
    }

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
            <button onClick={online}>Paiement en ligne</button>
            <button onClick={cash}>Paiement en espèce</button>
        </div>
    )
}

export default Payment
