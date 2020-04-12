import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentOrder } from '../../redux/orders/orders.selectors';

import OrderDetail from '../../components/order-detail/order-detail.component';

import './confirmation.styles.scss';

const Confirmation = ({ currentOrder }) => (
  <section className="confirmation">
    <h1 className="confirmation__title">Thank you for your order!</h1>

    <OrderDetail order={currentOrder} />
  </section>
);

const mapStateToProps = createStructuredSelector({
  currentOrder: selectCurrentOrder,
});

export default connect(mapStateToProps)(Confirmation);
