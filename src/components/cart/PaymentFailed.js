import React from 'react'

const PaymentFailed = ({setCartStatus}) => {

    let tryAgain = () => setCartStatus({paymentFailed: false, init: true})

    return (
        <div>
            <h3>Le paiement a échouer</h3>
            <button onClick={tryAgain}></button>
        </div>
    )
}

export default PaymentFailed
