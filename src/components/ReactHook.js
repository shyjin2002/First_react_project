import { useForm } from 'react-hook-form';
import './styles/Reacthook.css';

function Reacthook() {

  function demoFormData(data) {
    console.log(data);
  }
  const { register, formState: { errors }, handleSubmit } = useForm()
  return (
    <>

      <center>
        <h1>Registeration Form</h1>
        <form onSubmit={handleSubmit(demoFormData)}>
          <table className='table'>
            <tbody>
              <tr>
                <td>
                  <p>Full Name:</p>
                </td>
                <td>
                  <input type="text"  {...register("Name", { valueAsNumber: false, })} />

                </td>
              </tr>
              <tr>
                <td>
                  <p>Father's Name:</p>
                </td>
                <td>
                  <input type="text"  {...register("Father Name", { pattern: /^[A-Za-z]+$/i })} />

                </td>
              </tr>
              <tr>
                <td>
                  <p>Mothers's Name:</p>
                </td>
                <td>
                  <input type="text"  {...register("Mother Name", { pattern: /^[A-Za-z]+$/i })} />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Address:</p>
                </td>
                <td>
                  <textarea name="comment"{...register("Address")}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Email:</p>
                </td>
                <td>
                  <input type="text"  {...register("mail",)}
                    aria-invalid={errors.mail ? "true" : "false"} />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Mobile No:</p>
                </td>
                <td>
                  <input type="number"  {...register("Mobile number",)} />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Date of Birth:</p>
                </td>
                <td>
                  <input type="date"  {...register("DOB",)} />
                </td>
              </tr>

              <tr>
                <td>
                  <p>Caste:</p>
                </td>
                <td>
                  <select {...register("caste")}>
                    <option value="BC">BC</option>
                    <option value="SC">SC</option>
                    <option value="OBC">OBC</option>
                    <option value="MBC">MBC</option>
                    <option value="ST">ST</option>

                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Gender:</p>
                </td>
                <td>
                  <input type="text"  {...register("Gender",)} />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Course:</p>
                </td>
                <td>
                  <input type="text"  {...register("Course",)} />
                </td>
              </tr>
            </tbody>



          </table>
          <button type='submit'>submit</button>

        </form>
      </center>

    </>


  );

}
export default Reacthook;