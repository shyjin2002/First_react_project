import axios from "axios";
export default function PersonUpdate(){
    // const id = 7;
    const newData = {
      "name": "CSP ramesh",
      "data": {
         "year": 2019,
         "price": 2049.99,
         "CPU model": "Intel Core i9",
         "Hard disk size": "1 TB",
         "color": "silver"
      }
   }
    const handleSubmit = () => {
      // event.preventDefault();
      console.log("api hitted")
    axios.put('https://api.restful-api.dev/objects/ff8081818de9f8bf018deaec6e7d021e', newData)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })}

    return(
        <div>
        <form onClick={handleSubmit}>
          
          <button type="button">Update</button>
        </form>
      </div>
    )
}