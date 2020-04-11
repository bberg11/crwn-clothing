import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentOrderIsSaving } from '../../redux/orders/orders.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Confirmation from './confirmation.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCurrentOrderIsSaving,
});

const ConfirmationContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Confirmation);

export default ConfirmationContainer;
