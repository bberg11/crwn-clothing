import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectOrderHistory } from '../../redux/orders/orders.selectors';

import Card from '../card/card.component';

import './order-history.styles.scss';

const OrderHistory = ({ orders }) => (
  <section className="order-history">
    <h2 className="order-history__title">Order History</h2>
    <div className="order-history__orders">
      {orders.length ? (
        orders
          .reverse()
          .map((order, index) => <Card order={order} key={index} />)
      ) : (
        <p>No orders</p>
      )}
    </div>
  </section>
);

const mapStateToProps = createStructuredSelector({
  orders: selectOrderHistory,
});

export default connect(mapStateToProps)(OrderHistory);
