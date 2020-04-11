import React from 'react';

import LineItem from '../line-item/line-item.component';

import './order-summary.styles.scss';

const OrderSummary = ({ items, total }) => (
  <div className="order-summary">
    <div className="order-summary__header">
      <div className="order-summary__header-cell">
        <span>Product</span>
      </div>
      <div className="order-summary__header-cell">
        <span>Description</span>
      </div>
      <div className="order-summary__header-cell">
        <span>Quantity</span>
      </div>
      <div className="order-summary__header-cell">
        <span>Price</span>
      </div>
      <div className="order-summary__header-cell">
        <span>Remove</span>
      </div>
    </div>

    {items.map((cartItem) => (
      <LineItem key={cartItem.id} item={cartItem} />
    ))}

    <div className="order-summary__total">TOTAL: ${total}</div>
  </div>
);

export default OrderSummary;
