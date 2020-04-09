import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout">
    <div className="checkout__header">
      <div className="checkout__header-cell">
        <span>Product</span>
      </div>
      <div className="checkout__header-cell">
        <span>Description</span>
      </div>
      <div className="checkout__header-cell">
        <span>Quantity</span>
      </div>
      <div className="checkout__header-cell">
        <span>Price</span>
      </div>
      <div className="checkout__header-cell">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}

    <div className="checkout__total">TOTAL: ${total}</div>

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
