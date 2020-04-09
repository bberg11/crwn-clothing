import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import ItemList from '../../components/item-list/item-list.component';

import './collection.styles.scss';

const Collection = ({ collection }) => (
  <section className="collection-page">
    <h1 className="collection-page__title">{collection.title}</h1>
    <ItemList items={collection.items} />
  </section>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
