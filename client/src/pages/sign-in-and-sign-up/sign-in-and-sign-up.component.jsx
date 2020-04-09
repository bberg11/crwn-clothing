import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <div className="sign-in-and-sign-up__cell">
      <SignIn />
    </div>
    <div className="sign-in-and-sign-up__cell">
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;
