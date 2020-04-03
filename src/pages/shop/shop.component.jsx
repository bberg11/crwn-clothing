import React from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import Collection from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionsRef = firestore.collection('collections');

    collectionsRef.onSnapshot(async (snapshot) => {
      console.log(convertCollectionsSnapshotToMap(snapshot));
    });
  };

  componentWillUnmount() {

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

export default Shop;
