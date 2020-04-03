import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import Collection from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionsRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async (snapshot) => {
      this.props.updateCollections(convertCollectionsSnapshotToMap(snapshot));
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  };

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(Shop);
