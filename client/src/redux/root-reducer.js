import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import DirectoryReducer from './directory/directory.reducer';
import ShopReducer from './shop/shop.reducer';
import OrdersReducer from './orders/orders.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'orders'],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer,
  orders: OrdersReducer,
});

export default persistReducer(persistConfig, rootReducer);
