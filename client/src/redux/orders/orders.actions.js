import { OrdersActionTypes } from './orders.types';

export const saveOrderStart = (payment) => ({
  type: OrdersActionTypes.SAVE_ORDER_START,
  payload: payment,
});

export const saveOrderSuccess = () => ({
  type: OrdersActionTypes.SAVE_ORDER_SUCCESS,
});

export const saveOrderFailure = (error) => ({
  type: OrdersActionTypes.SAVE_ORDER_FAILURE,
  payload: error,
});

export const fetchOrdersStart = (userId) => ({
  type: OrdersActionTypes.FETCH_ORDERS_START,
  payload: userId,
});

export const fetchOrdersSuccess = (orders) => ({
  type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
  payload: orders,
});

export const fetchOrdersFailure = (error) => ({
  type: OrdersActionTypes.FETCH_ORDERS_FAILURE,
  payload: error,
});

export const setCurrentOrder = (order) => ({
  type: OrdersActionTypes.SET_CURRENT_ORDER,
  payload: order,
});
