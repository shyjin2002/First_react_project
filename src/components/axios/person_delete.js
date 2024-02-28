import { useState } from 'react'
import axios from 'axios';

export default function PersonDelete(){
    const [id, setId] = useState();

    const handleChange = event => {
        setId(event.target.value );
      }

      const handleSubmit = event => {
        event.preventDefault();
    
    
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
      }
    return(
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            Id :
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )

}