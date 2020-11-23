import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Person, PersonResponse } from '../interfaces';
import { PersonLayout } from '../components';

export const PersonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ person, setPerson ] = useState<Person>({} as Person);

  const fetchPerson = async () => {
    try {
      return await axios.get(`http://localhost:3000/api/v1/people/${id}`);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    fetchPerson().then((response: PersonResponse) => {
      const { data } = response.data;
      const mappedPerson: Person = {
        id: data.id,
        firstName: data.attributes.first_name,
        lastName: data.attributes.last_name,
        email: data.attributes.email,
        phone: data.attributes.phone
      };
      setPerson(mappedPerson);
    });
  }, [])

  return (
    <>
      {!!person.hasOwnProperty('id')
        ? <PersonLayout person={person} />
        : <div>No person found.</div>
      }
    </>
  );
};
