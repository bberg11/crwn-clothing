import { createSelector } from 'reselect';

const selectOrders = (state) => state.orders;

export const selectCurrentOrder = createSelector(
  [selectOrders],
  (orders) => orders.currentOrder
);

export const selectOrderHistory = createSelector(
  [selectOrders],
  (orders) => orders.orderHistory
);

export const selectOrder = (id) =>
  createSelector([selectOrderHistory], (orderHistory) =>
    orderHistory.find((order) => order.id === id)
  );
