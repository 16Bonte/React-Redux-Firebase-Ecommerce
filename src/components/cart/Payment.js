import React, { Fragment } from 'react';
import RecapInfos from './RecapInfos'
import RecapItems from './recapItems'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


let Payments = ({ paymentIntent, setPaymentIntent, products, total, setCartStatus, auth, cart, userInfo, shift, addToPastOrders }) => {

  let stripe = useStripe();
  let elements = useElements();

  let cardElementOpts = { hidePostalCode: true }

  let pay = async (event) => {
    event.preventDefault();
    let cardElement = elements.getElement(CardElement);
    // Confirm Card Payment
    let {
      paymentIntent: updatedPaymentIntent,
      error,
    } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
      payment_method: { card: cardElement },
    });

    if (error) {
      console.error(error);
      error.payment_intent && setPaymentIntent(error.payment_intent);
    } else {
      console.log(updatedPaymentIntent)
      setPaymentIntent(updatedPaymentIntent);
        // format formula list - we use index to add or remove some so it makes undefined arrays - not ok with firebase
      let myProducts = []
      products.forEach(product => {
        if (product) myProducts.push(product)
      })
      
      let data = {
        myOrder: {
          products: myProducts,
          total: cart.total,
          shift: cart.shift.formatedDay
        },
        userId: auth.uid
      }
      console.log(data)
      addToPastOrders(data)
      // NEED TO SEND CONFIRMATION MAIL !!!!!!!!!!!
    }
  };

  return (
    <Fragment>
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
      <form onSubmit={pay}>
        <CardElement options={cardElementOpts} />
        <button type="submit">
          Pay
        </button>
      </form>
    </Fragment>
  );
}

export default Payments