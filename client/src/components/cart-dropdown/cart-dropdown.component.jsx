import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

class CartDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.cartDropdownRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    const { dispatch } = this.props;
    const dropdown = this.cartDropdownRef.current;
    const clickedElement = event.target;

    if (!dropdown.contains(clickedElement)) {
      dispatch(toggleCartHidden());
    }
  };

  render() {
    const { cartItems, history, dispatch } = this.props;

    return (
      <div className="cart-dropdown" ref={this.cartDropdownRef}>
        <div className="cart-dropdown__items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="cart-dropdown__empty">Your cart is empty</span>
          )}
        </div>
        <div className="cart-dropdown__action">
          <Button
            className="button button--full-width"
            onClick={() => {
              history.push('/checkout');
              dispatch(toggleCartHidden());
            }}
          >
            GO TO CHECKOUT
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
