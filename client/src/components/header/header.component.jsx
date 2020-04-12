import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartButton from '../cart-button/cart-button.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, cartIsHidden, signOutStart, history }) => (
  <div className="header">
    <Link className="header__logo-wrap" to="/">
      <Logo className="header__logo" />
    </Link>
    <ul className="header__utilities">
      <li className="header__utility-item">
        <Link className="header__utility-link" to="/shop">
          Shop
        </Link>
      </li>

      <li className="header__utility-item">
        <Link className="header__utility-link" to="/account">
          Account
        </Link>
        {currentUser ? (
          <button
            type="button"
            className="header__log-out"
            onClick={() => {
              history.push('/account');
              signOutStart();
            }}
          >
            &nbsp; (Sign Out)
          </button>
        ) : null}
      </li>

      <li className="header__utility-item">
        <CartButton />
      </li>
    </ul>
    {cartIsHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartIsHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
