import React from 'react';

import './button.styles.scss';

const classes = (modifiers) => {
  if (modifiers) {
    return `button ${modifiers}`;
  }

  return 'button';
};

const Button = ({ children, modifiers, ...otherProps }) => (
  <button className={classes(modifiers)} {...otherProps}>
    {children}
  </button>
);

export default Button;
