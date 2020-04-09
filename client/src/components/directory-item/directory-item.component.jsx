import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = (props) => (
  <Link
    to={`${props.match.url}${props.section.linkUrl}`}
    className={`directory-item${
      props.section.large ? ' directory-item--large' : ''
    }`}
  >
    <div
      className="directory-item__image"
      style={{
        backgroundImage: `url(${props.section.imageUrl})`,
      }}
    ></div>
    <div className="directory-item__content">
      <h1 className="directory-item__title">{props.section.title}</h1>
      <p className="directory-item__subtitle">Shop Now</p>
    </div>
  </Link>
);

export default withRouter(DirectoryItem);
