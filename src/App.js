import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;

    checkUserSession();
  };

  signInRenderValue = () => {
    if (this.props.currentUser) {
      return <Redirect to="/" />;
    } else {
      return <SignInAndSignUpPage />;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/sign-in' render={this.signInRenderValue} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
