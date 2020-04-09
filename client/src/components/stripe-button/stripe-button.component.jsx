import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jyzsWUAvRLVz4F7CrgCMitXd00519kwIz1';

  const onToken = (token) => {
    console.log(token);
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ' + JSON.parse(error));
        alert('There was an error with your payment');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing"
      shippingAddress
      billngAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
