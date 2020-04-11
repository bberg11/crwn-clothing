import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import './line-item.styles.scss';

const LineItem = ({ item, clearItem, addItem, removeItem }) => (
  <div className="line-item">
    <div className="line-item__image-container">
      <img className="line-item__image" src={item.imageUrl} alt={item.name} />
    </div>
    <span className="line-item__name">{item.name}</span>
    <span className="line-item__quantity">
      <div className="line-item__arrow" onClick={() => removeItem(item)}>
        &#10094;
      </div>
      <span className="line-item__value">{item.quantity}</span>
      <div className="line-item__arrow" onClick={() => addItem(item)}>
        &#10095;
      </div>
    </span>
    <span className="line-item__price">{item.price}</span>
    <div className="line-item__remove-button" onClick={() => clearItem(item)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(LineItem);
