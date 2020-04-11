import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { checkUserSession } from '../../redux/user/user.actions';
import { selectCurrentOrder } from '../../redux/orders/orders.selectors';

import Header from '../header/header.component';
import Spinner from '../spinner/spinner.component';
import ErrorBoundary from '../error-boundary/error-boundary.component';

import './app.styles.scss';

const Homepage = lazy(() => import('../../pages/homepage/homepage.component'));
const Shop = lazy(() => import('../../pages/shop/shop.component'));
const Checkout = lazy(() => import('../../pages/checkout/checkout.component'));
const Account = lazy(() => import('../../pages/account/account.component'));
const SignInAndSignUpPage = lazy(() =>
  import('../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const ConfirmationContainer = lazy(() =>
  import('../../pages/confirmation/confirmation.container')
);
const Order = lazy(() => import('../../pages/order/order.component'));

const App = ({ currentUser, currentOrder, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const signInRenderValue = () => {
    if (currentUser) {
      return <Redirect to="/" />;
    } else {
      return <SignInAndSignUpPage />;
    }
  };

  const accountRenderValue = () => {
    if (currentUser) {
      return <Account />;
    } else {
      return <SignInAndSignUpPage />;
    }
  };

  const confirmationRenderValue = () => {
    if (currentOrder) {
      return <ConfirmationContainer />;
    } else {
      return <Redirect to="/" />;
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/account" render={accountRenderValue} />
              <Route exact path="/sign-in" render={signInRenderValue} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                exact
                path="/confirmation"
                render={confirmationRenderValue}
              />
              <Route path="/orders/:orderId" component={Order} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentOrder: selectCurrentOrder,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
