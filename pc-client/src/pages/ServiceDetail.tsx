import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Service, ServiceResponse } from '../interfaces';
import axios from 'axios';
import { ServiceLayout } from '../components';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ service, setService ] = useState<Service>({} as Service);

  const fetchService = async () => {
    try {
      return await axios.get(`http://localhost:3000/api/v1/services/${id}`);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchService().then((response: ServiceResponse) => {
      const data = response.data.data;
      const mappedService: Service = {
        id: data.id,
        title: data.attributes.title,
        datetime: new Date(data.attributes.datetime)
      };
      console.log(data)
      setService(mappedService);
    });
  }, []);

  return (
    <>
      {!!service.hasOwnProperty('id')
        ? <ServiceLayout service={service} />
        : <div>No service found.</div>
      }
    </>
  );
};
