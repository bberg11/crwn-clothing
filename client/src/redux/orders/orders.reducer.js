import { OrdersActionTypes } from './orders.types';
import { UserActionTypes } from '../user/user.types';

const INITITAL_STATE = {
  orderHistory: null,
  currentOrder: null,
};

const OrdersReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orderHistory: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        orderHistory: null,
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
