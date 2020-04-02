import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = (props) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${props.item.imageUrl})`
      }}
    ></div>
    <div className="collection-footer">
      <span className="name">{props.item.name}</span>
      <span className="price">{props.item.price}</span>
    </div>
    <CustomButton inverted>
        Add to cart
      </CustomButton>
  </div>
);

export default CollectionItem;
