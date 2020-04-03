import SHOP_DATA from './shop.data';

const INITITAL_STATE = {
  collections: SHOP_DATA
};

const ShopReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default ShopReducer;
