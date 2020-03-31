import React from 'react';

import './menu-item.styles.scss';

const MenuItem = (props) => (
  <div
    style={{
      backgroundImage: `url(${props.section.imageUrl})`
    }}
    className={`menu-item${props.section.large ? " large" : ""}`}
  >
    <div className="content">
      <h1 className="title">{ props.section.title }</h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
