import React from 'react';
import { Person } from '../interfaces';

interface PersonLayoutProps {
  person: Person;
}

export const PersonLayout: React.FC<PersonLayoutProps> = ({ person }) => {
  return (
    <>
      <h2>{person.firstName} {person.lastName}</h2>
      <div><strong>Email:</strong> {person.email}</div>
      <div><strong>Phone Number:</strong> {person.phone}</div>
    </>
  )
};
