import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentOrder } from '../../redux/orders/orders.selectors';

import './confirmation.styles.scss';

const Confirmation = ({ currentOrder }) => {
  const { cartItems, payment } = currentOrder;

  return (
    <section className="confirmation">
      <h1 className="confirmation__title">Thank you for your order!</h1>

      <h2 className="confirmation__sub-title">Order Details</h2>
      {console.log(cartItems)}

      <h2 className="confirmation__sub-title">Payment Details</h2>
      {console.log(payment)}
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  currentOrder: selectCurrentOrder,
});

export default connect(mapStateToProps)(Confirmation);
