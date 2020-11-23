import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PeopleResponse, Person } from '../interfaces';
import { PeopleTable } from '../components';

export const People: React.FC = () => {
  const [ people, setPeople ] = useState<{ [key: string]: Person}>({});

  const fetchPeople = async () => {
    try {
      return await axios.get('http://localhost:3000/api/v1/people');
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    fetchPeople().then((response: PeopleResponse) => {
      const peopleHash: { [key: string]: Person } = response.data.data.map(unmapped => {
        return {
          id: unmapped.id,
          firstName: unmapped.attributes.first_name,
          lastName: unmapped.attributes.last_name,
          email: unmapped.attributes.email,
          phone: unmapped.attributes.phone,
        }
      }).reduce((hash, person) => {
        return { ...hash, [person.id]: person };
      }, {});
      setPeople(peopleHash);
    });
  }, []);

  return (
    <>
      {!!Object.keys(people)
        ? <PeopleTable people={Object.values(people)} />
        : <div>No People found.</div>
      }
    </>
  );
}
