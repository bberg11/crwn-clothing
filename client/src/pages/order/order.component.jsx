import React from 'react';

import OrderDetail from '../../components/order-detail/order-detail.component';

import './order.styles.scss';

const Order = ({ match }) => (
  <section className="order">
    <h1 className="order__title">Order # {match.params.orderId}</h1>

    <OrderDetail orderId={match.params.orderId} />
  </section>
);

export default Order;
