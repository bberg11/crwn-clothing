import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';

import './cart-button.styles.scss';

const CartButton = ({ toggleCartHidden, itemCount }) => (
  <button type="button" className="cart-button" onClick={toggleCartHidden}>
    <Icon className="cart-button__icon" />
    <span className="cart-button__count">{itemCount}</span>
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
