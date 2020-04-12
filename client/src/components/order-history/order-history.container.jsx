import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectOrderHistory } from '../../redux/orders/orders.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';
import OrderHistory from '../order-history/order-history.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectOrderHistory(state),
});

const OrderHistoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(OrderHistory);

export default OrderHistoryContainer;
