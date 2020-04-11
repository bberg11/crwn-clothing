import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { saveOrderStart } from '../../redux/orders/orders.actions';

const StripeButton = ({ price, saveOrderStart, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_jyzsWUAvRLVz4F7CrgCMitXd00519kwIz1';

  const onToken = (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(({ data: { success } }) => {
        const payment = {
          ...success.source,
          receipt: success.receipt_url,
          total: price,
        };

        saveOrderStart(payment);
        history.push('/confirmation');
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

const mapDispatchToProps = (dispatch) => ({
  saveOrderStart: (payment) => dispatch(saveOrderStart(payment)),
});

export default withRouter(connect(null, mapDispatchToProps)(StripeButton));
