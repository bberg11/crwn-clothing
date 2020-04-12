import React from 'react';
import { connect } from 'react-redux';

import { selectOrder } from '../../redux/orders/orders.selectors';

import OrderDetail from '../../components/order-detail/order-detail.component';

import './order.styles.scss';

const Order = ({ order }) => (
  <section className="order">
    <h1 className="order__title">Order # {order.id}</h1>

    <OrderDetail order={order} />
  </section>
);

const mapStateToProps = (state, ownProps) => ({
  order: selectOrder(ownProps.match.params.orderId)(state),
});

export default connect(mapStateToProps)(Order);
