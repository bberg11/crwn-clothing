import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => (
  <div className="checkout-item">
    <div className="checkout-item__image-container">
      <img
        className="checkout-item__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </div>
    <span className="checkout-item__name">{item.name}</span>
    <span className="checkout-item__quantity">
      <div className="checkout-item__arrow" onClick={() => removeItem(item)}>
        &#10094;
      </div>
      <span className="checkout-item__value">{item.quantity}</span>
      <div className="checkout-item__arrow" onClick={() => addItem(item)}>
        &#10095;
      </div>
    </span>
    <span className="checkout-item__price">{item.price}</span>
    <div
      className="checkout-item__remove-button"
      onClick={() => clearItem(item)}
    >
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
