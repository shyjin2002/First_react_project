import PersonList from './personsList';
import PersonAdd from './personAdd';
import PersonDelete from './person_delete';
import PersonUpdate from './person_update';

export default function Axios() {

  return (
    <>
    <PersonAdd/>
    <PersonDelete/>
    <PersonUpdate/>
    <PersonList /></>

  );

}