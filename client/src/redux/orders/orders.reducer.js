import { OrdersActionTypes } from './orders.types';
import { UserActionTypes } from '../user/user.types';

const INITITAL_STATE = {
  orderHistory: null,
  currentOrder: null,
  currentOrderIsSaving: false,
  orderHistoryIsFetching: false,
};

const OrdersReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case OrdersActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        orderHistoryIsFetching: true,
      };
    case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orderHistory: action.payload,
        orderHistoryIsFetching: false,
      };
    case OrdersActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        orderHistoryIsFetching: false,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        orderHistory: null,
      };
    case OrdersActionTypes.SAVE_ORDER_START:
      return {
        ...state,
        currentOrderIsSaving: true,
      };
    case OrdersActionTypes.SAVE_ORDER_SUCCESS:
    case OrdersActionTypes.SAVE_ORDER_FAILURE:
      return {
        ...state,
        currentOrderIsSaving: false,
      };
    case OrdersActionTypes.SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload,
      };
    default:
      return state;
  }
};

export default OrdersReducer;
