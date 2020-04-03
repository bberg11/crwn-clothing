import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import Collection from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionsRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async (snapshot) => {
      this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot));
      this.setState({ isLoading: false });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  };

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.isLoading} { ...props } />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionWithSpinner isLoading={this.state.isLoading} { ...props } />}
        />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(Shop);
