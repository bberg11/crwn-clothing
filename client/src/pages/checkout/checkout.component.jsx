import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import OrderSummary from '../../components/order-summary/order-summary.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout">
    <OrderSummary items={cartItems} total={total} />

    <div className="checkout__payment-message">
      *See{' '}
      <a
        href="https://stripe.com/docs/testing"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://stripe.com/docs/testing
      </a>{' '}
      for test credentials*
    </div>

    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
