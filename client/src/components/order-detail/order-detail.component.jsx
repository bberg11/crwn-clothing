import React from 'react';

import OrderSummary from '../order-summary/order-summary.component';

import './order-detail.styles.scss';

const date = (createdAt) => {
  if (typeof createdAt === 'object') {
    return new Date(createdAt.seconds * 1000).toLocaleDateString();
  } else {
    return new Date(createdAt).toLocaleDateString();
  }
};

const OrderDetail = ({ order }) => (
  <section className="order-detail">
    <OrderSummary items={order.cartItems} total={order.payment.total} />

    <h2 className="order-detail__title">
      Details (<a href={order.payment.receipt}>View Receipt</a>)
    </h2>
    <dl>
      <dt>Date: </dt>
      <dd>{date(order.createdAt)}</dd>
      <dt>Name: </dt>
      <dd>{order.payment.name}</dd>
      <dt>Payment: </dt>
      <dd>
        {order.payment.brand} ending in {order.payment.last4}
      </dd>
      <dt>Address: </dt>
      <dd>
        {order.payment.address_line1}
        <br />
        {order.payment.address_city}, {order.payment.address_state}{' '}
        {order.payment.address_zip}
      </dd>
    </dl>
  </section>
);

export default OrderDetail;
