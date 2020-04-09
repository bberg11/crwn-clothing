import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartButton from '../cart-button/cart-button.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
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
        {currentUser ? (
          <button
            type="button"
            className="header__utility-link"
            onClick={signOutStart}
          >
            Sign Out
          </button>
        ) : (
          <Link className="header__utility-link" to="/sign-in">
            Sign In
          </Link>
        )}
      </li>

      <li className="header__utility-item">
        <CartButton />
      </li>
    </ul>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
