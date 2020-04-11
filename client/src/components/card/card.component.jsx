import React from 'react';
import { Link } from 'react-router-dom';

import './card.styles.scss';

const Card = ({ order }) => (
  <Link className="card" to={`/orders/${order.id}`}>
    <h3 className="card__title">
      ${order.payment.total} on{' '}
      {new Date(order.createdAt.seconds * 1000).toLocaleDateString()}
    </h3>
  </Link>
);

export default Card;
