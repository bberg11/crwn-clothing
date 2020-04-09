import React from 'react';
import { connect } from 'react-redux';

import { addItem, toggleCartHidden } from '../../redux/cart/cart.actions';

import Button from '../button/button.component';

import './collection-item.styles.scss';

const handleAddItemClick = (addItem, item, toggleCartHidden) => {
  addItem(item);
  toggleCartHidden();

  setTimeout(() => {
    toggleCartHidden();
  }, 5000);
};

const CollectionItem = ({ item, addItem, toggleCartHidden }) => (
  <div className="collection-item">
    <div
      className="collection-item__image"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    />
    <div className="collection-item__info">
      <p className="collection-item__name">{item.name}</p>
      <p className="collection-item__price">{item.price}</p>
    </div>
    <div className="collection-item__add-to-cart">
      <Button
        onClick={() => handleAddItemClick(addItem, item, toggleCartHidden)}
        className="button button--full-width button--inverted"
      >
        Add to cart
      </Button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
