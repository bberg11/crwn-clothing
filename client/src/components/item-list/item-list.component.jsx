import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './item-list.styles.scss';

const ItemList = ({ items }) => (
  <div className="item-list__items">
    {items.map((item) => (
      <div className="item-list__item">
        <CollectionItem key={item.id} item={item} />
      </div>
    ))}
  </div>
);

export default ItemList;
