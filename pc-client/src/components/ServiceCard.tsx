import React from 'react';
import { Service } from '../interfaces';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link to={`/services/${service.id}`}>
      <h2>{service.datetime.toDateString()} - {service.title}</h2>
      <h3>{service.datetime.toLocaleTimeString()}</h3>
    </Link>
  )
}