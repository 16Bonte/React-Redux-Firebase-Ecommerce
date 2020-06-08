import React from 'react'

class StripeBtn extends React.Component {
  componentDidMount() {
    // Publishable Key from Stripe Dashboard
    const stripe =    window.Stripe(process.env.REACT_APP_PUBLISHABLE_KEY);
    const paymentBtn = document.getElementById('stripe-payment-btn');
    let sessionId;
    paymentBtn.addEventListener('click', () => {
      let orderData = {
      currency: 'EUR',
      quantity: 1,
      amount: 10,
      name: 'Some product',
      description: 'Product description',
      image: '',
      customerEmail: 'customer@email.com',
      clientId: '12345'
    }
    // Url to Firebase function
    fetch('https://ecompattern-8d9be.cloudfunctions.net/createOrderAndSession/', {
      method: 'POST',
      // Adding the order data to payload
      body: JSON.stringify(orderData)
      }).then(response => {
        return response.json();
      }).then(data => {
        // Getting the session id from firebase function
        var body = JSON.parse(data.body);
        return sessionId = body.sessionId;
      }).then(sessionId => {
        // Redirecting to payment form page
        stripe.redirectToCheckout({
          sessionId: sessionId
        }).then(function (result) {
          result.error.message
        });
      });
    });
  }
  render() {
    return <div id='stripe-payment-btn'>Checkout with Stripe</div>
  }
}
export default StripeBtn;