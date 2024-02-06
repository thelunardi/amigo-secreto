import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles.css';

const Card: React.FC = ({ children }) => {
  return (
    <div className="card">
      {children}      
    </div>
  );
};

export default Card;
