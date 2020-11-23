import React from 'react';
import { Service } from '../interfaces';

interface ServiceLayoutParams {
  service: Service;
}

export const ServiceLayout: React.FC<ServiceLayoutParams> = ({service}) => {
  return (
    <>
      <h2>{service.title}</h2>
      <h3>{service.datetime.toLocaleString()}</h3>
      <br />
      <h4>Positions</h4>
      <p>
        This is where positions go.
      </p>
    </>
  );
};
