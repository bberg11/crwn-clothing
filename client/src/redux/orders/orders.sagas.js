import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import { OrdersActionTypes } from './orders.types';
import {
  saveOrderSuccess,
  saveOrderFailure,
  fetchOrdersSuccess,
  fetchOrdersFailure,
} from './orders.actions';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from '../cart/cart.selectors';

import {
  firestore,
  createOrderDocument,
  convertOrdersSnapshotToMap,
} from '../../firebase/firebase.utils';

export function* pushOrderToFirebase({ payload: payment }) {
  const user = yield select(selectCurrentUser);
  const cartItems = yield select(selectCartItems);
  const order = yield {
    cartItems,
    payment,
  };

  try {
    yield call(createOrderDocument, user, order);
    yield put(saveOrderSuccess());
  } catch (error) {
    yield put(saveOrderFailure(error));
  }
}

export function* saveOrdersToUserState({ payload: userId }) {
  try {
    const ordersRef = firestore
      .collection('orders')
      .where('userId', '==', userId);
    const snapshot = yield ordersRef.get();
    const orders = yield call(convertOrdersSnapshotToMap, snapshot);

    yield put(fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(fetchOrdersFailure(error));
  }
}

export function* onSaveOrderStart() {
  yield takeLatest(OrdersActionTypes.SAVE_ORDER_START, pushOrderToFirebase);
}

export function* onFetchOrdersStart() {
  yield takeLatest(OrdersActionTypes.FETCH_ORDERS_START, saveOrdersToUserState);
}

export function* ordersSagas() {
  yield all([call(onSaveOrderStart), call(onFetchOrdersStart)]);
}
