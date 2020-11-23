import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ServicesResponse, Service } from '../interfaces';
import { ServiceForm, ServiceList } from '../components';

export const Services: React.FC = () => {
  const [services, setServices] = useState<{ [key: string]: Service }>({});

  const fetchServices = async () => {
    try {
      return await axios.get('http://localhost:3000/api/v1/services');
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    fetchServices().then((response: ServicesResponse) => {
      const serviceHash = response.data.data.map(unmapped => {
        return {
          id: unmapped.id,
          title: unmapped.attributes.title,
          datetime: new Date(unmapped.attributes.datetime)
        } as Service;
      }).reduce((hash, ser) => {
        return { ...hash, [ser.id]: ser };
      }, {});
      setServices(serviceHash);
    });
  }, []);

  return (
    <div className="services">
      <div>
        {!!Object.keys(services)
          ? <ServiceList services={Object.values(services)} />
          : <div>No services found.</div>
        }
      </div>
      {/* <ServiceForm /> */}
    </div>
  )
}
