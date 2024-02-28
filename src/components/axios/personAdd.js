import { useState } from 'react'
import axios from 'axios';

export default function PersonAdd() {
const [name, setName] = useState();

  const handleChange = event => {
    setName({ name: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();


    axios.post(`https://api.restful-api.dev/objects`, {
      "name": "Apple MacBook Pro 16",
      "data": {
         "year": 2019,
         "price": 1849.99,
         "CPU model": "Intel Core i9",
         "Hard disk size": "1 TB"
      }
   })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
