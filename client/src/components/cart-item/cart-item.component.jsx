import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt={item.name} className="cart-item__image" />
    <div className="cart-item__details">
      <p className="cart-item__name">{item.name}</p>
      <p className="cart-item__price">
        {item.quantity} x ${item.price}
      </p>
    </div>
  </div>
);

export default React.memo(CartItem);
