import React from 'react';
import { Service } from '../interfaces';
import { ServiceCard } from './ServiceCard';

interface ServiceListParams {
  services: Service[];
}

export const ServiceList: React.FC<ServiceListParams> = ({ services }) => {
  return (
    <>
      {services.map(service =>
        <ServiceCard key={service.id} service={service} />
      )}
    </>
  );
};
