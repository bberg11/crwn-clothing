import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';

import { UserActionTypes } from '../user/user.types';
import { selectCurrentUser } from '../user/user.selectors';
import { CartActionTypes } from './cart.types';
import { selectCartItems } from './cart.selectors';
import { setCartFromFirebase } from './cart.actions';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* pullCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();

  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* pushCartToFirebase() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, pullCartFromFirebase);
}

export function* onCartUpdate() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ],
    pushCartToFirebase
  );
}

export function* cartSagas() {
  yield all([call(onSignOut), onSignIn(), onCartUpdate()]);
}
