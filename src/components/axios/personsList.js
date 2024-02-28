import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    axios.get('https://api.restful-api.dev/objects')
      .then(res => {
        const persons = res.data;
        setPersons(persons);
      });
  }, []);
  console.log(persons)

  return (
    <ul>
      {
        persons
          .filter(person => person.id >=  2 && person.id <=  7)
          .map(person => (
            <li key={person.id}>{person.name}</li>
          ))
      }
    </ul>
  );
}
