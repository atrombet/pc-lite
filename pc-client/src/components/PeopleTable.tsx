import React from 'react';
import { Person } from '../interfaces';
import { Link } from 'react-router-dom';

interface PeopleTableProps {
  people: Person[];
}

export const PeopleTable: React.FC<PeopleTableProps> = ({ people }) => {
  return (
    <table className="peopleTable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {people.map(person => 
          <tr key={person.id}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.email}</td>
            <td>{person.phone}</td>
            <td><Link to={`/people/${person.id}`}><button>View</button></Link></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}