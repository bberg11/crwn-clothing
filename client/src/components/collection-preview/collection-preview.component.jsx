import React from 'react';

import ItemList from '../../components/item-list/item-list.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ collection }) => {
  const items = collection.items.filter((item, index) => index < 4);

  return (
    <section className="collection-preview">
      <h1 className="collection-preview__title">{collection.title}</h1>
      <ItemList items={items} />
    </section>
  );
};

export default CollectionPreview;
