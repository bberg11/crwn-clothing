import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectAreCollectionsFetching, selectAreCollectionsLoaded } from '../../redux/shop/shop.selectors';

import Collection from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  };

  render() {
    const { match, areCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={!areCollectionsLoaded} { ...props } />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionWithSpinner isLoading={!areCollectionsLoaded} { ...props } />}
        />
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectAreCollectionsFetching,
  areCollectionsLoaded: selectAreCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
