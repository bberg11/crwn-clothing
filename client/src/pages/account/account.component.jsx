import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import OrderHistoryContainer from '../../components/order-history/order-history.container';

import './account.styles.scss';

const Account = ({ currentUser }) => (
  <section className="account">
    <h1 className="account__title">Account</h1>
    <p className="account__sub-title">Welcome, {currentUser.displayName}</p>

    <OrderHistoryContainer />
  </section>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Account);
