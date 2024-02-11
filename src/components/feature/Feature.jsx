import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="StartupLex__features-container__feature">
    <div className="StartupLex__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="StartupLex__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;