import React from 'react';
import './styles.css';

const Card = ({ title, content, footer }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
