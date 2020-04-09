import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { checkUserSession } from '../../redux/user/user.actions';

import Header from '../header/header.component';
import Spinner from '../spinner/spinner.component';
import ErrorBoundary from '../error-boundary/error-boundary.component';

import './app.styles.scss';

const Homepage = lazy(() => import('../../pages/homepage/homepage.component'));
const Shop = lazy(() => import('../../pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
  import('../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const Checkout = lazy(() => import('../../pages/checkout/checkout.component'));

const App = ({ currentUser, checkUserSession }) => {
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

  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/sign-in" render={signInRenderValue} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
